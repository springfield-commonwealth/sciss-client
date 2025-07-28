import { useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import CarouselCard from './CarouselCard';

const Carousel = ({ items, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    if (!container) return;

    const cardWidth = 520; // Card width + gap
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  const scrollToIndex = (index) => {
    const container = carouselRef.current;
    if (!container) return;

    const cardWidth = 520;
    container.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
    setCurrentIndex(index);
  };

  return (
    <div className={`carousel-container ${className}`}>
      {/* Navigation Arrows */}
      <button 
        className="carousel-arrow carousel-arrow-left"
        onClick={() => scroll('left')}
        aria-label="Previous items"
      >
        <ChevronLeftIcon />
      </button>
      
      <button 
        className="carousel-arrow carousel-arrow-right"
        onClick={() => scroll('right')}
        aria-label="Next items"
      >
        <ChevronRightIcon />
      </button>

      {/* Carousel Track */}
      <div 
        ref={carouselRef}
        className="carousel-track"
      >
        {items.map((item, index) => (
          <CarouselCard 
            key={index}
            {...item}
            />
        ))}
      </div>
      
    </div>
  );
};

export default Carousel;
