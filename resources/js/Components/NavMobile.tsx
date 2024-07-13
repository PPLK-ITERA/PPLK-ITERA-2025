import React from "react";

import { Link } from "@inertiajs/react";

import { IconMenuDeep } from "@tabler/icons-react";

import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTrigger,
} from "@/Components/ui/sheet";

import { NavLinks } from "@/constants/navlink";

import logopplk_white from "!assets/logo-pplk-20204-white.png";

type NavMobileProps = {
    isScrolled?: boolean;
    isSolid?: boolean;
};

export default function NavMobile({ isScrolled, isSolid }: NavMobileProps) {
    return (
        <div className="md:hidden block">
            <Sheet>
                <SheetTrigger asChild className="-mr-1">
                    <IconMenuDeep
                        color={`${isSolid ? "#A6680C" : "white"}`}
                        size={32}
                    />
                </SheetTrigger>

                <SheetContent className="bg-candlelight-700 border-none">
                    <SheetHeader>
                        <img
                            src={logopplk_white}
                            alt="logopplk_white"
                            className="w-32 h-32 -ml-3"
                        />
                    </SheetHeader>

                    <div className="font-tinos flex flex-col">
                        {NavLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className={`mx-2 text-[18px] font-bold text-jaffa-100 transition duration-200 ease-in`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <SheetFooter className="mt-52">
                        <div className="flex flex-col">
                            <Link
                                href="/login"
                                className="mx-2 rounded-lg bg-gradient-to-t from-[#A6680C] to-[#B9822F] px-4 py-[10px] font-montserrat text-[16px] font-semibold text-white shadow-sm"
                            >
                                Login
                            </Link>
                        </div>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    );
}
