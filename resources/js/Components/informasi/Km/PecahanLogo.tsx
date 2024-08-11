import React from "react";

import KMITERA from "!assets/logokm/KMITERA.png";
import Lup from "!assets/logokm/Lup.png";
import Swarna from "!assets/logokm/Swarna.png";
import Toga from "!assets/logokm/Toga.png";
import U from "!assets/logokm/U.png";
import ITERA from "!assets/logokm/itera.png";
import KM from "!assets/logokm/km.png";

const PecahanLogo = () => {
  return (
    <div>
      <div className="md:gap-14 flex flex-row items-center justify-center gap-8">
        <div className="gap-14 flex flex-col items-center justify-center">
          <div className="md:w-44 md:h-44 flex items-center justify-center w-16 h-16 overflow-hidden bg-white rounded-full">
            <img src={ITERA} alt="logo" className="w-full h-full" />
          </div>

          <div className="md:w-44 md:h-44 flex items-center justify-center w-16 h-16 overflow-hidden bg-white rounded-full">
            <img src={Toga} alt="logo" className="w-full h-full" />
          </div>
        </div>

        <div className="gap-14 flex flex-col items-center justify-center">
          <div className="md:w-44 md:h-44 flex items-center justify-center w-16 h-16 overflow-hidden bg-white rounded-full">
            <img src={KMITERA} alt="logo" className="w-full h-full" />
          </div>
          <div className="md:w-44 md:h-44 flex items-center justify-center w-16 h-16 overflow-hidden bg-white rounded-full">
            <img
              src={KM}
              alt="logo"
              className="object-contain w-full h-full p-2"
            />
          </div>
          <div className="md:w-44 md:h-44 flex items-center justify-center w-16 h-16 overflow-hidden bg-white rounded-full">
            <img src={Swarna} alt="logo" className="w-full h-full" />
          </div>
        </div>

        <div className="gap-14 flex flex-col items-center justify-center">
          <div className="md:w-44 md:h-44 flex items-center justify-center w-16 h-16 overflow-hidden bg-white rounded-full">
            <img src={U} alt="logo" className="w-full h-full" />
          </div>
          <div className="md:w-44 md:h-44 flex items-center justify-center w-16 h-16 overflow-hidden bg-white rounded-full">
            <img src={Lup} alt="logo" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PecahanLogo;
