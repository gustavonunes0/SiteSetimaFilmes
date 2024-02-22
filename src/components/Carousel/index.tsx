// src/components/ImageCarousel.tsx
import React, { useState } from 'react';
import './styles.css';

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <button className="arrow prev" onClick={prevSlide}>
        &lt;
      </button>
      <div className="carousel">
        {images.map((imageUrl, index) => (
          <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
            <div style={{width: '100%', height: '20rem', backgroundColor: '#fff'}}/>
          </div>
        ))}
      </div>
      <button className="arrow next" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default ImageCarousel;
