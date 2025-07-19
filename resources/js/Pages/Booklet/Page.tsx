import React from "react";

import { Head } from "@inertiajs/react";

import DefaultLayout from "@/Layouts/DefaultLayout";

import { CarouselBooklet } from "@/Components/booklet/ScrollBooklet";

import { useAos } from "@/lib/hooks/useAos";
import { Booklet } from "@/lib/types/Booklet";
import { BookletGrid } from '@/Components/booklet/BookletGrid'; 

function Page({ response }: { response: any }) {
  // const booklets: Booklet[] = response.data;
  const booklets = [
    {
      id: 1,
      title: "Booklet Lorem",
      subtitle: "Deadline",
      date: "11 Agustus 2025",
      day: "1"
    },
    {
      id: 2,
      title: "Booklet Lorem",
      subtitle: "Segera",
      date: "",
      day: "2"
    },
    {
      id: 3,
      title: "Booklet Lorem",
      subtitle: "Segera",
      date: "",
      day: "3"
    },
    {
      id: 4,
      title: "Booklet Lorem",
      subtitle: "Segera",
      date: "",
      day: "4"
    },
    {
      id: 5,
      title: "Booklet Lorem",
      subtitle: "Segera",
      date: "",
      day: "5"
    },
    {
      id: 6,
      title: "Booklet Lorem",
      subtitle: "Segera",
      date: "",
      day: "6"
    }
  ];

  useAos();
  

  return (
    <>
      <Head title="Booklet" />
      <div className="bg-pattern-white flex flex-col min-h-screen">
        <DefaultLayout isSolid={true}>
          <div className="flex flex-col items-center justify-start flex-grow min-h-screen p-4 pt-32 pb-24 text-center">
              {/* Header Section */}  
                <h1
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  className="text-[40px] sm:text-[57px] md:text-[68px] font-greek text-[#BE3F00] mb-8 tracking-wider"
                >
                  BOOKLET
                </h1>
                <p
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  className="text-[10px] sm:text-[25px] md:text-[28px] text-lg max-w-4xl mx-auto text-[#543122] font-sans leading-relaxed"
                >
                  Halaman ini menyediakan daftar booklet untuk membantu mahasiswa
              memahami konteks tugas yang diberikan. Periksa secara berkala
              untuk materi terbaru dan informasi penting. Tingkatkan kemampuan
              Anda melalui panduan terperinci yang tersedia di sini.
                </p>


              {/* Booklet Grid */}
              <div className="w-full mt-[40px] sm:mt-[60px] flex justify-center pb-20">
                <BookletGrid booklets={booklets} />
              </div>

            {/* <div className="w-full mt-[40px] sm:mt-[60px] flex justify-center pb-20">
              <CarouselBooklet booklets={booklets} />
            </div> */}
      
          </div>
        </DefaultLayout>
      </div>
    </>
  );
}

export default Page;
