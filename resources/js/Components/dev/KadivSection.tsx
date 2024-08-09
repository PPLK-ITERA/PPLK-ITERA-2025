import DevCard from "./DevCard";
import RunningText from "./RunningText";
import Autoplay from "embla-carousel-autoplay";

import React from "react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/Components/ui/carousel";

import { devTeam } from "@/lib/data/devteam";

import kartateraLogo from "!assets/svg/kartatera-logo.svg";

type Props = {};

function KadivSection({}: Props) {
    return (
        <section className="flex items-center justify-center h-screen">
            <div className="lg:grid lg:grid-cols-4 flex flex-col h-full gap-4 p-8 rounded-lg shadow-lg">
                <div className="max-lg:hidden place-content-center flex flex-col col-span-1 p-4">
                    <RunningText
                        className="lg:text-2xl xl:text-3xl 2xl:text-5xl font-avigea tracking-wider"
                        title={"KARTATERA"}
                        delay={150}
                    />
                    <div
                        data-aos="fade-right"
                        data-aos-delay={300}
                        data-aos-duration={2000}
                        className="backdrop-blur-md bg-white/10 border-white/50 p-4 mt-16 border rounded-lg"
                    >
                        <h3 className="xl:text-xl 2xl:text-2xl text-lg font-semibold">
                            Implementasi Teknologi
                        </h3>
                        <p className="xl:text-base text-start mt-6 text-sm">
                            Kartatera berasal dari "Utskarta" (canggih) dan
                            "Lanterna" (lentera). Divisi IT ini melambangkan
                            cahaya perubahan dari zaman kuno ke modern, membantu
                            perkembangan teknologi, dan memudahkan mahasiswa
                            baru mengakses informasi kegiatan.
                        </p>
                    </div>
                </div>

                <div className="grow place-content-center md:block hidden col-span-2">
                    <div className="max-md:flex-col max-md:h-full place-content-center place-items-center flex w-full gap-6">
                        <div
                            data-aos="fade-up"
                            data-aos-duration={1000}
                            data-aos-delay={1000}
                            className="max-md:h-full md:max-w-64 w-full"
                        >
                            <DevCard
                                developer={devTeam.sekdiv[0]}
                                className="w-full h-full md:h-[320px] lg:h-[350px] xl:h-[380px] 2xl:h-[400px] shadow-xl shadow-cyan-primary/30"
                                tiltInitialX={
                                    window.screen.width < 767 ? 0 : -12
                                }
                            />
                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-duration={1000}
                            data-aos-delay={500}
                            className="max-md:h-full md:max-w-64 w-full"
                        >
                            <DevCard
                                developer={devTeam.kadiv[0]}
                                className="w-full h-full md:h-[380px] lg:h-[410px] 2xl:h-[450px] shadow-xl shadow-cyan-primary/30"
                            />
                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-duration={1000}
                            data-aos-delay={1500}
                            className="max-md:h-full md:max-w-64 w-full"
                        >
                            <DevCard
                                developer={devTeam.bendiv[0]}
                                className="w-full h-full md:h-[320px] lg:h-[350px] xl:h-[380px] 2xl:h-[400px] shadow-xl shadow-cyan-primary/30"
                                tiltInitialX={
                                    window.screen.width < 767 ? 0 : 12
                                }
                            />
                        </div>
                    </div>
                </div>

                <Carousel
                    className="grow md:hidden w-full"
                    opts={{
                        startIndex: 1,
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 3000,
                        }),
                    ]}
                >
                    <CarouselContent>
                        <CarouselItem className="grow">
                            <div
                                data-aos="fade-up"
                                data-aos-duration={1000}
                                data-aos-delay={1000}
                                className="max-md:h-full md:max-w-64 w-full"
                            >
                                <DevCard
                                    developer={devTeam.sekdiv[0]}
                                    className="w-full h-[320px] md:h-[320px] lg:h-[350px] xl:h-[380px] 2xl:h-[400px] shadow-xl shadow-cyan-primary/30"
                                    tiltInitialX={
                                        window.screen.width < 767 ? 0 : -12
                                    }
                                />
                            </div>
                        </CarouselItem>

                        <CarouselItem className="grow">
                            <div
                                data-aos="fade-up"
                                data-aos-duration={1000}
                                data-aos-delay={500}
                                className="max-md:h-full md:max-w-64 w-full"
                            >
                                <DevCard
                                    developer={devTeam.kadiv[0]}
                                    className="w-full h-[320px] md:h-[380px] lg:h-[410px] 2xl:h-[450px] shadow-xl shadow-cyan-primary/30"
                                />
                            </div>
                        </CarouselItem>

                        <CarouselItem className="grow">
                            <div
                                data-aos="fade-up"
                                data-aos-duration={1000}
                                data-aos-delay={1500}
                                className="max-md:h-full md:max-w-64 w-full"
                            >
                                <DevCard
                                    developer={devTeam.bendiv[0]}
                                    className="w-full h-[320px] md:h-[320px] lg:h-[350px] xl:h-[380px] 2xl:h-[400px] shadow-xl shadow-cyan-primary/30"
                                    tiltInitialX={
                                        window.screen.width < 767 ? 0 : 12
                                    }
                                />
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>

                <div className="max-lg:hidden flex flex-col items-center justify-center col-span-1 p-4">
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
                <div className="lg:hidden flex flex-col items-center justify-center col-span-1 p-4 mb-8">
                    <RunningText
                        className="md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-avigea text-xl tracking-wider"
                        title={"KARTATERA"}
                        delay={150}
                    />
                    <div
                        data-aos="fade-up"
                        data-aos-delay={300}
                        data-aos-duration={1000}
                        className="md:p-4 backdrop-blur-md bg-white/10 border-white/50 p-2 text-center border rounded-lg"
                    >
                        <h3 className="md:text-lg xl:text-xl 2xl:text-2xl text-base font-semibold">
                            IMPLEMENTASI TEKNOLOGI
                        </h3>
                        <p className="md:text-sm xl:text-base md:mt-4 mt-1 text-xs text-center">
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
