import React from "react";
import { useAos } from "@/lib/hooks/useAos";

interface PrestasiItem {
  prestasi: string;
  deskripsi: string;
}

interface PrestasiProps {
  allprestasi: PrestasiItem[];
}

export function Prestasi({ allprestasi }: PrestasiProps) {
  useAos();

  if (!allprestasi || allprestasi.length === 0) {
    return (
      <div 
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-center py-12"
      >
        <p className="text-lg text-gray-600 font-montserrat">
          Tidak ada prestasi dan kegiatan yang tersedia saat ini.
        </p>
      </div>
    );
  }

  return (
    <div 
      data-aos="fade-up"
      data-aos-duration="1000"
      className="w-full max-w-7xl mx-auto"
    >
      <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
        {allprestasi.map((prestasi: PrestasiItem, index: number) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-duration={1000 + (index * 200)}
            className="group relative overflow-visible cursor-pointer hover:z-50 flex-shrink-0"
            style={{ minHeight: '320px' }} // Fixed height to prevent layout shift
          >
            <div className="relative w-52 h-80 group-hover:w-80 transition-all duration-500 ease-in-out overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
                style={{
                  backgroundImage: `url(${prestasi.prestasi})`,
                }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/95 group-hover:via-black/70 group-hover:to-black/30 transition-all duration-500" />
              
              {/* Number Badge - Bottom Right */}
              <div className="absolute bottom-4 right-4 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">
                <span className="text-lg font-bold text-white">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Content - Centered at Top */}
              <div className="absolute top-8 left-4 right-4 z-10 text-center">
                {/* Default Text - Visible when not hovered */}
                <div className="group-hover:opacity-0 group-hover:translate-x-4 transition-all duration-300">
                  <h3 className="text-white font-greek font-bold text-xl md:text-2xl leading-tight">
                    PRESTASI {index + 1}
                  </h3>
                </div>

                {/* Hover Text - Visible when hovered */}
                <div className="opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-150">
                  <p className="text-white font-jakartasans text-sm md:text-base leading-relaxed text-justify pr-8">
                    {prestasi.deskripsi}
                  </p>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-orange-400/50 rounded-2xl transition-all duration-300" />
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              </div>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
                <div className="w-3 h-3 border-2 border-orange-400 rounded-full"></div>
              </div>

              {/* Vertical Text for Expanded State */}
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 opacity-0 group-hover:opacity-60 transition-all duration-500 delay-200">
                <span className="text-white/40 font-greek text-xs tracking-widest whitespace-nowrap">
                  PRESTASI & KEGIATAN
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}