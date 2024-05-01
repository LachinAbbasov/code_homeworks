import React, { useState } from 'react';
import '../../Scss/slider.modulle.scss'
const images = [
  'https://preview.colorlib.com/theme/abcbook/assets/img/hero/h1_hero1.jpg.webp',
  'https://preview.colorlib.com/theme/abcbook/assets/img/hero/h1_hero2.jpg.webp',
  'https://preview.colorlib.com/theme/abcbook/assets/img/hero/h1_hero3.jpg.webp'
];

function SectionOne() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={index === currentIndex ? "slide active" : "slide"}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="slide-content">
              <p className="small-text">Science Finction</p>
              <p className="big-text ">The History of Phipino</p>
              <button className="browse-store">Browse Store</button>
            </div>
          </div>
        ))}
      </div>
      <div className="navigation-dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={index === currentIndex ? "dot active" : "dot"}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <button className="prev-btn" onClick={handlePrev}>&#10094;</button>
      <button className="next-btn" onClick={handleNext}>&#10095;</button>
    </div>
  );
}

export default SectionOne;
