import React from "react";
import { useParams, Link } from "react-router-dom";
import { tutorials } from "../data/tutorials";

const TutorialDetail = () => {
  const { slug } = useParams();
  const tutorial = tutorials.find(
    t => (t.slug || t.title).toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!tutorial) return <p>Tutorial not found!</p>;

  return (
    <section className="page">
      <h2>{tutorial.title}</h2>

      {tutorial.blocks?.map((block, i) => {
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
        if (block.type === "video") {
          return (
           <div key={i} className="video-wrapper">
    <iframe
      src={block.src}
      title={block.title || "Tutorial Video"}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
          );
        }
        return null;
      })}

      <Link
        to="/tutorials"
        style={{ display: "inline-block", marginTop: "24px", color: "#00e5ff" }}
      >
        ← Back to Tutorials
      </Link>
    </section>
  );
};

export default TutorialDetail;
