import React from "react";
import Autoplay from "embla-carousel-autoplay";
import alas_filosofi from "../../../../public/assets/alas-filosofi.png";
import helai_daun from "../../../../public/assets/filosofi-pilar/helai-daun.png";
import angka_10 from "../../../../public/assets/filosofi-pilar/angka-10.png";
import pilar_sdgs from "../../../../public/assets/filosofi-pilar/4-pilar-sgds.png";
import pulau_sumatera from "../../../../public/assets/filosofi-pilar/pulau-sumatera.png";
import tetes_air from "../../../../public/assets/filosofi-pilar/tetes-air.png";
import naungan_tangan from "../../../../public/assets/filosofi-pilar/naungan-tangan.png";
import biji_emas from "../../../../public/assets/filosofi-pilar/biji-emas.png";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselApi,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";

const DataFilosofiLogo = [
    {
        image: helai_daun,
        title: "Helai Daun",
        description: "Helai Daun memiliki arti Keteduhan dan Kesejukan",
    },
    {
        image: angka_10,
        title: "Angka 10",
        description: "Angka 10 mengartikan 1 dekade PPLK ITERA",
    },
    {
        image: pilar_sdgs,
        title: "4 Pilar SDG's",
        description:
            "4 Pilar SDGs sebagai pondasi dasar dari tujuan keseluruhan acara PPLK ITERA 2024",
    },
    {
        image: pulau_sumatera,
        title: "Pulau Sumatera",
        description:
            "Pulau Sumatera merepresentasikan tempat dimana Kampus ITERA berdiri dan akan menciptakan manusia terbaik di Indonesia",
    },
    {
        image: tetes_air,
        title: "Tetes Air",
        description:
            "Tetes Air merepresentasikan bukti dari proses dalam mencapai Indonesia Emas 2045",
    },
    {
        image: naungan_tangan,
        title: "Naungan Tangan",
        description:
            "Naungan Tangan memiliki arti PPLK ITERA menjadi naungan untuk mahasiswa baru mengenal lingkungan Kampusnya",
    },
    {
        image: biji_emas,
        title: "Biji Emas",
        description:
            "Biji Emas merepresentasikan keberhasilan Indonesi Emas 2045",
    },
];

export default function FilosofiLogo() {
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
        <div className="relative flex h-full flex-col items-center pt-[500px]">
            <h2 className="font-avigea text-4xl text-jaffa-300">
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
                className="z-20 w-full"
            >
                <CarouselContent>
                    {DataFilosofiLogo.map((data, index) => (
                        <CarouselItem
                            key={index}
                            className="md:basis-1/2 lg:basis-1/3"
                        >
                            <div className="p-1">
                                <Card className="border-none bg-transparent">
                                    <CardContent className="flex aspect-square flex-col items-center justify-center p-6 text-center text-white">
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
                                className="-mt-40 bg-cover"
                            />

                            <div className="flex h-[200px] max-w-[600px] flex-col items-center p-6 text-center text-white">
                                <h2 className="font-avigea text-4xl text-white">
                                    {data.title}
                                </h2>

                                <p className="mt-10 font-montserrat text-2xl font-normal text-white/80">
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
