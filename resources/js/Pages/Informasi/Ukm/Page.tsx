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

  useAos()

  return (
    <>
      <Head title="Informasi UKM" />

      <DefaultLayout>
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* bg top section */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${ukmBackground})`,
            }}
          />

          {/* bingkai atas dengan background putih */}
          <div className="absolute top-0 left-0 right-0 z-10 bg-white">
            <img src={ukmBingkai} alt="Bingkai Atas" className="w-full h-auto object-cover" />
          </div>

          {/* Main content container */}
          <MaxWidthWrapper className="relative z-20 flex flex-col items-center justify-center">
            <div className="w-full max-w-4xl mx-auto px-6 py-16 md:py-24">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center border border-white/30 shadow-lg">
                <h1
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  className="font-greek text-white text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 drop- "
                >
                  UNIT KEGIATAN MAHASISWA (UKM)
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  className="font-jakartasans text-white text-base md:text-lg leading-relaxed max-w-3xl mx-auto drop-shadow-md"
                >
                  Unit Kegiatan Mahasiswa adalah sebuah organisasi yang mewadahi berbagai minat & bakat mahasiswa di
                  Institut Teknologi Sumatera. UKM hadir untuk bisa memfasilitasi semua minat & bakat dari seluruh
                  Mahasiswa Institut Teknologi Sumatera.
                </p>
              </div>
            </div>
          </MaxWidthWrapper>

          {/* Bingkai bawah with adjusted z-index */}
          <div className="absolute bottom-0 left-0 right-0 z-20 bg-white">
            <img
              src={ukmBingkai}
              alt="Bingkai Bawah"
              className="w-full h-auto object-cover transform rotate-180"
            />
          </div>
        </div>

        {/* section card UKM */}
        <div className="relative" style={{ minHeight: '100vh' }}>
          {/* bg tengah ornamen - Made larger to match Figma */}
          <div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-40 z-5 pointer-events-none w-[800px] h-[800px] md:w-[1000px] md:h-[1000px] lg:w-[1200px] lg:h-[1200px]"
            style={{
              backgroundImage: `url(${ukmCenterBg})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          />

          {/* RESPONSIVE bg kanan kiri - Updated with separate assets */}
          <div className="absolute inset-0 z-15">
            {/* bg kiri - Using dedicated left door asset */}
            <div
              className="absolute left-0 bottom-0 
                         w-8 sm:w-12 md:w-20 lg:w-32 xl:w-40 2xl:w-48
                         h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh] xl:h-[110vh]"
              style={{
                backgroundImage: `url(${ukmpintukiri})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left bottom",
                zIndex: 10
              }}
            />
            
            {/* bg kanan - Using dedicated right door asset */}
            <div
              className="absolute right-0 bottom-0 
                         w-8 sm:w-12 md:w-20 lg:w-32 xl:w-40 2xl:w-48
                         h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh] xl:h-[110vh]"
              style={{
                backgroundImage: `url(${ukmpintukanan})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right bottom",
                zIndex: 10
              }}
            />
          </div>

          {/* center down bg - Responsive sizing */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-15">
            <img
              src={ukmCenterDownBg}
              alt="Traditional Figure"
              className="h-[250px] sm:h-[300px] md:h-[400px] lg:h-[520px] xl:h-[600px] 2xl:h-[680px] w-auto"
              style={{
                transform: "translateY(20px)"
              }}
            />
          </div>

          {/* Content Cards - Positioned to overlap figure properly */}
          <div className="relative z-30 flex flex-col items-center justify-center min-h-screen px-4">
            {/* Cards container */}
            <div className="w-full max-w-7xl mx-auto">
              <CarouselUkm items={currentItems} />
            </div>

            {/* Pagination positioned over figure's chest area */}
            <div className="mt-8 mb-16">
              <PaginationInformasi currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  )
}

export default Page;