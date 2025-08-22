import React from "react";
import PropTypes from "prop-types";

const SocialLink = ({ href, icon, label, className = "" }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`social-link ${className}`}
      aria-label={label}
    >
      <span className="social-link__icon">{icon}</span>
      {label && <span className="social-link__label">{label}</span>}
    </a>
  );
};

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
};

export default SocialLink;
