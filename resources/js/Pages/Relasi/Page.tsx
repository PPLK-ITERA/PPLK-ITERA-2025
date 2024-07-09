import { User } from "@/lib/types/User";
import Autoplay from "embla-carousel-autoplay";

import React from "react";

import { UserPlus } from "lucide-react";

import Footer from "@/Components/Footer";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import Navbar from "@/Components/Navbar";
import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";

const users: User[] = [
    {
        id: 1,
        name: "Corneliux Linus",
        followers: 100,
        following: 100,
        nim: 1221400,
        prodi: "Teknik Informatika",
        batch: 73,
        quote: "Nothing last forever, we can change the future",
        profileImageUrl:
            "https://s3-alpha-sig.figma.com/img/0534/1881/46c486ea235ee639cfdff88a15dfc047?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d3nyJ5ePHK7Q3A59bjZxYAz3TjU460V1oRjsyJVIFuHgiIpgMeXGz3L5we0eFvSWwFi-OQrln4Bhw9sKewR1lhqjMoZCtLQ5HKDTXJMzqnRmyPEmykxgG9VlPPYLdM2NKWfWfEEsHMJbK5T9-1liNdQvKZS-yABqeUUAa4wPAe8jkMXdViz1bTsKZRj3if5Mfsm9H9nGWyYOH510ebzR8cIv6IOWWYS4yJRfDueS5MVp19p3Ig1N1xx~E4sOhTQFND8h-44TR0QPQsUjC-p90vQOGqc-q7Ku9Z1xL2HuXioj4gC0Luhtqn8b4jn18qYQRgsxf-goybhIsTnfB6lIVQ__",
        socialLinks: {
            instagram: "https://instagram.com/corneliux",
            linkedin: "https://linkedin.com/in/corneliux",
        },
    },
    {
        id: 2,
        name: "Rahmat Aldi Nasda",
        followers: 80,
        following: 150,
        nim: 1000000,
        prodi: "Teknik Informatika",
        batch: 73,
        quote: "",
        profileImageUrl:
            "https://s3-alpha-sig.figma.com/img/fe8b/f7a6/2d772475e6d62c28d9a18f469bcee494?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZMKIg2P3rK5WVuDokZD2Gn0exB3Zoc7GLm8QeUnmd~aal-shS23m8rBzUDiPPTIla29C2OskM-MALS1Wktkd7wIrBwsUHmHb1IJnv-~ZcFJtDFs7ne1n9id8aBS-mzg1qCZbHjQay-CwfKu-7RTP0G3iWBFreh95Qdw54hEhWN6qWdLH-00BPvetAd7WUnFQl26vW~QeHoC85msotufDe6Ss~DAIkdCnfVLYoyQNALJI1a~FlMx9dYJBx7t0xdBGMteFdibe8jogIgT4clUpdoHozkaVupWSAlTbNITlwH7bKyQ6V~LjPcN82qpVMnK3I-aUbFrlwv1dEEMOb7ZGrQ__",
        socialLinks: { instagram: "", linkedin: "" },
    },
];

const Page: React.FC = () => {
    const user = users[0];

    return (
        <div className="bg-pattern-white flex flex-col w-full min-h-screen">
            <div>
                <Navbar isSolid={true} isFixed={false} />

                <div className="max-w-7xl font-montserrat flex flex-col gap-8 p-24 mx-auto text-xl text-black">
                    <div className="flex gap-8">
                        <img
                            className="w-56 h-56 rounded-full select-none"
                            src={user.profileImageUrl}
                            alt={user.name}
                        />
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-12">
                                <p>
                                    <span className="font-bold">
                                        {user.followers}
                                    </span>{" "}
                                    Followers
                                </p>
                                <p>
                                    <span className="font-bold">
                                        {user.following}
                                    </span>{" "}
                                    Following
                                </p>
                            </div>
                            <h3 className="font-bold">{user.name}</h3>
                            <p className="font-semibold">{user.nim}</p>
                            <p className="font-semibold">{user.prodi}</p>
                            <p className="font-semibold">{user.batch}</p>
                            <p className="">“{user.quote}”</p>
                        </div>
                    </div>

                    <div className=" flex justify-between w-full">
                        <Button className="w-48 bg-[#ECAA25] border border-black text-black">
                            <UserPlus className="w-6 h-6 mr-2" />
                            Ikuti
                        </Button>
                        <Button className="w-48 bg-white border border-[#ECAA25] text-black">
                            <UserPlus className="w-6 h-6 mr-2" />
                            Instagram
                        </Button>
                        <Button className="w-48 bg-white border border-[#ECAA25] text-black">
                            <UserPlus className="w-6 h-6 mr-2" />
                            LinkedIn
                        </Button>
                    </div>

                    <p className="mx-auto font-[500]">
                        Yuk, kunjungi profile Nusantara Muda yang lain di bawah
                        ini!
                    </p>

                    <div>
                        <Carousel>
                            <CarouselContent className="text-sm">
                                <CarouselItem className=" basis-1/5">
                                    <Card className="shadow-lg">
                                        <CardContent className="flex flex-col items-center gap-1 p-4 text-black bg-white border rounded-lg">
                                            <img
                                                className="w-24 h-24 rounded-full select-none"
                                                src={users[1].profileImageUrl}
                                                alt={users[1].name}
                                            />
                                            <h3 className="mt-4 font-bold">
                                                {users[1].name}
                                            </h3>
                                            <p className="">{users[1].prodi}</p>
                                            <p className="">{users[1].batch}</p>
                                            <Button className="w-full mt-6 bg-[#ECAA25] text-black border border-black font-semibold text-xs">
                                                Kunjungi Profil
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                                <CarouselItem className=" basis-1/5">
                                    <Card className="shadow-lg">
                                        <CardContent className="flex flex-col items-center gap-1 p-4 text-black bg-white border rounded-lg">
                                            <img
                                                className="w-24 h-24 rounded-full select-none"
                                                src={users[1].profileImageUrl}
                                                alt={users[1].name}
                                            />
                                            <h3 className="mt-4 font-bold">
                                                {users[1].name}
                                            </h3>
                                            <p className="">{users[1].prodi}</p>
                                            <p className="">{users[1].batch}</p>
                                            <Button className="w-full mt-6 bg-[#ECAA25] text-black border border-black font-semibold text-xs">
                                                Kunjungi Profil
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                                <CarouselItem className=" basis-1/5">
                                    <Card className="shadow-lg">
                                        <CardContent className="flex flex-col items-center gap-1 p-4 text-black bg-white border rounded-lg">
                                            <img
                                                className="w-24 h-24 rounded-full select-none"
                                                src={users[1].profileImageUrl}
                                                alt={users[1].name}
                                            />
                                            <h3 className="mt-4 font-bold">
                                                {users[1].name}
                                            </h3>
                                            <p className="">{users[1].prodi}</p>
                                            <p className="">{users[1].batch}</p>
                                            <Button className="w-full mt-6 bg-[#ECAA25] text-black border border-black font-semibold text-xs">
                                                Kunjungi Profil
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                                <CarouselItem className=" basis-1/5">
                                    <Card className="shadow-lg">
                                        <CardContent className="flex flex-col items-center gap-1 p-4 text-black bg-white border rounded-lg">
                                            <img
                                                className="w-24 h-24 rounded-full select-none"
                                                src={users[1].profileImageUrl}
                                                alt={users[1].name}
                                            />
                                            <h3 className="mt-4 font-bold">
                                                {users[1].name}
                                            </h3>
                                            <p className="">{users[1].prodi}</p>
                                            <p className="">{users[1].batch}</p>
                                            <Button className="w-full mt-6 bg-[#ECAA25] text-black border border-black font-semibold text-xs">
                                                Kunjungi Profil
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                                <CarouselItem className=" basis-1/5">
                                    <Card className="shadow-lg">
                                        <CardContent className="flex flex-col items-center gap-1 p-4 text-black bg-white border rounded-lg">
                                            <img
                                                className="w-24 h-24 rounded-full select-none"
                                                src={users[1].profileImageUrl}
                                                alt={users[1].name}
                                            />
                                            <h3 className="mt-4 font-bold">
                                                {users[1].name}
                                            </h3>
                                            <p className="">{users[1].prodi}</p>
                                            <p className="">{users[1].batch}</p>
                                            <Button className="w-full mt-6 bg-[#ECAA25] text-black border border-black font-semibold text-xs">
                                                Kunjungi Profil
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                                <CarouselItem className=" basis-1/5">
                                    <Card className="shadow-lg">
                                        <CardContent className="flex flex-col items-center gap-1 p-4 text-black bg-white border rounded-lg">
                                            <img
                                                className="w-24 h-24 rounded-full select-none"
                                                src={users[1].profileImageUrl}
                                                alt={users[1].name}
                                            />
                                            <h3 className="mt-4 font-bold">
                                                {users[1].name}
                                            </h3>
                                            <p className="">{users[1].prodi}</p>
                                            <p className="">{users[1].batch}</p>
                                            <Button className="w-full mt-6 bg-[#ECAA25] text-black border border-black font-semibold text-xs">
                                                Kunjungi Profil
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default Page;
