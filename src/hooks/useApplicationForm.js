import {
  submitApplication,
  validateEmail,
  validateTranscriptFile,
} from "@/api/applicationApi.js";
import { applicationFormSchema } from "@/lib/schemas/applicationFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";

export const useApplicationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [emailValidation, setEmailValidation] = useState(null);
  const [isValidatingEmail, setIsValidatingEmail] = useState(false);
  const defaultValues = useMemo(
    () => ({
      studentName: { first: "", last: "", preferredName: "" },
      studentEmail: "",
      studentCell: "",
      birthDate: "",
      gender: undefined,
      risingGrade: undefined,
      tshirtSize: undefined,
      sessions: [],
      sessionTracks: {},
      sports: [],
      address: {
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        country: "",
      },
      hasValidVisa: undefined,
      needsInvitationLetter: undefined,
      parentName: { first: "", last: "" },
      parentEmail: "",
      parentPhone: "",
      parentWhatsapp: "",
      currentSchoolName: "",
      financialAidInterest: undefined,
      pricingTier: undefined,
      airportPickup: undefined,
      hearAboutUs: [],
      hearAboutUsOther: "",
      questionsNotes: "",
      photoPermission: undefined,
      allergiesOrMedicalCare: "",
      depositConfirmation: undefined,
      receiptEmail: "",
      transcript: [],
    }),
    []
  );
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
    reset,
    trigger,
    setError,
    clearErrors,
  } = useForm({
    resolver: zodResolver(applicationFormSchema),
    mode: "onChange",
    defaultValues,
  });
  const formValues = watch();
  // Scroll to the first field with an error
  const scrollToFirstError = useCallback((errorsObj) => {
    const keys = Object.keys(errorsObj || {});
    if (keys.length === 0) return;
    const firstKey = keys[0];
    const name = firstKey;
    const el = typeof document !== 'undefined' ? document.querySelector(`[name="${name}"]`) : null;
    if (el && typeof el.scrollIntoView === 'function') {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      if (typeof el.focus === 'function') {
        el.focus();
      }
    } else if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);
  // Handle form field changes
  const onChange = useCallback(
    (e) => {
      const { name, value, checked } = e.target;
      if (name.startsWith("sessionTrack.")) {
        // Handle track selection for a session (format: sessionTrack.Session 1)
        // This must come BEFORE the general dot check to avoid incorrect parsing
        const session = name.replace("sessionTrack.", "");
        const currentSessionTracks = formValues.sessionTracks || {};
        setValue("sessionTracks", {
          ...currentSessionTracks,
          [session]: value,
        });
        // Trigger validation for sessionTracks
        trigger("sessionTracks");
      } else if (name.includes(".")) {
        // Handle nested objects like studentName.first
        const [parent, key] = name.split(".");
        setValue(parent, { ...formValues[parent], [key]: value });
      } else if (name === "sports") {
        // Handle sports checkboxes
        const currentSports = formValues.sports || [];
        if (checked) {
          setValue("sports", [...currentSports, value]);
        } else {
          setValue(
            "sports",
            currentSports.filter((sport) => sport !== value)
          );
        }
      } else if (name === "hearAboutUs") {
        // Handle "How did you hear about us" checkboxes
        const currentOptions = formValues.hearAboutUs || [];
        if (checked) {
          const baseOptions = [...currentOptions, value];
          // If "Referred by an Organization" is selected, also automatically select "Other"
          const newOptions = value === "Referred by an Organization" && !baseOptions.includes("Other")
            ? [...baseOptions, "Other"]
            : baseOptions;
          setValue("hearAboutUs", newOptions);
          // Trigger validation for hearAboutUs and hearAboutUsOther
          trigger("hearAboutUs");
          if (newOptions.includes("Other")) {
            trigger("hearAboutUsOther");
          }
        } else {
          const newOptions = currentOptions.filter((option) => option !== value);
          // If "Referred by an Organization" is deselected, also deselect "Other" if it was only selected because of that
          // (We'll keep it simple - if they deselect "Referred by an Organization", we won't auto-deselect "Other" in case they want both)
          setValue("hearAboutUs", newOptions);
          trigger("hearAboutUs");
        }
      } else if (name === "sessions") {
        // Handle session checkboxes
        const currentSessions = formValues.sessions || [];
        if (checked) {
          setValue("sessions", [...currentSessions, value]);
        } else {
          const updatedSessions = currentSessions.filter((session) => session !== value);
          setValue("sessions", updatedSessions);
          // Remove track selection for deselected session
          const currentSessionTracks = formValues.sessionTracks || {};
          const updatedSessionTracks = { ...currentSessionTracks };
          delete updatedSessionTracks[value];
          setValue("sessionTracks", updatedSessionTracks);
        }
        // Trigger validation for both sessions and sessionTracks
        trigger("sessions");
        trigger("sessionTracks");
      } else {
        setValue(name, value);
      }
      // Clear needsInvitationLetter when hasValidVisa is set to "Yes"
      if (name === "hasValidVisa" && value === "Yes") {
        setValue("needsInvitationLetter", undefined);
        clearErrors("needsInvitationLetter");
      }
      // Clear any existing errors for this field
      clearErrors(name);
      // Trigger validation for the changed field
      trigger(name);
      // Clear email validation when student email changes
      if (name === "studentEmail") {
        setEmailValidation(null);
      }
    },
    [setValue, formValues, trigger, clearErrors]
  );
  // Handle file upload with validation
  const onFileChange = useCallback(
    (e) => {
      const files = e.target.files ? Array.from(e.target.files) : [];

      if (files.length > 0) {
        // Validate each file before setting
        const currentFiles = formValues.transcript || [];
        const newFiles = [];

        for (const file of files) {
          const validation = validateTranscriptFile(file);
          if (!validation.valid) {
            setError("transcript", {
              type: "manual",
              message: validation.message,
            });
            return;
          }
          newFiles.push(file);
        }

        // Check if adding these files would exceed the limit
        if (currentFiles.length + newFiles.length > 3) {
          setError("transcript", {
            type: "manual",
            message: "You can upload a maximum of 3 files",
          });
          return;
        }

        clearErrors("transcript");
        setValue("transcript", [...currentFiles, ...newFiles]);
      } else {
        setValue("transcript", []);
      }

      trigger("transcript"); // Always trigger validation after file change
    },
    [setValue, setError, clearErrors, trigger, formValues.transcript]
  );

  // Handle removing a specific file
  const onRemoveFile = useCallback(
    (fileIndex) => {
      const currentFiles = formValues.transcript || [];
      const updatedFiles = currentFiles.filter((_, index) => index !== fileIndex);
      setValue("transcript", updatedFiles);
      trigger("transcript");
    },
    [setValue, trigger, formValues.transcript]
  );
  // Validate email address against database
  const validateStudentEmail = useCallback(
    async (email) => {
      if (!email || !email.includes("@")) return;
      setIsValidatingEmail(true);
      try {
        const result = await validateEmail(email);
        setEmailValidation(result);

        if (!result.available) {
          setError("studentEmail", {
            type: "manual",
            message: "This email address is already registered",
          });
        } else {
          clearErrors("studentEmail");
        }
      } catch (error) {
        console.error("Email validation error:", error);
        setEmailValidation({
          available: true,
          message: "Unable to validate email",
        });
      } finally {
        setIsValidatingEmail(false);
      }
    },
    [setError, clearErrors]
  );
  // Debounced email validation
  const onEmailBlur = useCallback(
    (e) => {
      const email = e.target.value;
      if (email) {
        validateStudentEmail(email);
      }
    },
    [validateStudentEmail]
  );
  // Handle form submission
  const onSubmit = useCallback(
    async (data) => {
      setIsSubmitting(true);
      setSubmitError(null);
      try {
        // Final file validation
        if (data.transcript && data.transcript.length > 0) {
          for (const file of data.transcript) {
            const fileValidation = validateTranscriptFile(file);
            if (!fileValidation.valid) {
              throw new Error(fileValidation.message);
            }
          }
        }
        // Submit to PHP backend
        const result = await submitApplication(data);

        // Show success state
        setSubmitSuccess(true);

        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Reset form after successful submission
        reset(defaultValues);
        setEmailValidation(null);

        // Log success for analytics/debugging
        if (window.gtag) {
          window.gtag("event", "application_submit", {
            event_category: "form",
            event_label: "success",
            application_id: result.applicationId,
          });
        }
      } catch (error) {
        console.error('onSubmit error:', error);
        // Log error for analytics/debugging
        if (window.gtag) {
          window.gtag("event", "application_submit", {
            event_category: "form",
            event_label: "error",
            error_message: error.message,
          });
        }
        setSubmitError(error.message);
        // Bring the user to the error message area
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } finally {
        setIsSubmitting(false);
      }
    },
    [reset, defaultValues]
  );

  // Compose a single submit handler that also handles invalid cases immediately
  const onFormSubmit = useMemo(() =>
    handleSubmit(onSubmit, (invalidErrors) => {
      // ensure immediate scroll/focus on first error
      setSubmitError((prev) => prev || "Please correct the highlighted fields.");
      scrollToFirstError(invalidErrors);
    })
    , [handleSubmit, onSubmit, scrollToFirstError]);
  // Reset form state
  const resetForm = useCallback(() => {
    reset(defaultValues);
    setSubmitSuccess(false);
    setSubmitError(null);
    setEmailValidation(null);
  }, [reset, defaultValues]);
  // Get error message for a specific field
  const getFieldError = useCallback(
    (fieldName) => {
      if (fieldName.includes(".")) {
        const parts = fieldName.split(".");
        let error = errors;
        for (const part of parts) {
          if (error && error[part]) {
            error = error[part];
          } else {
            return undefined;
          }
        }
        return error?.message;
      }
      return errors[fieldName]?.message;
    },
    [errors]
  );
  // Check if email is being validated
  const isEmailValidating = useCallback(
    (fieldName) => {
      return fieldName === "studentEmail" && isValidatingEmail;
    },
    [isValidatingEmail]
  );
  // Get email validation status
  const getEmailValidationStatus = useCallback(() => {
    return emailValidation;
  }, [emailValidation]);
  return {
    // Form state
    formValues,
    errors,
    isValid,
    isSubmitting,
    submitSuccess,
    submitError,
    emailValidation,
    isValidatingEmail,
    // Form handlers
    onChange,
    onFileChange,
    onRemoveFile,
    onSubmit, // raw valid submit (not used by component directly)
    onFormSubmit, // composed handler: valid + immediate onInvalid scroll
    onEmailBlur,
    resetForm,
    // Utilities
    getFieldError,
    isEmailValidating,
    getEmailValidationStatus,
    register,
    validateStudentEmail,
  };
};
