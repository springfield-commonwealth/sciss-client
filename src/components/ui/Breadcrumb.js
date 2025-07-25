import { ChevronRightIcon, HomeIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Breadcrumb configuration for SCISS site structure
const breadcrumbConfig = {
  "/": { label: "Home", showIcon: true },
  "/program-overview": { label: "Program Overview", parent: "/" },
  "/tuitions-and-fees": {
    label: "Tuitions & Fees",
    parent: "/program-overview",
  },
  // Academic routes
  "/academics": { label: "Academics", parent: "/" },
  "/courses": { label: "Academic Courses", parent: "/academics" },
  "/staff": { label: "Our Instructors", parent: "/academics" },
  // Life & Activities routes
  "/life-activities": { label: "Life & Activities", parent: "/" },
  "/activities": { label: "Activities", parent: "/life-activities" },
  // Day Trips routes
  "/day-trips": { label: "Day Trips", parent: "/" },
  "/trips": { label: "Trips", parent: "/day-trips" },
  // Other pages
  "/about-us": { label: "About Us", parent: "/" },
  "/apply": { label: "Apply Now", parent: "/" },
  "/parent-information": { label: "Parent Information", parent: "/" },
  "/a-day-at-sciss": { label: "A Day at SCISS", parent: "/" },
};

// Hook to generate breadcrumbs from current route
const useBreadcrumbs = (pathname, customRoutes = {}) => {
  const config = { ...breadcrumbConfig, ...customRoutes };
  const breadcrumbs = [];

  let currentPath = pathname;

  // Handle hash fragments by removing them for breadcrumb generation
  if (currentPath.includes("#")) {
    currentPath = currentPath.split("#")[0];
  }

  // Handle dynamic content routes with [slug] pattern
  if (
    currentPath.includes("/courses/") ||
    currentPath.includes("/activities/") ||
    currentPath.includes("/trips/") ||
    currentPath.includes("/staff/")
  ) {
    const pathParts = currentPath.split("/");
    const contentType = pathParts[1]; // courses, activities, trips, or staff
    const slug = pathParts[2];

    // Get the directory page first
    const directoryPath = `/${contentType}`;
    if (config[directoryPath]) {
      breadcrumbs.push({
        href: "/",
        label: config["/"].label,
        showIcon: config["/"].showIcon || false,
      });
      breadcrumbs.push({
        href: directoryPath,
        label: config[directoryPath].label,
        showIcon: false,
      });

      // Add the individual content page (will be filled by page component)
      if (slug && customRoutes[currentPath]) {
        breadcrumbs.push({
          href: currentPath,
          label: customRoutes[currentPath].label,
          showIcon: false,
        });
      }
    }

    return breadcrumbs;
  }

  // Build breadcrumb trail by following parent hierarchy (original logic)
  while (currentPath && config[currentPath]) {
    const current = config[currentPath];
    breadcrumbs.unshift({
      href: currentPath,
      label: current.label,
      showIcon: current.showIcon || false,
    });
    currentPath = current.parent;
  }

  return breadcrumbs;
};

// Individual breadcrumb item component
const BreadcrumbItem = ({ href, label, isLast, showIcon }) => {
  if (isLast) {
    return (
      <li className="breadcrumb-item breadcrumb-current" aria-current="page">
        {showIcon && (
          <HomeIcon className="breadcrumb-home-icon" aria-hidden="true" />
        )}
        <span className="breadcrumb-text">{label}</span>
      </li>
    );
  }

  return (
    <li className="breadcrumb-item">
      <Link href={href} className="breadcrumb-link">
        {showIcon && (
          <HomeIcon className="breadcrumb-home-icon" aria-hidden="true" />
        )}
        <span className="breadcrumb-text">{label}</span>
      </Link>
      <ChevronRightIcon className="breadcrumb-separator" aria-hidden="true" />
    </li>
  );
};

// Main Breadcrumb component
const Breadcrumb = ({ customRoutes = {}, className = "" }) => {
  const router = useRouter();
  const breadcrumbs = useBreadcrumbs(router.pathname, customRoutes);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll state like navigation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Don't show breadcrumbs on home page or if only one item
  if (breadcrumbs.length <= 1) {
    return null;
  }

  // JSON-LD structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: `${
        process.env.NEXT_PUBLIC_SITE_URL || "https://sciss.example.com"
      }${crumb.href}`,
    })),
  };

  return (
    <>
      {/* SEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Breadcrumb navigation */}
      <nav
        aria-label="Breadcrumb"
        className={`breadcrumb ${isScrolled ? "scrolled" : ""} ${className}`}
        role="navigation"
      >
        <ol className="breadcrumb-list">
          {breadcrumbs.map((crumb, index) => (
            <BreadcrumbItem
              key={crumb.href}
              {...crumb}
              isLast={index === breadcrumbs.length - 1}
            />
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;
