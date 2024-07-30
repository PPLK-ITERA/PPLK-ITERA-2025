import Autoplay from "embla-carousel-autoplay";

import React, { useEffect, useState } from "react";

import { UserPlus } from "lucide-react";

import {
    IconAdjustmentsHorizontal,
    IconFilter,
    IconMoodAngry,
    IconMoodSearch,
    IconSearch,
} from "@tabler/icons-react";

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

import { fetchSort, fetchTopFollowers } from "@/lib/data/relasi";
import { useAos } from "@/lib/hooks/useAos";
import { User } from "@/lib/types/User";

import instagramIcon from "!assets/svg/instagram.svg";
import linkedinIcon from "!assets/svg/linkedin.svg";

const sortOptions = [
    { label: "Viewer", value: "viewer" },
    { label: "Follower", value: "followers" },
    { label: "Following", value: "followings" },
    { label: "Nama", value: "name" },
];

function Page() {
    useAos();
    const [sortLoading, setSortLoading] = useState(false);
    const [topLoading, setTopLoading] = useState(false);
    const [topFollowers, setTopFollowers] = useState<User[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const [sort, setSort] = useState<
        "viewer" | "followers" | "followings" | "name"
    >("followers");

    async function mFetchSort(order_by, direction) {
        setSortLoading(true);
        setUsers(await fetchSort(order_by, direction));
        setSortLoading(false);
    }

    async function mFetchTopFollowers() {
        setTopLoading(true);
        setTopFollowers(await fetchTopFollowers());
        setTopLoading(false);
    }

    useEffect(() => {
        mFetchTopFollowers();
        mFetchSort("followers", "desc");
    }, []);

    useEffect(() => {
        console.log("topFollowers", topFollowers);
        console.log("users", users);
    }, [topFollowers, users]);

    useEffect(() => {
        let direction = "desc";
        if (sort === "name") direction = "asc";
        mFetchSort(sort, direction);
    }, [sort]);

    return (
        <div className="bg-pattern-white flex flex-col w-full min-h-screen">
            <div>
                <Navbar isSolid={true} isFixed={false} />

                <div className="max-w-7xl md:pt-24 lg:pt-32 font-montserrat md:text-md flex flex-col gap-8 px-2 py-16 pt-10 mx-auto text-base text-black">
                    <div className="relative w-full max-w-3xl mx-auto">
                        <Input
                            type="text"
                            placeholder="Cari Nusantara Muda yang Lain"
                            className="p-4 border rounded-[10px]"
                        />

                        <a href={route("relasi.search")} target="_blank">
                            <Button className="absolute top-1/2 -translate-y-1/2 right-2 bg-gradient-to-tr from-[#864D0D] to-[#A6680C] rounded-full p-0 w-8 h-8">
                                <IconSearch size={14} />
                            </Button>
                        </a>
                    </div>

                    <div className="text-center">
                        <h1 className="font-avigea text-jaffa-800 text-2xl font-bold">
                            TOP 3 FOLLOWERS
                        </h1>
                    </div>

                    <div className="w-full max-w-2xl mx-auto">
                        {/* {topLoading ? null : (
                            <div className="sm:gap-4 lg:gap-8 flex justify-center w-full gap-2 pt-4 overflow-y-hidden text-center">
                                <TopUser
                                    user={topFollowers[1]}
                                    rank={2}
                                    podiumHeight={160}
                                />
                                <TopUser
                                    user={topFollowers[0]}
                                    rank={1}
                                    podiumHeight={196}
                                />
                                <TopUser
                                    user={topFollowers[2]}
                                    rank={3}
                                    podiumHeight={144}
                                />
                            </div>
                        )} */}
                        <div className="bg-moccaccino-700 w-full h-1"></div>
                    </div>
                    <div className="w-full max-w-5xl mx-auto">
                        <div className="flex justify-between">
                            <h4 className="text-2xl font-bold">
                                Profil Berdasarkan
                            </h4>
                            <SortDropdown
                                options={sortOptions}
                                setSort={setSort}
                            />
                        </div>
                        {!sortLoading && <UserList users={users} />}
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
}

export default Page;
