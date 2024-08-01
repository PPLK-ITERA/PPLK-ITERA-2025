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
import { Progress } from "@/Components/ui/progress";

import { fetchSearch } from "@/lib/data/relasi";
import { useAos } from "@/lib/hooks/useAos";
import { User } from "@/lib/types/User";
import { UserSearchResponse } from "@/lib/types/UserSearchResponse";

import instagramIcon from "!assets/svg/instagram.svg";
import linkedinIcon from "!assets/svg/linkedin.svg";

const sortOptions = [
    { label: "Viewer", value: "viewer" },
    { label: "Follower", value: "follower" },
    { label: "Following", value: "following" },
    { label: "Nama", value: "nama" },
];

function Page() {
    useAos();
    const [sortLoading, setSortLoading] = useState(false);
    const [searchLoading, setSearchLoading] = useState(false);
    const [usersResponse, setUsersResponse] =
        useState<UserSearchResponse | null>(null);
    const [users, setUsers] = useState<Partial<User>[]>([]);
    const [search, setSearch] = useState<string>("");
    // const [sort, setSort] = useState<
    //     "viewer" | "followers" | "followings" | "name"
    // >("followers");

    // async function mFetchSort(order_by, direction) {
    //     setSortLoading(true);
    //     setUsers(await fetchSort(order_by, direction));
    //     setSortLoading(false);
    // }

    async function mFetchSearch() {
        setSearchLoading(true);
        let response = await fetchSearch(search);
        setUsersResponse(response);
        setUsers(response.data);
        setSearchLoading(false);
    }

    useEffect(() => {
        mFetchSearch();
    }, []);

    return (
        <div className="bg-pattern-white flex flex-col w-full min-h-screen">
            <div>
                <Navbar isSolid={true} isFixed={false} />

                <div className="max-w-7xl md:pt-24 lg:pt-32 font-montserrat md:text-md flex flex-col gap-8 px-2 py-16 pt-10 mx-auto text-base text-black">
                    <div className="relative w-full max-w-3xl mx-auto">
                        <Input
                            type="text"
                            placeholder="Cari Nusantara Muda yang Lain"
                            className="p-4 border rounded-full"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <Button
                            className="absolute top-1/2 -translate-y-1/2 right-2 bg-gradient-to-tr from-[#864D0D] to-[#A6680C] rounded-full p-0 w-8 h-8"
                            onClick={mFetchSearch}
                        >
                            <IconSearch size={14} />
                        </Button>
                    </div>
                    {searchLoading ? (
                        <Progress className="max-w-5xl mx-auto" />
                    ) : (
                        <div className="w-full max-w-5xl mx-auto">
                            <div className="flex justify-between">
                                <h4 className="text-2xl font-bold">
                                    {search
                                        ? `Hasil dari ${search}`
                                        : "Cari Naramuda Lainnya!"}
                                </h4>
                                {/* <SortDropdown options={sortOptions} /> */}
                            </div>
                            <UserList users={users} />
                        </div>
                    )}
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
