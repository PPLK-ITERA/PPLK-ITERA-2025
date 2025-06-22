import React from "react";

import { Head } from "@inertiajs/react";

import DefaultLayout from "@/Layouts/DefaultLayout";

import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import Header from "@/Components/informasi/pplk/Header";
import InfoPplk from "@/Components/informasi/pplk/InfoPplk";

import { useAos } from "@/lib/hooks/useAos";

import awan from "!assets/awan.png";
import elang from "!assets/elang-hero.png";

function Page() {
  useAos();

  return (
    <>
      <Head title="Tentang" />

      <div className="bg-pattern-white min-h-screen overflow-hidden">
        <DefaultLayout>
          <MaxWidthWrapper className="relative">
            <img
              src={elang}
              alt="elang"
              data-aos="fade-left"
              data-aos-duration="1000"
              className="absolute right-5 top-[20rem] hidden z-30 scale-75 md:right-10 md:top-28 lg:top-10 md:block md:w-1/3 md:scale-100 lg:w-1/3"
            />
          </MaxWidthWrapper>

          <div className="h-screen relative min-h-[40vh] bg-mobile-hero-background bg-cover bg-bottom md:h-full md:bg-desktop-hero-background lg:bg-desktop-hero-background">
            <Header />
          </div>

          <img
            src={awan}
            alt="awan"
            className="lg:-mt-52 md:-mt-20 md:visible absolute z-40 invisible w-full bg-cover"
            data-aos="fade-in"
            data-duration="3000"
          />

          <div className="relative">
            <div className="bg-gradient-to-b from-white/80 to-transparent absolute top-0 left-0 right-0 h-[500px]" />
          </div>

          <div className="md:pt-20 lg:pt-32 relative pt-24">
            <div className="font-avigea text-jaffa-600 sm:text-4xl sm:px-8 max-w-4xl mx-auto text-2xl text-center">
              <h2>PROGRAM PENGENALAN LINGKUNGAN KAMPUS ITERA 2024</h2>
              <h2>-- PPLK ITERA 2024 --</h2>
            </div>
          </div>

          <InfoPplk />
        </DefaultLayout>
      </div>
    </>
  );
}

export default Page;
