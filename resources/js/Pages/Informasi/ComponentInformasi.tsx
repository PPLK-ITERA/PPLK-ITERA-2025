import React from "react";
import { useState } from "react";

const ComponentInformasi = ({ children }) => {
  return <div>{children}</div>;
};

const ComponentInformasiHeader = () => {
  return (
    <div className="text-center text-jaffa-600 font-bold text-xl sm:text-2xl font-avigea tracking-widest px-2 sm:px-0">
      <p>PROGRAM PENGENALAN LINGKUNGAN KAMPUS ITERA 2024</p>
      <div className=" max-w-xs m-auto flex justify-center gap-2">
        <div className="bg-jaffa-600 h-[2px] mb-2 w-[8%] self-center"></div>
        <p>PPLK ITERA 2024</p>
        <div className="bg-jaffa-600 h-[2px] mb-2 w-[8%] self-center "></div>
      </div>
    </div>
  );
};

const ComponentInformasiHero = () => {
  return (
    <div>
      <div className="mt-6 sm:hidden">
        <div className="flex justify-center items-center">
          <img src="/assets/logo-pplk-2024.png" alt="" />
        </div>
        <div className="max-w-52 m-auto text-center">
          <p className="text-candlelight-600 font-bold text-sm tracking-widest font-avigea  sm:hidden">
            PPLK ITERA 2024
          </p>
          <p className="text-candlelight-600 font-bold text-sm tracking-widest font-avigea  sm:hidden mt-3">
            Nagarika Anvensana : Exploration For The Future
          </p>
        </div>
      </div>

      <div className="flex px-8 xm:px-0 mt-10 ">
        <div className="sm:w-[60%] space-y-3">
          <p className="text-candlelight-600 font-bold text-xl tracking-widest font-avigea hidden sm:block">
            PPLK ITERA 2024
          </p>
          <p className="text-candlelight-600 font-bold text-xl tracking-widest font-avigea hidden sm:block">
            Nagarika Anvensana : Exploration For The Future
          </p>
          <p>
            Program Pengenalan Lingkungan Kampus Institut Teknologi Sumatera
            2024 atau PPLK ITERA 2024 adalah sebuah kegiatan orientasi bagi
            seluruh Mahasiswa Baru Institut Teknologi Sumatera tahun angkatan
            2024. PPLK ITERA 2024 diusung dengan tajuk Nagarika Anvensana :
            Exploration For The Futre, dan bertema Futuristic Nusantara.
          </p>
          <p>
            Kegiatan PPLK ITERA diusung dengan harapan bisa memberikan pemahaman
            dan memperkenalkan dunia kampus kepada seluruh Mahasiswa baru di
            Institut Teknologi Sumatera, sehingga para mahasiswa baru bisa
            menghadapi perkuliahan dengan lebih baik.
          </p>
        </div>
        <div className="w-[40%] hidden sm:flex justify-center items-center">
          <img
            src="/assets/logo-pplk-2024.png"
            alt="logo-pplk"
            className="xl:w-[70%] sm:w-[100%]"
          />
        </div>
      </div>

      <div className="flex justify-center items-center sm:px-0 px-5 mt-8">
        <div className="text-center my-6 max-w-xl">
          <p className="font-bold text-jaffa-600 font-avigea text-xl tracking-widest">
            VISI
          </p>
          <p>
            PPLK 2024 sebagai gerbang pertama dalam terwujudnya mahasiswa yang
            kompetitif, berintelektual, serta siap menghadapi gempuran
            globalisasi.
          </p>
        </div>
      </div>
    </div>
  );
};

const ComponentInformasiFilosofi = () => {
  return (
    <div>
      <div className="mt-14">
        <div className="mx-auto max-w-2xl">
          <p className="text-center font-bold tracking-widest font-avigea text-jaffa-600 text-xl ">
            FILOSOFI LOGO
          </p>
          <div className="sm:flex flex-wrap mt-5 ">
            <div className="sm:w-[50%]">
              <img
                src="/assets/logo-pplk-2024.png"
                alt="logo"
                className="mx-auto w-[60%] sm:w-[90%]"
              />
            </div>
            <div className="sm:w-[50%] px-6 pl-12 sm:p-0 space-y-4 mt-10">
              <div className="flex gap-6">
                <div className="bg-[#ECB406] sm:w-[45px] w-12 h-[30px]  rotate-[45deg] mt-2 "></div>
                <div className="font-semibold">
                  Warna emas melambangkan Keberuntungan & Kesuksesan
                </div>
              </div>
              <div className="flex gap-6 ">
                <div className="bg-[#B6ADA4] sm:w-[45px] w-12 h-[30px]  rotate-[45deg] mt-2 "></div>
                <div className="font-semibold">
                  Warna silver melambangkan Modernitas & Teknologi
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-[#DA5B1C] sm:w-[45px] w-12 h-[30px]  rotate-[45deg] mt-2 "></div>
                <div className="font-semibold">
                  Warna orange melambangkan Semangat & Kreatifitas
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-[#00A3FF] sm:w-[45px] w-12 h-[30px] rotate-[45deg] mt-2 "></div>
                <div className="font-semibold">
                  Warna biru melambangkan Kepercayaan & Inspirasi yang Luas
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <div className="flex ">
          <div className="w-[25%] justify-center items-center flex relative ">
            <img
              src="/assets/logo-pplk-2024.png"
              alt="logo"
              className="grayscale filter w-[100%] sm:w-[85%] sm:translate-x-20"
            />
          </div>
          <div className="w-[50%]">
            <div className="flex justify-center items-center">
              <img
                src="/assets/logo-pplk-2024.png"
                alt="logo"
                className="w-[100%] sm:w-[60%] z-20"
              />
            </div>
            <div className="relative flex justify-center items-center">
              <img
                src="/assets/Podium.png"
                alt="podium"
                className="absolute w-[100%] sm:w-[60%] -translate-y-9 sm:-translate-y-16 z-10"
              />
            </div>
          </div>
          <div className="w-[25%] justify-center items-center flex relative ">
            <img
              src="/assets/logo-pplk-2024.png"
              alt="logo"
              className="grayscale filter w-[100%] sm:w-[85%] sm:-translate-x-14"
            />
          </div>
        </div>
        <div className="mt-10">
          <div className="mx-auto max-w-72">
            <p className="font-bold text-center text-xl sm:text-2xl tracking-widest font-avigea">
              BIJI EMAS
            </p>
            <p className="text-center">
              Biji Emas merepresentasikan keberhasilan Indonesia Emas 2045
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ComponentInformasiDivisi = () => {
  // array menampilkan divisi pplk
  const frames = new Array(16).fill("/assets/Frame Divisi PPLK.png");

  // fitur load more
  const [visibleCount, setVisibleCount] = useState(3);
  const itemPerLoad = 6;
  const loadMore = () => setVisibleCount((count) => count + itemPerLoad);

  return (
    <div>
      <div className="mt-28">
        <div className="text-center font-bold text-xl font-avigea tracking-widest text-jaffa-600">
          <p>SEMUA DIVISI PPLK</p>
        </div>
        <div className="mx-auto max-w-6xl mt-12 sm:mt-16">
          <div className="flex justify-center items-center">
            <img
              src="/assets/Frame Divisi PPLK.png"
              alt="frame"
              className="sm:w-[19.1%] xl:w-[20%] mx-auto w-[50%]"
            />
          </div>

          {/* dekstop layout */}
          <div className="hidden xl:flex flex-wrap justify-between  mt-12 sm:mt-6">
            {frames.map((src, index) => (
              <div
                key={index}
                className="flex justify-center items-center mt-10"
              >
                <img
                  src={src}
                  alt="frame"
                  className="xl:w-[80%] sm:w-[60%] mx-auto w-[50%]"
                />
              </div>
            ))}
          </div>

          {/* mobile layout */}
          <div className="xl:hidden flex flex-wrap justify-between mt-6">
            {frames.slice(0, visibleCount).map((src, index) => (
              <div
                key={index}
                className="flex justify-center items-center mt-10 mx-auto"
              >
                <img
                  src={src}
                  alt="frame"
                  className="xl:w-[80%] sm:w-[60%] mx-auto w-[75%]"
                />
              </div>
            ))}
          </div>
          {visibleCount < frames.length && (
            <div className="flex justify-center mt-8 xl:hidden">
              <button
                onClick={loadMore}
                className="px-4 py-2 bg-jaffa-600 text-white rounded shadow "
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ComponentInformasi.ComponentInformasiHeader = ComponentInformasiHeader;
ComponentInformasi.ComponentInformasiHero = ComponentInformasiHero;
ComponentInformasi.ComponentInformasiFilosofi = ComponentInformasiFilosofi;
ComponentInformasi.ComponentInformasiDivisi = ComponentInformasiDivisi;

export default ComponentInformasi;
