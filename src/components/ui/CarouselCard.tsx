"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface CarouselCardProps {
  title: string;
  description?: string;
  image: string;
  link?: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  title,
  description,
  image,
  link,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (link) {
      router.push(link);
    }
  };

  return (
    <div
      className="carousel-card"
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleClick();
      }}
    >
      <div className="carousel-card__image">
        <img src={image} alt={title} loading="lazy" />
        <div className="carousel-overlay">
          <h3>{title}</h3>
          {description && <p>{description}</p>}
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
