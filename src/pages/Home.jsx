import { blogs } from "../data/blogs";
import { tutorials } from "../data/tutorials";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to AI Calc Quest</h1>
      <section>
        <h2>📘 Latest Blogs</h2>
        <div className="grid">
          {blogs.map((b) => (
            <div key={b.id} className="card">
              <h3>{b.title}</h3>
              <p>{b.excerpt}</p>
              <Link to={`/blog/${b.slug}`}>Read More →</Link>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>🎥 Tutorials</h2>
        <div className="grid">
          {tutorials.map((t) => (
            <div key={t.id} className="card">
              <h3>{t.title}</h3>
              <p>{t.description}</p>
              <Link to={`/tutorial/${t.slug}`}>Watch Now →</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
