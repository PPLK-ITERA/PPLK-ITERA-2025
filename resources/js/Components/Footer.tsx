import React from "react";

import { Link } from "@inertiajs/react";

import MaxWidthWrapper from "@/Components/MaxWidthWrapper";

import { FooterLink, InformasiFooter } from "@/lib/data/data";

import logopplkfooter from "!assets/logo-pplk-footer.png";
import dieswarna from "!assets/logofooter/dieswarna.png";
import iterawarna from "!assets/logofooter/iterawarna.png";
import kmwarna from "!assets/logofooter/kmwarna.png";
import pplkwarna from "!assets/logofooter/pplkwarna.png";

export default function Footer() {
    return (
        <div className="bg-gradient-to-r from-jaffa-700 to-jaffa-800 relative py-10 overflow-hidden">
            <MaxWidthWrapper>
                <div className="md:flex-row md:items-center z-10 flex flex-col items-start justify-between">
                    <div className="text-white">
                        <div className="md:pl-6 md:-ml-1 flex items-center justify-center pl-2 pr-1 -ml-2 bg-white rounded-full">
                            <img
                                src={iterawarna}
                                alt="logopplk_white"
                                className="md:-ml-5 xl:h-14 xl:w-20 h-14 object-contain w-12"
                            />
                            <img
                                src={dieswarna}
                                alt="logopplk_white"
                                className="lg:h-16 lg:w-[125px] xl:-mt-0 object-contain w-[90px] h-16"
                            />
                            <img
                                src={kmwarna}
                                alt="logopplk_white"
                                className="xl:h-14 xl:w-20 object-contain w-12 h-10"
                            />

                            <img
                                src={pplkwarna}
                                alt="logopplk_white"
                                className="xl:w-20 xl:h-16 xl:-ml-5 h-14 object-contain w-16 -ml-2"
                            />
                        </div>

                        <h3 className="font-fesbud md:text-[20px] mt-5 lg:text-[28px]">
                            PPLK ITERA 2024
                        </h3>

                        <p className="text-jaffa-100 mt-5 leading-5 tracking-wide">
                            <span className="text-[16px] lg:text-[20px]">
                                Program Pengenalan
                                <br />
                                Lingkungan Kampus
                            </span>
                            <br />
                            <span className="text-[15px]">
                                Institut Teknologi Sumatera
                            </span>
                        </p>
                    </div>

                    <div className="md:mt-0 md:flex-row md:gap-10 z-10 flex flex-col gap-5 mt-10">
                        {/* Informasi */}
                        <div className="flex flex-col">
                            <h3 className="font-semibold text-white md:text-[16px] lg:text-xl">
                                Informasi
                            </h3>

                            <div className="flex flex-col mt-2">
                                {InformasiFooter.map((info, index) => (
                                    <Link
                                        key={index}
                                        href={info.href}
                                        className="font-montserrat text-[12px] font-light uppercase text-white transition duration-300 ease-in-out hover:text-white/80 md:text-[12px] lg:text-[16px]"
                                    >
                                        {info.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Temukan Kami di */}
                        <div className="flex flex-col">
                            <h3 className="font-semibold text-white md:text-[16px] lg:text-xl">
                                Temukan Kami di
                            </h3>

                            <div className="flex flex-col mt-2">
                                {FooterLink.map((info, index) => (
                                    <Link
                                        key={index}
                                        href={info.href}
                                        className="font-montserrat text-[12px] font-light uppercase text-white transition duration-300 ease-in-out hover:text-white/80 md:text-[12px] lg:text-[16px]"
                                    >
                                        {info.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 font-montserrat flex justify-end text-[12px] font-light text-white md:text-sm lg:text-lg">
                    <p className="text-end z-20">
                        &copy; Copyright IMTEK PPLK 2024
                    </p>
                </div>
            </MaxWidthWrapper>

            <img
                src={logopplkfooter}
                alt="logopplk"
                className="mix-blend-multiply absolute bottom-0 right-0 md:w-[300px] lg:w-[400px] h-[40%] md:h-[90%] lg:h-full visible"
            />
        </div>
    );
}
