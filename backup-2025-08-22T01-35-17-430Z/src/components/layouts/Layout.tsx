import Footer from "@/app/src/components/ui/Footer";
import Navigation from "@/app/src/components/ui/Navigation";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const Layout = ({
  children,
  title = "SCISS - Springfield Commonwealth International Summer School",
  description = "Join SCISS for an unforgettable summer experience with cutting-edge academics, exciting activities, and trips to Harvard, MIT, and Yale.",
  FooterCTALinkTitle = "Academics",
  FooterCTALink = "/academics",
  breadcrumbs = [],
  showBreadcrumb = false,
  className = "",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className={`site-wrapper ${inter.className} ${className}`}>
        <Navigation showBreadcrumb={showBreadcrumb} breadcrumbs={breadcrumbs} />
        <main className="main-content">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
