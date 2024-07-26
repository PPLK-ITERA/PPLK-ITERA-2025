import Autoplay from "embla-carousel-autoplay";

import React from "react";

import { Link } from "@inertiajs/react";

import { UserPlus } from "lucide-react";

import { IconMoodAngry, IconMoodSearch } from "@tabler/icons-react";

import Footer from "@/Components/Footer";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import Navbar from "@/Components/Navbar";
import ProfileCard from "@/Components/relasi/ProfileCard";
import { Button, buttonVariants } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";

import { users } from "@/lib/data/user";
import { useAos } from "@/lib/hooks/useAos";
import { User } from "@/lib/types/User";

import instagramIcon from "!assets/svg/instagram.svg";
import linkedinIcon from "!assets/svg/linkedin.svg";

const Page: React.FC = () => {
    useAos();


    const user = users[0];

    return (
        <div className="bg-pattern-white flex flex-col w-full min-h-screen">
            <div>
                <Navbar isSolid={true} isFixed={false} />

                <div className="max-w-7xl font-montserrat md:text-md flex flex-col gap-8 px-2 py-16 mx-auto text-base text-black">
                    <div className="max-md:flex-col max-md:text-center max-md:items-center place-content-center flex w-full max-w-5xl gap-8 mx-auto">
                        <div className="flex flex-col justify-between gap-4">
                            <div>
                                <img
                                    className="aspect-square max-md:w-36 object-cover w-48 bg-gray-400 rounded-full select-none"
                                    src={user.profileImageUrl}
                                    alt={user.name}
                                />
                                <p className="max-md:hidden mt-2 text-center">
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
                                <div className="md:gap-1 flex flex-col">
                                    <p className="font-semibold">{user.nim}</p>
                                    <p className="font-semibold">
                                        {user.prodi}
                                    </p>
                                    <div className="max-md:place-content-center flex gap-2">
                                        <p className="font-semibold">
                                            {user.namaKelompok}
                                        </p>
                                        <p className="font-semibold">
                                            ({user.kelompok})
                                        </p>
                                    </div>
                                </div>
                                <p className="whitespace-pre-wrap break-words text-wrap text-sm md:text-[16px]">
                                    “{user.bio}”
                                </p>
                            </div>

                            <div className="md:hidden place-content-center flex flex-wrap w-full gap-8 my-4 text-sm">
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
                                <a
                                    className={`${buttonVariants()} w-full bg-white border border-[#ECAA25] text-black`}
                                    href={user.instagramUrl}
                                    target="_blank"
                                >
                                    <img src={instagramIcon} />
                                </a>
                                <a
                                    className={`${buttonVariants()} w-full bg-white border border-[#ECAA25] text-black`}
                                    href={user.linkedinUrl}
                                    target="_blank"
                                >
                                    <img src={linkedinIcon} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <p className="mt-8 mx-auto font-[500] text-center max-md:text-sm">
                        Yuk, kunjungi profile Nusantara Muda yang lain di bawah
                        ini!
                    </p>

                    <div className="w-4/5 max-w-6xl mx-auto">
                        <Carousel>
                            <CarouselContent className="text-sm">
                                {users.slice(0, 9).map((u, i) => (
                                    <CarouselItem
                                        data-aos="fade-up"
                                        data-aos-duration={800}
                                        data-aos-delay={(i + 1) * 100}
                                        className="basis-48 md:basis-1/4 xl:basis-1/5 mt-2 mb-8 text-center"
                                    >
                                        <ProfileCard user={u} />
                                    </CarouselItem>
                                ))}
                                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 mt-2 mb-8">
                                    <Card className="drop-shadow-xl h-full rounded-md">
                                        <CardContent className="flex flex-col items-center justify-between h-full gap-1 p-4 text-black bg-white border rounded-md">
                                            <div className="bg-gradient-to-r place-content-center from-jaffa-600 to-jaffa-800 grid w-24 h-24 text-white rounded-full">
                                                <IconMoodSearch
                                                    size={64}
                                                    className=""
                                                />
                                            </div>
                                            <p className="font-bold text-center">
                                                Temukan Nusantara Muda Lainnya!
                                            </p>
                                            <a href={route("relasi")}>
                                                <Button className="w-full bg-[#ECAA25] text-black border border-black font-semibold text-xs">
                                                    Selengkapnya
                                                </Button>
                                            </a>
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
