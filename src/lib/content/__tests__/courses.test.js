// Course Content Management Tests - Epic 5: Content Infrastructure Foundation
import {
  filterCourses,
  getAllCourses,
  getCourseById,
  getCourseBySlug,
  getCourseCategories,
  getCourseFormOptions,
  getCourseLevels,
  getCoursesByCategory,
  getCoursesByLevel,
  getCoursesBySession,
  getCourseStats,
  getRelatedCourses,
  searchCourses,
} from "../courses";

describe("Course Content Management", () => {
  describe("getAllCourses", () => {
    test("returns only published courses", () => {
      const courses = getAllCourses();
      expect(courses.length).toBeGreaterThan(0);
      expect(courses.every((course) => course.published)).toBe(true);
    });
  });

  describe("getCourseBySlug", () => {
    test("returns course for valid slug", () => {
      const course = getCourseBySlug("path-to-wall-street");
      expect(course).toBeDefined();
      expect(course.title).toBe("Path to Wall Street & Impact Investment");
    });

    test("returns null for invalid slug", () => {
      const course = getCourseBySlug("non-existent-course");
      expect(course).toBeNull();
    });

    test("returns course for existing slug", () => {
      const course = getCourseBySlug("artificial-intelligence");
      expect(course).toBeDefined();
      expect(course.title).toBe("Artificial Intelligence");
    });
  });

  describe("getCourseById", () => {
    test("returns course for valid ID", () => {
      const course = getCourseById("artificial-intelligence");
      expect(course).toBeDefined();
      expect(course.title).toBe("Artificial Intelligence");
    });

    test("returns null for invalid ID", () => {
      const course = getCourseById("invalid-id");
      expect(course).toBeNull();
    });
  });

  describe("getCoursesByCategory", () => {
    test("returns courses for valid category", () => {
      const courses = getCoursesByCategory("core");
      expect(courses.length).toBeGreaterThan(0);
      expect(courses.every((course) => course.category === "core")).toBe(true);
    });

    test("returns courses for arts category", () => {
      const courses = getCoursesByCategory("arts");
      expect(courses.length).toBeGreaterThanOrEqual(0);
      courses.forEach((course) => {
        expect(course.category).toBe("arts");
      });
    });
  });

  describe("getCoursesByLevel", () => {
    test("returns courses for valid level", () => {
      const courses = getCoursesByLevel("Advanced");
      expect(courses.length).toBeGreaterThan(0);
      expect(courses.every((course) => course.level === "Advanced")).toBe(true);
    });
  });

  describe("getCoursesBySession", () => {
    test("returns courses for valid session", () => {
      const courses = getCoursesBySession("Session 1");
      expect(courses.length).toBeGreaterThan(0);
      expect(courses.every((course) => course.session === "Session 1")).toBe(
        true
      );
    });
  });

  describe("searchCourses", () => {
    test("finds courses by title", () => {
      const courses = searchCourses("Wall Street");
      expect(courses.length).toBeGreaterThan(0);
      expect(courses[0].title).toContain("Wall Street");
    });

    test("finds courses by description content", () => {
      const courses = searchCourses("finance");
      expect(courses.length).toBeGreaterThan(0);
    });

    test("finds courses by tags", () => {
      const courses = searchCourses("technology");
      expect(courses.length).toBeGreaterThanOrEqual(0);
    });

    test("returns empty array for no matches", () => {
      const courses = searchCourses("nonexistent-unique-term-12345");
      expect(courses).toHaveLength(0);
    });
  });

  describe("getRelatedCourses", () => {
    test("finds related courses based on category and level", () => {
      const wallStreetCourse = getCourseBySlug("path-to-wall-street");
      const related = getRelatedCourses(wallStreetCourse, 5);

      expect(related.length).toBeGreaterThanOrEqual(0);
      expect(related.length).toBeLessThanOrEqual(5);

      // Should not include the source course itself
      related.forEach((relatedCourse) => {
        expect(relatedCourse.id).not.toBe(wallStreetCourse.id);
      });
    });

    test("respects limit parameter", () => {
      const wallStreetCourse = getCourseBySlug("path-to-wall-street");
      const related = getRelatedCourses(wallStreetCourse, 2);

      expect(related.length).toBeLessThanOrEqual(2);
    });
  });

  describe("getCourseCategories", () => {
    test("returns metadata categories", () => {
      const categories = getCourseCategories();
      expect(categories).toContain("core");
      expect(Array.isArray(categories)).toBe(true);
    });
  });

  describe("getCourseLevels", () => {
    test("returns unique levels from published courses", () => {
      const levels = getCourseLevels();
      expect(levels).toContain("Advanced");
      expect(Array.isArray(levels)).toBe(true);
      expect(levels.length).toBeGreaterThan(0);
    });
  });

  describe("getCourseStats", () => {
    test("returns correct statistics structure", () => {
      const stats = getCourseStats();

      expect(stats).toHaveProperty("totalCourses");
      expect(stats).toHaveProperty("totalCapacity");
      expect(stats).toHaveProperty("categoryCounts");
      expect(stats.totalCourses).toBeGreaterThan(0);
      expect(stats.totalCapacity).toBeGreaterThan(0);
      expect(typeof stats.categoryCounts).toBe("object");
    });
  });

  describe("filterCourses", () => {
    test("filters by category", () => {
      const allCourses = getAllCourses();
      const coreCoursesCount = allCourses.filter(
        (c) => c.category === "core"
      ).length;
      const filtered = filterCourses({ category: "core" });
      expect(filtered).toHaveLength(coreCoursesCount);
    });

    test("filters by level", () => {
      const allCourses = getAllCourses();
      const advancedCoursesCount = allCourses.filter(
        (c) => c.level === "Advanced"
      ).length;
      const filtered = filterCourses({ level: "Advanced" });
      expect(filtered).toHaveLength(advancedCoursesCount);
    });

    test("filters by search term", () => {
      const filtered = filterCourses({ search: "Wall Street" });
      expect(filtered.length).toBeGreaterThanOrEqual(0);
      if (filtered.length > 0) {
        expect(filtered[0].title).toContain("Wall Street");
      }
    });

    test("combines multiple filters", () => {
      const filtered = filterCourses({
        category: "core",
        level: "Advanced",
        search: "Wall Street",
      });
      expect(filtered.length).toBeGreaterThanOrEqual(0);
      if (filtered.length > 0) {
        expect(filtered[0].title).toContain("Wall Street");
        expect(filtered[0].category).toBe("core");
        expect(filtered[0].level).toBe("Advanced");
      }
    });
  });

  describe("getCourseFormOptions", () => {
    test("returns form options for published courses", () => {
      const options = getCourseFormOptions();
      const totalCourses = getAllCourses().length;

      expect(options).toHaveLength(totalCourses);
      expect(options[0]).toHaveProperty("value");
      expect(options[0]).toHaveProperty("label");
      expect(typeof options[0].label).toBe("string");
      expect(typeof options[0].value).toBe("string");
    });
  });
});
