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
        <div className="flex h-full items-center justify-center px-2.5 lg:min-h-screen">
            <div className="flex flex-col rounded-md bg-jaffa-200 md:w-[700px] md:rounded-[24px] lg:h-[750px] lg:w-[900px] xl:h-[700px] xl:w-[1200px]">
                <div className="flex flex-col rounded-md bg-flower-pattern md:h-[350px] md:rounded-[24px] lg:h-[475px]">
                    <div className="flex h-full w-full flex-col items-center justify-center rounded-md bg-gradient-to-r from-jaffa-700/90 to-jaffa-800/90 px-4 md:rounded-[24px] md:px-[10%]">
                        <div className="flex flex-col py-10">
                            <h2 className="w-full text-start font-avigea text-2xl text-white md:text-5xl lg:text-6xl">
                                Tahukah Kamu?
                            </h2>

                            <p className="text-16px mt-5 w-full font-montserrat font-normal text-white/80 md:text-xl lg:max-w-[80%]">
                                ITERA disahkan pada 06 oktober 2014 oleh Susilo
                                Bambang Yudhoyono
                            </p>

                            <p className="mt-10 font-montserrat text-[16px] font-normal text-white/80 lg:max-w-[80%]">
                                (Presiden RI Periode 2004-2014)
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-5 flex w-full flex-col items-center px-8 pb-10 md:flex-row lg:mt-16 lg:px-20 lg:pb-0 xl:pb-0">
                    <p className="w-full font-semibold md:w-1/4 md:text-[20px] lg:w-1/3 lg:text-2xl">
                        Mengenal <span className="font-bold">ITERA</span>{" "}
                        <br className="hidden md:block" /> Lebih Dalam
                    </p>

                    <div className="mt-5 flex w-full flex-wrap gap-3 md:mt-0 md:w-3/4 lg:w-2/3">
                        {Informasi.map((info, index) => (
                            <Link
                                key={index}
                                href={info.href}
                                className="rounded-lg bg-gradient-to-t from-[#A6680C] to-[#B9822F] px-4 py-[10px] font-montserrat text-[12px] font-semibold uppercase text-white shadow-sm md:text-[14px]"
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
