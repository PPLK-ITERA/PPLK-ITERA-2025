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


function Page({ nama_upa }) {
  const upa = DetailUPTData.find((upa) => upa.key === nama_upa);

  if (!upa) {
    return <Error status={404} />;
  }

  return (
    <div   style={{
    backgroundImage: 'url(/image/DetailUPA/patern3.png)',
    backgroundRepeat: 'repeat',
  }}>
      <Head title={`Informasi ${upa.title}`} />

      <DefaultLayout>
        {/* menambahkan background baru */}
      <div>
        {/* Responsive Mobile */}
        <div
          className="relative bg-cover bg-bottom md:hidden"
          style={{ backgroundImage: "url('/image/detailUPA/Header/desktop-hero-background.jpg')" }}
        >
          <Header
            upt={upa?.title}
            title={upa?.title}
            headerDescription={upa?.headerDescription}
          />
        </div>

        {/* Responsive Tablet */}
        <div
          className="hidden md:block lg:hidden relative max-h-[90vh] bg-cover bg-bottom"
          style={{ backgroundImage: "url('/image/detailUPA/Header/desktop-hero-background.jpg')" }}
        >
          <Header
            upt={upa?.title}
            title={upa?.title}
            headerDescription={upa?.headerDescription}
          />
        </div>

        {/* Responsive Desktop */}
        <div
          className="hidden lg:block relative max-h-[90vh] bg-cover bg-bottom"
          style={{ backgroundImage: "url('/image/detailUPA/Header/desktop-hero-background.jpg')" }}
        >
          <Header
            upt={upa?.title}
            title={upa?.title}
            headerDescription={upa?.headerDescription}
          />
        </div>
      </div>


        <div>
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

        </div>

        <div className="relative z-20 py-20" >
          <KepalaUPT
            nama_upt={upa?.title}
            nama_kepala_upt={upa?.kepalaUpt.nama}
            jabatan={upa?.kepalaUpt.jabatan}
            nip={upa?.kepalaUpt.nip}
            foto_kepala_upt={upa?.kepalaUpt.foto}
          />
        </div>

        <KegiatanUnggulan kegiatanUnggulan={upa!.kegiatanUnggulan} 
            link_instagram={upa?.sosmedUPT.instagram}
            link_youtube={upa?.sosmedUPT.youtube}
            link_website={upa?.sosmedUPT.website}
            link_tiktok={upa?.sosmedUPT.tiktok}/>
      </DefaultLayout>
    </div>
  );
}

export default Page;
