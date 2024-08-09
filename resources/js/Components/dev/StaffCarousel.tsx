import Tilt from "react-parallax-tilt";

import React from "react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";

import { Developer } from "@/lib/types/Developer";

type Props = { staffList: Developer[]; onclick?: (dev: Developer) => void };

function StaffCarousel({ staffList, onclick }: Props) {
    return (
        <Carousel className="lg:h-28 h-20 p-2 text-sm">
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
                            className="cursor-grab border-white/50 overflow-hidden border rounded"
                        >
                            <div
                                onClick={
                                    onclick ? () => onclick(dev) : undefined
                                }
                            >
                                <img
                                    src={dev.photo}
                                    alt={dev.name}
                                    className="lg:w-28 lg:h-28 bg-white/5 object-cover object-center w-20 h-20 mx-auto rounded-sm"
                                />
                            </div>
                        </Tilt>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className=" max-lg:w-5 max-lg:h-5 bg-cyan-primary/50 text-cyan-secondary w-6 h-6 translate-x-8" />
            <CarouselNext className=" max-lg:w-5 max-lg:h-5 bg-cyan-primary/50 text-cyan-secondary w-6 h-6 -translate-x-8" />
        </Carousel>
    );
}

export default StaffCarousel;
