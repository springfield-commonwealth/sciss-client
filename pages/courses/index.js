import Layout from "@/components/layouts/Layout";
import FooterCTA from "@/components/ui/FooterCTA";
import {
  getAllCourses,
  getCourseCategories,
  getCourseStats,
} from "@/lib/content/courses";
import { generateBreadcrumbs } from "@/lib/utils/navigation";
import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

// Courses Directory Page Component
const CoursesDirectory = ({ courses, categories, stats, breadcrumbs = [] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Filter courses based on search and category
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        searchTerm === "" ||
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.outcomes.some((outcome) =>
          outcome.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "" || course.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [courses, searchTerm, selectedCategory]);

  // Clear filters function
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
  };

  return (
    <Layout
      title="Academic Courses - SCISS"
      description="Comprehensive academic courses designed for international summer school students."
      breadcrumbs={breadcrumbs}
      showBreadcrumb={true}
    >
      <Head>
        <title>Academic Courses - SC International Summer School</title>
        <meta
          name="description"
          content="Discover our comprehensive academic courses at SCISS. From core curriculum to specialized electives, explore educational programs designed for international students."
        />
        <meta
          name="keywords"
          content="summer school courses, academic programs, international education, core curriculum, electives"
        />
        <meta property="og:title" content="Academic Courses - SCISS" />
        <meta
          property="og:description"
          content="Comprehensive academic courses designed for international summer school students."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://sciss.ca/courses" />
      </Head>

      <div className="courses-directory">
        {/* Header Section */}
        <div className="courses-header">
          <h1>Academic Courses</h1>
          <p className="courses-subtitle">
            Explore our comprehensive academic programs designed to challenge
            and inspire international students in a dynamic learning
            environment.
          </p>

          {/* Course Statistics */}
          <div className="courses-stats">
            <div className="stat-item">
              <span className="stat-number">{stats.totalCourses}</span>
              <span className="stat-label">Total Courses</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{stats.coreCoursesCount}</span>
              <span className="stat-label">Core Courses</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">
                {stats.categoryCounts.language + stats.categoryCounts.arts}
              </span>
              <span className="stat-label">Specialized Programs</span>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="courses-filters">
          <div className="filter-row">
            <div className="search-input-wrapper">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
                aria-label="Search courses"
              />
            </div>

            <div className="category-filter-wrapper">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="category-filter"
                aria-label="Filter by category"
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {(searchTerm || selectedCategory) && (
              <button
                onClick={clearFilters}
                className="clear-filters-btn"
                aria-label="Clear all filters"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Results Summary */}
        <div className="results-summary">
          <p>
            Showing {filteredCourses.length} of {courses.length} courses
            {selectedCategory && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        {/* Courses Grid */}
        <section className="courses-grid">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div key={course.slug} className="course-card">
                <div className="course-card-header">
                  <h3 className="course-title">
                    <Link href={`/courses/${course.slug}`}>{course.title}</Link>
                  </h3>
                  <span className="course-category">{course.category}</span>
                </div>

                <div className="course-card-content">
                  <p className="course-description">{course.description}</p>

                  <div className="course-details">
                    <div className="course-duration">
                      <strong>Duration:</strong> {course.duration}
                    </div>
                    <div className="course-level">
                      <strong>Level:</strong> {course.level}
                    </div>
                  </div>

                  {course.outcomes && course.outcomes.length > 0 && (
                    <div className="course-outcomes">
                      <strong>Key Outcomes:</strong>
                      <ul>
                        {course.outcomes.slice(0, 2).map((outcome, index) => (
                          <li key={index}>{outcome}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="course-card-footer">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="btn btn-secondary"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <h3>No courses found</h3>
              <p>
                No courses match your current search criteria. Try adjusting
                your filters or search terms.
              </p>
              <button onClick={clearFilters} className="btn btn-primary">
                View All Courses
              </button>
            </div>
          )}
        </section>

        {/* Quick Links */}
        <div className="courses-quick-links">
          <h2>Explore More</h2>
          <div className="quick-links-grid">
            <Link href="/activities" className="quick-link-card">
              <h3>Life & Activities</h3>
              <p>Discover sports, fitness, and recreational programs</p>
            </Link>
            <Link href="/trips" className="quick-link-card">
              <h3>Day Trips</h3>
              <p>Explore cultural and educational excursions</p>
            </Link>
            <Link href="/staff" className="quick-link-card">
              <h3>Our Instructors</h3>
              <p>Meet our experienced faculty and staff</p>
            </Link>
          </div>
        </div>
      </div>
      <FooterCTA linkTitle="Apply Now" link="/apply" />
    </Layout>
  );
};

// Static props for courses directory
export async function getStaticProps() {
  try {
    const courses = getAllCourses();
    const categories = getCourseCategories();
    const stats = getCourseStats();
    const breadcrumbs = generateBreadcrumbs([
      { label: "Home", href: "/" },
      { label: "Academic Courses", href: "/courses", active: true },
    ]);

    return {
      props: {
        courses,
        categories,
        stats,
        breadcrumbs,
      },
    };
  } catch (error) {
    console.error("Error loading courses data:", error);
    return {
      props: {
        courses: [],
        categories: [],
        stats: {
          totalCourses: 0,
          coreCoursesCount: 0,
          categoryCounts: { language: 0, arts: 0 },
        },
        breadcrumbs: [],
      },
    };
  }
}

export default CoursesDirectory;
