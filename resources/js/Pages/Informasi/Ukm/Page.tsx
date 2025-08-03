import React, { useEffect, useState } from "react";

import { Head } from "@inertiajs/react";

import DefaultLayout from "@/Layouts/DefaultLayout";

import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import { CarouselUkm } from "@/Components/informasi/Ukm/CarouselUkm";
import PaginationInformasi from "@/Components/informasi/Ukm/PaginationUkm";

import { ukmData } from "@/lib/data/ukm";
import { useAos } from "@/lib/hooks/useAos";

import gedung from "!assets/gedung-sponsor.png";

const Page: React.FC = () => {
  useAos();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(8);

  const updateItemsPerPage = () => {
    if (window.innerWidth >= 1024) {
      setItemsPerPage(8);
    } else {
      setItemsPerPage(6);
    }
  };

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  const totalPages = Math.ceil(ukmData.length / itemsPerPage);

  const currentItems = ukmData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  useAos();

  return (
    <>
      <Head title="Informasi UKM" />

      <DefaultLayout>
        <div className="bg-mobile-hero-background md:bg-desktop-hero-background md:min-h-full relative flex items-center justify-center min-h-screen p-5 bg-center bg-cover">
          <MaxWidthWrapper className="md:justify-start flex flex-col items-center justify-center">
            <div className="w-full px-2.5 py-[96px] md:py-[200px] lg:py-[160px] xl:py-[160px] text-center">
              <div className="bg-white/20 backdrop-blur-sm border border-white rounded-xl p-6 md:p-10  text-center text-white">
                <p
                  data-aos="fade-right"
                  data-aos-duration={1000}
                  className="text-[20px] font-semibold text-jaffa-100/80 md:text-[29.5px]"
                >
                  Informasi
                </p>

                <h1
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  className="text-jaffa-100 md:leading-none md:items-start flex flex-col items-center justify-center mt-8 leading-[2.5rem]"
                >
                  <span className="font-greek text-[30px] md:text-[50px]">
                    UNIT KEGIATAN MAHASISWA (UKM) & KOMUNITAS ITERA
                  </span>
                </h1>

                <p
                  data-aos="fade-right"
                  data-aos-duration={2000}
                  className="mt-8 text-[18px] md:text-xl leading-4 text-jaffa-100 font-montserrat "
                >
                  Unit Kegiatan Mahasiswa adalah sebuah organisasi yang mewadahi berbagai minat & bakat mahasiswa di Institut Teknologi Sumatera. UKM hadir untuk bisa memfasilitasi semua minat & bakat dari seluruh Mahasiswa Institut Teknologi Sumatera.
                </p>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>

        <div>
          <div className="bg-pattern-white flex flex-col items-center pb-20">
            <CarouselUkm items={currentItems} />

            <PaginationInformasi
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />

            <div className="flex h-[240px] md:w-[441px] w-[300px] flex-col rounded-lg bg-white bg-opacity-0"></div>
          </div>
        </div>

        <div className="flex items-center justify-center -mt-20">
          <img src={gedung} alt="" className="w-full" />
        </div>
      </DefaultLayout>
    </>
  );
};

export default Page;
