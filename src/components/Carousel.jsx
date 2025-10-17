import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Carousel
 * props:
 *   items: array of { title, summary, ... }
 *   type: "blog" | "tutorial"
 */
export default function Carousel({ title, items = [], type = "blog" }) {
  const trackRef = useRef(null);
  const [pos, setPos] = useState(0); // index of first visible
  const [visibleCount, setVisibleCount] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const onResize = () => {
      setVisibleCount(window.innerWidth <= 900 ? 1 : 3);
      // clamp pos so we don't overflow
      setPos((p) => Math.min(p, Math.max(0, items.length - (window.innerWidth <= 900 ? 1 : 3))));
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [items.length]);

  // Scroll reveal using IntersectionObserver for the whole carousel section
  useEffect(() => {
    const section = trackRef.current?.closest("section");
    if (!section) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) section.querySelectorAll(".reveal").forEach(n => n.classList.add("visible"));
      });
    }, { threshold: 0.12 });
    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  const next = () => {
    setPos((p) => {
      const maxStart = Math.max(0, items.length - visibleCount);
      return p >= maxStart ? 0 : p + visibleCount;
    });
  };

  const prev = () => {
    setPos((p) => {
      const maxStart = Math.max(0, items.length - visibleCount);
      return p <= 0 ? maxStart : Math.max(0, p - visibleCount);
    });
  };

  const handleSelect = (item) => {
    // generate slug safely
    const slug = (item.slug || item.title).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    navigate(`/${type}/${slug}`);
  };

  // compute visible slice (wrap-around support)
  const visible = [];
  for (let i = 0; i < visibleCount; i++) {
    const idx = (pos + i) % items.length;
    visible.push(items[idx]);
  }

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <h2>{title}</h2>
        </div>

        <div className="carousel-wrapper reveal">
          <button className="carousel-arrow prev" onClick={prev} aria-label="Previous">‹</button>

          <div ref={trackRef} className="carousel-track" style={{ transform: `translateX(0)` }}>
            {visible.map((it, i) => (
              <div key={`${it.title}-${i}`} className="card" onClick={() => handleSelect(it)} role="button" tabIndex={0}>
                <div className="card-title">{it.title}</div>
                <div className="card-desc">{it.summary || it.description || ""}</div>
                <div className="card-footer" style={{ marginTop: "auto" }}>
                  <a className="link" onClick={(e)=>{ e.stopPropagation(); handleSelect(it); }}>Open</a>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-arrow next" onClick={next} aria-label="Next">›</button>
        </div>
      </div>
    </section>
  );
}
