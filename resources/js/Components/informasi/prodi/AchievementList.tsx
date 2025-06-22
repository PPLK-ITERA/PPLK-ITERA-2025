import React from "react";

import { Card } from "@/Components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";

import { Achievement } from "@/lib/types/ProgramStudi";

type Props = { achievements?: Achievement[] };

export default function AchievementList({ achievements }: Props) {
  return (
    <Carousel>
      <CarouselContent className="text-sm">
        {achievements
          ? achievements.map((a, i) => (
              <CarouselItem
                data-aos="fade-up"
                data-aos-duration={800}
                data-aos-delay={(i + 1) * 100}
                className="basis-full lg:basis-1/2 mt-2 mb-8 text-center"
              >
                <Card className="overflow-hidden">
                  <div className="flex h-64">
                    <div className="basis-3/5 place-content-center flex flex-col h-full gap-2 p-4 text-left">
                      <h5 className="text-xl font-medium">{a.title}</h5>
                      <p>{a.description}</p>
                    </div>

                    <img
                      src={a.imageUrl}
                      alt=""
                      className="basis-2/5 object-cover bg-gray-300"
                    />
                  </div>
                </Card>
              </CarouselItem>
            ))
          : null}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
