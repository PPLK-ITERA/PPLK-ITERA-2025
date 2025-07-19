import React from "react";
import { useEffect, useState } from "react";

import { Head } from "@inertiajs/react";

import Footer from "@/Components/Footer";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import NavHero from "@/Components/NavHero";
import FilosofiLogo from "@/Components/landing-page/FilosofiLogo";
import InfoSection from "@/Components/landing-page/InfoSection";
import Maskot from "@/Components/landing-page/Maskot";
import Panduan from "@/Components/landing-page/Panduan";
import Sponsorship from "@/Components/landing-page/Sponsorship";
import VideoSection from "@/Components/landing-page/VideoSection";
import What from "@/Components/landing-page/What";
import { Button } from "@/Components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";
import { Dialog, DialogContent } from "@/Components/ui/dialog";

import { useAos } from "@/lib/hooks/useAos";

import bronzemedal from "!assets/bronzemedal.png";
import bukit from "!assets/bukit.png";
import elang from "!assets/elang-hero.png";
import goldmedal from "!assets/goldmedal.png";
import overlay_earth from "!assets/overlay-earth.png";
import pillar_brown2 from "!assets/pillar-brown2.png";
import silvermedal from "!assets/silvermedal.png";
import sponsor_overlay from "!assets/sponsor-overlay.png";

export default function LandingPage() {
  const dataJuara = [
    {
      title: "kelompok 30",
      link: "//www.tiktok.com/@gandhetrida_130/video/7401871592940162310?_r=1&_t=8omkbw2PuvA",
      description: "juara 1",
      img: goldmedal,
    },
    {
      title: "kelompok 36",
      link: "//www.tiktok.com/@arculus.36/video/7401153500958313734?_t=8okJeIvoqCG&_r=1",
      description: "juara 2",
      img: silvermedal,
    },
    {
      title: "kelompok 58",
      link: "https://www.tiktok.com/@_ceppppppp/video/7401828392716356869?_r=1&_t=8omY3kS0aFW",
      description: "juara 3",
      img: bronzemedal,
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const storedVisibility = localStorage.getItem("is-visible");

    if (storedVisibility === "false") {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, []);

  const handleCloseShow = () => {
    localStorage.setItem("is-visible", "false");
    setIsVisible(false);
  };

  useAos();

  return (
    <>
      <Head title="Beranda">
        <meta
          name="description"
          content="Program Pengenalan Lingkungan Kampus (PPLK) 2024 di Institut Teknologi Sumatera adalah kegiatan orientasi yang dirancang untuk membantu mahasiswa baru mengenal lingkungan kampus, nilai-nilai akademik, serta budaya di ITERA. Program ini memberikan kesempatan bagi para mahasiswa untuk beradaptasi dengan kehidupan kampus, memahami fasilitas yang tersedia, dan membangun koneksi dengan sesama mahasiswa serta dosen. PPLK 2024 diharapkan dapat menjadi fondasi yang kuat bagi mahasiswa baru untuk memulai perjalanan akademik mereka dengan percaya diri dan semangat."
        />
        <meta property="og:title" content="Beranda - PPLK 2024" />
        <meta property="og:url" content="https://pplkitera.com/" />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://pplkitera.com/" />
      </Head>

      <div className="scrollbar-hide relative overflow-hidden">
        <MaxWidthWrapper className="relative">
          <img
            src={elang}
            alt="elang"
            data-aos="fade-left"
            data-aos-duration="1000"
            className="absolute right-1 hidden top-[25rem] z-30 md:right-10 md:top-28 lg:top-20 md:block md:w-1/3 md:scale-100 lg:w-1/3"
          />
        </MaxWidthWrapper>

        <NavHero />

        <div className="bg-pattern-white relative">
          <div className="bg-gradient-to-b from-white/80 to-transparent absolute top-0 left-0 right-0 h-[500px]" />

          <MaxWidthWrapper>
            <What />
            <Panduan />
          </MaxWidthWrapper>
          <div className="relative max-w-10xl mx-auto">
            <img
              src={bukit}
              alt="Dekorasi Bukit"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-auto z-10"
            />
            <img
              src={overlay_earth}
              alt="Pilar Kiri"
              className="absolute bottom-0 left-0 w-[50%] max-w-xl h-auto  hidden md:block z-2 "
            />
            <img
              src={overlay_earth}
              alt="Pilar Kanan"
              className="scale-x-[-1] absolute bottom-0 right-0 w-[50%] max-w-xl h-auto hidden md:block z-3 "
            />
            <div className="relative z-30">
              <VideoSection />
            </div>
            
          </div>
        </div>

        <div className="relative bg-pattern-brown">
          <MaxWidthWrapper className="z-30">
            <FilosofiLogo />
            <Maskot />
          </MaxWidthWrapper>
        </div>

        <div className="bg-pattern-white pt-40 pb-20">
          <InfoSection />
          <img
            src={pillar_brown2}
            alt="pillar_brown2"
            className="absolute bottom-0 -left-[780px] w-[80%] h-auto z-0 hidden md:block mb-[2850px]"
          />{" "}
        </div>

        <div className="h-[10px] w-full bg-candlelight-600" />

        <div data-aos="fade-up" data-aos-duration={1000}>
          <Sponsorship />
        </div>

        <img
          data-aos="fade-up"
          data-aos-duration={1000}
          src={sponsor_overlay}
          alt="sponsor_overlay"
          className="object-cover w-full"
        />

        <Footer />
      </div>

      {isVisible ? (
        <Dialog defaultOpen={isVisible}>
          <DialogContent className="w-[90%] mx-auto bg-[url(!assets/alert.png)] bg-center bg-cover aspect-square md:h-4/5 flex justify-center items-center flex-col">
            <div className="overflow-hidden min-h-[200px] md:min-h-none">
              <Carousel className="w-[60%] mx-auto flex justify-center backdrop-blur-lg mt-20">
                <CarouselContent>
                  {dataJuara.map((item, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <div className="aspect-square flex items-center justify-center p-6">
                          <div className="text-center">
                            <div className="w-[50%] h-[50%] mx-auto">
                              <img src={item.img} alt={item.title} />
                            </div>

                            <div className="font-avigea md:text-3xl text-xl font-bold text-white">
                              {item.description} Diretra
                            </div>

                            <div className="font-avigea text-black-600 md:text-xl mt-2 text-lg font-semibold underline">
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Lihat Video
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselNext />
                <CarouselPrevious />
              </Carousel>
            </div>

            <div className="bottom-2 left-2 absolute">
              <Button
                className="flex px-2 py-3 text-sm text-white border rounded-lg"
                onClick={() => handleCloseShow()}
                size={"sm"}
              >
                Jangan Tampilkan Lagi
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      ) : null}
    </>
  );
}
