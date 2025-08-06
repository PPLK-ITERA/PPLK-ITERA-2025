import React, { useEffect, useState } from "react";

import { Link } from "@inertiajs/react";

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
    const PHOTO_KEY = "photo_profile_base64";
    const [photoUrl, setPhotoUrl] = useState<string>(() => {
        return localStorage.getItem(PHOTO_KEY) || user.photo_profile_url || "";
    });

    useEffect(() => {
        let didCancel = false;

        // Jika user.photo_profile_url berubah, hapus cache
        if (localStorage.getItem(PHOTO_KEY) && user.photo_profile_url && user.photo_profile_url !== "") {
            // Cek apakah url user berubah dari sebelumnya
            const prevUrl = localStorage.getItem("photo_profile_url");
            if (prevUrl !== user.photo_profile_url) {
                localStorage.removeItem(PHOTO_KEY);
                localStorage.setItem("photo_profile_url", user.photo_profile_url);
            }
        } else if (user.photo_profile_url) {
            localStorage.setItem("photo_profile_url", user.photo_profile_url);
        }

        // Jika sudah ada di localStorage, pakai itu
        const cached = localStorage.getItem(PHOTO_KEY);
        if (cached) {
            setPhotoUrl(cached);
            return;
        }

        // Fetch dari API jika belum ada di localStorage
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
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        if (!didCancel) {
                            const base64data = reader.result as string;
                            setPhotoUrl(base64data);
                            localStorage.setItem(PHOTO_KEY, base64data);
                        }
                    };
                    reader.readAsDataURL(blob);
                } else {
                    if (!didCancel) {
                        setPhotoUrl(user.photo_profile_url || "");
                        localStorage.removeItem(PHOTO_KEY);
                    }
                }
            })
            .catch(() => {
                if (!didCancel) {
                    setPhotoUrl(user.photo_profile_url || "");
                    localStorage.removeItem(PHOTO_KEY);
                }
            });
        return () => {
            didCancel = true;
        };
        // eslint-disable-next-line
    }, [user.photo_profile_url]);

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
