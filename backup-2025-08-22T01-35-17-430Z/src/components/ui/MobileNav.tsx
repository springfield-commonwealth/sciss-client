import ChevronDown from "@/app/src/components/ui/ChevronDown";
import Link from "next/link";

const MobileNav = ({
  navLinks,
  isActiveLink,
  mobileDropdownOpen,
  setMobileDropdownOpen,
  setIsMobileMenuOpen,
}) => (
  <ul className="mobile-nav-links">
    {navLinks.map((link) =>
      link.children ? (
        <li key={link.label} className="mobile-nav-link-dropdown">
          <Link
            href={link.href}
            className="mobile-nav-link"
            aria-haspopup="true"
            aria-expanded={!!mobileDropdownOpen[link.label]}
            onClick={(e) => {
              e.preventDefault();
              setMobileDropdownOpen((prev) => ({
                ...prev,
                [link.label]: !prev[link.label],
              }));
            }}
          >
            {link.label}
            <span className="chevron-wrapper">
              <ChevronDown open={!!mobileDropdownOpen[link.label]} />
            </span>
          </Link>
          {mobileDropdownOpen[link.label] && (
            <ul className="mobile-dropdown-menu">
              {link.children.map((sublink) => (
                <li key={sublink.href}>
                  <Link
                    href={sublink.href}
                    className="mobile-dropdown-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {sublink.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ) : (
        <li key={link.href}>
          <Link
            href={link.href}
            className={`mobile-nav-link${
              isActiveLink(link.href) ? " active" : ""
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.label}
          </Link>
        </li>
      )
    )}
    <li className="mobile-cta">
      <Link
        href="/tuitions-and-fees"
        className="btn btn--primary btn--lg"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Apply Now
      </Link>
    </li>
  </ul>
);

export default MobileNav;
