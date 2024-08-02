import * as React from "react";

import { Link } from "@inertiajs/react";

import { Card, CardContent } from "@/Components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/Components/ui/carousel";

import { useAos } from "@/lib/hooks/useAos";

interface CarouselUkmProps {
    items: {
        key: string;
        logo: string;
        title: string;
    }[];
}

export const CarouselUkm: React.FC<CarouselUkmProps> = ({ items }) => {
    useAos();

    return (
        <Carousel
            data-aos="fade-in"
            data-aos-duration="1000"
            className="max-w-7xl w-full pt-20"
        >
            <CarouselContent className="sm:grid-cols-3 lg:grid-cols-4 gap-y-[14px] grid grid-cols-2">
                {items.map((item, index) => (
                    <Link href={`/informasi/ukm/${item.key}`} key={index}>
                        <CarouselItem key={index}>
                            <Card>
                                <CardContent className="border-moccaccino-800 flex flex-col items-center justify-center p-6 border-4 rounded-lg">
                                    <div className="md:w-32 md:h-32 lg:w-40 lg:h-40 bg-gray-50 flex items-center justify-center w-24 h-24 p-5 overflow-hidden rounded-full shadow-inner">
                                        <img
                                            src={item.logo}
                                            alt="Logo UKM"
                                            className="object-contain w-full h-full bg-contain"
                                        />
                                    </div>

                                    <span className="text-[8px] md:text-[16px] font-montserrat w-full mt-5 md:mt-10 text-center font-semibold text-jaffa-600">
                                        {item.title}
                                    </span>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    </Link>
                ))}
            </CarouselContent>
        </Carousel>
    );
};

export default CarouselUkm;
