import React from "react";

const tutorials = [
  "Linear Algebra for AI",
  "Calculus for ML",
  "Probability & Statistics",
  "Optimization Techniques"
];

const Tutorials = () => {
  return (
    <section id="tutorials" className="py-20 px-8 bg-darkBg text-gray-200">
      <h2 className="text-4xl font-bold text-neon mb-8">Learn</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {tutorials.map((item, idx) => (
          <div key={idx} className="p-6 border border-gray-700 rounded hover:border-neon transition">
            <h3 className="text-2xl font-semibold mb-2">{item}</h3>
            <p className="text-gray-400">Short description about {item} tutorial.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tutorials;
