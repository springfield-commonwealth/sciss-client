/**
 * API Service for SCISS Application System
 * Replaces mockSubmit.js with real backend integration
 */
// Use environment variable for API base URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const ENDPOINTS = {
  SUBMIT_APPLICATION: `${API_BASE_URL}/submit-application.php`,
  VALIDATE_EMAIL: `${API_BASE_URL}/validate-email.php`,
};

/**
 * Submit application form data
 */
export const submitApplication = async (formData) => {
  try {
    // Prepare FormData for file upload support
    const submitData = new FormData();

    // Convert form data to expected format
    const applicationData = {
      studentName: {
        first: formData.studentName.first,
        last: formData.studentName.last,
      },
      studentEmail: formData.studentEmail,
      studentCell: formData.studentCell,
      birthDate: formData.birthDate,
      gender: formData.gender,
      risingGrade: formData.risingGrade,
      tshirtSize: formData.tshirtSize,
      course: formData.course,
      sports: formData.sports,
      parentName: {
        first: formData.parentName.first,
        last: formData.parentName.last,
      },
      parentEmail: formData.parentEmail,
      parentPhone: formData.parentPhone,
    };

    // Add form data as JSON
    submitData.append("data", JSON.stringify(applicationData));

    // Add transcript file if present
    if (formData.transcript && formData.transcript instanceof File) {
      submitData.append("transcript", formData.transcript);
    }

    // Make API request
    const response = await fetch(ENDPOINTS.SUBMIT_APPLICATION, {
      method: "POST",
      body: submitData,
      // Don't set Content-Type header - let browser set it for FormData
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.error || `HTTP ${response.status}: ${response.statusText}`
      );
    }

    if (!result.success) {
      throw new Error(result.error || "Application submission failed");
    }

    return {
      success: true,
      message: result.message,
      applicationId: result.application_id,
      data: applicationData,
      emails: result.emails,
    };
  } catch (error) {
    console.error("Application submission error:", error);

    // Provide user-friendly error messages
    let errorMessage = "Submission failed. Please try again.";

    if (error.message.includes("network") || error.message.includes("fetch")) {
      errorMessage =
        "Network error. Please check your connection and try again.";
    } else if (error.message.includes("email")) {
      errorMessage =
        "Email validation failed. Please check your email addresses.";
    } else if (
      error.message.includes("file") ||
      error.message.includes("upload")
    ) {
      errorMessage =
        "File upload failed. Please check your transcript file and try again.";
    } else if (error.message) {
      errorMessage = error.message;
    }

    throw new Error(errorMessage);
  }
};
/**
 * Validate email address
 */
export const validateEmail = async (email) => {
  try {
    const response = await fetch(ENDPOINTS.VALIDATE_EMAIL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.error || `HTTP ${response.status}: ${response.statusText}`
      );
    }

    return {
      available: result.available,
      message: result.message,
    };
  } catch (error) {
    console.error("Email validation error:", error);
    throw new Error("Email validation failed. Please try again.");
  }
};
/**
 * Alternative submission method using JSON (without file upload)
 * Use this if you want to handle file uploads separately
 */
export const submitApplicationJSON = async (formData) => {
  try {
    const response = await fetch(ENDPOINTS.SUBMIT_APPLICATION, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.error || `HTTP ${response.status}: ${response.statusText}`
      );
    }

    if (!result.success) {
      throw new Error(result.error || "Application submission failed");
    }

    return {
      success: true,
      message: result.message,
      applicationId: result.application_id,
      data: formData,
    };
  } catch (error) {
    console.error("Application submission error:", error);
    throw new Error(error.message || "Submission failed. Please try again.");
  }
};
/**
 * Utility function to format file size
 */
export const formatFileSize = (bytes) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};
/**
 * Utility function to validate file before upload
 */
export const validateTranscriptFile = (file) => {
  const allowedTypes = [
    "application/pdf",
    "image/jpeg",
    "image/png",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  const maxSize = 5 * 1024 * 1024; // 5MB

  if (!file) {
    return { valid: true }; // Optional field
  }

  if (file.size > maxSize) {
    return {
      valid: false,
      message: "File size must be less than 5MB",
    };
  }

  if (!allowedTypes.includes(file.type)) {
    return {
      valid: false,
      message: "File must be PDF, JPG, PNG, or Word document",
    };
  }

  return { valid: true };
};
