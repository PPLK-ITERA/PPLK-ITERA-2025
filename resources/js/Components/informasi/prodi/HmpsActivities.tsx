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
            <CarouselContent className="p-4 text-sm">
                {hmpsActivities.map((a, i) => (
                    <CarouselItem
                        data-aos="fade-up"
                        data-aos-duration={800}
                        data-aos-delay={(i + 1) * 100}
                        className="basis-full lg:basis-1/3 hover:scale-105 mt-2 mb-8 text-center transition duration-300"
                    >
                        <Card className="overflow-hidden border-0 rounded-lg">
                            <div className="flex flex-col">
                                <div className="h-96 relative">
                                    <div className="bg-gradient-to-br from-black/70 via-transparent to-transparent absolute top-0 left-0 w-full h-full"></div>
                                    <div className="absolute top-0 left-0 w-full h-full p-4 text-left text-white">
                                        <p>09 Juli 2024</p>
                                        <h5 className="w-1/3 text-lg font-semibold">
                                            Headline Kegiatan, atau Info penting
                                        </h5>
                                    </div>
                                    <img
                                        src={a.imageUrl ?? linux}
                                        alt=""
                                        className="aboslute top-0 left-0 object-cover w-full h-full bg-gray-300"
                                    />
                                </div>
                                <div className="basis-3/5 place-content-center flex flex-col h-full p-4 text-left">
                                    <h5 className="text-xl font-medium">
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
