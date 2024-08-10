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
    <div className="z-10 mx-auto">
      <div className="md:px-8 lg:px-0 md:mt-10 max-w-4xl px-4 mx-auto mt-8 space-y-3">
        <h2 className="font-avigea text-moccaccino-500 self-stretch p-5 text-6xl not-italic font-normal text-center">
          Deskripsi
        </h2>

        <p className="font-montserrat font-3xl self-stretch pb-20 not-italic font-normal leading-9 text-justify text-black">
          {description ? description : `...`}
        </p>
      </div>

      <div className="md:px-8 lg:px-0 md:mt-10 max-w-4xl px-4 mx-auto mt-8 space-y-3">
        <h2 className="font-avigea text-moccaccino-500 self-stretch p-5 text-6xl not-italic font-normal text-center">
          Sejarah
        </h2>

        <p className="font-montserrat font-3xl self-stretch pb-20 not-italic font-normal leading-9 text-justify text-black">
          {history ? history : `...`}
        </p>
      </div>
    </div>
  );
}
