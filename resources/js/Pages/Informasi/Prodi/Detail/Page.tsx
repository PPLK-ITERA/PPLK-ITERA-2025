import React from "react";

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
        <div className="font-montserrat min-h-screen overflow-x-hidden">
            <Navbar isSolid={true} isFixed={true} />

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

            <Footer />
        </div>
    );
}

export default Page;
