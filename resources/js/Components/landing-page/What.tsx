import React from "react";

import { Link } from "@inertiajs/react";

import { useAos } from "@/lib/hooks/useAos";

import logoPplkHd from "!assets/logo-pplk-hd.png";
import podium_logo from "!assets/podium-logo.png";

export default function What() {
  useAos();

  return (
    <div
      data-aos="fade-up"
      data-aos-duration={1000}
      className="flex relative min-h-[70vh] items-start justify-center pt-20 md:pt-32"
    >
      <div className="flex flex-col items-center justify-center min-h-[70vh] pt-20 md:pt-32">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-4 md:px-8 gap-10">
          <div className="text-left md:w-1/2">
            <h2 className="bg-gradient-to-t from-[#A6680C] to-[#B9822F] bg-clip-text text-transparent font-greek text-7xl md:text-7xl">
              Apa Itu PPLK ITERA?
            </h2>
            <p className="mt-6 font-montserrat text-[16px] md:text-xl lg:text-2xl">
              PPLK adalah singkatan dari Program Pengenalan Lingkungan Kampus.
              PPLK adalah acara yang diperuntukkan bagi mahasiswa baru untuk
              mengenali kampus dan mempersiapkan mereka untuk perjalanan baru
              sebagai mahasiswa.{" "}
              <span className="md:block hidden">
                PPLK dapat menjadi langkah awal yang penting dalam membentuk
                mahasiswa yang cerdas secara akademis, memiliki integritas,
                semangat sosial, dan komitmen terhadap kebaikan bersama
              </span>
            </p>
            <Link
              href="/informasi/pplk"
              className="inline-block mt-6 rounded-[6px] bg-gradient-to-t from-[#be3f00] to-[#be3f0033] px-4 py-[10px] font-montserrat text-[16px] font-semibold text-white shadow-sm"
            >
              Informasi PPLK
            </Link>
          </div>

          {/* Bagian Logo + Podium */}
          <div className="md:w-1/2 flex flex-col items-center mt-5 md:mt-0">
            <img
              src={logoPplkHd}
              alt="Logo PPLK"
              className="w-[300px] -ml-12 mt-10" // Logo lebih kecil
            />
            <img
              src={podium_logo}
              alt="Alas"
              className="w-full -ml-7" // Podium lebih besar
            />
          </div>
        </div>
      </div>
    </div>
  );
}
