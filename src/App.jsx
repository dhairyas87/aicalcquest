import React, { useState,useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import TutorialList from "./pages/TutorialList";
import TutorialDetail from "./pages/TutorialDetail";
import { blogs } from "./data/blogs";
import { tutorials } from "./data/tutorials";

const App = () => {
  const [search, setSearch] = useState("");

  const filteredBlogs = blogs.filter(b =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );
  const filteredTutorials = tutorials.filter(t =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  // add to App.jsx near top
useEffect(() => {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
  return () => obs.disconnect();
}, []);

  return (
    <>
      <Navbar onSearch={setSearch} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Carousel title="Tutorials" items={tutorials} type="tutorial" />
            <Carousel title="Blogs" items={blogs} type="blog" />
            </>
          }
        />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/tutorials" element={<TutorialList />} />
        <Route path="/tutorial/:slug" element={<TutorialDetail />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
