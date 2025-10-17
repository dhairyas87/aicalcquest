import React from "react";
import { useParams, Link } from "react-router-dom";
import { tutorials } from "../data/tutorials";

const TutorialDetail = () => {
  const { slug } = useParams();
  const tutorial = tutorials.find(t => t.title.toLowerCase().replace(/\s+/g, "-") === slug);

  if (!tutorial) return <p>Tutorial not found!</p>;

  return (
    <section className="page">
      <h2>{tutorial.title}</h2>
      <p>{tutorial.summary}</p>
      {tutorial.url && (
        <div className="video-wrapper">
          <iframe
            src={tutorial.url}
            title={tutorial.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
            allowFullScreen
          />
        </div>
      )}
      <Link to="/tutorials">← Back to Tutorials</Link>
    </section>
  );
};

export default TutorialDetail;
