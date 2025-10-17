import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  return (
    <nav className="navbar">
      <h1><Link to="/">AI Calc Quest</Link></h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tutorials">Tutorials</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <div className="nav-search">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
