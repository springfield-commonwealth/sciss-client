import Footer from "@/components/ui/Footer";
import FooterCTA from "@/components/ui/FooterCTA";
import Navigation from "@/components/ui/Navigation";
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
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className={`site-wrapper ${inter.className}`}>
        <Navigation />
        <main className="main-content">{children}</main>
        <FooterCTA linkTitle={FooterCTALinkTitle} link={FooterCTALink} />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
