import { ChevronRightIcon, HomeIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useRouter } from "next/router";

// Breadcrumb configuration for SCISS site structure
const breadcrumbConfig = {
  "/": { label: "Home", showIcon: true },
  "/program-overview": { label: "Program Overview", parent: "/" },
  "/tuitions-and-fees": {
    label: "Tuitions & Fees",
    parent: "/program-overview",
  },
  "/academics": { label: "Academics", parent: "/" },
  "/life-activities": { label: "Life & Activities", parent: "/" },
  "/day-trips": { label: "Day Trips", parent: "/" },
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

  // Build breadcrumb trail by following parent hierarchy
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
        className={`breadcrumb ${className}`}
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
