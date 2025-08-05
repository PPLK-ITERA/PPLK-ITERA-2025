import React from "react";
import { useState } from "react";

const ComponentInformasi = ({ children }) => {
  return <div>{children}</div>;
};

const ComponentInformasiHeader = () => {
  return (
    <div className="text-jaffa-600 sm:text-2xl font-greek sm:px-0 px-2 text-xl font-bold tracking-widest text-center">
      <p>PROGRAM PENGENALAN LINGKUNGAN KAMPUS ITERA 2025</p>
      <div className=" flex justify-center max-w-xs gap-2 m-auto">
        <div className="bg-jaffa-600 h-[2px] mb-2 w-[8%] self-center"></div>
        <p>PPLK ITERA 2025</p>
        <div className="bg-jaffa-600 h-[2px] mb-2 w-[8%] self-center "></div>
      </div>
    </div>
  );
};

const ComponentInformasiHero = () => {
  return (
    <div>
      <div className="sm:hidden mt-6">
        <div className="flex items-center justify-center">
          <img src="/assets/logo-pplk-2025.png" alt="" />
        </div>
        <div className="max-w-52 m-auto text-center">
          <p className="text-candlelight-600 font-greek sm:hidden text-sm font-bold tracking-widest">
            PPLK ITERA 2025
          </p>
          <p className="text-candlelight-600 font-greek sm:hidden mt-3 text-sm font-bold tracking-widest">
            Nagarika Anvensana : Exploration For The Future
          </p>
        </div>
      </div>

      <div className="xm:px-0 flex px-8 mt-10">
        <div className="sm:w-[60%] space-y-3">
          <p className="text-candlelight-600 font-greek sm:block hidden text-xl font-bold tracking-widest">
            PPLK ITERA 2025
          </p>
          <p className="text-candlelight-600 font-greek sm:block hidden text-xl font-bold tracking-widest">
            Nagarika Anvensana : Exploration For The Future
          </p>
          <p>
            Program Pengenalan Lingkungan Kampus Institut Teknologi Sumatera
            2025 atau PPLK ITERA 2025 adalah sebuah kegiatan orientasi bagi
            seluruh Mahasiswa Baru Institut Teknologi Sumatera tahun angkatan
            2025. PPLK ITERA 2025 diusung dengan tajuk Nagarika Anvensana :
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
            src="/assets/logo-pplk-2025.png"
            alt="logo-pplk"
            className="xl:w-[70%] sm:w-[100%]"
          />
        </div>
      </div>

      <div className="sm:px-0 flex items-center justify-center px-5 mt-8">
        <div className="max-w-xl my-6 text-center">
          <p className="text-jaffa-600 font-greek text-xl font-bold tracking-widest">
            VISI
          </p>
          <p>
          PPLK ITERA 2025 sebagai wadah pengembangan karakter mahasiswa baru yang berintegrasi dan berdaya saing, menumbuhkan rasa bangga sebagai bagian dari civitas akademika ITERA, serta membentuk mahasiswa yang “AKTIF” (Aktif, Kritis, Solutif dan Inovatif) dalam menghadapi tantangan di era Revolusi Industri 4.0.
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
        <div className="max-w-2xl mx-auto">
          <p className="font-greek text-jaffa-600 text-xl font-bold tracking-widest text-center">
            FILOSOFI LOGO
          </p>
          <div className="sm:flex flex-wrap mt-5">
            <div className="sm:w-[50%]">
              <img
                src="/assets/logo-pplk-2025.png"
                alt="logo"
                className="mx-auto w-[60%] sm:w-[90%]"
              />
            </div>
            <div className="sm:w-[50%] px-6 pl-12 sm:p-0 space-y-4 mt-10">
              <div className="flex gap-6">
                <div className="bg-[#ECB406] sm:w-[45px] w-12 h-[30px]  rotate-[45deg] mt-2 "></div>
                <div className="font-semibold">
                  Warna emas menjadi simbol semangat mencapai tujuan luhur bagi mahasiswa baru sebagai generasi terpilih.
                </div>
              </div>
              <div className=" flex gap-6">
                <div className="bg-[#682300] sm:w-[45px] w-12 h-[30px]  rotate-[45deg] mt-2 "></div>
                <div className="font-semibold">
                  Warna coklat menjadi simbol suasana hangat dan membumi sebagai landasan awal mahasiswa baru dalam tumbuh dan berkembang.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <div className=" flex">
          <div className="w-[25%] justify-center items-center flex relative ">
            <img
              src="/assets/logo-pplk-2025.png"
              alt="logo"
              className="grayscale filter w-[100%] sm:w-[85%] sm:translate-x-20"
            />
          </div>
          <div className="w-[50%]">
            <div className="flex items-center justify-center">
              <img
                src="/assets/logo-pplk-2025.png"
                alt="logo"
                className="w-[100%] sm:w-[60%] z-20"
              />
            </div>
            <div className="relative flex items-center justify-center">
              <img
                src="/assets/Podium.png"
                alt="podium"
                className="absolute w-[100%] sm:w-[60%] -translate-y-9 sm:-translate-y-16 z-10"
              />
            </div>
          </div>
          <div className="w-[25%] justify-center items-center flex relative ">
            <img
              src="/assets/logo-pplk-2025.png"
              alt="logo"
              className="grayscale filter w-[100%] sm:w-[85%] sm:-translate-x-14"
            />
          </div>
        </div>
        <div className="mt-10">
          <div className="max-w-72 mx-auto">
            <p className="sm:text-2xl font-greek text-xl font-bold tracking-widest text-center">
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
        <div className="font-greek text-jaffa-600 text-xl font-bold tracking-widest text-center">
          <p>SEMUA DIVISI PPLK</p>
        </div>
        <div className="sm:mt-16 max-w-6xl mx-auto mt-12">
          <div className="flex items-center justify-center">
            <img
              src="/assets/Frame Divisi PPLK.png"
              alt="frame"
              className="sm:w-[19.1%] xl:w-[20%] mx-auto w-[50%]"
            />
          </div>

          {/* dekstop layout */}
          <div className="xl:flex sm:mt-6 flex-wrap justify-between hidden mt-12">
            {frames.map((src, index) => (
              <div
                key={index}
                className="flex items-center justify-center mt-10"
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
                className="flex items-center justify-center mx-auto mt-10"
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
            <div className="xl:hidden flex justify-center mt-8">
              <button
                onClick={loadMore}
                className="bg-jaffa-600 px-4 py-2 text-white rounded shadow"
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
