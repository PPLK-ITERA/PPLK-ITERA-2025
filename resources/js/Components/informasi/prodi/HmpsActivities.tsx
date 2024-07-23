import React from "react";

import { Card } from "@/Components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";

import { User } from "@/lib/types/User";

import linux from "!assets/linux.png";

type Props = { hmpsActivities: HmpsActivities[] };

export default function HmpsActivities({ hmpsActivities }: Props) {
    return (
        <Carousel>
            <CarouselContent className="text-sm p-4">
                {hmpsActivities.map((a, i) => (
                    <CarouselItem
                        data-aos="fade-up"
                        data-aos-duration={800}
                        data-aos-delay={(i + 1) * 100}
                        className="basis-full lg:basis-1/3 mt-2 mb-8 text-center hover:scale-105 transition duration-300"
                    >
                        <Card className="overflow-hidden rounded-lg border-0">
                            <div className="flex flex-col">
                                <div className="relative h-96">
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/70 via-transparent to-transparent"></div>
                                    <div className="p-4 absolute w-full h-full top-0 left-0 text-white text-left">
                                        <p>09 Juli 2024</p>
                                        <h5 className="text-lg font-semibold w-1/3">
                                            Headline Kegiatan, atau Info penting
                                        </h5>
                                    </div>
                                    <img
                                        src={a.imageUrl ?? linux}
                                        alt=""
                                        className="aboslute top-0 left-0 bg-gray-300 object-cover h-full w-full"
                                    />
                                </div>
                                <div className="basis-3/5 h-full flex flex-col text-left place-content-center p-4">
                                    <h5 className="font-medium text-xl">
                                        {a.title}
                                    </h5>
                                    <p>{a.description}</p>
                                </div>
                            </div>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
