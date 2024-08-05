import React from "react";

import {
    IconBrandInstagram,
    IconBrandTiktok,
    IconBrandYoutube,
    IconWorldWww,
} from "@tabler/icons-react";

import { AccordionKk } from "@/Components/informasi/prodi/AccordionKk";
import { Card, CardContent } from "@/Components/ui/card";

import { useAos } from "@/lib/hooks/useAos";
import { ProgramStudi } from "@/lib/types/ProgramStudi";

import accreditation_a from "!assets/accreditation-a.png";
import banpt from "!assets/banpt.png";

type Props = { prodi: ProgramStudi; className?: string };

const Prodi = ({ prodi, className }: Props) => {
    useAos();

    return (
        <div className={className}>
            <div className="place-content-center flex flex-col w-full gap-16 py-24">
                <div className="flex flex-col gap-6 text-center">
                    <div className="w-64 h-64 p-10 mx-auto overflow-hidden bg-white rounded-full">
                        <img
                            src={prodi.imageUrl}
                            alt="Prodi"
                            className="object-contain w-full h-full mx-auto"
                            data-aos="fade-in"
                            data-aos-duration="1000"
                        />
                    </div>

                    <h1 className="font-avigea lg:text-4xl text-moccaccino-600 text-2xl">
                        {prodi.name}
                    </h1>
                    <p className="max-lg:text-justify lg:text-lg lg:leading-7 text-sm font-medium">
                        {prodi.description}
                    </p>
                </div>

                <div
                    className="flex flex-col gap-6"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    <h1 className="font-avigea lg:text-3xl text-moccaccino-600 text-2xl">
                        Sejarah
                    </h1>

                    <p className="font-medium text-justify">
                        {prodi.history ? prodi.history : <p>Coming Soon</p>}
                    </p>
                </div>

                <Card
                    className="bg-jaffa-300 rounded-lg"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    <CardContent className="lg:px-12 p-4">
                        <div className="font-avigea place-content-center flex w-full h-full">
                            <div className="grow place-content-center flex flex-col text-left">
                                <p className="lg:text-2xl mb-4 text-lg font-bold">
                                    Akreditasi {prodi.accreditation}
                                </p>
                                <p className="max-lg:text-sm font-tinos">
                                    {prodi.name}
                                </p>
                                <p className="max-lg:text-sm font-tinos">
                                    {prodi.accreditationNo
                                        ? prodi.accreditationNo
                                        : "Coming Soon"}
                                </p>
                            </div>

                            <div className="max-lg:flex-col place-content-center place-items-center flex gap-2">
                                {/* <img
                                    className="lg:h-20 object-contain h-12"
                                    src={accreditation_a}
                                    alt="akreditasi"
                                /> */}

                                <img
                                    className="lg:h-20 object-contain h-12"
                                    src={banpt}
                                    alt="ban-pt"
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div
                    className="max-lg:flex-col flex gap-8 mt-8"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    <div className=" basis-1/2 relative">
                        <h1 className="border-jaffa-600 text-jaffa-600 absolute top-0 p-2 px-8 font-bold -translate-x-4 -translate-y-1/2 bg-white border-2 rounded-full">
                            Visi
                        </h1>
                        <p className="rounded-xl bg-gradient-to-br from-jaffa-600 to-jaffa-700 h-full p-8 text-left text-white">
                            {prodi.vision}
                        </p>
                    </div>
                    <div className=" basis-1/2 relative">
                        <h1 className="border-jaffa-600 text-jaffa-600 absolute top-0 p-2 px-8 font-bold -translate-x-4 -translate-y-1/2 bg-white border-2 rounded-full">
                            Misi
                        </h1>

                        <p className="rounded-xl bg-gradient-to-br from-jaffa-600 to-jaffa-700 h-full p-8 text-left text-white whitespace-pre-wrap">
                            {prodi.mission ? (
                                <>
                                    {prodi.mission.map((misi, index) => (
                                        <span
                                            key={index}
                                            className="flex gap-2"
                                        >
                                            {index + 1}. {misi}
                                            <br />
                                        </span>
                                    ))}
                                </>
                            ) : (
                                <p>Data Kosong</p>
                            )}
                        </p>
                    </div>
                </div>

                <Card
                    className="bg-moccaccino-50 lg:p-8 lg:px-32 flex flex-col gap-6 p-4 text-left rounded-lg shadow-xl"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    <h1 className="font-avigea lg:text-3xl text-moccaccino-600 text-lg text-center">
                        Koordinator Program Studi
                    </h1>

                    <div className="max-lg:flex-col place-items-center font-montserrat flex justify-center gap-6 mt-4">
                        <img
                            src={
                                prodi.coordinatorPhoto ||
                                "https://img.freepik.com/free-vector/white-abstract-background_23-2148810353.jpg"
                            }
                            alt="Koordinator"
                            className="lg:h-28 lg:w-28 object-cover w-20 h-20 rounded-full"
                        />

                        <div className="place-content-center max-lg:place-items-center max-lg:text-center flex flex-col text-left">
                            <p className="lg:text-2xl text-lg font-semibold">
                                {prodi.coordinatorName}
                            </p>
                            <p className="text-black/70 mt-2 text-sm">
                                Koordinator Program Studi {prodi.name}
                            </p>
                        </div>
                    </div>
                </Card>

                <div data-aos="fade-up" data-aos-duration="800">
                    <h1 className="font-avigea lg:text-3xl text-moccaccino-600 mb-2 text-2xl">
                        Kelompok Keahlian
                    </h1>

                    <AccordionKk kk={prodi.kk} />
                </div>

                <div
                    className="text-center"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    <h1 className="font-avigea lg:text-3xl text-moccaccino-600 text-2xl">
                        Sosial Media {prodi.name}
                    </h1>

                    <div className="place-content-center text-jaffa-200 flex gap-8 mt-4">
                        {prodi.instagramUrl && (
                            <a href={prodi.hmpsInstagramUrl} target="_blank">
                                <div className="bg-moccaccino-600 flex items-center justify-center p-2 rounded-full">
                                    <IconBrandInstagram
                                        size={40}
                                        color="white"
                                    />
                                </div>
                            </a>
                        )}

                        {prodi.youtubeUrl && (
                            <a href={prodi.hmpsYoutubeUrl} target="_blank">
                                <div className="bg-moccaccino-600 flex items-center justify-center p-2 rounded-full">
                                    <IconBrandYoutube size={40} color="white" />
                                </div>
                            </a>
                        )}

                        {prodi.websiteUrl && (
                            <a href={prodi.hmpsWebsiteUrl} target="_blank">
                                <div className="bg-moccaccino-600 flex items-center justify-center p-2 rounded-full">
                                    <IconWorldWww size={40} color="white" />
                                </div>
                            </a>
                        )}

                        {prodi.tiktokUrl && (
                            <a href={prodi.hmpsTiktokUrl} target="_blank">
                                <div className="bg-moccaccino-600 flex items-center justify-center p-2 rounded-full">
                                    <IconBrandTiktok size={40} color="white" />
                                </div>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prodi;
