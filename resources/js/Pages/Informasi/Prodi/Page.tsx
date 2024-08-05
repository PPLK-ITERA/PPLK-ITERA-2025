import React, { useEffect, useState } from "react";

import { Head, Link } from "@inertiajs/react";

import DefaultLayout from "@/Layouts/DefaultLayout";

import PaginationFAQ from "@/Components/PaginationFAQ";
import Header from "@/Components/informasi/prodi/Header";
import { Button } from "@/Components/ui/button";
import { Card } from "@/Components/ui/card";

import { FAKULTAS_DATA } from "@/lib/data/fakultas";
import { programStudies } from "@/lib/data/programStudi";
import { useAos } from "@/lib/hooks/useAos";

import fakultasSains from "!assets/fakultas-sains.png";
import fakultasTeknologiIndustri from "!assets/fakultas-teknologi-industri.png";
import fakultasTeknologiInfrastruktur from "!assets/fakultas-teknologi-infrastruktur-dan-kewilayahan.png";
import patternBrown from "!assets/pattern-brown.png";

export default function Page() {
    useAos();
    const itemsPerPage = 8;

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [selectedFakultas, setSelectedFakultas] = React.useState(
        localStorage.getItem("selectedFakultas") || "fakultas-sains",
    );

    const currentDataProdiKeys = FAKULTAS_DATA[selectedFakultas].key_prodi;

    const matchedPrograms = programStudies.filter((program) =>
        currentDataProdiKeys.includes(program.key),
    );

    const totalPages = Math.ceil(matchedPrograms.length / itemsPerPage);

    const [displayedItems, setDisplayedItems] = useState(
        matchedPrograms.slice(0, itemsPerPage),
    );

    function updateDisplayedItems() {
        setDisplayedItems(
            matchedPrograms.slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage,
            ),
        );
    }

    useEffect(() => {
        setCurrentPage(1);
        updateDisplayedItems();
    }, [selectedFakultas]);

    useEffect(() => {
        localStorage.setItem("selectedFakultas", selectedFakultas);
        updateDisplayedItems();
    }, [selectedFakultas, currentPage]);

    return (
        <div>
            <Head title="Informasi Prodi" />

            <DefaultLayout>
                <div className="h-screen relative min-h-[40vh] bg-mobile-hero-background bg-cover bg-bottom md:h-full lg:h-screen md:bg-desktop-hero-background lg:bg-desktop-hero-background">
                    <Header fakultas={selectedFakultas} />

                    <div className="bottom-20 md:bottom-0 absolute z-10 w-full">
                        <div className="md:max-w-3xl flex justify-between max-w-sm gap-3 mx-auto">
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
                                onClick={() =>
                                    setSelectedFakultas("fakultas-ftik")
                                }
                            >
                                <img
                                    src={fakultasTeknologiInfrastruktur}
                                    alt="fakultasTeknologiInfrastruktur"
                                    className="md:w-[15vh] grayscale filter w-16"
                                />
                            </button>
                            <button
                                className={`${selectedFakultas == "fakultas-fti" ? "bg-jaffa-700" : "bg-jaffa-200"}  hover:bg-jaffa-700 rounded-xl md:py-4 md:px-20 flex items-center justify-center px-8 py-4 shadow-lg transition-all duration-300 ease-in-out`}
                                onClick={() =>
                                    setSelectedFakultas("fakultas-fti")
                                }
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
                    <div className="place-content-center flex flex-wrap w-full max-w-6xl gap-8 mx-auto">
                        {displayedItems.map((prodi, index) => (
                            <Card
                                key={index}
                                className="w-64 h-48 overflow-hidden rounded-sm"
                            >
                                <div className="place-content-center place-items-center flex flex-col">
                                    <div className="group relative w-full h-32 overflow-hidden">
                                        <img
                                            className="object-cover w-full"
                                            src={patternBrown}
                                            alt=""
                                        />

                                        <div className="top-1/2 left-1/2 absolute w-24 h-24 p-1 mx-auto overflow-hidden -translate-x-1/2 -translate-y-1/2 bg-white rounded-full">
                                            <img
                                                src={
                                                    prodi.imageUrl ||
                                                    "https://img.freepik.com/free-vector/white-abstract-background_23-2148810353.jpg"
                                                }
                                                alt="Prodi"
                                                className="object-cover w-full h-full"
                                                data-aos="fade-in"
                                                data-aos-duration="1000"
                                            />
                                        </div>

                                        {/* detail on hover */}
                                        <div className="group-hover:opacity-100 bg-white/30 backdrop-blur place-content-center place-items-center absolute top-0 left-0 flex flex-col justify-between w-full h-full p-2 text-sm transition duration-200 ease-in-out opacity-0">
                                            <p className="font-montserrat font-semibold text-black">
                                                {prodi.name}
                                            </p>

                                            <Link
                                                href={`/informasi/prodi/${prodi.key}`}
                                            >
                                                <Button
                                                    className="bg-jaffa-950 hover:bg-jaffa-950/90 text-white transition-all duration-200 ease-in-out rounded-sm"
                                                    size={"sm"}
                                                >
                                                    Selengkapnya
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                    <p className="h-full p-2 font-semibold text-center">
                                        {prodi.name}
                                    </p>
                                </div>
                            </Card>
                        ))}
                    </div>

                    <PaginationFAQ
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </DefaultLayout>
        </div>
    );
}
