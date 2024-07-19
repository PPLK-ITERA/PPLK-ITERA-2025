import DefaultLayout from "@/Layouts/DefaultLayout";

import React, { useEffect } from "react";

import Hero from "@/Components/informasi/Fakultas/Hero";
import KegiatanUnggulan from "@/Components/informasi/Fakultas/KegiatanUnggulan";
import ProgramStudi from "@/Components/informasi/Fakultas/ProgramStudi";
import StrukturOrganisasi from "@/Components/informasi/Fakultas/StrukturOrganisasi";
import Header from "@/Components/informasi/prodi/Header";
import { Button } from "@/Components/ui/button";
import { Card } from "@/Components/ui/card";

import { DataProdiFakultas, VisiMisiFakultas } from "@/constants/fakultas";

import fakultasSains from "!assets/fakultas-sains.png";
import fakultasTeknologiIndustri from "!assets/fakultas-teknologi-industri.png";
import fakultasTeknologiInfrastruktur from "!assets/fakultas-teknologi-infrastruktur-dan-kewilayahan.png";
import patternBrown from "!assets/pattern-brown.png";

export default function Page() {
    const [selectedFakultas, setSelectedFakultas] = React.useState(
        localStorage.getItem("selectedFakultas") || "fakultas-sains",
    );

    useEffect(() => {
        localStorage.setItem("selectedFakultas", selectedFakultas);
    }, [selectedFakultas]);

    return (
        <DefaultLayout>
            <div className="h-screen relative min-h-[40vh] bg-mobile-hero-background bg-cover bg-bottom md:min-h-screen md:bg-desktop-hero-background lg:bg-desktop-hero-background">
                <Header fakultas={selectedFakultas} />

                <div className="absolute bottom-0 z-10 w-full">
                    <div className="md:max-w-3xl md:mx-auto flex justify-between gap-3">
                        <button
                            className={`${selectedFakultas == "fakultas-sains" ? "bg-jaffa-700" : "bg-jaffa-200"} hover:bg-jaffa-700 rounded-xl md:py-4 md:px-20 flex items-center justify-center px-8 py-4 shadow-lg transition-all duration-300 ease-in-out`}
                            onClick={() =>
                                setSelectedFakultas("fakultas-sains")
                            }
                        >
                            <img
                                src={fakultasSains}
                                alt="fakultasSains"
                                className="md:w-[10vh] grayscale filter w-12"
                            />
                        </button>
                        <button
                            className={`${selectedFakultas == "fakultas-ftik" ? "bg-jaffa-700" : "bg-jaffa-200"} hover:bg-jaffa-700 rounded-xl md:py-4 md:px-20 flex items-center justify-center px-4 shadow-lg transition-all duration-300 ease-in-out`}
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

            <div className="bg-pattern-white py-16">
                <div className="max-w-6xl w-full mx-auto flex flex-wrap place-content-center gap-8">
                    {DataProdiFakultas[selectedFakultas].map((prodi, index) => (
                        <Card className="w-64 h-48 rounded-sm overflow-hidden">
                            <div className="flex flex-col place-content-center place-items-center">
                                <div className="h-32 relative overflow-hidden group w-full">
                                    <img
                                        className="w-full object-cover"
                                        src={patternBrown}
                                        alt=""
                                    />
                                    <div className="absolute p-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto h-2/3 bg-white rounded-full">
                                        <img
                                            src="https://gcdnb.pbrd.co/images/QfWO8MCZ1xmx.png?o=1"
                                            alt="Prodi"
                                            className="h-full"
                                            data-aos="fade-in"
                                            data-aos-duration="1000"
                                        />
                                    </div>
                                    <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition bg-white/50 grid place-content-center">
                                        <a
                                            href={route(
                                                "informasi/prodi/detail",
                                            )}
                                        >
                                            <Button>Selengkapnya</Button>
                                        </a>
                                    </div>
                                </div>
                                <p className="text-center font-semibold p-2 h-full">
                                    {prodi}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </DefaultLayout>
    );
}
