import { Link } from "@inertiajs/react";
import React from "react";
import maskot from "!assets/ChaBud.gif";

export default function Maskot() {
    return (
        <div className="flex min-h-[100vh] items-center justify-center lg:min-h-[150vh]">
            <div className="flex w-2/3 flex-col items-start justify-center px-10 text-left lg:w-3/5">
                <h2 className="font-avigea text-white md:text-2xl lg:text-4xl">
                    Kenalan Sama
                    <br />
                    Maskot PPLK 2024!
                </h2>

                <p className="mt-5 font-montserrat font-normal text-white/80 md:text-lg lg:max-w-[80%] lg:text-2xl">
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

            <div className="flex h-full w-1/3 items-center justify-center text-white lg:w-2/5">
                <img
                    src={maskot}
                    alt="maskot"
                    className="h-[500px] w-[500px] bg-contain bg-center bg-no-repeat"
                />
            </div>
        </div>
    );
}
