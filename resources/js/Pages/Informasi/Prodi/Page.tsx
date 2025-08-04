import React, { useEffect, useState } from "react";

import { Head, Link } from "@inertiajs/react";

import { IconChevronDown } from "@tabler/icons-react";

import DefaultLayout from "@/Layouts/DefaultLayout";

import PaginationFAQ from "@/Components/PaginationFAQ";
import Header from "@/Components/informasi/prodi/Header";
import { Card } from "@/Components/ui/card";

import { FAKULTAS_DATA } from "@/lib/data/fakultas";
import { programStudies } from "@/lib/data/programStudi";
import { useAos } from "@/lib/hooks/useAos";

import fakultasSains from "!assets/fakultas-sains.png";
import fakultasTeknologiIndustri from "!assets/fakultas-teknologi-industri.png";
import fakultasTeknologiInfrastruktur from "!assets/fakultas-teknologi-infrastruktur-dan-kewilayahan.png";
import patternBrown from "!assets/pattern-brown.png";

export default function Page() {
  useAos();
  
  const itemsPerPage = 8;

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedFakultas, setSelectedFakultas] = useState(
    localStorage.getItem("selectedFakultas") || "fakultas-sains",
  );

  const currentDataProdiKeys = FAKULTAS_DATA[selectedFakultas].key_prodi;

  const matchedPrograms = programStudies.filter((program) =>
    currentDataProdiKeys.includes(program.key),
  );

  const totalPages = Math.ceil(matchedPrograms.length / itemsPerPage);

  const [displayedItems, setDisplayedItems] = useState(
    matchedPrograms.slice(0, itemsPerPage),
  );

  function updateDisplayedItems() {
    setDisplayedItems(
      matchedPrograms.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage,
      ),
    );
  }

  useEffect(() => {
    setCurrentPage(1);
    updateDisplayedItems();
  }, [selectedFakultas]);

  useEffect(() => {
    localStorage.setItem("selectedFakultas", selectedFakultas);
    updateDisplayedItems();
  }, [selectedFakultas, currentPage]);

  return (
    <div>
      <Head title="Informasi Prodi" />

      <DefaultLayout>
        <div className="h-screen relative min-h-[40vh] bg-mobile-hero-background bg-cover bg-bottom md:h-full lg:h-screen md:bg-desktop-hero-background lg:bg-desktop-hero-background">
          <Header fakultas={selectedFakultas} />

          <div className="bottom-20 md:bottom-0 absolute z-10 w-full">
            <div className="md:max-w-3xl flex justify-between max-w-sm gap-3 mx-auto px-2">
              <button
                className={`${selectedFakultas == "fakultas-sains" ? "bg-jaffa-700" : "bg-jaffa-200"} hover:bg-jaffa-700 rounded-xl md:py-4 md:px-20 flex items-center justify-center px-8 py-4 shadow-lg transition-all duration-300 ease-in-out`}
                onClick={() => setSelectedFakultas("fakultas-sains")}
              >
                <img
                  src={fakultasSains}
                  alt="fakultasSains"
                  className="md:w-[10vh] grayscale filter w-12"
                />
              </button>

              <button
                className={`${selectedFakultas == "fakultas-ftik" ? "bg-jaffa-700" : "bg-jaffa-200"} hover:bg-jaffa-700 rounded-xl md:py-4 md:px-20 flex items-center justify-center px-4 shadow-lg transition-all duration-300 ease-in-out`}
                onClick={() => setSelectedFakultas("fakultas-ftik")}
              >
                <img
                  src={fakultasTeknologiInfrastruktur}
                  alt="fakultasTeknologiInfrastruktur"
                  className="md:w-[15vh] grayscale filter w-16"
                />
              </button>
              <button
                className={`${selectedFakultas == "fakultas-fti" ? "bg-jaffa-700" : "bg-jaffa-200"}  hover:bg-jaffa-700 rounded-xl md:py-4 md:px-20 flex items-center justify-center px-8 py-4 shadow-lg transition-all duration-300 ease-in-out`}
                onClick={() => setSelectedFakultas("fakultas-fti")}
              >
                <img
                  src={fakultasTeknologiIndustri}
                  alt="fakultasTeknologiIndustri"
                  className="md:w-[10vh] grayscale filter w-12"
                />
              </button>
            </div>

            <div className="flex max-sm:text-sm text-white flex-col gap-2 place-content-center place-items-center mt-8 md:hidden">
              <p data-aos="fade-up" data-aos-duration="2000" className="">
                scroll untuk melihat
              </p>
              <IconChevronDown className="w-8 h-8 animate-bounce" />
            </div>
          </div>
        </div>

        <div className="bg-pattern-white py-16 font-montserrat">
          <div className="place-content-center flex flex-wrap w-full max-w-6xl gap-8 mx-auto">
            {displayedItems.map((prodi, index) => (
              <Card
                key={index}
                className="w-64 h-48 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition duration-500 group"
              >
                <Link href={`/informasi/prodi/${prodi.key}`}>
                  <div className="place-content-center place-items-center flex flex-col">
                    <div className="relative w-full h-32 overflow-hidden bg-black">
                      <img
                        className="object-cover w-full group-hover:opacity-40 transition duration-700"
                        src={patternBrown}
                        alt=""
                      />

                      <div className="top-1/2 group-hover:scale-75 group-hover:-translate-y-8 left-1/2 absolute w-24 h-24 p-1 mx-auto overflow-hidden -translate-x-1/2 -translate-y-1/2 bg-white rounded-full transition duration-500">
                        <img
                          src={
                            prodi.imageUrl ||
                            "https://img.freepik.com/free-vector/white-abstract-background_23-2148810353.jpg"
                          }
                          alt="Prodi"
                          className="object-contain w-full h-full"
                          data-aos="fade-in"
                          data-aos-duration="1000"
                        />
                      </div>

                      {/* detail on hover */}
                      <p className="group-hover:opacity-100 text-white absolute top-3 text-center w-full flex flex-col text-sm transition duration-500 opacity-0">
                        Selengkapnya
                      </p>
                    </div>
                    <p className="h-full p-2 text-sm font-semibold text-center">
                      {prodi.name}
                    </p>
                  </div>
                </Link>
              </Card>
            ))}
          </div>

          <PaginationFAQ
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </DefaultLayout>
    </div>
  );
}