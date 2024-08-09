import React from "react";

import { Button } from "@/Components/ui/button";

export interface TentangPplkProps {
    nama_kelompok: string;
    no_kelompok: number;
    nama_daplok: string;
    nama_mentor: string;
}

const TentangPplk = ({ props }: { props: TentangPplkProps }) => {
    return (
        <div className="flex flex-col gap-4 pt-3 pb-5 pl-5 pr-5">
            <h2 className="text-[20px] text-black font-montserrat font-bold">
                Tentang PPLK
            </h2>
            <div className="flex flex-row gap-1">
                <div>
                    <label
                        htmlFor="full-name"
                        className="font-montserrat text-[14px] weight-500 mb-2 block"
                    >
                        Nama Kelompok
                    </label>
                    <input
                        type="text"
                        className="xl:max-w-[190px] xl:max-h-[40px] max-w-[220px] w-full rounded-md border bg-gray-200 border-gray-400 font-montserrat text-[16px]"
                        value={props.nama_kelompok}
                        readOnly
                        disabled
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
                        className="xl:max-w-[190px] xl:max-h-[40px] w-full rounded-md border bg-gray-200 border-gray-400 font-montserrat text-[16px]"
                        value={props.no_kelompok}
                        readOnly
                        disabled
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
                    className="xl:max-w-[396px] xl:max-h-[44px] w-full h-full rounded-md border bg-gray-200 border-gray-400 font-montserrat text-[16px]"
                    value={props.nama_daplok}
                    readOnly
                    disabled
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
                    className="xl:max-w-[396px] xl:max-h-[44px] w-full h-full rounded-md border bg-gray-200 border-gray-400 font-montserrat text-[16px]"
                    value={props.nama_mentor}
                    readOnly
                    disabled
                />
            </div>
            <div>
                <label
                    htmlFor="bio"
                    className="font-montserrat text-[14px] weight-500 mb-2 block font-semibold"
                >
                    Sertifikat Kelulusan PPLK
                </label>
                <div className="xl:max-w-[396px] xl:max-h-[164px] w-full h-[160px] rounded-md border bg-white border-black "></div>
            </div>

            <Button
                disabled
                className="flex justify-center items-center xl:w-[396px] xl:h-[40px] w-full h-full p-2 bg-gradient-to-b from-[#B9822F] to-[#A6680C] rounded-md md:mt-4"
            >
                <h2 className="text-[14px] font-montserrat font-semibold text-center text-white">
                    Download Sertifikat
                </h2>
            </Button>
        </div>
    );
};

export default TentangPplk;
