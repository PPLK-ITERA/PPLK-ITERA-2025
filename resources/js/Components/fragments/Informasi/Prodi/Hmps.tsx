import React, { useState } from "react";

import {
    IconBrandInstagram,
    IconBrandTiktok,
    IconBrandYoutubeFilled,
    IconWorld,
} from "@tabler/icons-react";

import { AccordionKk } from "@/Components/informasi/prodi/AccordionKk";
import AchievementList from "@/Components/informasi/prodi/AchievementList";
import HmpsActivities from "@/Components/informasi/prodi/HmpsActivities";
import { Card, CardContent } from "@/Components/ui/card";

import accreditation_a from "!assets/accreditation-a.png";
import banpt from "!assets/banpt.png";
import box from "!assets/overlay-box2.png";
import pillar from "!assets/pillar-brown2.png";

type Props = { prodi: ProgramStudi; className?: string };

const Hmps = ({ prodi, className }: Props) => {
    return (
        <div className={className}>
            <div className="w-full flex flex-col gap-24 place-content-center py-16">
                <div
                    className="mx-auto w-full max-w-6xl px-4 text-center flex flex-col gap-12"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    <img
                        src={prodi.hmpsImageUrl}
                        alt="Prodi"
                        className="mx-auto h-56 lg:h-80"
                    />
                    <h1 className="max-w-2xl mx-auto font-avigea text-2xl lg:text-4xl">
                        {prodi.hmpsName}
                    </h1>
                    <p className="max-w-2xl mx-auto font-medium ">
                        {prodi.hmpsDescrption}
                    </p>
                </div>

                <div>
                    <Card
                        data-aos="fade-up"
                        data-aos-duration="800"
                        className="lg:mx-auto w-full max-w-6xl rounded-lg flex flex-col gap-6 bg-gradient-to-r shadow-xl shadow-jaffa-300/20 from-jaffa-600 to-jaffa-700 p-4 lg:p-8 text-left lg:px-16 border-0"
                    >
                        <div className="flex place-content-center">
                            <div className="text-center lg:text-left flex flex-col text-white">
                                <p className="max-lg:text-xs">
                                    Ketua {prodi.hmpsName} 2024-2025
                                </p>
                                <p className="text-xl lg:text-3xl text-center">
                                    {prodi.hmpsCoordinatorName}
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
                    <div className="flex place-content-center place-items-center">
                        <div className="h-[1px] bg-white grow"></div>
                        <h4 className="p-2 lg:p-6 lg:px-12 bg-gradient-to-r from-[#864D0D] to-[#432005] rounded-2xl border text-sm lg:text-3xl">
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
                        className="absolute bottom-0 right-0 rotate-0 w-44 lg:w-96"
                    />
                </div>

                <div className="mx-auto w-full max-w-6xl px-4">
                    <HmpsActivities hmpsActivities={prodi.hmpsActivities} />
                </div>

                <div
                    className="mx-auto w-full max-w-6xl px-4  text-center"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    <h1 className="font-avigea text-xl lg:text-3xl text-moccaccino-500">
                        Sosial Media {prodi.hmpsAcronym}
                    </h1>
                    <div className="flex gap-8 place-content-center text-jaffa-200 mt-4">
                        {prodi.hmpsInstagramUrl && (
                            <a href={prodi.hmpsInstagramUrl} target="_blank">
                                <IconBrandInstagram className="h-12 w-12 lg:h-16 lg:w-16 hover:text-jaffa-300 transition" />
                            </a>
                        )}

                        {prodi.hmpsYoutubeUrl && (
                            <a href={prodi.hmpsYoutubeUrl} target="_blank">
                                <IconBrandYoutubeFilled className="h-12 w-12 lg:h-16 lg:w-16 hover:text-jaffa-300 transition" />
                            </a>
                        )}

                        {prodi.hmpsWebsiteUrl && (
                            <a href={prodi.hmpsWebsiteUrl} target="_blank">
                                <IconWorld className="h-12 w-12 lg:h-16 lg:w-16 hover:text-jaffa-300 transition" />
                            </a>
                        )}

                        {prodi.hmpsTiktokUrl && (
                            <a href={prodi.hmpsTiktokUrl} target="_blank">
                                <IconBrandTiktok className="h-12 w-12 lg:h-16 lg:w-16 hover:text-jaffa-300 transition" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hmps;
