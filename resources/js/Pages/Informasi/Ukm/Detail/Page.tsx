import React from "react";
import { ukmData } from "@/lib/data/ukm";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Judul from "@/Components/informasi/Ukm/DetailUkm/Judul";
import { Prestasi } from "@/Components/informasi/Ukm/DetailUkm/Prestasi";
import Sosmed from "@/Components/informasi/Ukm/DetailUkm/Sosmed";

import gedung from "!assets/gedung-sponsor.png";

function Page({nama_ukm}) {

    return (
        
        <div>
            <Navbar isFixed={true} isSolid={true} />
            <div className="relative flex flex-col flex-grow min-h-screen p-5 bg-pattern-white items-center justify-center">
                <div>
                    <Judul />
                    <div className="flex flex-col justify-center items-center my-60 gap-10">
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
}

export default Page;
