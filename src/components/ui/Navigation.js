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
import { useRouter } from "next/compat/router";
import Link from "next/link";

const navLinks = [
  {
    label: "About Us",
    href: "/about-us",
    children: [
      { href: "/about-us", label: "Overview" },
      { href: "/about-us/why-sciss", label: "Why SCISS" },
      { href: "/about-us#mission", label: "Mission & Vision" },
      { href: "/about-us#values", label: "Our Values" },
      { href: "/staff", label: "Meet Our Staff" },
      { href: "/photo-galleries", label: "Photo Galleries" },
      { href: "/about-us#typical-week", label: "Typical Week" },
    ],
  },
  {
    label: "Program",
    href: "/program-overview",
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
    label: "Experience",
    href: "/life-activities", // Overview page
    children: [
      { href: "/life-activities", label: "Life & Activities" },
      { href: "/day-trips", label: "Day Trips" },
      { href: "/activities", label: "Browse All Activities" },
      { href: "/trips", label: "Browse All Trips" },
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
          <div className="nav-brand">
            <Link href="/" className="logo">
              <img src={LogoBlack} alt="SC International Summer School" />
            </Link>
            <Link href="/" className="nav-home-link">
              Home
            </Link>
          </div>
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
              <Link href="/" className="mobile-logo">
                <img src={LogoBlack} alt="SC International Summer School" />
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
