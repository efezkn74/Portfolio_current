'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Navigation({ stage = 1 }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = document.querySelector('main');

    const handleScroll = () => {
      const progress = container.scrollLeft / (container.scrollWidth - container.clientWidth);
      setScrollProgress(progress);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Animationen nach Abschnitt
  let progressScale = 1;
  let transformClass = '';
  let icon = '/home.png';
  if (scrollProgress >= 0.90){
    // Kontakt
    progressScale = 0.1;
    transformClass = 'rotate-[1440deg] translate-x-158';
    icon = '/kontakt.png'
  }else if (scrollProgress >= 0.7){
    // Zeugnis
    progressScale = 0.30;
    transformClass = 'rotate-[1080deg] translate-x-122';
    icon = '/zeugnis.png';
  }else if (scrollProgress >= 0.40) {
    // LEBENSLAUF
    progressScale = 0.6;
    transformClass = 'rotate-[720deg] translate-x-70';
    icon = '/lebenslauf-2.png';
  } else if (scrollProgress >= 0.15) {
    // PROJEKTE
    progressScale = 0.85;
    transformClass = 'rotate-[360deg] translate-x-28';
    icon = '/implementation.png';
  }

  return (
    <div className="fixed bottom-20 w-full z-50">
      <div className="w-fit ml-auto mr-4 relative">

        {/* Fortschrittsbalken */}
        <div
          className="h-[30px] bg-[#0A1A20] rounded origin-right transition-transform duration-500"
          style={{
            width: '700px',
            transform: `scaleX(${progressScale})`,
          }}
        />

        {/* Kreis */}
        <div
          className={`absolute -left-10 -top-12.25 bg-[#0A1A20] p-3 rounded-full shadow-md transition-transform duration-500 ${transformClass}`}
        >
          <Image
            src={icon}
            alt="Navigation Icon"
            width={55}
            height={55}
          />
        </div>

        {/* Hinweistext */}
        <p className="mt-3 mr-10 text-right text-white text-3xl">
          Scrolle leicht nach rechts
          <span className="text-6xl ml-2">⟶</span>
        </p>
      </div>
    </div>
  );
}
