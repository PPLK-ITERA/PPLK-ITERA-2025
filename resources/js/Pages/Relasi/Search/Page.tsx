import { users } from "@/lib/data/user";
import { useAos } from "@/lib/hooks/useAos";
import { User } from "@/lib/types/User";
import {
    IconAdjustmentsHorizontal,
    IconFilter,
    IconMoodAngry,
    IconMoodSearch,
    IconSearch,
} from "@tabler/icons-react";
import Autoplay from "embla-carousel-autoplay";

import React, { useState } from "react";

import { UserPlus } from "lucide-react";

import Footer from "@/Components/Footer";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import Navbar from "@/Components/Navbar";
import GoldPodium from "@/Components/relasi/Podium";
import ProfileCard from "@/Components/relasi/ProfileCard";
import SortDropdown from "@/Components/relasi/SortDropdown";
import TopUser from "@/Components/relasi/TopUser";
import UserList from "@/Components/relasi/UserList";
import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";
import { Input } from "@/Components/ui/input";

import instagramIcon from "!assets/svg/instagram.svg";
import linkedinIcon from "!assets/svg/linkedin.svg";

const sortOptions = [
    { label: "Viewer", value: "viewer" },
    { label: "Follower", value: "follower" },
    { label: "Following", value: "following" },
    { label: "Nama", value: "nama" },
];

const Page: React.FC = () => {
    useAos();

    const top3Followers = users
        .sort((user1, user2) => user2.followers - user1.followers)
        .slice(0, 3);
    const [sort, setSort] = useState(sortOptions[0]);

    return (
        <div className="bg-pattern-white flex flex-col w-full min-h-screen">
            <div>
                <Navbar isSolid={true} isFixed={false} />

                <div className="max-w-7xl py-16 font-montserrat flex flex-col gap-8 mx-auto text-base md:text-md text-black px-2">
                    <div className="relative w-full max-w-3xl mx-auto">
                        <Input
                            type="text"
                            placeholder="Cari Nusantara Muda yang Lain"
                            className="p-4 border rounded-full"
                        />
                        <a href={route("relasi/search")} target="_blank">
                            <Button className="absolute top-1/2 -translate-y-1/2 right-2 bg-gradient-to-tr from-[#864D0D] to-[#A6680C] rounded-full p-0 w-8 h-8">
                                <IconSearch size={14} />
                            </Button>
                        </a>
                    </div>
                    <div className="w-full mx-auto max-w-5xl">
                        <div className="flex justify-between">
                            <h4 className="font-bold text-2xl">
                                Hasil dari {}
                            </h4>
                            <SortDropdown options={sortOptions} />
                        </div>
                        <UserList users={users} />
                    </div>
                    <div className="flex justify-center">
                        <Button className="mx-1">1</Button>
                        <Button className="mx-1">2</Button>
                        <Button className="mx-1">3</Button>
                        <Button className="mx-1">4</Button>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default Page;
