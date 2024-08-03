import React, { useState } from "react";

import Airasta from "!assets/logodivisi/Airasta.png";
import Amphorta from "!assets/logodivisi/Amphorta.png";
import Berdhana from "!assets/logodivisi/Berdhana.png";
import Caetana from "!assets/logodivisi/Caetana.png";
import Darsatica from "!assets/logodivisi/Darsatica.png";
import Dharmaleus from "!assets/logodivisi/Dharmaleus.png";
import Karceus from "!assets/logodivisi/Karceus.png";
import Kartatera from "!assets/logodivisi/Kartatera.png";
import Kracias from "!assets/logodivisi/Kracias.png";
import Lixus from "!assets/logodivisi/Lixus.png";
import Mercopium from "!assets/logodivisi/Mercopium.png";
import Prajamusi from "!assets/logodivisi/Prajamusi.png";
import Ragita from "!assets/logodivisi/Ragita.png";
import Rakula from "!assets/logodivisi/Rakula.png";
import Sakasella from "!assets/logodivisi/Sakasella.png";
import Utsala from "!assets/logodivisi/Utsala.png";
import Vagiotesis from "!assets/logodivisi/Vagiotesis.png";

const DATA_DIVISI = [
    { nama: "Prajamusi", logo: Prajamusi },
    { nama: "Sakasella", logo: Sakasella },
    { nama: "Utsala", logo: Utsala },
    { nama: "Rakula", logo: Rakula },
    { nama: "Darsatica", logo: Darsatica },
    { nama: "Berdhana", logo: Berdhana },
    { nama: "Amphorta", logo: Amphorta },
    { nama: "Lixus", logo: Lixus },
    { nama: "Caetana", logo: Caetana },
    { nama: "Ragita", logo: Ragita },
    { nama: "Kartatera", logo: Kartatera },
    { nama: "Mercopium", logo: Mercopium },
    { nama: "Dharmaleus", logo: Dharmaleus },
    { nama: "Karceus", logo: Karceus },
    { nama: "Airasta", logo: Airasta },
    { nama: "Kracias", logo: Kracias },
];

const Divisi = () => {
    const [visibleCount, setVisibleCount] = useState(4);

    const itemPerLoad = 4;

    const loadMore = () => setVisibleCount((count) => count + itemPerLoad);

    return (
        <div
            className="flex flex-col items-center justify-center pb-20 mt-10"
            id="divisi-pplk"
        >
            <h2 className="font-avigea sm:text-3xl text-candlelight-600 text-2xl text-center">
                SEMUA DIVISI PPLK
            </h2>

            <div>
                <img
                    src={Vagiotesis}
                    alt={"Vagiotesis"}
                    className="object-contain w-full h-full mt-5 hover:scale-110 transition-all duration-300 hover:cursor-pointer"
                />
            </div>

            <div className="sm:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4 mt-5 mb-10">
                {DATA_DIVISI.slice(0, visibleCount).map((item, index) => (
                    <div key={index} className={`hover:scale-110 transition-all duration-300 hover:cursor-pointer`}>
                        <img
                            src={item.logo}
                            alt={item.nama}
                            className="object-contain w-full h-full"
                        />
                    </div>
                ))}
            </div>

            {visibleCount < DATA_DIVISI.length && (
                <div className="flex justify-center mb-2 -mt-8">
                    <button
                        onClick={loadMore}
                        className="bg-jaffa-600 px-4 py-2 text-white rounded shadow"
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Divisi;
