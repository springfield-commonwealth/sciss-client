import { ChevronRightIcon, HomeIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Breadcrumb = ({ breadcrumbs = [] }) => {
  if (!breadcrumbs || breadcrumbs.length === 0) {
    return null;
  }

  return (
    <div className="breadcrumb">
      <nav aria-label="Breadcrumb" role="navigation">
        <ol className="breadcrumb-list">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.href} className="breadcrumb-item">
              {index < breadcrumbs.length - 1 ? (
                <Link href={crumb.href} className="breadcrumb-link">
                  {index === 0 && (
                    <HomeIcon
                      className="breadcrumb-home-icon"
                      aria-hidden="true"
                    />
                  )}
                  <span className="breadcrumb-text">{crumb.label}</span>
                </Link>
              ) : (
                <span className="breadcrumb-current" aria-current="page">
                  {index === 0 && (
                    <HomeIcon
                      className="breadcrumb-home-icon"
                      aria-hidden="true"
                    />
                  )}
                  <span className="breadcrumb-text">{crumb.label}</span>
                </span>
              )}
              {index < breadcrumbs.length - 1 && (
                <ChevronRightIcon
                  className="breadcrumb-separator"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
