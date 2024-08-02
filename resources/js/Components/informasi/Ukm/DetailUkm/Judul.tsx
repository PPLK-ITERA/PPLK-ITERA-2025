import React, { useState } from "react";

import { useAos } from "@/lib/hooks/useAos";

export default function Judul({ title, sejarah, logo }) {
    const [isExpanded, setIsExpanded] = useState(false);
    useAos();

    return (
        <div>
            <div className="place-content-center place-items-center flex flex-col-reverse gap-8">
                <div className="md:mt-10 flex flex-col gap-4">
                    <h1
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        className="font-avigea text-xl sm:text-3xl md:text-[49px] text-center"
                    >
                        UKM {title}
                    </h1>

                    <p
                        className={`font-montserrat ${!isExpanded ? "line-clamp-6 md:line-clamp-4" : ""} max-w-5xl text-center sm:text-justify text-[14px] md:text-lg md:text-[22px] text-black`}
                    >
                        {sejarah}
                    </p>

                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="hover:text-black/90 md:text-base text-sm text-black transition-colors duration-300"
                    >
                        {isExpanded ? "Show Less" : "Read More..."}
                    </button>
                </div>

                <div className="p-5 w-1/2 md:w-[250px] md:h-[250px]">
                    <img
                        src={logo}
                        alt="logo-ukm"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        className="object-contain w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
}
