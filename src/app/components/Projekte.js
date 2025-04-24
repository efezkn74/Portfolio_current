'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Projekte({ setModalOpen }) {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (setModalOpen) {
      setModalOpen(!!activeProject);
    }
  }, [activeProject, setModalOpen]);

  const projectInfo = {
    pacman: {
      title: "Pacman (3. Semester)",
      description: "C# mit UI. Umsetzung klassischer Spiellogik mit Geisterverhalten.",
      link: "https://github.com/efezkn74/Pacman.git"
    },
    monopoly: {
      title: "Monopoly (2. Semester)",
      description: "Java-Konsolenanwendung mit Spielregeln und Würfelmechanik.",
      link: "https://github.com/efezkn74/Monopoly.git"
    },
    consumerlessm: {
      title: "Consumerlessm (3. Semester)",
      description: "Webseite zur Konsumkontrolle mit JavaScript und React.",
      link: "https://dmwt-gruppe-3-consumerlessm.vercel.app"
    },
    portfolio: {
      title: "Portfolio (freiwillig)",
      description: "Eigene Portfolioseite mit JavaScript & Tailwind.",
      link: null
    },
    infotainment: {
      title: "Infortainment-System (2. Semester)",
      description: "Figma-Prototyp für Lieferantensystem.",
      link: "https://gitlab.reutlingen-university.de/ahaari23/eva2-infotainment.git"
    },
    flyer: {
      title: "Restaurantflyer mit Illustrator",
      description: "Zweiseitiger Flyer mit Projektübersicht und Highlights.",
      link: null
    }
  };

  return (
    <div className="flex flex-col items-center text-white mb-34 ml-40">
      <h1 className="text-4xl font-bold underline ml-50">Projekte</h1>

      <div className="relative w-[750px] h-[350px] bg-[#0A1A20] bg-opacity-80 rounded-md shadow-lg flex flex-wrap justify-center items-center gap-6 p-6 mt-8 ml-50">

        {/* Flyer */}
        <div
          className="absolute top-5.5 left-15 cursor-pointer w-[120px] h-[170px] overflow-hidden group rounded-lg"
          onClick={() => setActiveProject("flyer")}
        >
          <Image
            src="/Flyer1.jpg"
            alt="Flyer Vorschau"
            width={120}
            height={170}
            className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
          />
        </div>

        {/* Portfolio */}
        <div
          className="absolute bottom-39.5 left-106.5 cursor-pointer"
          onClick={() => setActiveProject("portfolio")}
        >
          <Image
            src="/portfolio.png"
            alt="Porfolio"
            width={300}
            height={300}
            className="hover:brightness-100 hover:scale-105 transition-all duration-300 rounded-lg"
          />
        </div>

        {/* Pacman */}
        <div
          className="absolute bottom-41 left-55 group w-[165px] h-[165px] cursor-pointer"
          onClick={() => setActiveProject("pacman")}
        >
          <Image
            src="/pacman.png"
            alt="Pacman"
            width={165}
            height={165}
            className="group-hover:brightness-100 group-hover:scale-105 transition-all duration-300 rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
            <Image src="/GitHub.png" alt="GitHub" width={40} height={40} className="mb-2" />
            <span className="text-white font-semibold">GitHub</span>
          </div>
        </div>

        {/* Consumerlessm */}
        <div
          className="absolute top-51 left-6 group w-[230px] h-[230px] cursor-pointer overflow-hidden rounded-md"
          onClick={() => setActiveProject("consumerlessm")}
        >
          <Image
            src="/consumerlessm2.png"
            alt="Consumerlessm"
            width={230}
            height={230}
            className="group-hover:brightness-125 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 object-cover rounded-lg"
          />
          
        </div>

        {/* Monopoly */}
        <div
          className="absolute bottom-3 right-6 group w-[200px] h-[135px] overflow-hidden cursor-pointer rounded-lg"
          onClick={() => setActiveProject("monopoly")}
        >
          <Image
            src="/MonopolyAkt.png"
            alt="Monopoly Projekt"
            fill
            className="object-cover group-hover:brightness-125 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Image src="/GitHub.png" alt="GitHub" width={40} height={40} className="mb-2" />
            <span className="text-white font-semibold">GitHub</span>
          </div>
        </div>

        {/* Infortainment */}
        <div
          className="absolute bottom-3 right-65 group w-[200px] h-[135px] overflow-hidden rounded-md cursor-pointer"
          onClick={() => setActiveProject("infotainment")}
        >
          <Image
            src="/Homescreen 3.png"
            alt="Infortainment"
            fill
            className="object-cover group-hover:brightness-125 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
            <Image src="/GitHub.png" alt="GitHub" width={40} height={40} className="mb-2" />
            <span className="text-white font-semibold">GitHub</span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {activeProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#0A1A20] text-white rounded-lg p-6 max-w-md w-full shadow-lg relative overflow-y-auto max-h-[90vh]">
            <button
              className="absolute top-2 right-3 text-xl text-gray-400 hover:text-white"
              onClick={() => setActiveProject(null)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-2">{projectInfo[activeProject].title}</h2>

            {activeProject === "flyer" ? (
              <div className="flex flex-col gap-4 items-center">
                <Image src="/Flyer1.jpg" alt="Flyer Seite 1" width={300} height={400} className="rounded" />
                <Image src="/Flyer2.jpg" alt="Flyer Seite 2" width={300} height={400} className="rounded" />
              </div>
            ) : (
              <>
                <p className="text-gray-300 mb-4">{projectInfo[activeProject].description}</p>

                {projectInfo[activeProject].link && (
                  <a
                    href={projectInfo[activeProject].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center gap-2 bg-[#143340] px-4 py-2 rounded-md text-white hover:bg-[#1d3b45] transition"
                  >
                    <Image
                      src={activeProject === "consumerlessm" ? "/Consumerlessm.png" : "/GitHub.png"}
                      alt="Projekt Logo"
                      width={24}
                      height={24}
                    />
                    <span className="font-medium">Projekt aufrufen</span>
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
