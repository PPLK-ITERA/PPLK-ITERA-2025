import React, { useState } from "react";

import { Head, Link } from "@inertiajs/react";

import DefaultLayout from "@/Layouts/DefaultLayout";

import Header from "@/Components/informasi/Upa/Header";

import { DetailUPTData } from "@/lib/data/upa";

function Page() {
  const [visibleItems, setVisibleItems] = useState(7); // Jumlah item awal yang ditampilkan
  const [currentSlide, setCurrentSlide] = useState(0);

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems);
  };

  const nextSlide = () => {
    // Logic untuk slide ke kanan bisa ditambahkan di sini
    console.log("Next slide clicked");
  };

  return (
    <>
      <Head title="Informasi UPA" />

      <DefaultLayout>
        {/* Background atas */}
        <div className="h-screen relative min-h-[40vh] bg-mobile-hero-background bg-cover bg-bottom md:h-full md:bg-desktop-hero-background lg:bg-desktop-hero-background">
          <Header />
        </div>

        {/* Kontainer Card dengan design baru */}
        <div className="max-w-7xl mx-auto py-8 md:py-16 px-4">
          {/* Title Section with Slide Button */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between mb-8 md:mb-12 gap-4">
            <div className="flex-1 text-center lg:text-left">
              <h2
                data-aos="fade-up"
                data-aos-duration="800"
                className="font-Greek text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-800 leading-tight"
              >
                UNIT-UNIT PENUNJANG AKADEMIK
                <br />
                INSTITUT TEKNOLOGI SUMATERA
              </h2>
            </div>

            {/* Slide Button - Hidden on mobile, visible on desktop */}
            <div className="flex-shrink-0 hidden lg:block">
              <button
                onClick={nextSlide}
                className="group flex items-center space-x-2 bg-transparent  font-bold font-Greek  md:text-base px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-md text-lg"
              >
                <span>SLIDE</span>
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-current rounded-full group-hover:animate-pulse"></div>
                  <div className="w-1 h-1 bg-current rounded-full group-hover:animate-pulse delay-100"></div>
                  <div className="w-1 h-1 bg-current rounded-full group-hover:animate-pulse delay-200"></div>
                </div>
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                  ›››
                </span>
              </button>
            </div>
          </div>

          {/* Cards Container - Responsive Layout */}
          {/* Mobile: 2 columns grid with full expansion hover effects, Desktop: Horizontal scroll */}
          <div className="block md:hidden">
            {/* Mobile Layout - 2 Columns Grid with Full Expansion */}
            <div className="grid grid-cols-2 gap-3 px-2 relative">
              {DetailUPTData.slice(0, visibleItems).map((upt, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration={1000 + index * 200}
                  className="group relative overflow-visible cursor-pointer hover:z-50 flex-shrink-0"
                  style={{ minHeight: "250px" }}
                >
                  <Link href={`/informasi/upa/${upt.key}`}>
                    {/* Mobile Card Container with Full Expansion */}
                    <div
                      className={`relative h-64 transition-all duration-700 ease-in-out overflow-hidden rounded-xl shadow-md hover:shadow-2xl ${
                        index % 2 === 0
                          ? "w-full group-hover:w-[220%] origin-left group-hover:translate-x-0" // Cards kiri expand ke kanan, menutupi card kanan
                          : "w-full group-hover:w-[220%] origin-right group-hover:-translate-x-[54.5%]" // Cards kanan expand ke kiri, menutupi card kiri
                      }`}
                    >
                      {/* Background Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-jaffa-600 via-jaffa-700 to-jaffa-800"></div>

                      {/* Hover Overlay with stronger effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-jaffa-400/30 to-jaffa-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Content Container */}
                      <div className="relative z-10 h-full p-4 flex">
                        {/* Left Section - Logo (always visible) */}
                        <div className="flex-shrink-0 flex flex-col items-center justify-center w-1/2">
                          <div className="w-16 h-16 bg-white/95 rounded-full p-2 shadow-lg group-hover:scale-125 transition-transform duration-500 mb-3">
                            <img
                              src={upt.logo}
                              alt={`${upt.title} Logo`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <h3 className="font-Greek text-white text-sm font-bold leading-tight text-center">
                            {upt.title}
                          </h3>
                        </div>

                        {/* Right Section - Description (appears on hover) */}
                        <div className="flex-1 flex flex-col justify-center pl-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300 transform translate-x-8 group-hover:translate-x-0">
                          <div className="border-l-2 border-white/30 pl-4">
                            <h4 className="font-Greek text-white text-base font-bold mb-3">
                              {upt.title}
                            </h4>
                            <p className="font-Romanica text-white/90 text-xs leading-relaxed">
                              {upt.description.substring(0, 150)}...
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Section - Dots (hidden on hover) */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-60 group-hover:opacity-0 transition-opacity duration-300">
                        <div className="flex space-x-1">
                          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                          <div className="w-1.5 h-1.5 bg-white/70 rounded-full"></div>
                          <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                        </div>
                      </div>

                      {/* Enhanced Decorative Elements */}
                      <div className="absolute top-3 right-3 w-8 h-8 border-2 border-white/20 rounded-full opacity-20 group-hover:opacity-60 transition-all duration-500 group-hover:scale-110"></div>
                      <div className="absolute bottom-3 left-3 w-6 h-6 border border-white/20 rounded-full opacity-20 group-hover:opacity-60 transition-all duration-500 delay-200 group-hover:scale-110"></div>

                      {/* Strong Glow effect */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-jaffa-300 via-jaffa-400 to-jaffa-500 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-lg -z-10"></div>

                      {/* Border highlight */}
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-xl transition-colors duration-500"></div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Layout - Horizontal Scroll */}
          <div className="hidden md:block">
            <div className="overflow-x-auto pb-4">
              <div
                className="flex flex-nowrap justify-start gap-4 md:gap-6 px-4"
                style={{ width: "max-content" }}
              >
                {DetailUPTData.slice(0, visibleItems).map((upt, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-duration={1000 + index * 200}
                    className="group relative overflow-visible cursor-pointer hover:z-50 flex-shrink-0"
                    style={{ minHeight: "320px" }}
                  >
                    <Link href={`/informasi/upa/${upt.key}`}>
                      {/* Desktop Card Container with Horizontal Expansion */}
                      <div className="relative w-52 h-80 group-hover:w-80 transition-all duration-500 ease-in-out overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl">
                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-jaffa-600 via-jaffa-700 to-jaffa-800"></div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-jaffa-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Content Container */}
                        <div className="relative z-10 h-full p-6 flex flex-col">
                          {/* Logo Section */}
                          <div className="flex-shrink-0 mb-6">
                            <div className="w-20 h-20 mx-auto mb-4 bg-white/90 rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                              <img
                                src={upt.logo}
                                alt={`${upt.title} Logo`}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </div>

                          {/* Title Section */}
                          <div className="flex-grow flex flex-col justify-center text-center">
                            <h3 className="font-Greek text-white text-xl font-bold mb-3 leading-tight">
                              {upt.title}
                            </h3>

                            {/* Description - appears on hover */}
                            <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 transform translate-y-4 group-hover:translate-y-0">
                              <div className="border-t border-white/20 pt-4 mt-2">
                                <p className="font-Romanica text-white/50 text-sm leading-relaxed line-clamp-4">
                                  {upt.description.substring(0, 120)}...
                                </p>
                              </div>
                            </div>
                          </div>
                          

                          {/* Bottom Section */}
                          <div className="flex-shrink-0">
                            {/* Hover indicator dots */}
                            <div className="flex justify-center space-x-2 opacity-60 group-hover:opacity-0 transition-opacity duration-300">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                              <div className="w-2 h-2 bg-white/70 rounded-full"></div>
                              <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                            </div>
                          </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-4 right-4 w-8 h-8 border border-white/20 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                        <div className="absolute bottom-4 left-4 w-6 h-6 border border-white/20 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300 delay-100"></div>

                        {/* Glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-jaffa-400 via-jaffa-500 to-jaffa-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm -z-10"></div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pagination Dots - Responsive */}
          <div className="flex justify-center items-center space-x-2 mt-6 md:mt-8">
            {Array.from({ length: Math.ceil(DetailUPTData.length / 4) }).map(
              (_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-jaffa-600 w-6 md:w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ),
            )}
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}

export default Page;
