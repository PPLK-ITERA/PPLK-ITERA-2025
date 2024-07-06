import { Link } from "@inertiajs/react";
import React from "react";
import maskot from "../../../../public/assets/ChaBud.gif";

export default function Maskot() {
    return (
        <div className="flex min-h-[150vh] items-center justify-center">
            <div className="flex w-1/2 flex-col items-start justify-center px-10 text-left">
                <h2 className="font-avigea text-4xl text-white">
                    Kenalan Sama
                    <br />
                    Maskot PPLK 2024!
                </h2>

                <p className="mt-5 max-w-[80%] font-montserrat text-2xl font-normal text-white/80">
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

            <div className="flex h-full w-1/2 items-center justify-center text-white">
                <img
                    src={maskot}
                    alt="maskot"
                    className="h-[500px] w-[500px] bg-contain bg-center bg-no-repeat"
                />
            </div>
        </div>
    );
}
