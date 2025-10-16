import React from "react";
import { blogs } from "../data/blogs";

const Blog = () => {
 return (
    <section id="blog" className="grid grid-2">
      {blogs.map((b) => (
        <div key={b.id} className="card">
          <h3>{b.title}</h3>
          <p>{b.summary}</p>
          <a href={b.link}>Read More</a>
        </div>
      ))}
    </section>
  );
};

export default Blog;
