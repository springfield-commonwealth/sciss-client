import DesktopNav from "@/components/ui/DesktopNav";
import MobileNav from "@/components/ui/MobileNav";
import { LogoBlack } from "@/constants/images";
import useNavigationState from "@/hooks/useNavigationState";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
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
    href: "/academics", // Back to academics overview page
    children: [
      { href: "/academics", label: "Overview" },
      { href: "/courses", label: "Browse All Courses" },
      { href: "/courses?category=core", label: "Core Courses" },
      { href: "/courses?category=electives", label: "Electives" },
      { href: "/staff", label: "Our Instructors" },
    ],
  },
  {
    href: "/activities", // Changed from /life-activities to /activities directory
    label: "Life & Activities",
  },
  {
    href: "/trips", // Changed from /day-trips to /trips directory
    label: "Day Trips",
  },
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
                <Link href="/apply" className="btn btn-primary">
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
