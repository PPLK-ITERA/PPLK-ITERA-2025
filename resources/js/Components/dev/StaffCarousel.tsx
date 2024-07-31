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
        <Carousel>
            <CarouselContent className="p-2 text-sm">
                {staffList.map((dev, i) => (
                    <CarouselItem
                        data-aos="fade-up"
                        data-aos-duration={800}
                        data-aos-delay={(i + 1) * 100}
                        className="w-min basis-28 h-28"
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
                                    className="w-28 h-28 rounded-sm mx-auto bg-white/5 backdrop-blur-md "
                                />
                            </div>
                        </Tilt>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="text-gray-500" />
            <CarouselNext className="text-gray-500" />
        </Carousel>
    );
}

export default StaffCarousel;
