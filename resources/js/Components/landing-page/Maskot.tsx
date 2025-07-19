import React from "react";

import { Link } from "@inertiajs/react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/CarouselMaskot";

import { useAos } from "@/lib/hooks/useAos";

import maskot_pplk_man from "!assets/maskot/maskot-pplk-man.png";
import maskot_pplk_woman from "!assets/maskot/maskot-pplk-woman.png";

export default function Maskot() {
  useAos();

  return (
    <div
      data-aos="fade-up"
      data-aos-duration={1000}
      className="flex min-h-[100vh] flex-col-reverse items-center justify-center gap-10 pb-20 md:flex-row md:gap-0 md:pb-10 lg:pb-0 z-30"
    >
      <div className="md:w-[50%] md:items-start md:text-left lg:w-3/5 z-30 flex flex-col items-center justify-center w-full px-10 text-center -right-44">
        <h2 className="font-greek md:text-2xl lg:text-4xl z-30 w-full text-xl text-white ml-44">
          Kenalan Sama
          <br />
          Maskot PPLK 2024!
        </h2>

        <p className="mt-5 font-montserrat text-[16px] font-normal text-white/80 md:text-lg lg:max-w-[80%] lg:text-2xl z-30 ml-44">
          Hai, Aku Cephabel, Maskot PPLK 2023 Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Suspendisse non porta dolor. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Fusce congue ac elit
          non sollicitudin. Aenean dictum ultricies massa, non tristique nunc.
        </p>

        <Link
          href="/informasi/maskot"
          className="mt-10 rounded-[6px] bg-gradient-to-t from-[#A6680C] to-[#B9822F] px-4 py-[10px] font-montserrat text-[16px] font-semibold text-white shadow-sm z-40 ml-44"
        >
          Informasi Maskot &#x2192;
        </Link>
      </div>

      <div className="md:w-[50%] z-30 lg:w-2/5 items-center justify-center w-full h-full text-white">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="relative mx-auto w-[320px] z-30 sm:w-3/4 pt-5"
        >
          <CarouselContent>
            <CarouselItem>
              <div className="md:flex-row basis-full flex flex-col w-full">
                <div className="flex justify-center max-md:w-[50%] mx-auto">
                  <img
                    src={maskot_pplk_man}
                    alt="kanaka"
                    className="w-full h-full bg-no-repeat bg-contain"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  />
                </div>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="md:flex-row basis-full flex flex-col w-full">
                <div className="flex justify-center max-md:w-[50%] mx-auto">
                  <img
                    src={maskot_pplk_woman}
                    alt="calandra"
                    className="w-full h-full bg-no-repeat bg-contain"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  />
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious className="-left-5 md:-left-5 z-30" />
          <CarouselNext className="-right-5 md:-right-5 z-30" />
        </Carousel>
      </div>
    </div>
  );
}
