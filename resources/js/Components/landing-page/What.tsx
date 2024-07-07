import { Link } from "@inertiajs/react";
import React from "react";

export default function What() {
    return (
        <div className="flex min-h-[70vh] items-center justify-center">
            <div className="flex flex-col items-center justify-center text-center">
                <h2 className="bg-gradient-to-t from-[#A6680C] to-[#B9822F] bg-clip-text font-avigea text-5xl text-transparent">
                    Apa Itu PPLK ITERA?
                </h2>

                <p className="mt-10 max-w-[826px] font-montserrat text-2xl font-normal">
                    PPLK adalah singkatan dari Program Pengenalan Lingkungan
                    Kampus. PPLK adalah acara yang diperuntukkan bagi mahasiswa
                    baru untuk mengenali kampus dan mempersiapkan mereka untuk
                    perjalanan baru sebagai mahasiswa. PPLK dapat menjadi
                    langkah awal yang penting dalam membentuk mahasiswa yang
                    cerdas secara akademis, memiliki integritas, semangat
                    sosial, dan komitmen terhadap kebaikan bersama
                </p>

                <Link
                    href="/login"
                    className="mx-2 mt-10 rounded-lg bg-gradient-to-t from-[#A6680C] to-[#B9822F] px-4 py-[10px] font-montserrat text-[16px] font-semibold text-white shadow-sm"
                >
                    Informasi PPLK
                </Link>
            </div>
        </div>
    );
}
