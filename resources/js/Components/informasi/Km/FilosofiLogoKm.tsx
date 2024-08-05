import "../../../../css/app.css";
import Autoplay from "embla-carousel-autoplay";

import React from "react";

import { Card, CardContent } from "@/Components/ui/card";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";

import KMITERA from "!assets/logokm/KMITERA.png";
import Lup from "!assets/logokm/Lup.png";
import Swarna from "!assets/logokm/Swarna.png";
import Toga from "!assets/logokm/Toga.png";
import U from "!assets/logokm/U.png";
import ITERA from "!assets/logokm/itera.png";
import KM from "!assets/logokm/km.png";

const DataFilosofiLogoKM = [
    {
        image: ITERA,
        description:
            "Sebagai ikon yang melambangkan basis keberadaan ITERA dan sebagai ikon yang mengindikasikan terintegrasinya dengan lambang Institut Teknologi Sumatera",
    },
    {
        image: KM,
        description: "Logo KM ITERA",
    },
    {
        image: KMITERA,
        description:
            "Tulisan yang menunjukan identitas organisasi yang bernama KM ITERA Singkatan dari Keluaga Mahasiswa ITERA.",
    },
    {
        image: Toga,
        description:
            "Sebagai ikon yang melambangkan “Pendidikan dan Pengajaran”",
    },
    {
        image: Swarna,
        description:
            "Swarnabhumi merupakan pedoman yang menggambarkan motivasi, semangat dan tujuan dari KM-ITERA.",
    },
    {
        image: U,
        description: "Sebagai ikon yang melambangkan “Pengabdian Masyarakat”",
    },
    {
        image: Lup,
        description:
            "Sebagai ikon yang melambangkan “Penelitian dan Pengembangan”",
    },
];

const FilosofiLogoKm = () => {
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
        <div className="pt-40">
            <div className="relative -mt-5 flex h-full flex-col items-center bg-[#170C0A] bg-pattern-white">
                <h2 className="font-avigea md:text-5xl z-40 text-3xl text-center text-white">
                    FILOSOFI LOGO
                </h2>

                <Carousel
                    opts={{
                        align: "center",
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}
                    setApi={setApi}
                    className="z-20 w-[80%] mt-20"
                >
                    <CarouselContent>
                        {DataFilosofiLogoKM.map((data, index) => (
                            <CarouselItem
                                key={index}
                                className="basis-1/2 sm:basis-1/3 lg:basis-1/3"
                            >
                                <div className="flex items-center justify-center p-1">
                                    <Card className="bg-transparent border-none">
                                        <CardContent
                                            className={`rounded-xl inverted-pentagon flex flex-col items-center justify-center p-6 text-center text-white bg-white ${current === index + 1 ? "scale-100" : "scale-75"} transition-transform duration-300 ease-in-out xl:w-[374px] xl:h-[608px] w-[115px] h-[190px] lg:w-[250px] lg:h-[400px] md:w-[200px] md:h-[350px]`}
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

                    <CarouselNext className="hover:bg-transparent hover:text-white text-white bg-transparent border-none" />
                    <CarouselPrevious className="hover:bg-transparent hover:text-white text-white bg-transparent border-none" />
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
