import React from "react";

import Footer from "@/Components/Footer";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
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

export default function Page() {
    return (
        <div>
            <Navbar isFixed={true} />

            <div className="h-screen relative min-h-[40vh] bg-mobile-hero-background bg-cover bg-bottom md:min-h-screen md:bg-desktop-hero-background lg:bg-desktop-hero-background flex items-center justify-center md:justify-start">
                <MaxWidthWrapper>
                    {/* <div className="flex md:h-[246px] md:w-[995px] h-[130px] w-[700px] flex-col items-center justify-center rounded-[20px] bg-white/20 backdrop-blur shadow-2xl mx-2">
                    <h1 className="font-montserrat text-[20px] md:text-[39px] lg:text-[61px] text-white font-semibold text-center">
                        Keluarga Mahasiswa (KM) <br />
                        Institut Teknologi Sumatera
                    </h1>
                </div> */}

                    <div className="h-screen px-2.5 py-[96px] md:py-[80px] lg:py-[120px] xl:py-[160px] text-center md:text-start">
                        <p className="text-[20px] font-semibold text-jaffa-100/80 md:text-[29.5px]">
                            Informasi
                        </p>

                        <h1 className="text-jaffa-100 md:leading-10 md:items-start flex flex-col items-center justify-center mt-8 leading-7">
                            <span className="font-avigea text-[40px] md:text-[72px]">
                                Keluarga Mahasiswa
                            </span>
                            <br />
                            <span className="font-avigea text-[64px] md:text-[72px]">
                                (KM ITERA)
                            </span>
                        </h1>

                        <p className="mt-10 leading-5 tracking-widest text-jaffa-100 md:tracking-[0.1em]">
                            <span className="text-[18px] md:text-[25px]">
                                Wadah Tertinggi
                                <br />
                                Organisasi Kemahasiswaan
                            </span>
                            <br />
                            <br />
                            <span className="text-[18px] md:text-[25px]">
                                Institut Teknologi Sumatera
                            </span>
                        </p>
                    </div>
                </MaxWidthWrapper>

                <img
                    src={awan}
                    alt="awan"
                    className="md:visible mt-[600px] absolute z-40 invisible w-full bg-cover"
                    data-aos="fade-in"
                    data-duration="3000"
                />
            </div>

            <div className="bg-pattern-white md:pt-32 relative flex flex-col pt-20">
                <h2 className="font-avigea text-candlelight-950 md:text-5xl z-40 text-3xl text-center">
                    KELUARGA MAHASISWA <br />
                    INSTITUT TEKNOLOGI SUMATERA <br />
                    (KM ITERA)
                </h2>

                <div className="bg-gradient-to-b from-white/80 to-transparent absolute top-0 z-0 left-0 right-0 h-[500px]" />

                <SejarahKM />

                <BadanKM />

                <div className="flex h-[240px] md:w-[441px] w-[300px] flex-col rounded-lg bg-white bg-opacity-0"></div>
            </div>

            <div className="flex items-center justify-center -mt-20">
                <img src={gedung} alt="gedung" className="w-full" />
                <img src={awan} alt="awan" className="absolute w-full" />
            </div>

            <div className="relative bg-pattern-white bg-[#170C0A] px-5">
                <div className="md:pt-20 pt-10 text-center">
                    <h2 className="font-avigea md:text-5xl z-40 text-3xl text-center text-white">
                        KABINET BESERTA PRESIDEN <br />
                        MAHASISWA
                    </h2>
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
}
