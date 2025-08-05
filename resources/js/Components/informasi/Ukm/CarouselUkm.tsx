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
// test 
  return (
    <Carousel
      data-aos="fade-in"
      data-aos-duration="1000"
      className="max-w-7xl w-full pt-20"
    >
      <CarouselContent className="sm:grid-cols-2 lg:grid-cols-4 gap-x-0 gap-y-14 grid grid-cols-1 place-items-center">
        {items.map((item, index) => (
          <Link href={`/informasi/ukm/${item.key}`} key={index}>
            <CarouselItem key={index} className="flex justify-center">
              <Card className="transition-all duration-300 ">
                <CardContent className="bg-white flex flex-col items-center justify-center p-8  h-80 w-56 relative overflow-hidden group border-2 rounded-2xl"
                            style={{ borderColor: '#933100' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-amber-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  
                  <div className="relative z-10 flex items-center justify-center flex-1 w-full">
                    <div className="w-32 h-32 bg-white flex items-center justify-center p-5 overflow-hidden rounded-full shadow-md group-hover:scale-105 transition-all duration-300">
                      <img
                        src={item.logo}
                        alt={`Logo ${item.title}`}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>

                  <div className="relative z-10 w-full mt-8 flex items-center justify-center min-h-[3.5rem]">
                    <span className="text-base md:text-lg font-greek text-center leading-tight px-3 line-clamp-2 group-hover:scale-105 transition-all duration-300" 
                          style={{ color: '#933100' }}>
                      {item.title}
                    </span>
                  </div>
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