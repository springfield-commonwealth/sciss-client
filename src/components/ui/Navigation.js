import DesktopNav from "@/components/ui/DesktopNav";
import MobileNav from "@/components/ui/MobileNav";
import { LogoBlack } from "@/constants/images";
import useNavigationState from "@/hooks/useNavigationState";
import {
  ChevronRightIcon,
  Cross1Icon,
  HamburgerMenuIcon,
  HomeIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { useRouter } from "next/router";

const navLinks = [
  {
    label: "Program",
    href: "/program-overview",
    children: [
      { href: "/program-overview", label: "Overview" },
      { href: "/tuitions-and-fees", label: "Tuitions & Fees" },
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
      { href: "/trips?category=University Visits", label: "University Visits" },
      {
        href: "/trips?category=Cultural Experiences",
        label: "Cultural Experiences",
      },
      { href: "/trips?category=Educational Tours", label: "Educational Tours" },
    ],
  },
  {
    label: "About Us",
    href: "/about-us",
    children: [
      { href: "/about-us#mission", label: "Missions & Vision" },
      { href: "/about-us#values", label: "Our Values" },
      { href: "/staff", label: "Our Team" },
    ],
  },
];

const Navigation = ({ showBreadcrumb = false, breadcrumbs = [] }) => {
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

  return (
    <>
      <header className={`header${isScrolled ? " scrolled" : ""}`}>
        <nav className="nav">
          <Link href="/" className="logo">
            <img src={LogoBlack} alt="SC International Summer School" />
          </Link>
          {isMobile ? (
            <>
              <button
                className="mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <HamburgerMenuIcon />
              </button>
            </>
          ) : (
            <>
              <DesktopNav
                navLinks={navLinks}
                isActiveLink={isActiveLink}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
              />
              <div className="nav-cta">
                <Link href="/apply" className="btn btn--primary">
                  Apply Now
                </Link>
              </div>
            </>
          )}
        </nav>

        {/* Enhanced integrated breadcrumb */}
        {showBreadcrumb && breadcrumbs.length > 0 && (
          <div className="nav-breadcrumb">
            <nav aria-label="Breadcrumb" role="navigation">
              <ol className="nav-breadcrumb-list">
                {breadcrumbs.map((crumb, index) => (
                  <li key={crumb.href} className="nav-breadcrumb-item">
                    {index < breadcrumbs.length - 1 ? (
                      <Link href={crumb.href} className="nav-breadcrumb-link">
                        {index === 0 && (
                          <HomeIcon
                            className="nav-breadcrumb-home-icon"
                            aria-hidden="true"
                          />
                        )}
                        <span className="nav-breadcrumb-text">
                          {crumb.label}
                        </span>
                      </Link>
                    ) : (
                      <span
                        className="nav-breadcrumb-current"
                        aria-current="page"
                      >
                        {index === 0 && (
                          <HomeIcon
                            className="nav-breadcrumb-home-icon"
                            aria-hidden="true"
                          />
                        )}
                        <span className="nav-breadcrumb-text">
                          {crumb.label}
                        </span>
                      </span>
                    )}
                    {index < breadcrumbs.length - 1 && (
                      <ChevronRightIcon
                        className="nav-breadcrumb-separator"
                        aria-hidden="true"
                      />
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        )}
      </header>

      {isMobileMenuOpen && isMobile && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu">
            <div className="mobile-menu-header">
              <Link href="/" className="logo">
                SCISS
              </Link>
              <button
                className="mobile-menu-close"
                onClick={() => setIsMobileMenuOpen(false)}
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
