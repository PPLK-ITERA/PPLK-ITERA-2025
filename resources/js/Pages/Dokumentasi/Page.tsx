import React, { useEffect, useRef, useState } from "react";
import { Head } from "@inertiajs/react";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { useAos } from "@/lib/hooks/useAos";
import bg_1 from "!assets/dokumentasi/bg-1.png";
import bg_2 from "!assets/dokumentasi/bg-2.png";
import bg_3 from "!assets/dokumentasi/bg-3.png";
import DokumentasiBottom from "@/Components/dokumentasi/dokumentasiBottom";
import CarauselDokumentasi from "@/Components/dokumentasi/carauselDokumentasi";
import PplkDokumtasi from "@/Components/dokumentasi/pplkDokumentasi";

function Page() {
    useAos();
    const [showMore, setShowMore] = useState(false);

    const handleLoadMore = () => {
        setShowMore(true);
    };

    return (
        <>
            <Head title="Tentang" />
            <div className="bg-pattern-white min-h-screen overflow-hidden">
                <DefaultLayout>

                    <div className="relative w-full min-h-[13rem] md:min-h-[30rem]">
                        {/* Background Image */}
                        <img
                            src={bg_1}
                            alt="Gambar 1"
                            className="absolute top-0 left-0 w-full h-full object-cover"
                        />

                        {/* Konten di tengah */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center mt-32 ">
                            <div className="text-[#933100] font-greek text-3xl md:text-5xl">
                                DOKUMENTASI PPLK-ITERA
                            </div>
                            <div className="text-[#933100] md:text-2xl mt-2">
                                Pengabadian momen acara PPLK-ITERA selama berlangsung
                            </div>
                        </div>
                    </div>

                    <CarauselDokumentasi />

                    {!showMore && (
                        <div className="relative max-w-6xl mx-auto min-h-[13rem] md:min-h-[40rem] my-20">
                            {/* Background Image */}
                            <img
                                src={bg_2}
                                alt="Gambar 1"
                                className="absolute top-0 left-0 w-full h-full object-contain rounded"
                            />

                            {/* Konten di tengah */}
                            <div className="absolute inset-0 flex gap-y-5 flex-col items-center justify-center z-10 text-center">
                                <div className="text-[#933100] font-greek text-2xl md:text-5xl">
                                    MAU LIAT SELEBIHNYA ?
                                </div>
                                <button
                                    onClick={handleLoadMore}
                                    className="bg-gradient-to-br from-[#BE3F00] to-[#581D00] rounded text-white text-sm md:text-xl font-semibold p-2 md:py-3 md:px-4"
                                >
                                    Load More
                                </button>
                            </div>
                        </div>
                    )}

                    {showMore && <PplkDokumtasi />}

                    <img src={bg_3} alt="w-full my-20" />

                    <DokumentasiBottom />

                </DefaultLayout>
            </div>
        </>
    );
}

export default Page;