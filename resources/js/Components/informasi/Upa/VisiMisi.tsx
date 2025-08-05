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
  {/* Lingkaran */}
  <div className="absolute inset-0 flex justify-center items-start -z-10">
    <div className="w-[550px] h-[550px] sm:w-[450px] sm:h-[450px] bg-gradient-to-r from-[#8F1A00] to-[#FF5500] opacity-100 blur-[25px] rounded-full mt-[-40px] md:w-[450px] md:h-[450px] lg:w-[450px] lg:h-[450px]" />
  </div>

  {/* JUDUL VISI */}
  <div className="w-full flex justify-center py-0">
    <h2 className="text-4xl font-greek not-italic font-normal text-center leading-none text-black mb-1"
      style={{ textShadow: '3px 3px 0 rgba(255, 255, 255, 0.67)' }}>
      VISI
    </h2>
  </div>

  {/* Card Visi */}
  <div className="relative w-full flex justify-center px-4">
    <div className="relative w-full max-w-xl sm:max-w-4xl z-10">

  {/* Card Konten */}
  <div className="relative bg-gradient-to-r from-[#BE3F00] to-[#BE3F00] text-white px-5 sm:px-10 text-center z-20 rounded-md min-h-[300px] sm:min-h-[auto] flex items-center justify-center py-20 mt-0">
  
  {/* Persegi Kiri */}
  <div className="absolute -top-1 -bottom-1 left-0 w-8 sm:w- bg-black"> 

    {/* Pilar Atas */}
    <img
      src="/image/detailUPA/VisiMisi/aset1.png"
      alt="kiri atas"
      className="absolute -top-[32px] w-8 sm:W-8 lg:w-14"
    />
    {/* Pilar Bawah */}
    <img
      src="/image/detailUPA/VisiMisi/aset1.png"
      alt="kiri bawah"
      className="absolute -bottom-[32px] w-8 sm:w-8 lg:w-14 rotate-180"
      />
  </div>

  {/* Persegi Kanan */}
  <div className="absolute -top-1 -bottom-1 right-0 w-8 sm:w- bg-black"> 

    {/* Pilar Atas */}
    <img
      src="/image/detailUPA/VisiMisi/aset1.png"
      alt="kiri atas"
      className="absolute -top-[32px] w-8 sm:W-8 lg:w-14"
    />
    {/* Pilar Bawah */}
    <img
      src="/image/detailUPA/VisiMisi/aset1.png"
      alt="kiri bawah"
      className="absolute -bottom-[32px] w-8 sm:w-8 lg:w-14 rotate-180"
      />
  </div>

  <p className="font-montserrat text-base sm:text-lg px-4 sm:px-24 relative z-10 leading-relaxed">
    “{visi}”
  </p>
</div>


    </div>
  </div>
</div>




{/* MISI */}
<div className="relative flex flex-col items-center text-center gap-6 mt-40">
  {/* Lingkaran */}
  <div className="absolute inset-0 flex justify-center items-start -z-10">
    <div className="w-[550px] h-[550px] sm:w-[450px] sm:h-[450px] bg-gradient-to-r from-[#8F1A00] to-[#FF5500] opacity-100 blur-[25px] rounded-full mt-[-40px] md:w-[450px] md:h-[450px] lg:w-[450px] lg:h-[450px]" />
  </div>

  {/* JUDUL MISI */}
  <div className="w-full flex justify-center py-0">
    <h2 className="text-4xl font-greek not-italic font-normal text-center leading-none text-black mb-1"
      style={{ textShadow: '3px 3px 0 rgba(255, 255, 255, 0.67)' }}>
      MISI
    </h2>
  </div>

  {/* Card Misi */}
  <div className="relative w-full flex justify-center px-4">
    <div className="relative w-full max-w-xl sm:max-w-4xl z-10">

  {/* Card Konten */}
  <div className="relative bg-gradient-to-r from-[#BE3F00] to-[#BE3F00] text-white px-5 sm:px-10 text-center z-20 rounded-md min-h-[300px] sm:min-h-[auto] flex items-center justify-center py-20 mt-0">
  
  {/* Persegi Kiri */}
  <div className="absolute -top-1 -bottom-1 left-0 w-8 sm:w-8 bg-black"> 

    {/* Pilar Atas */}
    <img
      src="/image/detailUPA/VisiMisi/aset1.png"
      alt="kiri atas"
      className="absolute -top-[32px] w-8 sm:W-8 lg:w-14"
    />
    {/* Pilar Bawah */}
    <img
      src="/image/detailUPA/VisiMisi/aset1.png"
      alt="kiri bawah"
      className="absolute -bottom-[32px] w-8 sm:w-8 lg:w-14 rotate-180"
      />
  </div>

  {/* Persegi Kanan */}
  <div className="absolute -top-1 -bottom-1 right-0 w-8 sm:w-8 bg-black"> 

    {/* Pilar Atas */}
    <img
      src="/image/detailUPA/VisiMisi/aset1.png"
      alt="kiri atas"
      className="absolute -top-[32px] w-8 sm:W-8 lg:w-14"
    />
    {/* Pilar Bawah */}
    <img
      src="/image/detailUPA/VisiMisi/aset1.png"
      alt="kiri bawah"
      className="absolute -bottom-[32px] w-8 sm:w-8 lg:w-14 rotate-180"
      />
  </div>

    <div className="bg-gradient-to-r from-[#BE3F00] to-[#BE3F00] text-white p-10 text-left font-montserrat">
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
</div>
      
    </div>
  );
}
