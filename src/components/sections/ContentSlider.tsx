"use client";

import ImageSlider from "@/components/ui/ImageSlider";

const ContentSlider = ({ heading, text, links = [], images = [] }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="content-slider">
          <div className="content-slider__content">
            {heading && <h2 className="content-slider__heading">{heading}</h2>}
            {text && (
              <div className="content-slider__text">
                <p>{text}</p>
              </div>
            )}
            {links.length > 0 && (
              <div className="content-slider__links">
                {links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    className={`content-slider__link${
                      link.button ? " content-slider__button" : ""
                    }`}
                    target={link.target || "_self"}
                    rel={
                      link.target === "_blank"
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {link.icon && (
                      <span className="content-slider__icon">{link.icon}</span>
                    )}
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
          <div className="content-slider__slider">
            <ImageSlider images={images} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSlider;
