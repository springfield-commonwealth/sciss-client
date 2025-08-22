"use client";

import ChevronDown from "@/app/src/components/ui/ChevronDown";
import Link from "next/link";
import { useRef } from "react";

const DesktopNav = ({
  navLinks,
  isActiveLink,
  openDropdown,
  setOpenDropdown,
}) => {
  // Store refs for each dropdown parent
  const dropdownRefs = useRef({});

  return (
    <ul className="nav-links">
      {navLinks.map((link) =>
        link.children ? (
          <li
            key={link.label}
            className="nav-link-dropdown"
            onMouseEnter={() => setOpenDropdown(link.label)}
            onMouseLeave={() => setOpenDropdown(null)}
            onFocus={() => setOpenDropdown(link.label)}
            onBlur={() => setOpenDropdown(null)}
          >
            <Link
              href={link.href}
              className={`nav-link${isActiveLink(link.href) ? " active" : ""}`}
              tabIndex={0}
              aria-haspopup="true"
              aria-expanded={openDropdown === link.label}
              ref={(el) => {
                if (el) dropdownRefs.current[link.label] = el;
              }}
            >
              {link.label}
              <span className="chevron-wrapper">
                <ChevronDown open={openDropdown === link.label} />
              </span>
            </Link>
            <ul
              className={`dropdown-menu${
                openDropdown === link.label ? " dropdown-menu--open" : ""
              }`}
            >
              {link.children.map((sublink) => (
                <li key={sublink.href}>
                  <Link
                    href={sublink.href}
                    className="dropdown-link"
                    onClick={() => {
                      setOpenDropdown(null);
                      // Blur the parent trigger to remove focus/hover
                      if (dropdownRefs.current[link.label]) {
                        dropdownRefs.current[link.label].blur();
                      }
                    }}
                  >
                    {sublink.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ) : (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`nav-link${isActiveLink(link.href) ? " active" : ""}`}
            >
              {link.label}
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default DesktopNav;
