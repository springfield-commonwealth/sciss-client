import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";

export const applicationFormSchema = z
  .object({
    studentName: z.object({
      first: z.string().min(1, "First name is required"),
      last: z.string().min(1, "Last name is required"),
      preferredName: z
        .string()
        .max(50, "Preferred name must be at most 50 characters")
        .optional(),
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
    address: z.object({
      address1: z
        .string()
        .min(1, "Address Line 1 is required")
        .max(100, "Address Line 1 must be at most 100 characters"),
      address2: z
        .string()
        .max(100, "Address Line 2 must be at most 100 characters")
        .optional(),
      city: z
        .string()
        .min(1, "City is required")
        .max(50, "City must be at most 50 characters"),
      state: z
        .string()
        .min(1, "State/Province is required")
        .max(50, "State/Province must be at most 50 characters"),
      zip: z
        .string()
        .min(1, "Zip/Postal Code is required")
        .max(20, "Zip/Postal Code must be at most 20 characters"),
      country: z
        .string()
        .min(1, "Country is required")
        .max(56, "Country must be at most 56 characters"),
    }),
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
    financialAidInterest: z.enum(["Yes", "No"], {
      required_error: "Please indicate financial aid interest",
      invalid_type_error: "Please indicate financial aid interest",
    }),
    currentSchoolName: z.string().min(1, "Current school name is required"),
    yearApplyingFor: z.string().min(1, "Year applying for is required"),
    transcript: z
      .any()
      .refine(
        (file) => {
          if (!file || !(file instanceof File)) return true; // Only check type/size if file is present
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
          if (!file || !(file instanceof File)) return true;
          const maxSize = 5 * 1024 * 1024; // 5MB
          return file.size <= maxSize;
        },
        {
          message: "File size must be less than 5MB",
        }
      ),
  })
  .superRefine((data, ctx) => {
    if (
      data.financialAidInterest === "Yes" &&
      !(data.transcript instanceof File)
    ) {
      ctx.addIssue({
        path: ["transcript"],
        code: z.ZodIssueCode.custom,
        message: "Transcript is required for financial aid applicants",
      });
    }
  });

// For JavaScript, we can export the inferred type as a comment for reference
// Type: { studentName: { first: string, last: string }, studentEmail: string, ... }
