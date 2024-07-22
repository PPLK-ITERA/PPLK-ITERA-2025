import DefaultLayout from "@/Layouts/DefaultLayout";

import React from "react";

import Judul from "@/Components/informasi/Ukm/DetailUkm/Judul";
import { Prestasi } from "@/Components/informasi/Ukm/DetailUkm/Prestasi";
import Sosmed from "@/Components/informasi/Ukm/DetailUkm/Sosmed";

import { ukmData } from "@/lib/data/ukm";
import { useAos } from "@/lib/hooks/useAos";

import gedung from "!assets/gedung-sponsor.png";

function Page({ nama_ukm }) {
    useAos();
    const ukm = ukmData.find((ukm) => ukm.key === nama_ukm);

    if (!ukm) {
        return <div>UKM tidak ditemukan</div>;
    }

    return (
        <DefaultLayout isSolid={true}>
            <div className="bg-pattern-white relative flex flex-col items-center justify-center flex-grow min-h-screen p-5">
                <div>
                    <Judul
                        title={ukm.title}
                        sejarah={ukm.sejarah}
                        logo={ukm.logo}
                        fotoPembina={ukm.fotopembina}
                        pembina={ukm.pembina}
                        jabatan={ukm.jabatan}
                        fotoKetum={ukm.fotoketua}
                        ketum={ukm.ketum}
                        prodi={ukm.prodi}
                    />

                    <div className="my-60 flex flex-col items-center justify-center gap-10">
                        <h2
                            data-aos="fade-down"
                            data-aos-duration="1000"
                            className="font-avigea text-moccaccino-600 text-[25px] sm:text-[36px] md:text-[40px]"
                        >
                            Prestasi & Kegiatan
                        </h2>

                        <Prestasi allprestasi={ukm.allprestasi} />

                        <h2
                            data-aos="fade-down"
                            data-aos-duration="1000"
                            className="font-avigea text-moccaccino-600 text-[25px] sm:text-[36px] md:text-[40px] mt-40"
                        >
                            Sosial Media UKM
                        </h2>

                        <Sosmed allsosmed={ukm.allsosmed} />
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <img src={gedung} alt="Gedung" className="w-full" />
                </div>
            </div>
        </DefaultLayout>
    );
}

export default Page;
