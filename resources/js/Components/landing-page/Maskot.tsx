import React from "react";

import { Link } from "@inertiajs/react";

import maskot from "!assets/ChaBud.gif";

export default function Maskot() {
    return (
        <div className="flex min-h-[100vh] flex-col-reverse items-center justify-center gap-10 pb-20 md:flex-row md:gap-0 md:pb-10 lg:min-h-[150vh] lg:pb-0">
            <div className="md:w-2/3 md:items-start md:text-left lg:w-3/5 flex flex-col items-center justify-center w-full px-10 text-center">
                <h2 className="font-avigea md:text-2xl lg:text-4xl w-full text-xl text-white">
                    Kenalan Sama
                    <br />
                    Maskot PPLK 2024!
                </h2>

                <p className="mt-5 font-montserrat text-[16px] font-normal text-white/80 md:text-lg lg:max-w-[80%] lg:text-2xl">
                    Hai, Aku ChaBud, Maskot PPLK 2024, Barang siapa ? barang
                    gwehh! Aku hadir untuk memberikan informasi seputar PPLK
                    2024 nih, yuk kenalan lebih jauh sama aku!
                </p>

                <Link
                    href="/login"
                    className="mt-10 rounded-lg bg-gradient-to-t from-[#A6680C] to-[#B9822F] px-4 py-[10px] font-montserrat text-[16px] font-semibold text-white shadow-sm"
                >
                    Informasi Maskot &#x2192;
                </Link>
            </div>

            <div className="md:w-1/3 lg:w-2/5 flex items-center justify-center w-full h-full text-white">
                <img
                    src={maskot}
                    alt="maskot"
                    className="h-[500px] w-[500px] bg-contain bg-center bg-no-repeat"
                />
            </div>
        </div>
    );
}
