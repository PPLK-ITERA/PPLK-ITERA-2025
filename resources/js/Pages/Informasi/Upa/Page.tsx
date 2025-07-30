import React, { useState } from "react";

import { Head, Link } from "@inertiajs/react";

import DefaultLayout from "@/Layouts/DefaultLayout";

import Header from "@/Components/informasi/Upa/Header";

import { DetailUPTData } from "@/lib/data/upa";


function Page() {
  const [visibleItems, setVisibleItems] = useState(4); // Jumlah item awal yang ditampilkan
  const itemsPerPage = 2; // Jumlah item yang ditambahkan setiap kali "Load More" diklik

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + itemsPerPage);
  };

  return (
    <>
      <Head title="Informasi UPA" />

      <DefaultLayout>
        <div className="h-screen relative min-h-[40vh] bg-mobile-hero-background bg-cover bg-bottom md:h-full md:bg-desktop-hero-background lg:bg-desktop-hero-background">
          <Header />
        </div>

        <div className="bg-pattern-white py-10">
          <div className="max-w-7xl container flex flex-wrap justify-center">
            {DetailUPTData.slice(0, visibleItems).map((upt, index) => (
              <Link
                href={`/informasi/upa/${upt.key}`}
                key={index}
                className="md:w-1/3 lg:w-1/4 w-full p-2 "
              >
                <div className="bg-gradient-to-b from-jaffa-700 to-jaffa-800 overflow-hidden border rounded-md  shadow-md hover:shadow-xl transition duration-300">
                  <img
                    src={upt.logo}
                    alt="UPT Kebun Raya "
                    className="object-contain object-center w-full h-40 py-5 border"
                  />

                  <div className="py-5 bg-white">
                    <h3 className="font-montserrat text-jaffa-900 text-lg font-semibold text-center">
                      {upt.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {visibleItems < DetailUPTData.length && ( // Tombol "Load More" hanya ditampilkan jika ada item tersisa
            <div className="py-5 text-center">
              <button
                onClick={loadMore}
                className="bg-jaffa-600 px-4 py-2 font-bold text-white rounded"
              >
                Load More Sayang 
              </button>
            </div>
          )}
        </div>
      </DefaultLayout>
    </>
  );
}

export default Page;
