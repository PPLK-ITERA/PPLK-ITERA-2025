import React, { useState } from "react";

import { Card, CardContent } from "@/Components/ui/card";
import {
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/Components/ui/carousel";

import dekanFakultasSains from "!assets/dekan-fakultas-sains.png";

export default function StrukturOrganisasi() {
    // plugins carousel
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <div className="mt-16">
            <div className="text-start md:text-center px-4 md:px-0">
                <p className="font-bold tracking-widest font-avigea text-moccaccino-500 text-2xl md:text-5xl">
                    Struktur Organisasi
                </p>
            </div>
            <div className="md:mt-16 mt-8 mx-auto flex justify-center items-center">
                <div>
                    <Carousel setApi={setApi} className="w-full max-w-xs">
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index}>
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-4xl font-semibold">
                                                {index + 1}
                                            </span>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel> 
                    <div className="flex justify-center space-x-2 mt-4">
                        {Array.from({ length: count }).map((_, index) => (
                            <div
                                key={index}
                                className={`w-3 h-3 rounded-full ${
                                    current === index + 1
                                        ? "bg-black"
                                        : "bg-gray-400"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
