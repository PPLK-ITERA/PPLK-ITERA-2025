import NavLarge from "./NavLarge";

import React from "react";

import { usePage } from "@inertiajs/react";
import { Link } from "@inertiajs/react";

import { IconLogout, IconUserCircle } from "@tabler/icons-react";

import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import NavMobile from "@/Components/NavMobile";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";

import { UserDropdown } from "@/constants/navlink";

import logopplk from "!assets/logo-pplk-2024.png";
import logopplk_white from "!assets/logo-pplk-20204-white.png";

interface NavbarProps {
    isSolid?: boolean;
    isFixed?: boolean;
}

export default function Navbar({
    isSolid = false,
    isFixed = false,
}: NavbarProps) {
    const { auth } = usePage().props;

    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 150);
        };

        window.addEventListener("scroll", handleScroll);
        // Check scroll position on initial render
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`z-50 w-full ${isFixed ? "lg:fixed lg:left-0 lg:right-0 lg:top-0" : ""} ${isScrolled || isSolid ? "bg-gradient-to-r from-jaffa-700 to-jaffa-800" : "bg-transparent"} transition duration-300 ease-in`}
        >
            <MaxWidthWrapper className="md:px-0 flex items-center justify-between w-full py-2">
                {/* Logo PPLK*/}
                <Link
                    className="font-fesbud flex items-center justify-start -ml-4"
                    href="/"
                >
                    {isScrolled || isSolid ? (
                        <img
                            src={logopplk_white}
                            alt="logo-pplk-2024"
                            className="w-16 h-16"
                            width={202}
                            height={202}
                        />
                    ) : (
                        <img
                            src={logopplk}
                            alt="logo-pplk-2024"
                            className="w-16 h-16"
                            width={202}
                            height={202}
                        />
                    )}
                    {/* text-[#A6680C] */}
                    <div
                        className={`flex flex-col justify-center leading-[14px] ${isScrolled || isSolid ? " text-white" : "text-jaffa-400"} transition duration-300 ease-in-out`}
                    >
                        <p>PPLK</p>
                        <p>ITERA</p>
                    </div>
                </Link>

                {/* NavLinks */}
                <NavLarge isScrolled={isScrolled} isSolid={isSolid} />

                {/* NavMobile */}
                <NavMobile />

                {/* Auth */}
                <div className="md:flex items-center hidden">
                    {auth.user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger
                                className={`flex items-center justify-center border-none outline-none transition-all focus:border-none focus:outline-none focus:ring-0 ${isScrolled || isSolid ? "bg-jaffa-600" : "bg-jaffa-400"} p-1 rounded-full transition-all duration-300 ease-in-out`}
                            >
                                <IconUserCircle size={28} color="white" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className={`${isScrolled || isSolid ? "bg-gradient-to-r from-jaffa-700 to-jaffa-800" : "bg-jaffa-100"} border-none outline-none`}
                                align="end"
                            >
                                <p
                                    className={`pl-[10px] py-[4px] mx-2 font-normal font-montserrat ${isScrolled || isSolid ? "text-white" : "text-black"} transition-all duration-200 ease-in`}
                                >
                                    Hallo, {auth.user.name}
                                </p>

                                <DropdownMenuSeparator
                                    className={`${isScrolled || isSolid ? "bg-white" : "bg-black"}`}
                                />

                                {UserDropdown.map((item, index) => (
                                    <DropdownMenuItem
                                        key={index}
                                        className={`${isScrolled || isSolid ? "focus:bg-jaffa-600" : "focus:bg-jaffa-200"} w-full transition-all duration-300 ease-in-out`}
                                    >
                                        <Link
                                            href={item.href}
                                            className={`mx-2 flex w-full items-center justify-start gap-3 px-[2px] py-[4px] text-[14px] font-semibold font-montserrat ${isScrolled || isSolid ? "text-white" : "text-black"} transition-all duration-200 ease-in`}
                                        >
                                            <span
                                                className={`${isScrolled || isSolid ? "bg-jaffa-500" : "bg-jaffa-300"} p-1 rounded-md`}
                                            >
                                                {item.icon}
                                            </span>
                                            {item.title}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}

                                <DropdownMenuItem
                                    className={`${isScrolled || isSolid ? "focus:bg-jaffa-600" : "focus:bg-jaffa-200"} w-full transition-all duration-300 ease-in-out`}
                                >
                                    <Link
                                        href={route("logout")}
                                        className={`mx-2 flex w-full items-center justify-start gap-3 px-[2px] py-[4px] text-[14px] font-semibold font-montserrat ${isScrolled || isSolid ? "text-white" : "text-black"} transition-all duration-200 ease-in`}
                                    >
                                        <span
                                            className={`${isScrolled || isSolid ? "bg-jaffa-500" : "bg-jaffa-300"} p-1 rounded-md`}
                                        >
                                            <IconLogout color="#fcedd8" />
                                        </span>
                                        Logout
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Link
                            href={route("login")}
                            className={`mx-2 rounded-lg  px-4 py-[10px] font-montserrat text-[16px] font-semibold  shadow-sm ${isScrolled || isSolid ? "bg-white text-jaffa-950" : "bg-gradient-to-t from-[#A6680C] to-[#B9822F] text-white"} transition duration-300 ease-in-out`}
                        >
                            Login
                        </Link>
                    )}
                </div>
            </MaxWidthWrapper>
        </nav>
    );
}
