import React from "react";

import { FAKULTAS_DATA, FakultasData } from "@/lib/data/fakultas";
import { useAos } from "@/lib/hooks/useAos";

const Hero = ({ fakultas }) => {
  const selectedFakultas: FakultasData = FAKULTAS_DATA[fakultas];

  useAos();

  return (
    <div>
      <div className="md:flex md:flex-col lg:flex-row md:items-center md:justify-center w-full">
        <div
          className={`md:w-1/3 max-md:max-w-xs mx-auto md:h-[300px] overflow-hidden flex items-center justify-center ${fakultas === "fakultas-fti" ? "px-5 lg:p-10" : ""} ${fakultas === "fakultas-sains" ? "px-5 lg:p-10" : ""}`}
        >
          <img
            src={selectedFakultas.logo}
            className="object-contain w-full h-full"
          />
        </div>

        <div className="pt-14 md:w-2/3 lg:text-start pl-4 space-y-3 text-center">
          <p className="font-greek text-moccaccino-500 lg:max-w-[80%] lg:text-start md:text-center md:text-5xl text-3xl font-bold tracking-widest text-center">
            {selectedFakultas.title}
          </p>

          <p className="md:pt-4 pt-8">{selectedFakultas.description}</p>
        </div>
      </div>

      {/* <div data-aos="fade-up" data-aos-duration="600" className="md:px-8 md:text-center lg:text-start lg:px-0 md:mt-20 max-w-4xl px-4 mx-auto mt-16 space-y-3">
                <p className="font-greek text-moccaccino-500 md:text-5xl text-2xl font-bold tracking-widest">
                    Sejarah
                </p>
                <p>{selectedFakultas.history}</p>
            </div> */}
    </div>
  );
};

export default Hero;
