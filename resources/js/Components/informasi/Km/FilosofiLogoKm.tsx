import "../../../../css/app.css";
import { Card, CardContent } from "../../ui/card";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "../../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import React from "react";

import alas_filosofi from "!assets/alas-filosofi.png";
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
        description: "Helai Daun memiliki arti Keteduhan dan Kesejukan",
    },
    {
        image: km,
        description: "Angka 10 mengartikan 1 dekade PPLK ITERA",
    },
    {
        image: kmPink,
        description:
            "4 Pilar SDGs sebagai pondasi dasar dari tujuan keseluruhan acara PPLK ITERA 2024",
    },
    {
        image: sarjana,
        description:
            "Pulau Sumatera merepresentasikan tempat dimana Kampus ITERA berdiri dan akan menciptakan manusia terbaik di Indonesia",
    },
    {
        image: swarnabumi,
        description:
            "Tetes Air merepresentasikan bukti dari proses dalam mencapai Indonesia Emas 2045",
    },
    {
        image: tangan,
        description:
            "Naungan Tangan memiliki arti PPLK ITERA menjadi naungan untuk mahasiswa baru mengenal lingkungan Kampusnya",
    },
    {
        image: teleskop,
        description:
            "Biji Emas merepresentasikan keberhasilan Indonesi Emas 2045",
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
            <div className="relative -mt-5 flex h-full flex-col items-center bg-[#170C0A] bg-pattern-white pt-[250px] md:pt-[500px]">
                <h2 className="font-avigea text-jaffa-300 text-4xl">
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
                    className="z-20 w-[80%]"
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
                                            className={`inverted-pentagon flex flex-col items-center justify-center p-6 text-center text-white bg-white ${current === index + 1 ? "scale-100" : "scale-75"} transition-transform duration-300 ease-in-out w-[374px] h-[608px]`}
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
