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

import angka_11 from "!assets/filosofi-pilar/angka 11 abu2.png";
import perisai_yunani from "!assets/filosofi-pilar/perisai hitam.png";
import helm_sparta from "!assets/filosofi-pilar/helm sparta.png";
import ornamen_lampung from "!assets/filosofi-pilar/ornamen lampung.png";
import pedang_kebawah from "!assets/filosofi-pilar/pedang kebawah.png";
import logoPplk from "!assets/logo-pplk-hd.png";

const DataFilosofiLogo = [
  {
    image: angka_11,
    title: "ANGKA 11",
    description:
    "Menandakan bahwa tahun ini merupakan Tahun ke-11 ITERA sudah berdiri. Sebuah penanda perjalanan panjang dalam membentuk karakter awal para mahasiswa baru.",
  },
  {
    image: perisai_yunani,
    title: "PERISAI YUNANI",
    description: "Merupakan ciri khas dari perisai Yunani Kuno yang menjadi tema utama PPLK tahun ini. Bentuk V juga melambangkan victory (kemenangan), sejalan dengan semangat juang dan keberhasilan yang diharapkan dari para peserta.",
  },
  {
    image: helm_sparta,
    title: "HELM SPARTA",
    description: "Melambangkan keberanian, disiplin, dan semangat juang para Satriya ITERA. Helm ini menjadi simbol kesiapan menghadapi tantangan serta keteguhan hati dalam menjunjung nilai-nilai integritas.",
  },
  {
    image: ornamen_lampung,
    title: "ORNAMEN LAMPUNG",
    description: "Menggambarkan akar budaya lokal yang kuat, ukiran ini melambangkan ketegasan dan keseimbangan. Sebuah refleksi bahwa dalam keberagaman, mahasiswa ITERA tetap menjunjung nilai harmoni dan karakter yang kokoh.",
  },
  {
    image: pedang_kebawah,
    title: "PEDANG KEBAWAH",
    description: "Menandakan kesiapan para peserta PPLK dalam menerima, menjalani, dan menghadapi seluruh proses kegiatan yang akan berlangsung. Pedang yang tertancap ke bawah juga merepresentasikan kedamaian dan tekad yang telah disiapkan.",
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
      <h2 className="font-greek sm:text-3xl text-candlelight-600 text-2xl">
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
            <div className="sm:gap-9 flex flex-col text-justify gap-5">
              <div className="flex gap-8">
                <div className="wajik w-8 h-8 bg-gradient-to-l from-[#ECB406] to-[#FDCE12]"></div>
                <p className="font-montserrat font-bold sm:text-[16px] text-[14px] sm:w-80 w-70">
                Warna emas menjadi simbol semangat mencapai tujuan luhur bagi mahasiswa baru sebagai generasi terpilih.
                </p>
              </div>
              <div className="flex gap-8">
                <div className="wajik w-8 h-8 bg-[#682300]"></div>
                <p className="font-montserrat font-bold sm:text-[16px] text-[14px] sm:w-80 w-70">
                Warna coklat menjadi simbol suasana hangat dan membumi sebagai landasan awal mahasiswa baru dalam tumbuh dan berkembang.
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

              <div className="flex max-w-[600px] flex-col items-center p-6 text-center text-black h-[300px]">
                <h2 className="font-greek sm:text-[39px] text-2xl text-black">
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
