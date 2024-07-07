import React from "react";
import { Link } from "@inertiajs/react";

const Informasi = [
    { title: "Informasi Fakultas", href: "/informasi-fakultas" },
    { title: "Informasi HMPS & PRODI", href: "/informasi-hmps-prodi" },
    { title: "Informasi UPT", href: "/informasi-upt" },
    { title: "Informasi KM ITERA", href: "/informasi-km" },
    { title: "Informasi SENAT ITERA", href: "/informasi-senat" },
    { title: "Informasi UKM ITERA", href: "/informasi-ukm" },
];

export default function InfoSection() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="flex flex-col rounded-[24px] bg-jaffa-200 md:w-[700px] lg:h-[600px] lg:w-[900px] xl:h-[700px] xl:w-[1200px]">
                <div className="flex flex-col rounded-[24px] bg-flower-pattern md:h-[350px] lg:h-[475px]">
                    <div className="flex h-full w-full flex-col items-center justify-center rounded-[24px] bg-gradient-to-r from-jaffa-700/90 to-jaffa-800/90 px-[10%]">
                        <div className="flex flex-col">
                            <h2 className="w-full text-start font-avigea text-white md:text-5xl lg:text-6xl">
                                Tahukah Kamu?
                            </h2>

                            <p className="mt-5 font-montserrat text-xl font-normal text-white/80 lg:max-w-[80%]">
                                ITERA disahkan pada 06 oktober 2014 oleh Susilo
                                Bambang Yudhoyono
                            </p>

                            <p className="mt-10 font-montserrat text-lg font-normal text-white/80 lg:max-w-[80%]">
                                (Presiden RI Periode 2004-2014)
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-5 flex w-full items-center px-8 pb-10 lg:mt-16 lg:px-20 lg:pb-0 xl:pb-0">
                    <p className="w-1/4 font-semibold md:text-[20px] lg:w-1/3 lg:text-2xl">
                        Mengenal <span className="font-bold">ITERA</span> <br />{" "}
                        Lebih Dalam
                    </p>

                    <div className="flex w-3/4 flex-wrap gap-3 lg:w-2/3">
                        {Informasi.map((info, index) => (
                            <Link
                                key={index}
                                href={info.href}
                                className="rounded-lg bg-gradient-to-t from-[#A6680C] to-[#B9822F] px-4 py-[10px] font-montserrat text-[16px] font-semibold uppercase text-white shadow-sm md:text-[14px]"
                            >
                                {info.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
