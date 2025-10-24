/**
 * API Service for SCISS Application System
 * Replaces mockSubmit.js with real backend integration
 */
// Use environment variable for API base URL with fallback
// In development, use localhost or disable API calls
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ||
  (process.env.NODE_ENV === 'development' ? null : 'https://sciss.org/api');

const ENDPOINTS = API_BASE_URL ? {
  SUBMIT_APPLICATION: `${API_BASE_URL}/submit-application.php`,
  VALIDATE_EMAIL: `${API_BASE_URL}/validate-email.php`,
} : {
  SUBMIT_APPLICATION: null,
  VALIDATE_EMAIL: null,
};

/**
 * Submit application form data
 */
export const submitApplication = async (formData) => {
  try {
    console.log('submitApplication called with:', formData);
    console.log('API_BASE_URL:', API_BASE_URL);
    console.log('NODE_ENV:', process.env.NODE_ENV);
    console.log('ENDPOINTS.SUBMIT_APPLICATION:', ENDPOINTS.SUBMIT_APPLICATION);

    // Check if API_BASE_URL is valid or if we're in development mode
    if (!API_BASE_URL || API_BASE_URL === 'undefined' || !ENDPOINTS.SUBMIT_APPLICATION) {
      if (process.env.NODE_ENV === 'development') {
        // In development, simulate a successful submission
        console.log('Development mode: Simulating successful form submission');
        return {
          success: true,
          message: 'Application submitted successfully (development mode)',
          applicationId: 'dev-' + Date.now()
        };
      } else {
        throw new Error('API_BASE_URL is not configured. Please set NEXT_PUBLIC_API_URL environment variable.');
      }
    }
    // Prepare FormData for file upload support
    const submitData = new FormData();

    // Convert form data to expected format
    const applicationData = {
      studentName: {
        first: formData.studentName.first,
        last: formData.studentName.last,
        preferredName: formData.studentName.preferredName,
      },
      studentEmail: formData.studentEmail,
      studentCell: formData.studentCell,
      birthDate: formData.birthDate,
      gender: formData.gender,
      risingGrade: formData.risingGrade,
      tshirtSize: formData.tshirtSize,
      course: formData.course,
      sports: formData.sports,
      address: {
        address1: formData.address.address1,
        address2: formData.address.address2,
        city: formData.address.city,
        state: formData.address.state,
        zip: formData.address.zip,
        country: formData.address.country,
      },
      currentSchoolName: formData.currentSchoolName,
      financialAidInterest: formData.financialAidInterest,
      parentName: {
        first: formData.parentName.first,
        last: formData.parentName.last,
      },
      parentEmail: formData.parentEmail,
      parentPhone: formData.parentPhone,
      parentWhatsapp: formData.parentWhatsapp,
    };

    // Add form data as JSON
    submitData.append("data", JSON.stringify(applicationData));

    // Add transcript files if present
    if (formData.transcript && Array.isArray(formData.transcript) && formData.transcript.length > 0) {
      formData.transcript.forEach((file, index) => {
        if (file instanceof File) {
          submitData.append(`transcript_${index}`, file);
        }
      });
      // Also append the count for the backend
      submitData.append("transcript_count", formData.transcript.length);
    }

    // Make API request
    console.log('Making API call to:', ENDPOINTS.SUBMIT_APPLICATION);
    const response = await fetch(ENDPOINTS.SUBMIT_APPLICATION, {
      method: "POST",
      body: submitData,
      // Don't set Content-Type header - let browser set it for FormData
    });
    console.log('API response status:', response.status);

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
  console.log("api url: ", API_BASE_URL);

  // Check if API_BASE_URL is valid
  if (!API_BASE_URL || API_BASE_URL === 'undefined') {
    if (process.env.NODE_ENV === 'development') {
      console.log('Development mode: Skipping email validation');
      return { isValid: true, message: 'Email validation skipped (development mode)' };
    } else {
      console.warn('API_BASE_URL is not set, skipping email validation');
      return { isValid: true, message: 'Email validation skipped' };
    }
  }

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
