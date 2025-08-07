import React from "react";

function Page() {
  return (
    <div className="flex items-center justify-center mt-4">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="bg-gradient-to-t font-greek bg-clip-text sm:text-3xl text-candlelight-600 text-2xl">
          VISI
        </h2>
        <div className="flex justify-center gap-0">
          <span className="text-[50px] font-bold font-montserrat">“</span>

          <p className="max-w-[826px] font-montserrat sm:text-[20px] text-[16px] font-normal mt-3">
            PPLK ITERA 2025 sebagai wadah pengembangan karakter mahasiswa baru yang berintegrasi dan berdaya saing, menumbuhkan rasa bangga sebagai bagian dari civitas akademika ITERA, serta membentuk mahasiswa yang “AKTIF” (Aktif, Kritis, Solutif dan Inovatif) dalam menghadapi tantangan di era Revolusi Industri 4.0.
          </p>

          <span className="text-[50px] font-bold font-montserrat">”</span>
        </div>
      </div>
    </div>
  );
}

export default Page;
