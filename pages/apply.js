import ApplicationForm from "@/components/forms/ApplicationForm";
import Footer from "@/components/ui/Footer";
import Head from "next/head";
import Link from "next/link";

export default function ApplyPage() {
  return (
    <>
      <Head>
        <title>Apply to SCISS</title>
        <meta name="description" content="Apply to SCISS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
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
      <Footer />
    </>
  );
}
