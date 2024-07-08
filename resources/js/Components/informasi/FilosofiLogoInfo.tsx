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
import MaxWidthWrapper from "../MaxWidthWrapper";
import logoPplk from "../../../../public/assets/logo-pplk-2024.png";

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
        <div className="relative -mt-96 flex h-full flex-col items-center pt-[500px]">
            <h2 className="font-avigea text-3xl text-candlelight-600">
                FILOSOFI LOGO
            </h2>
            <div className="flex"></div>
            <MaxWidthWrapper className="relative flex items-center justify-center" >
                <div className="flex items-center justify-center mt-10 gap-20">
                    <img                        
                        src={logoPplk}
                        alt="pplk-logo"
                        width={390}
                        height={390}
                        className="flex items-center"
                        />
                        <div>
                            <div className="flex flex-col gap-9">
                                <div className="flex gap-8">
                                    <div className="h-8 w-8 bg-gradient-to-l from-[#ECB406] to-[#FDCE12] rotate-45"></div>
                                    <p className="font-montserrat font-bold text-[16px] w-80 text-center">Warna emas melambangkan Keberuntungan & Kesuksesan</p>
                                </div>                                <div className="flex gap-8">
                                    <div className="h-8 w-8 bg-[#B6ADA4] rotate-45"></div>
                                    <p className="font-montserrat font-bold text-[16px] w-80 text-center">Warna silver melambangkan 
                                    Modernitas & Teknologi</p>
                                </div>
                                <div className="flex gap-8">
                                    <div className="h-8 w-8 bg-[#DA5B1C] rotate-45"></div>
                                    <p className="font-montserrat font-bold text-[16px] w-80 text-center">Warna orange melambangkan 
                                    Semangat & Kreatifitas</p>
                                </div>
                                <div className="flex gap-8">
                                    <div className="h-8 w-8 bg-[#00A3FF] rotate-45"></div>
                                    <p className="font-montserrat font-bold text-[16px] w-80 text-center">Warna biru melambangkan 
                                    Kepercayaan & Inspirasi yang Luas</p>
                                </div>
                            </div>
                        </div>
                </div>
             </MaxWidthWrapper>

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
                className="z-20 w-full mt-10"
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

                            <div className="flex max-w-[600px] flex-col items-center p-6 text-center text-black md:h-[250px] lg:h-[300px]">
                                <h2 className="font-avigea text-[39px] text-black">
                                    {data.title}
                                </h2>

                                <p className="mt-10 font-montserrat text-[25px] font-normal text-black">
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