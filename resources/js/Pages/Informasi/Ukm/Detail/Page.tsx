import Error from "@/Pages/Error";

import React from "react";

import { Head } from "@inertiajs/react";

import DefaultLayout from "@/Layouts/DefaultLayout";

import Judul from "@/Components/informasi/Ukm/DetailUkm/Judul";
import { Prestasi } from "@/Components/informasi/Ukm/DetailUkm/Prestasi";
import Sosmed from "@/Components/informasi/Ukm/DetailUkm/Sosmed";
import PembinaKetua from "@/Components/informasi/Ukm/DetailUkm/PembinaKetua";

import { ukmData } from "@/lib/data/ukm";
import { useAos } from "@/lib/hooks/useAos";

// Import pattern Lampung background
import patternLampung from "!assets/pattern_lampung.png";

// Define interface for UKM data structure (sesuai dengan data existing)
interface UKMData {
  key: string;
  link: string;
  logo: string;
  title: string;
  namaketum: string;
  fotoketum: string;
  namapembina: string;
  fotopembina: string;
  prodi: string;
  sejarah: string;
  allprestasi: {
    prestasi: string;
    deskripsi: string;
  }[];
  allsosmed: {
    instagram: string;
    youtube: string;
    website: string;
    tiktok: string;
  }[];
}

function Page({ nama_ukm }: { nama_ukm: string }) {
  useAos();

  const ukm = ukmData.find((item) => item.key === nama_ukm) as UKMData | undefined;

  if (!ukm) {
    return <Error status={404} />;
  }

  return (
    <>
      <Head title={`Informasi UKM ${ukm.title}`} />

      <DefaultLayout isSolid={true}>
        <div className="py-24 lg:py-32 relative min-h-screen">
          {/* Background pattern untuk mobile - ukuran asli pattern (TIDAK DIUBAH) */}
          <div 
            className="absolute inset-0 opacity-20 lg:hidden"
            style={{
              backgroundImage: `url(${patternLampung})`,
              backgroundRepeat: 'repeat',
              backgroundPosition: 'top left',
              backgroundSize: 'auto' // Menggunakan ukuran asli gambar
            }}
          ></div>
          
          {/* Background pattern untuk desktop - kembali ke ukuran 50% seperti sebelumnya */}
          <div 
            className="absolute inset-0 opacity-20 hidden lg:block"
            style={{
              backgroundImage: `url(${patternLampung})`,
              backgroundRepeat: 'repeat',
              backgroundPosition: 'top left',
              backgroundSize: '50% 50%' // Kembali ke 50% untuk desktop
            }}
          ></div>
          
          {/* Overlay putih transparan untuk readability */}
          <div className="absolute inset-0 bg-white/15"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Header Section - Logo and Description */}
            <div className="mb-20 lg:mb-32">
              <Judul 
                title={ukm.title} 
                sejarah={ukm.sejarah} 
                logo={ukm.logo} 
              />
            </div>

            {/* Pembina and Ketua Cards */}
            <div className="mb-20 lg:mb-32">
              <PembinaKetua
                namaketum={ukm.namaketum}
                fotoketum={ukm.fotoketum}
                namapembina={ukm.namapembina}
                fotopembina={ukm.fotopembina}
                prodi={ukm.prodi}
              />
            </div>

<<<<<<< HEAD
            {/* Prestasi & Kegiatan Section */}
            <div className="mb-20 lg:mb-32">
              <div className="text-center mb-12">
                <h2
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  className="font-greek text-3xl md:text-4xl lg:text-5xl text-orange-800 mb-4"
                >
                  PRESTASI & KEGIATAN
                </h2>
                <div className="w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
              </div>
=======
            <div className="place-items-center flex flex-col gap-10 overflow-hidden">
              <h2
                data-aos="fade-down"
                data-aos-duration="1000"
                className="font-greek md:text-4xl z-20 text-2xl text-center text-black"
              >
                Prestasi & Kegiatan
              </h2>
>>>>>>> dev

              <Prestasi allprestasi={ukm.allprestasi} />
            </div>

<<<<<<< HEAD
            {/* Social Media Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  className="font-greek text-3xl md:text-4xl lg:text-5xl text-orange-800 mb-4"
                >
                  SOSIAL MEDIA
                </h2>
                <div className="w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
              </div>
=======
            <div className="place-content-center place-items-center flex flex-col gap-10">
              <h2
                data-aos="fade-down"
                data-aos-duration="1000"
                className="font-greek md:text-4xl z-20 text-2xl text-center text-black"
              >
                Sosial Media UKM
              </h2>
>>>>>>> dev

              <Sosmed allsosmed={ukm.allsosmed} />
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}

export default Page;