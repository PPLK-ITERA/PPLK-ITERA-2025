import Autoplay from "embla-carousel-autoplay";

import React from "react";

import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import { Card, CardContent } from "@/Components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/Components/ui/carousel";

export default function Sponsorship() {
    return (
        <MaxWidthWrapper className="relative flex flex-col items-center w-full bg-white">
            <h2 className="mt-14 w-fit bg-gradient-to-r from-jaffa-700 to-jaffa-800 bg-clip-text font-avigea md:mt-20 md:text-4xl lg:text-5xl text-2xl text-center text-transparent">
                Terimakasih Kepada Sponsor
            </h2>

            {/* Sponsor Logo */}
            <Carousel
                opts={{
                    align: "center",
                    loop: true,
                }}
                className="scroll-smooth relative w-full mt-20"
                plugins={[
                    Autoplay({
                        delay: 1000,
                    }),
                ]}
            >
                <CarouselContent>
                    {Array.from({ length: 10 }).map((_, index) => (
                        <CarouselItem
                            key={index}
                            className="min-h-[200px] min-w-[200px] basis-1/5"
                        >
                            <div className="p-1">
                                <Card className="p-1">
                                    <CardContent className="aspect-square flex items-center justify-center p-6">
                                        <span className="text-3xl font-semibold">
                                            {index + 1}
                                        </span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Effect  */}
                <div className="absolute inset-0 flex justify-between">
                    <div className="pointer-events-noneh h-full w-[50px] bg-gradient-to-r from-white to-transparent" />
                    <div className="pointer-events-none h-full w-[50px] bg-gradient-to-l from-white to-transparent" />
                </div>
            </Carousel>
        </MaxWidthWrapper>
    );
}
