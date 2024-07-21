import { useAos } from "@/lib/hooks/useAos";

import React from "react";

export default function Judul({
    title,
    sejarah,
    logo,
    pembina,
    jabatan,
    ketum,
    prodi,
    fotoPembina,
    fotoKetum,
}) {
    useAos();
    return (
        <div className="min-h-screen max-w-7xl mx-auto px-8 mt-20 md:mt-40">
            <div className="flex flex-row max-md:flex-col-reverse gap-8 justify-center items-center">
                <div className="flex flex-col">
                    <h1
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        className="flex flex-col font-avigea text-[49px] max-md:text-center gap-4 "
                    >
                        {title}
                    </h1>
                    <p
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        className="font-montserrat text-center sm:text-justify text-[18px] sm:text-[25px] mt-4 text-black"
                    >
                        {sejarah} <br />
                    </p>
                </div>
                <img
                    src={logo}
                    alt="pplk-logo"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className=" w-[250px] h-[250]"
                />
            </div>
            <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="flex gap-10 max-md:flex-col justify-center items-center mt-40"
            >
                <div className="flex h-[439px] w-[330px] flex-col items-center rounded-[3px] bg-white shadow-2xl">
                    <p className="font-avigea mt-5 text-candlelight-600 text-[25px]">
                        PEMBINA
                    </p>
                    <div className="w-[192px] h-[192px] bg-gray-200 rounded-full mt-7 overflow-hidden">
                        <img
                            src={fotoPembina}
                            alt="foto pembina"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className="font-montserrat text-[20px] font-bold mt-10">
                        {pembina}
                    </p>
                    <p className="font-montserrat text-[16px]">{jabatan}</p>
                </div>
                <div className="flex h-[439px] w-[330px] flex-col items-center rounded-[3px] bg-white shadow-2xl">
                    <p className="font-avigea mt-5 text-candlelight-600 text-[25px]">
                        KETUA UMUM
                    </p>
                    <div className="w-[192px] h-[192px] bg-gray-200 rounded-full mt-7 overflow-hidden">
                        <img
                            src={fotoKetum}
                            alt="foto ketua umum"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className="font-montserrat text-[20px] font-bold mt-10">
                        {ketum}
                    </p>
                    <p className="font-montserrat text-[16px]">{prodi}</p>
                </div>
            </div>
        </div>
    );
}
