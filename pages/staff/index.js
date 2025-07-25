import Layout from "@/components/layouts/Layout";
import FooterCTA from "@/components/ui/FooterCTA";
import {
  getAllStaff,
  getStaffDepartments,
  getStaffStats,
} from "@/lib/content/staff";
import { generateBreadcrumbs } from "@/lib/utils/navigation";
import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

// Staff Directory Page Component
const StaffDirectory = ({ staff, departments, stats, breadcrumbs }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  // Filter staff based on search and department
  const filteredStaff = useMemo(() => {
    return staff.filter((member) => {
      const matchesSearch =
        searchTerm === "" ||
        member.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.expertise.some((skill) =>
          skill.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesDepartment =
        selectedDepartment === "" || member.department === selectedDepartment;

      return matchesSearch && matchesDepartment;
    });
  }, [staff, searchTerm, selectedDepartment]);

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <Head>
        <title>Faculty & Staff Directory | SCISS</title>
        <meta
          name="description"
          content="Meet our exceptional faculty and staff at SCISS. Learn from industry experts, Wall Street professionals, and renowned educators."
        />
        <meta
          name="keywords"
          content="SCISS faculty, staff directory, instructors, Wall Street experts, AI educators, entrepreneurship mentors"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Faculty & Staff Directory | SCISS" />
        <meta
          property="og:description"
          content="Meet our exceptional faculty and staff at SCISS. Learn from industry experts, Wall Street professionals, and renowned educators."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sciss.edu/staff" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://sciss.edu/staff" />
      </Head>

      <main className="staff-directory">
        {/* Header Section */}
        <section className="staff-directory-header">
          <div className="container">
            <h1>Faculty & Staff Directory</h1>
            <p className="directory-subtitle">
              Meet our exceptional team of educators, industry experts, and
              professionals who bring real-world expertise to the SCISS learning
              experience.
            </p>

            {/* Statistics */}
            <div className="staff-stats">
              <div className="stat-item">
                <span className="stat-number">{stats.totalStaff}</span>
                <span className="stat-label">Faculty Members</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{departments.length}</span>
                <span className="stat-label">Departments</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{stats.activeStaff}</span>
                <span className="stat-label">Active This Year</span>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="staff-directory-filters">
          <div className="container">
            <div className="filter-controls">
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search faculty by name, position, or expertise..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>

              <div className="department-filter">
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="department-select"
                >
                  <option value="">All Departments</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="results-count">
              Showing {filteredStaff.length} of {staff.length} faculty members
            </div>
          </div>
        </section>

        {/* Staff Grid */}
        <section className="staff-directory-grid">
          <div className="container">
            {filteredStaff.length > 0 ? (
              <div className="staff-grid">
                {filteredStaff.map((member) => (
                  <Link
                    key={member.id}
                    href={`/staff/${member.slug}`}
                    className="staff-card"
                  >
                    <div className="staff-card-image">
                      {member.profileImage && (
                        <img
                          src={member.profileImage}
                          alt={`${member.firstName} ${member.lastName}`.trim()}
                          className="staff-photo"
                        />
                      )}
                    </div>

                    <div className="staff-card-content">
                      <h3 className="staff-card-name">
                        {`${member.firstName} ${member.lastName}`.trim()}
                      </h3>
                      <p className="staff-card-position">{member.position}</p>
                      <p className="staff-card-department">
                        {member.department}
                      </p>

                      <div className="staff-card-expertise">
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
                      </div>

                      <p className="staff-card-bio">
                        {member.bio.substring(0, 120)}
                        {member.bio.length > 120 && "..."}
                      </p>

                      <div className="staff-card-courses">
                        {member.courses && member.courses.length > 0 && (
                          <p className="teaches-label">
                            Teaches: {member.courses.length} course
                            {member.courses.length !== 1 ? "s" : ""}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="staff-card-footer">
                      <span className="view-profile-text">
                        View Full Profile →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="no-results">
                <h3>No faculty members found</h3>
                <p>Try adjusting your search criteria or department filter.</p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedDepartment("");
                  }}
                  className="reset-filters-btn"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="staff-directory-cta">
          <div className="container">
            <h2>Learn from Industry Experts</h2>
            <p>
              Our faculty brings decades of real-world experience from Wall
              Street, leading universities, and innovative companies to provide
              you with unparalleled educational opportunities.
            </p>
            <div className="cta-actions">
              <Link href="/apply" className="btn btn-primary btn-large">
                Apply Now
              </Link>
              <Link href="/academics" className="btn btn-secondary">
                View Academic Programs
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterCTA linkTitle="Academic Programs" link="/academics" />
    </Layout>
  );
};

// Static Site Generation
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

export default StaffDirectory;
