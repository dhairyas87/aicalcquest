import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <h1>Master the Math Behind AI</h1>
      <p>
        AI Calc Quest simplifies the math powering modern Artificial Intelligence —
        from Linear Algebra to Probability and Optimization.
      </p>
    <div className="hero-buttons">
  <Link to="/tutorials">
    <button className="btn-primary">Start Tutorials</button>
  </Link>
  <Link to="/blogs">
    <button className="btn-outline">Read Blogs</button>
  </Link>
</div>
    </section>
  );
};

export default Hero;
