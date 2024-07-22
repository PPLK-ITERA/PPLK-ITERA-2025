import React from "react";

import { VisiMisiUPT } from "@/constants/upt";

export default function VisiMisi() {
    return (
        <div className="z-30">
            <div className="z-30 max-w-4xl p-6 mx-auto mt-16">
                <div className="bg-flower-pattern rounded-lg">
                    <div className="bg-gradient-to-r from-jaffa-700/90 to-jaffa-800/90 font-montserrat relative p-6 rounded-lg">
                        <div className="text-xl font-bold absolute top-0 -mt-6 -left-2 bg-white text-jaffa-700 py-2 rounded-full border-4 border-[#B9822F] px-14">
                            VISI
                        </div>

                        <p className="mt-6 text-white">
                            “{VisiMisiUPT["fakultas-sains"].visi}”
                        </p>
                    </div>
                </div>
            </div>

            <div className="z-30 max-w-4xl p-6 mx-auto mt-16">
                <div className="bg-flower-pattern rounded-lg">
                    <div className="bg-gradient-to-r from-jaffa-700/90 to-jaffa-800/90 font-montserrat relative p-6 rounded-lg">
                        <div className="text-xl font-bold absolute top-0 -mt-6 -left-2 bg-white text-jaffa-700 py-2 rounded-full border-4 border-[#B9822F] px-14">
                            MISI
                        </div>
                        <p className=" mt-6 space-y-3 text-white">
                            {VisiMisiUPT["fakultas-sains"].misi.map(
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
        </div>
    );
}
