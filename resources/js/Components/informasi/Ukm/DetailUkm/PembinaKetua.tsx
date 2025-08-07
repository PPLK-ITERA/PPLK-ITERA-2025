import React from "react";
import { useAos } from "@/lib/hooks/useAos";

interface PembinaKetuaProps {
  namaketum: string;
  fotoketum: string;
  namapembina: string;
  fotopembina: string;
  prodi?: string; // Make prodi optional
}

export default function PembinaKetua({ 
  namaketum, 
  fotoketum, 
  namapembina, 
  fotopembina, 
  prodi 
}: PembinaKetuaProps) {
  useAos();

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-2 justify-center items-stretch">
      {/* Pembina Card */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center w-full max-w-[280px] md:max-w-[320px] mx-auto border-2 border-orange-100 h-[400px] md:h-[450px]"
      >
        {/* Title moved to top */}
        <div className="mb-6 flex-shrink-0">
          <h3 className="font-greek text-lg md:text-xl text-orange-600 uppercase tracking-wide">
            PEMBINA
          </h3>
        </div>
        
        {/* Photo section */}
        <div className="relative mb-6 flex-shrink-0">
          <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-orange-200 shadow-md">
            <img
              src={fotopembina}
              alt={`Foto ${namapembina}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="space-y-2 flex-grow flex flex-col justify-center">
          <h4 className="font-jakartasans font-bold text-lg md:text-xl text-gray-800 leading-tight px-2">
            {namapembina}
          </h4>
        </div>
      </div>

      {/* Ketua Umum Card */}
      <div
        data-aos="fade-up"
        data-aos-duration="1200"
        className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center w-full max-w-[280px] md:max-w-[320px] mx-auto border-2 border-orange-100 h-[400px] md:h-[450px]"
      >
        {/* Title moved to top */}
        <div className="mb-6 flex-shrink-0">
          <h3 className="font-greek text-lg md:text-xl text-orange-600 uppercase tracking-wide">
            KETUA UMUM
          </h3>
        </div>
        
        {/* Photo section */}
        <div className="relative mb-6 flex-shrink-0">
          <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-orange-200 shadow-md">
            <img
              src={fotoketum}
              alt={`Foto ${namaketum}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Name and prodi section - flex-grow to fill remaining space */}
        <div className="space-y-2 flex-grow flex flex-col justify-center">
          <h4 className="font-jakartasans font-bold text-lg md:text-xl text-gray-800 leading-tight px-2">
            {namaketum}
          </h4>
          {prodi && (
            <p className="font-montserrat text-sm md:text-base text-gray-600 px-2">
              {prodi}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}