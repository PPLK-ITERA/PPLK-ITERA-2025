import React from "react";

import { useAos } from "@/lib/hooks/useAos";

const renderWithBreaks = (text) => {
  return text.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

function VisiMisi({ ketum, prodi, visi, misi }) {
  useAos();

  return (
    <div className="place-content-center place-items-center flex flex-col gap-12">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="max-md:flex-col place-content-center flex"
      >
        <div className="md:px-36 flex flex-col items-center px-4 py-6 text-center bg-white rounded-lg shadow-2xl">
          <p className="font-avigea text-candlelight-600 text-lg sm:text-2xl md:text-[25px]">
            KETUA UMUM
          </p>
          <p className="font-montserrat text-base md:text-[20px] font-bold mt-2 text-center">
            {ketum}
          </p>
          <p className="font-montserrat text-sm md:text-[16px]">{prodi}</p>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="max-md:flex-col place-content-center flex gap-10"
      >
        <div className="py-4 sm:py-8 px-2 md:p-8 flex flex-col gap-4 items-center text-center rounded-[3px] bg-white shadow-2xl">
          <p className="font-avigea text-candlelight-600 text-lg sm:text-2xl md:text-[25px]">
            VISI
          </p>
          <p className="p-2 font-montserrat text-sm sm:text-[16px]">
            {renderWithBreaks(visi)}
          </p>
        </div>

        <div className="sm:py-8 md:p-8 flex flex-col items-center gap-4 px-2 py-4 text-center bg-white rounded-lg shadow-2xl">
          <p className="font-avigea text-candlelight-600 text-lg sm:text-2xl md:text-[25px]">
            MISI
          </p>

          <p className="p-2 font-montserrat md:text-justify text-start text-sm sm:text-[16px]">
            {renderWithBreaks(misi)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VisiMisi;
