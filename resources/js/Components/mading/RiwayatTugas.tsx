import React from "react";

import { HistoryEntry } from "@/lib/types/Mading";

interface RiwayatTugasProps {
    historys: HistoryEntry[];
}

const RiwayatTugas = ({ historys }: RiwayatTugasProps) => {
    return (
        <div className="bg-white border-t-4 border-jaffa-950 p-6 rounded-lg shadow-2xl max-w-full md:max-w-[1152px] min-w-[300px] md:min-w-[600px] lg:min-w-[1080px] mx-auto mt-24 font-montserrat">
            <h2 className="text-[20px] md:text-[25px] font-extrabold text-black mb-4">
                Riwayat Tugas
            </h2>

            {historys.map((history, index) => (
                <div key={index} className="mb-6">
                    <div className="md:flex-row md:items-center md:gap-5 flex flex-col items-start justify-between gap-1">
                        <div className="md:mb-0 mb-2">
                            <h3 className="text-[18px] md:text-[20px] text-black font-bold">
                                Tugas {history.tugas.judul}
                            </h3>

                            {history.isReturn ? (
                                <div className="px-4 py-2 mt-2 border rounded-lg shadow-inner">
                                    <strong className="block mb-1">
                                        Catatan pengembalian
                                    </strong>

                                    <p className="text-[14px] md:text-[16px]">
                                        {history.catatan}
                                    </p>
                                </div>
                            ) : null}
                        </div>

                        <div className="flex items-center gap-2">
                            <p>Status:</p>
                            <div
                                className={`text-white px-4 py-1 rounded-md font-bold ${
                                    history.isReturn
                                        ? "bg-red-600"
                                        : "bg-green-600"
                                }`}
                            >
                                {history.isReturn ? "Dikembalikan" : "Diterima"}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RiwayatTugas;
