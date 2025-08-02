import React, { useState, useEffect } from "react";
import { Head, Link } from "@inertiajs/react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DefaultLayout from "@/Layouts/DefaultLayout";
import Header from "@/Components/informasi/Upa/Header";
import { DetailUPTData } from "@/lib/data/upa";

// Carousel Component
const UPTCarousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const [isClient, setIsClient] = useState(false);

  // Check if we're on client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Responsive items per view
  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 768) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isClient]);

  // Reset currentIndex when itemsPerView changes
  useEffect(() => {
    const maxIndex = Math.max(0, data.length - itemsPerView);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerView, data.length, currentIndex]);

  const maxIndex = Math.max(0, data.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(Math.max(0, index), maxIndex));
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isClient || data.length <= itemsPerView) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const newMaxIndex = Math.max(0, data.length - itemsPerView);
        return prev >= newMaxIndex ? 0 : prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [itemsPerView, data.length, isClient]);

  // If there are fewer items than itemsPerView, show all items without carousel
  if (!isClient || data.length <= itemsPerView) {
    return (
      <div className="max-w-7xl container flex flex-wrap justify-center">
        {data.map((upt, index) => (
          <Link
            href={`/informasi/upa/${upt.key}`}
            key={index}
            className="md:w-1/3 lg:w-1/4 w-full p-2"
          >
            <div className="bg-gradient-to-b from-jaffa-700 to-jaffa-800 overflow-hidden border rounded-md shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <img
                src={upt.logo}
                alt="UPT Kebun Raya"
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
    );
  }

  return (
    <div className="max-w-7xl container relative">
      {/* Navigation Buttons */}
      {maxIndex > 0 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-jaffa-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-jaffa-700" />
          </button>
        </>
      )}

      {/* Carousel Items */}
      <div className="overflow-hidden px-12">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {data.map((upt, index) => (
            <div
              key={index}
              className="flex-shrink-0 p-2"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <Link href={`/informasi/upa/${upt.key}`}>
                <div className="bg-gradient-to-b from-jaffa-700 to-jaffa-800 overflow-hidden border rounded-md shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={upt.logo}
                      alt="UPT Kebun Raya"
                      className="object-contain object-center w-full h-40 py-5 border transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="py-5 bg-white">
                    <h3 className="font-montserrat text-jaffa-900 text-lg font-semibold text-center">
                      {upt.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      {maxIndex > 0 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${currentIndex === index
                  ? 'bg-jaffa-700 scale-125'
                  : 'bg-jaffa-300 hover:bg-jaffa-400'
                }`}
            />
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {maxIndex > 0 && (
        <div className="mt-4 bg-jaffa-200 rounded-full h-1 overflow-hidden mx-12">
          <div
            className="bg-jaffa-700 h-full rounded-full transition-all duration-500"
            style={{ width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%` }}
          />
        </div>
      )}
    </div>
  );
};

function Page() {
  return (
    <>
      <Head title="Informasi UPA" />

      <DefaultLayout>
        <div className="h-screen relative min-h-[40vh] bg-mobile-hero-background bg-cover bg-bottom md:h-full md:bg-desktop-hero-background lg:bg-desktop-hero-background">
          <Header />
        </div>

        <div className="max-w-6xl p-3 md:p-0 mx-auto">
          <p className="text-lg p-4 text-justify rounded-xl backdrop-blur-md bg-white/20 border border-white/30 shadow-lg">
            UPT ITERA adalah singkatan dari Unit Pelaksana Teknis (UPT) Institut Teknologi Sumatera. Secara umum, UPT merupakan unit di lingkungan perguruan tinggi yang bertugas melaksanakan kegiatan teknis penunjang tugas dan fungsi perguruan tinggi.
          </p>
        </div>

        <div className="bg-pattern-white py-10">
          <UPTCarousel data={DetailUPTData} />
        </div>
      </DefaultLayout>
    </>
  );
}

export default Page;