import React from "react";

const TentangPplk = () => {
    return (
        <div className="flex flex-col gap-4 pl-5 pt-3 pr-5 pb-5">
            <h2 className="text-[20px] text-black font-montserrat font-semibold">
                Tentang PPLK
            </h2>
            <div className="flex flex-row gap-2">
                <div>
                    <label
                        htmlFor="full-name"
                        className="font-montserrat text-[14px] weight-500 mb-2 block"
                    >
                        Nama Kelompok
                    </label>
                    <input
                        type="text"
                        className="xl:max-w-[190px] xl:max-h-[44px] max-w-[220px] w-full rounded-lg border bg-gray-200 border-gray-400 font-montserrat text-[16px]"
                        value={"Jokowi"}
                        readOnly
                    />
                </div>
                <div>
                    <label
                        htmlFor="full-name"
                        className="font-montserrat text-[14px] weight-500 mb-2 block"
                    >
                        Nomor Kelompok
                    </label>
                    <input
                        type="text"
                        className="xl:max-w-[190px] xl:max-h-[44px] w-full rounded-lg border bg-gray-200 border-gray-400 font-montserrat text-[16px]"
                        value={"69"}
                        readOnly
                    />
                </div>
            </div>
            <div>
                <label
                    htmlFor="full-name"
                    className="font-montserrat text-[14px] weight-500 mb-2 block"
                >
                    Nama Daplok
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
                    htmlFor="full-name"
                    className="font-montserrat text-[14px] weight-500 mb-2 block"
                >
                    Nama Mentor
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
                    htmlFor="bio"
                    className="font-montserrat text-[14px] weight-500 mb-2 block font-semibold"
                >
                    Sertifikat Kelulusan PPLK
                </label>
                <div className="xl:max-w-[396px] xl:max-h-[164px] w-full h-[160px] rounded-lg border bg-white border-black "></div>
            </div>
            <div className="flex justify-center items-center xl:w-[396px] xl:h-[40px] w-full h-full p-2 bg-gradient-to-b from-[#B9822F] to-[#A6680C] rounded-xl md:mt-4">
                <h2 className="text-[14px] font-montserrat font-semibold text-center text-white">
                    Download Sertifikat
                </h2>
            </div>
        </div>
    );
};

export default TentangPplk;
