import React from "react";

import { Card } from "@/Components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";

import { ProdiActivities } from "@/lib/types/ProgramStudi";

import kegiatandefault from "!assets/logoprodi/kegiatandefault.jpg";

type Props = { prodiActivities:ProdiActivities [] };

export default function prodiActivity({ prodiActivities }: Props) {
  return (
    <Carousel>
      <CarouselContent className="p-4 text-sm">
        {prodiActivities.map((a, i) => (
          <CarouselItem
            data-aos="fade-up"
            data-aos-duration={800}
            data-aos-delay={(i + 1) * 100}
            className="basis-full lg:basis-1/3 hover:scale-105 mt-2 mb-8 text-center transition duration-300"
          >
            <Card className="min-h-[550px] overflow-hidden border-0 rounded-lg">
              <div className="flex flex-col">
                <div className="h-96 relative">
                  <div className="bg-gradient-to-br from-black/70 via-transparent to-transparent absolute top-0 left-0 w-full h-full"></div>

                  <div className="absolute top-0 left-0 w-full h-full p-4 text-left text-white">
                    <h5 className="line-clamp-4 w-2/3 text-lg font-semibold">
                      {a.description}
                    </h5>
                  </div>

                  <div className="absolute h-full object-cover top-0 left-0 overflow-hidden">
                    <img
                      src={a.documentation ? a.documentation : kegiatandefault}
                      alt={a.title}
                      className="object-cover w-full h-full bg-gray-300"
                    />
                  </div>
                </div>

                <div className="basis-3/5 place-content-center flex flex-col h-full p-4 text-left">
                  <h5 className="text-xl font-medium">{a.title}</h5>

                  <p className="line-clamp-3">{a.description}</p>
                </div>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}