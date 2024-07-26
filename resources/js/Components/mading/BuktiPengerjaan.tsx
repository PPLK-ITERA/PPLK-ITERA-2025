import Autoplay from "embla-carousel-autoplay";
import { color } from "framer-motion";
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useRoute } from "vendor/tightenco/ziggy/src/js";

import { useState } from "react";

import { Link } from "@inertiajs/react";

import RadialSeparators from "@/Components/mading/RadialSeparator";
import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/Components/ui/carousel";

import sponsor_overlay from "!assets/sponsor-overlay.png";

const Tugas = [1, 2, 3, 4, 5, 6];

export default function BuktiPengerjaan({ upt }: { upt?: string }) {
    const [submit, setSubmit] = useState(true);

    return (
        <div className="relative z-10 w-full">
            <div className="flex justify-center mt-24">
                <h2 className="font-montserrat text-[25px] font-bold text-moccaccino-950 text-center">
                    Kumpulkan bukti pengerjaan tugas dibawah ini
                </h2>
            </div>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="scroll-smooth max-w-[1920px] xl:pl-36 lg:pl-20 md:pl-10 w-full pl-5 mx-auto mt-10"
                plugins={[
                    Autoplay({
                        delay: 3000,
                    }),
                ]}
            >
                <CarouselContent>
                    {Tugas.map((_, index) => (
                        <CarouselItem
                            key={index}
                            className="basis-72 md:basis-80 xl:basis-[26rem]"
                        >
                            <Card
                                className={`${submit ? "bg-jaffa-700" : ""} xl:w-[400px] md:w-[300px] lg:w-[310px] md:h-[550px] w-[280px] h-[500px] xl:h-[600px] overflow-hidden rounded-lg relative border border-dashed border-jaffa-700 font-montserra`}
                            >
                                <CardContent className="flex flex-col items-center justify-center p-4 text-white">
                                    <h2 className="pt-5 font-avigea text-[44px] text-center">
                                        Day {index + 1}
                                    </h2>
                                    {submit ? (
                                        <div className="w-32 h-32 mt-32">
                                            <CircularProgressbarWithChildren
                                                value={90}
                                                text={`${90}%`}
                                                strokeWidth={10}
                                                styles={buildStyles({
                                                    strokeLinecap: "butt",
                                                    textColor: "#fff",
                                                    trailColor: "#F97B70",
                                                    pathColor: "#FEF3F2",
                                                })}
                                            >
                                                <RadialSeparators
                                                    count={12}
                                                    style={{
                                                        background: "#B54419",
                                                        width: "2px",
                                                        height: `${10}%`,
                                                    }}
                                                />
                                            </CircularProgressbarWithChildren>
                                        </div>
                                    ) : (
                                        <Link
                                            className="mt-44 text-[48px] font-bold text-jaffa-700 bg-transparent"
                                            href={route("mading/kumpul")}
                                        >
                                            +
                                        </Link>
                                    )}
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}
