import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tutorials from "./components/Tutorials";
import Visualizers from "./components/Visualizers";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Tutorials />
      <Visualizers />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
