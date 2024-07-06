import { Link } from "@inertiajs/react";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

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

export default function Navbar() {
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
            className={`fixed left-0 right-0 top-0 z-50 ${isScrolled ? "bg-gradient-to-r from-jaffa-700 to-jaffa-800" : "bg-transparent"} transition duration-300 ease-in`}
        >
            <MaxWidthWrapper className="flex w-full items-center justify-between py-2">
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
                        className={`flex flex-col justify-center leading-[14px] ${isScrolled ? "text-jaffa-100" : "text-jaffa-400"} transition duration-200 ease-in`}
                    >
                        <p>PPLK</p>
                        <p>ITERA</p>
                    </div>
                </div>

                {/* NavLinks */}
                <div className="font-tinos">
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

                {/* Auth */}
                <div className="flex items-center">
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
