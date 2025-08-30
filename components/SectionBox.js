import React from 'react';

const SectionBox = ({ id, title, children }) => {
  return (
    <section id={id} className="section-box py-16">
      <div className="flex items-center mb-2 font-mono text-white text-2xl">
        <span className="text-blue-500 mr-2">&gt;_</span>
        <h2 className="font-bold">{title}</h2>
      </div>
      {children}
    </section>
  );
};

export default SectionBox;
