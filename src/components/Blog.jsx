import React from "react";
import { blogs } from "../data/blogs";

const Blog = () => {
  return (
    <section id="blog" className="py-20 px-8 bg-darkBg text-gray-200">
      <h2 className="text-4xl font-bold text-neon mb-8">Blog</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {blogs.map((post) => (
          <div key={post.id} className="p-6 border border-gray-700 rounded hover:border-neon transition">
            <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-400 mb-4">{post.excerpt}</p>
            <a href={post.link} className="text-neon hover:underline">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
