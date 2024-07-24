"use client";

import { Link, router } from "@inertiajs/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
// import { signOut, useSession } from "next-auth/react";
import { Button } from "@/Components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";

export function UserNav({ name }) {
    // const { data: session } = useSession();
    const session = true;
    const signOut = (e) => {
        e.preventDefault();
        router.post("/logout");
    };
    if (session) {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        className="relative w-8 h-8 rounded-full"
                    >
                        {name}
                        {/* <Avatar className="w-8 h-8">
                            <AvatarImage
                                src={session.user?.image ?? ""}
                                alt={session.user?.name ?? ""}
                            />
                            <AvatarFallback>
                                {session.user?.name?.[0]}
                            </AvatarFallback>
                        </Avatar> */}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                            {/* <p className="text-sm font-medium leading-none">
                                {session.user?.name}
                            </p>
                            <p className="text-muted-foreground text-xs leading-none">
                                {session.user?.email}
                            </p> */}
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            Profile
                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Billing
                            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Settings
                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>New Team</DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    {/* <DropdownMenuItem onClick={() => signOut()}> */}
                    <DropdownMenuItem>
                        <Link href={route("logout")} method="post">
                            Log out
                        </Link>
                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );
    }
}
