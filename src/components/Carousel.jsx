import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Carousel({ title, items = [], type = "blog" }) {
  const navigate = useNavigate();
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Responsive visible cards
  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth <= 900 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSelect = (item) => {
    const slug = (item.slug || item.title)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    navigate(`/${type}/${slug}`);
  };

  // Duplicate cards for infinite scroll
  const extendedItems = [
    ...items.slice(-visibleCount), // last N items
    ...items,
    ...items.slice(0, visibleCount), // first N items
  ];

  const next = () => setCurrentIndex((prev) => prev + 1);
  const prev = () => setCurrentIndex((prev) => prev - 1);

  // Handle seamless jump
  useEffect(() => {
    const handleTransitionEnd = () => {
      const len = items.length;
      if (currentIndex >= len + visibleCount) {
        // Jump to start
        trackRef.current.style.transition = "none";
        setCurrentIndex(visibleCount);
      } else if (currentIndex < visibleCount) {
        // Jump to end
        trackRef.current.style.transition = "none";
        setCurrentIndex(items.length + visibleCount - 1);
      }
    };
    const track = trackRef.current;
    track.addEventListener("transitionend", handleTransitionEnd);
    return () => track.removeEventListener("transitionend", handleTransitionEnd);
  }, [currentIndex, items.length, visibleCount]);

  // Re-enable transition after index change
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transition = "transform 0.5s ease";
    }
  }, [currentIndex]);

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <h2>{title}</h2>
        </div>

        <div className="carousel-wrapper">
          <button className="carousel-arrow prev" onClick={prev}>‹</button>

          <div className="carousel-track-wrapper">
            <div
              ref={trackRef}
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {extendedItems.map((item, i) => (
                <div
                  key={i}
                  className="card"
                  style={{ flex: `0 0 ${100 / visibleCount}%` }}
                  onClick={() => handleSelect(item)}
                >
                  {item.thumbnail && (
                    <img className="thumb" src={item.thumbnail} alt={item.title} />
                  )}
                  <div className="card-title">{item.title}</div>
                  <div className="card-desc">{item.summary || item.description || ""}</div>
                  <div className="card-footer">
                    <a
                      className="link"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelect(item);
                      }}
                    >
                      Open
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-arrow next" onClick={next}>›</button>
        </div>
      </div>
    </section>
  );
}
