import addressOptions from "@/data/addressOptions.json";
import formOptions from "@/data/formOptions.json";
import { useApplicationForm } from "@/hooks/useApplicationForm";
import { useRouter } from "next/compat/router";
import { useEffect, useMemo, useRef, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ERROR_PULSE_DURATION = 400;
const SUCCESS_GLOW_DURATION = 600;

const ApplicationForm = () => {
  const {
    formValues,
    errors,
    isValid,
    isSubmitting,
    submitSuccess,
    submitError,
    onChange,
    onFileChange,
    onRemoveFile,
    onFormSubmit,
    resetForm,
    getFieldError,
    onEmailBlur,
    emailValidation,
    isEmailValidating,
  } = useApplicationForm();

  const router = useRouter();
  const [dragActive, setDragActive] = useState(false);
  // Track selected country for address
  const [selectedCountry, setSelectedCountry] = useState(
    formValues.address.country || "United States"
  );
  const [errorPulse, setErrorPulse] = useState({});
  const errorPulseTimeouts = useRef({});
  const [successGlow, setSuccessGlow] = useState({});
  const successGlowTimeouts = useRef({});
  const [fileUploadState, setFileUploadState] = useState("idle"); // idle, hover, dragover, success, error
  const [formProgress, setFormProgress] = useState(0);
  //

  // Helper to trigger error pulse for a field
  const triggerErrorPulse = (field) => {
    setErrorPulse((prev) => ({ ...prev, [field]: true }));
    if (errorPulseTimeouts.current[field]) {
      clearTimeout(errorPulseTimeouts.current[field]);
    }
    errorPulseTimeouts.current[field] = setTimeout(() => {
      setErrorPulse((prev) => ({ ...prev, [field]: false }));
    }, ERROR_PULSE_DURATION);
  };

  // Helper to trigger success glow for a field
  const triggerSuccessGlow = (field) => {
    setSuccessGlow((prev) => ({ ...prev, [field]: true }));
    if (successGlowTimeouts.current[field]) {
      clearTimeout(successGlowTimeouts.current[field]);
    }
    successGlowTimeouts.current[field] = setTimeout(() => {
      setSuccessGlow((prev) => ({ ...prev, [field]: false }));
    }, SUCCESS_GLOW_DURATION);
  };

  // Calculate form completion progress
  const calculateProgress = () => {
    const requiredFields = [
      "studentName.first",
      "studentName.last",
      "studentEmail",
      "studentCell",
      "birthDate",
      "gender",
      "risingGrade",
      "currentSchoolName",
      "yearApplyingFor",
      "tshirtSize",
      "pricingTier",
      "address.country",
      "address.address1",
      "address.city",
      "address.state",
      "address.zip",
      "sessions",
      "sports",
      "parentName.first",
      "parentName.last",
      "parentEmail",
      "parentPhone",
      "financialAidInterest",
      "airportPickup",
      "hearAboutUs",
      "photoPermission",
      "allergiesOrMedicalCare",
      "depositConfirmation",
    ];

    const completedFields = requiredFields.filter((field) => {
      if (field.includes(".")) {
        const [parent, child] = field.split(".");
        return (
          formValues[parent] &&
          formValues[parent][child] &&
          !getFieldError(field)
        );
      }
      return formValues[field] && !getFieldError(field);
    }).length;

    return Math.round((completedFields / requiredFields.length) * 100);
  };

  // Update progress when form values change
  useEffect(() => {
    const progress = calculateProgress();
    setFormProgress(progress);
  }, [formValues]);

  // When a submit error occurs, ensure the error banner is in view and focused
  useEffect(() => {
    if (submitError) {
      const el = document.getElementById('form-error-banner');
      if (el && typeof el.scrollIntoView === 'function') {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (typeof el.focus === 'function') {
          el.focus();
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [submitError]);

  // On blur, pulse if error
  const handleBlur = (e) => {
    const field = e.target.name;
    if (getFieldError(field)) {
      triggerErrorPulse(field);
    } else if (e.target.value && e.target.value.trim() !== "") {
      // Field has value and no error - show success
      triggerSuccessGlow(field);
    }
    // onBlur handler was removed during Story 2.1 revert
  };

  // Enhanced email blur handler
  const handleEmailBlur = (e) => {
    const field = e.target.name;
    onEmailBlur(e);
    if (getFieldError(field)) {
      triggerErrorPulse(field);
    }
  };

  // No custom submit — we use the hook's onFormSubmit which handles invalid scroll immediately

  // Memoize available states for selected country
  const availableStates = useMemo(() => {
    const countryObj = addressOptions.countries.find(
      (c) => c.value === selectedCountry
    );
    return countryObj ? countryObj.states : [];
  }, [selectedCountry]);

  // Enhanced drag handlers with animation states
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
      setFileUploadState("dragover");
    } else if (e.type === "dragleave") {
      setDragActive(false);
      setFileUploadState("idle");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    setFileUploadState("idle");

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const event = { target: { files: [file] } };
      onFileChange(event);
      // Show success animation
      setFileUploadState("success");
      setTimeout(() => setFileUploadState("idle"), 600);
    }
  };

  // Enhanced file change handler
  const handleFileChange = (e) => {
    onFileChange(e);
    if (e.target.files && e.target.files[0]) {
      setFileUploadState("success");
      setTimeout(() => setFileUploadState("idle"), 600);
    } else if (getFieldError("transcript")) {
      setFileUploadState("error");
      setTimeout(() => setFileUploadState("idle"), 400);
    }
  };


  // Get email validation class
  const getEmailValidationClass = (field) => {
    if (isEmailValidating(field)) return "email-validation-loading";
    if (emailValidation && emailValidation.available)
      return "email-validation-success";
    if (emailValidation && !emailValidation.available)
      return "email-validation-error";
    return "";
  };

  // Get file upload area classes
  const getFileUploadClasses = () => {
    const baseClass = "file-upload-area";
    const classes = [baseClass];

    if (dragActive || fileUploadState === "dragover")
      classes.push("file-upload-dragover");
    else if (fileUploadState === "hover") classes.push("file-upload-hover");
    else if (fileUploadState === "success") classes.push("file-upload-success");
    else if (fileUploadState === "error") classes.push("file-upload-error");

    if (formValues.transcript) classes.push("has-file");
    if (errorPulse["transcript"]) classes.push("input-error-pulse");

    return classes.join(" ");
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const getFileIcon = (fileName) => {
    const ext = fileName.split(".").pop()?.toLowerCase();
    switch (ext) {
      case "pdf":
        return "📄";
      case "doc":
      case "docx":
        return "📝";
      case "jpg":
      case "jpeg":
      case "png":
        return "🖼️";
      default:
        return "📎";
    }
  };

  if (submitSuccess) {
    return (
      <div className="application-form">
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <h2 style={{ color: "var(--success-color)", marginBottom: "1rem" }}>
            Application Submitted!
          </h2>
          <p style={{ marginBottom: "2rem", color: "var(--text-light)" }}>
            Thank you for your application. We'll contact you soon with further
            details.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => {
                resetForm();
                router.push("/");
              }}
              className="btn btn--primary"
            >
              Go to Home Page
            </button>
            <button
              onClick={() => {
                resetForm();
                window.location.reload();
              }}
              className="btn btn--secondary confirmation-secondary-btn"
            >
              Submit Another Application
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form className="application-form" onSubmit={onFormSubmit} noValidate>
      {/* Form Progress Bar */}
      <div className="form-progress-bar">
        <div
          className="form-progress-fill"
          style={{
            "--progress-width": `${formProgress}%`,
            width: `${formProgress}%`,
          }}
        />
      </div>

      {submitError && (
        <div
          id="form-error-banner"
          tabIndex={-1}
          style={{
            background: "#fee",
            color: "#c33",
            padding: "1rem",
            borderRadius: "6px",
            marginBottom: "1rem",
            border: "1px solid #fcc",
          }}
          aria-live="assertive"
        >
          ❌ {submitError}
        </div>
      )}

      {/* Student Info */}
      <fieldset>
        <legend>Student Information</legend>
        <div className="form-row">
          <label className="form-label" htmlFor="studentFirstName">
            <span className="label-text">
              Students First Name <span className="asterisk">*</span>
            </span>
            {getFieldError("studentName.first") && (
              <span className="error">Student First Name is required</span>
            )}
            <input
              id="studentFirstName"
              type="text"
              name="studentName.first"
              value={formValues.studentName.first}
              onChange={onChange}
              onBlur={handleBlur}
              autoComplete="given-name"
              className={`form-input ${errorPulse["studentName.first"] ? "input-error-pulse" : ""
                } ${successGlow["studentName.first"] ? "input-success-glow" : ""
                }`}
            />
          </label>
          <label className="form-label" htmlFor="studentPreferredName">
            <span className="label-text">Students Preferred Name</span>
            {getFieldError("studentName.preferredName") && (
              <span className="error">
                {getFieldError("studentName.preferredName")}
              </span>
            )}
            <input
              id="studentPreferredName"
              type="text"
              name="studentName.preferredName"
              value={formValues.studentName.preferredName}
              onChange={onChange}
              onBlur={handleBlur}
              autoComplete="nickname"
              className={`form-input ${errorPulse["studentName.preferredName"]
                ? "input-error-pulse"
                : ""
                }`}
            />
          </label>
          <label className="form-label" htmlFor="studentLastName">
            <span className="label-text">
              Students Last Name <span className="asterisk">*</span>
            </span>
            {getFieldError("studentName.last") && (
              <span className="error">Student Last Name is required</span>
            )}
            <input
              id="studentLastName"
              type="text"
              name="studentName.last"
              value={formValues.studentName.last}
              onChange={onChange}
              onBlur={handleBlur}
              autoComplete="family-name"
              className={`form-input ${errorPulse["studentName.last"] ? "input-error-pulse" : ""
                }`}
            />
          </label>
        </div>
        <label className="form-label" htmlFor="studentEmail">
          <span className="label-text">
            Students Email <span className="asterisk">*</span>
          </span>
          {getFieldError("studentEmail") ? (
            <span className="error">{getFieldError("studentEmail")}</span>
          ) : isEmailValidating("studentEmail") ? (
            <span className="info">Checking email availability...</span>
          ) : emailValidation &&
            emailValidation.message &&
            !emailValidation.available ? (
            <span className="error">{emailValidation.message}</span>
          ) : null}
          <input
            id="studentEmail"
            type="email"
            name="studentEmail"
            value={formValues.studentEmail}
            onChange={onChange}
            onBlur={handleEmailBlur}
            autoComplete="email"
            className={`form-input ${errorPulse["studentEmail"] ? "input-error-pulse" : ""
              } ${successGlow["studentEmail"] ? "input-success-glow" : ""
              } ${getEmailValidationClass("studentEmail")}`}
          />
        </label>
        <label className="form-label" htmlFor="studentCell">
          <span className="label-text">
            Cell Phone <span className="asterisk">*</span>
          </span>
          {getFieldError("studentCell") && (
            <span className="error">{getFieldError("studentCell")}</span>
          )}
          <PhoneInput
            name="studentCell"
            id="studentCell"
            international
            defaultCountry="US"
            value={formValues.studentCell}
            onChange={(value) => {
              onChange({ target: { name: "studentCell", value: value || "" } });
            }}
            onBlur={handleBlur}
            placeholder="Enter phone number"
            className={`form-input phone-input ${errorPulse["studentCell"] ? "input-error-pulse" : ""
              }`}
          />
        </label>
        <label className="form-label">
          <span className="label-text">
            Birth Date <span className="asterisk">*</span>
          </span>
          {getFieldError("birthDate") && (
            <span className="error">{getFieldError("birthDate")}</span>
          )}
          <input
            type="date"
            name="birthDate"
            value={formValues.birthDate}
            onChange={onChange}
            onBlur={handleBlur}
            className={`form-input ${errorPulse["birthDate"] ? "input-error-pulse" : ""
              }`}
          />
        </label>
        <label className="form-label">
          <span className="label-text">
            Gender <span className="asterisk">*</span>
          </span>
          {getFieldError("gender") && (
            <span className="error">{getFieldError("gender")}</span>
          )}
          <select
            name="gender"
            value={formValues.gender}
            onChange={onChange}
            onBlur={handleBlur}
            className={`form-input ${errorPulse["gender"] ? "input-error-pulse" : ""
              }`}
          >
            <option value="">Select</option>
            {formOptions.genderOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="form-label">
          <span className="label-text">
            Rising Grade <span className="asterisk">*</span>
          </span>
          {getFieldError("risingGrade") && (
            <span className="error">{getFieldError("risingGrade")}</span>
          )}
          <select
            name="risingGrade"
            value={formValues.risingGrade}
            onChange={onChange}
            onBlur={handleBlur}
            className={`form-input ${errorPulse["risingGrade"] ? "input-error-pulse" : ""
              }`}
          >
            <option value="">Select</option>
            {formOptions.risingGradeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        {/* Current School Name (moved here) */}
        <label className="form-label">
          <span className="label-text">
            Current School Name <span className="asterisk">*</span>
          </span>
          {getFieldError("currentSchoolName") && (
            <span className="error">{getFieldError("currentSchoolName")}</span>
          )}
          <input
            type="text"
            name="currentSchoolName"
            value={formValues.currentSchoolName || ""}
            onChange={onChange}
            onBlur={handleBlur}
            autoComplete="organization"
            className={`form-input ${errorPulse["currentSchoolName"] ? "input-error-pulse" : ""
              }`}
          />
        </label>
        <label className="form-label">
          <span className="label-text">
            T-Shirt Size <span className="asterisk">*</span>
          </span>
          {getFieldError("tshirtSize") && (
            <span className="error">{getFieldError("tshirtSize")}</span>
          )}
          <select
            name="tshirtSize"
            value={formValues.tshirtSize}
            onChange={onChange}
            onBlur={handleBlur}
            className={`form-input ${errorPulse["tshirtSize"] ? "input-error-pulse" : ""
              }`}
          >
            <option value="">Select</option>
            {formOptions.tshirtSizeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="form-label">
          <span className="label-text">
            Airport Pickup <span className="asterisk">*</span>
          </span>
          <p className="field-note" style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.5rem' }}>
            Two Way Airport Transfer: New York $600, Boston $400, Bradley $200. One Way: New York $300, Boston $200, Bradley $100
          </p>
          {getFieldError("airportPickup") && (
            <span className="error">{getFieldError("airportPickup")}</span>
          )}
          <div
            className="radio-group"
            role="group"
            aria-labelledby="label_airport_pickup"
          >
            {formOptions.airportPickupOptions.map((option) => {
              const radioId = `airportPickup_${option.value.replace(/\s+/g, '_')}`;
              return (
                <span key={option.value} className="form-radio-item">
                  <input
                    type="radio"
                    name="airportPickup"
                    id={radioId}
                    value={option.value}
                    checked={formValues.airportPickup === option.value}
                    onChange={onChange}
                    onBlur={handleBlur}
                    className={`form-radio ${errorPulse["airportPickup"] ? "input-error-pulse" : ""
                      }`}
                  />
                  <label htmlFor={radioId} className="form-radio-label">
                    {option.label}
                  </label>
                </span>
              );
            })}
          </div>
        </label>
      </fieldset>

      {/* Address */}
      <fieldset>
        <legend>Primary Residence</legend>
        <label className="form-label">
          <span className="label-text">
            Country <span className="asterisk">*</span>
          </span>
          {getFieldError("address.country") && (
            <span className="error">{getFieldError("address.country")}</span>
          )}
          <select
            name="address.country"
            value={formValues.address.country}
            onChange={onChange}
            onBlur={handleBlur}
            autoComplete="country"
            className={`form-input ${errorPulse["address.country"] ? "input-error-pulse" : ""
              }`}
          >
            <option value="">Select</option>
            {addressOptions.countries.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
        </label>
        <label className="form-label">
          <span className="label-text">
            Address Line 1 <span className="asterisk">*</span>
          </span>
          {getFieldError("address.address1") && (
            <span className="error">{getFieldError("address.address1")}</span>
          )}
          <input
            type="text"
            name="address.address1"
            value={formValues.address.address1}
            onChange={onChange}
            onBlur={handleBlur}
            autoComplete="address-line1"
            className={`form-input ${errorPulse["address.address1"] ? "input-error-pulse" : ""
              }`}
          />
        </label>
        <label className="form-label">
          <span className="label-text">Address Line 2</span>
          {getFieldError("address.address2") && (
            <span className="error">{getFieldError("address.address2")}</span>
          )}
          <input
            type="text"
            name="address.address2"
            value={formValues.address.address2}
            onChange={onChange}
            onBlur={handleBlur}
            autoComplete="address-line2"
            className={`form-input ${errorPulse["address.address2"] ? "input-error-pulse" : ""
              }`}
          />
        </label>
        <label className="form-label">
          <span className="label-text">
            City <span className="asterisk">*</span>
          </span>
          {getFieldError("address.city") && (
            <span className="error">{getFieldError("address.city")}</span>
          )}
          <input
            type="text"
            name="address.city"
            value={formValues.address.city}
            onChange={onChange}
            onBlur={handleBlur}
            autoComplete="address-level2"
            className={`form-input ${errorPulse["address.city"] ? "input-error-pulse" : ""
              }`}
          />
        </label>
        <label className="form-label">
          <span className="label-text">
            State/Province <span className="asterisk">*</span>
          </span>
          {getFieldError("address.state") && (
            <span className="error">{getFieldError("address.state")}</span>
          )}
          <select
            name="address.state"
            value={formValues.address.state}
            onChange={onChange}
            onBlur={handleBlur}
            autoComplete="address-level1"
            className={`form-input ${errorPulse["address.state"] ? "input-error-pulse" : ""
              }`}
          >
            <option value="">Select</option>
            {availableStates.map((state) => (
              <option key={state.value} value={state.value}>
                {state.label}
              </option>
            ))}
          </select>
        </label>
        <label className="form-label">
          <span className="label-text">
            Zip/Postal Code <span className="asterisk">*</span>
          </span>
          {getFieldError("address.zip") && (
            <span className="error">{getFieldError("address.zip")}</span>
          )}
          <input
            type="text"
            name="address.zip"
            value={formValues.address.zip}
            onChange={onChange}
            onBlur={handleBlur}
            autoComplete="postal-code"
            className={`form-input ${errorPulse["address.zip"] ? "input-error-pulse" : ""
              }`}
          />
        </label>
      </fieldset>

      {/* Pricing Tier */}
      <fieldset>
        <legend>Summer Camp Pricing <span className="asterisk">*</span></legend>
        <p className="field-note" style={{ marginBottom: '1rem', fontSize: '0.875rem', color: '#666' }}>
          Early Bird Discount: $4,950 per session (Payment must be made by April 1, 2026). Regular: $5,500 per session. <strong>Group discounts are available. Contact us for special registration pricing.</strong>
        </p>
        {getFieldError("pricingTier") && (
          <span className="error">{getFieldError("pricingTier")}</span>
        )}
        <div
          className="radio-group"
          role="group"
          aria-labelledby="label_pricing_tier"
        >
          <span className="form-radio-item">
            <input
              type="radio"
              name="pricingTier"
              id="pricingTierRegular"
              value="Regular"
              checked={formValues.pricingTier === "Regular"}
              onChange={onChange}
              onBlur={handleBlur}
              className={`form-radio ${errorPulse["pricingTier"] ? "input-error-pulse" : ""
                }`}
            />
            <label htmlFor="pricingTierRegular" className="form-radio-label">
              Regular Pricing ($5,500 per session)
            </label>
          </span>
          <span className="form-radio-item">
            <input
              type="radio"
              name="pricingTier"
              id="pricingTierEarlyBird"
              value="Early Bird"
              checked={formValues.pricingTier === "Early Bird"}
              onChange={onChange}
              onBlur={handleBlur}
              className={`form-radio ${errorPulse["pricingTier"] ? "input-error-pulse" : ""
                }`}
            />
            <label htmlFor="pricingTierEarlyBird" className="form-radio-label">
              Early Bird Discount ($4,950 per session - Payment by April 1, 2026)
            </label>
          </span>
        </div>
      </fieldset>

      {/* Sessions */}
      <fieldset>
        <legend>Sessions <span className="asterisk">*</span></legend>
        <p className="field-note" style={{ marginBottom: '1rem', fontSize: '0.875rem', color: '#666' }}>
          Please select one or more sessions you wish to attend. You'll choose a track for each session in the next step.
          {formValues.pricingTier && (
            <span style={{ display: 'block', marginTop: '0.5rem', fontWeight: '600' }}>
              Price per session: {formValues.pricingTier === "Early Bird" ? "$4,950" : "$5,500"}
              {formValues.sessions && formValues.sessions.length > 0 && (
                <span style={{ display: 'block', marginTop: '0.25rem' }}>
                  Total: ${(formValues.sessions.length * (formValues.pricingTier === "Early Bird" ? 4950 : 5500)).toLocaleString()}
                </span>
              )}
            </span>
          )}
        </p>
        <div className="form-row">
          {formOptions.sessionOptions.map((option, idx) => {
            const sessionPrice = formValues.pricingTier === "Early Bird" ? "$4,950" : "$5,500";
            return (
              <label key={option.value} className="checkbox-label">
                <input
                  type="checkbox"
                  id={`session_${idx}`}
                  name="sessions"
                  value={option.value}
                  checked={(formValues.sessions || []).includes(option.value)}
                  onChange={onChange}
                  onBlur={handleBlur}
                  className={`form-checkbox ${errorPulse["sessions"] ? "input-error-pulse" : ""
                    }`}
                />
                {option.label} (2 weeks) - {sessionPrice}
              </label>
            );
          })}
        </div>
        {getFieldError("sessions") && (
          <span className="error">{getFieldError("sessions")}</span>
        )}
      </fieldset>

      {/* Track Selection for Each Session */}
      {formValues.sessions && Array.isArray(formValues.sessions) && formValues.sessions.length > 0 && (
        <fieldset>
          <legend>Track Selection <span className="asterisk">*</span></legend>
          <p className="field-note" style={{ marginBottom: '1rem', fontSize: '0.875rem', color: '#666' }}>
            Please select a track for each session you selected above.
          </p>
          {formValues.sessions.map((session) => {
            // Get available tracks for this session
            const availableTracks = formOptions.courseOptions.filter(track =>
              track.availableSessions.includes(session)
            );

            return (
              <div key={session} style={{ marginBottom: '1.5rem', padding: '1rem', border: '1px solid #e0e0e0', borderRadius: '6px' }}>
                <label className="form-label" style={{ marginBottom: '0.75rem', fontWeight: '600', fontSize: '1rem' }}>
                  <span className="label-text">
                    {formOptions.sessionOptions.find(s => s.value === session)?.label}
                    <span className="asterisk">*</span>
                  </span>
                </label>
                {getFieldError(`sessionTracks.${session}`) && (
                  <span className="error" style={{ display: 'block', marginBottom: '0.5rem' }}>
                    {getFieldError(`sessionTracks.${session}`)}
                  </span>
                )}
                <div className="form-row">
                  {availableTracks.map((track, trackIndex) => {
                    const radioId = `sessionTrack_${session}_${trackIndex}`;
                    const radioName = `sessionTrack.${session}`;
                    return (
                      <span key={track.value} className="form-radio-item">
                        <input
                          type="radio"
                          id={radioId}
                          name={radioName}
                          value={track.value}
                          checked={formValues.sessionTracks?.[session] === track.value}
                          onChange={onChange}
                          onBlur={handleBlur}
                          className={`form-radio ${errorPulse[`sessionTracks.${session}`] ? "input-error-pulse" : ""
                            }`}
                        />
                        <label htmlFor={radioId} className="form-radio-label">
                          {track.label}
                        </label>
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </fieldset>
      )}

      {/* Sports */}
      <fieldset>
        <legend>Sports Options <span className="asterisk">*</span></legend>
        <div className="form-row">
          {formOptions.sportsOptions.map((option) => (
            <label key={option.value} className="checkbox-label">
              <input
                type="checkbox"
                name="sports"
                value={option.value}
                checked={formValues.sports.includes(option.value)}
                onChange={onChange}
                onBlur={handleBlur}
                className={`form-checkbox ${errorPulse["sports"] ? "input-error-pulse" : ""
                  }`}
              />
              {option.label}
            </label>
          ))}
        </div>
        {getFieldError("sports") && (
          <span className="error">{getFieldError("sports")}</span>
        )}
      </fieldset>

      {/* Parent/Guardian Info */}
      <fieldset>
        <legend>Parent/Guardian Information</legend>
        <div className="form-row">
          <label className="form-label" htmlFor="parentFirstName">
            <span className="label-text">
              Parents First Name <span className="asterisk">*</span>
            </span>
            {getFieldError("parentName.first") && (
              <span className="error">Parent First Name is required</span>
            )}
            <input
              id="parentFirstName"
              type="text"
              name="parentName.first"
              value={formValues.parentName.first}
              onChange={onChange}
              onBlur={handleBlur}
              autoComplete="given-name"
              className={`form-input ${errorPulse["parentName.first"] ? "input-error-pulse" : ""
                }`}
            />
          </label>
          <label className="form-label" htmlFor="parentLastName">
            <span className="label-text">
              Parents Last Name <span className="asterisk">*</span>
            </span>
            {getFieldError("parentName.last") && (
              <span className="error">Parent Last Name is required</span>
            )}
            <input
              id="parentLastName"
              type="text"
              name="parentName.last"
              value={formValues.parentName.last}
              onChange={onChange}
              onBlur={handleBlur}
              autoComplete="family-name"
              className={`form-input ${errorPulse["parentName.last"] ? "input-error-pulse" : ""
                }`}
            />
          </label>
        </div>
        <label className="form-label" htmlFor="parentEmail">
          <span className="label-text">
            Parents Email <span className="asterisk">*</span>
          </span>
          {getFieldError("parentEmail") && (
            <span className="error">{getFieldError("parentEmail")}</span>
          )}
          <input
            id="parentEmail"
            type="email"
            name="parentEmail"
            value={formValues.parentEmail}
            onChange={onChange}
            onBlur={handleBlur}
            autoComplete="email"
            className={`form-input ${errorPulse["parentEmail"] ? "input-error-pulse" : ""
              }`}
          />
        </label>
        <label className="form-label" htmlFor="parentPhone">
          <span className="label-text">
            Parents Phone <span className="asterisk">*</span>
          </span>
          {getFieldError("parentPhone") && (
            <span className="error">{getFieldError("parentPhone")}</span>
          )}
          <PhoneInput
            name="parentPhone"
            id="parentPhone"
            international
            defaultCountry="US"
            value={formValues.parentPhone}
            onChange={(value) => {
              onChange({ target: { name: "parentPhone", value: value || "" } });
            }}
            onBlur={handleBlur}
            placeholder="Enter phone number"
            className={`form-input phone-input ${errorPulse["parentPhone"] ? "input-error-pulse" : ""
              }`}
          />
        </label>
        <label className="form-label" htmlFor="parentWhatsapp">
          <span className="label-text">Parents WhatsApp/WeChat (Optional)</span>
          <p className="field-note">
            <strong>Highly recommended:</strong> We use this to communicate with parents.
          </p>
          {getFieldError("parentWhatsapp") && (
            <span className="error">{getFieldError("parentWhatsapp")}</span>
          )}
          <input
            id="parentWhatsapp"
            type="text"
            name="parentWhatsapp"
            value={formValues.parentWhatsapp || ""}
            onChange={onChange}
            onBlur={handleBlur}
            className={`form-input ${errorPulse["parentWhatsapp"] ? "input-error-pulse" : ""
              }`}
          />
        </label>

        {/* How did you hear about us? (16) */}
        <fieldset>
          <legend>How did you hear about us? <span className="asterisk">*</span></legend>
          <div className="form-row">
            {formOptions.hearAboutUsOptions.map((option) => (
              <label key={option.value} className="checkbox-label">
                <input
                  type="checkbox"
                  name="hearAboutUs"
                  value={option.value}
                  checked={(formValues.hearAboutUs || []).includes(option.value)}
                  onChange={onChange}
                  onBlur={handleBlur}
                  className={`form-checkbox ${errorPulse["hearAboutUs"] ? "input-error-pulse" : ""
                    }`}
                />
                {option.label}
              </label>
            ))}
          </div>
          {(formValues.hearAboutUs || []).includes("Other") && (
            <div style={{ marginTop: '1rem', width: '100%' }}>
              <label className="form-label">
                <span className="label-text">Please specify</span>
                {getFieldError("hearAboutUsOther") && (
                  <span className="error">{getFieldError("hearAboutUsOther")}</span>
                )}
                <input
                  type="text"
                  name="hearAboutUsOther"
                  value={formValues.hearAboutUsOther || ""}
                  onChange={onChange}
                  onBlur={handleBlur}
                  placeholder="Please specify how you heard about us"
                  className={`form-input ${errorPulse["hearAboutUsOther"] ? "input-error-pulse" : ""
                    }`}
                />
              </label>
            </div>
          )}
          {getFieldError("hearAboutUs") && (
            <span className="error">{getFieldError("hearAboutUs")}</span>
          )}
        </fieldset>

        {/* Questions/Notes (17) */}
        <fieldset>
          <legend>Questions or Notes</legend>
          <label className="form-label">
            <span className="label-text">
              If you have any questions, please leave a note
            </span>
            {getFieldError("questionsNotes") && (
              <span className="error">{getFieldError("questionsNotes")}</span>
            )}
            <textarea
              name="questionsNotes"
              value={formValues.questionsNotes || ""}
              onChange={onChange}
              onBlur={handleBlur}
              rows={4}
              className={`form-input ${errorPulse["questionsNotes"] ? "input-error-pulse" : ""
                }`}
              placeholder="Enter any questions or notes here..."
            />
          </label>
        </fieldset>

        {/* Photo Permission (18) */}
        <fieldset>
          <legend>Photo Permission <span className="asterisk">*</span></legend>
          <p className="field-note" style={{ marginBottom: '1rem', fontSize: '0.875rem', color: '#666' }}>
            We will be taking group photos during our summer camp activity. These photos may be used for documentation, promotional materials, or shared within our community. Do you allow SCISS to use photos that include your child for promotional purposes? (All photos will be carefully selected)
          </p>
          {getFieldError("photoPermission") && (
            <span className="error">{getFieldError("photoPermission")}</span>
          )}
          <div
            className="radio-group"
            role="group"
            aria-labelledby="label_photo_permission"
          >
            <span className="form-radio-item">
              <input
                type="radio"
                name="photoPermission"
                id="photoPermissionYes"
                value="Yes"
                checked={formValues.photoPermission === "Yes"}
                onChange={onChange}
                onBlur={handleBlur}
                className={`form-radio ${errorPulse["photoPermission"] ? "input-error-pulse" : ""
                  }`}
              />
              <label htmlFor="photoPermissionYes" className="form-radio-label">
                Yes
              </label>
            </span>
            <span className="form-radio-item">
              <input
                type="radio"
                name="photoPermission"
                id="photoPermissionNo"
                value="No"
                checked={formValues.photoPermission === "No"}
                onChange={onChange}
                onBlur={handleBlur}
                className={`form-radio ${errorPulse["photoPermission"] ? "input-error-pulse" : ""
                  }`}
              />
              <label htmlFor="photoPermissionNo" className="form-radio-label">
                No
              </label>
            </span>
          </div>
        </fieldset>

        {/* WeChat Information (19) */}
        <fieldset>
          <legend>Additional Information</legend>
          <div className="field-note" style={{ padding: '1rem', backgroundColor: '#f7f8fa', borderRadius: '6px', marginBottom: '1rem' }}>
            <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
              <strong>WeChat Contact:</strong> Please add "SC-Academy-Q斯" (WeChat ID: chinchinss) for more information and details about our summer camp.
            </p>
          </div>
        </fieldset>

        {/* Refund Policy (20) */}
        <fieldset>
          <legend>Refund Policy</legend>
          <div className="field-note" style={{ padding: '1rem', backgroundColor: '#f7f8fa', borderRadius: '6px', marginBottom: '1rem' }}>
            <p style={{ margin: '0 0 0.75rem 0', fontSize: '0.95rem', lineHeight: '1.6' }}>
              <strong>90% Cash Refund:</strong> Available for cancellations made before June 1st.
            </p>
            <p style={{ margin: '0 0 0.75rem 0', fontSize: '0.95rem', lineHeight: '1.6' }}>
              <strong>50% Cash Refund or 90% Credit for Future Program:</strong> Available up to two weeks before the program starts.
            </p>
            <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
              <strong>No Cash Refunds After Program Start:</strong> Refunds will not be issued once summer begins. However, 90% can be credited or transferred for future programs.
            </p>
          </div>
        </fieldset>

        {/* Allergies/Medical Care (21) */}
        <fieldset>
          <legend>Medical Information <span className="asterisk">*</span></legend>
          <label className="form-label">
            <span className="label-text">
              If the student has any allergy and needs any medicine/special care, please indicate details below. If your child has no allergies, please write N/A.
            </span>
            {getFieldError("allergiesOrMedicalCare") && (
              <span className="error">{getFieldError("allergiesOrMedicalCare")}</span>
            )}
            <textarea
              name="allergiesOrMedicalCare"
              value={formValues.allergiesOrMedicalCare || ""}
              onChange={onChange}
              onBlur={handleBlur}
              rows={4}
              className={`form-input ${errorPulse["allergiesOrMedicalCare"] ? "input-error-pulse" : ""
                }`}
              placeholder="Enter allergy or medical care information here, or write N/A if none..."
            />
          </label>
        </fieldset>

        {/* $500 Deposit Confirmation (22) */}
        <fieldset>
          <legend>$500 Deposit to Secure Spot <span className="asterisk">*</span></legend>
          <p className="field-note" style={{ marginBottom: '1rem', fontSize: '0.875rem', color: '#666' }}>
            Would you like to pay a $500 deposit to secure your spot? After we receive your application, we will contact you with payment instructions.
          </p>
          {getFieldError("depositConfirmation") && (
            <span className="error">{getFieldError("depositConfirmation")}</span>
          )}
          <div
            className="radio-group"
            role="group"
            aria-labelledby="label_deposit_confirmation"
          >
            <span className="form-radio-item">
              <input
                type="radio"
                name="depositConfirmation"
                id="depositConfirmationYes"
                value="Yes"
                checked={formValues.depositConfirmation === "Yes"}
                onChange={onChange}
                onBlur={handleBlur}
                className={`form-radio ${errorPulse["depositConfirmation"] ? "input-error-pulse" : ""
                  }`}
              />
              <label htmlFor="depositConfirmationYes" className="form-radio-label">
                Yes
              </label>
            </span>
            <span className="form-radio-item">
              <input
                type="radio"
                name="depositConfirmation"
                id="depositConfirmationNo"
                value="No"
                checked={formValues.depositConfirmation === "No"}
                onChange={onChange}
                onBlur={handleBlur}
                className={`form-radio ${errorPulse["depositConfirmation"] ? "input-error-pulse" : ""
                  }`}
              />
              <label htmlFor="depositConfirmationNo" className="form-radio-label">
                No
              </label>
            </span>
          </div>
        </fieldset>

        {/* Email to Receive Receipt (23) */}
        <fieldset>
          <legend>Email to Receive Receipt</legend>
          <label className="form-label">
            {getFieldError("receiptEmail") && (
              <span className="error">{getFieldError("receiptEmail")}</span>
            )}
            <input
              type="email"
              name="receiptEmail"
              value={formValues.receiptEmail || ""}
              onChange={onChange}
              onBlur={handleBlur}
              className={`form-input ${errorPulse["receiptEmail"] ? "input-error-pulse" : ""
                }`}
              placeholder="Enter email address for receipt"
            />
            <p className="field-note" style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#666' }}>
              If you cannot pay by Zelle, please contact <a href="mailto:si.qin@springfieldca.org" style={{ color: '#17407e' }}>si.qin@springfieldca.org</a>
            </p>
          </label>
        </fieldset>
      </fieldset>

      {/* Financial Aid Interest (moved above transcript upload) */}
      <label className="form-label">
        <span className="label-text">
          Are you interested in a scholarship? <span className="asterisk">*</span>
        </span>
        {getFieldError("financialAidInterest") && (
          <span className="error">{getFieldError("financialAidInterest")}</span>
        )}
        <div
          className="radio-group"
          role="group"
          aria-labelledby="label_financial_aid"
        >
          <span className="form-radio-item">
            <input
              type="radio"
              name="financialAidInterest"
              value="Yes"
              checked={formValues.financialAidInterest === "Yes"}
              onChange={onChange}
              onBlur={handleBlur}
              className={`form-radio ${errorPulse["financialAidInterest"] ? "input-error-pulse" : ""
                }`}
              id="financialAidYes"
              aria-describedby="label_financial_aid"
              required
            />
            <label htmlFor="financialAidYes" className="form-radio-label">
              Yes
            </label>
          </span>
          <span className="form-radio-item">
            <input
              type="radio"
              name="financialAidInterest"
              value="No"
              checked={formValues.financialAidInterest === "No"}
              onChange={onChange}
              onBlur={handleBlur}
              className={`form-radio ${errorPulse["financialAidInterest"] ? "input-error-pulse" : ""
                }`}
              id="financialAidNo"
              aria-describedby="label_financial_aid"
              required
            />
            <label htmlFor="financialAidNo" className="form-radio-label">
              No
            </label>
          </span>
        </div>
      </label>

      {/* Transcript Upload (required if financial aid interest is Yes) */}
      <fieldset>
        <legend>Upload Transcript and Supporting Documents (Optional)</legend>
        <label className="form-label" htmlFor="transcript">
          <span className="label-text">
            {formValues.financialAidInterest === "Yes" && (
              <span className="asterisk">*</span>
            )}
          </span>
          <p className="field-note">
            You can upload up to 3 files (transcript, certificates, awards, etc.)
          </p>
          {getFieldError("transcript") && (
            <span className="error">{getFieldError("transcript")}</span>
          )}
        </label>
        <div className="file-upload-container">
          <div
            className={getFileUploadClasses()}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            {(!formValues.transcript || formValues.transcript.length === 0) ? (
              <>
                <input
                  id="transcript"
                  type="file"
                  name="transcript"
                  multiple
                  ref={(input) => {
                    // Register with react-hook-form if available
                    if (input) {
                      if (typeof input.form !== "undefined" && input.form) {
                        // react-hook-form registration
                        if (typeof input.form.register === "function") {
                          input.form.register(input);
                        }
                      }
                    }
                  }}
                  onChange={handleFileChange}
                  onBlur={handleBlur}
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  className="file-input"
                  required={formValues.financialAidInterest === "Yes"}
                />
                <div className="upload-placeholder">
                  <div className="upload-icon">📄</div>
                  <p className="upload-text">
                    <strong>Click to upload</strong> or drag and drop
                  </p>
                  <p className="upload-hint">
                    PDF, JPG, PNG, or Word document (max 5MB each)
                  </p>
                </div>
              </>
            ) : (
              <div className="files-list">
                {formValues.transcript.map((file, index) => (
                  <div key={index} className="file-info">
                    <div className="file-icon">
                      {getFileIcon(file.name)}
                    </div>
                    <div className="file-details">
                      <p className="file-name">{file.name}</p>
                      <p className="file-size">
                        {formatFileSize(file.size)}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="remove-file"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onRemoveFile(index);
                      }}
                    >
                      ✕
                    </button>
                  </div>
                ))}
                {formValues.transcript.length < 3 && (
                  <div className="add-more-files">
                    <input
                      type="file"
                      multiple
                      onChange={handleFileChange}
                      accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                      className="file-input"
                      style={{ display: 'none' }}
                      id="additional-files"
                    />
                    <label htmlFor="additional-files" className="add-files-button">
                      + Add more files
                    </label>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </fieldset>

      {/* Submit */}
      {isSubmitting ? (
        <button
          type="button"
          disabled
          aria-busy="true"
          className="submit-btn visible-loading-btn"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.6rem',
            background: 'var(--accent-yellow)',
            color: '#111',
            borderColor: 'var(--accent-yellow)',
            padding: '0.75rem 1.25rem',
            minWidth: '260px'
          }}
        >
          <span className="loader-icon" role="img" aria-label="loading">⏳</span>
          <span>Sending application</span>
          <span className="dots" aria-hidden="true"><span>.</span><span>.</span><span>.</span></span>
        </button>
      ) : (
        <button
          type="submit"
          className="submit-btn"
        >
          Submit Application
        </button>
      )}

      <style jsx>{`
        .visible-loading-btn[disabled] { opacity: 1; }
        .loader-icon { animation: tilt 1.2s ease-in-out infinite; }
        @keyframes tilt { 0% { transform: rotate(0deg); } 50% { transform: rotate(15deg); } 100% { transform: rotate(0deg); } }
        .dots { display: inline-block; width: 1.5em; text-align: left; }
        .dots span { display: inline-block; animation: blink 1.2s infinite; }
        .dots span:nth-child(2) { animation-delay: .2s; }
        .dots span:nth-child(3) { animation-delay: .4s; }
        @keyframes blink { 0% { opacity: 0; } 50% { opacity: 1; } 100% { opacity: 0; } }
      `}</style>
    </form>
  );
};

export default ApplicationForm;
