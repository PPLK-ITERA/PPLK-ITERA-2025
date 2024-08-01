import React from "react";

import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Judul from "@/Components/informasi/Ukm/DetailUkm/Judul";
import { Prestasi } from "@/Components/informasi/Ukm/DetailUkm/Prestasi";
import Sosmed from "@/Components/informasi/Ukm/DetailUkm/Sosmed";
import VisiMisi from "@/Components/informasi/Ukm/DetailUkm/VisiMisi";

import { ukmDataArip } from "@/lib/data/ukm";
import { useAos } from "@/lib/hooks/useAos";

import gedung from "!assets/gedung-sponsor.png";

function Page({ nama_ukm }) {
    useAos();
    const ukm = ukmDataArip.find((ukm) => ukm.key === nama_ukm);

    if (!ukm) {
        return <div>UKM tidak ditemukan</div>;
    }

    return (
        <div>
            <Navbar isFixed={true} isSolid={true} />
            <div className="bg-pattern-white py-36 pb-64">
                <div className="max-w-7xl gap-36 flex flex-col px-4 mx-auto">
                    <Judul
                        title={ukm.title}
                        sejarah={ukm.sejarah}
                        logo={ukm.logo}
                    />

                    <VisiMisi
                        ketum={ukm.ketum}
                        prodi={ukm.prodi}
                        visi={ukm.visi}
                        misi={ukm.misi}
                    />

                    <div className="place-items-center flex flex-col gap-10">
                        <h2
                            data-aos="fade-down"
                            data-aos-duration="1000"
                            className="font-avigea text-moccaccino-600 md:text-4xl text-2xl text-center"
                        >
                            Prestasi & Kegiatan
                        </h2>

                        <Prestasi allprestasi={ukm.allprestasi} />
                    </div>

                    <div className="place-content-center place-items-center flex flex-col gap-10">
                        <h2
                            data-aos="fade-down"
                            data-aos-duration="1000"
                            className="font-avigea text-moccaccino-600 md:text-4xl text-2xl text-center"
                        >
                            Sosial Media UKM
                        </h2>
                        <Sosmed allsosmed={ukm.allsosmed} />
                    </div>
                </div>
            </div>

            <div className="relative w-full">
                <img
                    src={gedung}
                    alt="Gedung"
                    className="absolute bottom-0 left-0 object-cover w-full"
                />
            </div>
            <Footer />
        </div>
    );
}

export default Page;
