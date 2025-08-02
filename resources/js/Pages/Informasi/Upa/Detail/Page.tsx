import Error from "@/Pages/Error";
import React from "react";
import { Head } from "@inertiajs/react";
import DefaultLayout from "@/Layouts/DefaultLayout";
import DescriptionHistory from "@/Components/informasi/Upa/DescriptionHistory";
import Header from "@/Components/informasi/Upa/Header";
import KegiatanUnggulan from "@/Components/informasi/Upa/KegiatanUnggulan";
import KepalaUPT from "@/Components/informasi/Upa/KepalaUPT";
import VisiMisi from "@/Components/informasi/Upa/VisiMisi";

import { DetailUPTData } from "@/lib/data/upa";

import overlay_box from "!assets/overlay-box.png";
import pillar_brown from "!assets/pillar-brown.png";

function Page({ nama_upa }) {
  const upa = DetailUPTData.find((upa) => upa.key === nama_upa);

  if (!upa) {
    return <Error status={404} />;
  }

  return (
    <>
      <Head title={`Informasi ${upa.title}`} />

      <DefaultLayout>
        <div className="h-screen relative min-h-[40vh] bg-mobile-hero-background bg-cover bg-bottom md:min-h-screen md:bg-desktop-hero-background lg:bg-desktop-hero-background">
          <Header
            upt={upa?.title}
            title={upa?.title}
            headerDescription={upa?.headerDescription}
          />
        </div>

        <div className="bg-pattern-white relative z-20 py-20">
          <div className="bg-gradient-to-b hidden md:block from-white/80 to-transparent absolute top-0 left-0 right-0 h-[500px]" />
          <div className="max-w-5xl mx-auto">
            <div className="md:flex w-full">
              <DescriptionHistory
                description={upa?.description}
                history={upa?.history}
              />
            </div>

            <VisiMisi visi={upa?.visi} misi={upa!.misi} />
          </div>

          <img
            src={pillar_brown}
            alt="pillar_brown"
            className="lg:visible absolute bottom-0 z-20 invisible w-full"
          />

          <img
            src={overlay_box}
            alt="pillar_brown"
            className="absolute -mt-[50px] w-full lg:-mt-[100px] xl:-mt-[200px] z-20 invisible lg:visible"
          />
        </div>

        <div className="bg-pattern-white relative z-20 py-20">
          <KepalaUPT
            nama_upt={upa?.title}
            nama_kepala_upt={upa?.kepalaUpt.nama}
            jabatan={upa?.kepalaUpt.jabatan}
            nip={upa?.kepalaUpt.nip}
            foto_kepala_upt={upa?.kepalaUpt.foto}
            link_instagram={upa?.sosmedUPT.instagram}
            link_youtube={upa?.sosmedUPT.youtube}
            link_website={upa?.sosmedUPT.website}
          />
        </div>

        <KegiatanUnggulan kegiatanUnggulan={upa!.kegiatanUnggulan} />
      </DefaultLayout>
    </>
  );
}

export default Page;
