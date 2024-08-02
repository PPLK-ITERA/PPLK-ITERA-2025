import React from "react";

import DefaultLayout from "@/Layouts/DefaultLayout";

import Judul from "@/Components/informasi/Ukm/DetailUkm/Judul";
import { Prestasi } from "@/Components/informasi/Ukm/DetailUkm/Prestasi";
import Sosmed from "@/Components/informasi/Ukm/DetailUkm/Sosmed";
import VisiMisi from "@/Components/informasi/Ukm/DetailUkm/VisiMisi";

import { ukmData } from "@/lib/data/ukm";
import { useAos } from "@/lib/hooks/useAos";

import gedung from "!assets/gedung-sponsor.png";
import overlay_box from "!assets/overlay-box.png";
import pillar_brown from "!assets/pillar-brown.png";

function Page({ nama_ukm }) {
    useAos();
    const ukm = ukmData.find((ukm) => ukm.key === nama_ukm);

    if (!ukm) {
        return <div>UKM tidak ditemukan</div>;
    }

    return (
        <DefaultLayout isSolid={true}>
            <div className="bg-pattern-white py-36 lg:pb-64">
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
                            className="font-avigea md:text-4xl z-20 text-2xl text-center text-black"
                        >
                            Prestasi & Kegiatan
                        </h2>

                        <Prestasi allprestasi={ukm.allprestasi} />

                        <div className="md:visible absolute flex flex-col invisible w-full">
                            <img
                                src={pillar_brown}
                                alt="pillar_brown"
                                className="w-full"
                            />

                            <img
                                src={overlay_box}
                                alt="pillar_brown"
                                className="z-20 w-full -mt-[200px]"
                            />
                        </div>
                    </div>

                    <div className="place-content-center place-items-center flex flex-col gap-10">
                        <h2
                            data-aos="fade-down"
                            data-aos-duration="1000"
                            className="font-avigea md:text-4xl z-20 text-2xl text-center text-black"
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
        </DefaultLayout>
    );
}

export default Page;
