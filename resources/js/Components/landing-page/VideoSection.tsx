import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/landing-page/carouselMaskot";

import { VideoPPLK } from "@/lib/data/landing-page";
import { useAos } from "@/lib/hooks/useAos";

export default function VideoSection() {
  useAos();

  return (
    <div
      data-aos="slide-up"
      data-aos-duration={2000}
      className="relative z-20 py-44 px-2 flex min-h-screen w-full flex-col items-center justify-center bg-transparent"
    >
      <h2 className="text-jaffa-950 font-greek md:text-[75px] text-3xl mb-20">
        Video PPLK
      </h2>

      <Carousel className="xl:max-w-4xl md:max-w-xl lg:max-w-2xl relative max-w-xl">
        <CarouselContent>
          {VideoPPLK.map((video, index) => (
            <CarouselItem key={index}>
              <div className="mx-auto flex h-full w-full overflow-hidden items-center justify-center rounded-[24px] bg-jaffa-600 shadow-xl aspect-video shadow-candlelight-950">
                {video.embed}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="md:mt-0 mt-24" />
        <CarouselNext className="md:mt-0 mt-24" />
      </Carousel>
    </div>
  );
}
