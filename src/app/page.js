'use client';

import Image from "next/image";
import Navbar from "./components/Navbar";
import Navigation from "./components/Navigation";
import Projekte from "./components/Projekte";
import Start from "./components/Start";
import Lebenslauf from "./components/Lebenslauf";
import Zeugnis from "./components/Zeugnis";
import Fertigkeiten from './components/Fertigkeiten';

import { useEffect, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("start");
  const [modalOpen, setModalOpen] = useState(false); // <-- neu

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: document.querySelector("main"),
        threshold: 0.5,
      }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* FIXED NAVBAR OBEN */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar activeSection={activeSection} />
      </div>

      {/* FIXED BEWERBUNGSBILD LINKS */}
      <div className="fixed top-7 left-6 z-40">
        <Image
          src="/Bewerbungsfoto.png"
          alt="Efe Bewerbungsbild"
          width={440}
          height={630}
        />
      </div>

      {/* HORIZONTALER SCROLLBEREICH */}
      <main className="h-screen w-screen overflow-x-scroll scroll-smooth flex snap-x snap-mandatory">

        {/* STARTSEITE */}
        <section id="start" className="min-w-full h-screen bg-[#143340] relative flex items-center snap-start">
          <Start />
        </section>

        {/* PROJEKTE */}
        <section id="Projekte" className="min-w-full h-screen bg-[#143340] flex items-center justify-center snap-start">
          <Projekte setModalOpen={setModalOpen} />
        </section>

        {/* LEBENSLAUF */}
        <section id="Lebenslauf" className="min-w-full h-screen bg-[#143340] flex items-center justify-center snap-start">
          <Lebenslauf />
        </section>

        {/* ZEUGNIS */}
        <section id="zeugnis" className="min-w-full h-screen bg-[#143340] flex items-center justify-center snap-start">
          <Zeugnis />
        </section>

        {/* FERTIGKEITEN */}
        <section id="fertigkeiten" className="min-w-full h-screen bg-[#143340] flex items-center justify-center snap-start">
          <Fertigkeiten />
        </section>
      </main>

      {/* FIXED NAVIGATION UNTEN – nur sichtbar wenn kein Modal offen */}
      {!modalOpen && (
        <div className="fixed bottom-10 left-0 w-full z-50">
          <Navigation stage={1} />
        </div>
      )}
    </div>
  );
}
