import React from "react";

import {
    IconBrandInstagram,
    IconBrandTiktok,
    IconBrandYoutubeFilled,
    IconWorld,
} from "@tabler/icons-react";

import { AccordionKk } from "@/Components/informasi/prodi/AccordionKk";
import AchievementList from "@/Components/informasi/prodi/AchievementList";
import { Card, CardContent } from "@/Components/ui/card";

import accreditation_a from "!assets/accreditation-a.png";
import banpt from "!assets/banpt.png";

type Props = { prodi: ProgramStudi; className?: string };

const Prodi = ({ prodi, className }: Props) => {
    return (
        <div className={className}>
            <div className="w-full flex flex-col gap-4 place-content-center mt-24 ">
                <div className="text-center">
                    <img
                        src="https://gcdnb.pbrd.co/images/QfWO8MCZ1xmx.png?o=1"
                        alt="Prodi"
                        className="mx-auto h-64"
                    />
                    <h1 className="font-avigea text-4xl text-moccaccino-500">
                        {prodi.name}
                    </h1>
                    <p className="font-medium ">{prodi.description}</p>
                </div>

                <div>
                    <h1 className="font-avigea text-3xl text-moccaccino-500">
                        Sejarah
                    </h1>
                    <p className="font-medium text-left">{prodi.history}</p>
                </div>

                <Card className="rounded-lg bg-jaffa-300">
                    <CardContent className="p-4 px-12">
                        <div className="w-full h-full flex font-avigea place-content-center">
                            <div className="flex flex-col grow text-left place-content-center">
                                <p className="font-bold mb-4 text-2xl">
                                    Akreditasi {prodi.accreditation}
                                </p>
                                <p className="font-tinos">{prodi.name}</p>
                                <p className="font-tinos">
                                    harusnya disini SK tapi ga ada datanya
                                </p>
                            </div>
                            <div className="flex gap-2 place-content-center">
                                <img src={accreditation_a} alt="akreditasi" />
                                <img src={banpt} alt="ban-pt" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="flex gap-8 mt-8">
                    <div className="relative basis-1/2">
                        <h1 className="absolute top-0 -translate-y-1/2 -translate-x-4 bg-white rounded-full border-2 border-jaffa-600 font-bold text-jaffa-600 p-2 px-8">
                            Visi
                        </h1>
                        <p className="rounded-xl text-left bg-gradient-to-br h-full from-jaffa-600 to-jaffa-700 text-white p-8">
                            {prodi.vision}
                        </p>
                    </div>
                    <div className="relative basis-1/2">
                        <h1 className="absolute top-0 -translate-y-1/2 -translate-x-4 bg-white rounded-full border-2 border-jaffa-600 font-bold text-jaffa-600 p-2 px-8">
                            Misi
                        </h1>
                        <p className="rounded-xl text-left bg-gradient-to-br h-full from-jaffa-600 to-jaffa-700 text-white p-8 whitespace-pre-wrap">
                            {prodi.mission}
                        </p>
                    </div>
                </div>

                <div className="rounded-lg flex flex-col gap-6 bg-moccaccino-50 p-8 text-left px-32">
                    <h1 className="font-avigea text-3xl text-moccaccino-500">
                        Koordinator Program Studi
                    </h1>
                    <div className="flex gap-6 mt-4">
                        <img
                            src="https://placeholder.pics/svg/100x100"
                            alt="Koordinator"
                            className="h-28 w-28 rounded-full"
                        />
                        <div className="text-left place-content-center flex flex-col">
                            <p className="text-2xl">{prodi.coordinatorName}</p>
                            <p className="text-gray-500 text-sm">
                                Koordinator Program Studi {prodi.name}
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className="font-avigea text-3xl text-moccaccino-500">
                        Kelompok Keahlian
                    </h1>
                    <AccordionKk kk={prodi.kk} />
                </div>

                <div>
                    <h1 className="font-avigea text-3xl text-moccaccino-500">
                        Prestasi
                    </h1>
                    <AchievementList achievements={prodi.achievements} />
                </div>

                <div className="text-center">
                    <h1 className="font-avigea text-3xl text-moccaccino-500">
                        Sosial Media {prodi.name}
                    </h1>
                    <div className="flex gap-8 place-content-center text-candlelight-500 mt-4">
                        <a href={prodi.instagramUrl} target="_blank">
                            <IconBrandInstagram className="h-16 w-16 hover:text-candlelight-600 transition" />
                        </a>
                        <a href={prodi.youtubeUrl} target="_blank">
                            <IconBrandYoutubeFilled className="h-16 w-16 hover:text-candlelight-600 transition" />
                        </a>
                        <a href={prodi.websiteUrl} target="_blank">
                            <IconWorld className="h-16 w-16 hover:text-candlelight-600 transition" />
                        </a>
                        <a href={prodi.tiktokUrl} target="_blank">
                            <IconBrandTiktok className="h-16 w-16 hover:text-candlelight-600 transition" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prodi;
