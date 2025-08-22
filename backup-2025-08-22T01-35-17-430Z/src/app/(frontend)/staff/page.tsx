"use client";

import Layout from "@/app/src/components/layouts/Layout";
import React from "react";

import { DirectoryPage } from "@/app/src/components/ui";
import {
  getAllStaff,
  getStaffDepartments,
  getStaffStats,
} from "@/app/src/lib/content/staff";
import { generateBreadcrumbs } from "@/app/src/lib/utils/navigation";

// Staff Directory Page Component - Using Universal Directory System
export default function StaffDirectory(): React.JSX.Element {
  // Generate breadcrumbs for staff page
  const breadcrumbs = generateBreadcrumbs([
    { label: "Home", href: "/" },
    { label: "Our Staff", href: "/staff", active: true },
  ]);

  // Get staff data
  const staff = getAllStaff();
  const departments = getStaffDepartments();
  const stats = getStaffStats();

  // Custom content renderer for staff
  const renderStaffContent = (member) => {
    return (
      <>
        <div className="card__expertise">
          {member.expertise && member.expertise.length > 0 ? (
            <>
              {member.expertise.slice(0, 3).map((skill, index) => (
                <span key={index} className="expertise-badge">
                  {skill}
                </span>
              ))}
              {member.expertise.length > 3 && (
                <span className="expertise-more">
                  +{member.expertise.length - 3} more
                </span>
              )}
            </>
          ) : (
            <span className="expertise-badge">Expert</span>
          )}
        </div>
        <div className="card__bio">
          {member.bio
            ? member.bio.length > 120
              ? `${member.bio.substring(0, 120)}...`
              : member.bio
            : "Experienced professional with expertise in their field."}
        </div>
        {member.courses && member.courses.length > 0 && (
          <div className="card__courses">
            <p className="teaches-label">
              Teaches: {member.courses.length} course
              {member.courses.length !== 1 ? "s" : ""}
            </p>
          </div>
        )}
      </>
    );
  };

  // Custom badge renderer for staff
  const renderStaffBadges = (member) => {
    return (
      <>
        {member.expertise && member.expertise.length > 0 ? (
          <>
            {member.expertise.slice(0, 3).map((skill, index) => (
              <span key={index} className="expertise-badge">
                {skill}
              </span>
            ))}
            {member.expertise.length > 3 && (
              <span className="expertise-more">
                +{member.expertise.length - 3} more
              </span>
            )}
          </>
        ) : (
          <span className="expertise-badge">Expert</span>
        )}
      </>
    );
  };

  // Function to get staff departments for grouping
  const getStaffDepartmentForGrouping = (member) => member.department;

  return (
    <Layout
      title="Faculty & Staff - SCISS"
      description="Meet our exceptional team of educators, industry experts, and professionals who bring real-world expertise to the SCISS learning experience."
      breadcrumbs={breadcrumbs}
      showBreadcrumb={true}
    >
      <DirectoryPage
        type="staff"
        title="Faculty & Staff Directory"
        description="Meet our exceptional team of educators, industry experts, and professionals who bring real-world expertise to the SCISS learning experience."
        items={staff}
        gridColumns={3}
        categories={departments}
        stats={stats}
        breadcrumbs={breadcrumbs}
        renderCardContent={renderStaffContent}
        renderBadges={renderStaffBadges}
        getItemCategories={getStaffDepartmentForGrouping}
        ctaConfig={{
          footerCTA: {
            title: "Academic Programs",
            link: "/courses",
          },
        }}
        seoConfig={{
          title: "Faculty & Staff Directory | SCISS",
          description:
            "Meet our exceptional team of educators, industry experts, and professionals who bring real-world expertise to the SCISS learning experience.",
          keywords:
            "SCISS faculty, staff directory, educators, industry experts, teaching professionals",
          ogTitle: "Faculty & Staff Directory | SCISS",
          ogDescription:
            "Meet our exceptional team of educators, industry experts, and professionals who bring real-world expertise to the SCISS learning experience.",
          canonicalUrl: "https://sciss.org/staff",
        }}
      />
    </Layout>
  );
}
