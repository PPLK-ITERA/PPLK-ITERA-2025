import React from "react";

import { Link } from "@inertiajs/react";

import MaxWidthWrapper from "@/Components/MaxWidthWrapper";

import logopplk_white from "!assets/logo-pplk-20204-white.png";

const InformasiFooter = [
    { title: "Tentang PPLK 2024", href: "/about-pplk" },
    { title: "Informasi Fakultas", href: "/informasi-fakultas" },
    { title: "Informasi HMPS & PRODI", href: "/informasi-hmps-prodi" },
    { title: "Informasi UPT", href: "/informasi-upt" },
    { title: "Informasi KM ITERA", href: "/informasi-km" },
    { title: "Informasi SENAT ITERA", href: "/informasi-senat" },
    { title: "Informasi UKM ITERA", href: "/informasi-ukm" },
];

const FooterLink = [
    { title: "Instagram", href: "https://instagram.com/pplk.itera" },
    { title: "Twitter", href: "https://twitter.com/pplkitera" },
    { title: "Youtube", href: "https://youtube.com/pplkitera" },
];

export default function Footer() {
    return (
        <div className="bg-gradient-to-r from-jaffa-700 to-jaffa-800 py-10">
            <MaxWidthWrapper>
                <div className="md:flex-row md:items-center flex flex-col items-start justify-between">
                    <div className="text-white">
                        <img
                            src={logopplk_white}
                            alt="logopplk_white"
                            className="w-32 h-32 -ml-5"
                        />

                        <h3 className="font-fesbud md:text-[20px] lg:text-[28px]">
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

                    <div className="md:mt-0 md:flex-row md:gap-10 flex flex-col gap-5 mt-10">
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
                                        className="font-montserrat font-light uppercase text-white transition duration-300 ease-in-out hover:text-white/80 md:text-[12px] lg:text-[16px]"
                                    >
                                        {info.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 font-montserrat text-[12px] font-light text-white md:text-sm lg:text-lg">
                    <p className="text-end">&copy; Copyright IMTEK PPLK 2024</p>
                </div>
            </MaxWidthWrapper>
        </div>
    );
}
