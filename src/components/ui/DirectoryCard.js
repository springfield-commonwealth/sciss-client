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
          <span className="category-badge">{item.category}</span>
          <span className="duration-badge">{item.duration}</span>
        </>
      );
    }

    if (type === "staff") {
      return (
        <>
          {item.expertise && item.expertise.length > 0 ? (
            <>
              {item.expertise.slice(0, 3).map((skill, index) => (
                <span key={index} className="expertise-badge">
                  {skill}
                </span>
              ))}
              {item.expertise.length > 3 && (
                <span className="expertise-more">
                  +{item.expertise.length - 3} more
                </span>
              )}
            </>
          ) : (
            <span className="expertise-badge">Expert</span>
          )}
        </>
      );
    }

    if (type === "courses") {
      return (
        <>
          <span className="category-badge">{item.category}</span>
          <span className="level-badge">{item.level}</span>
        </>
      );
    }

    if (type === "activities") {
      return (
        <>
          <span className="category-badge">{item.category}</span>
          <span className="level-badge">{item.level}</span>
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
          <div className="card__highlights">
            {item.highlights?.slice(0, 3).map((highlight, index) => (
              <span key={index} className="highlight-tag">
                {highlight}
              </span>
            ))}
            {item.highlights?.length > 3 && (
              <span className="highlight-more">
                +{item.highlights.length - 3} more
              </span>
            )}
          </div>
          <div className="card__info">
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
          <div className="card__expertise">
            {item.expertise && item.expertise.length > 0 ? (
              <>
                {item.expertise.slice(0, 3).map((skill, index) => (
                  <span key={index} className="expertise-badge">
                    {skill}
                  </span>
                ))}
                {item.expertise.length > 3 && (
                  <span className="expertise-more">
                    +{item.expertise.length - 3} more
                  </span>
                )}
              </>
            ) : (
              <span className="expertise-badge">Expert</span>
            )}
          </div>
          <div className="card__bio">{getItemDescription(item)}</div>
          {item.courses && item.courses.length > 0 && (
            <div className="card__courses">
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
          <div className="card__description">{getItemDescription(item)}</div>
          <div className="card__details">
            <div className="detail-item">
              <strong>Duration:</strong> {item.duration}
            </div>
            <div className="detail-item">
              <strong>Level:</strong> {item.level}
            </div>
          </div>
          {item.outcomes && item.outcomes.length > 0 && (
            <div className="card__outcomes">
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
          <div className="card__features">
            {item.features?.slice(0, 3).map((feature, index) => (
              <span key={index} className="feature-tag">
                {feature}
              </span>
            ))}
            {item.features?.length > 3 && (
              <span className="feature-more">
                +{item.features.length - 3} more
              </span>
            )}
          </div>
          <div className="card__info">
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
      className={`card ${
        type === "staff"
          ? "card--staff"
          : type === "trips"
          ? "card--trips"
          : type === "courses"
          ? "card--courses"
          : type === "activities"
          ? "card--activities"
          : ""
      } directory-card directory-card--${type} ${className}`}
    >
      {/* Card Image Section */}
      <div className="card__image">
        {getItemImage(data) && (
          <img src={getItemImage(data)} alt={getItemTitle(data)} />
        )}
      </div>

      {/* Card Content Section */}
      <div className="card__content">
        <h3 className="card__title">{getItemTitle(data)}</h3>

        {/* Custom or default content renderer */}
        {renderCardContent
          ? renderCardContent(data)
          : defaultContentRenderer(data)}
      </div>

      {/* Card Footer with Badges */}
      <div className="card__footer">
        {/* Custom or default badge renderer */}
        {/* {renderBadges ? renderBadges(data) : defaultBadgeRenderer(data)} */}

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
