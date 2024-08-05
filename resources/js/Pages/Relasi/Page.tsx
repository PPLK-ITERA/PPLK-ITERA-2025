import Autoplay from "embla-carousel-autoplay";
import { CircularProgressbar } from "react-circular-progressbar";
import { useSearchParams } from "react-router-dom";

import React, { useEffect, useState } from "react";

import { Head, Link } from "@inertiajs/react";

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
import RelasiLoading from "@/Components/relasi/RelasiLoading";
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
import { Progress } from "@/Components/ui/progress";

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
    const [users, setUsers] = useState<Partial<User>[]>([]);
    const [search, setSearch] = useState("");
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
        let direction = "desc";
        if (sort === "name") direction = "asc";
        mFetchSort(sort, direction);
    }, [sort]);

    return (
        <>
            <Head title="Relasi & Jaringan" />

            <div className="bg-pattern-white flex flex-col w-full min-h-screen">
                <div>
                    <Navbar isSolid={true} isFixed={false} />

                    <div className="max-w-7xl md:pt-24 lg:pt-32 font-montserrat md:text-md flex flex-col gap-8 py-16 pt-10 mx-auto text-base text-black">
                        <div className="relative w-full max-w-3xl mx-auto">
                            <Input
                                type="text"
                                placeholder="Cari Nusantara Muda yang Lain"
                                className="p-4 border rounded-[10px]"
                                onChange={(e) => setSearch(e.target.value)}
                            />

                            <Link
                                href={route("relasi.search", {
                                    search: search,
                                })}
                            >
                                <Button className="absolute top-1/2 -translate-y-1/2 right-0 bg-gradient-to-tr from-[#864D0D] to-[#A6680C] rounded-r-lg rounded-l-none">
                                    <IconSearch className="w-4 h-4" />
                                </Button>
                            </Link>
                        </div>

                        <div className="text-center">
                            <h1 className="font-avigea text-jaffa-800 text-2xl font-bold">
                                TOP 3 FOLLOWERS
                            </h1>
                        </div>

                        <div className="w-full max-w-2xl mx-auto">
                            {topLoading ? (
                                <RelasiLoading className="min-h-36 mx-auto" />
                            ) : (
                                <div className="sm:gap-4 lg:gap-8 flex justify-center w-full gap-2 pt-4 overflow-y-hidden text-center">
                                    <TopUser
                                        className="basis-1/3"
                                        user={topFollowers[1]}
                                        rank={2}
                                        podiumHeight={160}
                                    />
                                    <TopUser
                                        className="basis-1/3"
                                        user={topFollowers[0]}
                                        rank={1}
                                        podiumHeight={196}
                                    />
                                    <TopUser
                                        className="basis-1/3"
                                        user={topFollowers[2]}
                                        rank={3}
                                        podiumHeight={144}
                                    />
                                </div>
                            )}
                            <div className="bg-moccaccino-700 w-full h-1"></div>
                        </div>

                        <div className="w-full max-w-5xl mx-auto">
                            <div className="flex justify-between">
                                <h4 className="text-2xl font-bold capitalize">
                                    Profil Berdasarkan {sort}
                                </h4>
                                <SortDropdown
                                    options={sortOptions}
                                    setSort={setSort}
                                />
                            </div>
                            {sortLoading ? (
                                <RelasiLoading className="min-h-48 mx-auto" />
                            ) : (
                                <UserList users={users} />
                            )}
                        </div>
                        <div className="flex justify-center">
                            <Button className="bg-jaffa-500 mx-1 border border-black">
                                1
                            </Button>
                            <Button className="bg-jaffa-500 mx-1 border border-black">
                                2
                            </Button>
                            <Button className="bg-jaffa-500 mx-1 border border-black">
                                3
                            </Button>
                            <Button className="bg-jaffa-500 mx-1 border border-black">
                                4
                            </Button>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Page;
