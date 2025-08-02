import React from "react";
import { useState } from "react";

import { Head } from "@inertiajs/react";

import DefaultLayout from "@/Layouts/DefaultLayout";

import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import { Button } from "@/Components/ui/button";
import CarouselDokumentasi from "@/Components/ui/carouseldokumentasi";
import PopupGaleri from "@/Components/ui/populargaleri";

import { useAos } from "@/lib/hooks/useAos";

import rulerIcon from "!assets/assets41.png";
import awanIcon from "!assets/awan.png";
import bgselengkapnya from "!assets/bgselengkapnya.png";
import cloudsIcon from "!assets/cloud.png";
import gunungIcon from "!assets/gunung-2.png";
import horseIcon1 from "!assets/kuda-1.png";
import horseIcon2 from "!assets/kuda-2.png";
import sunIcon from "!assets/sun.png";

function Page() {
  const [open, setOpen] = useState(false);
  useAos();
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      alt: "Gallery image 1",
      span: "col-span-2 row-span-2",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      alt: "Gallery image 2",
      span: "col-span-2 row-span-2 col-start-3",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=400&h=400&fit=crop",
      alt: "Gallery image 3",
      span: "row-span-2 col-start-5",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=300&h=300&fit=crop",
      alt: "Gallery image 4",
      span: "col-span-2 row-span-4 row-start-3",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400&h=300&fit=crop",
      alt: "Gallery image 5",
      span: "row-span-4 col-start-3 row-start-3",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236?w=300&h=400&fit=crop",
      alt: "Gallery image 6",
      span: "col-span-2 row-span-2 col-start-4 row-start-3",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=300&fit=crop",
      alt: "Gallery image 7",
      span: "col-span-2 row-span-2 col-start-4 row-start-5",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=600&h=300&fit=crop",
      alt: "Gallery image 8",
      span: "row-span-2 row-start-7",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=600&h=300&fit=crop",
      alt: "Gallery image 9",
      span: "col-span-2 row-span-2 row-start-7",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=600&h=300&fit=crop",
      alt: "Gallery image 10",
      span: "col-span-2 row-span-2 col-start-4 row-start-7",
    },
  ];

  return (
    <>
      <Head title="Dokumentasi" />
      <div className="bg-pattern-white flex flex-col min-h-screen">
        <DefaultLayout isSolid={true}>
          {/* Hero Section */}
          <section>
            {/* Background decorative clouds */}
            <div className="absolute inset-0">
              {/* Left side clouds */}
              <img
                src={cloudsIcon}
                alt="Decorative clouds"
                className="absolute w-44 h-24 top-36 rotate-180  sm:w-80 sm:h-36 sm:top-24 sm:left-3 sm:rotate-0       md:top-36 md:left-6 md:w-96 md:h-48   md:rotate-0"
              />
            </div>

            <div>
              {/* Right side clouds */}
              <img
                src={cloudsIcon}
                alt="Decorative clouds"
                className="absolute w-44 h-24 right-6 top-24   sm:w-80 sm:h-36  sm:top-24 sm:right-30  md:w-96 md:h-48  md:top-24 md:right-20"
              />
            </div>

            <div className="mb-6">
              {/* Sun */}
              <img
                src={sunIcon}
                alt="PPLK ITERA Sun Logo"
                className="absolute top-16 w-40 h-40 sm::w-48 sm:h-40 md:w-64 md:h-64 md:top-14 md:left-24"
              />
            </div>

            {/* title */}
            <div className="mt-32 relative z-10 flex flex-col items-center justify-start flex-grow h-full p-2 text-center">
              <h1
                data-aos="fade-down"
                data-aos-duration="1500"
                className="text-3xl sm:text-4xl md:text-6xl font-greek bg-gradient-to-t text-orange-800 leading-7"
              >
                Dokumentasi PPLK-ITERA
              </h1>
              <p
                data-aos="fade-down"
                data-aos-duration="1500"
                className="text-base sm:text-xl md:text-2xl font-montserrat font-medium text-orange-800 mb-8 max-w-4xl leading-normal"
              >
                Pengabadian momen acara PPLK-ITERA <br />
                selama berlangsung
              </p>
            </div>
            <MaxWidthWrapper>
              <CarouselDokumentasi />
            </MaxWidthWrapper>
          </section>

          <section className="bg-[#EA7032] bg-pattern-white  ">
            <div
              className="relative  w-full h-[500px]  sm:h-[540px] md:h-[1000px] flex items-center justify-center"
              style={{
                backgroundImage: `url(${bgselengkapnya})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="text-center z-20">
                <h2 className="text-2xl font-normal sm:text-5xl md:text-6xl font-greek text-orange-800 mb-8 leading-[54.90px] tracking-wider">
                  MAU LIAT SELENGKAPNYA ?
                </h2>
                <Button
                  size="sm"
                  className="px-8 py-4 bg-gradient-to-br from-orange-700 to-amber-950 rounded-[10px] shadow-[2px_2px_4px_2px_rgba(0,0,0,0.25)] inline-flex justify-center items-center"
                  onClick={() => setOpen(true)}
                >
                  Load More
                </Button>
              </div>
            </div>

            <div className="relative w-full h-[72px] md:h-[300px]">
              {/* Gunung */}
              <img
                src={gunungIcon}
                alt="PPLK ITERA Mountain"
                className="absolute -top-10 left-0  md:left-0 w-[384px] md:top-0  md:w-[600px] h-auto"
              />

              {/* Kuda-1 */}
              <img
                src={horseIcon1}
                alt="horse icon 1"
                className="absolute bottom-[80px] right-[100px] md:w-36 w-[80px] h-auto"
              />

              {/* Kuda-2 */}
              <img
                src={horseIcon2}
                alt="horse icon 2"
                className="absolute bottom-[80px] right-[300px] md:w-44 w-[80px] h-auto"
              />

              {/* Ruler */}
              <img
                src={rulerIcon}
                alt="ruler"
                className="absolute  bottom-[2px]  left-0 w-full h-auto md:bottom-[0px] md:h-16 z-10"
              />

              {/* Awan */}
              <img
                src={awanIcon}
                alt="awan"
                className="absolute left-0 w-full h-auto md-bottom-[100px] md:h-96 z-20"
              />
            </div>
          </section>
          {open && <PopupGaleri onClose={() => setOpen(false)} />}

          {/* Gallery Section */}
          <section className="py-16 relative bg-[#170C0A] -mt-1 bg-pattern-white">
            <div className="container mx-auto px-4">
              <h3 className="text-[20px] sm:text-[39px] md:text-[49px] font-greek text-center text-[#A6680C] mb-12 tracking-wider">
                KENANGAN PPLK-ITERA 2024
              </h3>

              <div className="grid grid-cols-5 grid-rows-8 gap-4 max-w-6xl mx-auto h-[800px]">
                {galleryImages.map((image) => (
                  <div
                    key={image.id}
                    className={`${image.span} rounded-lg overflow-hidden shadow-traditional hover:shadow-ornate transition-all duration-300 hover:scale-[1.02] cursor-pointer group`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </DefaultLayout>
      </div>
    </>
  );
}

export default Page;
