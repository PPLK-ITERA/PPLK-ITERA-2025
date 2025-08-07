import React, { useEffect, useState } from "react";

import { Link, usePage } from "@inertiajs/react";

import { IconLayoutNavbarFilled, IconLogout } from "@tabler/icons-react";

import { Button } from "@/Components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu"

import { useSidebar } from "@/lib/hooks/useSidebar";

import BlankPhoto from '!assets/blank-profile.png';

const roles = [
    "DataEntry",
    "Maba",
    "Daplok",
    "Admin",
    "Mentor",
    "Pjprodi",
    "Korlap",
    "Mamet",
    "CustomerService",
];

export function UserSidebar({ user }) {
    const { isMinimized } = useSidebar();
    const [photoUrl, setPhotoUrl] = useState<string>(() => user.photo_profile_url || "");
    const [objectUrl, setObjectUrl] = useState<string | null>(null);
    const page = usePage();
    const pathname = page?.url || window.location.pathname;

    useEffect(() => {
        let didCancel = false;
        const cacheKey = "profile_photo_cache";
        const cacheTimeKey = "profile_photo_cache_time";
        const cacheExpiry = 1000 * 60 * 10; // 10 minutes

        // If on /dashboard, clear cache and fetch fresh
        if (pathname === "/dashboard") {
            localStorage.removeItem(cacheKey);
            localStorage.removeItem(cacheTimeKey);
        } else {
            // Try to load from cache
            const cached = localStorage.getItem(cacheKey);
            const cachedTime = localStorage.getItem(cacheTimeKey);
            if (cached && cachedTime && Date.now() - parseInt(cachedTime) < cacheExpiry) {
                setPhotoUrl(cached);
                return;
            }
        }

        // Fetch fresh photo
        const apiUrl = `http://localhost:8000/api/photo-profile?ts=${Date.now()}`;
        fetch(apiUrl, {
            credentials: "include",
            headers: {
                Accept: "image/*",
            },
        })
            .then(async (res) => {
                const contentType = res.headers.get("content-type") || "";
                if (contentType.startsWith("image/")) {
                    const blob = await res.blob();
                    const url = URL.createObjectURL(blob);
                    if (!didCancel) {
                        if (objectUrl) URL.revokeObjectURL(objectUrl);
                        setPhotoUrl(url);
                        setObjectUrl(url);

                        // Cache as base64
                        const reader = new FileReader();
                        reader.onloadend = () => {
                            try {
                                localStorage.setItem(cacheKey, reader.result as string);
                                localStorage.setItem(cacheTimeKey, Date.now().toString());
                            } catch { }
                        };
                        reader.readAsDataURL(blob);
                    } else {
                        URL.revokeObjectURL(url);
                    }
                } else {
                    // Jika gambar tidak ada di API, hapus cache
                    localStorage.removeItem(cacheKey);
                    localStorage.removeItem(cacheTimeKey);
                    if (!didCancel) {
                        setPhotoUrl(user.photo_profile_url || "");
                        if (objectUrl) {
                            URL.revokeObjectURL(objectUrl);
                            setObjectUrl(null);
                        }
                    }
                }
            })
            .catch(() => {
                if (!didCancel) {
                    setPhotoUrl(user.photo_profile_url || "");
                    if (objectUrl) {
                        URL.revokeObjectURL(objectUrl);
                        setObjectUrl(null);
                    }
                }
            });
        return () => {
            didCancel = true;
            if (objectUrl) URL.revokeObjectURL(objectUrl);
        };
        // eslint-disable-next-line
    }, [user.photo_profile_url, pathname]);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {/*<Button>*/}
                <div className="flex mx-3 items-center gap-2">
                    <div className="size-12">
                        <div
                            className={isMinimized ? "mt-10" : ""}
                        >
                            <img
                                src={photoUrl && photoUrl.trim() !== "" ? photoUrl : BlankPhoto}
                                alt="Foto Profil"
                                className="rounded-full"
                            />
                        </div>
                    </div>
                    <div
                        className={isMinimized ? "hidden" : "inline-block"}
                    >
                        <div>
                            <span className="ml-2 font-medium text-xs font-poppins">
                                {user.name}
                            </span>
                        </div>
                        <div>
                            <span className="ml-2 font-bold text-sm font-poppins text-[#BE3F00]">
                                {roles[parseInt(user.role_id)]}
                            </span>
                        </div>
                    </div>
                </div>
                {/*</Button>*/}
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">{user.name}</div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href={route("welcome")}>
                    <DropdownMenuItem className="flex items-center justify-between w-full hover:bg-black/5">
                        Landing Page
                        <IconLayoutNavbarFilled className="mr-[2px]" />
                    </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <Link href={route("logout")} method="post">
                    <DropdownMenuItem className="flex items-center justify-between w-full hover:bg-black/5">
                        Log out
                        <IconLogout />
                    </DropdownMenuItem>
                </Link>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
