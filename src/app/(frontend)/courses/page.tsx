"use client";

import Layout from "@/components/layouts/Layout";
import { DirectoryPage } from "@/components/ui";
import {
  getAllCourses,
  getCourseCategories,
  getCourseStats,
} from "@/lib/content/courses";
import { generateBreadcrumbs } from "@/lib/utils/navigation";
import React from "react";

export default function CoursesDirectory(): React.JSX.Element {
  // Generate breadcrumbs for courses page
  const breadcrumbs = generateBreadcrumbs([
    { label: "Home", href: "/" },
    { label: "Academic Programs", href: "/courses", active: true },
  ]);

  // Get courses data
  const courses = getAllCourses();
  const courseCategories = getCourseCategories();
  const stats = getCourseStats();

  // Custom content renderer for courses
  const renderCourseContent = (course) => {
    return (
      <>
        <div className="card__description">
          {course.description
            ? course.description.length > 120
              ? `${course.description.substring(0, 120)}...`
              : course.description
            : "Comprehensive course designed to provide cutting-edge knowledge and practical skills."}
        </div>
        <div className="card__details">
          <div className="detail-item">
            <strong>Duration:</strong> {course.duration}
          </div>
          <div className="detail-item">
            <strong>Level:</strong> {course.level}
          </div>
        </div>
        {course.outcomes && course.outcomes.length > 0 && (
          <div className="card__outcomes">
            <strong>Key Outcomes:</strong>
            <ul>
              {course.outcomes.slice(0, 2).map((outcome, index) => (
                <li key={index}>{outcome}</li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
  };

  // Custom badge renderer for courses
  const renderCourseBadges = (course) => {
    return (
      <>
        <span className="category-badge">{course.category}</span>
        <span className="level-badge">{course.level}</span>
      </>
    );
  };

  // Function to get course categories for grouping
  const getCourseCategoryForGrouping = (course) => course.category;

  return (
    <Layout
      title="Academic Programs - SCISS"
      description="Explore our comprehensive academic programs designed to provide cutting-edge knowledge and practical skills for your future success."
      breadcrumbs={breadcrumbs}
      showBreadcrumb={true}
    >
      <DirectoryPage
        type="courses"
        title="Academic Programs Directory"
        description="Explore our comprehensive academic programs designed to provide cutting-edge knowledge and practical skills for your future success."
        items={courses}
        categories={courseCategories}
        stats={stats}
        breadcrumbs={breadcrumbs}
        renderCardContent={renderCourseContent}
        renderBadges={renderCourseBadges}
        getItemCategories={getCourseCategoryForGrouping}
        ctaConfig={{
          footerCTA: {
            title: "Life Activities",
            link: "/activities",
          },
        }}
        seoConfig={{
          title: "Academic Programs Directory | SCISS",
          description:
            "Explore our comprehensive academic programs designed to provide cutting-edge knowledge and practical skills for your future success.",
          keywords:
            "SCISS courses, academic programs, educational courses, skill development, career preparation",
          ogTitle: "Academic Programs Directory | SCISS",
          ogDescription:
            "Explore our comprehensive academic programs designed to provide cutting-edge knowledge and practical skills for your future success.",
          canonicalUrl: "https://sciss.org/courses",
        }}
      />
    </Layout>
  );
}
