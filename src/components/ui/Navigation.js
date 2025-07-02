import { LogoBlack } from "@/constants/images";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    // { href: '/', label: 'Home' },
    { href: "/program-overview", label: "Program" },
    { href: "/academics", label: "Academics" },
    { href: "/life-activities", label: "Life & Activities" },
    { href: "/day-trips", label: "Day Trips" },
    // { href: '/a-day-at-sciss', label: 'A Day at SCISS' },
    { href: "/about-us", label: "About Us" },
    // { href: '/tuitions-and-fees', label: 'Tuitions & Fees' },
    // { href: '/parent-information', label: 'Parent Information' },
  ];

  const isActiveLink = (href) => {
    if (href === "/") {
      return router.pathname === "/";
    }
    return router.pathname === href;
  };

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <nav className="nav">
          <Link href="/" className="logo">
            <img src={LogoBlack} alt="SC International Summer School" />
          </Link>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link ${
                    isActiveLink(link.href) ? "active" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav-cta">
            <Link href="/tuitions-and-fees" className="btn btn-primary">
              Apply Now
            </Link>
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            ☰
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
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

            <ul className="mobile-nav-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`mobile-nav-link ${
                      isActiveLink(link.href) ? "active" : ""
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mobile-cta">
                <Link
                  href="/tuitions-and-fees"
                  className="btn btn-primary btn-large"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
