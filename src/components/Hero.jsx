import React from "react";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-darkBg">
      <h1 className="text-5xl md:text-6xl font-bold text-neon mb-4">Where Math Meets AI & ML</h1>
      <p className="text-gray-300 max-w-xl mb-6">Learn the math behind AI and machine learning through tutorials, visualizers, and blogs.</p>
      <div className="space-x-4">
        <a href="#tutorials" className="px-6 py-3 bg-neonPink text-darkBg font-semibold rounded hover:bg-pink-500 transition">Start Learning</a>
        <a href="#visualizers" className="px-6 py-3 border border-neon text-neon rounded hover:bg-neon hover:text-darkBg transition">Explore Visualizers</a>
      </div>
    </section>
  );
};

export default Hero;
