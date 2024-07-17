import React from "react";

import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import BadanKM from "@/Components/informasi/Km/BadanKM";
import FilosofiLogoKm from "@/Components/informasi/Km/FilosofiLogoKm";
import KabinetPresma from "@/Components/informasi/Km/KabinetPresma";
import PecahanLogo from "@/Components/informasi/Km/PecahanLogo";
import SejarahKM from "@/Components/informasi/Km/SejarahKM";
import SosmedKM from "@/Components/informasi/Km/SosmedKM";

import awan from "!assets/awan.png";
import gedung from "!assets/gedung-sponsor.png";
import tiang from "!assets/tiang.png";

const Page = () => {
    return (
        <div>
            <Navbar isSolid={true} isFixed={true} />
            <div className="relative lg:min-h-[150vh] min-h-[40vh] bg-mobile-hero-background bg-cover bg-center md:min-h-screen md:bg-tablet-hero-background lg:bg-desktop-hero-background flex items-center justify-center">
                <div className="flex md:h-[246px] md:w-[995px] h-[130px] w-[700px] flex-col items-center justify-center rounded-[20px] bg-white/20 backdrop-blur shadow-2xl mx-2 lg:-mt-96">
                    <p className="font-montserrat text-[20px] md:text-[39px] lg:text-[61px] text-white font-semibold text-center">
                        Keluarga Mahasiswa (KM) <br />
                        Institut Teknologi Sumatera
                    </p>
                </div>
            </div>
            <div className="bg-pattern-white md:-mt-96">
                <div className="pt-20 text-center">
                    <p className="font-avigea text-[49px] text-candlelight-950 md:mt-80">
                        KELUARGA MAHASISWA <br />
                        INSTITUT TEKNOLOGI SUMATERA <br />
                        (KM ITERA)
                    </p>
                </div>
                <SejarahKM />
                <BadanKM />
                <div className="flex h-[240px] md:w-[441px] w-[300px] flex-col rounded-lg bg-white bg-opacity-0"></div>
            </div>

            <div className="flex items-center justify-center -mt-20">
                <img src={gedung} alt="" className="w-full" />
                <img src={awan} alt="" className="absolute w-full" />
            </div>
            <div className="relative bg-pattern-white bg-[#170C0A] px-5">
                <div className="pt-20 text-center">
                    <p className="font-avigea text-[20px] md:text-[39px] lg:text-[61px] text-white pt-40">
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
                <div className="flex h-[240px] md:w-[441px] w-[300px] flex-col rounded-lg bg-white bg-opacity-0"></div>
                <div className="absolute left-0 overflow-hidden bottom-0 xl:h-[70vh] lg:h-[40vh] md:h-[30vh] w-full">
                    <img src={tiang} alt="tiang" className="w-full" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Page;
