import React from "react";

import { Link } from "@inertiajs/react";

import MaxWidthWrapper from "@/Components/MaxWidthWrapper";

import { FooterLink, InformasiFooter } from "@/lib/data/data";

import logodiesnat_white from "!assets/logo-diesnat-white.png";
import logokm_white from "!assets/logo-km-white.png";
import logopplk_white from "!assets/logo-pplk-20204-white.png";
import logopplkfooter from "!assets/logo-pplk-footer.png";

export default function Footer() {
    return (
        <div className="bg-gradient-to-r from-jaffa-700 to-jaffa-800 relative py-10 overflow-hidden">
            <MaxWidthWrapper>
                <div className="md:flex-row md:items-center z-10 flex flex-col items-start justify-between">
                    <div className="text-white">
                        <div className="flex items-center justify-center">
                            <img
                                src={logodiesnat_white}
                                alt="logopplk_white"
                                className="xl:w-48 xl:h-32 md:w-40 md:h-28 h-16 w-[125px] -mt-2 lg:-mt-0 object-contain"
                            />

                            <img
                                src={logokm_white}
                                alt="logopplk_white"
                                className="xl:w-32 xl:h-24 md:w-28 md:h-20 md:-ml-5 h-14 object-contain w-20"
                            />

                            <img
                                src={logopplk_white}
                                alt="logopplk_white"
                                className="md:-ml-5 md:w-[110px] md:-mt-1 lg:-mt-0 md:h-[108px] lg:w-32 lg:h-32 object-contain w-20 h-20"
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
