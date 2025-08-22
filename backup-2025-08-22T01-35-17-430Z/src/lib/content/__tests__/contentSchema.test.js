// Content Schema Validation Tests - Epic 5: Content Infrastructure Foundation
// Test Zod schema validation for all content types

import {
  generateSlug,
  isValidSlug,
  validateAcademicPrograms,
  validateContentItem,
  validateDayTrips,
  validateLifeActivities,
  validateStaff,
} from "@/lib/schemas/contentSchema";

// Import existing academic programs data for testing
import academicPrograms from "@/data/content/academic-programs.json";

describe("Content Schema Validation", () => {
  describe("Academic Programs Validation", () => {
    test("validates existing academic-programs.json successfully", () => {
      const result = validateAcademicPrograms(academicPrograms);

      expect(result.success).toBe(true);
      expect(result.data).toBeDefined();
      expect(result.errors).toBeNull();
      expect(result.data.courses).toHaveLength(6);
    });

    test("validates individual course content", () => {
      const course = academicPrograms.courses[0];
      const result = validateContentItem(course, "course");

      expect(result.success).toBe(true);
      expect(result.data).toBeDefined();
      expect(result.errors).toBeNull();
    });

    test("rejects invalid course data", () => {
      const invalidCourse = {
        id: "",
        title: "",
        // Missing required fields
      };

      const result = validateContentItem(invalidCourse, "course");

      expect(result.success).toBe(false);
      expect(result.errors).toBeDefined();
      expect(result.errors.length).toBeGreaterThan(0);
    });
  });

  describe("Slug Generation and Validation", () => {
    test("generates valid slugs from titles", () => {
      const testCases = [
        { title: "Path to Wall Street", expected: "path-to-wall-street" },
        {
          title: "Youth Innovation & Entrepreneurship",
          expected: "youth-innovation-entrepreneurship",
        },
        {
          title: "Artificial Intelligence",
          expected: "artificial-intelligence",
        },
        {
          title: "Public Speaking & Debate!!!",
          expected: "public-speaking-debate",
        },
        {
          title: "Language Programs  (Multiple  Spaces)",
          expected: "language-programs-multiple-spaces",
        },
      ];

      testCases.forEach(({ title, expected }) => {
        const slug = generateSlug(title);
        expect(slug).toBe(expected);
        expect(isValidSlug(slug)).toBe(true);
      });
    });

    test("validates slug format correctly", () => {
      const validSlugs = [
        "path-to-wall-street",
        "artificial-intelligence",
        "public-speaking",
        "ai",
        "course-1",
      ];

      const invalidSlugs = [
        "Path-To-Wall-Street", // Uppercase
        "path_to_wall_street", // Underscores
        "path--to--wall--street", // Double hyphens
        "-path-to-wall-street", // Leading hyphen
        "path-to-wall-street-", // Trailing hyphen
        "", // Empty
        "path to wall street", // Spaces
      ];

      validSlugs.forEach((slug) => {
        expect(isValidSlug(slug)).toBe(true);
      });

      invalidSlugs.forEach((slug) => {
        expect(isValidSlug(slug)).toBe(false);
      });
    });
  });

  describe("Content Type Validation", () => {
    test("validates valid content types", () => {
      const validTypes = ["course", "activity", "trip", "staff"];

      validTypes.forEach((type) => {
        const result = validateContentItem({}, type);
        expect(result.success).toBe(false); // Should fail with empty data
        expect(result.errors).toBeDefined(); // But should recognize the type
      });
    });

    test("rejects invalid content types", () => {
      const result = validateContentItem({}, "invalid-type");

      expect(result.success).toBe(false);
      expect(result.errors).toBeDefined();
      expect(result.errors[0].message).toContain("Unknown content type");
    });
  });

  describe("SEO Metadata Validation", () => {
    test("validates SEO metadata structure", () => {
      const course = academicPrograms.courses[0];
      const result = validateContentItem(course, "course");

      expect(result.success).toBe(true);
      expect(result.data.seo).toBeDefined();
      expect(result.data.seo.metaTitle).toBeDefined();
      expect(result.data.seo.metaDescription).toBeDefined();
      expect(result.data.seo.keywords).toBeInstanceOf(Array);
    });

    test("enforces SEO metadata length limits", () => {
      const courseWithLongSEO = {
        ...academicPrograms.courses[0],
        seo: {
          ...academicPrograms.courses[0].seo,
          metaTitle: "A".repeat(90), // Too long (limit is 80)
          metaDescription: "B".repeat(250), // Too long (limit is 200)
        },
      };

      const result = validateContentItem(courseWithLongSEO, "course");

      expect(result.success).toBe(false);
      expect(
        result.errors.some((err) => err.message.includes("Meta title too long"))
      ).toBe(true);
      expect(
        result.errors.some((err) =>
          err.message.includes("Meta description too long")
        )
      ).toBe(true);
    });
  });

  describe("Content Collection Validation", () => {
    test("validates collection metadata", () => {
      const result = validateAcademicPrograms(academicPrograms);

      expect(result.success).toBe(true);
      expect(result.data.metadata).toBeDefined();
      expect(result.data.metadata.totalCourses).toBe(6);
      expect(result.data.metadata.version).toBeDefined();
      expect(result.data.metadata.categories).toBeInstanceOf(Array);
      expect(result.data.metadata.lastUpdated).toBeDefined();
    });

    test("validates course categories match enum", () => {
      const validCategories = ["core", "language", "arts"];

      academicPrograms.courses.forEach((course) => {
        expect(validCategories).toContain(course.category);
      });
    });

    test("validates course levels match enum", () => {
      const validLevels = [
        "Beginner",
        "Intermediate",
        "Advanced",
        "All Levels",
        "All Ages",
      ];

      academicPrograms.courses.forEach((course) => {
        expect(validLevels).toContain(course.level);
      });
    });

    test("debug validation errors", () => {
      const result = validateAcademicPrograms(academicPrograms);
      if (!result.success) {
        console.log(
          "Validation errors:",
          JSON.stringify(result.errors.slice(0, 5), null, 2)
        );
      }
      // This test is for debugging - it will show errors if any exist
    });

    test("validates course sessions match enum", () => {
      const validSessions = ["Session 1", "Session 2", "Both Sessions"];

      academicPrograms.courses.forEach((course) => {
        expect(validSessions).toContain(course.session);
      });
    });
  });

  describe("Future Content Type Placeholders", () => {
    test("life activities validation structure exists", () => {
      expect(validateLifeActivities).toBeDefined();
      expect(typeof validateLifeActivities).toBe("function");

      // Test with empty data should fail but function should exist
      const result = validateLifeActivities({});
      expect(result.success).toBe(false);
    });

    test("day trips validation structure exists", () => {
      expect(validateDayTrips).toBeDefined();
      expect(typeof validateDayTrips).toBe("function");

      // Test with empty data should fail but function should exist
      const result = validateDayTrips({});
      expect(result.success).toBe(false);
    });

    test("staff validation structure exists", () => {
      expect(validateStaff).toBeDefined();
      expect(typeof validateStaff).toBe("function");

      // Test with empty data should fail but function should exist
      const result = validateStaff({});
      expect(result.success).toBe(false);
    });
  });
});

describe("Content Infrastructure Integration", () => {
  test("academic programs data integrity", () => {
    // Verify all courses have unique IDs
    const ids = academicPrograms.courses.map((course) => course.id);
    const uniqueIds = [...new Set(ids)];
    expect(ids.length).toBe(uniqueIds.length);

    // Verify all courses have unique slugs
    const slugs = academicPrograms.courses.map((course) => course.slug);
    const uniqueSlugs = [...new Set(slugs)];
    expect(slugs.length).toBe(uniqueSlugs.length);

    // Verify all slugs are valid format
    slugs.forEach((slug) => {
      expect(isValidSlug(slug)).toBe(true);
    });
  });

  test("content metadata consistency", () => {
    const publishedCourses = academicPrograms.courses.filter(
      (course) => course.published
    );

    // Metadata count should match actual published courses
    expect(academicPrograms.metadata.totalCourses).toBe(
      publishedCourses.length
    );

    // All categories in metadata should exist in courses
    const courseCategories = [
      ...new Set(publishedCourses.map((course) => course.category)),
    ];
    academicPrograms.metadata.categories.forEach((category) => {
      expect(courseCategories).toContain(category);
    });
  });
});
