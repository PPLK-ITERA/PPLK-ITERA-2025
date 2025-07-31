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
          <div className="flex flex-col lg:flex-row bg-[#432005] text-white rounded-xl p-6 lg:p-8 gap-6 lg:gap-12 items-center justify-between max-w-6xl mx-auto w-full">
            {/* Bagian Kiri: Teks */}
            <div className="text-left max-w-xl">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                {prodi.hmpsAcronym}
              </h2>
              <p className="text-sm lg:text-base leading-relaxed text-white">
                {prodi.hmpsDescrption}
              </p>
            </div>

            {/* Bagian Kanan: Logo, Foto, dan Info Ketua */}
            <div className="flex flex-col items-center justify-center gap-8">
              <img
                src={prodi.hmpsImageUrl}
                alt="Logo Himpunan"
                className="w-72 h-auto object-contain"
              />
              <p className="bg-[#F5E8D5] text-black rounded-lg px-4 py-6 text-center text-sm">
                <p className="max-lg:text-xs mb-4">
                  Ketua {prodi.hmpsName}
                  <br />
                  2025-2026
                </p>
                <span className="font-semibold text-x">{prodi.kahim}</span>
              </p>
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
