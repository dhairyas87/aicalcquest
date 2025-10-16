import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-8 flex justify-between items-center bg-darkBg fixed top-0 z-50">
      <h1 className="text-neon text-2xl font-bold">AI Calc Quest</h1>
      <div className="space-x-6 text-gray-300">
        <a href="#about" className="hover:text-neon">About</a>
        <a href="#tutorials" className="hover:text-neon">Learn</a>
        <a href="#visualizers" className="hover:text-neon">Visualizers</a>
        <a href="#blog" className="hover:text-neon">Blog</a>
      </div>
    </nav>
  );
};

export default Navbar;
