import {
  formatFileSize,
  submitApplication,
  submitApplicationJSON,
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
        studentName: { first: "John", last: "Doe" },
        studentEmail: "john.doe@example.com",
        studentCell: "+14155552671",
        birthDate: "2005-01-01",
        gender: "Male",
        risingGrade: "G10",
        tshirtSize: "Male M",
        course: "Artificial Intelligence",
        sports: ["Basketball"],
        parentName: { first: "Jane", last: "Doe" },
        parentEmail: "jane.doe@example.com",
        parentPhone: "+8613812345678",
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
      const formData = {
        studentName: { first: "A", last: "B" },
        studentEmail: "a@b.com",
        studentCell: "+1234567890",
        birthDate: "2000-01-01",
        gender: "Male",
        risingGrade: "G10",
        tshirtSize: "Male M",
        course: "Artificial Intelligence",
        sports: ["Basketball"],
        parentName: { first: "C", last: "D" },
        parentEmail: "c@d.com",
        parentPhone: "+1987654321",
        transcript: fakeFile,
      };
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
          studentName: { first: "A", last: "B" },
          studentEmail: "a@b.com",
          studentCell: "+1234567890",
          birthDate: "2000-01-01",
          gender: "Male",
          risingGrade: "G10",
          tshirtSize: "Male M",
          course: "Artificial Intelligence",
          sports: ["Basketball"],
          parentName: { first: "C", last: "D" },
          parentEmail: "c@d.com",
          parentPhone: "+1987654321",
        })
      ).rejects.toThrow("Bad request");
    });

    it("handles network error", async () => {
      globalAny.fetch.mockRejectedValue(new Error("network error"));
      await expect(
        submitApplication({
          studentName: { first: "A", last: "B" },
          studentEmail: "a@b.com",
          studentCell: "+1234567890",
          birthDate: "2000-01-01",
          gender: "Male",
          risingGrade: "G10",
          tshirtSize: "Male M",
          course: "Artificial Intelligence",
          sports: ["Basketball"],
          parentName: { first: "C", last: "D" },
          parentEmail: "c@d.com",
          parentPhone: "+1987654321",
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
        "Invalid email"
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

  describe("submitApplicationJSON", () => {
    it("submits JSON and handles success", async () => {
      globalAny.fetch.mockResolvedValue({
        ok: true,
        json: async () => ({
          success: true,
          message: "ok",
          application_id: "id",
        }),
      });
      const data = { foo: "bar" };
      const result = await submitApplicationJSON(data);
      expect(result.success).toBe(true);
      expect(globalAny.fetch).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          method: "POST",
          headers: expect.objectContaining({
            "Content-Type": "application/json",
          }),
          body: JSON.stringify(data),
        })
      );
    });
    it("handles backend error", async () => {
      globalAny.fetch.mockResolvedValue({
        ok: false,
        json: async () => ({ error: "fail" }),
        status: 400,
        statusText: "Bad Request",
      });
      await expect(submitApplicationJSON({})).rejects.toThrow("fail");
    });
    it("handles network error", async () => {
      globalAny.fetch.mockRejectedValue(new Error("network error"));
      await expect(submitApplicationJSON({})).rejects.toThrow(/network error/i);
    });
  });
});
