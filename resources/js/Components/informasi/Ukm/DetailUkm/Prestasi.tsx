import { ImageDialog } from "./ImageDialog";

import * as React from "react";

import { Card, CardContent } from "@/Components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";

import { useAos } from "@/lib/hooks/useAos";

export function Prestasi({ allprestasi }) {
    useAos();

    return (
        <div className="z-20 w-full max-w-xl px-12">
            <Carousel data-aos="fade-up" data-aos-duration="1000">
                <CarouselContent>
                    {allprestasi.map((prestasi, index) => (
                        <CarouselItem key={index} className="basis-full">
                            <Card className="flex flex-col text-center rounded-sm shadow-md">
                                <CardContent className="relative p-0">
                                    <ImageDialog src={prestasi.prestasi} />

                                    <img
                                        src={prestasi.prestasi}
                                        alt={prestasi.deskripsi}
                                        className="lg:h-72 md:h-52 object-cover w-full h-32 rounded-sm"
                                    />

                                    <div className="className=text-xl font-semibold min-h-24 p-4 grid place-content-center">
                                        <p>{prestasi.deskripsi}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}
