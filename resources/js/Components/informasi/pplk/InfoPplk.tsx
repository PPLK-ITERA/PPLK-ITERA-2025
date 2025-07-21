import Divisi from "./Divisi";
import FilosofiLogoInfo from "./FilosofiLogoInfoPplk";
import Misi from "./Misi";
import Visi from "./Visi";

import React from "react";

import logoPplk from "!assets/logo-pplk-hd.png";

export default function Hero() {
  return (
    <div className="max-w-7xl min-h-screen px-8 mx-auto">
      <div className="max-lg:flex-col-reverse flex items-center justify-center gap-8">
        <div className="flex flex-col">
          <h2 className="max-lg:text-center flex flex-col gap-4">
            <span className="font-greek text-candlelight-600 sm:text-3xl lg:mt-10 text-xl">
              PPLK ITERA 2025{" "}
            </span>
            <span className="font-greek text-candlelight-600 sm:text-3xl text-balance text-xl">
              Nagarika Anvensana : Exploration For The Future
            </span>
          </h2>

          <p className="font-montserrat text-justify sm:text-[20px] text-[16px] mt-4">
            Program Pengenalan Lingkungan Kampus Institut Teknologi Sumatera
            2025 atau PPLK ITERA 2025 adalah sebuah kegiatan orientasi bagi
            seluruh Mahasiswa Baru Institut Teknologi Sumatera tahun angkatan
            2025. PPLK ITERA 2025 diusung dengan tajuk Nagarika Anvensana :
            Exploration For The Future, dan bertema Futuristic Nusantara
          </p>
          <br />
          <p className="font-montserrat text-justify sm:text-[20px] text-[16px]">
            Kegiatan PPLK ITERA diusung dengan harapan bisa memberikan pemahaman
            dan memperkenalkan dunia kampus kepada seluruh Mahasiswa baru di
            Institut Teknologi Sumatera, sehingga para mahasiswa baru bisa
            menghadapi perkuliahan dengan lebih baik.
          </p>
        </div>

        <img
          src={logoPplk}
          alt="pplk-logo"
          width={390}
          height={390}
          className="sm:w-80 sm:h-80 z-20 flex items-center"
        />
      </div>

      <Visi />

      <Misi />

      <FilosofiLogoInfo />

      <Divisi />
    </div>
  );
}
