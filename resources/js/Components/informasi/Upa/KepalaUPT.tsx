import { InstagramLogoIcon } from "@radix-ui/react-icons";

import React from "react";

import {
  IconBrandInstagram,
  IconBrandYoutube,
  IconWorldWww,
} from "@tabler/icons-react";
import KegiatanUnggulan from "./KegiatanUnggulan";

interface KepalaUPTProps {
  nama_upt?: string;
  nama_kepala_upt?: string;
  jabatan?: string;
  nip?: string;
  foto_kepala_upt?: string;
  link_instagram?: string;
  link_tiktok?: string;
  link_youtube?: string;
  link_website?: string;
}

export default function KepalaUPT({
  nama_upt,
  nama_kepala_upt,
  jabatan,
  nip,
  foto_kepala_upt,
  link_instagram,
  link_youtube,
  link_website,
}: KepalaUPTProps) {
  return (
<div className="mt-4">
  <div
    className="w-[80%] max-w-5xl mx-auto mt-10 flex flex-col md:flex-row items-center justify-center px-8 py-8 rounded-2xl relative z-10"
    style={{
      backgroundImage: "url('/image/detailUPA/KepalaUPT/Selendang.png')",
      backgroundSize: "100% 100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "500px", 
      width: "100%", 
      paddingTop: "60px",
      paddingBottom: "60px",
    }}
  >
    {/* Informasi untuk responsive HP */}
    <div className="block md:hidden text-center mb-2">
      <h2 className="text-black text-xl font-bold font-montserrat">
        Kepala {nama_upt}
      </h2>
    </div>

    {/* Gambar Profil untuk HP */}
    <div className="w-28 h-28 flex justify-center mb-4 md:mb-0">
      <img
        src={foto_kepala_upt}
        alt="Foto Kepala UPT"
        className="w-full h-full rounded-full object-cover object-top shadow-lg"
      />
    </div>

    {/* Informasi untuk responsive HP */}
    <div className="md:hidden w-full text-left px-8">
      <p className="text-black text-sm">
        Nama Lengkap: {nama_kepala_upt}
      </p>
      {nip && (
        <p className="text-black text-sm mb-5">
          NIP : {nip}
        </p>
      )}
    </div>

    {/* Informasi untuk responsive Desktop & Tablet */}
    <div className="hidden md:block md:w-[65%] w-full md:pl-8 text-center md:text-left">
      <h2 className="text-black text-2xl font-bold font-montserrat">
        Kepala {nama_upt}
      </h2>

      <p className="text-black mt-3 text-base md:text-lg">
        Nama Lengkap: {nama_kepala_upt}
      </p>

      {nip && (
        <p className="text-black mt-1 text-base md:text-lg">NIP : {nip}</p>
      )}
    </div>
  </div>
</div>




  );
}
