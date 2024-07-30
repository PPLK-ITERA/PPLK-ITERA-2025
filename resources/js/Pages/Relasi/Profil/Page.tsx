import Autoplay from "embla-carousel-autoplay";

import React from "react";

import { Link } from "@inertiajs/react";

import { UserPlus } from "lucide-react";

import {
    IconBrandInstagram,
    IconBrandLinkedin,
    IconMoodAngry,
    IconMoodSearch,
} from "@tabler/icons-react";

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

import { useAos } from "@/lib/hooks/useAos";
import { User } from "@/lib/types/User";

import instagramIcon from "!assets/svg/instagram.svg";
import linkedinIcon from "!assets/svg/linkedin.svg";

// type Props = { response };

function Page({ response }) {
    useAos();

    const sugesstedUsers: User[] = response.data.random_users;
    const user: User = response.data.user;

    console.log("response", response);

    return (
        <div className="bg-pattern-white flex flex-col w-full min-h-screen">
            <div>
                <Navbar isSolid={true} isFixed={false} />

                <div className="max-w-7xl font-montserrat md:text-md md:mt-16 flex flex-col gap-8 px-2 py-16 mx-auto text-base text-black">
                    <div className="max-md:flex-col max-md:text-center max-md:items-center place-content-center flex w-full max-w-5xl gap-8 mx-auto">
                        <div className="flex flex-col justify-between gap-4">
                            <div>
                                <img
                                    className="aspect-square max-md:w-36 object-cover w-48 border-2 rounded-full select-none"
                                    src={user.photo_profile_url}
                                    alt={user.name}
                                />
                                <p className="max-md:hidden mt-2 text-center">
                                    <span className="font-bold">
                                        {user.view_count}
                                    </span>{" "}
                                    viewers
                                </p>
                            </div>

                            <Button className="max-md:hidden w-full bg-[#ECAA25] hover:bg-[#ECAA25]/90 transition duration-200 ease-in-out border border-black text-black">
                                <UserPlus className="w-6 h-6 mr-2" />
                                <p className="font-bold">Ikuti</p>
                            </Button>
                        </div>

                        <div className="flex flex-col justify-between w-full md:w-[28rem]">
                            <div className="md:hidden place-content-center flex flex-wrap w-full gap-8 my-4 text-sm">
                                <p>
                                    <span className="block font-bold">
                                        {user.view_count}
                                    </span>{" "}
                                    viewers
                                </p>
                                <p>
                                    <span className="block font-bold">
                                        {user.followers_count}
                                    </span>{" "}
                                    Followers
                                </p>
                                <p>
                                    <span className="block font-bold">
                                        {user.followings_count}
                                    </span>{" "}
                                    Following
                                </p>
                            </div>

                            <div className="flex flex-col gap-2 mt-1">
                                <div className="max-md:hidden flex gap-12">
                                    <p>
                                        <span className="font-bold">
                                            {user.followers_count}
                                        </span>{" "}
                                        Followers
                                    </p>
                                    <p>
                                        <span className="font-bold">
                                            {user.followings_count}
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
                                            {user.kelompok.nama_kelompok}
                                        </p>
                                        <p className="font-semibold">
                                            ({user.kelompok.no_kelompok})
                                        </p>
                                    </div>
                                </div>
                                <p className="whitespace-pre-wrap break-words text-wrap text-sm md:text-[16px]">
                                    “{user.bio}”
                                </p>
                            </div>

                            <div className="md:w-fit md:mx-0 flex gap-4 mx-auto mt-5">
                                <a
                                    className={`w-full flex gap-1 justify-center items-center p-1 rounded-md bg-trasnparent border bg-[#ECAA25] hover:bg-[#ECAA25]/90 transition duration-200 ease-in-out text-black`}
                                    href={user.instagram_url}
                                    target="_blank"
                                >
                                    <IconBrandInstagram
                                        size={32}
                                        color="black"
                                        stroke={1.8}
                                    />
                                    <span className="md:text-[14px] text-[10px] font-semibold hidden md:block">
                                        @nusantaramuda
                                    </span>
                                </a>

                                <a
                                    className={`w-full flex gap-1 justify-center items-center p-1 rounded-md bg-trasnparent border bg-[#ECAA25] hover:bg-[#ECAA25]/90 transition duration-200 ease-in-out text-black`}
                                    href={user.linkedin_url}
                                    target="_blank"
                                >
                                    <IconBrandLinkedin
                                        size={32}
                                        color="black"
                                        stroke={1.8}
                                    />

                                    <span className="md:text-[14px] text-[10px] font-semibold hidden md:block">
                                        Nusantara Muda
                                    </span>
                                </a>
                            </div>

                            <Button className="md:hidden mb-4 mt-5 w-full bg-[#ECAA25] hover:bg-[#ECAA25]/90 transition duration-200 ease-in-out     border border-black text-black">
                                <UserPlus className="w-6 h-6 mr-2" />
                                <p className="font-bold">Ikuti</p>
                            </Button>
                        </div>
                    </div>

                    <p className="mt-8 mx-auto font-[500] text-center max-md:text-sm">
                        Yuk, kunjungi profile Nusantara Muda yang lain di bawah
                        ini!
                    </p>

                    <div className="w-4/5 max-w-6xl mx-auto">
                        <Carousel>
                            <CarouselContent className="px-2 text-sm">
                                {sugesstedUsers.slice(0, 9).map((u, i) => (
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
}

export default Page;
