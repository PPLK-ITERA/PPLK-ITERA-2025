import React from "react";

export default function Hero() {
    return (
        <div className="min-h-screen px-2.5 py-[40px] md:py-[80px] lg:py-[120px] xl:py-[160px]">
            <p className="text-[20px] font-semibold text-jaffa-100/80 md:text-[29.5px]">
                Selamat Datang
            </p>

            <h1 className="text-jaffa-100 md:leading-10 flex flex-col items-start justify-center mt-8 leading-7">
                <span className="font-avigea text-[40px] md:text-[72px]">
                    PPLK
                </span>
                <br />
                <span className="font-avigea text-[64px] md:text-[108px]">
                    ITERA
                </span>
                <br />
                <span className="font-avigea text-[40px] md:text-[72px]">
                    2024
                </span>
            </h1>

            <p className="mt-5 leading-5 tracking-widest text-jaffa-100 md:tracking-[0.2em]">
                <span className="text-[18px] md:text-[25px]">
                    Program Pengenalan
                    <br />
                    Lingkungan Kampus
                </span>
                <br />
                <br />
                <span className="text-[18px] md:text-[25px]">
                    Institut Teknologi Sumatera
                </span>
            </p>
        </div>
    );
}
