import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tutorials from "./components/Tutorials";

import Blog from "./components/Blog";
import Footer from "./components/Footer";
import { tutorialsData } from "./data/tutorials";
import { blogs } from "./data/blogs";
import Visualizers from "./components/Visualizers";
import { visualizersData } from "./data/visualizers"; // <- Make sure this exists
function App() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Tutorials Section */}
      <section id="tutorials">
        <h2>Tutorials</h2>
        <p>Interactive math and AI tutorials to improve your skills.</p>
        <div className="grid grid-2">
          {tutorialsData.map((tut) => (
            <div key={tut.id} className="card">
              <h3>{tut.title}</h3>
              <p>{tut.description}</p>
              <button>Start Tutorial</button>
            </div>
          ))}
        </div>
      </section>

      {/* Visualizers Section */}
      <Visualizers visualizers={visualizersData} />

      {/* Blog Section */}
      <section id="blog">
        <h2>Blog & Resources</h2>
        <p>Stay updated with the latest AI and math insights.</p>
        <div className="grid grid-2">
          {blogs.map((b) => (
            <div key={b.id} className="card">
              <h3>{b.title}</h3>
              <p>{b.summary}</p>
              <a href={b.link}>Read More</a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
