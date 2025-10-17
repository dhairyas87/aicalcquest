import React from "react";
import { Link } from "react-router-dom";
import { tutorials } from "../data/tutorials";

const TutorialList = () => (
  <section className="page">
    <h2>All Tutorials</h2>
    <ul className="list">
      {tutorials.map((t, i) => {
        const slug = t.title.toLowerCase().replace(/\s+/g, "-");
        return (
          <li key={i}>
            <Link to={`/tutorial/${slug}`}>
              <h3>{t.title}</h3>
              <p>{t.summary}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  </section>
);

export default TutorialList;
