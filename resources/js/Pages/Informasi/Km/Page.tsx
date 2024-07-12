import React from "react";

import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import BadanKM from "@/Components/informasi/Km/BadanKM";
import FilosofiLogoKm from "@/Components/informasi/Km/FilosofiLogoKm";
import KabinetPresma from "@/Components/informasi/Km/KabinetPresma";
import SejarahKM from "@/Components/informasi/Km/SejarahKM";

import awan from "!assets/awan.png";
import gedung from "!assets/gedung-sponsor.png";

const Page = () => {
    return (
        <div>
            <Navbar isSolid={true} isFixed={true} />
            <div className="relative min-h-[150vh] bg-mobile-hero-background bg-cover bg-center md:min-h-screen md:bg-tablet-hero-background lg:bg-desktop-hero-background flex items-center justify-center">
                <div className="flex h-[246px] w-[995px] flex-col items-center justify-center rounded-[20px] bg-white/20 backdrop-blur shadow-2xl">
                    <p className="font-montserrat text-[61px] text-white font-semibold text-center">
                        Keluarga Mahasiswa (KM) <br />
                        Institut Teknologi Sumatera
                    </p>
                </div>
            </div>
            <div className="bg-pattern-white">
                <div className="pt-20 text-center">
                    <p className="font-avigea text-[49px] text-candlelight-950">
                        KELUARGA MAHASISWA <br />
                        INSTITUT TEKNOLOGI SUMATERA <br />
                        (KM ITERA)
                    </p>
                </div>
                <SejarahKM />
                <BadanKM />
                <div className="flex items-center justify-center pt-40">
                    <img src={gedung} alt="" className="w-full" />
                    <img src={awan} alt="" className="absolute w-full" />
                </div>
                <div className="bg-pattern-brown">
                    <div className="pt-20 text-center">
                        <p className="font-avigea text-[49px] text-white pt-40">
                            KABINET BESERTA PRESIDEN <br />
                            MAHASISWA
                        </p>
                    </div>
                    <KabinetPresma />
                    <FilosofiLogoKm />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Page;
