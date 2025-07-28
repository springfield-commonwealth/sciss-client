import ApplicationForm from "@/components/forms/ApplicationForm";
import Layout from "@/components/layouts/Layout";
import { generateBreadcrumbs } from "@/lib/utils/navigation";
import Link from "next/link";

const Apply = ({ breadcrumbs = [] }) => {
  return (
    <Layout
      title="Apply Now - SCISS"
      description="Apply to SCISS Summer School for an unforgettable educational experience."
      showBreadcrumb={true}
      breadcrumbs={breadcrumbs}
    >
      <section className="section bg-light">
        <div className="container">
          <div className="apply-logo-container">
            <Link href="/">
              <img
                src="/logos/sciss-logo-black.png"
                alt="SCISS Logo"
                className="apply-logo"
              />
            </Link>
          </div>
          <div className="apply-header">
            <h2 className="apply-title">
              2025 Springfield Commonwealth Summer School Application
            </h2>
            <p className="apply-description">
              Complete the form below to apply for our summer program
            </p>
          </div>
          <ApplicationForm />
        </div>
      </section>
    </Layout>
  );
};

export default Apply;

export async function getStaticProps() {
  // Generate breadcrumbs for apply page
  const breadcrumbs = generateBreadcrumbs([
    { label: "Home", href: "/" },
    { label: "Apply Now", href: "/apply", active: true },
  ]);

  return {
    props: {
      breadcrumbs,
    },
  };
}
