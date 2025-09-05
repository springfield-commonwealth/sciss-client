import DesktopNav from "@/components/ui/DesktopNav";
import MobileNav from "@/components/ui/MobileNav";
import { LogoBlack, LogoWhite } from "@/constants/images";
import useNavigationState from "@/hooks/useNavigationState";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/compat/router";
import Link from "next/link";

const navLinks = [
  {
    label: "Admissions",
    href: "/admissions",
    // children: [
    //   { href: "/how-to-apply", label: "How to Apply" },
    //   { href: "/tuitions-and-fees", label: "Tuitions & Fees" },
    //   { href: "/contact", label: "Contact Admissions" },
    // ],
  },
  {
    label: "About SCISS",
    href: "/about",
    children: [
      { href: "/about-us#mission", label: "Missions & Vision" },
      { href: "/about-us#values", label: "Our Values" },
      { href: "/staff", label: "Our Team" },
    ],
  },
  {
    label: "Our Programs",
    href: "/program-overview",
    children: [
      { href: "/program-overview", label: "Overview" },
      { href: "/tuitions-and-fees", label: "Tuitions & Fees" },
      { href: "/parent-information", label: "Parent Information" },
    ],
  },
  {
    label: "Academics",
    href: "/academics", // Overview page
    children: [
      { href: "/academics", label: "Overview" },
      { href: "/academics#schedule", label: "Schedule" },
      { href: "/courses", label: "Browse All Courses" },
      { href: "/staff", label: "Our Instructors" },
    ],
  },
  {
    label: "Life & Activities",
    href: "/life-activities", // Overview page
    children: [
      { href: "/life-activities", label: "Overview" },
      { href: "/activities", label: "Browse All Activities" },
    ],
  },
  {
    label: "Day Trips",
    href: "/day-trips", // Overview page
    children: [
      { href: "/day-trips", label: "Overview" },
      { href: "/trips", label: "Browse All Trips" },
    ],
  },
];

const Navigation = ({
  utilityNav = [],
  utilityNavTitle = "",
  portalNav = [],
}) => {
  const router = useRouter();
  const {
    isScrolled,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    openDropdown,
    setOpenDropdown,
    mobileDropdownOpen,
    setMobileDropdownOpen,
    isMobile,
    isActiveLink,
    navHeight,
  } = useNavigationState(router);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={`header${isScrolled ? " scrolled" : ""}`}>
        <div className="nav-container">
          {/* Left Column: Logo */}
          <Link href="/" className="nav-logo">
            <img src={LogoWhite} alt="SC International Summer School" />
          </Link>

          {/* Right Column: Navigation Content */}
          <div className="nav-content">
            {/* Top Row: Utility Navigation */}
            {utilityNav.length > 0 && (
              <div className="nav-utility-row">
                {utilityNavTitle && (
                  <h6 className="nav-utility-title">{utilityNavTitle}</h6>
                )}
                <nav className="nav-utility-links">
                  {utilityNav.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className={`nav-utility-link ${
                        item.href?.includes(".pdf")
                          ? "nav-utility-link--pdf"
                          : ""
                      }`}
                    >
                      {item.label}
                      {item.href?.includes(".pdf") && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 31"
                          className="nav-utility-icon"
                        >
                          <g data-name="Group 497">
                            <g data-name="Group 496">
                              <g
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                data-name="Group 495"
                              >
                                <path
                                  strokeLinecap="square"
                                  d="M11.5 16.986l4.243 4.243"
                                  data-name="Line 1"
                                ></path>
                                <path
                                  strokeLinecap="square"
                                  d="M15.742 21.228l4.243-4.243"
                                  data-name="Line 3"
                                ></path>
                                <path
                                  d="M15.814 0v20.5"
                                  data-name="Line 27"
                                ></path>
                              </g>
                            </g>
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              d="M1 22v8h30v-8"
                              data-name="Path 72"
                            ></path>
                          </g>
                        </svg>
                      )}
                    </Link>
                  ))}
                </nav>
              </div>
            )}

            {/* Bottom Row: Main Nav and Portal Nav */}
            <div className="nav-main-row">
              {isMobile ? (
                <button
                  className="mobile-menu-toggle"
                  onClick={toggleMobileMenu}
                  aria-label="Toggle mobile menu"
                >
                  <HamburgerMenuIcon />
                </button>
              ) : (
                <>
                  <DesktopNav
                    navLinks={navLinks}
                    isActiveLink={isActiveLink}
                    openDropdown={openDropdown}
                    setOpenDropdown={setOpenDropdown}
                  />
                  <div className="nav-portal-cta">
                    {portalNav.length > 0 && (
                      <nav className="nav-portal-links">
                        {portalNav.map((item, i) => (
                          <Link
                            key={i}
                            href={item.href}
                            className={`nav-portal-link ${
                              item.label === "Contact us"
                                ? "nav-portal-link--contact"
                                : ""
                            } ${
                              item.label === "Book Now"
                                ? "nav-portal-link--cta"
                                : ""
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </nav>
                    )}
                    {/* <div className="nav-cta">
                      <Link href="/apply" className="btn btn--primary">
                        Apply Now
                      </Link>
                    </div> */}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && isMobile && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu">
            <div className="mobile-menu-header">
              <Link href="/" className="mobile-logo">
                <img src={LogoBlack} alt="SC International Summer School" />
              </Link>
              <button
                className="mobile-menu-close"
                onClick={toggleMobileMenu}
                aria-label="Close mobile menu"
              >
                <Cross1Icon />
              </button>
            </div>
            <MobileNav
              navLinks={navLinks}
              isActiveLink={isActiveLink}
              mobileDropdownOpen={mobileDropdownOpen}
              setMobileDropdownOpen={setMobileDropdownOpen}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
