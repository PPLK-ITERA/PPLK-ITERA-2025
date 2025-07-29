import React from "react";

interface VisiMisiProps {
  visi?: string;
  misi?: string[];
}

export default function VisiMisi({ visi, misi }: VisiMisiProps) {
  return (
    <div className="z-30 flex flex-col items-center gap-24 py-16">
    {/* VISI */}
    <div className="relative flex flex-col items-center text-center gap-6">
      {/* Lingkaran kecil lingkaran kecil lingkaran besar*/}
      <div className="absolute inset-0 flex justify-center items-start -z-10">
        <div className="w-[400px] h-[400px] bg-gradient-to-r from-[#8F1A00] to-[#FF5500] opacity-95 blur-[50px] rounded-full mt-[-40px]"></div>
      </div>

      {/* JUDUL VISI */}
      <div className="w-full flex justify-center pt-12">
        <h2
          className="text-5xl font-greek not-italic font-normal text-center leading-none text-black"
          style={{
            textShadow: "4px 4px 0 rgba(255, 255, 255, 0.67)",
          }}
        >
          VISI
        </h2>
      </div>

      {/* Card Visi */}
      <div className="relative w-full max-w-4xl px-6 z-10">
        <div className="relative bg-gradient-to-r from-[#BE3F00] to-[#BE3F00] text-white  p-10 text-center">
          <p className="font-montserrat">“{visi}”</p>
        </div>
      </div>
    </div>


      {/* MISI */}
      <div className="flex flex-col items-center text-center gap-6 relative">
        {/* JUDUL MISI */}
      <div className="w-full flex justify-center bg-orange-500 py-8">
        <h2 className="text-5xl font-greek not-italic font-normal text-center leading-none text-black"
          style={{textShadow: '4px 4px 0 rgba(255, 255, 255, 0.67)',}}>
          MISI
        </h2>
      </div>

        <div className="relative w-full max-w-4xl px-6">
          {/* Lingkaran blur */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-72 h-72 bg-gradient-to-r from-[#8F1A00] to-[#FF5500] opacity-7 blur-[40px] rounded-full"></div>
          </div>

        {/* Card Misi*/}
          <div className="relative z-10 bg-gradient-to-r from-jaffa-700/90 to-jaffa-800/90 text-white rounded-lg p-10 text-left font-montserrat">
            <ol className="space-y-3 pl-4">
              {misi!.map((misi: string, index: number) => (
                <div key={index} className="flex gap-2">
                  <p>{index + 1}.</p>
                  <p>{misi}</p>
                </div>
              ))}
            </ol>
          </div>
        </div>
      </div>
      
    </div>
  );
}
