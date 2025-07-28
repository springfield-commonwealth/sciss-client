import Layout from "@/components/layouts/Layout";
import { DirectoryPage } from "@/components/ui";
import {
  getAllStaff,
  getStaffDepartments,
  getStaffStats,
} from "@/lib/content/staff";
import { generateBreadcrumbs } from "@/lib/utils/navigation";

// Staff Directory Page Component - Using Universal Directory System
const StaffDirectory = ({ staff, departments, stats, breadcrumbs = [] }) => {
  // Custom content renderer for staff
  const renderStaffContent = (member) => {
    return (
      <>
        <div className="card-expertise">
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
        <div className="card-bio">
          {member.bio
            ? member.bio.length > 120
              ? `${member.bio.substring(0, 120)}...`
              : member.bio
            : "Experienced professional with expertise in their field."}
        </div>
        {member.courses && member.courses.length > 0 && (
          <div className="card-courses">
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
        title="Faculty & Staff Directory"
        description="Meet our exceptional team of educators, industry experts, and professionals who bring real-world expertise to the SCISS learning experience."
        items={staff}
        categories={departments}
        stats={stats}
        breadcrumbs={breadcrumbs}
        renderCardContent={renderStaffContent}
        renderBadges={renderStaffBadges}
        getItemCategories={getStaffDepartments}
        ctaConfig={{
          showCTA: true,
          title: "Join Our Team",
          description:
            "Interested in joining our exceptional faculty? We're always looking for passionate educators and industry experts.",
          primaryAction: {
            text: "Apply to Join Faculty",
            href: "mailto:info@springfield.org",
          },
          secondaryAction: {
            text: "Learn About SCISS",
            href: "/about-us",
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
