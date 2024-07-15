"use client";

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/tooltip";
import { useSidebar } from "@/lib/hooks/useSidebar";
import { User } from "@/lib/types/User";
import { cn } from "@/lib/utils";
import { PageProps } from "vendor/laravel/breeze/stubs/inertia-react-ts/resources/js/types";

import { Dispatch, SetStateAction } from "react";

import { Link, usePage } from "@inertiajs/react";

import { Icons } from "@/Components/dashboard/icons";

import { NavItem } from "@/constants/data";

interface DashboardNavProps {
    items: NavItem[];
    setOpen?: Dispatch<SetStateAction<boolean>>;
    isMobileNav?: boolean;
}

export function DashboardNav({
    items,
    setOpen,
    isMobileNav = false,
}: DashboardNavProps) {
    // const path = usePathname();
    const { isMinimized } = useSidebar();
    type MyPage = PageProps<{
        auth: {
            user: User;
        };
    }>;

    const { auth } = usePage<MyPage>().props;

    console.log(auth.user);

    if (!items?.length) {
        return null;
    }

    console.log("isActive", isMobileNav, isMinimized);

    return (
        <nav className="grid items-start gap-2">
            <TooltipProvider>
                {items.map((item, index) => {
                    const Icon = Icons[item.icon || "arrowRight"];
                    return (
                        item.href &&
                        item.role_id.includes(auth.user.role_id) && (
                            <Tooltip key={index}>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={item.disabled ? "/" : item.href}
                                        className={cn(
                                            "flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                                            // path === item.href
                                            //     ? "bg-accent"
                                            //     : "transparent",
                                            item.disabled &&
                                                "cursor-not-allowed opacity-80",
                                        )}
                                        onClick={() => {
                                            if (setOpen) setOpen(false);
                                        }}
                                    >
                                        <Icon className={`ml-3 size-5`} />

                                        {isMobileNav ||
                                        (!isMinimized && !isMobileNav) ? (
                                            <span className="mr-2 truncate">
                                                {item.title}
                                            </span>
                                        ) : (
                                            ""
                                        )}
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent
                                    align="center"
                                    side="right"
                                    sideOffset={8}
                                    className={
                                        !isMinimized ? "hidden" : "inline-block"
                                    }
                                >
                                    {item.title}
                                </TooltipContent>
                            </Tooltip>
                        )
                    );
                })}
            </TooltipProvider>
        </nav>
    );
}
