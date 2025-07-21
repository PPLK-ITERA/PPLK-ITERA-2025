import React from "react";

import { Card } from "@/Components/ui/card";

import KM from "!assets/logokm/km.png";

const SejarahKM = () => {
  return (
    <div className="md:mt-48 lg:mt-32 flex items-center justify-center mt-48">
      <Card className="lg:flex lg:flex-row flex w-full xl:w-[1155px] flex-col items-center justify-center lg:items-start rounded-[20px] bg-gradient-to-t from-[#A6680C] to-[#B9822F] shadow-2xl lg:px-10 pb-8 mx-2">
        <div className="lg:flex lg:flex-row lg:h-[322px] lg:w-[322px] rounded-[20px] w-[200px] h-[285px] bg-white lg:mt-24 p-8 -mt-40 border border-black">
          <img
            src={KM}
            alt="logo"
            className="lg:object-contain lg:w-full object-cover w-full h-full"
          />
        </div>

        <div className="md:px-14 flex flex-col w-full px-3 mt-8">
          <h2 className="font-greek text-[20px] lg:text-[39px] text-white text-center">
            SEJARAH & INFORMASI <br className="md:hidden" />
            KM ITERA <br />
          </h2>

          <p className="font-montserrat lg:text-[20px] text-[16px] text-white font-light mt-7 text-wrap">
            KM-ITERA (Keluarga Mahasiswa Institut Teknologi Sumatera) merupakan
            organisasi kemahasiswaan intra perguruan tinggi yang diselenggarakan
            berdasarkan prinsip dari, oleh dan untuk mahasiswa demi menciptakan
            kader-kader bangsa yang berpotensi melanjutkan kesinambungan
            pembangunan nasional. <br /> <br />
            Organisasi kemahasiswaan tertinggi di ITERA diwadahi dalam Keluarga
            Mahasiswa (KM) ITERA. Pada tanggal 16 Mei 2015 Badan Pendiri
            Keluarga Mahasiswa (BPKM) Itera telah menyelenggarakan forum
            mahasiswa yang menghasilkan pengesahan Anggaran Dasar dan Anggaran
            Rumah Tangga (AD/ART) Keluarga Mahasiswa (KM) Itera. <br /> <br />
            Dalam badan kelengkapan, Kabinet KM-ITERA memiliki fungsi sebagai
            lembaga pemegang kekuasaan eksekutif dalam kehidupan kemahasiswaan
            di Institut Teknologi Sumatera, sementara itu Senat KM-ITERA adalah
            dewan pemegang kekuasaan legislatif dalam kehidupan kemahasiswaan di
            Institut Teknologi Sumatera. Kabinet KM-ITERA memayungi HMPS
            (Himpunan Mahasiswa Program Studi) dan UKM (Unit Kegiatan
            Mahasiswa).
          </p>
        </div>
      </Card>
    </div>
  );
};

export default SejarahKM;
