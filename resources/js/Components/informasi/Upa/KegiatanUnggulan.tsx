import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { Card, CardContent } from "@/Components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/Components/ui/carousel";
import {
  IconBrandInstagram,
  IconBrandTiktok,
  IconWorldWww,
  IconBrandYoutube,
} from "@tabler/icons-react";
import sponsor_overlay from "!assets/sponsor-overlay.png";

interface KegiatanUnggulanProps {
  kegiatanUnggulan: {
    title: string;
    description: string;
    tanggal: string;
    img: string;
  }[];
  link_instagram?: string;
  link_tiktok?: string;
  link_website?: string;
  link_youtube?: string;
}

export default function KegiatanUnggulan({
  kegiatanUnggulan,
  link_instagram,
  link_tiktok,
  link_website,
  link_youtube,
}: KegiatanUnggulanProps) {

  return (
    <div className="relative bg-pattern-white z-10">
      <div className="mx-auto text-center -translate-y-5">
        <div className="">
          <h2 className="font-greek text-black self-stretch p-5 text-5xl not-italic font-normal text-center">
            KEGIATAN UNGGULAN UPA
          </h2>
        </div>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="scroll-smooth max-w-[1920px] xl:pl-36 lg:pl-20 md:pl-10 relative w-full pl-5 mx-auto mt-20"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {kegiatanUnggulan.map((kegiatan, index) => (
            <CarouselItem
              key={index}
              className="basis-72 md:basis-80 xl:basis-[26rem] border-none"
            >
              <Card
                className={`xl:w-[400px] border-none md:w-[300px] lg:w-[310px] md:h-[550px] w-[280px] h-[500px] xl:h-[600px] overflow-hidden rounded-lg relative font-montserrat`}
              >
                <CardContent className="absolute top-0 z-20 p-4 text-white">
                  <p className="opacity-90 z-20">{kegiatan.tanggal}</p>
                </CardContent>

                <img
                  src={kegiatan.img}
                  alt=""
                  className="brightness-50 absolute top-0 object-cover w-full h-full"
                />

                <CardContent className="absolute min-h-[180px] w-full lg:min-h-[200px] bottom-0 p-4 mx-auto bg-white border">
                  <h3 className="font-bold text-[12px] lg:text-[14px] xl:text-[16px]">
                    {kegiatan.title}
                  </h3>

                  <p className="mt-5 text-[10px] lg:text-[12px]">
                    {kegiatan.description}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <img
        src={sponsor_overlay}
        alt="sponsor_overlay"
        className="w-full mt-10"
      />

      {/* Komponen Sosial Media dipindahkan dari KepalaUPT.tsx*/}
    
      <div className="flex items-center justify-center gap-5 mt-12 mb-12">
          {link_instagram ? (
            <a
              href={link_instagram}
              target="_blank"
              rel="noreferrer"
              className="relative w-16 h-16 flex items-center justify-center"
            >
              {/* Frame putih */}
              <div className="absolute w-[70px] h-[70px] bg-white rounded-xl z-[-1]" />

              {/* Persegi */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#3C1D03] to-[#933100] z-0 rounded-xl" />

              {/* Lingkaran besar*/}
              <div className="absolute w-14 h-14 rounded-full bg-gradient-to-b from-[#633005] to-[#682300] z-1" />

              {/* Lingkaran kecil*/}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 p-[1px] rounded-full bg-gradient-to-b from-[#682300] to-[#FFF1EB] z-2">
                {/* isi lingkaran kecil */}
                <div className="w-full h-full rounded-full bg-gradient-to-b from-[#3C1D03] to-[#933100]" />
              </div>


              {/* Logo */}
              <IconBrandInstagram size={40} color="white" className="z-10 w-8 h-8" />
            </a>
          ) : null}

          {link_tiktok ? (
            <a
              href={link_tiktok}
              target="_blank"
              rel="noreferrer"
              className="relative w-16 h-16 flex items-center justify-center"
            >
              {/* Frame putih */}
              <div className="absolute w-[70px] h-[70px] bg-white rounded-xl z-[-1]" />

              {/* Persegi */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#3C1D03] to-[#933100] z-0 rounded-xl" />

              {/* Lingkaran besar*/}
              <div className="absolute w-14 h-14 rounded-full bg-gradient-to-b from-[#633005] to-[#682300] z-1" />

              {/* Lingkaran kecil*/}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 p-[1px] rounded-full bg-gradient-to-b from-[#682300] to-[#FFF1EB] z-2">
                {/* isi lingkaran kecil */}
                <div className="w-full h-full rounded-full bg-gradient-to-b from-[#3C1D03] to-[#933100]" />
              </div>

              {/* Logo */}
              <IconBrandTiktok size={40} color="white" className="z-10 w-8 h-8" />
            </a>
          ) : null}

            {link_website ? (
            <a
              href={link_website}
              target="_blank"
              rel="noreferrer"
              className="relative w-16 h-16 flex items-center justify-center"
            >
              {/* Frame putih */}
              <div className="absolute w-[70px] h-[70px] bg-white rounded-xl z-[-1]" />

              {/* Persegi */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#3C1D03] to-[#933100] z-0 rounded-xl" />

              {/* Lingkaran besar*/}
              <div className="absolute w-14 h-14 rounded-full bg-gradient-to-b from-[#633005] to-[#682300] z-1" />

              {/* Lingkaran kecil*/}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 p-[1px] rounded-full bg-gradient-to-b from-[#682300] to-[#FFF1EB] z-2">
                {/* isi lingkaran kecil */}
                <div className="w-full h-full rounded-full bg-gradient-to-b from-[#3C1D03] to-[#933100]" />
              </div>

              {/* Logo */}
              <IconWorldWww size={40} color="white" className="z-10 w-8 h-8" />
            </a>
            ) : null}
            
          {link_youtube ? (
            <a
              href={link_youtube}
              target="_blank"
              rel="noreferrer"
              className="relative w-16 h-16 flex items-center justify-center"
            >

              {/* Frame putih */}
              <div className="absolute w-[70px] h-[70px] bg-white rounded-xl z-[-1]" />

              {/* Persegi */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#3C1D03] to-[#933100] z-0 rounded-xl" />

              {/* Lingkaran besar*/}
              <div className="absolute w-14 h-14 rounded-full bg-gradient-to-b from-[#633005] to-[#682300] z-1" />

              {/* Lingkaran kecil*/}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 p-[1px] rounded-full bg-gradient-to-b from-[#682300] to-[#FFF1EB] z-2">
                {/* isi lingkaran kecil */}
                <div className="w-full h-full rounded-full bg-gradient-to-b from-[#3C1D03] to-[#933100]" />
              </div>

              {/* Logo */}
              <IconBrandYoutube size={40} color="white" className="z-10 w-8 h-8" />
            </a>
          ) : null}
      </div>
    </div>
  );
}
