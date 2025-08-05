import React from "react";

interface DescriptionHistoryProps {
  description?: string;
  history?: string;
}

export default function DescriptionHistory({
  description,
  history,
}: DescriptionHistoryProps) {
  return (
    <div className="z-10 mx-auto max-w-7xl">
      <div className="md:px-8 lg:px-0 md:mt-10 px-4 mx-auto mt-8 space-y-3">

        {/* mengganti warna pada bagian deskripsi dan sejarah (warna, letak teks, ukuran teks) */}
        <h2 className="font-greek text-black self-stretch p-5 text-3xl not-italic font-normal text-center pt-10 lg:text-5xl md:text-4xl sm:text-3xl">
          Deskripsi
        </h2>
        <p className="font-montserrat sm:text-sm md:text-xl lg:text-xl self-stretch not-italic font-medium leading-9 text-center text-black px-9 sm:px-9 md:px-7 lg:px-0">
          {description ? description : `...`}
        </p>
      </div>

      <div className="md:px-8 lg:px-0 md:mt-10 px-4 mx-auto mt-8 space-y-3">
        <h2 className="font-greek text-black self-stretch p-5 text-3xl not-italic font-normal text-center pt-10 lg:text-5xl md:text-4xl sm:text-3xl">
          Sejarah
        </h2>

        <p className="font-montserrat sm:text-sm md:text-xl lg:text-xl self-stretch pb-20 not-italic font-medium leading-9 text-center text-black px-9 sm:px-9 md:px-7 lg:px-0">
          {history ? history : `...`}
        </p>
      </div>
    </div>
  );
}
