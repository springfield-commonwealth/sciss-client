import Layout from "@/components/layouts/Layout";
import { DirectoryPage } from "@/components/ui";
import {
  getAllStaff,
  getStaffDepartments,
  getStaffStats,
} from "@/lib/content/staff";
import { generateBreadcrumbs } from "@/lib/utils/navigation";
import { useEffect, useState } from "react";

// Staff Directory Page Component - Using Universal Directory System
const StaffDirectory = ({ staff, departments, stats, breadcrumbs = [] }) => {
  const [selectedDepartment, setSelectedDepartment] = useState("");

  // Handle department filtering from badge clicks
  useEffect(() => {
    const handleFilterByDepartment = (event) => {
      const { department } = event.detail;
      if (department === '' || selectedDepartment === department) {
        // Clear filter if empty string or same department clicked
        setSelectedDepartment("");
      } else {
        // Filter by department
        setSelectedDepartment(department);
      }
    };

    window.addEventListener('filterByDepartment', handleFilterByDepartment);
    return () => {
      window.removeEventListener('filterByDepartment', handleFilterByDepartment);
    };
  }, [selectedDepartment]);
  // Custom content renderer for staff - simplified version
  const renderStaffContent = (member) => {
    return (
      <div className="staff-simple-card">
        <div className="staff-simple-info">
          <p className="staff-simple-title">{member.position}</p>
        </div>
      </div>
    );
  };

  // No badges for simplified view
  const renderStaffBadges = (member) => {
    return null;
  };

  // Function to get staff departments for grouping
  const getStaffDepartments = (member) => member.department;

  return (
    <Layout
      title="Faculty & Staff - SCISS"
      description="Meet our exceptional team of educators, industry experts, and professionals who bring real-world expertise to the SCISS learning experience."
      breadcrumbs={breadcrumbs}
      showBreadcrumb={true}
    >
      <DirectoryPage
        type="staff"
        title="Meet Our Team"
        description="Meet our exceptional team of educators, industry experts, and professionals who bring real-world expertise to the SCISS learning experience."
        items={staff}
        gridColumns={3}
        categories={departments}
        stats={stats}
        breadcrumbs={breadcrumbs}
        renderCardContent={renderStaffContent}
        renderBadges={renderStaffBadges}
        getItemCategories={getStaffDepartments}
        showCategories={false}
        disableLinks={true}
        disableHover={true}
        disableClick={true}
        externalSelectedCategory={selectedDepartment}
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
};

export default StaffDirectory;

export async function getStaticProps() {
  const staff = getAllStaff();
  const departments = getStaffDepartments();
  const stats = getStaffStats();

  // Generate breadcrumbs
  const breadcrumbs = generateBreadcrumbs([
    { label: "Home", href: "/" },
    { label: "Faculty & Staff", href: "/staff", active: true },
  ]);

  return {
    props: {
      staff,
      departments,
      stats,
      breadcrumbs,
    },
  };
}
