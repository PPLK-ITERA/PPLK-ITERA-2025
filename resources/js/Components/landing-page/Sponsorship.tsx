import Autoplay from "embla-carousel-autoplay";

import React from "react";

import goodday from "!assets/logo-sponsor/goodday.png";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import { Card, CardContent } from "@/Components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/Components/ui/carousel";

import { data_media_partner, data_sponsor } from "@/lib/data/landing-page";

export default function Sponsorship() {
  return (
    <MaxWidthWrapper className="relative flex flex-col items-center w-full bg-white">
      <div className="relative flex flex-col items-center justify-center">
        <h2 className="mt-14 w-fit bg-gradient-to-r from-jaffa-700 to-jaffa-800 bg-clip-text font-greek md:mt-20 md:text-4xl lg:text-5xl text-wrap text-lg text-center text-transparent">
          Terimakasih Kepada Sponsor
        </h2>

        {/* Sponsor Logo */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
            direction: "ltr",
          }}
          className="scroll-smooth lg:mt-20 relative w-full mt-10"
          plugins={[
            Autoplay({
              delay: 1500,
            }),
          ]}
        >
          <CarouselContent>
            {data_sponsor.map((_, index) => (
              <CarouselItem
                key={index}
                className="md:min-h-[150px] min-w-[100px] min-h-[100px] md:min-w-[150px] basis-1/5"
              >
                <div className="p-1">
                  <Card className="overflow-hidden border-none shadow-none">
                    <CardContent className="aspect-square flex items-center justify-center w-full h-full p-0">
                      <img
                        src={_.src}
                        alt={_.name}
                        className={"object-cover w-1/2" + (_.src === goodday ? " w-[4000px]" : "")}
                      />
                    
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
      </div>

      <div className="relative flex flex-col items-center justify-center">
        <h2 className="mt-14 w-fit bg-gradient-to-r from-jaffa-700 to-jaffa-800 bg-clip-text font-greek md:mt-20 md:text-4xl lg:text-5xl text-wrap text-lg text-center text-transparent">
          Terimakasih Kepada Media Partner
        </h2>

        {/* Media Patrner Logo */}
        <Carousel
          className="scroll-smooth lg:mt-20 relative w-full mt-10"
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {data_media_partner.map((_, index) => (
              <CarouselItem
                key={index}
                className="md:min-h-[150px] min-w-[100px] min-h-[100px] md:min-w-[150px] basis-1/5 my-20"
              >
                <div className="p-1">
                  <Card className="overflow-hidden border rounded-full shadow-none">
                    <CardContent className="aspect-square flex items-center justify-center w-full h-full p-0">
                      <img
                        src={_.src}
                        alt={_.name}
                        className="object-contain w-[100px]"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute inset-0 flex justify-between">
            <div className="pointer-events-noneh h-full w-[50px] bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none h-full w-[50px] bg-gradient-to-l from-white to-transparent" />
          </div>
        </Carousel>
      </div>
    </MaxWidthWrapper>
  );
}
