import React from "react";

import { Head } from "@inertiajs/react";

import DefaultLayout from "@/Layouts/DefaultLayout";

import { AccordionAtribut } from "@/Components/AccordionAtribut";

import { useAos } from "@/lib/hooks/useAos";

// component utama
function Page() {
  useAos();

  return (
    <>
      <Head title="Ketentuan Atribut" />

      <DefaultLayout isSolid={true}>
        <div className="bg-pattern-white min-h-screen">
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className="xl:max-w-4xl md:max-w-2xl md:pt-20 lg:pt-24 max-w-xs pt-20 mx-auto"
          >
            <h2 className="font-avigea text-center bg-gradient-to-t from-[#A6680C] to-[#B9822F] bg-clip-text text-transparent w-fit pt-[30px] text-3xl md:text-5xl mx-auto">
              Ketentuan Atribut
            </h2>

            <p className="mt-5 text-center md:text-[16px] text-[12px] font-montserrat lg:text-[20px]">
              Halaman ini menampilkan atribut untuk kegiatan PPLK ITERA 2024
              untuk setiap harinya. Pastikan kamu menggunakan atribut yang tepat
              sesuai dengan ketentuan yang berlaku ya!
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="container p-4 mx-auto md:mt-[56px]"
          >
            <AccordionAtribut />
          </div>

          <div className="xl:max-w-4xl md:max-w-2xl max-w-xs py-5 mx-auto">
            <p className="font-montserrat text-center">
              <strong>Catatan:</strong> <br />
              <strong>Sesuaikan</strong> dengan instruksi yang diberikan oleh{" "}
              <strong>Daplok dan Mentor</strong> jika ada perubahan
            </p>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}

export default Page;
