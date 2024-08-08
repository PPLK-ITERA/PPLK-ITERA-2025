import React from "react";

import ig from "!assets/sosmed/ig.png";
import tiktok from "!assets/sosmed/tiktok.png";
import www from "!assets/sosmed/www.png";
import x from "!assets/sosmed/x.png";
import yt from "!assets/sosmed/yt.png";

const SosmedKM = () => {
    return (
        <div className="z-20 flex items-center justify-center mt-32">
            <div className="flex sm:h-[315px] sm:w-[600px] h-[170px] w-[300px] flex-col items-center justify-center rounded-xl bg-gradient-to-r from-[#B54419] to-[#90381C] shadow-2xl z-20 pb-7">
                <h2 className="font-avigea sm:text-[36px] text-[14px] text-white text-center sm:underline sm:underline-offset-[24px] underline-offset-[18px] font-light mt-16">
                    SOSIAL MEDIA KM ITERA
                </h2>
                <div className="sm:gap-6 sm:pt-10 flex flex-row gap-2 pt-2 pb-1">
                    <div className="flex items-center justify-center overflow-hidden bg-white rounded-full">
                        <a
                            href="https://www.instagram.com/km_itera/"
                            target="_blank"
                        >
                            <img src={ig} alt="instagram" className="p-3" />
                        </a>
                    </div>

                    <div className="flex items-center justify-center overflow-hidden bg-white rounded-full">
                        <a
                            href="https://www.youtube.com/@KMITERA"
                            target="_blank"
                        >
                            <img src={yt} alt="youtube" className="p-2" />
                        </a>
                    </div>

                    <div className="flex items-center justify-center overflow-hidden bg-white rounded-full">
                        <a
                            href="https://www.tiktok.com/@kmitera"
                            target="_blank"
                        >
                            <img src={tiktok} alt="tiktok" className="p-3" />
                        </a>
                    </div>
                </div>

                <p className="sm:text-[16px] text-[14px] font-montserrat text-white">
                    Website
                </p>
                <div className="sm:h-[40px] sm:w-[432px] h-[30px] w-[270px] rounded-xl bg-white shadow-2xl flex flex-row items-center justify-center gap-1 mx-7 mb-10 sm:mt-4 sm:py-2 py-2 ">
                    <img src={www} alt="www" />
                    <a
                        href="https://km.itera.ac.id/"
                        className="font-montserrat text-[14px] sm:text-[16px] text-black"
                    >
                        https://km.itera.ac.id/
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SosmedKM;
