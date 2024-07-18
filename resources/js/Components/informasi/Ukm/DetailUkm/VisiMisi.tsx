import { useAos } from "@/lib/hooks/useAos";

import React from "react";

const renderWithBreaks = (text) => {
    return text.split("\n").map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));
};

function VisiMisi({ ketum, prodi, visi, misi }) {
    useAos();

    return (
        <div className="flex flex-col gap-12 place-content-center place-items-center">
            <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="flex max-md:flex-col place-content-center"
            >
                <div className="flex flex-col items-center rounded-lg bg-white shadow-2xl py-6 px-4 md:px-36 text-center">
                    <p className="font-avigea text-candlelight-600 text-lg sm:text-2xl md:text-[25px]">
                        KETUA UMUM
                    </p>
                    <p className="font-montserrat text-base md:text-[20px] font-bold mt-2 text-center">
                        {ketum}
                    </p>
                    <p className="font-montserrat text-sm md:text-[16px]">{prodi}</p>
                </div>
            </div>
            <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="flex gap-10 max-md:flex-col place-content-center"
            >
                <div className="py-4 sm:py-8 px-2 md:p-8 flex flex-col gap-4 items-center text-center rounded-[3px] bg-white shadow-2xl">
                    <p className="font-avigea text-candlelight-600 text-lg sm:text-2xl md:text-[25px]">
                        VISI
                    </p>
                    <p className="p-2 font-montserrat text-sm sm:text-[16px]">{visi}</p>
                </div>
                <div className="py-4 sm:py-8 px-2 md:p-8 flex flex-col gap-4 items-center text-center rounded-lg bg-white shadow-2xl">
                    <p className="font-avigea text-candlelight-600 text-lg sm:text-2xl md:text-[25px]">
                        MISI
                    </p>

                    <p className="p-2 font-montserrat text-sm sm:text-[16px]">
                        {renderWithBreaks(misi)}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default VisiMisi;
