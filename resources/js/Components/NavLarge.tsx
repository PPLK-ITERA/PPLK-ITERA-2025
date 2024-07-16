import React from "react";

import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

import { ChevronDown } from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";

import { InformasiDropDown, MabaDropDown } from "@/constants/navlink";

type NavLargeProps = {
    isScrolled?: boolean;
    isSolid?: boolean;
};

export default function NavLarge({ isScrolled, isSolid }: NavLargeProps) {
    const router = usePage().url;

    return (
        <div className="hidden max-w-[800px] font-tinos md:flex">
            <Link
                href="/"
                className={`mx-2 text-[18px] ${router === "/" ? "underline underline-offset-2" : ""} font-bold text-jaffa-100 ${isScrolled || isSolid ? "text-white" : ""} transition-all duration-200 ease-in`}
            >
                Beranda
            </Link>

            <DropdownMenu>
                <DropdownMenuTrigger
                    className={`mx-2 flex items-center justify-center text-[18px] font-bold text-jaffa-100 ${isScrolled || isSolid ? "text-white" : ""} border-none outline-none transition-all duration-200 ease-in focus:border-none focus:outline-none focus:ring-0`}
                >
                    Informasi <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    className={`${isScrolled || isSolid ? "bg-gradient-to-r from-jaffa-700 to-jaffa-800" : "bg-jaffa-100"} border-none outline-none`}
                >
                    {InformasiDropDown.map((item, index) => (
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
                </DropdownMenuContent>
            </DropdownMenu>

            <Link
                href="/ketentuan-atribut"
                className={`mx-2 text-[18px] ${router === "/ketentuan-atribut" ? "underline underline-offset-2" : ""} font-bold text-jaffa-100 ${isScrolled || isSolid ? "text-white" : ""} transition-all duration-200 ease-in`}
            >
                Ketentuan Atribut
            </Link>

            <DropdownMenu>
                <DropdownMenuTrigger
                    className={`mx-2 flex items-center justify-center text-[18px] font-bold text-jaffa-100 ${isScrolled || isSolid ? "text-white" : ""} border-none outline-none transition-all duration-200 ease-in focus:border-none focus:outline-none focus:ring-0`}
                >
                    Maba <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    className={`${isScrolled || isSolid ? "bg-gradient-to-r from-jaffa-700 to-jaffa-800" : "bg-jaffa-100"} border-none outline-none`}
                >
                    {MabaDropDown.map((item, index) => (
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
                </DropdownMenuContent>
            </DropdownMenu>

            <Link
                href="/faq"
                className={`mx-2 ${router === "/faq" ? "underline underline-offset-2" : ""} text-[18px] font-bold text-jaffa-100 ${isScrolled || isSolid ? "text-white" : ""} transition-all duration-200 ease-in-out`}
            >
                FAQ
            </Link>
        </div>
    );
}
