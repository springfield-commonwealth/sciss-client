import Footer from "@/components/ui/Footer";
import Navigation from "@/components/ui/Navigation";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

const SITE_NAME = "SC International Summer School";
const DEFAULT_PRIMARY_COLOR = "#184589";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const Layout = ({
  children,
  title = "SCISS - SC International Summer School",
  description = "Join SCISS for an unforgettable summer experience with cutting-edge academics, exciting activities, and trips to Harvard, MIT, and Yale.",
  keywords = "international summer school, sciss, stem programs, us summer camp, academic enrichment, sc international summer school, study abroad summer program, student leadership program",
  robots = "index,follow",
  canonical,
  openGraphImage,
  FooterCTALinkTitle = "Academics",
  FooterCTALink = "/academics",
  breadcrumbs = [],
  showBreadcrumb = false,
  className = "",
}) => {
  const router = useRouter();
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://sciss.org").replace(/\/$/, "");
  const path = router?.asPath ? router.asPath.split("#")[0].split("?")[0] : "/";
  const canonicalUrl = (canonical || `${baseUrl}${path === "/" ? "" : path}`) || baseUrl;
  const socialImage = openGraphImage || `${baseUrl}/logos/sciss-logo-black.png`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content={robots} />
        <meta name="author" content={SITE_NAME} />
        <meta name="theme-color" content={DEFAULT_PRIMARY_COLOR} />
        <meta name="format-detection" content="telephone=no" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={socialImage} />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={socialImage} />
        <meta name="twitter:url" content={canonicalUrl} />
        <link rel="canonical" href={canonicalUrl} />
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
