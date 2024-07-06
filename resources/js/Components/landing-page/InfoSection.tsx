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
            <div className="flex h-[770px] w-[1200px] flex-col rounded-[24px] bg-jaffa-200">
                <div className="flex h-[475px] flex-col rounded-[24px] bg-flower-pattern">
                    <div className="flex h-full w-full flex-col items-center justify-center rounded-[24px] bg-gradient-to-r from-jaffa-700/90 to-jaffa-800/90 px-[10%]">
                        <div className="flex flex-col">
                            <h2 className="w-full text-start font-avigea text-6xl text-white">
                                Tahukah Kamu?
                            </h2>

                            <p className="mt-5 max-w-[80%] font-montserrat text-3xl font-normal text-white/80">
                                ITERA disahkan pada 06 oktober 2014 oleh Susilo
                                Bambang Yudhoyono
                            </p>

                            <p className="mt-10 max-w-[80%] font-montserrat text-xl font-normal text-white/80">
                                (Presiden RI Periode 2004-2014)
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 flex w-full items-center px-20">
                    <p className="w-1/3 text-2xl font-semibold">
                        Mengenal <span className="font-bold">ITERA</span> <br />{" "}
                        Lebih Dalam
                    </p>

                    <div className="flex w-2/3 flex-wrap gap-3">
                        {Informasi.map((info, index) => (
                            <Link
                                key={index}
                                href={info.href}
                                className="rounded-lg bg-gradient-to-t from-[#A6680C] to-[#B9822F] px-4 py-[10px] font-montserrat text-[16px] font-semibold uppercase text-white shadow-sm"
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
