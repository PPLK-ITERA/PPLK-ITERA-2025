import { Card, CardContent } from "../ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./CarouselBooklet";
import { DialogBooklet } from "./DialogBooklet";

import { useState } from "react";

export function CarouselBooklet() {
    const [openedIndex, setOpenedIndex] = useState(null);

    const handleCardClick = (index) => {
        setOpenedIndex(index);
    };

    return (
        <Carousel
            opts={{
                align: "center",
            }}
            className="w-4/5 max-w-6xl mx-auto"
        >
            <CarouselContent className="flex">
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem
                        key={index}
                        className={`flex-shrink-0 basis-full sm:basis-1/3 transition-opacity duration-500 ${openedIndex !== null && openedIndex !== index ? "opacity-50" : "opacity-100"}`}
                        onClick={() => handleCardClick(index)}
                    >
                        <Card className="h-full rounded-none">
                            <CardContent className="relative flex flex-col h-full pt-0 pl-0 pr-0">
                                <div className="absolute left-0 top-0 mt-1 flex h-[32px] w-[80px] items-center justify-center rounded-bl-[0px] rounded-br-[22px] rounded-tl-[0px] rounded-tr-[22px] bg-gradient-to-r from-[#74211A] to-[#DA3E312E]">
                                    <span className="text-center font-montserrat text-[16px] text-white">
                                        Day {index + 1}
                                    </span>
                                </div>
                                <div className="mb-4 h-60 w-full bg-[#D2D2D2]"></div>
                                <div className="flex items-center justify-between flex-grow m-2">
                                    <div>
                                        <h2 className="mb-12 text-left text-[20px] font-semibold text-candlelight-700">
                                            Booklet Motmazio
                                        </h2>
                                        <p className="font-montserrat text-moccaccino-800 mb-1 text-sm font-semibold text-left">
                                            {index === 0
                                                ? "Deadline"
                                                : "Segera"}
                                        </p>
                                        <p className="font-montserrat text-moccaccino-900 text-sm text-left">
                                            {index === 0
                                                ? "08 Agustus 2024"
                                                : ""}
                                        </p>
                                    </div>

                                    <div className="mr-2 mt-[80px]">
                                        <DialogBooklet />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="w-12 h-12" />
            <CarouselNext className="w-12 h-12" />
        </Carousel>
    );
}
