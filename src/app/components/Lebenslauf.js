'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Lebenslauf() {
  const [iframeBlocked, setIframeBlocked] = useState(false);

  const handleScrollStart = () => {
    setIframeBlocked(true);
  };

  const handleScrollEnd = () => {
    setTimeout(() => {
      setIframeBlocked(false);
    }, 500);
  };

  return (
    <div
      className="flex flex-col items-center text-white mt-17 ml-95 select-none"
      onMouseDown={handleScrollStart}
      onMouseUp={handleScrollEnd}
      onTouchStart={handleScrollStart}
      onTouchEnd={handleScrollEnd}
      onKeyDown={handleScrollStart}
      onKeyUp={handleScrollEnd}
    >
      <h1 className="text-4xl font-bold underline mr-90 mt-4 ">Lebenslauf</h1>

      <div className="flex flex-row gap-10 mr-8">
        {/* Lebenslauf PDF */}
        <div className="w-[460px] h-[640px] bg-[#0A1A20] bg-opacity-80 shadow-lg rounded-md p-4 flex items-center justify-center relative mt-3">
          <div className="w-full h-full rounded overflow-hidden">
            <iframe
              src="/lebenslauf.pdf"
              title="Lebenslauf PDF"
              className="w-full h-full rounded"
              style={{
                pointerEvents: iframeBlocked ? 'none' : 'auto',
              }}
            />
          </div>

          {/* PDF-Download */}
          <a
            href="/lebenslauf.pdf"
            download
            className="absolute bottom-2 right-2 bg-[#143340] text-white px-3 py-1 text-sm rounded flex items-center gap-2 hover:bg-gray-200 hover:text-black transition"
          >
            Lebenslauf herunterladen
            <Image src="/pdf.png" alt="pdf" width={20} height={20} />
          </a>
        </div>

        {/* Bescheinigung PDF */}
        <div className="w-[300px] h-[400px] bg-[#0A1A20] bg-opacity-80 shadow-lg rounded-md p-4 flex items-center justify-center relative mt-7">
          <iframe
            src="/Bescheinigung.pdf"
            title="Bescheinigung PDF"
            className="w-full h-full rounded"
            style={{
              pointerEvents: iframeBlocked ? 'none' : 'auto',
            }}
          />

          {/* PDF-Download */}
          <a
            href="/Bescheinigung.pdf"
            download
            className="absolute bottom-2 right-2 bg-[#143340] text-white px-3 py-1 text-sm rounded flex items-center gap-2 hover:bg-gray-200 hover:text-black transition"
          >
            Bescheinigung herunterladen
            <Image src="/pdf.png" alt="pdf" width={20} height={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
