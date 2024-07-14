import { useAos } from "@/lib/hooks/useAos";

import * as React from "react";

import { Card, CardContent } from "@/Components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/Components/ui/carousel";

interface CarouselUkmProps {
    items: { logo: string; title: string }[];
}

export const CarouselUkm: React.FC<CarouselUkmProps> = ({ items }) => {
    useAos();
    return (
        <Carousel
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="w-full max-w-7xl"
        >
            <CarouselContent className="grid gap-1 p-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                {items.map((item, index) => (
                    <CarouselItem key={index} >
                        <Card>
                            <CardContent className="flex flex-col items-center justify-center p-6 border-4 border-moccaccino-800 rounded-lg">
                                <div className="my-10 flex items-center justify-center w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-gray-50 rounded-full shadow-inner">
                                    <img
                                        src={item.logo}
                                        alt="Logo UKM"
                                        className="rounded-full w-full h-full"
                                        
                                    />
                                </div>
                                <span className="text-[16px] font-montserrat font-semibold text-jaffa-600">
                                    {item.title}
                                </span>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
};

export default CarouselUkm;
