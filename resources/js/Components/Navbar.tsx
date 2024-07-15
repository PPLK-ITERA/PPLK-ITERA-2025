import NavLarge from "./NavLarge";

import React from "react";

import { Link } from "@inertiajs/react";

import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import NavMobile from "@/Components/NavMobile";

import logopplk from "!assets/logo-pplk-2024.png";

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
        <nav
            className={`z-50 w-full ${isFixed ? "lg:fixed lg:left-0 lg:right-0 lg:top-0" : ""} ${isScrolled || isSolid ? "bg-jaffa-100" : "bg-transparent"} transition duration-300 ease-in`}
        >
            <MaxWidthWrapper className="md:px-0 flex items-center justify-between w-full py-2">
                {/* Logo PPLK*/}
                <Link
                    className="font-fesbud flex items-center justify-start -ml-4"
                    href="/"
                >
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
                </Link>

                {/* NavLinks */}
                <NavLarge isScrolled={isScrolled} isSolid={isSolid} />

                {/* NavMobile */}
                <NavMobile isScrolled={isScrolled} isSolid={isSolid} />

                {/* Auth */}
                <div className="md:flex items-center hidden">
                    <Link
                        href={route("login")}
                        className="mx-2 rounded-lg bg-gradient-to-t from-[#A6680C] to-[#B9822F] px-4 py-[10px] font-montserrat text-[16px] font-semibold text-white shadow-sm"
                    >
                        Login
                    </Link>
                </div>
            </MaxWidthWrapper>
        </nav>
    );
}
