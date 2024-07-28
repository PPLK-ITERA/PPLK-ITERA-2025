import Autoplay from "embla-carousel-autoplay";

import React from "react";

import { Card, CardContent } from "@/Components/ui/card";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/Components/ui/carousel";

import { DataFilosofiLogo } from "@/lib/data/data";

import alas_filosofi from "!assets/alas-filosofi.png";

export default function FilosofiLogo() {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <div className="relative -mt-5 flex h-full flex-col items-center bg-[#170C0A] bg-pattern-white pt-[250px] md:pt-[500px]">
            <h2 className="text-jaffa-300 font-avigea md:text-4xl text-3xl">
                Filosofi Logo PPLK
            </h2>

            <Carousel
                opts={{
                    align: "center",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 3000,
                    }),
                ]}
                setApi={setApi}
                className="z-20 w-full max-w-[1440px]"
            >
                <CarouselContent>
                    {DataFilosofiLogo.map((data, index) => (
                        <CarouselItem
                            key={index}
                            className="md:basis-1/2 lg:basis-1/3"
                        >
                            <div className="p-1">
                                <Card className="bg-transparent border-none">
                                    <CardContent className="aspect-square flex flex-col items-center justify-center p-6 text-center text-white">
                                        <img
                                            src={data.image}
                                            alt={data.title}
                                            className={`${current === index + 1 ? "scale-100" : "scale-50 grayscale"} transition-transform duration-300 ease-in-out`}
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {DataFilosofiLogo.map((data, index) => (
                <>
                    {current === index + 1 ? (
                        <>
                            <img
                                src={alas_filosofi}
                                alt="alas_filosofi"
                                className="-mt-28 md:-mt-40 bg-cover"
                            />

                            <div className="flex min-h-[300px] max-w-[600px] flex-col items-center p-6 text-center text-white md:h-[250px] lg:h-[300px]">
                                <h2 className="font-avigea md:text-4xl text-2xl text-white">
                                    {data.title}
                                </h2>

                                <p className="mt-10 font-montserrat text-[16px] font-normal text-white/80 md:text-2xl">
                                    {data.description}
                                </p>
                            </div>
                        </>
                    ) : null}
                </>
            ))}
        </div>
    );
}
