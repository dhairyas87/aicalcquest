import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">AI Calc Quest</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#tutorials">Tutorials</a></li>
        <li><a href="#visualizers">Visualizers</a></li>
        <li><a href="#blog">Blog</a></li>
      </ul>
    </nav>
  );
}
