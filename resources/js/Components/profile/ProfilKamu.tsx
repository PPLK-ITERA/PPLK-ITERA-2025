import React from "react";

import gembok from "!assets/gembok.png";

const ProfilKamu = () => {
    return (
        <div className="flex flex-col gap-4 pl-5 pt-3 pr-5 pb-5">
            <h2 className="text-[20px] text-black font-montserrat font-bold">
                Profil Kamu
            </h2>
            <div>
                <label
                    htmlFor="full-name"
                    className="font-montserrat text-[14px] weight-500 mb-2 block"
                >
                    Nama Lengkap
                </label>
                <input
                    type="text"
                    className="xl:max-w-[396px] xl:max-h-[44px] w-full h-full rounded-lg border bg-gray-200 border-gray-400 font-montserrat text-[16px]"
                    value={"Jokowi"}
                    readOnly
                />
            </div>
            <div>
                <label
                    htmlFor="NIM"
                    className="font-montserrat text-[14px] weight-500 mb-2 block"
                >
                    NIM
                </label>
                <input
                    type="text"
                    className="xl:max-w-[396px] xl:max-h-[44px] w-full h-full rounded-lg border bg-gray-200 border-gray-400 font-montserrat text-[16px]"
                    value={"122140000"}
                    readOnly
                />
            </div>
            <div>
                <label
                    htmlFor="prodi"
                    className="font-montserrat text-[14px] weight-500 mb-2 block"
                >
                    Prodi
                </label>
                <input
                    type="text"
                    className="xl:max-w-[396px] xl:max-h-[44px] w-full h-full rounded-lg border bg-gray-200 border-gray-400 text-monserrat text-[16px]"
                    value={"Teknik Informatika"}
                    readOnly
                />
            </div>
            <h2 className="text-[20px] text-black font-montserrat font-semibold mt-3">
                Sosial Media
            </h2>
            <div className="relative">
                <label
                    htmlFor="linkedin"
                    className="font-montserrat text-[14px] mb-2 block"
                >
                    LinkedIn
                </label>
                <div className="relative">
                    <input
                        type="text"
                        id="linkedin"
                        className="xl:max-w-[396px] xl:max-h-[44px] w-full h-full rounded-lg border border-jaffa-600 bg-white text-monserrat text-[16px] pl-10"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <img
                            src={gembok}
                            alt="LinkedIn"
                            className="w-5 h-5 text-gray-500"
                        />
                    </div>
                </div>
            </div>
            <div className="relative">
                <label
                    htmlFor="instagram"
                    className="font-montserrat text-[14px] mb-2 block"
                >
                    Instagram
                </label>
                <div className="relative">
                    <input
                        type="text"
                        id="instagram"
                        className="xl:max-w-[396px] xl:max-h-[44px] w-full h-full rounded-lg border border-jaffa-600 bg-white text-monserrat text-[16px] pl-10"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <img
                            src={gembok}
                            alt="LinkedIn"
                            className="w-5 h-5 text-gray-500"
                        />
                    </div>
                </div>
            </div>
            <div>
                <label
                    htmlFor="bio"
                    className="font-montserrat text-[14px] weight-500 mb-2 block"
                >
                    Bio Relasi Jaringan
                </label>
                <textarea
                    id="bio"
                    className="xl:w-[396px] xl:h-[125px] w-full h-full rounded-lg border bg-white border-jaffa-600 text-monserrat text-[16px]"
                ></textarea>
            </div>
            <div className="flex justify-center items-center xl:w-[396px] xl:h-[40px] w-full h-full p-2 bg-gradient-to-b from-[#B9822F] to-[#A6680C] rounded-xl md:mt-4">
                <h2 className="text-[14px] font-montserrat font-semibold text-center text-white">
                    Simpan
                </h2>
            </div>
        </div>
    );
};

export default ProfilKamu;
