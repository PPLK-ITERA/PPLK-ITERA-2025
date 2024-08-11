import Error from "@/Pages/Error";

import React from "react";

import { Head } from "@inertiajs/react";

import DefaultLayout from "@/Layouts/DefaultLayout";

import Judul from "@/Components/informasi/Ukm/DetailUkm/Judul";
import { Prestasi } from "@/Components/informasi/Ukm/DetailUkm/Prestasi";
import Sosmed from "@/Components/informasi/Ukm/DetailUkm/Sosmed";
import VisiMisi from "@/Components/informasi/Ukm/DetailUkm/VisiMisi";

import { ukmData } from "@/lib/data/ukm";
import { useAos } from "@/lib/hooks/useAos";

import gedung from "!assets/gedung-sponsor.png";

function Page({ nama_ukm }) {
  useAos();
  const ukm = ukmData.find((ukm) => ukm.key === nama_ukm);

  if (!ukm) {
    return <Error status={404} />;
  }

  return (
    <>
      <Head title={`Informasi UKM ${ukm.title}`} />

      <DefaultLayout isSolid={true}>
        <div className="bg-pattern-white py-36 lg:pb-64 relative">
          <div className="max-w-7xl gap-36 flex flex-col px-4 mx-auto">
            <Judul title={ukm.title} sejarah={ukm.sejarah} logo={ukm.logo} />

            <VisiMisi
              ketum={ukm.ketum}
              prodi={ukm.prodi}
              visi={ukm.visi}
              misi={ukm.misi}
            />

            <div className="place-items-center flex flex-col gap-10 overflow-hidden">
              <h2
                data-aos="fade-down"
                data-aos-duration="1000"
                className="font-avigea md:text-4xl z-20 text-2xl text-center text-black"
              >
                Prestasi & Kegiatan
              </h2>

              <Prestasi allprestasi={ukm.allprestasi} />
            </div>

            <div className="place-content-center place-items-center flex flex-col gap-10">
              <h2
                data-aos="fade-down"
                data-aos-duration="1000"
                className="font-avigea md:text-4xl z-20 text-2xl text-center text-black"
              >
                Sosial Media UKM
              </h2>

              <Sosmed allsosmed={ukm.allsosmed} />
            </div>
          </div>
        </div>

        <div className="relative w-full">
          <img
            src={gedung}
            alt="Gedung"
            className="absolute bottom-0 left-0 object-cover w-full"
          />
        </div>
      </DefaultLayout>
    </>
  );
}

export default Page;
