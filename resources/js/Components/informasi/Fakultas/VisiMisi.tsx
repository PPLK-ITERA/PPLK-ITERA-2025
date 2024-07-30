import React from "react";

import { FAKULTAS_DATA, FakultasData } from "@/lib/data/fakultas";

export default function VisiMisi({ fakultas }: { fakultas: string }) {
    const selectedFakultas: FakultasData = FAKULTAS_DATA[fakultas];
    return (
        <>
            <div className="max-w-4xl p-6 mx-auto mt-16">
                <div className="bg-flower-pattern rounded-lg">
                    <div className="bg-gradient-to-r from-jaffa-700/90 to-jaffa-800/90 font-montserrat relative p-6 rounded-lg">
                        <div className="text-xl font-bold absolute top-0 -mt-6 -left-2 bg-white text-jaffa-700 py-2 rounded-full border-4 border-[#B9822F] px-14">
                            VISI
                        </div>

                        <p className="mt-6 text-white">
                            “{selectedFakultas.visi}”
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl p-6 mx-auto mt-16">
                <div className="bg-flower-pattern rounded-lg">
                    <div className="bg-gradient-to-r from-jaffa-700/90 to-jaffa-800/90 font-montserrat relative p-6 rounded-lg">
                        <div className="text-xl font-bold absolute top-0 -mt-6 -left-2 bg-white text-jaffa-700 py-2 rounded-full border-4 border-[#B9822F] px-14">
                            MISI
                        </div>
                        <p className=" mt-6 space-y-3 text-white">
                            {selectedFakultas.misi.map(
                                (misi: string, index: number) => (
                                    <div key={index} className="flex gap-2">
                                        <p>{index + 1}.</p>
                                        <p>{misi}</p>
                                    </div>
                                ),
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
