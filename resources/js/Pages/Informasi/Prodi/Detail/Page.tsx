import React from "react";

import { Head } from "@inertiajs/react";

import DefaultLayout from "@/Layouts/DefaultLayout";

import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Hmps from "@/Components/fragments/Informasi/Prodi/Hmps";
import Prodi from "@/Components/fragments/Informasi/Prodi/Prodi";

import { programStudies } from "@/lib/data/programStudi";

function Page({ prodi }) {
  const ProgramStudiData = programStudies.find((data) => data.key === prodi);

  if (!ProgramStudiData) {
    return window.location.replace("/informasi/prodi");
  }

  return (
    <>
      <Head title={`Informasi Prodi ${ProgramStudiData.name}`} />

      <DefaultLayout isSolid={true}>
        <div className="font-montserrat min-h-screen overflow-x-hidden">
          <div className="bg-pattern-white relative px-8">
            <Prodi prodi={ProgramStudiData} className="max-w-6xl mx-auto" />
          </div>

          <div className="bg-pattern-black text-gray-200">
            {ProgramStudiData.hmpsImageUrl === "" ||
            ProgramStudiData.kahim === "" ||
            (ProgramStudiData.hmpsInstagramUrl === "" &&
              ProgramStudiData.hmpsYoutubeUrl === "" &&
              ProgramStudiData.hmpsWebsiteUrl === "" &&
              ProgramStudiData.hmpsTiktokUrl === "") ? null : (
              <Hmps prodi={ProgramStudiData} className="mx-auto" />
            )}
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}

export default Page;
