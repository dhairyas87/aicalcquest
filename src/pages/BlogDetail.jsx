import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/blogs";

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogs.find(
    b => b.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!blog) return <p>Blog not found!</p>;

  return (
    <section className="page">
      <h2>{blog.title}</h2>

      {blog.blocks?.map((block, i) => {
        if (block.type === "text") {
          return <p key={i}>{block.content}</p>;
        }
        if (block.type === "image") {
          return (
            <img
              key={i}
              src={block.src}
              alt={block.alt || ""}
              style={{
                width: "100%",
                maxWidth: "800px",
                margin: "16px 0",
                borderRadius: "12px",
                display: "block"
              }}
            />
          );
        }
        return null;
      })}

      <Link to="/blogs" style={{ display: "inline-block", marginTop: "24px", color: "#00e5ff" }}>
        ← Back to Blogs
      </Link>
    </section>
  );
};

export default BlogDetail;
