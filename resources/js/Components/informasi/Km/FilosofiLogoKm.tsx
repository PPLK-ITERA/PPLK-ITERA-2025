import "../../../../css/app.css";
import { Card, CardContent } from "../../ui/card";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import React from "react";

import itera from "!assets/logokm/itera.png";
import kmPink from "!assets/logokm/km-tapi-pink.png";
import km from "!assets/logokm/km.png";
import sarjana from "!assets/logokm/sarjana.png";
import swarnabumi from "!assets/logokm/swarnabumi.png";
import tangan from "!assets/logokm/tangan.png";
import teleskop from "!assets/logokm/teleskop.png";

const DataFilosofiLogoKM = [
    {
        image: itera,
        description: "ap coba",
    },
    {
        image: km,
        description: "Hasil Akhir Logo KM ITERA",
    },
    {
        image: kmPink,
        description:
            "pink km yeah",
    },
    {
        image: sarjana,
        description:
            'Sebagai ikon yang melambangkan “Pendidikan dan Pengajaran”',
    },
    {
        image: swarnabumi,
        description:
            "Swarnabhumi merupakan pedoman yang menggambarkan motivasi, semangat dan tujuan dari KM-ITERA",
    },
    {
        image: tangan,
        description:
            "tangan pencuri",
    },
    {
        image: teleskop,
        description:
            "teleskop sherlock holmes",
    },
];

const FilosofiLogoKm = () => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [view, setView] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap() + 1);
        setView(true);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);
    return (
        <div className="pt-40">
            <div className="relative -mt-5 flex h-full flex-col items-center bg-[#170C0A] bg-pattern-white">
                <h2 className="font-avigea text-[49px] text-white">
                    FILOSOFI LOGO
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
                    className="z-20 w-[80%] mt-20"
                >
                    <CarouselContent>
                        {DataFilosofiLogoKM.map((data, index) => (
                            <CarouselItem
                                key={index}
                                className="md:basis-1/2 lg:basis-1/3"
                            >
                                <div className="flex items-center justify-center p-1">
                                    <Card className="bg-transparent border-none">
                                        <CardContent
                                            className={`rounded-md inverted-pentagon flex flex-col items-center justify-center p-6 text-center text-white bg-white ${current === index + 1 ? "scale-100" : "scale-75"} transition-transform duration-300 ease-in-out w-[374px] h-[608px]`}
                                        >
                                            <img
                                                src={data.image}
                                                alt={data.description}
                                                className=""
                                            />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselNext className="bg-transparent border-none text-white hover:bg-transparent hover:text-white" />
                    <CarouselPrevious className="bg-transparent border-none text-white hover:bg-transparent hover:text-white" />
                </Carousel>

                {DataFilosofiLogoKM.map((data, index) => (
                    <>
                        {current === index + 1 ? (
                            <>
                                <div className="flex min-h-[300px] max-w-[600px] flex-col items-center p-6 text-center text-white md:h-[250px] lg:h-[300px]">
                                    <p className="mt-10 font-montserrat text-[16px] font-normal text-white/80 md:text-2xl">
                                        {data.description}
                                    </p>
                                </div>
                            </>
                        ) : null}
                    </>
                ))}
            </div>
        </div>
    );
};

export default FilosofiLogoKm;
