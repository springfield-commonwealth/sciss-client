import { mockSubmit } from "@/api/mockSubmit";
import { applicationFormSchema } from "@/lib/schemas/applicationFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

// useApplicationForm: Handles all business logic for the ApplicationForm
export const useApplicationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
    reset,
    trigger,
  } = useForm({
    resolver: zodResolver(applicationFormSchema),
    mode: "onChange",
    defaultValues: {
      studentName: { first: "", last: "" },
      studentEmail: "",
      studentCell: "",
      birthDate: "",
      gender: undefined,
      risingGrade: undefined,
      tshirtSize: undefined,
      course: undefined,
      sports: [],
      parentName: { first: "", last: "" },
      parentEmail: "",
      parentPhone: "",
      transcript: null,
    },
  });

  const formValues = watch();

  // Handle form field changes
  const onChange = useCallback(
    (e) => {
      const { name, value, type, checked } = e.target;

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

      // Trigger validation for the changed field
      trigger(name);
    },
    [setValue, formValues, trigger]
  );

  // Handle file upload
  const onFileChange = useCallback(
    (e) => {
      const file = e.target.files[0];
      setValue("transcript", file);
    },
    [setValue]
  );

  // Handle form submission
  const onSubmit = useCallback(
    async (data) => {
      setIsSubmitting(true);
      setSubmitError(null);

      try {
        const result = await mockSubmit(data);
        setSubmitSuccess(true);
        reset(); // Clear form after successful submission
        console.log("Form submitted successfully:", result);
      } catch (error) {
        setSubmitError(error.message);
        console.error("Form submission failed:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [reset]
  );

  // Reset form state
  const resetForm = useCallback(() => {
    reset();
    setSubmitSuccess(false);
    setSubmitError(null);
  }, [reset]);

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

  return {
    // Form state
    formValues,
    errors,
    isValid,
    isSubmitting,
    submitSuccess,
    submitError,

    // Form handlers
    onChange,
    onFileChange,
    onSubmit: handleSubmit(onSubmit),
    resetForm,

    // Utilities
    getFieldError,
    register,
  };
};
