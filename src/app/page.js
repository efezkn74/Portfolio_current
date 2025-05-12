'use client';

import { useAuth } from './auth/AuthContext';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import Start from './components/Start';
import Projekte from './components/Projekte';
import Lebenslauf from './components/Lebenslauf';
import Zeugnis from './components/Zeugnis';
import Fertigkeiten from './components/Fertigkeiten';
import Navigation from './components/Navigation';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Page() {
  const { isLoggedIn } = useAuth();
  const [activeSection, setActiveSection] = useState('start');
  const [modalOpen, setModalOpen] = useState(false);

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

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#143340]">
        <LoginForm />
      </div>
    );
  }

  return (
    <div className="relative h-screen overflow-hidden">
      {/* FIXED NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar activeSection={activeSection} />
      </div>

      {/* FIXED BEWERBUNGSBILD */}
      <div className="fixed top-7 left-6 z-40">
        <Image
          src="/Bewerbungsfoto.png"
          alt="Efe Bewerbungsbild"
          width={440}
          height={630}
        />
      </div>

      {/* INHALT (horizontal scroll) */}
      <main className="h-screen w-screen overflow-x-scroll scroll-smooth flex snap-x snap-mandatory">
        <section id="start" className="min-w-full h-screen bg-[#143340] relative flex items-center snap-start">
          <Start />
        </section>

        <section id="Projekte" className="min-w-full h-screen bg-[#143340] flex items-center justify-center snap-start">
          <Projekte setModalOpen={setModalOpen} />
        </section>

        <section id="Lebenslauf" className="min-w-full h-screen bg-[#143340] flex items-center justify-center snap-start">
          <Lebenslauf />
        </section>

        <section id="zeugnis" className="min-w-full h-screen bg-[#143340] flex items-center justify-center snap-start">
          <Zeugnis />
        </section>

        <section id="fertigkeiten" className="min-w-full h-screen bg-[#143340] flex items-center justify-center snap-start">
          <Fertigkeiten />
        </section>
      </main>

      {!modalOpen && (
        <div className="fixed bottom-10 left-0 w-full z-50">
          <Navigation stage={1} />
        </div>
      )}
    </div>
  );
}
