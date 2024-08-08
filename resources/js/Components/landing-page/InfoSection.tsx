import React, { useEffect, useState } from "react";

import { Link } from "@inertiajs/react";

import { InformasiInfoSection } from "@/lib/data/data";
import { dataInfoSection } from "@/lib/data/funfact";
import { useAos } from "@/lib/hooks/useAos";

export default function InfoSection() {
    useAos();

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(
                (prevIndex) => (prevIndex + 1) % dataInfoSection.length,
            );
        }, 3000); // Change index every 3 seconds

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    const currentData = dataInfoSection[currentIndex];

    return (
        <div
            data-aos="fade-up"
            data-aos-duration={1000}
            className="flex h-full items-center justify-center px-2.5 lg:min-h-screen"
        >
            <div className="flex flex-col rounded-md bg-jaffa-200 md:w-[700px] md:rounded-[24px] lg:h-[750px] lg:w-[900px] xl:h-[700px] xl:w-[1200px]">
                <div className="flex flex-col rounded-md bg-flower-pattern h-[400px] md:h-[350px] md:rounded-[24px] lg:h-[475px]">
                    <div className="flex h-full w-full flex-col items-center justify-center rounded-md bg-gradient-to-r from-jaffa-700/90 to-jaffa-800/90 px-4 md:rounded-[24px] py-10 md:px-[10%]">
                        <div className="flex flex-col items-start w-full">
                            <h2 className="text-start font-avigea md:text-5xl lg:text-6xl w-full text-2xl text-white">
                                {currentData.title}
                            </h2>

                            <p className="text-16px mt-5 w-full font-montserrat font-normal text-white/80 md:text-xl lg:max-w-[80%]">
                                {currentData.description}
                            </p>

                            <p className="mt-10 font-montserrat text-[10px] md:text-[16px] font-normal text-white/80 lg:max-w-[80%]">
                                {currentData.additional}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="md:flex-row lg:mt-16 lg:px-20 lg:pb-0 xl:pb-0 flex flex-col items-center w-full px-8 pb-10 mt-5">
                    <p className="w-full font-semibold md:w-1/4 md:text-[20px] lg:w-1/3 lg:text-2xl">
                        Mengenal <span className="font-bold">ITERA</span>{" "}
                        <br className="md:block hidden" /> Lebih Dalam
                    </p>

                    <div className="md:mt-0 md:w-3/4 lg:w-2/3 flex flex-wrap w-full gap-3 mt-5">
                        {InformasiInfoSection.map((info, index) => (
                            <Link
                                key={index}
                                href={info.href}
                                className="rounded-[6px] bg-gradient-to-t from-[#A6680C] to-[#B9822F] px-4 py-[10px] font-montserrat text-[12px] font-semibold uppercase text-white shadow-sm md:text-[14px]"
                            >
                                {info.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
