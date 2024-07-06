import React from "react";

export default function Hero() {
    return (
        <div className="min-h-screen px-[50px] py-[120px]">
            <p className="text-[29.5px] font-bold text-jaffa-100/80">
                SELAMAT DATANG
            </p>

            <h1 className="mt-8 flex flex-col items-start justify-center leading-10 text-jaffa-100">
                <span className="font-avigea text-[72px]">PPLK</span>
                <br />
                <span className="font-avigea text-[108px]">ITERA</span>
                <br />
                <span className="font-avigea text-[72px]">2024</span>
            </h1>

            <p className="mt-5 leading-5 tracking-[0.2em] text-jaffa-100">
                <span className="text-[25px]">
                    Program Pengenalan
                    <br />
                    Lingkungan Kampus
                </span>
                <br />
                <br />
                <span className="text-[20px]">Institut Teknologi Sumatera</span>
            </p>
        </div>
    );
}
