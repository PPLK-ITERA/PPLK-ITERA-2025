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
            <div className="text-start md:text-center md:px-0 px-4">
                <p className="font-avigea text-moccaccino-500 md:text-5xl text-2xl font-bold tracking-widest">
                    Struktur Organisasi
                </p>
            </div>
            <div className="md:mt-16 flex items-center justify-center mx-auto mt-8">
                <div>
                    <Carousel setApi={setApi} className="w-full max-w-xs">
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index}>
                                    <Card>
                                        <CardContent className="aspect-square flex items-center justify-center p-6">
                                            <span className="text-4xl font-semibold">
                                                {index + 1}
                                            </span>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                    <div className="flex justify-center mt-4 space-x-2">
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
