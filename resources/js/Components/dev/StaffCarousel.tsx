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

type Props = { staffList: Developer[] };

function StaffCarousel({}: Props) {
    return (
        <Carousel>
            <CarouselContent className="p-2 text-sm">
                {devTeam.vvd.map((dev, i) => (
                    <CarouselItem
                        data-aos="fade-up"
                        data-aos-duration={800}
                        data-aos-delay={(i + 1) * 100}
                        className="w-min basis-28"
                    >
                        <Tilt tiltReverse={true} className="border border-white/50 rounded overflow-hidden">
                            <img
                                src={dev.photo}
                                alt={dev.name}
                                className="w-28 h-28 rounded-sm mx-auto bg-white/5 backdrop-blur-md "
                            />
                        </Tilt>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}

export default StaffCarousel;
