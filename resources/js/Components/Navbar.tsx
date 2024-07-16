import NavLarge from "./NavLarge";

import React from "react";

import { Link } from "@inertiajs/react";

import { IconUserCircle } from "@tabler/icons-react";

import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import NavMobile from "@/Components/NavMobile";

import { User } from "@/lib/types/User";

import logopplk from "!assets/logo-pplk-2024.png";
import logopplk_white from "!assets/logo-pplk-20204-white.png";

interface NavbarProps {
    isSolid?: boolean;
    isFixed?: boolean;
    user?: User;
}

export default function Navbar({
    isSolid = false,
    isFixed = false,
    user,
}: NavbarProps) {
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
                    {user ? (
                        <div>
                            <IconUserCircle size={36} color="white" />
                        </div>
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
