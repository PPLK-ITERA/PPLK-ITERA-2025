import * as React from "react";

import { Card, CardContent } from "@/Components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";

import maskot from "!assets/ChaBud.gif";

export function CarouselMaskot() {
    return (
        <Carousel className="w-full max-w-5xl bg-transparent">
            <CarouselContent className="bg-transparent">
                {Array.from({ length: 3 }).map((_, index) => (
                    <CarouselItem key={index} className="bg-transparent">
                        <div className="flex p-4 bg-transparent">
                            <div className="w-1/4 flex items-center justify-center p-4 bg-transparent">
                                <img
                                    src={maskot}
                                    alt="maskot"
                                    className="h-[500px] w-[500px] bg-contain bg-center bg-no-repeat"
                                />
                            </div>
                            <div className="w-3/4 p-4 bg-transparent">
                                <Card className="bg-transparent shadow-none border-none">
                                    <CardContent className="bg-transparent text-left">
                                        <h2 className="font-avigea text-4xl mb-2">
                                            Hai! Aku,
                                        </h2>
                                        <h3 className="font-avigea text-6xl mb-6">
                                            Cephabel
                                        </h3>
                                        <p className="font-montserrat text-2xl font-semibold">
                                            Hai, Aku Cephabel, Maskot PPLK 2023
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Suspendisse non porta dolor.
                                            Interdum et malesuada fames ac ante
                                            ipsum primis in faucibus. Fusce
                                            congue ac elit non sollicitudin.
                                            Aenean dictum ultricies massa, non
                                            tristique nunc.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
