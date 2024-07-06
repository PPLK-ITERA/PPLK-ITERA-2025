import React from "react";
import logopplk_white from "../../../public/assets/logo-pplk-20204-white.png";
import { Link } from "@inertiajs/react";
import MaxWidthWrapper from "./MaxWidthWrapper";

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
                <div className="flex items-center justify-between">
                    <div className="text-white">
                        <img
                            src={logopplk_white}
                            alt="logopplk_white"
                            className="h-32 w-32"
                        />

                        <h3 className="font-fesbud text-[28px]">
                            PPLK ITERA 2024
                        </h3>

                        <p className="mt-5 leading-5 tracking-wide text-jaffa-100">
                            <span className="text-[20px]">
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

                    <div className="flex gap-10">
                        {/* Informasi */}
                        <div className="flex flex-col">
                            <h3 className="text-xl font-semibold text-white">
                                Informasi
                            </h3>

                            <div className="mt-2 flex flex-col">
                                {InformasiFooter.map((info, index) => (
                                    <Link
                                        key={index}
                                        href={info.href}
                                        className="font-montserrat text-[16px] font-light uppercase text-white transition duration-300 ease-in-out hover:text-white/80"
                                    >
                                        {info.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Temukan Kami di */}
                        <div className="flex flex-col">
                            <h3 className="text-xl font-semibold text-white">
                                Temukan Kami di
                            </h3>

                            <div className="mt-2 flex flex-col">
                                {FooterLink.map((info, index) => (
                                    <Link
                                        key={index}
                                        href={info.href}
                                        className="font-montserrat text-[16px] font-light uppercase text-white transition duration-300 ease-in-out hover:text-white/80"
                                    >
                                        {info.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 font-montserrat text-lg font-light text-white">
                    <p className="text-end">&copy; Copyright IMTEK PPLK 2024</p>
                </div>
            </MaxWidthWrapper>
        </div>
    );
}
