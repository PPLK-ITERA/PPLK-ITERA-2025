import React from "react";

import bingkai from "!assets/mading/bingkai.png";
import historyCompletedMobile from "!assets/mading/history-completed-mobile.png";
import historyCompleted from "!assets/mading/history-completed.png";
import jampasir from "!assets/mading/jampasir.png";

function CompletedMessage() {
  return (
    <div className="md:mt-36 md:px-10 px-2 mt-20">
      <div className="relative w-full md:min-w-[600px] lg:min-w-[800px] min-w-[300px] flex justify-center items-start xl:min-w-[1080px] xl:min-h-[472px] h-full py-5">
        <img
          src={historyCompleted}
          alt="kompas"
          className="md:block absolute inset-0 hidden mx-auto"
        />

        <img
          src={historyCompletedMobile}
          alt="kompas"
          className="md:hidden absolute inset-0 block mx-auto"
        />

        <img
          src={bingkai}
          alt="kompas"
          className="md:w-32 xl:w-48 xl:h-48 xl:-top-20 xl:-left-16 md:h-32 -top-10 -left-5 md:-top-16 md:-left-10 absolute z-10 w-20 h-20"
        />

        <img
          src={jampasir}
          alt="kompas"
          className="md:w-32 xl:w-48 xl:h-48 xl:-right-20 md:h-32 -bottom-5 max-[320px]:-right-0 md:-bottom-16 lg:-bottom-16 xl:-bottom-2 md:-right-10 md:rotate-12 rotate-12 absolute z-10 w-16 h-16 min-[375px]:-right-5"
        />

        <div className="font-greek md:max-w-md lg:max-w-lg xl:max-w-xl z-10 flex lg:mt-5 flex-col items-center justify-start max-w-[300px]">
          <h2 className="text-jaffa-700 xl:text-6xl z-10 text-2xl font-bold">
            Selesai
          </h2>

          <div className="md:max-w-sm lg:max-w-lg xl:max-w-xl lg:text-2xl md:text-lg text-jaffa-950 lg:mt-10 z-10 mt-2 text-[12px] text-center">
            <p>
              Selamat Naramuda!, kalian telah berhasil mengumpulkan 6 sisi dari
              Mading ini!
            </p>

            <p className="mt-3 max-w-[85%] mx-auto">
              Dengan bangga kami berikan Mading ini kepada kalian.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedMessage;
