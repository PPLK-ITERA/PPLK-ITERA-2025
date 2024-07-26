"use client";

import { Link } from "@inertiajs/react";

import { IconLayoutNavbarFilled, IconLogout } from "@tabler/icons-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Button } from "@/Components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";

export function UserNav({ name }) {
    if (name) {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        className="relative w-8 h-8 rounded-full"
                    >
                        <Avatar className="w-8 h-8">
                            <AvatarImage />
                            <AvatarFallback>
                                {name.charAt(0).toUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">{name}</div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex items-center justify-between w-full">
                        <Link href="/">Landing Page</Link>
                        <IconLayoutNavbarFilled className="mr-[2px]" />
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex items-center justify-between w-full">
                        <Link href={route("logout")} method="post">
                            Log out
                        </Link>
                        <IconLogout />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );
    }
}
