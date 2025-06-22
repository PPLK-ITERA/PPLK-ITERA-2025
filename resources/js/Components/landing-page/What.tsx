import React from "react";

import { Link } from "@inertiajs/react";

import { useAos } from "@/lib/hooks/useAos";

export default function What() {
  useAos();

  return (
    <div
      data-aos="fade-up"
      data-aos-duration={1000}
      className="flex relative min-h-[70vh] items-center justify-center pt-20 md:pt-32"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="z-40 bg-gradient-to-t from-[#A6680C] to-[#B9822F] bg-clip-text font-avigea text-3xl text-transparent md:text-5xl">
          Apa Itu PPLK ITERA?
        </h2>

        <p className="mt-10 max-w-[826px] font-montserrat text-[16px] font-normal md:text-xl lg:text-2xl">
          PPLK adalah singkatan dari Program Pengenalan Lingkungan Kampus. PPLK
          adalah acara yang diperuntukkan bagi mahasiswa baru untuk mengenali
          kampus dan mempersiapkan mereka untuk perjalanan baru sebagai
          mahasiswa.{" "}
          <span className="md:block hidden">
            PPLK dapat menjadi langkah awal yang penting dalam membentuk
            mahasiswa yang cerdas secara akademis, memiliki integritas, semangat
            sosial, dan komitmen terhadap kebaikan bersama
          </span>
        </p>

        <Link
          href="/informasi/pplk"
          className="mx-2 mt-10 rounded-[6px] bg-gradient-to-t from-[#A6680C] to-[#B9822F] px-4 py-[10px] font-montserrat text-[16px] font-semibold text-white shadow-sm"
        >
          Informasi PPLK
        </Link>
      </div>
    </div>
  );
}
