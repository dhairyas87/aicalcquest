import React from "react";

const visualizers = [
  "Matrix Operations Visualizer",
  "Gradient Descent Simulation",
  "Neural Network Activation Visualizer"
];

const Visualizers = () => {
  return (
    <section id="visualizers" className="py-20 px-8 bg-darkBg text-gray-200">
      <h2 className="text-4xl font-bold text-neon mb-8">Visualizers</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {visualizers.map((item, idx) => (
          <div key={idx} className="p-6 border border-gray-700 rounded hover:border-neon transition">
            <h3 className="text-2xl font-semibold mb-2">{item}</h3>
            <p className="text-gray-400">Interactive visual demo placeholder.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Visualizers;
