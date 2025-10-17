import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Carousel = ({ title, items, type }) => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const next = () => setIndex((index + 1) % items.length);
  const prev = () => setIndex((index - 1 + items.length) % items.length);

  const handleSelect = (item) => {
    const slug = item.title.toLowerCase().replace(/\s+/g, "-");
    navigate(`/${type}/${slug}`);
  };

  return (
    <section id={title.toLowerCase()}>
      <h2>{title}</h2>
      <div className="carousel">
        <button onClick={prev} className="carousel-btn">←</button>
        <div className="carousel-item card" onClick={() => handleSelect(items[index])}>
          <h3>{items[index].title}</h3>
          <p>{items[index].summary}</p>
        </div>
        <button onClick={next} className="carousel-btn">→</button>
      </div>
    </section>
  );
};

export default Carousel;
