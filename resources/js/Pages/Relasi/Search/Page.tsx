import Autoplay from "embla-carousel-autoplay";
import { useSearchParams } from "react-router-dom";

import React, { useEffect, useState } from "react";

import { UserPlus } from "lucide-react";

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
import { Toaster } from "@/Components/ui/toaster";
import { useToast } from "@/Components/ui/use-toast";

import { fetchSearch } from "@/lib/data/relasi";
import { useAos } from "@/lib/hooks/useAos";
import { User } from "@/lib/types/User";
import { UserSearchResponse } from "@/lib/types/UserSearchResponse";

const sortOptions = [
    { label: "Viewer", value: "viewer" },
    { label: "Follower", value: "follower" },
    { label: "Following", value: "following" },
    { label: "Nama", value: "nama" },
];

function Page() {
    useAos();

    const toast = useToast();
    const [searchLoading, setSearchLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchResponse, setSearchResponse] = useState<UserSearchResponse>();
    const [users, setUsers] = useState<Partial<User>[]>([]);
    const [search, setSearch] = useState("");
    const [searchTitle, setSearchTitle] = useState<string>(
        "Cari Naramuda Lainnya!",
    );

    async function mFetchSearch(
        mSearch: string = "",
        page: number = currentPage,
    ) {
        if (!mSearch) return;
        if (mSearch.length > 100) {
            toast.toast({
                title: "Gagal mencari Naramuda...",
                description: "Kata kunci terlalu panjang",
                variant: "destructive",
            });
            return;
        }
        if (/[^a-zA-Z0-9_ ]/g.test(mSearch)) {
            toast.toast({
                title: "Gagal mencari Naramuda...",
                description: "Kata kunci hanya boleh berupa huruf dan angka",
                variant: "destructive",
            });
            return;
        }

        // set search to url query params
        let url = new URL(window.location.href);
        url.searchParams.set("search", mSearch);
        window.history.pushState({}, "", url.toString());

        if (search != mSearch) {
            setCurrentPage(1);
        }

        setSearch(mSearch);
        setSearchLoading(true);
        let response = await fetchSearch(mSearch, page);
        setSearchResponse(response);
        setUsers(response.data);
        setSearchTitle(`Hasil Pencarian dari ${mSearch}`);
        setSearchLoading(false);
    }

    useEffect(() => {
        let s = new URLSearchParams(window.location.search).get("search") ?? "";
        setSearch(s);
        mFetchSearch(s);
    }, []);

    useEffect(() => {
        mFetchSearch(search, currentPage);
    }, [currentPage]);

    const getPaginationRange = () => {
        let range: Array<number> = [];
        let start = Math.max(1, currentPage - 2);
        let end = Math.min(searchResponse?.last_page ?? 0, start + 4);
        for (let i = start; i <= end; i++) {
            range.push(i);
        }
        return range;
    };

    return (
        <div className="bg-pattern-white flex flex-col w-full min-h-screen">
            <div>
                <Navbar isSolid={true} isFixed={false} />

                <div className="max-w-7xl md:pt-24 lg:pt-32 font-montserrat md:text-md flex flex-col gap-8 px-2 py-16 pt-10 mx-auto text-base text-black">
                    <div className="relative w-full max-w-3xl mx-auto">
                        <RelasiSearch
                            onsubmit={(search) => mFetchSearch(search, 1)}
                        />
                    </div>
                    {searchLoading ? (
                        <RelasiLoading className="min-h-72 w-full" />
                    ) : (
                        <div className="w-full max-w-5xl mx-auto">
                            <div className="place-content-center place-items-center flex">
                                <h4 className="lg:text-2xl text-lg font-bold text-center">
                                    {searchTitle}
                                </h4>
                            </div>
                            {users.length > 0 ? (
                                <UserList users={users} />
                            ) : (
                                <div className="text-wrap mx-auto my-16 text-sm text-center">
                                    Maaf, kami tidak dapat menemukan Naramuda
                                    yang kamu cari 😕
                                </div>
                            )}
                        </div>
                    )}

                    <ul className="place-content-center flex flex-wrap gap-2 mx-auto">
                        <li>
                            <Button
                                onClick={() =>
                                    setCurrentPage(Math.max(currentPage - 1, 1))
                                }
                                className="bg-gradient-to-br from-jaffa-600 to-jaffa-700 hover:scale-110  transition"
                            >
                                <IconChevronLeft></IconChevronLeft>
                            </Button>
                        </li>

                        {getPaginationRange().map((page) => (
                            <li key={page}>
                                <Button
                                    className=" bg-gradient-to-br from-jaffa-600 to-jaffa-700 hover:scale-110 transition"
                                    onClick={() => setCurrentPage(page)}
                                >
                                    {page}
                                </Button>
                            </li>
                        ))}

                        <li>
                            <Button
                                onClick={() =>
                                    setCurrentPage(
                                        Math.min(
                                            currentPage + 1,
                                            searchResponse?.last_page ?? 1,
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
                        {searchResponse?.last_page ?? 1}
                    </p>
                </div>

                <Footer />
            </div>

            <Toaster />
        </div>
    );
}

export default Page;
