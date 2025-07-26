"use client";

import { useEffect, useState } from "react";

import { Head } from "@inertiajs/react";

import { AccordionFAQ, type FAQ } from "@/Components/AccordionFAQ";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import PaginationFAQ from "@/Components/PaginationFAQ";
import ProgramStudi from "@/Components/informasi/Fakultas/ProgramStudi";

import { useAos } from "@/lib/hooks/useAos";

import man from "!assets/FAQ/man.png";
import shield from "!assets/FAQ/shield.png";
import vidio from "!assets/FAQ/vidio.png";
import zeus from "!assets/FAQ/zeus.png";

export default function Page({ response }) {
  const dataFAQS = response.data;
  useAos();

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] =
    useState<string>(searchTerm);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
      setCurrentPage(1);
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const filteredFaqs = dataFAQS.filter((faq: FAQ) =>
    faq.teks_pertanyaan
      .toLowerCase()
      .includes(debouncedSearchTerm.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredFaqs.length / itemsPerPage);
  const currentItems = filteredFaqs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  useAos();

  const [selectedFakultas, setSelectedFakultas] = useState(
    localStorage.getItem("selectedFakultas") || "fakultas-sains",
  );

  useEffect(() => {
    localStorage.setItem("selectedFakultas", selectedFakultas);
  }, [selectedFakultas]);

  return (
    <>
      <Head title="FAQ" />
      <div className="min-h-screen bg-gradient-to-br  bg-white ">
        <Navbar isSolid={true} isFixed={true} />

        {/* Hero Section */}
        <div className="pt-24 pb-8">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Title */}
            <div className="text-center mb-12">
              <h1
                data-aos="fade-down"
                data-aos-duration="1000"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              >
                <span className="text-[#BE3F00] font-Greek ">
                  How Can We Help?
                </span>
              </h1>
            </div>

            {/* Search Bar */}
            <div className="flex justify-center my-10 ">
              <div className="relative w-full max-w-2xl mt-8 mb-7">
                <input
                  type="text"
                  placeholder="Cari Pertanyaan Disini"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-6 pr-12 py-4 text-lg text-[#BE3F00] placeholder-[#BE3F00] bg-[#f6f6fb] rounded-full shadow-[inset_4px_4px_8px_#d1d1e0,inset_-4px_-4px_8px_#ffffff] focus:outline-none "
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center ">
                  <svg
                    className="h-5 w-5 text-[#BE3F00]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Category Cards */}
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
              className=" md:grid flex overflow-x-auto whitespace-nowrap scroll-smooth md:whitespace-normal md:overflow-visible md:space-x-0  grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
            >
              {/* Card 1 */}
              <div className="bg-gradient-to-br from-[#E6814F] to-[#973403] rounded-xl p-3 w-[200px] h-[170px] text-white cursor-pointer  shadow-md hover:shadow-lg flex flex-col items-center object-fit: cover ">
                <div className="text-center relative justify-center items-center w-[100%] mx-auto -top-3 mb-1">
                  <div className="rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center overflow-visible">
                    <div className="absolute -top-9 z-10">
                      <img src={zeus} alt=" " />
                    </div>
                  </div>
                  <h3 className="font-Greek text-2xl mb-2">TUGAS PPLK </h3>
                  <p className="font-Romanica text-sm opacity-90">
                    TESLA,PETAKA
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-gradient-to-br from-[#E6814F] to-[#973403] rounded-xl p-3 w-[200px] h-[170px] text-white cursor-pointer shadow-md hover:shadow-lg flex flex-col items-center">
                <div className="text-center relative justify-center items-center w-[100%] mx-auto -top-3 mb-1">
                  <div className="rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <div className="absolute -top-9 z-10">
                      <img src={shield} alt="" />
                    </div>
                  </div>
                  <h3 className="font-Greek text-2xl mb-2">PROFIL MABA </h3>
                  <p className="font-Romanica text-sm opacity-90 text-center w-full break-words leading-snug">
                    Tata cara pengisian  <br /> profil, berteman, dll.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-gradient-to-br from-[#E6814F] to-[#973403] rounded-xl p-3 w-[200px] h-[170px] text-white cursor-pointer  shadow-md hover:shadow-lg flex flex-col items-center">
                <div className="text-center  relative justify-center -top-3 mb-1 items-center w-[100%] mx-auto">
                  <div className=" rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <div className="absolute -top-9 z-10">
                      <img src={man} alt="" />
                    </div>
                  </div>
                  <h3 className="font-Greek  text-2xl mb-2">DRESSCODE</h3>
                  <p className=" font-Romanica text-sm opacity-90">
                    Drescode Pra-PPLK PPLK  <br/> Day 0-5
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 max-w-6xl pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl  p-6 sticky top-24">
                {/* Topik Umum */}
                <div className="mb-8 hidden md:block">
                  <h3 className="font-bold font-montserrat text-[#000000] mb-4 text-lg">
                    Topik Umum
                  </h3>
                  <div className="space-y-2">
                    <button className="w-full text-left p-3 rounded-lg  text-[#000000]">
                      PPLK ITERA 20222
                    </button>
                    <button className="w-full text-left p-3 rounded-lg  text-[#000000]">
                      Fakultas
                    </button>
                    <button className="w-full text-left p-3 rounded-lg  text-[#000000]">
                      Prodi & HMPS
                    </button>
                    <button className="w-full text-left p-3 rounded-lg  text-[#000000]">
                      KM ITERA
                    </button>
                    <button className="w-full text-left p-3 rounded-lg  text-[#000000]">
                      UKM ITERA
                    </button>
                    <button className="w-full text-left p-3 rounded-lg  text-[#000000]">
                      Divisi PPLK
                    </button>
                  </div>
                </div>

                {/* Topik Terkait */}
                <div className="mb-8 hidden md:block">
                  <h3 className="font-bold font-montserrat text-[#000000] mb-4 text-lg">
                    Topik Terkait
                  </h3>
                  <div className="space-y-2">
                    <button className="w-full text-left p-3 rounded-lg text-[#000000]">
                      Profil Maba
                    </button>
                    <button className="w-full text-left p-3 rounded-lg text-[#000000]">
                      Tesla
                    </button>
                    <button className="w-full text-left p-3 rounded-lg text-[#000000]">
                      PETAKA
                    </button>
                    <button className="w-full text-left p-3 rounded-lg text-[#000000]">
                      Dokumentasi
                    </button>
                    <button className="w-full text-left p-3 rounded-lg text-[#000000]">
                      Relasi dan Jaringan
                    </button>
                    <button className="w-full text-left p-3 rounded-lg text-[#000000]">
                      Booklet
                    </button>
                    <button className="w-full text-left p-3 rounded-lg text-[#000000]">
                      Attribut
                    </button>
                  </div>
                </div>

                {/* Promotional Card */}
                <div className="hidden md:block bg-gradient-to-br from-[#FF6A00] to-[#752700] rounded-2xl text-black py-3 ">
                  <div className="text-center justify-center items-center w-[90%] mx-auto">
                    <div>
                      <h4 className=" font-Greek font-bold text-[#FFFFFF]">
                        Masih Belum Terbantu?
                      </h4>
                    </div>

                    <div className=" bg-opacity-20 rounded-full w-36 mt-8 mb-8 h-36 mx-auto  flex items-center justify-center">
                      <img src={vidio} alt="" />
                    </div>

                    <div>
                      <p className="text-sm opacity-90 text-justify tracking-tight text-[#FFFFFF] ">
                        Ajukan pertanyaanmu dengan cara menekan tombol dibawah
                        dan akan kita bantu secepatnya
                      </p>
                      <button className="bg-white mt-4  px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#FF6A00] transition-colors duration-200 ">
                        AJUKAN PERTANYAAN!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Content */}
            <div className="lg:col-span-3">
              {/* Pertanyaan Umum */}
              <div className="bg-white rounded-2xl shadow-lg  mb-8">
                <h2 className="text-2xl font-bold font-montserrat  text-center mb-2">
                  Pertanyaan Umum
                </h2>
                <div className="p-6">
                  <div data-aos="fade-up" data-aos-duration="10">
                    <AccordionFAQ items={currentItems} />
                  </div>
                </div>
              </div>

              {/* Pertanyaan Teknis */}
              <div className="bg-white rounded-2xl shadow-lg mb-8">
                <h2 className="text-2xl font-bold font-montserrat text-center mb-2">
                  Pertanyaan Teknis
                </h2>
                <div className="p-6">
                  <div data-aos="fade-up" data-aos-duration="10">
                    <AccordionFAQ items={currentItems} />
                    <PaginationFAQ
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={setCurrentPage}
                    />
                  </div>
                </div>
              </div>

              <div>
                <p className="text-center font-extrabold font-montserrat text-2xl md:hidden ">
                  Paling Sering Ditanya
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-duration="600"
                  className=" mx-auto md:hidden"
                >
                  <ProgramStudi fakultas={selectedFakultas} />
                </div>
              </div>

              <div className=" md:hidden bg-gradient-to-br from-[#FF6A00] to-[#752700] rounded-2xl text-black py-3">
                <div className="text-center justify-center items-center w-[90%] mx-auto">
                  <div>
                    <h4 className=" font-Greek font-bold text-[#FFFFFF]">
                      Masih Belum Terbantu?
                    </h4>
                  </div>

                  <div className=" bg-opacity-20 rounded-full w-36 mt-8 mb-8 h-36 mx-auto  flex items-center justify-center">
                    <img src={vidio} alt="" />
                  </div>

                  <div>
                    <p className="text-sm opacity-90 text-justify tracking-tight text-[#FFFFFF] ">
                      Ajukan pertanyaanmu dengan cara menekan tombol dibawah dan
                      akan kita bantu secepatnya
                    </p>
                    <button className="bg-white mt-4  px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#FF6A00]  transition-colors duration-200">
                      AJUKAN PERTANYAAN!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-left">
        <Footer />
      </div>
    </>
  );
}
