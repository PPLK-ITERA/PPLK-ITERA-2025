import React from "react";

function Page() {
    return (
        <div className="flex items-center justify-center mt-4">
            <div className="flex flex-col items-center justify-center text-center">
                <h2 className="bg-gradient-to-t font-avigea bg-clip-text sm:text-3xl text-candlelight-600 text-2xl">
                    VISI
                </h2>
                <div className="flex justify-center gap-0">
                    <span className="text-[50px] font-bold font-montserrat">
                        “
                    </span>

                    <p className="max-w-[826px] font-montserrat sm:text-[20px] text-[16px] font-normal mt-3">
                        PPLK 2024 sebagai gerbang pertama dalam terwujudnya
                        mahasiswa yang kompetitif, berintelektual, serta siap
                        menghadapi gempuran globalisasi.{" "}
                    </p>

                    <span className="text-[50px] font-bold font-montserrat">
                        ”
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Page;
