"use client";

import { useApplicationForm } from "@/hooks/useApplicationForm";
import addressOptions from "@/data/addressOptions.json";
import formOptions from "@/data/formOptions.json";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ERROR_PULSE_DURATION = 400;
const SUCCESS_GLOW_DURATION = 600;

const ApplicationForm = () => {
  const {
    formValues,
    isSubmitting,
    submitSuccess,
    submitError,
    onChange,
    onFileChange,
    onSubmit,
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
      "address.country",
      "address.address1",
      "address.city",
      "address.state",
      "address.zip",
      "course",
      "sports",
      "parentName.first",
      "parentName.last",
      "parentEmail",
      "parentPhone",
      "financialAidInterest",
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

  // On submit, pulse all fields with errors
  const handleSubmit = (e) => {
    e.preventDefault();
    Object.keys(formValues).forEach((field) => {
      if (getFieldError(field)) {
        triggerErrorPulse(field);
      }
    });
    onSubmit(e);
  };

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
          <button
            onClick={() => {
              resetForm();
              router.push("/");
            }}
            className="btn btn--primary"
          >
            Go to Home Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="application-form" onSubmit={handleSubmit} noValidate>
      {/* Form Progress Bar */}
      <div className="form-progress-bar">
        <div
          className="form-progress-fill"
          style={
            {
              width: `${formProgress}%`,
            } as React.CSSProperties
          }
        />
      </div>

      {submitError && (
        <div
          style={{
            background: "#fee",
            color: "#c33",
            padding: "1rem",
            borderRadius: "6px",
            marginBottom: "1rem",
            border: "1px solid #fcc",
          }}
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
              Student First Name <span className="asterisk">*</span>
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
              className={`form-input ${
                errorPulse["studentName.first"] ? "input-error-pulse" : ""
              } ${
                successGlow["studentName.first"] ? "input-success-glow" : ""
              }`}
            />
          </label>
          <label className="form-label" htmlFor="studentPreferredName">
            <span className="label-text">Student Preferred Name</span>
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
              className={`form-input ${
                errorPulse["studentName.preferredName"]
                  ? "input-error-pulse"
                  : ""
              }`}
            />
          </label>
          <label className="form-label" htmlFor="studentLastName">
            <span className="label-text">
              Student Last Name <span className="asterisk">*</span>
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
              className={`form-input ${
                errorPulse["studentName.last"] ? "input-error-pulse" : ""
              }`}
            />
          </label>
        </div>
        <label className="form-label" htmlFor="studentEmail">
          <span className="label-text">
            Student Email <span className="asterisk">*</span>
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
            className={`form-input ${
              errorPulse["studentEmail"] ? "input-error-pulse" : ""
            } ${
              successGlow["studentEmail"] ? "input-success-glow" : ""
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
            className={`form-input phone-input ${
              errorPulse["studentCell"] ? "input-error-pulse" : ""
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
            className={`form-input ${
              errorPulse["birthDate"] ? "input-error-pulse" : ""
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
            className={`form-input ${
              errorPulse["gender"] ? "input-error-pulse" : ""
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
            className={`form-input ${
              errorPulse["risingGrade"] ? "input-error-pulse" : ""
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
            className={`form-input ${
              errorPulse["currentSchoolName"] ? "input-error-pulse" : ""
            }`}
          />
        </label>
        {/* Year Applying For */}
        <label className="form-label">
          <span className="label-text">
            Year Applying For <span className="asterisk">*</span>
          </span>
          {getFieldError("yearApplyingFor") && (
            <span className="error">{getFieldError("yearApplyingFor")}</span>
          )}
          <select
            name="yearApplyingFor"
            value={formValues.yearApplyingFor || ""}
            onChange={onChange}
            onBlur={handleBlur}
            className={`form-input ${
              errorPulse["yearApplyingFor"] ? "input-error-pulse" : ""
            }`}
          >
            <option value="">Select</option>
            {/* You can replace these with formOptions.yearApplyingForOptions if available */}
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
          </select>
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
            className={`form-input ${
              errorPulse["tshirtSize"] ? "input-error-pulse" : ""
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
            className={`form-input ${
              errorPulse["address.country"] ? "input-error-pulse" : ""
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
            className={`form-input ${
              errorPulse["address.address1"] ? "input-error-pulse" : ""
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
            className={`form-input ${
              errorPulse["address.address2"] ? "input-error-pulse" : ""
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
            className={`form-input ${
              errorPulse["address.city"] ? "input-error-pulse" : ""
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
            className={`form-input ${
              errorPulse["address.state"] ? "input-error-pulse" : ""
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
            className={`form-input ${
              errorPulse["address.zip"] ? "input-error-pulse" : ""
            }`}
          />
        </label>
      </fieldset>

      {/* Program/Course */}
      <fieldset>
        <legend>Program & Courses</legend>
        <div
          className="radio-group"
          role="group"
          aria-labelledby="label_course"
        >
          {formOptions.courseOptions.map((option, idx) => (
            <span className="form-radio-item" key={option.value}>
              <input
                type="radio"
                id={`course_${idx}`}
                name="course"
                value={option.value}
                checked={formValues.course === option.value}
                onChange={onChange}
                onBlur={handleBlur}
                aria-describedby="label_course"
                className={`form-radio ${
                  errorPulse["course"] ? "input-error-pulse" : ""
                }`}
                required
              />
              <label htmlFor={`course_${idx}`} className="form-radio-label">
                {option.label}
              </label>
            </span>
          ))}
        </div>
        {getFieldError("course") && (
          <span className="error">{getFieldError("course")}</span>
        )}
      </fieldset>

      {/* Sports */}
      <fieldset>
        <legend>Sports Options *</legend>
        <div className="form-row">
          {formOptions.sportsOptions.map((option) => (
            <label key={option.value} className="checkbox-label">
              <input
                type="checkbox"
                name="sports"
                value={option.value}
                checked={
                  formValues.sports?.includes(option.value as any) || false
                }
                onChange={onChange}
                onBlur={handleBlur}
                className={`form-checkbox ${
                  errorPulse["sports"] ? "input-error-pulse" : ""
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
              Parent First Name <span className="asterisk">*</span>
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
              className={`form-input ${
                errorPulse["parentName.first"] ? "input-error-pulse" : ""
              }`}
            />
          </label>
          <label className="form-label" htmlFor="parentLastName">
            <span className="label-text">
              Parent Last Name <span className="asterisk">*</span>
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
              className={`form-input ${
                errorPulse["parentName.last"] ? "input-error-pulse" : ""
              }`}
            />
          </label>
        </div>
        <label className="form-label" htmlFor="parentEmail">
          <span className="label-text">
            Parent Email <span className="asterisk">*</span>
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
            className={`form-input ${
              errorPulse["parentEmail"] ? "input-error-pulse" : ""
            }`}
          />
        </label>
        <label className="form-label" htmlFor="parentPhone">
          <span className="label-text">
            Phone <span className="asterisk">*</span>
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
            className={`form-input phone-input ${
              errorPulse["parentPhone"] ? "input-error-pulse" : ""
            }`}
          />
        </label>
      </fieldset>

      {/* Financial Aid Interest (moved above transcript upload) */}
      <label className="form-label">
        <span className="label-text">
          Are you interested in scholarship? <span className="asterisk">*</span>
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
              className={`form-radio ${
                errorPulse["financialAidInterest"] ? "input-error-pulse" : ""
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
              className={`form-radio ${
                errorPulse["financialAidInterest"] ? "input-error-pulse" : ""
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
        <legend>Scholarship Application (Optional)</legend>
        <label className="form-label" htmlFor="transcript">
          <span className="label-text">
            Upload Transcript
            {formValues.financialAidInterest === "Yes" && (
              <span className="asterisk">*</span>
            )}
          </span>
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
            {!formValues.transcript ? (
              <>
                <input
                  id="transcript"
                  type="file"
                  name="transcript"
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
                    PDF, JPG, PNG, or Word document (max 5MB)
                  </p>
                </div>
              </>
            ) : (
              <div className="file-info">
                <div className="file-icon">
                  {getFileIcon(formValues.transcript.name)}
                </div>
                <div className="file-details">
                  <p className="file-name">{formValues.transcript.name}</p>
                  <p className="file-size">
                    {formatFileSize(formValues.transcript.size)}
                  </p>
                </div>
              </div>
            )}
          </div>
          {formValues.transcript && (
            <button
              type="button"
              className="remove-file"
              onClick={(e) => {
                e.preventDefault();
                const event = { target: { files: [] } };
                onFileChange(event);
              }}
            >
              ✕
            </button>
          )}
        </div>
      </fieldset>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`submit-btn ${isSubmitting ? "submit-btn-loading" : ""}`}
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
};

export default ApplicationForm;
