import { ukmData } from "@/lib/data/ukm";

import React from "react";

import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Judul from "@/Components/informasi/Ukm/DetailUkm/Judul";
import { Prestasi } from "@/Components/informasi/Ukm/DetailUkm/Prestasi";
import Sosmed from "@/Components/informasi/Ukm/DetailUkm/Sosmed";

import gedung from "!assets/gedung-sponsor.png";

function Page({ nama_ukm }) {
    ukmData.forEach((ukm) => {
        if (ukm.key === nama_ukm) {
            return (
                <div>
                    <Navbar isFixed={true} isSolid={true} />
                    <div className="bg-pattern-white relative flex flex-col items-center justify-center flex-grow min-h-screen p-5">
                        <div>
                            <Judul />
                            <div className="my-60 flex flex-col items-center justify-center gap-10">
                                <h2 className="font-avigea text-moccaccino-600 text-[40px]">
                                    Prestasi & Kegiatan
                                </h2>
                                <Prestasi />

                                <h2 className="font-avigea text-moccaccino-600 text-[40px] mt-40">
                                    Sosial Media UKM
                                </h2>
                                <Sosmed />
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0">
                            <img src={gedung} alt="Gedung" className="w-full" />
                        </div>
                    </div>
                    <Footer />
                </div>
            );
        } else {
            return null;
        }
    });
}

export default Page;
