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
    risingGrade: z.enum(["G4", "G5", "G6", "G7", "G8", "G9", "G10", "G11", "G12"], {
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
    sessions: z
      .array(
        z.enum(["Session 1", "Session 2", "Session 3", "Session 4"])
      )
      .min(1, "Please select at least one session"),
    sessionTracks: z
      .record(
        z.enum(["Session 1", "Session 2", "Session 3", "Session 4"]),
        z.enum([
          "Path to Wall Street (Investment)",
          "Youth Innovation & Entrepreneurship (Teen Start-ups)",
          "Elite Leadership · Art · English · Finance · Sports",
        ])
      )
      .optional(),
    sports: z
      .array(
        z.enum([
          "Basketball",
          "Soccer",
          "Volleyball",
          "Badminton",
          "Table Tennis",
          "Hiking",
          "Golf",
          "Zumba",
          "Yoga",
          "Rowing",
          "Gym",
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
    hasValidVisa: z.enum(["Yes", "No"], {
      required_error: "Please indicate if you have a valid visa to the US",
      invalid_type_error: "Please indicate if you have a valid visa to the US",
    }),
    needsInvitationLetter: z.enum(["Yes", "No"]).optional(),
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
    pricingTier: z.enum(["Regular", "Early Bird"], {
      required_error: "Please select pricing tier",
      invalid_type_error: "Please select pricing tier",
    }),
    airportPickup: z.enum(["No", "Yes One Way", "Yes Two Way"], {
      required_error: "Please select airport pickup option",
      invalid_type_error: "Please select airport pickup option",
    }),
    hearAboutUs: z
      .array(
        z.enum([
          "Online Search",
          "Social Media",
          "SCA/Visewise Academy",
          "Friends or Family",
          "Flyer or Brochure",
          "Webinar/Event",
          "Referred by an Organization",
          "Other",
        ])
      )
      .min(1, "Please select at least one option"),
    hearAboutUsOther: z.string().optional(),
    questionsNotes: z.string().max(1000, "Notes must be at most 1000 characters").optional(),
    photoPermission: z.enum(["Yes", "No"], {
      required_error: "Please indicate photo permission",
      invalid_type_error: "Please indicate photo permission",
    }),
    allergiesOrMedicalCare: z.string().min(1, "Medical information is required. Please write N/A if your child has no allergies.").max(500, "Allergy/Medical care notes must be at most 500 characters"),
    depositConfirmation: z.enum(["Yes", "No"], {
      required_error: "Please confirm if you would like to pay the $500 deposit to secure your spot",
      invalid_type_error: "Please confirm if you would like to pay the $500 deposit to secure your spot",
    }),
    receiptEmail: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
    transcript: z
      .array(z.any())
      .max(3, "You can upload a maximum of 3 files")
      .refine(
        (files) => {
          if (!files || files.length === 0) return true; // Optional field
          return files.every((file) => {
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
          });
        },
        {
          message: "All files must be PDF, JPG, PNG, or Word document (DOC/DOCX)",
        }
      )
      .refine(
        (files) => {
          if (!files || files.length === 0) return true;
          const maxSize = 5 * 1024 * 1024; // 5MB
          return files.every((file) => file instanceof File && file.size <= maxSize);
        },
        {
          message: "Each file must be less than 5MB",
        }
      ),
  })
  .superRefine((data, ctx) => {
    if (
      data.financialAidInterest === "Yes" &&
      (!data.transcript || data.transcript.length === 0)
    ) {
      ctx.addIssue({
        path: ["transcript"],
        code: z.ZodIssueCode.custom,
        message: "At least one file is required for financial aid applicants",
      });
    }

    // Validate that if "Other" is selected in hearAboutUs, hearAboutUsOther must be provided
    if (data.hearAboutUs && data.hearAboutUs.includes("Other") && (!data.hearAboutUsOther || data.hearAboutUsOther.trim() === "")) {
      ctx.addIssue({
        path: ["hearAboutUsOther"],
        code: z.ZodIssueCode.custom,
        message: "Please specify how you heard about us",
      });
    }

    // Validate that if student doesn't have a valid visa, they must indicate if they need an invitation letter
    if (data.hasValidVisa === "No" && !data.needsInvitationLetter) {
      ctx.addIssue({
        path: ["needsInvitationLetter"],
        code: z.ZodIssueCode.custom,
        message: "Please indicate if you need an invitation letter to help apply for a visa",
      });
    }

    // Validate that each selected session has a track
    if (data.sessions && data.sessions.length > 0) {
      const sessionTracks = data.sessionTracks || {};
      for (const session of data.sessions) {
        if (!sessionTracks[session]) {
          ctx.addIssue({
            path: ["sessionTracks", session],
            code: z.ZodIssueCode.custom,
            message: `Please select a track for ${session}`,
          });
        }
      }

      // Validate that sessions don't overlap by comparing dates
      // Hardcode session dates to avoid import issues during SSR
      const sessionDates = {
        "Session 1": {
          start: new Date("2026-06-14"),
          end: new Date("2026-06-26")
        },
        "Session 2": {
          start: new Date("2026-06-28"),
          end: new Date("2026-07-10")
        },
        "Session 3": {
          start: new Date("2026-07-12"),
          end: new Date("2026-07-24")
        },
        "Session 4": {
          start: new Date("2026-07-26"),
          end: new Date("2026-08-07")
        }
      };

      // Check each pair of selected sessions for overlap
      for (let i = 0; i < data.sessions.length; i++) {
        for (let j = i + 1; j < data.sessions.length; j++) {
          const session1 = data.sessions[i];
          const session2 = data.sessions[j];
          const dates1 = sessionDates[session1];
          const dates2 = sessionDates[session2];

          if (dates1 && dates2) {
            // Check if sessions overlap: start1 <= end2 && start2 <= end1
            if (dates1.start <= dates2.end && dates2.start <= dates1.end) {
              ctx.addIssue({
                path: ["sessions"],
                code: z.ZodIssueCode.custom,
                message: `${session1} and ${session2} have overlapping dates. Please select sessions that don't overlap.`,
              });
              return; // Stop after first overlap found
            }
          }
        }
      }
    }
  });

// For JavaScript, we can export the inferred type as a comment for reference
// Type: { studentName: { first: string, last: string }, studentEmail: string, ... }
