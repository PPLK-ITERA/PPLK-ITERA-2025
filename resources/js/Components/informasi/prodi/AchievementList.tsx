import React from "react";

import { Card } from "@/Components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";

import { User } from "@/lib/types/User";

type Props = { achievements: Achievement[] };

export default function AchievementList({ achievements }: Props) {
    return (
        <Carousel>
            <CarouselContent className="text-sm">
                {achievements.map((a, i) => (
                    <CarouselItem
                        data-aos="fade-up"
                        data-aos-duration={800}
                        data-aos-delay={(i + 1) * 100}
                        className="basis-full lg:basis-1/2 mt-2 mb-8 text-center"
                    >
                        <Card className="overflow-hidden">
                            <div className="flex h-64">
                                <div className="basis-3/5 h-full flex flex-col text-left gap-2 place-content-center p-4">
                                    <h5 className="font-medium text-xl">
                                        {a.title}
                                    </h5>
                                    <p>{a.description}</p>
                                </div>
                                <img
                                    src={a.imageUrl}
                                    alt=""
                                    className="bg-gray-300 object-cover basis-2/5"
                                />
                            </div>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
