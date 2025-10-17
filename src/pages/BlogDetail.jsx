import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/blogs";

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogs.find(b => b.title.toLowerCase().replace(/\s+/g, "-") === slug);

  if (!blog) return <p>Blog not found!</p>;

  return (
    <section className="page">
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <Link to="/blogs">← Back to Blogs</Link>
    </section>
  );
};

export default BlogDetail;
