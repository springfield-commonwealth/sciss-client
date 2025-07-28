import Layout from "@/components/layouts/Layout";
import { Badge, BadgeGroup, SectionHeader, StatsGrid } from "@/components/ui";
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
const StaffDirectory = ({ staff, departments, stats, breadcrumbs = [] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  // Filter staff based on search and department
  const filteredStaff = useMemo(() => {
    return staff.filter((member) => {
      const matchesSearch =
        searchTerm === "" ||
        member.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.position?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (member.expertise &&
          member.expertise.some((skill) =>
            skill.toLowerCase().includes(searchTerm.toLowerCase())
          ));

      const matchesDepartment =
        selectedDepartment === "" || member.department === selectedDepartment;

      return matchesSearch && matchesDepartment;
    });
  }, [staff, searchTerm, selectedDepartment]);

  // Prepare stats data for StatsGrid component
  const statsData = [
    {
      number: stats.totalStaff,
      label: "Faculty Members",
      icon: "👨‍🏫",
    },
    {
      number: departments.length,
      label: "Departments",
      icon: "🏢",
    },
    {
      number: stats.activeStaff,
      label: "Active This Year",
      icon: "✅",
    },
  ];

  return (
    <Layout
      title="Our Instructors - SCISS"
      description="Meet our experienced faculty and staff at SCISS."
      breadcrumbs={breadcrumbs}
      showBreadcrumb={true}
    >
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
            <SectionHeader
              title="Faculty & Staff Directory"
              description="Meet our exceptional team of educators, industry experts, and professionals who bring real-world expertise to the SCISS learning experience."
              showDivider
            />

            {/* Statistics using reusable StatsGrid component */}
            <StatsGrid
              stats={statsData}
              columns={3}
              hoverable
              onStatClick={(stat, index) => {
                console.log("Clicked stat:", stat, index);
              }}
            />
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
                          alt={
                            `${member.firstName || ""} ${
                              member.lastName || ""
                            }`.trim() ||
                            member.position ||
                            "Faculty Member"
                          }
                          className="staff-photo"
                        />
                      )}
                    </div>

                    <div className="staff-card-content">
                      <h3 className="staff-card-name">
                        {`${member.firstName || ""} ${
                          member.lastName || ""
                        }`.trim() ||
                          member.position ||
                          "Faculty Member"}
                      </h3>
                      <p className="staff-card-position">
                        {member.position || "Faculty Member"}
                      </p>
                      <p className="staff-card-department">
                        {member.department || "General Faculty"}
                      </p>

                      <div className="staff-card-expertise">
                        <BadgeGroup>
                          {member.expertise && member.expertise.length > 0 ? (
                            <>
                              {member.expertise
                                .slice(0, 3)
                                .map((skill, index) => (
                                  <Badge
                                    key={index}
                                    variant="info"
                                    size="small"
                                  >
                                    {skill}
                                  </Badge>
                                ))}
                              {member.expertise.length > 3 && (
                                <Badge variant="default" size="small">
                                  +{member.expertise.length - 3} more
                                </Badge>
                              )}
                            </>
                          ) : (
                            <Badge variant="secondary" size="small">
                              Expert
                            </Badge>
                          )}
                        </BadgeGroup>
                      </div>

                      <p className="staff-card-bio">
                        {member.bio
                          ? member.bio.length > 120
                            ? `${member.bio.substring(0, 120)}...`
                            : member.bio
                          : "Experienced professional with expertise in their field."}
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

        {/* Departments Overview */}
        <section className="departments-overview">
          <div className="container">
            <SectionHeader
              title="Academic Departments"
              description="Explore our diverse academic departments and meet the experts who lead each area of study."
              showDivider
            />
            <div className="departments-grid">
              {departments.map((department) => {
                const departmentStaff = staff.filter(
                  (member) => member.department === department
                );
                return (
                  <div
                    key={department}
                    className="department-overview-card card-base"
                  >
                    <h3>{department}</h3>
                    <div className="department-count">
                      {departmentStaff.length} Faculty Member
                      {departmentStaff.length !== 1 ? "s" : ""}
                    </div>
                    <div className="department-examples">
                      {departmentStaff.slice(0, 3).map((member, idx) => (
                        <div key={idx} className="example-member">
                          {`${member.firstName} ${member.lastName}`.trim()}
                        </div>
                      ))}
                      {departmentStaff.length > 3 && (
                        <div className="example-member">
                          +{departmentStaff.length - 3} more
                        </div>
                      )}
                    </div>
                    <button
                      className="department-filter-btn"
                      onClick={() => setSelectedDepartment(department)}
                    >
                      View {department} Faculty
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="staff-directory-cta">
          <div className="container">
            <SectionHeader
              title="Ready to Learn from the Best?"
              description="Our exceptional faculty brings real-world expertise and industry connections to every SCISS program."
              showDivider
            />
            <div className="cta-actions">
              <Link href="/apply" className="btn btn-primary btn-large">
                Apply Now
              </Link>
              <Link href="/academics" className="btn btn-secondary">
                Explore Programs
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FooterCTA linkTitle="Academic Programs" link="/academics" />
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
    { label: "Academics", href: "/academics" },
    { label: "Our Instructors", href: "/staff", active: true },
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
