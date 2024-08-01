import { useAos } from "@/lib/hooks/useAos";

import React from "react";

export default function Judul({ title, sejarah, logo }) {
    useAos();

    return (
        <div>
            <div className="flex max-md:flex-col-reverse gap-8 place-content-center place-items-center">
                <div className="flex flex-col gap-4">
                    <h1
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        className="font-avigea text-xl sm:text-3xl md:text-[49px] max-md:text-center"
                    >
                        {title}
                    </h1>
                    <p
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        className="font-montserrat text-center sm:text-justify text-sm sm:text-lg md:text-[22px] text-black"
                    >
                        {sejarah}
                    </p>
                </div>
                <img
                    src={logo}
                    alt="logo-ukm"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className="w-1/2 md:w-[250px] md:h-[250px] object-contain"
                />
            </div>
        </div>
    );
}
