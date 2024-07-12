import React from "react";

import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import BadanKM from "@/Components/informasi/Km/BadanKM";
import FilosofiLogoKm from "@/Components/informasi/Km/FilosofiLogoKm";
import KabinetPresma from "@/Components/informasi/Km/KabinetPresma";
import SejarahKM from "@/Components/informasi/Km/SejarahKM";
import PecahanLogo from "@/Components/informasi/Km/PecahanLogo";
import SosmedKM from "@/Components/informasi/Km/SosmedKM";

import awan from "!assets/awan.png";
import gedung from "!assets/gedung-sponsor.png";
import tiang from '!assets/tiang.png'

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
                    <p className="font-avigea text-[49px] text-candlelight-950 md:text-[29px]">
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
                <div className="bg-pattern-white bg-[#170C0A]">
                    <div className="pt-20 text-center">
                        <p className="font-avigea text-[49px] text-white pt-40">
                            KABINET BESERTA PRESIDEN <br />
                            MAHASISWA
                        </p>
                    </div>
                    <KabinetPresma />
                    <FilosofiLogoKm />
                    <PecahanLogo />
                    <h2 className="text-white font-montserrat text-center text-[25px] mt-10">
                        Pecahan Logo <br />
                        KM ITERA
                    </h2>
                    <SosmedKM />
                    <div className="relative overflow-hidden -mt-96" style={{ height: '70vh' }}>
                        <img src={tiang} alt="tiang" className="w-full" />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Page;