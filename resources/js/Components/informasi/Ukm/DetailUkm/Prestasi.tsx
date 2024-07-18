import { useAos } from "@/lib/hooks/useAos";

import * as React from "react";

import { Card, CardContent } from "@/Components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";

export function Prestasi({ allprestasi }) {
    useAos();
    return (
        <Carousel
            data-aos="fade-up"
            data-aos-duration="1000"
            className="max-w-[250px] md:max-w-md"
        >
            <CarouselContent>
                {allprestasi.map((prestasi, index) => (
                    <CarouselItem key={index}>
                        <div className="">
                            <Card className="h-80 flex flex-col text-center shadow-md rounded-sm">
                                <div className="flex-1">
                                    <img
                                        src={prestasi.prestasi}
                                        alt={prestasi.deskripsi}
                                        className="w-full h-48 object-cover rounded-sm"
                                    />
                                </div>
                                <CardContent className="p-4 h-32">
                                    <span className="text-xl font-semibold">
                                        {prestasi.deskripsi}
                                    </span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
