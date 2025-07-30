import React from "react";

import { Head } from "@inertiajs/react";

import DefaultLayout from "@/Layouts/DefaultLayout";

import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import { Button } from "@/Components/ui/button";
import CarouselDokumentasi from "@/Components/ui/carouseldokumentasi";

import { useAos } from "@/lib/hooks/useAos";

import bgselengkapnya from "!assets/bgselengkapnya.png";
import cloudsIcon from "!assets/cloud.png";
import sunIcon from "!assets/sun.png";

function Page() {
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
                className="absolute top-12 left-6 w-30 h-19 opacity-100 animate-pulse"
              />
            </div>

            <div>
              {/* Right side clouds */}
              <img
                src={cloudsIcon}
                alt="Decorative clouds"
                className="absolute top-12 right-6 w-30 h-19 opacity-100 animate-pulse"
              />
            </div>

            <div className="mb-6">
              <img
                src={sunIcon}
                alt="PPLK ITERA Sun Logo"
                className="absolute top-8 left-24 md:w-30 opacity-100 animate-pulse"
              />
            </div>

            {/* Main sun and title */}
            <div className="mt-32 relative z-10 flex flex-col items-center justify-start flex-grow h-full p-2 text-center">
              <h1
                data-aos="fade-down"
                data-aos-duration="1500"
                className="text-[30px] sm:text-[39px] md:text-[49px] font-greek bg-gradient-to-t from-[#A6680C] to-[#B9822F] bg-clip-text text-transparent w-fit mb-2"
              >
                Dokumentasi PPLK-ITERA
              </h1>

              <p
                data-aos="fade-down"
                data-aos-duration="1500"
                className="text-[16px] sm:text-[20px] font-montserrat font-[400] text-[#BE3F00] mb-8 max-w-4xl"
              >
                Pengabadian momen acara PPLK-ITERA <br />
                selama berlangsung
              </p>
            </div>
            <MaxWidthWrapper>
              <CarouselDokumentasi />
            </MaxWidthWrapper>
          </section>

          <section
            className="py-20 bg-gradient-to-b from-ornate-orange to-traditional-gold relative min-h-[1000px] flex items-center justify-center"
            style={{
              backgroundImage: `url(${bgselengkapnya})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center">
                <h2 className="text-[20px] sm:text-[39px] md:text-[49px] font-greek text-[#933100] mb-8 tracking-wider">
                  MAU LIAT SELENGKAPNYA ?
                </h2>
                <Button
                  size="lg"
                  className="bg-[#BE3F00]  hover:bg-traditional-brown/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-ornate transition-all duration-300 hover:scale-105"
                  onClick={() =>
                    window.open("https://drive.google.com", "_blank")
                  }
                >
                  Load More
                </Button>
              </div>
            </div>
          </section>

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
