"use client"

import type React from "react"
import { useEffect, useState } from "react"

import { Head } from "@inertiajs/react"

import DefaultLayout from "@/Layouts/DefaultLayout"
import gedung from "!assets/gedung-sponsor.png"

import MaxWidthWrapper from "@/Components/MaxWidthWrapper"
import { CarouselUkm } from "@/Components/informasi/Ukm/CarouselUkm"
import PaginationInformasi from "@/Components/informasi/Ukm/PaginationUkm"

import { ukmData } from "@/lib/data/ukm"
import { useAos } from "@/lib/hooks/useAos"

import ukmBackground from "!assets/ukm_background.png"
import ukmBingkai from "!assets/ukm_bingkai.png"
import ukmpintukiri from "!assets/ukmpintukiri.png"
import ukmpintukanan from "!assets/ukmpintukanan.png"
import ukmCenterBg from "!assets/ukm_center_bg.png"
import ukmCenterDownBg from "!assets/ukm_center_down_bg.png"

const Page: React.FC = () => {
  useAos()
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [itemsPerPage, setItemsPerPage] = useState<number>(8)

  const updateItemsPerPage = () => {
    if (window.innerWidth >= 1024) {
      setItemsPerPage(8)
    } else {
      setItemsPerPage(6)
    }
  }

  useEffect(() => {
    updateItemsPerPage()
    window.addEventListener("resize", updateItemsPerPage)
    return () => {
      window.removeEventListener("resize", updateItemsPerPage)
    }
  }, [])

  const totalPages = Math.ceil(ukmData.length / itemsPerPage)

  const currentItems = ukmData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <>
      <Head title="Informasi UKM" />

      <DefaultLayout>
        {/* Main wrapper dengan overflow kontrol */}
        <div className="w-full overflow-x-hidden pt-12 sm:pt-14 md:pt-16 lg:pt-18 bg-black">

          {/* Hero Section */}
          <div className="relative min-h-screen w-full flex items-center justify-center">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
              style={{
                backgroundImage: `url(${ukmBackground})`,
              }}
            />

            {/* Top Frame */}
            <div className="absolute top-0 left-0 right-0 z-10 bg-white w-full">
              <img
                src={ukmBingkai}
                alt="Bingkai Atas"
                className="w-full h-auto object-cover block"
              />
            </div>

            {/* Hero Content - Responsif Container */}
            <div className="relative z-20 w-full max-w-6xl mx-auto px-4 py-16 md:py-24 lg:py-32 xl:py-40">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-center border border-white/30 shadow-lg mx-auto max-w-4xl mt-0 lg:mt-8 xl:mt-16">
                <h1
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  className="font-greek text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight mb-4 sm:mb-6 drop-shadow-lg break-words"
                >
                  UNIT KEGIATAN MAHASISWA (UKM)
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  className="font-jakartasans text-white text-sm sm:text-base lg:text-lg leading-relaxed drop-shadow-md break-words"
                >
                  Unit Kegiatan Mahasiswa adalah sebuah organisasi yang mewadahi berbagai minat & bakat mahasiswa di
                  Institut Teknologi Sumatera. UKM hadir untuk bisa memfasilitasi semua minat & bakat dari seluruh
                  Mahasiswa Institut Teknologi Sumatera.
                </p>
              </div>
            </div>

            {/* Bottom Frame */}
            <div className="absolute bottom-0 left-0 right-0 z-20 bg-white w-full">
              <img
                src={ukmBingkai}
                alt="Bingkai Bawah"
                className="w-full h-auto object-cover transform rotate-180 block"
              />
            </div>
          </div>

          {/* Cards Section - Completely Redesigned */}
          <div className="relative w-full bg-white">
            {/* Background Pattern - Simplified untuk Mobile */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Center ornament - Ukuran yang sangat responsif */}
              <div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none
                           w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px]"
                style={{
                  backgroundImage: `url(${ukmCenterBg})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              />

              {/* Side decorations - Hanya tampil di tablet ke atas */}
              <div className="hidden md:block">
                {/* Left decoration */}
                <div
                  className="absolute left-0 bottom-0 w-12 lg:w-20 xl:w-32 h-[60vh] lg:h-[80vh]"
                  style={{
                    backgroundImage: `url(${ukmpintukiri})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left bottom",
                  }}
                />

                {/* Right decoration */}
                <div
                  className="absolute right-0 bottom-0 w-12 lg:w-20 xl:w-32 h-[60vh] lg:h-[80vh]"
                  style={{
                    backgroundImage: `url(${ukmpintukanan})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right bottom",
                  }}
                />
              </div>

              {/* Center figure - Responsif */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <img
                  src={ukmCenterDownBg}
                  alt="Traditional Figure"
                  className="h-32 sm:h-40 md:h-52 lg:h-72 xl:h-80 w-auto"
                  style={{ transform: "translateY(10px)" }}
                />
              </div>
            </div>

            {/* Cards Content - Improved Container */}
            <div className="relative z-30 w-full min-h-screen flex flex-col items-center justify-center py-16 lg:py-24 xl:py-32">
              {/* Cards Container - Strict width control */}
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
                <div className="w-full overflow-hidden">
                  <CarouselUkm items={currentItems} />
                </div>
              </div>

              {/* Pagination */}
              <div className="mt-8 mb-16 w-full flex justify-center">
                <PaginationInformasi
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  )
}

export default Page;
