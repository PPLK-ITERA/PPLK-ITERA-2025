import { Link } from "@inertiajs/react";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "@/Components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTrigger,
} from "@/Components/ui/sheet";

import logopplk_white from "../../../public/assets/logo-pplk-20204-white.png";

const NavLinks = [
    {
        name: "Beranda",
        href: "/",
    },
    {
        name: "Informasi",
        href: "/Informasi",
    },
    {
        name: "Ketentuan Atribut",
        href: "/atribut",
    },
    {
        name: "Maba",
        href: "/maba",
    },
    {
        name: "FAQ",
        href: "/faq",
    },
];

export default function Navbar({ isSolid = false, isFixed = false }) {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 700);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`z-50 w-full ${isFixed ? "lg:fixed lg:left-0 lg:right-0 lg:top-0" : ""} ${isScrolled || isSolid ? "bg-jaffa-100" : "bg-transparent"} transition duration-300 ease-in`}
        >
            <MaxWidthWrapper className="flex w-full items-center justify-between py-2 md:px-0">
                {/* Logo */}
                <div className="-ml-4 flex items-center justify-start font-fesbud">
                    <img
                        src="/assets/logo-pplk-2024.png"
                        alt="logo-pplk-2024"
                        className="h-16 w-16"
                        width={202}
                        height={202}
                    />

                    <div
                        className={`flex flex-col justify-center leading-[14px] ${isScrolled || isSolid ? "text-[#A6680C]" : "text-jaffa-400"} transition duration-200 ease-in`}
                    >
                        <p>PPLK</p>
                        <p>ITERA</p>
                    </div>
                </div>

                {/* NavLinks */}
                <div className="hidden font-tinos md:flex">
                    {NavLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className={`mx-2 text-[18px] font-bold text-jaffa-100 ${isScrolled || isSolid ? "text-jaffa-950" : ""} transition duration-200 ease-in`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="block md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="36"
                                height="36"
                                viewBox="0 0 24 24"
                                fill="#ffffff"
                                stroke="#ffffff"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M4 6h16" />
                                <path d="M7 12h13" />
                                <path d="M10 18h10" />
                            </svg>
                        </SheetTrigger>

                        <SheetContent className="border-none bg-candlelight-700">
                            <SheetHeader>
                                <img
                                    src={logopplk_white}
                                    alt="logopplk_white"
                                    className="-ml-3 h-32 w-32"
                                />
                            </SheetHeader>

                            <div className="flex flex-col font-tinos">
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

                {/* Auth */}
                <div className="hidden items-center md:flex">
                    <Link
                        href="/login"
                        className="mx-2 rounded-lg bg-gradient-to-t from-[#A6680C] to-[#B9822F] px-4 py-[10px] font-montserrat text-[16px] font-semibold text-white shadow-sm"
                    >
                        Login
                    </Link>
                </div>
            </MaxWidthWrapper>
        </div>
    );
}
