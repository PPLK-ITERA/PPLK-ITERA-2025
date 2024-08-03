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

import { Button } from "@/Components/ui/button";

import { useAos } from "@/lib/hooks/useAos";
import { Booklet } from "@/lib/types/Booklet";

export function CarouselBooklet({ booklets }: { booklets: Booklet[] }) {
    const [openedIndex, setOpenedIndex] = useState(null);

    const handleCardClick = (index) => {
        setOpenedIndex(index);
    };

    function getBookletDriveId(booklet: Booklet) {
        // https://drive.google.com/file/d/1uNmh-M9ZOQ23ahm0Zmr8Xcahw7XjM8mj/view?usp=sharing
        // extract the id from the url

        const url = booklet.url_booklet;
        const id = url.split("/").at(5);
        return id;
    }

    useAos();

    return (
        <Carousel
            opts={{
                align: "center",
            }}
            className="w-4/5 max-w-6xl mx-auto"
        >
            <CarouselContent className="flex">
                {booklets.map((booklet, index) => (
                    <CarouselItem
                        key={index}
                        className={`flex-shrink-0 basis-full sm:basis-1/3 transition duration-500 shadow-lg ${openedIndex !== null && openedIndex !== index ? "opacity-50" : "opacity-100"}`}
                        onClick={() => handleCardClick(index)}
                    >
                        <Card className="h-full rounded-none">
                            <CardContent className="overflow-hidden relative flex flex-col h-full p-0">
                                <div className="h-60 w-full bg-pattern-black">
                                    {getBookletDriveId(booklet) ? (
                                        <img
                                            data-aos="fade-in"
                                            data-aos-duration="1500"
                                            src={`https://drive.google.com/thumbnail?authuser=0&sz=w320&id=${getBookletDriveId(booklet)}`}
                                            alt="cover"
                                            className="object-cover h-full w-full"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-pattern-black grid place-content-center">
                                            <p className="text-white/50">{booklet.nama_booklet}</p>
                                        </div>
                                    )}
                                </div>
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration="1500"
                                    className="flex items-center justify-between flex-grow m-2 border-t-2 border-gray-400/30 px-2 py-6"
                                >
                                    <div>
                                        <h2 className="text-left text-xl font-semibold text-candlelight-700">
                                            {booklet.nama_booklet}
                                        </h2>
                                    </div>

                                    <a
                                        target="_blank"
                                        href={booklet.url_booklet}
                                        className="bg-gradient-to-r from-[#B9822F] to-[#A6680C] font-montserrat text-[14px] text-white hover:text-white focus:text-white shadow hover:shadow-lg p-2 px-4 rounded transition"
                                    >
                                        Lihat
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="w-10 h-10" />
            <CarouselNext className="w-10 h-10" />
        </Carousel>
    );
}
