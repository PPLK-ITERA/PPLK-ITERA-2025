import Tilt from "react-parallax-tilt";

import React from "react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";

import { devTeam } from "@/lib/data/devteam";
import { Developer } from "@/lib/types/Developer";

type Props = { staffList: Developer[]; onclick?: (dev: Developer) => void };

function StaffCarousel({ staffList, onclick }: Props) {
    return (
        <Carousel className="p-2 text-sm h-20 lg:h-28">
            <CarouselContent>
                {staffList.map((dev, i) => (
                    <CarouselItem
                        data-aos="fade-up"
                        data-aos-duration={800}
                        data-aos-delay={(i + 1) * 100}
                        className="w-min basis-20 lg:basis-28"
                    >
                        <Tilt
                            tiltReverse={true}
                            className="border cursor-grab border-white/50 rounded overflow-hidden"
                        >
                            <div
                                onClick={
                                    onclick ? () => onclick(dev) : undefined
                                }
                            >
                                <img
                                    src={dev.photo}
                                    alt={dev.name}
                                    className="lg:w-28 w-20 lg:h-28 h-20 rounded-sm mx-auto bg-white/5 object-cover object-center"
                                />
                            </div>
                        </Tilt>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className=" translate-x-8 max-lg:w-5 max-lg:h-5 w-6 h-6 text-yellow-300 bg-yellow-400/50" />
            <CarouselNext className=" -translate-x-8 max-lg:w-5 max-lg:h-5 w-6 h-6 text-yellow-300 bg-yellow-400/50" />
        </Carousel>
    );
}

export default StaffCarousel;
