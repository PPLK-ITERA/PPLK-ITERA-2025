import React from "react";

import itera from "!assets/logokm/itera.png";
import kmPink from "!assets/logokm/km-tapi-pink.png";
import km from "!assets/logokm/km.png";
import sarjana from "!assets/logokm/sarjana.png";
import swarnabumi from "!assets/logokm/swarnabumi.png";
import tangan from "!assets/logokm/tangan.png";
import teleskop from "!assets/logokm/teleskop.png";

const PecahanLogo = () => {
    return (
        <div>
            <div className="gap-14 flex flex-row items-center justify-center">
                <div className="gap-14 flex flex-col items-center justify-center">
                    <div className="md:w-44 md:h-44 flex items-center justify-center overflow-hidden bg-white rounded-full">
                        <img src={itera} alt="logo" className="w-full h-full" />
                    </div>
                    <div className="md:w-44 md:h-44 flex items-center justify-center overflow-hidden bg-white rounded-full">
                        <img
                            src={sarjana}
                            alt="logo"
                            className="w-full h-full"
                        />
                    </div>
                </div>
                <div className="gap-14 flex flex-col items-center justify-center">
                    <div className="md:w-44 md:h-44 flex items-center justify-center overflow-hidden bg-white rounded-full">
                        <img
                            src={kmPink}
                            alt="logo"
                            className="w-full h-full"
                        />
                    </div>
                    <div className="md:w-44 md:h-44 flex items-center justify-center overflow-hidden bg-white rounded-full">
                        <img
                            src={km}
                            alt="logo"
                            className="w-full h-full p-2"
                        />
                    </div>
                    <div className="md:w-44 md:h-44 flex items-center justify-center overflow-hidden bg-white rounded-full">
                        <img
                            src={swarnabumi}
                            alt="logo"
                            className="w-full h-full"
                        />
                    </div>
                </div>
                <div className="gap-14 flex flex-col items-center justify-center">
                    <div className="md:w-44 md:h-44 flex items-center justify-center overflow-hidden bg-white rounded-full">
                        <img
                            src={tangan}
                            alt="logo"
                            className="w-full h-full"
                        />
                    </div>
                    <div className="md:w-44 md:h-44 flex items-center justify-center overflow-hidden bg-white rounded-full">
                        <img
                            src={teleskop}
                            alt="logo"
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PecahanLogo;
