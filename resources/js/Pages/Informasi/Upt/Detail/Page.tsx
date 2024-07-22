import DefaultLayout from "@/Layouts/DefaultLayout";

import React from "react";

import DescriptionHistory from "@/Components/informasi/Upt/DescriptionHistory";
import Header from "@/Components/informasi/Upt/Header";
import KegiatanUnggulan from "@/Components/informasi/Upt/KegiatanUnggulan";
import KepalaUPT from "@/Components/informasi/Upt/KepalaUPT";
import VisiMisi from "@/Components/informasi/Upt/VisiMisi";

import { uptData } from "@/lib/data/upt";

import overlay_box from "!assets/overlay-box.png";
import pillar_brown from "!assets/pillar-brown.png";

function Page({ nama_upt }) {
    const upt = uptData.find((upt) => upt.key === nama_upt);

    if (!upt) {
        return <div>UPT tidak ditemukan</div>;
    }

    return (
        <DefaultLayout>
            <div className="h-screen relative min-h-[40vh] bg-mobile-hero-background bg-cover bg-bottom md:min-h-screen md:bg-desktop-hero-background lg:bg-desktop-hero-background">
                <Header upt="upa-perpustakaan" />
            </div>

            <div className="bg-pattern-white relative z-20 py-20">
                <div className="bg-gradient-to-b from-white/80 to-transparent absolute top-0 left-0 right-0 h-[500px]" />
                <div className="max-w-5xl mx-auto">
                    <div className="md:flex w-full">
                        <DescriptionHistory />
                    </div>

                    <VisiMisi />
                </div>

                <img
                    src={pillar_brown}
                    alt="pillar_brown"
                    className="absolute bottom-0 z-20 w-full"
                />

                <img
                    src={overlay_box}
                    alt="pillar_brown"
                    className="absolute -mt-[50px] w-full lg:-mt-[100px] xl:-mt-[200px] z-20"
                />
            </div>

            <div className="bg-pattern-white relative z-20 py-20">
                <KepalaUPT />
            </div>

            <KegiatanUnggulan upt="fakultas-fti" />
        </DefaultLayout>
    );
}

export default Page;
