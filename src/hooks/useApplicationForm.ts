import {
  submitApplication,
  validateEmail,
  validateTranscriptFile,
} from "@/api/applicationApi.js";
import { applicationFormSchema } from "@/lib/schemas/applicationFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";

type ApplicationFormData = z.infer<typeof applicationFormSchema>;

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
      course: undefined,
      sports: [],
      address: {
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        country: "",
      },
      parentName: { first: "", last: "" },
      parentEmail: "",
      parentPhone: "",
      currentSchoolName: "",
      yearApplyingFor: "",
      financialAidInterest: undefined,
      transcript: null,
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
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationFormSchema),
    mode: "onChange",
    defaultValues,
  });
  const formValues = watch();
  // Handle form field changes
  const onChange = useCallback(
    (e) => {
      const { name, value, checked } = e.target;
      if (name.includes(".")) {
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
      } else {
        setValue(name, value);
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
      const file =
        e.target.files && e.target.files[0] ? e.target.files[0] : null;

      if (file) {
        // Validate file before setting
        const validation = validateTranscriptFile(file);
        if (!validation.valid) {
          setError("transcript", {
            type: "manual",
            message: validation.message,
          });
          return;
        }
        clearErrors("transcript");
      }

      setValue("transcript", file);
      trigger("transcript"); // Always trigger validation after file change
    },
    [setValue, setError, clearErrors, trigger]
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
        if (data.transcript) {
          const fileValidation = validateTranscriptFile(data.transcript);
          if (!fileValidation.valid) {
            throw new Error(fileValidation.message);
          }
        }
        // Submit to PHP backend
        const result = await submitApplication(data);

        // Show success state
        setSubmitSuccess(true);

        // Reset form after successful submission
        reset(defaultValues);
        setEmailValidation(null);

        // Log success for analytics/debugging
        if ((window as any).gtag) {
          (window as any).gtag("event", "application_submit", {
            event_category: "form",
            event_label: "success",
            application_id: result.applicationId,
          });
        }
      } catch (error) {
        // Log error for analytics/debugging
        if ((window as any).gtag) {
          (window as any).gtag("event", "application_submit", {
            event_category: "form",
            event_label: "error",
            error_message: error.message,
          });
        }
        setSubmitError(error.message);
      } finally {
        setIsSubmitting(false);
      }
    },
    [reset, defaultValues]
  );
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
        const [parent, key] = fieldName.split(".");
        return errors[parent]?.[key]?.message;
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
    onSubmit: handleSubmit(onSubmit),
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
