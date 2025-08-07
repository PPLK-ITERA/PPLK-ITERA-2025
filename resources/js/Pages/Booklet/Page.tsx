import React from "react";
import { Head } from "@inertiajs/react";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { CarouselBooklet } from "@/Components/booklet/ScrollBooklet";
import { useAos } from "@/lib/hooks/useAos";
import { Booklet } from "@/lib/types/Booklet";


function Page({ response }: { response: any }) {
  const booklets: Booklet[] = response.data;

  useAos();

  return (
    <>
      <Head title="Booklet" />

      <div className="bg-pattern-white flex flex-col min-h-screen">
        <DefaultLayout isSolid={true}>
          <div className="flex flex-col items-center justify-start flex-grow min-h-screen p-4 pt-32 pb-24 text-center">
            <h1
              data-aos="fade-down"
              data-aos-duration="1500"
              className="text-3xl sm:text-4xl md:text-6xl font-greek bg-gradient-to-t text-orange-700 leading-7 bg-clip-text  w-fit mb-2"
            >
              Booklet
            </h1>

            <p
              data-aos="fade-down"
              data-aos-duration="1500"
              className="text-[16px] sm:text-[20px] font-montserrat font-[400] text-[#543122] mb-8 max-w-4xl"
            >
              Halaman ini menyediakan daftar booklet untuk membantu mahasiswa
              memahami konteks tugas yang diberikan. Periksa secara berkala
              untuk materi terbaru dan informasi penting. Tingkatkan kemampuan
              Anda melalui panduan terperinci yang tersedia di sini.
            </p>

            <div className="w-full mt-[40px] sm:mt-[60px] flex justify-center pb-32">
              <CarouselBooklet booklets={booklets} />
            </div>
          </div>
        </DefaultLayout>
      </div>
    </>
  );
}

export default Page;