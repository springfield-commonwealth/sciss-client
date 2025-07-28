import { Badge, BadgeGroup } from "@/components/ui";
import Link from "next/link";

/**
 * Universal Directory Card Component
 * Handles trips, staff, courses, and activities cards
 * Applies DRY principles with type-specific customization
 */
const DirectoryCard = ({
  type, // "trips" | "staff" | "courses" | "activities"
  data,
  renderCardContent,
  renderBadges,
  className = "",
}) => {
  // Get card configuration based on type
  const cardConfig = getCardConfig(type);

  // Get item URL based on type
  const getItemUrl = (item) => {
    const urls = {
      trips: `/trips/${item.slug}`,
      staff: `/staff/${item.slug}`,
      courses: `/courses/${item.slug}`,
      activities: `/activities/${item.slug}`,
    };
    return urls[type] || "#";
  };

  // Get item title
  const getItemTitle = (item) => {
    if (type === "staff") {
      return (
        `${item.firstName || ""} ${item.lastName || ""}`.trim() ||
        item.position ||
        "Faculty Member"
      );
    }
    return item.title || item.name || "Untitled";
  };

  // Get item image
  const getItemImage = (item) => {
    if (type === "staff") {
      return item.profileImage || item.image;
    }
    return item.image;
  };

  // Get item description
  const getItemDescription = (item) => {
    if (type === "staff") {
      return item.bio
        ? item.bio.length > 120
          ? `${item.bio.substring(0, 120)}...`
          : item.bio
        : "Experienced professional with expertise in their field.";
    }
    return item.description
      ? item.description.length > 120
        ? `${item.description.substring(0, 120)}...`
        : item.description
      : "No description available.";
  };

  // Default badge renderer
  const defaultBadgeRenderer = (item) => {
    if (type === "trips") {
      return (
        <>
          <Badge variant="primary" size="small">
            {item.category}
          </Badge>
          <Badge variant="secondary" size="small">
            {item.duration}
          </Badge>
        </>
      );
    }

    if (type === "staff") {
      return (
        <>
          {item.expertise && item.expertise.length > 0 ? (
            <>
              {item.expertise.slice(0, 3).map((skill, index) => (
                <Badge key={index} variant="info" size="small">
                  {skill}
                </Badge>
              ))}
              {item.expertise.length > 3 && (
                <Badge variant="default" size="small">
                  +{item.expertise.length - 3} more
                </Badge>
              )}
            </>
          ) : (
            <Badge variant="secondary" size="small">
              Expert
            </Badge>
          )}
        </>
      );
    }

    if (type === "courses") {
      return (
        <>
          <Badge variant="primary" size="small">
            {item.category}
          </Badge>
          <Badge variant="secondary" size="small">
            {item.level}
          </Badge>
        </>
      );
    }

    if (type === "activities") {
      return (
        <>
          <Badge variant="primary" size="small">
            {item.category}
          </Badge>
          <Badge variant="secondary" size="small">
            {item.level}
          </Badge>
        </>
      );
    }

    return null;
  };

  // Default content renderer
  const defaultContentRenderer = (item) => {
    if (type === "trips") {
      return (
        <>
          <div className="card-highlights">
            <BadgeGroup>
              {item.highlights?.slice(0, 3).map((highlight, index) => (
                <Badge key={index} variant="info" size="small">
                  {highlight}
                </Badge>
              ))}
              {item.highlights?.length > 3 && (
                <Badge variant="default" size="small">
                  +{item.highlights.length - 3} more
                </Badge>
              )}
            </BadgeGroup>
          </div>
          <div className="card-info">
            <div className="info-item">
              <strong>Duration:</strong> {item.duration}
            </div>
          </div>
        </>
      );
    }

    if (type === "staff") {
      return (
        <>
          <div className="card-expertise">
            <BadgeGroup>
              {item.expertise && item.expertise.length > 0 ? (
                <>
                  {item.expertise.slice(0, 3).map((skill, index) => (
                    <Badge key={index} variant="info" size="small">
                      {skill}
                    </Badge>
                  ))}
                  {item.expertise.length > 3 && (
                    <Badge variant="default" size="small">
                      +{item.expertise.length - 3} more
                    </Badge>
                  )}
                </>
              ) : (
                <Badge variant="secondary" size="small">
                  Expert
                </Badge>
              )}
            </BadgeGroup>
          </div>
          <div className="card-bio">{getItemDescription(item)}</div>
          {item.courses && item.courses.length > 0 && (
            <div className="card-courses">
              <p className="teaches-label">
                Teaches: {item.courses.length} course
                {item.courses.length !== 1 ? "s" : ""}
              </p>
            </div>
          )}
        </>
      );
    }

    if (type === "courses") {
      return (
        <>
          <div className="card-description">{getItemDescription(item)}</div>
          <div className="card-details">
            <div className="detail-item">
              <strong>Duration:</strong> {item.duration}
            </div>
            <div className="detail-item">
              <strong>Level:</strong> {item.level}
            </div>
          </div>
          {item.outcomes && item.outcomes.length > 0 && (
            <div className="card-outcomes">
              <strong>Key Outcomes:</strong>
              <ul>
                {item.outcomes.slice(0, 2).map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      );
    }

    if (type === "activities") {
      return (
        <>
          <div className="card-features">
            <BadgeGroup>
              {item.features?.slice(0, 3).map((feature, index) => (
                <Badge key={index} variant="info" size="small">
                  {feature}
                </Badge>
              ))}
              {item.features?.length > 3 && (
                <Badge variant="default" size="small">
                  +{item.features.length - 3} more
                </Badge>
              )}
            </BadgeGroup>
          </div>
          <div className="card-info">
            <div className="info-item">
              <strong>Level:</strong> {item.level}
            </div>
            <div className="info-item">
              <strong>Duration:</strong> {item.duration}
            </div>
          </div>
        </>
      );
    }

    return null;
  };

  return (
    <Link
      href={getItemUrl(data)}
      className={`card-base card-preview directory-card directory-card--${type} ${className}`}
    >
      {/* Card Image Section */}
      <div className="card-image">
        {getItemImage(data) && (
          <img
            src={getItemImage(data)}
            alt={getItemTitle(data)}
            className="card-photo"
          />
        )}
      </div>

      {/* Card Content Section */}
      <div className="card-content">
        <h3 className="card-title">{getItemTitle(data)}</h3>

        {/* Custom or default content renderer */}
        {renderCardContent
          ? renderCardContent(data)
          : defaultContentRenderer(data)}
      </div>

      {/* Card Footer */}
      <div className="card-footer">
        <span className="view-details-text">{cardConfig.viewDetailsText}</span>
      </div>
    </Link>
  );
};

// Card configuration per type
const getCardConfig = (type) => {
  const configs = {
    trips: {
      viewDetailsText: "View Full Details →",
      imageHeight: "250px",
    },
    staff: {
      viewDetailsText: "View Full Profile →",
      imageHeight: "120px",
    },
    courses: {
      viewDetailsText: "View Course Details →",
      imageHeight: "200px",
    },
    activities: {
      viewDetailsText: "View Full Details →",
      imageHeight: "250px",
    },
  };
  return configs[type] || configs.trips;
};

export default DirectoryCard;
