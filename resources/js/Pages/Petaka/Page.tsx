import React from "react";
import { Head } from "@inertiajs/react";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { useAos } from "@/lib/hooks/useAos";
import card_1 from "!assets/petaka/card-1.png";
import card_2 from "!assets/petaka/card-2.png";
import bg_1 from "!assets/petaka/bg-1.png";
import bg_2 from "!assets/petaka/bg-2.png";

export default function Page() {
    useAos();

    return (
        <>
            <Head title="Petaka" />

            <div className="bg-pattern-white flex flex-col min-h-screen">
                <DefaultLayout isSolid={true}>
                    <div className="container mt-20  mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:my-32 space-y-6 md:space-y-8">
                        <div className="text-justify space-y-3 md:space-y-4">
                            <h1 className="font-greek text-[#BE3F00] font-bold text-center text-3xl sm:text-4xl md:text-5xl">
                                PETAKA
                            </h1>
                            <p className="text-[#543122] text-base sm:text-lg md:text-xl">
                                Lorem ipsum dolor sit amet consectetur. Augue vulputate mattis vestibulum fames metus a quis commodo bibendum. Et morbi penatibus pulvinar arcu arcu feugiat nibh eros.
                            </p>
                        </div>

                        <p className="text-[#450F0A] font-bold text-justify text-base sm:text-lg md:text-xl">
                            Kumpulkan tugas Anda dibawah ini!
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10">
                            <img
                                src={card_1}
                                alt=""
                                className="w-full sm:w-auto max-w-xs md:max-w-none"
                            />
                            <img
                                src={card_2}
                                alt=""
                                className="w-full sm:w-auto max-w-xs md:max-w-none"
                            />
                        </div>

                        <div className="w-full">
                            <img
                                src={bg_1}
                                alt=""
                                className="w-full h-auto"
                            />
                        </div>

                        <div className="flex justify-center">
                            <div className="w-1/2 md:max-w-xs mx-auto rounded-lg bg-[#DA5B1C] flex px-4 py-3 justify-center items-center hover:bg-[#BE3F00] transition-colors">
                                <img
                                    src={bg_2}
                                    alt=""
                                    className="object-contain h-6 mr-2"
                                />
                                <a href="/map" className=" text-white text-sm sm:text-base md:text-lg">
                                    Jelajahi Peta
                                </a>
                            </div>
                        </div>
                    </div>
                </DefaultLayout>
            </div>
        </>
    );
}