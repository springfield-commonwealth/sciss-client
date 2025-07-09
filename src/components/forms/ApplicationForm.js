import formOptions from "@/data/formOptions.json";
import { useApplicationForm } from "@/hooks/useApplicationForm";
import { useRouter } from "next/router";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ApplicationForm = () => {
  const {
    formValues,
    errors,
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
  const [studentCellCountry, setStudentCellCountry] = useState("US");
  const [parentPhoneCountry, setParentPhoneCountry] = useState("US");

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
            onChange={(value, data) => {
              onChange({ target: { name: "studentCell", value: value || "" } });
              if (data && data.country) setStudentCellCountry(data.country);
            }}
            onCountryChange={setStudentCellCountry}
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
            onChange={(value, data) => {
              onChange({ target: { name: "parentPhone", value: value || "" } });
              if (data && data.country) setParentPhoneCountry(data.country);
            }}
            onCountryChange={setParentPhoneCountry}
            placeholder="Enter phone number"
            className="phone-input"
          />
        </label>
      </fieldset>

      {/* Transcript Upload */}
      <fieldset>
        <legend>Scholarship Application (Optional)</legend>
        <label className="form-label">
          <span className="label-text">Upload Transcript</span>
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
                  onChange={onFileChange}
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  className="file-input"
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
