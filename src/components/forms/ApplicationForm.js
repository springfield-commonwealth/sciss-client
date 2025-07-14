import addressOptions from "@/data/addressOptions.json";
import formOptions from "@/data/formOptions.json";
import { useApplicationForm } from "@/hooks/useApplicationForm";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

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

  // Memoize available states for selected country
  const availableStates = useMemo(() => {
    const countryObj = addressOptions.countries.find(
      (c) => c.value === selectedCountry
    );
    return countryObj ? countryObj.states : [];
  }, [selectedCountry]);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const event = { target: { files: [file] } };
      onFileChange(event);
    }
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
            className="btn btn-primary"
          >
            Go to Home Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="application-form" onSubmit={onSubmit} noValidate>
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
          <label className="form-label">
            <span className="label-text">
              First Name <span className="asterisk">*</span>
            </span>
            {getFieldError("studentName.first") && (
              <span className="error">
                {getFieldError("studentName.first")}
              </span>
            )}
            <input
              type="text"
              name="studentName.first"
              value={formValues.studentName.first}
              onChange={onChange}
              autoComplete="given-name"
            />
          </label>
          <label className="form-label">
            <span className="label-text">Preferred Name</span>
            {getFieldError("studentName.preferredName") && (
              <span className="error">
                {getFieldError("studentName.preferredName")}
              </span>
            )}
            <input
              type="text"
              name="studentName.preferredName"
              value={formValues.studentName.preferredName}
              onChange={onChange}
              autoComplete="nickname"
            />
          </label>
          <label className="form-label">
            <span className="label-text">
              Last Name <span className="asterisk">*</span>
            </span>
            {getFieldError("studentName.last") && (
              <span className="error">{getFieldError("studentName.last")}</span>
            )}
            <input
              type="text"
              name="studentName.last"
              value={formValues.studentName.last}
              onChange={onChange}
              autoComplete="family-name"
            />
          </label>
        </div>
        <label className="form-label">
          <span className="label-text">
            Email <span className="asterisk">*</span>
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
            type="email"
            name="studentEmail"
            value={formValues.studentEmail}
            onChange={onChange}
            onBlur={onEmailBlur}
            autoComplete="email"
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
            placeholder="Enter phone number"
            className="phone-input"
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
            onChange={(e) => {
              if (e.target.value === "") {
                onChange({ target: { name: "gender", value: undefined } });
              } else {
                onChange(e);
              }
            }}
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
            onChange={(e) => {
              if (e.target.value === "") {
                onChange({ target: { name: "risingGrade", value: undefined } });
              } else {
                onChange(e);
              }
            }}
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
            autoComplete="organization"
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
            onChange={(e) => {
              if (e.target.value === "") {
                onChange({ target: { name: "tshirtSize", value: undefined } });
              } else {
                onChange(e);
              }
            }}
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
            autoComplete="address-line1"
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
            autoComplete="address-line2"
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
            autoComplete="address-level2"
          />
        </label>
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
            onChange={(e) => {
              onChange(e);
              setSelectedCountry(e.target.value);
            }}
            autoComplete="country"
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
            State/Province <span className="asterisk">*</span>
          </span>
          {getFieldError("address.state") && (
            <span className="error">{getFieldError("address.state")}</span>
          )}
          <select
            name="address.state"
            value={formValues.address.state}
            onChange={onChange}
            autoComplete="address-level1"
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
            autoComplete="postal-code"
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
                aria-describedby="label_course"
                className="form-radio"
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
                checked={formValues.sports.includes(option.value)}
                onChange={onChange}
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
          <label className="form-label">
            <span className="label-text">
              First Name <span className="asterisk">*</span>
            </span>
            {getFieldError("parentName.first") && (
              <span className="error">{getFieldError("parentName.first")}</span>
            )}
            <input
              type="text"
              name="parentName.first"
              value={formValues.parentName.first}
              onChange={onChange}
              autoComplete="given-name"
            />
          </label>
          <label className="form-label">
            <span className="label-text">
              Last Name <span className="asterisk">*</span>
            </span>
            {getFieldError("parentName.last") && (
              <span className="error">{getFieldError("parentName.last")}</span>
            )}
            <input
              type="text"
              name="parentName.last"
              value={formValues.parentName.last}
              onChange={onChange}
              autoComplete="family-name"
            />
          </label>
        </div>
        <label className="form-label">
          <span className="label-text">
            Email <span className="asterisk">*</span>
          </span>
          {getFieldError("parentEmail") && (
            <span className="error">{getFieldError("parentEmail")}</span>
          )}
          <input
            type="email"
            name="parentEmail"
            value={formValues.parentEmail}
            onChange={onChange}
            autoComplete="email"
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
            placeholder="Enter phone number"
            className="phone-input"
          />
        </label>
      </fieldset>

      {/* Financial Aid Interest (moved above transcript upload) */}
      <label className="form-label">
        <span className="label-text">
          Are you interested in financial aid?{" "}
          <span className="asterisk">*</span>
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
              className="form-radio"
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
              className="form-radio"
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
        <label className="form-label">
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
            className={`file-upload-area ${dragActive ? "drag-active" : ""} ${
              formValues.transcript ? "has-file" : ""
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            {!formValues.transcript ? (
              <>
                <input
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
                  onChange={onFileChange}
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
      <button type="submit" disabled={isSubmitting} className="submit-btn">
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
};

export default ApplicationForm;
