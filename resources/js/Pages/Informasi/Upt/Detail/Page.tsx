import DefaultLayout from "@/Layouts/DefaultLayout";

import React from "react";

import { router } from "@inertiajs/react";

import DescriptionHistory from "@/Components/informasi/Upt/DescriptionHistory";
import Header from "@/Components/informasi/Upt/Header";
import KegiatanUnggulan from "@/Components/informasi/Upt/KegiatanUnggulan";
import KepalaUPT from "@/Components/informasi/Upt/KepalaUPT";
import VisiMisi from "@/Components/informasi/Upt/VisiMisi";

import { DetailUPTData } from "@/lib/data/upt";

import overlay_box from "!assets/overlay-box.png";
import pillar_brown from "!assets/pillar-brown.png";

function Page({ nama_upt }) {
    const upt = DetailUPTData.find((upt) => upt.key === nama_upt);

    if (!upt) {
        router.replace(route("informasi/upt"));
    }

    return (
        <DefaultLayout>
            <div className="h-screen relative min-h-[40vh] bg-mobile-hero-background bg-cover bg-bottom md:min-h-screen md:bg-desktop-hero-background lg:bg-desktop-hero-background">
                <Header
                    upt="upa-perpustakaan"
                    title={upt?.title}
                    desription={upt?.description}
                />
            </div>

            <div className="bg-pattern-white relative z-20 py-20">
                <div className="bg-gradient-to-b hidden md:block from-white/80 to-transparent absolute top-0 left-0 right-0 h-[500px]" />
                <div className="max-w-5xl mx-auto">
                    <div className="md:flex w-full">
                        <DescriptionHistory
                            description={upt?.description}
                            history={upt?.history}
                        />
                    </div>

                    <VisiMisi visi={upt?.visi} misi={upt!.misi} />
                </div>

                <img
                    src={pillar_brown}
                    alt="pillar_brown"
                    className="lg:visible absolute bottom-0 z-20 invisible w-full"
                />

                <img
                    src={overlay_box}
                    alt="pillar_brown"
                    className="absolute -mt-[50px] w-full lg:-mt-[100px] xl:-mt-[200px] z-20 invisible lg:visible"
                />
            </div>

            <div className="bg-pattern-white relative z-20 py-20">
                <KepalaUPT
                    nama_upt={upt?.title}
                    nama_kepala_upt={upt?.kepalaUpt.nama}
                    jabatan={upt?.kepalaUpt.jabatan}
                    nip={upt?.kepalaUpt.nip}
                    foto_kepala_upt={upt?.kepalaUpt.foto}
                />
            </div>

            <KegiatanUnggulan upt="fakultas-fti" />
        </DefaultLayout>
    );
}

export default Page;
