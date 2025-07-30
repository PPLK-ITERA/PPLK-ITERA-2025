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
  {/* Background Lingkaran */}
  <div className="absolute inset-0 flex justify-center items-start -z-10">
    <div className="w-[400px] h-[400px] bg-gradient-to-r from-[#8F1A00] to-[#FF5500] opacity-95 blur-[50px] rounded-full mt-[-40px]" />
  </div>

  {/* JUDUL VISI */}
  <div className="w-full flex justify-center pt-12 relative z-20">
    <h2
      className="text-5xl font-greek not-italic font-normal text-center leading-none text-black"
      style={{
        textShadow: "4px 4px 0 rgba(255, 255, 255, 0.67)",
      }}
    >
      VISI
    </h2>

    {/* Aset 2 (pilar kecil) di bawah tulisan VISI */}
    <img
      src="/image/detailUPA/VisiMisi/aset2.png"
      alt="Aset 2"
      className="absolute top-full mt-[-10px] w-[60px] h-auto"
    />
  </div>

  {/* Card Visi */}
  <div className="relative w-full flex justify-center">
    <div className="relative w-full max-w-4xl px-6 z-10">
      {/* Aset 1 kiri */}
      <img
        src="/image/detailUPA/VisiMisi/aset1.png"
        alt="Pilar Kiri"
        className="absolute inset-y-0 left-0 w-[32px] h-full z-10 object-contain"
      />

      {/* Aset 1 kanan */}
      <img
        src="/image/detailUPA/VisiMisi/aset1.png"
        alt="Pilar Kanan"
        className="absolute inset-y-0 right-0 w-[32px] h-full z-10 object-contain"
      />

{/* Card Konten */}
<div className="relative bg-gradient-to-r from-[#BE3F00] to-[#BE3F00] text-white p-10 text-center z-20">
  {/* Aset 4 (gabungan atas bawah) */}
  <img
    src="/image/detailUPA/VisiMisi/aset4.png"
    alt="Dekorasi Atas Bawah"
    className="absolute top-0 left-0 w-full"
  />

  <p className="font-montserrat z-10 relative">“{visi}”</p>
</div>


        {/* Kotak kiri */}
        <div className="absolute inset-y-0 left-0 w-[32px] h-auto bg-black z-10" />

        {/* Kotak kanan */}
        <div className="absolute inset-y-0 right-0 w-[32px] h-auto bg-black z-10" />
    </div>
  </div>
</div>



{/* MISI */}
<div className="relative flex flex-col items-center text-center gap-6 mt-44">
  {/* Lingkaran */}
  <div className="absolute inset-0 flex justify-center items-start -z-10">
    <div className="w-[400px] h-[400px] bg-gradient-to-r from-[#8F1A00] to-[#FF5500] opacity-95 blur-[50px] rounded-full mt-[-40px]"></div>
  </div>

  {/* Judul */}
  <div className="w-full flex justify-center py-8">
    <h2 className="text-5xl font-greek not-italic font-normal text-center leading-none text-black"
      style={{ textShadow: '4px 4px 0 rgba(255, 255, 255, 0.67)' }}>
      MISI
    </h2>
  </div>

  {/* Card Misi */}
  <div className="relative w-full max-w-4xl px-6">
    {/* Kotak kiri */}
    <div className="absolute inset-y-0 left-0 w-[32px] bg-black z-10" />

    {/* Kotak kanan */}
    <div className="absolute inset-y-0 right-0 w-[32px] bg-black z-10" />

    <div className="relative z-20 bg-gradient-to-r from-[#BE3F00] to-[#BE3F00] text-white p-10 text-left font-montserrat">
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
