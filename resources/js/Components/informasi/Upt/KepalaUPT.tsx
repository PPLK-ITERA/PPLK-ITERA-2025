import React from "react";

import { SocialMediaData } from "@/lib/data/upt";

import maskot from "!assets/maskot.png";

interface KepalaUPTProps {
    nama_upt?: string;
    nama_kepala_upt?: string;
    jabatan?: string;
    nip?: string;
    foto_kepala_upt?: string;
}

export default function KepalaUPT({
    nama_upt,
    nama_kepala_upt,
    jabatan,
    nip,
    foto_kepala_upt,
}: KepalaUPTProps) {
    return (
        <div className="mt-40">
            <div className="font-avigea text-moccaccino-500 text-5xl font-normal text-center">
                Kepala {nama_upt} 2024
            </div>

            <div className="flex py-8 mt-10 px-8 flex-col md:flex-row max-w-[800px] items-center justify-center md:justify-around text-center rounded-[32px] bg-jaffa-300 mx-auto">
                <div className="md:w-1/2 flex items-center justify-center w-full">
                    <img
                        src={foto_kepala_upt}
                        alt="Kepala UPT Perpus"
                        className="shrink-0 object-cover object-top w-64 h-64 rounded-full"
                    />
                </div>

                <div className="md:items-start md:w-1/2 flex flex-col items-center w-full pl-5">
                    <h1 className="font-montserrat md:text-start md:mt-0 mt-5 text-2xl font-bold text-center">
                        {nama_kepala_upt}
                    </h1>
                    <p className="font-montserrat mt-2 text-lg font-medium">
                        {jabatan}
                    </p>
                    <p className="text-black/80 mt-5 text-sm">
                        {nip === "" ? null : `NIP: ${nip}`}
                    </p>
                </div>
            </div>

            <div className="mt-36">
                <div className="md:max-w-md max-w-sm mx-auto">
                    <div className="text-center">
                        <p className="text-moccaccino-500 font-avigea md:text-3xl text-xl font-bold tracking-widest">
                            SOSIAL MEDIA UPT
                        </p>
                    </div>

                    <div className="flex items-center justify-center gap-5 mt-8">
                        {SocialMediaData["fakultas-fti"].map(
                            (socialMedia, index) => (
                                <a
                                    key={index}
                                    href={socialMedia.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-jaffa-600 z-10 p-2 rounded-full cursor-pointer"
                                >
                                    {socialMedia.icon}
                                </a>
                            ),
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
