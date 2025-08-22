"use client";

import { useEffect, useState } from "react";

const useNavigationState = (router) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [navHeight, setNavHeight] = useState(120); // Default nav height

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Enhanced navigation height detection with fallbacks
  useEffect(() => {
    const updateNavHeight = () => {
      const navElement = document.querySelector(".header");
      console.log("🔍 Looking for navigation element...");

      if (navElement) {
        const height = (navElement as HTMLElement).offsetHeight;
        const isMobileView = window.innerWidth <= 768;

        console.log(
          `📏 Navigation found! Height: ${height}px (${isMobileView ? "mobile" : "desktop"
          })`
        );
        setNavHeight(height);

        // Update CSS custom properties for dynamic spacing
        document.documentElement.style.setProperty(
          "--nav-height",
          `${height}px`
        );

        // Set mobile-specific height
        document.documentElement.style.setProperty(
          "--nav-height-mobile",
          `${height}px`
        );

        console.log(
          `✅ CSS variables set: --nav-height: ${height}px, --nav-height-mobile: ${height}px`
        );

        // Verify the CSS variables were set
        const computedNavHeight = getComputedStyle(
          document.documentElement
        ).getPropertyValue("--nav-height");
        console.log(
          `🔍 Verified CSS variable: --nav-height = ${computedNavHeight}`
        );
      } else {
        // Fallback if nav element not found
        const fallbackHeight = isMobile ? 80 : 120;
        console.warn(
          `⚠️ Navigation element not found, using fallback height: ${fallbackHeight}px`
        );

        document.documentElement.style.setProperty(
          "--nav-height",
          `${fallbackHeight}px`
        );
        document.documentElement.style.setProperty(
          "--nav-height-mobile",
          `${fallbackHeight}px`
        );
      }
    };

    // Initial update with delay to ensure DOM is ready
    console.log("🚀 Initializing navigation height detection...");

    // Try immediately
    updateNavHeight();

    // Also try after a short delay to ensure DOM is fully rendered
    const timeoutId = setTimeout(updateNavHeight, 100);

    // Update on resize
    window.addEventListener("resize", updateNavHeight);

    // Use ResizeObserver for more accurate detection
    const navElement = document.querySelector(".header");
    if (navElement) {
      console.log("👁️ Setting up ResizeObserver for navigation...");
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const height = entry.contentRect.height;
          console.log(`📐 Navigation height changed to: ${height}px`);
          setNavHeight(height);
          document.documentElement.style.setProperty(
            "--nav-height",
            `${height}px`
          );
          document.documentElement.style.setProperty(
            "--nav-height-mobile",
            `${height}px`
          );
        }
      });
      resizeObserver.observe(navElement);
      return () => {
        clearTimeout(timeoutId);
        resizeObserver.disconnect();
        window.removeEventListener("resize", updateNavHeight);
      };
    }

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", updateNavHeight);
    };
  }, [isMobile]);

  const isActiveLink = (href) => {
    // Check if router is available (null during static generation)
    if (!router || !router.pathname) {
      return false;
    }

    if (href === "/") {
      return router.pathname === "/";
    }
    return router.pathname === href;
  };

  return {
    isScrolled,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    openDropdown,
    setOpenDropdown,
    mobileDropdownOpen,
    setMobileDropdownOpen,
    isMobile,
    isActiveLink,
    navHeight, // Export nav height for use in components
  };
};

export default useNavigationState;
