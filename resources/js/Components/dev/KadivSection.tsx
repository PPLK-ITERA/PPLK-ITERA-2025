import DevCard from "./DevCard";
import RunningText from "./RunningText";

import React from "react";

import { devTeam } from "@/lib/data/devteam";

import linuk from "!assets/linuk.png";
import kartateraLogo from "!assets/svg/kartatera-logo.svg";

type Props = {};

function KadivSection({}: Props) {
    return (
        <section className="flex items-center justify-center h-screen">
            <div className="h-full flex flex-col lg:grid lg:grid-cols-4 gap-4 p-8 rounded-lg shadow-lg">
                <div className="max-lg:hidden col-span-1 p-4 flex flex-col place-content-center">
                    <RunningText
                        className="lg:text-2xl xl:text-3xl 2xl:text-5xl font-avigea tracking-wider"
                        title={"KARTATERA"}
                        delay={150}
                    />
                    <div
                        data-aos="fade-right"
                        data-aos-delay={300}
                        data-aos-duration={2000}
                        className="mt-16 p-4 rounded-lg backdrop-blur-md bg-white/10 border border-white/50"
                    >
                        <h3 className="text-lg xl:text-xl 2xl:text-2xl font-semibold">
                            Implementasi Teknologi
                        </h3>
                        <p className="text-sm xl:text-base mt-6 text-justify">
                            Kartatera berasal dari "Utskarta" (canggih) dan
                            "Lanterna" (lentera). Divisi IT ini melambangkan
                            cahaya perubahan dari zaman kuno ke modern, membantu
                            perkembangan teknologi, dan memudahkan mahasiswa
                            baru mengakses informasi kegiatan.
                        </p>
                    </div>
                </div>
                <div className="grow place-content-center col-span-2">
                    <div className="w-full max-md:flex-col max-md:h-full flex gap-6 place-content-center place-items-center">
                        <div
                            data-aos="fade-up"
                            data-aos-duration={1000}
                            data-aos-delay={1000}
                            className="max-md:h-full w-full md:max-w-64"
                        >
                            <DevCard
                                developer={devTeam.sekdiv[0]}
                                className="w-full h-full md:h-[320px] lg:h-[350px] xl:h-[380px] 2xl:h-[400px] shadow-xl shadow-yellow-500/30"
                                tiltInitialX={
                                    window.screen.width < 767 ? 0 : -12
                                }
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration={1000}
                            data-aos-delay={500}
                            className="max-md:h-full w-full md:max-w-64"
                        >
                            <DevCard
                                developer={devTeam.kadiv[0]}
                                className="w-full h-full md:h-[380px] lg:h-[410px] 2xl:h-[450px] shadow-xl shadow-yellow-500/30"
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration={1000}
                            data-aos-delay={1500}
                            className="max-md:h-full w-full md:max-w-64"
                        >
                            <DevCard
                                developer={devTeam.bendiv[0]}
                                className="w-full h-full md:h-[320px] lg:h-[350px] xl:h-[380px] 2xl:h-[400px] shadow-xl shadow-yellow-500/30"
                                tiltInitialX={
                                    window.screen.width < 767 ? 0 : 12
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className="max-lg:hidden col-span-1 p-4 flex flex-col items-center justify-center">
                    <h1
                        data-aos="fade-left"
                        data-aos-duration={1000}
                        className="md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-center"
                    >
                        IMPLEMENTASI TEKNOLOGI
                    </h1>
                    <div
                        data-aos="fade-left"
                        data-aos-duration={1500}
                        className="mt-8"
                    >
                        <img
                            src={kartateraLogo}
                            alt="Logo"
                            className="w-64 h-64"
                        />
                    </div>
                </div>
                {/* mobile title */}
                <div className="lg:hidden col-span-1 p-4 flex flex-col items-center justify-center mb-8">
                    <RunningText
                        className="text-xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-avigea tracking-wider"
                        title={"KARTATERA"}
                        delay={150}
                    />
                    <div
                        data-aos="fade-up"
                        data-aos-delay={300}
                        data-aos-duration={1000}
                        className="p-2 md:p-4 rounded-lg backdrop-blur-md bg-white/10 border border-white/50 text-center"
                    >
                        <h3 className="text-base md:text-lg xl:text-xl 2xl:text-2xl font-semibold">
                            IMPLEMENTASI TEKNOLOGI
                        </h3>
                        <p className="text-xs md:text-sm xl:text-base mt-1 md:mt-4 text-center">
                            Kartatera berasal dari "Utskarta" (canggih) dan
                            "Lanterna" (lentera). Divisi IT ini melambangkan
                            cahaya perubahan dari zaman kuno ke modern, membantu
                            perkembangan teknologi, dan memudahkan mahasiswa
                            baru mengakses informasi kegiatan.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default KadivSection;
