'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [activeId, setActiveId] = useState('start');

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3, // etwas kleiner für bessere Erkennung
        root: document.querySelector("main"), // falls du horizontal scrollst
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    }
  };

  const linkClasses = (id) =>
    `relative px-8 py-4 transition-all duration-300
     after:content-[''] after:absolute after:bottom-[2px] after:left-0 after:w-full after:h-[2px]
     ${activeId === id
        ? 'text-white after:bg-[#ADD9D9]'
        : 'text-gray-300 after:bg-transparent hover:text-white hover:after:bg-[#ADD9D9]'
     }`;

  return (
    <header className="pt-11">
      <nav className="flex justify-end space-x-5 bg-[#0A1A20] px-10 py-0 text-xl shadow-lg w-fit ml-auto">
        <button onClick={() => scrollTo('start')} className={linkClasses('start')}>Startseite</button>
        <button onClick={() => scrollTo('Projekte')} className={linkClasses('Projekte')}>Projekte</button>
        <button onClick={() => scrollTo('Lebenslauf')} className={linkClasses('Lebenslauf')}>Lebenslauf</button>
        <button onClick={() => scrollTo('zeugnis')} className={linkClasses('zeugnis')}>Zeugnisse</button>
        <button onClick={() => scrollTo('fertigkeiten')} className={linkClasses('fertigkeiten')}>Fertigkeiten</button>
      </nav>
    </header>
  );
}
