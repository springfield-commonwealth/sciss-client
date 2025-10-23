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
  const [filteredStaff, setFilteredStaff] = useState(staff);
  const [activeFilter, setActiveFilter] = useState(null);

  // Handle department filtering
  useEffect(() => {
    const handleFilterByDepartment = (event) => {
      const { department } = event.detail;
      if (activeFilter === department) {
        // If clicking the same department, show all
        setFilteredStaff(staff);
        setActiveFilter(null);
      } else {
        // Filter by department
        const filtered = staff.filter(member => member.department === department);
        setFilteredStaff(filtered);
        setActiveFilter(department);
      }
    };

    window.addEventListener('filterByDepartment', handleFilterByDepartment);
    return () => {
      window.removeEventListener('filterByDepartment', handleFilterByDepartment);
    };
  }, [staff, activeFilter]);
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
      {activeFilter && (
        <div style={{
          textAlign: 'center',
          padding: '1rem',
          backgroundColor: '#fef3c7',
          border: '1px solid #f59e0b',
          borderRadius: '8px',
          margin: '1rem 0'
        }}>
          <p style={{ margin: 0, color: '#92400e' }}>
            Showing: <strong>{activeFilter}</strong> ({filteredStaff.length} member{filteredStaff.length !== 1 ? 's' : ''})
            <button
              onClick={() => {
                setFilteredStaff(staff);
                setActiveFilter(null);
              }}
              style={{
                marginLeft: '1rem',
                padding: '0.25rem 0.75rem',
                backgroundColor: '#f59e0b',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Show All
            </button>
          </p>
        </div>
      )}
      <DirectoryPage
        type="staff"
        title="Meet Our Team"
        description="Meet our exceptional team of educators, industry experts, and professionals who bring real-world expertise to the SCISS learning experience."
        items={filteredStaff}
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
