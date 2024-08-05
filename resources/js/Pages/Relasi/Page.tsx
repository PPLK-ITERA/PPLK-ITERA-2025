import Autoplay from "embla-carousel-autoplay";
import { CircularProgressbar } from "react-circular-progressbar";
import { useSearchParams } from "react-router-dom";

import React, { useEffect, useState } from "react";

import { Head, Link, router } from "@inertiajs/react";

import { ChevronLeft, UserPlus } from "lucide-react";

import {
    IconAdjustmentsHorizontal,
    IconChevronLeft,
    IconChevronRight,
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
import RelasiSearch from "@/Components/relasi/RelasiSearch";
import SortDropdown from "@/Components/relasi/SortDropdown";
import TopUser from "@/Components/relasi/TopUser";
import UserList from "@/Components/relasi/UserList";
import { Button } from "@/Components/ui/button";

import { fetchSort, fetchTopFollowers } from "@/lib/data/relasi";
import { useAos } from "@/lib/hooks/useAos";
import { User } from "@/lib/types/User";
import { UserSortResponse } from "@/lib/types/UserSortResponse";

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
    const [sortResponse, setSortResponse] = useState<UserSortResponse>();
    const [users, setUsers] = useState<Partial<User>[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sort, setSort] = useState<
        "viewer" | "followers" | "followings" | "name"
    >("followers");

    async function mFetchSort(order_by, direction) {
        setSortLoading(true);
        let response = await fetchSort(order_by, direction, currentPage);
        setSortResponse(response);
        setUsers(response.data);
        setSortLoading(false);
    }

    async function mFetchTopFollowers() {
        setTopLoading(true);
        setTopFollowers(await fetchTopFollowers());
        setTopLoading(false);
    }

    function goToSearch(keyword: string) {
        router.get(route("relasi.search"), { search: keyword });
    }

    useEffect(() => {
        mFetchTopFollowers();
        mFetchSort("followers", "desc");
    }, []);

    useEffect(() => {
        let direction = "desc";
        if (sort === "name") direction = "asc";
        mFetchSort(sort, "desc");
    }, [sort]);

    useEffect(() => {
        mFetchSort(sort, "desc");
    }, [currentPage]);

    const getPaginationRange = () => {
        let range: Array<number> = [];
        let start = Math.max(1, currentPage - 2);
        let end = Math.min(sortResponse?.last_page ?? 0, start + 4);
        for (let i = start; i <= end; i++) {
            range.push(i);
        }
        return range;
    };

    return (
        <>
            <Head title="Relasi & Jaringan" />

            <div className="bg-pattern-white flex flex-col w-full min-h-screen">
                <div>
                    <Navbar isSolid={true} isFixed={false} />

                <div className="max-w-7xl md:pt-28 lg:pt-32 font-montserrat md:text-md flex flex-col gap-8 py-16 pt-10 px-4 mx-auto text-base text-black">
                    <div className="relative w-full max-w-3xl mx-auto">
                        <RelasiSearch
                            onsubmit={(search) => goToSearch(search)}
                        />
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
                        <div className="flex max-md:flex-col place-content-center justify-between">
                            <h4 className="text-lg lg:text-2xl font-bold capitalize text-center">
                                Profil Berdasarkan {sort}
                            </h4>
                            <SortDropdown
                                options={sortOptions}
                                setSort={setSort}
                            />
                        </div>
                        {sortLoading ? (
                            <RelasiLoading className="mx-auto min-h-48" />
                        ) : (
                            <UserList users={users} />
                        )}
                    </div>

                    <ul className="flex gap-2 mx-auto flex-wrap place-content-center place-items-center">
                        <li>
                            <Button
                                size="sm"
                                onClick={() =>
                                    setCurrentPage(Math.max(currentPage - 1, 1))
                                }
                                className="bg-gradient-to-br from-jaffa-600 to-jaffa-700 hover:scale-110 transition "
                            >
                                <IconChevronLeft></IconChevronLeft>
                            </Button>
                        </li>

                        {getPaginationRange().map((page) => (
                            <li key={page}>
                                <Button
                                    size="sm"
                                    className=" bg-gradient-to-br from-jaffa-600 to-jaffa-700 hover:scale-110 transition"
                                    onClick={() => setCurrentPage(page)}
                                >
                                    {page}
                                </Button>
                            </li>
                        ))}

                        <li>
                            <Button
                                size="sm"
                                onClick={() =>
                                    setCurrentPage(
                                        Math.min(
                                            currentPage + 1,
                                            sortResponse?.last_page ?? 1,
                                        ),
                                    )
                                }
                                className=" bg-gradient-to-br from-jaffa-600 to-jaffa-700 hover:scale-110 transition"
                            >
                                <IconChevronRight></IconChevronRight>
                            </Button>
                        </li>
                    </ul>
                    <p className="text-center">
                        Halaman {currentPage} dari{" "}
                        {sortResponse?.last_page ?? 1}
                    </p>
                </div>

                <Footer />
            </div>
        </div>
    );
}

export default Page;
