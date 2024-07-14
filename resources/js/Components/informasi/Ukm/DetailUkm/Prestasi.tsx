import { ukmData } from "@/lib/data/ukm";

import * as React from "react";

import { Card, CardContent } from "@/Components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";

export function Prestasi() {
    return (
        <Carousel className="w-full max-w-md"> 
            <CarouselContent>
                {ukmData.map((ukm, index) => (
                    <CarouselItem key={index}>
                        <div className="p-2"> 
                            <Card className="h-80 flex flex-col text-center shadow-md rounded-sm"> 
                                <div className="flex-1">
                                    <img
                                        src={ukm.prestasi}
                                        alt={ukm.title}
                                        className="w-full h-48 object-cover rounded-sm" 
                                    />
                                </div>
                                <CardContent className="p-4 h-32"> 
                                    <span className="text-xl font-semibold">
                                        {ukm.deskripsi}
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
