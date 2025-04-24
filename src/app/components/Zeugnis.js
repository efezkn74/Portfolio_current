export default function Zeugnisse() {
    return (
      <div className="flex flex-col items-center text-white mt-25">
        <h1 className="text-4xl font-bold underline mb-2">Zeugnisse</h1>
  
        <div className="flex gap-8">
          {/* LINKES Zeugnis */}
          <div className="relative w-[450px] h-[650px] bg-[#0A1A20] bg-opacity-80 rounded-md shadow-lg ml-90 p-4">
            <iframe
              src="/Leistungsnachweis.pdf"
              className="w-full h-full rounded"
              title="Zeugnis PDF"
            />
  
            <a
              href="/Leistungsnachweis.pdf"
              download
              className="absolute bottom-2 right-2 bg-[#143340] text-white px-3 py-1 text-sm rounded flex items-center gap-2 hover:bg-gray-200 hover:text-black transition"
            >
              Zeugnis als PDF herunterladen
              <img src="/pdf.png" alt="pdf" width={20} height={20} />
            </a>
          </div>
  
          {/* RECHTES Zeugnis 2022 */}
          <div className="relative w-[300px] h-[400px] bg-[#0A1A20] bg-opacity-70 rounded-md shadow-md flex items-center justify-center p-4">
            <iframe
              src="/Zeugnis 2022.pdf"
              title="Zeugnis 2022"
              className="w-full h-full rounded"
            />
            <a
              href="/Zeugnis 2022.pdf"
              download
              className="absolute bottom-2 right-2 bg-[#143340] text-white px-3 py-1 text-sm rounded flex items-center gap-2 hover:bg-gray-200 hover:text-black transition"
            >
              Zeugnis als PDF herunterladen
              <img src="/pdf.png" alt="pdf" width={20} height={20} />
            </a>
          </div>
        </div>
      </div>
    );
  }
  