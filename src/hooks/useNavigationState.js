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

  // Detect navigation height dynamically
  useEffect(() => {
    const updateNavHeight = () => {
      const navElement = document.querySelector(".header");
      if (navElement) {
        const height = navElement.offsetHeight;
        setNavHeight(height);

        // Update CSS custom property for dynamic spacing
        document.documentElement.style.setProperty(
          "--nav-height",
          `${height}px`
        );

        // Set mobile-specific height if on mobile
        if (window.innerWidth <= 768) {
          document.documentElement.style.setProperty(
            "--nav-height-mobile",
            `${height}px`
          );
        }
      }
    };

    updateNavHeight();
    window.addEventListener("resize", updateNavHeight);

    // Use ResizeObserver for more accurate detection
    const navElement = document.querySelector(".header");
    if (navElement) {
      const resizeObserver = new ResizeObserver(updateNavHeight);
      resizeObserver.observe(navElement);
      return () => resizeObserver.disconnect();
    }

    return () => window.removeEventListener("resize", updateNavHeight);
  }, []);

  const isActiveLink = (href) => {
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
