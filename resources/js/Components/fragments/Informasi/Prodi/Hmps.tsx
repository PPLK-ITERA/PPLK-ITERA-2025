import React, { useState } from "react";

import {
    IconBrandInstagram,
    IconBrandTiktok,
    IconBrandYoutube,
    IconWorldWww,
} from "@tabler/icons-react";

import HmpsActivity from "@/Components/informasi/prodi/HmpsActivity";
import { Card } from "@/Components/ui/card";

import { ProgramStudi } from "@/lib/types/ProgramStudi";

import box from "!assets/overlay-box2.png";
import pillar from "!assets/pillar-brown2.png";

type Props = { prodi: ProgramStudi; className?: string };

const Hmps = ({ prodi, className }: Props) => {
    return (
        <div className={className}>
            <div className="place-content-center flex flex-col w-full gap-24 py-16">
                <div
                    className="flex flex-col w-full max-w-6xl gap-12 px-4 mx-auto text-center"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    <div className="w-64 h-64 mx-auto overflow-hidden rounded-full">
                        <img
                            src={
                                prodi.hmpsImageUrl
                                    ? prodi.hmpsImageUrl
                                    : "https://img.freepik.com/free-vector/white-abstract-background_23-2148810353.jpg"
                            }
                            alt="Prodi"
                            className="w-full h-full"
                        />
                    </div>

                    <h1 className="font-avigea lg:text-4xl max-w-2xl mx-auto text-2xl">
                        {prodi.hmpsAcronym}
                    </h1>

                    <p className=" max-w-2xl mx-auto font-medium">
                        {prodi.hmpsDescrption}
                    </p>
                </div>

                <div>
                    <Card
                        data-aos="fade-up"
                        data-aos-duration="800"
                        className="lg:mx-auto bg-gradient-to-r shadow-jaffa-300/20 from-jaffa-600 to-jaffa-700 lg:p-8 lg:px-16 flex flex-col w-full max-w-[300px] md:max-w-[768px] lg:max-w-[1080px] gap-6 p-4 text-left border-0 rounded-lg shadow-xl mx-auto"
                    >
                        <div className="place-content-center flex">
                            <div className="lg:text-left flex flex-col text-center text-white">
                                <p className="max-lg:text-xs">
                                    Ketua {prodi.hmpsName} 2024-2025
                                </p>
                                <p className="lg:text-3xl text-xl text-center">
                                    {prodi.kahim}
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="relative">
                    <img
                        src={pillar}
                        alt=""
                        className="absolute bottom-0 left-0 h-[300px] lg:h-[700px]"
                    />
                    <img
                        src={box}
                        alt=""
                        className="absolute bottom-0 left-0 -translate-x-24 translate-y-[26%] w-44 lg:w-96"
                    />

                    <div className="place-content-center place-items-center flex">
                        <div className="h-[1px] bg-white grow"></div>
                        <h4 className="px-3 py-1 bg-gradient-to-r from-[#864D0D] to-[#432005] rounded-full border text-[16px] md:text-[20px]">
                            KEGIATAN UNGGULAN
                        </h4>
                        <div className="h-[1px] bg-white grow"></div>
                    </div>

                    <img
                        src={pillar}
                        alt=""
                        style={{
                            transform: "rotateY(180deg)",
                        }}
                        className="absolute bottom-0 right-0 h-[300px] lg:h-[700px]"
                    />
                    <img
                        src={box}
                        alt=""
                        style={{
                            transform:
                                "rotateY(180deg) translateX(-6rem) translateY(26%)",
                        }}
                        className="w-44 lg:w-96 absolute bottom-0 right-0 rotate-0"
                    />
                </div>

                <div className="w-full max-w-6xl px-4 mx-auto">
                    <HmpsActivity hmpsActivities={prodi.hmpsActivities} />
                </div>

                <div
                    className="w-full max-w-6xl px-4 mx-auto text-center"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    <h1 className="font-avigea lg:text-3xl text-moccaccino-500 text-xl">
                        Sosial Media {prodi.hmpsAcronym}
                    </h1>

                    <div className="place-content-center text-jaffa-200 flex gap-8 mt-4">
                        {prodi.hmpsInstagramUrl && (
                            <a href={prodi.hmpsInstagramUrl} target="_blank">
                                <div className="bg-jaffa-100 flex items-center justify-center p-2 rounded-full">
                                    <IconBrandInstagram
                                        size={40}
                                        color="black"
                                    />
                                </div>
                            </a>
                        )}

                        {prodi.hmpsYoutubeUrl && (
                            <a href={prodi.hmpsYoutubeUrl} target="_blank">
                                <div className="bg-jaffa-100 flex items-center justify-center p-2 rounded-full">
                                    <IconBrandYoutube size={40} color="black" />
                                </div>
                            </a>
                        )}

                        {prodi.hmpsWebsiteUrl && (
                            <a href={prodi.hmpsWebsiteUrl} target="_blank">
                                <div className="bg-jaffa-100 flex items-center justify-center p-2 rounded-full">
                                    <IconWorldWww size={40} color="black" />
                                </div>
                            </a>
                        )}

                        {prodi.hmpsTiktokUrl && (
                            <a href={prodi.hmpsTiktokUrl} target="_blank">
                                <div className="bg-jaffa-100 flex items-center justify-center p-2 rounded-full">
                                    <IconBrandTiktok size={40} color="black" />
                                </div>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hmps;
