import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/CarouselMaskot";
import { Card, CardContent } from "@/Components/ui/card";

import maskot_pplk_man from "!assets/maskot/maskot-pplk-man.png";
import maskot_pplk_woman from "!assets/maskot/maskot-pplk-woman.png";

const maskots = [
  {
    h2: "Hai! Aku,",
    h1: "Chapabel",
    description: "Hai, Aku Cephabel, Maskot PPLK ITERA 2024!",
    imageSrc: maskot_pplk_man,
  },
  {
    h2: "Hai! Aku,",
    h1: "Chapabel",
    description: "Hai, Aku Cephabel, Maskot PPLK ITERA 2024!",
    imageSrc: maskot_pplk_woman,
  },
];

export function CarouselMaskot() {
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="relative mx-auto w-[320px] sm:w-3/4 pt-5"
    >
      <CarouselContent>
        {maskots.map((maskot, index) => (
          <CarouselItem key={index}>
            <div
              className={`basis-full flex flex-col w-full ${index === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
            >
              <div className="flex justify-center">
                <img
                  src={maskot.imageSrc}
                  alt={maskot.h1}
                  className="w-[270px] md:w-[300px] bg-contain bg-no-repeat"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                />
              </div>

              <div className="flex-1">
                <Card className="h-full py-10 bg-transparent border-none rounded-none">
                  <CardContent
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className={`flex flex-col p-2 ${index === 0 ? "items-end" : "items-start"}`}
                  >
                    <h2 className="font-avigea mb-2 text-4xl">{maskot.h2}</h2>

                    <h1 className="font-avigea mb-6 text-6xl">{maskot.h1}</h1>

                    <p
                      className={`${index === 0 ? "text-right" : "text-left"} font-montserrat text-[16px] lg:text-2xl font-semibold"`}
                    >
                      {maskot.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious data-aos="zoom-in" data-aos-duration="1000" />
      <CarouselNext data-aos="zoom-in" data-aos-duration="1000" />
    </Carousel>
  );
}
