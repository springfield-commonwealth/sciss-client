import { LogoBlack } from "@/constants/images";
import Link from "next/link";
import { useRouter } from "next/router";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import useNavigationState from "./useNavigationState";

const navLinks = [
  { href: "/program-overview", label: "Program" },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { href: "/academics#core-courses-carousel", label: "Core Courses" },
      { href: "/academics#electives-carousel", label: "Electives" },
      { href: "/academics#programs", label: "Program Details" },
      { href: "/academics#faculty", label: "Faculty" },
    ],
  },
  { href: "/life-activities", label: "Life & Activities" },
  { href: "/day-trips", label: "Day Trips" },
  {
    label: "About Us",
    href: "/about-us",
    children: [
      { href: "/about-us#mission", label: "Missions & Vision" },
      { href: "/about-us#values", label: "Our Values" },
      { href: "/about-us#team", label: "Our Team" },
    ],
  },
];

const Navigation = () => {
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
                ☰
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
                <Link href="/tuitions-and-fees" className="btn btn-primary">
                  Apply Now
                </Link>
              </div>
            </>
          )}
        </nav>
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
                ✕
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
