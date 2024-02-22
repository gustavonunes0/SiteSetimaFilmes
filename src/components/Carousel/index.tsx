// src/components/ImageCarousel.tsx
import React, { useState } from 'react';
import styles from './styles.module.css';

interface ImageCarouselProps {
  images: string[];
}

const Carousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [startIndex, setStartIndex] = useState(0);
  const slidesToShow = 4; // Número de slides visíveis de uma vez

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const getSlidesToShow = () => {
    const visibleImages = images.slice(startIndex, startIndex + slidesToShow);
    const remainingImages = images.slice(0, Math.max(0, slidesToShow - visibleImages.length));

    return [...visibleImages, ...remainingImages];
  };

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%', width: '100%', position: 'relative'}}>
        <button className={styles.arrow} onClick={prevSlide}></button>
        <div className={styles.carouselContainer}>
          <div className={styles.carousel}>
            {getSlidesToShow().map((imageUrl, index) => (
              <div key={index} className={styles.slide}>
                <img src={imageUrl} alt={`slide-${index}`} className={styles.slide}/>
              </div>
            ))}
          </div>
        </div>
        <button className={styles.arrow2} onClick={nextSlide}></button>
    </div>
  );
};

export default Carousel;
