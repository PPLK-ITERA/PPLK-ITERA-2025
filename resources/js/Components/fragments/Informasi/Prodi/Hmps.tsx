import React, { useState } from "react";

import {
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandYoutube,
  IconWorldWww,
} from "@tabler/icons-react";

import HmpsActivity from "@/Components/informasi/prodi/HmpsActivity";
import { Card } from "@/Components/ui/card";

import { ProgramStudi } from "@/lib/types/ProgramStudi";

type Props = { prodi: ProgramStudi; className?: string };

const Hmps = ({ prodi, className }: Props) => {
  return (
    <div className={className}>
      <div className="place-content-center flex flex-col w-full gap-16 py-24">
        <div
          className="flex flex-col w-full max-w-6xl gap-12 px-4 mx-auto text-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Ganti seluruh isi div utama Anda dengan ini */}
          <div className="flex flex-col lg:flex-row bg-[#432005] text-white rounded-xl p-8 gap-8 items-stretch max-w-6xl mx-auto w-full">
            {/* KOTAK PUTIH (SEKARANG BERISI LOGO DAN TEKS) */}
            <div className="relative bg-[#F5E8D5] text-black rounded-lg p-6 w-full lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* Kolom Teks (menjadi urutan terakhir di mobile) */}
                <div className="md:col-span-2 text-justify order-last md:order-none">
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                    {prodi.hmpsAcronym}
                  </h2>
                  <p className="text-sm lg:text-base leading-relaxed text-black">
                    {prodi.hmpsDescrption}
                  </p>
                </div>

                {/* Kolom Logo (menjadi urutan pertama di mobile) */}
                <div className="flex items-center justify-center order-first md:order-none">
                  <img
                    src={prodi.hmpsImageUrl}
                    alt="Logo Himpunan"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* BAGIAN KANAN (HANYA INFO KETUA) */}
            <div className="flex-shrink-0 bg-[#F5E8D5] text-black rounded-lg p-2 md:p-4 text-center">
              <img
                src={prodi.kahimPhoto}
                alt="Foto Kahim"
                className="w-20 md:w-24 lg:w-32 h-auto object-center mx-auto mb-2 md:mb-4 rounded-xl"
              />
              <p className="text-[10px] md:text-xs mb-1 md:mb-2">
                Ketua {prodi.hmpsName}
                <br />
                2025-2026
              </p>
              <span className="font-semibold text-lg md:text-xl">
                {prodi.kahim}
              </span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="place-content-center place-items-center flex">
            <div className="h-[1px] bg-white grow"></div>
            <h4 className="font-greek lg:text-6xl text-moccaccino-800 mb-2 text-center text-2xl ">
              PRESTASI
            </h4>
            <div className="h-[1px] bg-white grow"></div>
          </div>
        </div>

        <div className="w-full max-w-6xl px-4 mx-auto">
          <HmpsActivity hmpsActivities={prodi.hmpsActivities} />
        </div>

        <div
          className="w-full max-w-6xl px-4 mx-auto text-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h1 className="font-jakarta text-bold lg:text-6xl text-moccaccino-800 text-xl">
            Sosial Media {prodi.hmpsAcronym}
          </h1>

          <div className="place-content-center text-jaffa-200 flex gap-8 mt-4">
            {prodi.hmpsInstagramUrl && (
              <a href={prodi.hmpsInstagramUrl} target="_blank">
                <div className="bg-moccaccino-800 flex items-center justify-center p-2 rounded-full">
                  <IconBrandInstagram size={40} color="white" />
                </div>
              </a>
            )}

            {prodi.hmpsYoutubeUrl && (
              <a href={prodi.hmpsYoutubeUrl} target="_blank">
                <div className="bg-moccaccino-800 flex items-center justify-center p-2 rounded-full">
                  <IconBrandYoutube size={40} color="white" />
                </div>
              </a>
            )}

            {prodi.hmpsWebsiteUrl && (
              <a href={prodi.hmpsWebsiteUrl} target="_blank">
                <div className="bg-moccaccino-800 flex items-center justify-center p-2 rounded-full">
                  <IconWorldWww size={40} color="white" />
                </div>
              </a>
            )}

            {prodi.hmpsTiktokUrl && (
              <a href={prodi.hmpsTiktokUrl} target="_blank">
                <div className="bg-moccaccino-800 flex items-center justify-center p-2 rounded-full">
                  <IconBrandTiktok size={40} color="white" />
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hmps;
