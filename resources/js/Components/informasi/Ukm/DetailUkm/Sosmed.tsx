import React from "react";

import {
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandYoutube,
  IconWorldWww,
} from "@tabler/icons-react";

import { useAos } from "@/lib/hooks/useAos";

const icons = {
  instagram: (
    <div className="relative group">
      {/* 3D Shadow Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900 to-orange-900 rounded-2xl transform translate-x-1 translate-y-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"></div>
      
      {/* Main Button */}
      <div className="relative bg-gradient-to-br from-orange-600 via-orange-700 to-amber-800 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-x-0.5 hover:-translate-y-0.5 border border-orange-500/30">
        {/* Inner glow effect */}
        <div className="absolute inset-1 bg-gradient-to-br from-orange-400/20 to-transparent rounded-xl"></div>
        <IconBrandInstagram size={28} color="white" className="relative z-10 drop-shadow-lg" />
      </div>
    </div>
  ),
  youtube: (
    <div className="relative group">
      {/* 3D Shadow Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900 to-orange-900 rounded-2xl transform translate-x-1 translate-y-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"></div>
      
      {/* Main Button */}
      <div className="relative bg-gradient-to-br from-orange-700 via-amber-800 to-orange-900 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-x-0.5 hover:-translate-y-0.5 border border-orange-500/30">
        {/* Inner glow effect */}
        <div className="absolute inset-1 bg-gradient-to-br from-orange-400/20 to-transparent rounded-xl"></div>
        <IconBrandYoutube size={28} color="white" className="relative z-10 drop-shadow-lg" />
      </div>
    </div>
  ),
  website: (
    <div className="relative group">
      {/* 3D Shadow Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900 to-orange-900 rounded-2xl transform translate-x-1 translate-y-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"></div>
      
      {/* Main Button */}
      <div className="relative bg-gradient-to-br from-amber-700 via-orange-800 to-amber-900 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-x-0.5 hover:-translate-y-0.5 border border-orange-500/30">
        {/* Inner glow effect */}
        <div className="absolute inset-1 bg-gradient-to-br from-orange-400/20 to-transparent rounded-xl"></div>
        <IconWorldWww size={28} color="white" className="relative z-10 drop-shadow-lg" />
      </div>
    </div>
  ),
  tiktok: (
    <div className="relative group">
      {/* 3D Shadow Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900 to-orange-900 rounded-2xl transform translate-x-1 translate-y-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"></div>
      
      {/* Main Button */}
      <div className="relative bg-gradient-to-br from-orange-600 via-amber-700 to-orange-800 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-x-0.5 hover:-translate-y-0.5 border border-orange-500/30">
        {/* Inner glow effect */}
        <div className="absolute inset-1 bg-gradient-to-br from-orange-400/20 to-transparent rounded-xl"></div>
        <IconBrandTiktok size={28} color="white" className="relative z-10 drop-shadow-lg" />
      </div>
    </div>
  ),
};

export default function Sosmed({ allsosmed }) {
  const sosmedLinks = allsosmed[0];
  useAos();

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="z-20 flex flex-wrap items-center justify-center gap-6 md:gap-8 p-4"
    >
      {Object.entries(sosmedLinks).map(([type, url]) =>
        url ? (
          <a
            key={type}
            href={url as string}
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-all duration-300 hover:-translate-y-2"
          >
            {icons[type] || <span>Icon not found</span>}
          </a>
        ) : null,
      )}
    </div>
  );
}