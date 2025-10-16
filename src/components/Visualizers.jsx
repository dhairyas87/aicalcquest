import React from "react";

const visualizers = [
  "Matrix Operations Visualizer",
  "Gradient Descent Simulation",
  "Neural Network Activation Visualizer"
];

const Visualizers = () => {
 return (
    <>
      {visualizers.map((v) => (
        <div key={v.id} className="card">
          <h3>{v.title}</h3>
          <p>{v.description}</p>
        </div>
      ))}
    </>
  );
};

export default Visualizers;
