import MaxWidthWrapper from "../../MaxWidthWrapper";
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
import pilar_sdgs from "!assets/filosofi-pilar/4-pilar-sgds.png";
import angka_10 from "!assets/filosofi-pilar/angka-10.png";
import biji_emas from "!assets/filosofi-pilar/biji-emas.png";
import helai_daun from "!assets/filosofi-pilar/helai-daun.png";
import naungan_tangan from "!assets/filosofi-pilar/naungan-tangan.png";
import pulau_sumatera from "!assets/filosofi-pilar/pulau-sumatera.png";
import tetes_air from "!assets/filosofi-pilar/tetes-air.png";
import logoPplk from "!assets/logo-pplk-hd.png";

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
    description: "Biji Emas merepresentasikan keberhasilan Indonesi Emas 2045",
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
      <h2 className="font-avigea sm:text-3xl text-candlelight-600 text-2xl">
        FILOSOFI LOGO
      </h2>
      <div className="flex"></div>
      <MaxWidthWrapper className="relative flex items-center justify-center">
        <div className="max-md:flex-col md:gap-0 flex items-center justify-center gap-20 mt-10">
          <img
            src={logoPplk}
            alt="pplk-logo"
            width={390}
            height={390}
            className="flex items-center"
          />
          <div>
            <div className="sm:gap-9 flex flex-col gap-5">
              <div className="flex gap-8">
                <div className="wajik w-8 h-8 bg-gradient-to-l from-[#ECB406] to-[#FDCE12]"></div>
                <p className="font-montserrat font-bold sm:text-[16px] text-[14px] sm:w-80 w-70 text-center">
                  Warna emas melambangkan Keberuntungan & Kesuksesan
                </p>
              </div>
              <div className="flex gap-8">
                <div className="wajik w-8 h-8 bg-[#B6ADA4]"></div>
                <p className="font-montserrat font-bold sm:text-[16px] text-[14px] sm:w-80 w-70 text-center">
                  Warna silver melambangkan Modernitas & Teknologi
                </p>
              </div>
              <div className="flex gap-8">
                <div className="wajik w-8 h-8 bg-[#DA5B1C]"></div>
                <p className="font-montserrat font-bold sm:text-[16px] text-[14px] sm:w-80 w-70 text-center">
                  Warna orange melambangkan Semangat & Kreatifitas
                </p>
              </div>
              <div className="flex gap-8">
                <div className="wajik w-8 h-8 bg-[#00A3FF]"></div>
                <p className="font-montserrat font-bold sm:text-[16px] text-[14px] sm:w-80 w-70 text-center">
                  Warna biru melambangkan Kepercayaan & Inspirasi yang Luas
                </p>
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
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
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
                className="md:-mt-40 -mt-20 bg-cover"
              />

              <div className="flex max-w-[600px] flex-col items-center p-6 text-center text-black h-[300px]">
                <h2 className="font-avigea sm:text-[39px] text-2xl text-black">
                  {data.title}
                </h2>

                <p className="mt-10 font-montserrat sm:text-[25px] text-[16px] font-normal text-black">
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
