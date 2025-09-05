import Breadcrumb from "@/components/ui/Breadcrumb";
import Footer from "@/components/ui/Footer";
import Navigation from "@/components/ui/Navigation";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// In your page component
const defaultUtilityNav = [
  { label: "Parent Information", href: "/parent-information" },
  { label: "FAQ", href: "/faq" },
  { label: "Brochure", href: "/brochure.pdf" }, // Gets PDF styling
];

const defaultPortalNav = [
  { label: "Contact us", href: "/contact" },
  { label: "Book Now", href: "/apply" },
];

const Layout = ({
  children,
  title = "SCISS - Springfield Commonwealth International Summer School",
  description = "Join SCISS for an unforgettable summer experience with cutting-edge academics, exciting activities, and trips to Harvard, MIT, and Yale.",
  SessionInfoLinkTitle = "Academics",
  SessionInfoLink = "/academics",
  breadcrumbs = [],
  showBreadcrumb = false,
  utilityNav = defaultUtilityNav,
  utilityNavTitle = "Inspire Global Leaders for Tomorrow",
  portalNav = defaultPortalNav,
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
        <Navigation
          utilityNav={utilityNav}
          utilityNavTitle={utilityNavTitle}
          portalNav={portalNav}
        />
        {showBreadcrumb && <Breadcrumb breadcrumbs={breadcrumbs} />}
        <main className="main-content">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
