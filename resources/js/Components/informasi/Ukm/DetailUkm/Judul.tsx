import { useAos } from "@/lib/hooks/useAos";

import React from "react";

export default function Judul({
    title,
    sejarah,
    logo,
    ketum,
    prodi,
    visi,
    misi,
}) {
    useAos();

    const renderWithBreaks = (text) => {
        return text.split("\n").map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ));
    };

    return (
        <div className="min-h-screen max-w-7xl mx-auto px-8 mt-20 md:mt-40">
            <div className="flex flex-row max-md:flex-col-reverse gap-8 justify-center items-center">
                <div className="flex flex-col ">
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
                        className="font-montserrat text-center sm:text-justify text-[18px] sm:text-[22px] mt-4 text-black"
                    >
                        {sejarah}
                    </p>
                </div>
                <img
                    src={logo}
                    alt="logo-ukm"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className="w-3/4 lg:w-[250px] h-[250]"
                />
            </div>
            <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="flex gap-10 max-md:flex-col justify-center items-center mt-40 "
            >
                <div className="flex h-[150px] w-[320px] flex-col items-center rounded-lg bg-white shadow-2xl">
                    <p className="font-avigea mt-5 text-candlelight-600 text-[25px]">
                        KETUA UMUM
                    </p>
                    <p className="font-montserrat text-[20px] font-bold mt-2 text-center">
                        {ketum}
                    </p>
                    <p className="font-montserrat text-[16px]">{prodi}</p>
                </div>
            </div>
            <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="flex gap-10 max-md:flex-col justify-center items-center mt-20"
            >
                <div className="flex h-[339px] w-[320px] sm:h-[439px] sm:w-[480px] md:h-[500px] md:w-[340px] lg:h-[439px] lg:w-[480px] flex-col items-center text-center rounded-[3px] bg-white shadow-2xl">
                    <p className="font-avigea mt-5 text-candlelight-600 text-[25px]">
                        VISI
                    </p>
                    <p className="font-montserrat text-[16px] m-3">{visi}</p>
                </div>
                <div className="flex h-[600px] w-[320px] sm:h-[439px] sm:w-[480px] md:h-[500px] md:w-[340px] lg:h-[439px] lg:w-[480px] flex-col items-center text-center rounded-lg bg-white shadow-2xl">
                    <p className="font-avigea mt-5 text-candlelight-600 text-[25px]">
                        MISI
                    </p>

                    <p className="font-montserrat text-[16px] m-3">
                        {renderWithBreaks(misi)}
                    </p>
                </div>
            </div>
        </div>
    );
}
