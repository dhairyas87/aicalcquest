import React, { useState } from 'react';
import tutorials from '../data/tutorials';

function Visualizers() {
  const [index, setIndex] = useState(0);
  const visibleCount = window.innerWidth > 768 ? 3 : 1;

  const nextSlide = () => {
    setIndex((prev) => (prev + visibleCount) % tutorials.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? tutorials.length - visibleCount : prev - visibleCount
    );
  };

  const visibleItems = tutorials.slice(index, index + visibleCount);

  return (
    <section>
      <h2>Tutorials</h2>
      <div className="carousel-container">
        <button className="carousel-button prev" onClick={prevSlide}>❮</button>
        <div className="carousel">
          {visibleItems.map((tut, i) => (
            <div key={i} className="carousel-item">
              <h3>{tut.title}</h3>
              <p>{tut.description}</p>
            </div>
          ))}
        </div>
        <button className="carousel-button next" onClick={nextSlide}>❯</button>
      </div>
    </section>
  );
}

export default Visualizers;
