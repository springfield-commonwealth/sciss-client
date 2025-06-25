import Head from "next/head";
import Footer from "../ui/Footer";
import FooterCTA from "../ui/FooterCTA";
import Navigation from "../ui/Navigation";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="site-wrapper">
        <Navigation />
        <main className="main-content">{children}</main>
        <FooterCTA linkTitle={FooterCTALinkTitle} link={FooterCTALink} />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
