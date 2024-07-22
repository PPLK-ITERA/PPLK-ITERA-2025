import React, { useState } from "react";

import frame from "!assets/Frame Divisi PPLK.png";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Divisi = () => {
    const [visibleCount, setVisibleCount] = useState(4);

    const itemPerLoad = 3;

    const loadMore = () => setVisibleCount((count) => count + itemPerLoad);

    return (
        <div
            className="flex flex-col items-center justify-center pb-20 mt-10"
            id="divisi-pplk"
        >
            <h2 className="font-avigea sm:text-3xl text-candlelight-600 text-2xl text-center">
                SEMUA DIVISI PPLK
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mt-10 mb-10">
                {data.slice(0, visibleCount).map((item, index) => (
                    <div key={index}>
                        <img src={frame} alt="" />
                    </div>
                ))}
            </div>

            {visibleCount < data.length && (
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
