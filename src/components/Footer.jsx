import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 px-8 bg-darkBg text-gray-400 text-center border-t border-gray-700">
      © {new Date().getFullYear()} AI Calc Quest. All rights reserved.
    </footer>
  );
};

export default Footer;
