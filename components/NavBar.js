import React, { useEffect, useState } from 'react';

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            // Optional: Debug to confirm section detection
            console.log(`Active section: ${entry.target.id}`);
          }
        });
      },
      {
        root: null, // Use viewport as root
        rootMargin: '0px', // Offset top to account for navbar
        threshold: 0.7, // Trigger when 10% of section is visible
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className="navbar sticky top-0 z-50 bg-black border-b border-green-500 py-2 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <span className="text-white text-xl font-mono tracking-tight">
          <span className="text-blue-400 mr-2">&gt;_</span>Rafli Permana Putra
        </span>
        <div className="flex space-x-4">
          {['Home', 'About', 'Skills', 'Projects', 'Certifications'/*, 'Contact'*/].map((section) => {
            const sectionId = section.toLowerCase();
            const isActive = activeSection === sectionId;
            return (
              <a
                key={section}
                href={`#${sectionId}`}
                className={`text-base font-mono transition-colors duration-200 ${
                  isActive
                    ? 'text-blue-400 border-b-2 border-blue-400'
                    : 'text-white hover:text-blue-400'
                }`}
              >
                {section}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;