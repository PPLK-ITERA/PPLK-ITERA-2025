import React from "react";

import { SocialMediaData } from "@/lib/data/upt";

import maskot from "!assets/maskot.png";

export default function KepalaUPT() {
    return (
        <div className="mt-40">
            <div className="font-avigea text-moccaccino-500 text-5xl font-normal text-center">
                Kepala UPT Perpustakaan 2024
            </div>

            <div className="flex py-8 mt-10 px-8 flex-col md:flex-row max-w-[800px] items-center justify-center text-center rounded-[32px] bg-jaffa-300 mx-auto">
                <img
                    src={maskot}
                    alt="Kepala UPT Perpus"
                    className="shrink-0 object-cover w-64 h-64 rounded-full"
                />

                <div className="flex flex-col items-start pl-10">
                    <h1 className="font-montserrat text-3xl font-bold">
                        Budi Chandra Geming YT
                    </h1>
                    <p className="font-montserrat text-xl font-medium">
                        Kepala Perpustakaan ITERA 2024-2027
                    </p>
                    <p className="text-sm text-gray-600">NIP: 122140128</p>
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
