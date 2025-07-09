import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";

export const applicationFormSchema = z.object({
  studentName: z.object({
    first: z.string().min(1, "First name is required"),
    last: z.string().min(1, "Last name is required"),
  }),
  studentEmail: z.string().email("Please enter a valid email address"),
  studentCell: z
    .string()
    .min(1, "Cell phone is required")
    .refine(
      (value) => isValidPhoneNumber(value),
      "Please enter a valid phone number"
    ),
  birthDate: z.string().min(1, "Birth date is required"),
  gender: z.enum(["Male", "Female"], {
    required_error: "Please select your gender",
    invalid_type_error: "Please select your gender",
  }),
  risingGrade: z.enum(["G7", "G8", "G9", "G10", "G11", "G12"], {
    required_error: "Please select your rising grade",
    invalid_type_error: "Please select your rising grade",
  }),
  tshirtSize: z.enum(
    [
      "Male XS",
      "Female XS",
      "Male S",
      "Female S",
      "Male M",
      "Female M",
      "Male L",
      "Female L",
    ],
    {
      required_error: "Please select your t-shirt size",
      invalid_type_error: "Please select your t-shirt size",
    }
  ),
  course: z.enum(
    [
      "Path to Wall Street & Impact Investment",
      "Youth Innovation & Entrepreneurship",
      "Artificial Intelligence",
      "Public Speaking & Debate",
      "Language Programs",
      "Visual Arts",
    ],
    {
      required_error: "Please select your program and course",
      invalid_type_error: "Please select your program and course",
    }
  ),
  sports: z
    .array(
      z.enum([
        "Basketball",
        "Fitness Training",
        "Rowing Crew",
        "Fencing",
        "Golf",
        "Soccer",
        "Hiking",
      ])
    )
    .min(1, "Please select at least one sport"),
  parentName: z.object({
    first: z.string().min(1, "Parent first name is required"),
    last: z.string().min(1, "Parent last name is required"),
  }),
  parentEmail: z.string().email("Please enter a valid parent email address"),
  parentPhone: z
    .string()
    .min(1, "Parent phone is required")
    .refine(
      (value) => isValidPhoneNumber(value),
      "Please enter a valid phone number"
    ),
  transcript: z
    .any()
    .refine(
      (file) => {
        if (!file) return true; // Optional field
        if (!(file instanceof File)) return false;
        const allowedTypes = [
          "application/pdf",
          "image/jpeg",
          "image/jpg",
          "image/png",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];
        return allowedTypes.includes(file.type);
      },
      {
        message: "File must be PDF, JPG, PNG, or Word document (DOC/DOCX)",
      }
    )
    .refine(
      (file) => {
        if (!file) return true; // Optional field
        if (!(file instanceof File)) return false;
        const maxSize = 5 * 1024 * 1024; // 5MB
        return file.size <= maxSize;
      },
      {
        message: "File size must be less than 5MB",
      }
    )
    .optional(),
});

// For JavaScript, we can export the inferred type as a comment for reference
// Type: { studentName: { first: string, last: string }, studentEmail: string, ... }
