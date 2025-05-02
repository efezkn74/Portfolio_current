'use client';
import { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export default function fertigkeiten() {
  const skills = [
    {
      title: 'Programmierkentnisse',
      items: [
        { name: 'C#', rating: 4.5 },
        { name: 'Java', rating: 4.5 },
        { name: 'JavaScript', rating: 4 },
        { name: 'React Native', rating: 3.5 },
        { name: 'C', rating: 3.5 },
        { name: 'SQL', rating:  3.5},
        { name: 'C++', rating: 3 },
        { name: 'Python', rating: 3 },
        { name: 'R', rating: 3 },
        { name: 'AndroidStudio', rating: 2.5 },

      ],
    },
    {
      title: 'Medien-Tools',
      items: [
        { name: 'Figma', rating: 5 },
        { name: 'TouchDesigner', rating: 4 },
        { name: 'Adobe Illustrator', rating: 2.5 },
        { name: 'Photoshop', rating: 2.5 },
      ],
    },
    {
      title: 'Softskills',
      items: [
        { name: 'Problemlösung', rating: 4.5 },
        { name: 'Teamarbeit', rating: 4 },
        { name: 'Kommunikation', rating: 4 },
        { name: 'Ordnung', rating: 3 },
      ],
    },
    
  ];

  return (
    <div className="flex flex-col items-center text-white mb-0 ml-60">

      <h1 className="text-4xl font-bold underline mb-8">Fertigkeiten</h1>

      {/* Grid mit 2 Spalten */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Linke Spalte: Programmiersprachen */}
        <div>
          <h2 className="text-2xl font-semibold">{skills[0].title}</h2>
          <ul className="space-y-2">
            {skills[0].items.map((item, i) => (
              <li key={i} className="flex items-center gap-4">
                <span className="w-48">{item.name}</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => {
                    if (item.rating >= star) {
                      return <FaStar key={star} className="text-cyan-300" />;
                    } else if (item.rating >= star - 0.5) {
                      return <FaStarHalfAlt key={star} className="text-cyan-300" />;
                    } else {
                      return <FaRegStar key={star} className="text-gray-500" />;
                    }
                  })}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Rechte Spalte: Medien + Allgemein */}
        <div className="flex flex-col gap-8">
          {skills.slice(1).map((section, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="w-48">{item.name}</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => {
                        if (item.rating >= star) {
                          return <FaStar key={star} className="text-cyan-300" />;
                        } else if (item.rating >= star - 0.5) {
                          return <FaStarHalfAlt key={star} className="text-cyan-300" />;
                        } else {
                          return <FaRegStar key={star} className="text-gray-500" />;
                        }
                      })}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
          ))}
        </div>
        </div>

{/* Kontaktinfos unten */}
<div className="mt-16 border-t border-gray-600 pt-6 text-sm text-gray-300 text-center">
  <p>E-Mail: <a href="mailto:efe.oezkan@web.de" className="text-cyan-300 hover:underline">efe.oezkan@web.de</a></p>
</div>

      </div>
      
    
    
  );
} 