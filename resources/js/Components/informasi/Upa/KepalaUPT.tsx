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
    <div className="mt-40">

<div className="w-[80%] max-w-5xl mx-auto mt-10 flex flex-col md:flex-row items-center justify-center px-4 py-8 rounded-2xl bg-[url('/image/detailUPA/KepalaUPT/Selendang.png')] bg-red-500">
  {/* Informasi untuk responsive HP */}
  <div className="block md:hidden text-center mb-4">
    <h2 className="text-black text-xl font-bold font-montserrat">
      Kepala {nama_upt}
    </h2>
  </div>

  <div className="md:w-[35%] w-full flex justify-center mb-4 md:mb-0">
    <img
      src={foto_kepala_upt}
      alt="Foto Kepala UPT"
      className="w-48 h-48 rounded-full object-cover object-top shadow-lg"
    />
  </div>

  {/* Informasi untuk responsive Desktop & Tablet */}
  <div className="md:w-[65%] w-full md:pl-8 text-center md:text-left">
    <h2 className="hidden md:block text-black text-2xl font-bold font-montserrat">
      Kepala {nama_upt}
    </h2>

    <p className="text-black mt-3 font-medium text-base md:text-lg">
      Nama Lengkap: {nama_kepala_upt}
    </p>

    {nip && (
      <p className="text-black mt-1 text-base md:text-lg">NIP : {nip}</p>
    )}
  </div>
</div>

          <div className="flex items-center justify-center gap-5 mt-8">
            {link_instagram ? (
              <a
                href={link_instagram}
                target="_blank"
                rel="noreferrer"
                className="bg-jaffa-600 z-10 p-2 rounded-full cursor-pointer"
              >
                <IconBrandInstagram size={40} color="white" />
              </a>
            ) : null}
            {link_youtube ? (
              <a
                href={link_youtube}
                target="_blank"
                rel="noreferrer"
                className="bg-jaffa-600 z-10 p-2 rounded-full cursor-pointer"
              >
                <IconBrandYoutube size={40} color="white" />
              </a>
            ) : null}
            {link_website ? (
              <a
                href={link_website}
                target="_blank"
                rel="noreferrer"
                className="bg-jaffa-600 z-10 p-2 rounded-full cursor-pointer"
              >
                <IconWorldWww size={40} color="white" />
              </a>
            ) : null}
             {link_website ? (
              <a
                href={link_website}
                target="_blank"
                rel="noreferrer"
                className="bg-jaffa-600 z-10 p-2 rounded-full cursor-pointer"
              >
                <IconWorldWww size={40} color="white" />
              </a>
            ) : null}
          </div>
        </div>

  );
}
