import { User } from "@/lib/types/User";
import { IconMoodAngry, IconMoodSearch } from "@tabler/icons-react";
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

import instagramIcon from "!assets/svg/instagram.svg";
import linkedinIcon from "!assets/svg/linkedin.svg";
import { useAos } from "@/lib/hooks/useAos";

const recommendedUsers: User[] = [
    ...Array.from({ length: 8 }).map((_, i) => ({
        id: i + 2,
        name: "Rahmat Aldi Nasda",
        followers: 80,
        following: 150,
        viewer: 1000,
        nim: 1000000,
        prodi: "Teknik Informatika",
        namaKelompok: "Team Onlyfans",
        kelompok: 2,
        batch: 73,
        quote: "",
        profileImageUrl:
            "https://s3-alpha-sig.figma.com/img/fe8b/f7a6/2d772475e6d62c28d9a18f469bcee494?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZMKIg2P3rK5WVuDokZD2Gn0exB3Zoc7GLm8QeUnmd~aal-shS23m8rBzUDiPPTIla29C2OskM-MALS1Wktkd7wIrBwsUHmHb1IJnv-~ZcFJtDFs7ne1n9id8aBS-mzg1qCZbHjQay-CwfKu-7RTP0G3iWBFreh95Qdw54hEhWN6qWdLH-00BPvetAd7WUnFQl26vW~QeHoC85msotufDe6Ss~DAIkdCnfVLYoyQNALJI1a~FlMx9dYJBx7t0xdBGMteFdibe8jogIgT4clUpdoHozkaVupWSAlTbNITlwH7bKyQ6V~LjPcN82qpVMnK3I-aUbFrlwv1dEEMOb7ZGrQ__",
        socialLinks: { instagram: "", linkedin: "" },
    })),
];

const Page: React.FC = () => {
    useAos()

    const user = {
        id: 1,
        name: "Corneliux Linus",
        followers: 100,
        following: 100,
        viewer: 2000,
        nim: 1221400,
        prodi: "Teknik Informatika",
        namaKelompok: "Nusantara Muda",
        kelompok: 1,
        batch: 73,
        quote: "Nothing last forever, we can change the future\nConnect with me on Instagram and LinkedIn!",
        profileImageUrl:
            "https://s3-alpha-sig.figma.com/img/0534/1881/46c486ea235ee639cfdff88a15dfc047?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d3nyJ5ePHK7Q3A59bjZxYAz3TjU460V1oRjsyJVIFuHgiIpgMeXGz3L5we0eFvSWwFi-OQrln4Bhw9sKewR1lhqjMoZCtLQ5HKDTXJMzqnRmyPEmykxgG9VlPPYLdM2NKWfWfEEsHMJbK5T9-1liNdQvKZS-yABqeUUAa4wPAe8jkMXdViz1bTsKZRj3if5Mfsm9H9nGWyYOH510ebzR8cIv6IOWWYS4yJRfDueS5MVp19p3Ig1N1xx~E4sOhTQFND8h-44TR0QPQsUjC-p90vQOGqc-q7Ku9Z1xL2HuXioj4gC0Luhtqn8b4jn18qYQRgsxf-goybhIsTnfB6lIVQ__",
        socialLinks: {
            instagram: "https://instagram.com/corneliux",
            linkedin: "https://linkedin.com/in/corneliux",
        },
    };

    return (
        <div className="bg-pattern-white flex flex-col w-full min-h-screen">
            <div>
                <Navbar isSolid={true} isFixed={false} />

                <div className="max-w-7xl py-16 font-montserrat flex flex-col gap-8 mx-auto text-base md:text-md text-black px-2">
                    <div className="flex max-md:flex-col max-md:text-center max-md:items-center gap-8 mx-auto max-w-5xl place-content-center w-full">
                        <div className="flex flex-col justify-between gap-4">
                            <div>
                                <img
                                    className="aspect-square max-md:w-36 w-48 rounded-full select-none object-cover"
                                    src={user.profileImageUrl}
                                    alt={user.name}
                                />
                                <p className="max-md:hidden text-center mt-2">
                                    <span className="font-bold">
                                        {user.viewer}
                                    </span>{" "}
                                    viewers
                                </p>
                            </div>
                            <Button className="max-md:hidden w-full bg-[#ECAA25] border border-black text-black">
                                <UserPlus className="w-6 h-6 mr-2" />
                                <p className="font-bold">Ikuti</p>
                            </Button>
                        </div>
                        <div className="flex flex-col justify-between w-full md:w-[28rem]">
                            <div className="flex flex-col gap-2">
                                <div className="max-md:hidden flex gap-12">
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
                                <div className="flex flex-col md:gap-1">
                                    <p className="font-semibold">{user.nim}</p>
                                    <p className="font-semibold">
                                        {user.prodi}
                                    </p>
                                    <div className="flex gap-2 max-md:place-content-center">
                                        <p className="font-semibold">
                                            {user.namaKelompok}
                                        </p>
                                        <p className="font-semibold">
                                            ({user.kelompok})
                                        </p>
                                    </div>
                                </div>
                                <p className="whitespace-pre-wrap break-words text-wrap text-sm md:text-[16px]">
                                    “{user.quote}”
                                </p>
                            </div>

                            <div className="md:hidden flex gap-8 my-4 place-content-center w-full flex-wrap text-sm">
                                <p>
                                    <span className="block font-bold">
                                        {user.viewer}
                                    </span>{" "}
                                    viewers
                                </p>
                                <p>
                                    <span className="block font-bold">
                                        {user.followers}
                                    </span>{" "}
                                    Followers
                                </p>
                                <p>
                                    <span className="block font-bold">
                                        {user.following}
                                    </span>{" "}
                                    Following
                                </p>
                            </div>

                            <Button className="md:hidden mb-4 w-full bg-[#ECAA25] border border-black text-black">
                                <UserPlus className="w-6 h-6 mr-2" />
                                <p className="font-bold">Ikuti</p>
                            </Button>

                            <div className="flex gap-4">
                                <Button className="w-full bg-white border border-[#ECAA25] text-black">
                                        <img
                                            src={instagramIcon}
                                        />
                                </Button>
                                <Button className="w-full bg-white border border-[#ECAA25] text-black">
                                        <img
                                            src={linkedinIcon}
                                        />
                                </Button>
                            </div>
                        </div>
                    </div>

                    <p className="mt-8 mx-auto font-[500] text-center max-md:text-sm">
                        Yuk, kunjungi profile Nusantara Muda yang lain di bawah
                        ini!
                    </p>

                    <div className="max-w-6xl w-4/5 mx-auto">
                        <Carousel>
                            <CarouselContent className="text-sm">
                                {recommendedUsers.map((u, i) => (
                                    <CarouselItem data-aos="fade-up" data-aos-duration={500} data-aos-delay={(i+1)*100} className="basis-48 md:basis-1/4 xl:basis-1/5 mb-8 mt-2 text-center">
                                        <Card className="rounded-md drop-shadow-xl ring-1 ring-black/10">
                                            <CardContent className="flex flex-col items-center gap-1 p-4 text-black bg-white">
                                                <img
                                                    className="w-24 h-24 rounded-full select-none"
                                                    src={u.profileImageUrl}
                                                    alt={u.name}
                                                />
                                                <h3 className="mt-4 font-bold">
                                                    {u.name}
                                                </h3>
                                                <p>{u.prodi}</p>
                                                <p>{u.batch}</p>
                                                <Button className="w-full mt-6 bg-[#ECAA25] text-black border border-black font-semibold text-xs">
                                                    Kunjungi Profil
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                ))}
                                <CarouselItem className="basis-1/2 md:basis-1/3 md:basis-1/4 xl:basis-1/5 mb-8 mt-2">
                                    <Card className="rounded-md drop-shadow-xl h-full">
                                        <CardContent className="h-full flex flex-col justify-between items-center gap-1 p-4 text-black bg-white border rounded-md">
                                            <div className="bg-gradient-to-r rounded-full w-24 h-24 grid place-content-center from-jaffa-600 to-jaffa-800 text-white">
                                                <IconMoodSearch
                                                    size={64}
                                                    className=""
                                                />
                                            </div>
                                            <p className="text-center font-bold">
                                                Temukan Nusantara Muda Lainnya!
                                            </p>
                                            <Button className="w-full bg-[#ECAA25] text-black border border-black font-semibold text-xs">
                                                Selengkapnya
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
