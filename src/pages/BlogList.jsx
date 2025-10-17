import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";

const BlogList = () => (
  <section className="page">
    <h2>All Blogs</h2>
    <ul className="list">
      {blogs.map((b, i) => {
        const slug = b.title.toLowerCase().replace(/\s+/g, "-");
        return (
          <li key={i}>
            <Link to={`/blog/${slug}`}>
              <h3>{b.title}</h3>
              <p>{b.summary}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  </section>
);

export default BlogList;
