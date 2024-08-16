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
      className="absolute z-20 px-2 -mt-[450px] flex min-h-screen w-full flex-col items-center justify-center bg-transparent xl:-mt-[500px]"
    >
      <h2 className="text-jaffa-950 font-avigea md:text-4xl text-3xl">
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
