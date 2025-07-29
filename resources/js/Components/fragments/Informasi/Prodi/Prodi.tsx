import React from "react";

import {
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandYoutube,
  IconWorldWww,
} from "@tabler/icons-react";

import { AccordionKk } from "@/Components/informasi/prodi/AccordionKk";
import { Card, CardContent } from "@/Components/ui/card";

import { useAos } from "@/lib/hooks/useAos";
import { ProgramStudi } from "@/lib/types/ProgramStudi";

import accreditation_a from "!assets/accreditation-a.png";
import banpt from "!assets/banpt.png";

type Props = { prodi: ProgramStudi; className?: string };

const Prodi = ({ prodi, className }: Props) => {
  useAos();

  return (
    <div className={className}>
      <div className="place-content-center flex flex-col w-full gap-16 py-24">
        <div className="place-content-center flex flex-col w-full gap-16 py-24">
          {/* BAGIAN HERO (LOGO & DESKRIPSI) */}
          <div className="relative rounded-2xl overflow-hidden">
            {/* Konten Glassmorphism di atasnya */}
            <div className="relative z-10 bg-black/30 backdrop-blur-lg p-32 shadow-lg border border-white/20">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                {prodi.imageUrl ? (
                  <div className="w-48 h-48 p-4 rounded-full flex-shrink-0">
                    <img
                      src={prodi.imageUrl}
                      alt="Prodi"
                      className="object-contain w-full h-full"
                    />
                  </div>
                ) : null}

                <div className="text-center md:text-left">
                  <h1 className="font-greek lg:text-5xl text-white text-4xl">
                    {prodi.name}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <p className="font-medium text-justify mt-8">{prodi.description}</p>
        </div>
        <div
          className="flex flex-col gap-6"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h1 className="font-greek lg:text-6xl text-moccaccino-600 mb-2 text-center text-2xl">
            Sejarah
          </h1>

          <p className="font-medium text-justify">
            {prodi.history ? prodi.history : <p>Coming Soon</p>}
          </p>
        </div>

        <Card
          className="bg-jaffa-300 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <CardContent className="lg:px-12 p-4">
            <div className="font-greek place-content-center flex w-full h-full">
              <div className="grow place-content-center flex flex-col text-left">
                <p className="lg:text-2xl mb-4 text-lg font-bold">
                  Akreditasi {prodi.accreditation}
                </p>
                <p className="max-lg:text-sm font-tinos">{prodi.name}</p>
                <p className="max-lg:text-sm font-tinos">
                  {prodi.accreditationNo
                    ? prodi.accreditationNo
                    : "Coming Soon"}
                </p>
              </div>

              <div className="max-lg:flex-col place-content-center place-items-center flex gap-2">
                <img
                  className="lg:h-20 object-contain h-12"
                  src={banpt}
                  alt="ban-pt"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div
          className="max-lg:flex-col flex gap-8 mt-8 max-md:text-sm"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="basis-1/2 relative">
            <h1 className="border-jaffa-600 text-jaffa-600 font-greek absolute top-0 p-2 px-8 font-bold -translate-x-4 -translate-y-1/2 bg-white border-2 rounded-full">
              Visi
            </h1>
            <p className="rounded-xl bg-gradient-to-br from-jaffa-600 to-jaffa-700 h-full p-8 text-left text-white ">
              {prodi.vision}
            </p>
          </div>
          <div className=" basis-1/2 relative">
            <h1 className="border-jaffa-600 text-jaffa-600 font-greek absolute top-0 p-2 px-8 font-bold -translate-x-4 -translate-y-1/2 bg-white border-2 rounded-full">
              Misi
            </h1>

            <p className="rounded-xl bg-gradient-to-br from-jaffa-600 to-jaffa-700 h-full p-8 text-left text-white whitespace-pre-wrap">
              {prodi.mission ? (
                <>
                  {prodi.mission.map((misi, index) => (
                    <span key={index} className="flex gap-2">
                      {index + 1}. {misi}
                      <br />
                    </span>
                  ))}
                </>
              ) : (
                <p>Data Kosong</p>
              )}
            </p>
          </div>
        </div>

        <h1 className="font-greek lg:text-6xl text-moccaccino-600  text-center text-2xl">
          Koordinator Program Studi
        </h1>

        <Card
          className="bg-moccaccino-50 lg:p-8 lg:px-32 flex flex-col gap-6 p-4 text-left rounded-lg shadow-xl"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="max-lg:flex-col place-items-center font-montserrat flex justify-center gap-6 mt-4">
            {prodi.coordinatorPhoto ? (
              <img
                src={prodi.coordinatorPhoto}
                alt="Koordinator"
                className="lg:h-28 lg:w-28 object-cover w-20 h-20 rounded-full"
              />
            ) : null}

            <div className="place-content-center max-lg:place-items-center max-lg:text-center flex flex-col text-left">
              <p className="lg:text-2xl text-lg font-semibold">
                {prodi.coordinatorName}
              </p>
              <p className="text-black/70 mt-2 text-sm">
                Koordinator Program Studi {prodi.name}
              </p>
            </div>
          </div>
        </Card>

        <div data-aos="fade-up" data-aos-duration="800" className="mb-14">
          <h1 className="font-greek lg:text-6xl text-moccaccino-600  text-center text-2xl ">
            Kelompok Keahlian
          </h1>

          <AccordionKk kk={prodi.kk} />
        </div>

        <div
          className="text-center mb-36"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h1 className="font-jakarta text-bold lg:text-6xl text-moccaccino-600 text-2xl">
            Sosial Media {prodi.name}
          </h1>

          <div className="place-content-center text-jaffa-200 flex gap-8 mt-4">
            {prodi.instagramUrl && (
              <a href={prodi.instagramUrl} target="_blank">
                <div className="bg-moccaccino-600 flex items-center justify-center p-2 rounded-full">
                  <IconBrandInstagram size={40} color="white" />
                </div>
              </a>
            )}

            {prodi.youtubeUrl && (
              <a href={prodi.youtubeUrl} target="_blank">
                <div className="bg-moccaccino-600 flex items-center justify-center p-2 rounded-full">
                  <IconBrandYoutube size={40} color="white" />
                </div>
              </a>
            )}

            {prodi.websiteUrl && (
              <a href={prodi.websiteUrl} target="_blank">
                <div className="bg-moccaccino-600 flex items-center justify-center p-2 rounded-full">
                  <IconWorldWww size={40} color="white" />
                </div>
              </a>
            )}

            {prodi.tiktokUrl && (
              <a href={prodi.tiktokUrl} target="_blank">
                <div className="bg-moccaccino-600 flex items-center justify-center p-2 rounded-full">
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

export default Prodi;
