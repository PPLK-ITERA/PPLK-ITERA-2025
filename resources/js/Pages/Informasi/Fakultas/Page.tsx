import React, { useEffect } from "react";

import { Head } from "@inertiajs/react";

import DefaultLayout from "@/Layouts/DefaultLayout";

import Header from "@/Components/informasi/Fakultas/Header";
import Hero from "@/Components/informasi/Fakultas/Hero";
import KegiatanUnggulan from "@/Components/informasi/Fakultas/KegiatanUnggulan";
import ProgramStudi from "@/Components/informasi/Fakultas/ProgramStudi";
import StrukturOrganisasi from "@/Components/informasi/Fakultas/StrukturOrganisasi";
import VisiMisi from "@/Components/informasi/Fakultas/VisiMisi";

import { useAos } from "@/lib/hooks/useAos";

import fakultasSains from "!assets/fakultas-sains.png";
import fakultasTeknologiIndustri from "!assets/fakultas-teknologi-industri.png";
import fakultasTeknologiInfrastruktur from "!assets/fakultas-teknologi-infrastruktur-dan-kewilayahan.png";
import overlay_box from "!assets/overlay-box.png";
import pillar_brown from "!assets/pillar-brown.png";

export default function Page() {
  useAos();

  const [selectedFakultas, setSelectedFakultas] = React.useState(
    localStorage.getItem("selectedFakultas") || "fakultas-sains",
  );

  useEffect(() => {
    localStorage.setItem("selectedFakultas", selectedFakultas);
  }, [selectedFakultas]);

  return (
    <>
      <Head title="Informasi Fakultas" />

      <DefaultLayout>
        <div className="bg-mobile-hero-background md:h-full lg:h-screen md:bg-desktop-hero-background lg:bg-desktop-hero-background relative h-screen bg-bottom bg-cover">
          <Header fakultas={selectedFakultas} />

          <div className="bottom-20 md:bottom-0 absolute z-10 w-full px-2">
            <div className="md:max-w-3xl flex justify-between max-w-sm gap-3 mx-auto">
              <button
                className={`${selectedFakultas == "fakultas-sains" ? "bg-jaffa-700" : "bg-jaffa-200"} hover:bg-jaffa-700 rounded-xl md:py-4 md:px-20 flex items-center justify-center px-8 py-4 shadow-lg transition-all duration-300 ease-in-out`}
                onClick={() => setSelectedFakultas("fakultas-sains")}
              >
                <img
                  src={fakultasSains}
                  alt="fakultasSains"
                  className="md:w-[10vh] grayscale filter w-12"
                />
              </button>

              <button
                className={`${selectedFakultas == "fakultas-ftik" ? "bg-jaffa-700" : "bg-jaffa-200"} hover:bg-jaffa-700 rounded-xl md:py-4 md:px-20 flex items-center justify-center px-8 shadow-lg transition-all duration-300 ease-in-out`}
                onClick={() => setSelectedFakultas("fakultas-ftik")}
              >
                <img
                  src={fakultasTeknologiInfrastruktur}
                  alt="fakultasTeknologiInfrastruktur"
                  className="md:w-[15vh] grayscale filter w-16"
                />
              </button>

              <button
                className={`${selectedFakultas == "fakultas-fti" ? "bg-jaffa-700" : "bg-jaffa-200"}  hover:bg-jaffa-700 rounded-xl md:py-4 md:px-20 flex items-center justify-center px-8 py-4 shadow-lg transition-all duration-300 ease-in-out`}
                onClick={() => setSelectedFakultas("fakultas-fti")}
              >
                <img
                  src={fakultasTeknologiIndustri}
                  alt="fakultasTeknologiIndustri"
                  className="md:w-[10vh] grayscale filter w-12"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-pattern-white relative pt-20">
          <div className="relative max-w-5xl mx-auto flex flex-col gap-24">
            <div
              data-aos="fade-up"
              data-aos-duration="600"
              className="md:flex w-full"
            >
              <Hero fakultas={selectedFakultas} />
            </div>
            <div data-aos="fade-up" data-aos-duration="600">
              <VisiMisi fakultas={selectedFakultas} />
            </div>
          </div>

          <div className="top-1/4 xl:visible absolute flex flex-col invisible w-full">
            <img src={pillar_brown} alt="pillar_brown" className="w-full" />

            <img
              src={overlay_box}
              alt="pillar_brown"
              className="z-20 w-full -mt-[200px]"
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="600"
            className="max-w-5xl mx-auto"
          >
            <ProgramStudi fakultas={selectedFakultas} />
          </div>

          <div data-aos="fade-up" data-aos-duration="600" className="mt-16">
            <StrukturOrganisasi fakultas={selectedFakultas} />
          </div>

          <div className="mt-24">
            <KegiatanUnggulan fakultas={selectedFakultas} />
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
