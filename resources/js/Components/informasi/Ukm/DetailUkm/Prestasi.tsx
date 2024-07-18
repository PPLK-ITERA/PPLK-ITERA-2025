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
        <div className="w-full max-w-md px-12">
            <Carousel data-aos="fade-up" data-aos-duration="1000" >
                <CarouselContent>
                    {allprestasi.map((prestasi, index) => (
                        <CarouselItem key={index} className="basis-full">
                            <Card className="flex flex-col text-center shadow-md rounded-sm">
                                <CardContent className="p-0">
                                    <img
                                        src={prestasi.prestasi}
                                        alt={prestasi.deskripsi}
                                        className="w-full object-cover rounded-sm h-52"
                                    />
                                    <div className="className=text-xl font-semibold min-h-36 p-4 grid place-content-center">
                                        <p>
                                        {prestasi.deskripsi}
                                    </p>
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
