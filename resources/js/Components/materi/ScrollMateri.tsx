import { Card, CardContent } from "../ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./CarouselMateri";
import { DialogMateri } from "./DialogMateri";

import { useState } from "react";

import { useAos } from "@/lib/hooks/useAos";
import { Materi } from "@/lib/types/Materi";

export function CarouselMateri({ materis }: { materis: Materi[] }) {
    const [openedIndex, setOpenedIndex] = useState(null);

    const handleCardClick = (index) => {
        setOpenedIndex(index);
    };

    function getBookletDriveId(materi: Materi) {
        const url = materi.link_materi;
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
                {materis.map((materi, index) => (
                    <CarouselItem
                        key={index}
                        className={`flex-shrink-0 basis-full sm:basis-1/3 transition duration-500 shadow-lg ${openedIndex !== null && openedIndex !== index ? "opacity-50" : "opacity-100"}`}
                        onClick={() => handleCardClick(index)}
                    >
                        <Card className="h-full rounded-none">
                            <CardContent className="overflow-hidden relative flex flex-col h-full p-0">
                                <div className="h-60 w-full bg-pattern-black">
                                    {getBookletDriveId(materi) ? (
                                        <img
                                            data-aos="fade-in"
                                            data-aos-duration="1500"
                                            src={`https://drive.google.com/thumbnail?authuser=0&sz=w320&id=${getBookletDriveId(materi)}`}
                                            alt="cover"
                                            className="object-cover h-full w-full"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-pattern-black grid place-content-center">
                                            <p className="text-white/50">
                                                {materi.nama_materi}
                                            </p>
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
                                            {materi.nama_materi}
                                        </h2>
                                    </div>

                                    <a
                                        target="_blank"
                                        href={materi.link_materi}
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
