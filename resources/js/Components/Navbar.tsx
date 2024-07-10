import React from "react";

import { Link } from "@inertiajs/react";

import { ChevronDown } from "lucide-react";

import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTrigger,
} from "@/Components/ui/sheet";

import logopplk from "!assets/logo-pplk-2024.png";
import logopplk_white from "!assets/logo-pplk-20204-white.png";

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

const InformasiDropDown = [
    {
        title: "Tentang PPLK",
        href: "/informasi-pplk",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#da5b1c"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                <path d="M12 9h.01" />
                <path d="M11 12h1v4h1" />
            </svg>
        ),
    },
    {
        title: "Fakultas ITERA",
        href: "/informasi-fakultas",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#da5b1c"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-building-skyscraper"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l18 0" />
                <path d="M5 21v-14l8 -4v18" />
                <path d="M19 21v-10l-6 -4" />
                <path d="M9 9l0 .01" />
                <path d="M9 12l0 .01" />
                <path d="M9 15l0 .01" />
                <path d="M9 18l0 .01" />
            </svg>
        ),
    },
    {
        title: "Prodi & HMPS ITERA",
        href: "/informasi-",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#da5b1c"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-school"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
                <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
            </svg>
        ),
    },
    {
        title: "UPT ITERA",
        href: "/",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#da5b1c"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-building-community"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                <path d="M13 7l0 .01" />
                <path d="M17 7l0 .01" />
                <path d="M17 11l0 .01" />
                <path d="M17 15l0 .01" />
            </svg>
        ),
    },
    {
        title: "Kabinet KM ITERA",
        href: "/",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#da5b1c"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-tie"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 22l4 -4l-2.5 -11l.993 -2.649a1 1 0 0 0 -.936 -1.351h-3.114a1 1 0 0 0 -.936 1.351l.993 2.649l-2.5 11l4 4z" />
                <path d="M10.5 7h3l5 5.5" />
            </svg>
        ),
    },
    {
        title: "Senat KM ITERA",
        href: "/",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#da5b1c"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-gavel"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M13 10l7.383 7.418c.823 .82 .823 2.148 0 2.967a2.11 2.11 0 0 1 -2.976 0l-7.407 -7.385" />
                <path d="M6 9l4 4" />
                <path d="M13 10l-4 -4" />
                <path d="M3 21h7" />
                <path d="M6.793 15.793l-3.586 -3.586a1 1 0 0 1 0 -1.414l2.293 -2.293l.5 .5l3 -3l-.5 -.5l2.293 -2.293a1 1 0 0 1 1.414 0l3.586 3.586a1 1 0 0 1 0 1.414l-2.293 2.293l-.5 -.5l-3 3l.5 .5l-2.293 2.293a1 1 0 0 1 -1.414 0z" />
            </svg>
        ),
    },
    {
        title: "Unit Kegiatan Mahasiswa",
        href: "/",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#da5b1c"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-ball-football"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M12 7l4.76 3.45l-1.76 5.55h-6l-1.76 -5.55z" />
                <path d="M12 7v-4m3 13l2.5 3m-.74 -8.55l3.74 -1.45m-11.44 7.05l-2.56 2.95m.74 -8.55l-3.74 -1.45" />
            </svg>
        ),
    },
    {
        title: "Divisi PPLK",
        href: "/",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#da5b1c"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-users-group"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
                <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M17 10h2a2 2 0 0 1 2 2v1" />
                <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
            </svg>
        ),
    },
    {
        title: "Kenal Maskot PPLK!",
        href: "/",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#da5b1c"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-mood-wink"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M15 10h.01" />
                <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
                <path d="M8.5 8.5l1.5 1.5l-1.5 1.5" />
            </svg>
        ),
    },
];

const MabaDropDown = [
    {
        title: "Profil Kamu",
        href: "/profil",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#da5b1c"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
            </svg>
        ),
    },
    {
        title: "Relasi & Jaringan",
        href: "/relasi-jaringan",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#da5b1c"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-users"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
            </svg>
        ),
    },
    {
        title: "Booklet PPLK",
        href: "/booklet",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#da5b1c"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-book"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6l0 13" />
                <path d="M12 6l0 13" />
                <path d="M21 6l0 13" />
            </svg>
        ),
    },
    {
        title: "Mading",
        href: "/",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#da5b1c"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-map"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13" />
                <path d="M9 4v13" />
                <path d="M15 7v13" />
            </svg>
        ),
    },
    {
        title: "Kuis Assesmen",
        href: "/assesmen",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#da5b1c"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-ballpen"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 6l7 7l-4 4" />
                <path d="M5.828 18.172a2.828 2.828 0 0 0 4 0l10.586 -10.586a2 2 0 0 0 0 -2.829l-1.171 -1.171a2 2 0 0 0 -2.829 0l-10.586 10.586a2.828 2.828 0 0 0 0 4z" />
                <path d="M4 20l1.768 -1.768" />
            </svg>
        ),
    },
    {
        title: "Game",
        href: "/game",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#da5b1c"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-device-gamepad-2"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 5h3.5a5 5 0 0 1 0 10h-5.5l-4.015 4.227a2.3 2.3 0 0 1 -3.923 -2.035l1.634 -8.173a5 5 0 0 1 4.904 -4.019h3.4z" />
                <path d="M14 15l4.07 4.284a2.3 2.3 0 0 0 3.925 -2.023l-1.6 -8.232" />
                <path d="M8 9v2" />
                <path d="M7 10h2" />
                <path d="M14 10h2" />
            </svg>
        ),
    },
    {
        title: "Scoreboard",
        href: "/scoreboard",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#da5b1c"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-crown"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z" />
            </svg>
        ),
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
<<<<<<< HEAD
        <div
=======
        <nav
>>>>>>> c935874ef9f1a911ad19a891fc7e9d70bb5cec4a
            className={`z-50 w-full ${isFixed ? "lg:fixed lg:left-0 lg:right-0 lg:top-0" : ""} ${isScrolled || isSolid ? "bg-jaffa-100" : "bg-transparent"} transition duration-300 ease-in`}
        >
            <MaxWidthWrapper className="md:px-0 flex items-center justify-between w-full py-2">
                {/* Logo */}
                <div className="font-fesbud flex items-center justify-start -ml-4">
                    <img
                        src={logopplk}
                        alt="logo-pplk-2024"
                        className="w-16 h-16"
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
<<<<<<< HEAD
                <div className="hidden font-tinos md:flex">
                    {NavLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className={`mx-2 text-[18px] font-bold text-jaffa-100 ${isScrolled || isSolid ? "text-jaffa-950" : ""} transition duration-200 ease-in`}
=======
                <div className="hidden max-w-[800px] font-tinos md:flex">
                    <Link
                        href="/"
                        className={`mx-2 text-[18px] font-bold text-jaffa-100 ${isScrolled || isSolid ? "text-jaffa-950" : ""} transition duration-200 ease-in`}
                    >
                        Beranda
                    </Link>

                    <DropdownMenu>
                        <DropdownMenuTrigger
                            className={`mx-2 flex items-center justify-center text-[18px] font-bold text-jaffa-100 ${isScrolled || isSolid ? "text-jaffa-950" : ""} border-none outline-none transition duration-200 ease-in focus:border-none focus:outline-none focus:ring-0`}
>>>>>>> c935874ef9f1a911ad19a891fc7e9d70bb5cec4a
                        >
                            Informasi <ChevronDown className="w-4 h-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-jaffa-100 border-none outline-none">
                            {InformasiDropDown.map((item, index) => (
                                <DropdownMenuItem
                                    key={index}
                                    className="focus:bg-jaffa-200 w-full transition duration-300 ease-in-out"
                                >
                                    <Link
                                        href={item.href}
                                        className={`mx-2 flex w-full items-center justify-start gap-3 px-[8px] py-[4px] text-[14px] font-semibold text-black transition duration-200 ease-in`}
                                    >
                                        <span className="bg-jaffa-300 p-1 rounded-md">
                                            {item.icon}
                                        </span>
                                        {item.title}
                                    </Link>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Link
                        href="/ketentuan-atribut"
                        className={`mx-2 text-[18px] font-bold text-jaffa-100 ${isScrolled || isSolid ? "text-jaffa-950" : ""} transition duration-200 ease-in`}
                    >
                        Ketentuan Atribut
                    </Link>

                    <DropdownMenu>
                        <DropdownMenuTrigger
                            className={`mx-2 flex items-center justify-center text-[18px] font-bold text-jaffa-100 ${isScrolled || isSolid ? "text-jaffa-950" : ""} transition duration-200 ease-in focus:border-none focus:outline-none focus:ring-0`}
                        >
                            Maba <ChevronDown className="w-4 h-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-jaffa-100 border-none outline-none">
                            {MabaDropDown.map((item, index) => (
                                <DropdownMenuItem
                                    key={index}
                                    className="focus:bg-jaffa-200 w-full transition duration-300 ease-in-out"
                                >
                                    <Link
                                        href={item.href}
                                        className={`mx-2 flex w-full items-center justify-start gap-3 px-[8px] py-[4px] text-[14px] font-semibold text-black transition duration-200 ease-in`}
                                    >
                                        <span className="bg-jaffa-300 p-1 rounded-md">
                                            {item.icon}
                                        </span>
                                        {item.title}
                                    </Link>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Link
                        href={route("ucup")}
                        className={`mx-2 text-[18px] font-bold text-jaffa-100 ${isScrolled || isSolid ? "text-jaffa-950" : ""} transition duration-200 ease-in`}
                    >
                        FAQ
                    </Link>
                </div>

                <div className="md:hidden block">
                    <Sheet>
                        <SheetTrigger asChild className="-mr-2">
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

                {/* Auth */}
                <div className="md:flex items-center hidden">
                    <Link
                        href="/login"
                        className="mx-2 rounded-lg bg-gradient-to-t from-[#A6680C] to-[#B9822F] px-4 py-[10px] font-montserrat text-[16px] font-semibold text-white shadow-sm"
                    >
                        Login
                    </Link>
                </div>
            </MaxWidthWrapper>
        </nav>
    );
}
