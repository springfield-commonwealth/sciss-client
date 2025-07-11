import { applicationFormSchema } from "@/lib/schemas/applicationFormSchema";
import {
  formatFileSize,
  submitApplication,
  validateEmail,
  validateTranscriptFile,
} from "./applicationApi";

// Mock global fetch
const globalAny = global;
beforeEach(() => {
  globalAny.fetch = jest.fn();
});
afterEach(() => {
  jest.resetAllMocks();
});

const validBase = {
  studentName: { first: "John", last: "Doe", preferredName: "" },
  studentEmail: "john.doe@example.com",
  studentCell: "+14155552671",
  birthDate: "2005-01-01",
  gender: "Male",
  risingGrade: "G10",
  tshirtSize: "Male M",
  course: "Artificial Intelligence",
  sports: ["Basketball"],
  address: {
    address1: "123 Main St",
    address2: "",
    city: "Boston",
    state: "MA",
    zip: "02134",
    country: "United States",
  },
  parentName: { first: "Jane", last: "Doe" },
  parentEmail: "jane.doe@example.com",
  parentPhone: "+8613812345678",
  currentSchoolName: "Test School",
  yearApplyingFor: "2024",
  financialAidInterest: "No",
  transcript: undefined,
};

describe("applicationApi", () => {
  describe("submitApplication", () => {
    it("submits correct payload and handles success", async () => {
      const mockResponse = {
        ok: true,
        json: async () => ({
          success: true,
          message: "ok",
          application_id: "abc123",
          emails: {},
        }),
      };
      globalAny.fetch.mockResolvedValue(mockResponse);

      const formData = {
        studentName: { first: "John", last: "Doe", preferredName: "" },
        studentEmail: "john.doe@example.com",
        studentCell: "+14155552671",
        birthDate: "2005-01-01",
        gender: "Male",
        risingGrade: "G10",
        tshirtSize: "Male M",
        course: "Artificial Intelligence",
        sports: ["Basketball"],
        address: {
          address1: "123 Main St",
          address2: "",
          city: "Boston",
          state: "MA",
          zip: "02134",
          country: "United States",
        },
        parentName: { first: "Jane", last: "Doe" },
        parentEmail: "jane.doe@example.com",
        parentPhone: "+8613812345678",
        currentSchoolName: "Test School",
        yearApplyingFor: "2024",
        financialAidInterest: "No",
        transcript: undefined,
      };
      const result = await submitApplication(formData);
      expect(result.success).toBe(true);
      expect(result.applicationId).toBe("abc123");
      expect(globalAny.fetch).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          method: "POST",
          body: expect.any(FormData),
        })
      );
      // Check FormData content
      const formDataArg = globalAny.fetch.mock.calls[0][1].body;
      expect(formDataArg.get("data")).toContain("john.doe@example.com");
    });

    it("handles file upload", async () => {
      const mockResponse = {
        ok: true,
        json: async () => ({
          success: true,
          message: "ok",
          application_id: "id",
          emails: {},
        }),
      };
      globalAny.fetch.mockResolvedValue(mockResponse);
      const fakeFile = new File(["test"], "test.pdf", {
        type: "application/pdf",
      });
      const formData = { ...validBase, transcript: fakeFile };
      await submitApplication(formData);
      const formDataArg = globalAny.fetch.mock.calls[0][1].body;
      expect(formDataArg.get("transcript")).toBe(fakeFile);
    });

    it("handles backend error response", async () => {
      globalAny.fetch.mockResolvedValue({
        ok: false,
        json: async () => ({ error: "Bad request" }),
        status: 400,
        statusText: "Bad Request",
      });
      await expect(
        submitApplication({
          ...validBase,
        })
      ).rejects.toThrow("Bad request");
    });

    it("handles network error", async () => {
      globalAny.fetch.mockRejectedValue(new Error("network error"));
      await expect(
        submitApplication({
          ...validBase,
        })
      ).rejects.toThrow(/Network error/i);
    });
  });

  describe("validateEmail", () => {
    it("returns available true for valid email", async () => {
      globalAny.fetch.mockResolvedValue({
        ok: true,
        json: async () => ({ available: true, message: "ok" }),
      });
      const result = await validateEmail("test@example.com");
      expect(result.available).toBe(true);
    });
    it("handles backend error", async () => {
      globalAny.fetch.mockResolvedValue({
        ok: false,
        json: async () => ({ error: "Invalid email" }),
        status: 400,
        statusText: "Bad Request",
      });
      await expect(validateEmail("bad@bad.com")).rejects.toThrow(
        "Email validation failed. Please try again."
      );
    });
    it("handles network error", async () => {
      globalAny.fetch.mockRejectedValue(new Error("network error"));
      await expect(validateEmail("fail@fail.com")).rejects.toThrow(
        /validation failed/i
      );
    });
  });

  describe("validateTranscriptFile", () => {
    it("accepts valid PDF file", () => {
      const file = new File(["test"], "test.pdf", { type: "application/pdf" });
      expect(validateTranscriptFile(file).valid).toBe(true);
    });
    it("rejects large file", () => {
      const file = new File([new ArrayBuffer(6 * 1024 * 1024)], "big.pdf", {
        type: "application/pdf",
      });
      expect(validateTranscriptFile(file).valid).toBe(false);
    });
    it("rejects invalid type", () => {
      const file = new File(["test"], "test.exe", {
        type: "application/x-msdownload",
      });
      expect(validateTranscriptFile(file).valid).toBe(false);
    });
    it("accepts empty file (optional)", () => {
      expect(validateTranscriptFile(null).valid).toBe(true);
    });
  });

  describe("formatFileSize", () => {
    it("formats bytes to KB, MB, etc.", () => {
      expect(formatFileSize(0)).toBe("0 Bytes");
      expect(formatFileSize(1024)).toBe("1 KB");
      expect(formatFileSize(1048576)).toBe("1 MB");
      expect(formatFileSize(1536)).toBe("1.5 KB");
    });
  });
});

describe("applicationFormSchema", () => {
  it("requires all address fields except address2", () => {
    const base = {
      ...validBase,
      address: {
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        country: "",
      },
    };
    const result = applicationFormSchema.safeParse(base);
    expect(result.success).toBe(false);
    const errorPaths = result.error.issues.map((issue) => issue.path.join("."));
    expect(errorPaths).toEqual(
      expect.arrayContaining([
        "address.address1",
        "address.city",
        "address.state",
        "address.zip",
        "address.country",
      ])
    );
  });

  it("requires currentSchoolName, yearApplyingFor, and financialAidInterest", () => {
    const base = {
      ...validBase,
      currentSchoolName: "",
      yearApplyingFor: "",
      financialAidInterest: "",
    };
    const result = applicationFormSchema.safeParse(base);
    expect(result.success).toBe(false);
    const errorPaths = result.error.issues.map((issue) => issue.path.join("."));
    expect(errorPaths).toEqual(
      expect.arrayContaining([
        "currentSchoolName",
        "yearApplyingFor",
        "financialAidInterest",
      ])
    );
  });

  it("requires transcript if financialAidInterest is Yes", () => {
    const base = {
      ...validBase,
      financialAidInterest: "Yes",
      transcript: null,
    };
    const result = applicationFormSchema.safeParse(base);
    expect(result.success).toBe(false);
    const errorPaths = result.error.issues.map((issue) => issue.path.join("."));
    expect(errorPaths).toEqual(expect.arrayContaining(["transcript"]));
  });

  it("does not require transcript if financialAidInterest is No", () => {
    const base = {
      ...validBase,
      financialAidInterest: "No",
      transcript: undefined,
    };
    const result = applicationFormSchema.safeParse(base);
    expect(result.success).toBe(true);
  });
});
