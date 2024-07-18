import * as React from "react";
import { Card, CardContent } from "@/Components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/Components/ui/carousel";

interface CarouselUkmProps {
    items: { logo: string; title: string; link: string }[];
}

export const CarouselUkm: React.FC<CarouselUkmProps> = ({ items }) => {
    return (
        <Carousel data-aos="zoom-in" data-aos-duration="1500" className="w-full max-w-7xl">
            <CarouselContent className="grid gap-1 p-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                {items.map((item, index) => (
                    <CarouselItem key={index}>
                        <a href={item.link} className="block py-2">
                            <Card>
                                <CardContent className="flex flex-col items-center justify-center p-6 border-4 border-moccaccino-800 rounded-lg">
                                    <div className="my-10 flex items-center justify-center md:w-32 md:h-32 lg:w-40 lg:h-40 bg-gray-50  rounded-full  shadow-inner overflow-hidden">
                                        <img
                                            src={item.logo}
                                            alt="Logo UKM"
                                            className="bg-cover bg-center w-[100px] h-[100px] object-contain"
                                        />
                                    </div>
                                    <span className="text-[16px] font-montserrat font-semibold text-jaffa-600">
                                        {item.title}
                                    </span>
                                </CardContent>
                            </Card>
                        </a>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
};

export default CarouselUkm;
