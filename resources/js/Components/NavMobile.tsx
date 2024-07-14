import React from "react";

import { Link } from "@inertiajs/react";

import { IconMenuDeep } from "@tabler/icons-react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion";
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTrigger,
} from "@/Components/ui/sheet";

import { InformasiDropDown, MabaDropDown } from "@/constants/navlink";

import logopplk_white from "!assets/logo-pplk-20204-white.png";

export default function NavMobile() {
    return (
        <div className="md:hidden block -mt-2">
            <Sheet>
                <SheetTrigger asChild className="-mr-1 border-none">
                    <IconMenuDeep color="white" size={32} />
                </SheetTrigger>

                <SheetContent className="bg-gradient-to-r from-jaffa-700 to-jaffa-800 border-none">
                    <SheetHeader>
                        <img
                            src={logopplk_white}
                            alt="logopplk_white"
                            className="w-32 h-32 -ml-3"
                        />
                    </SheetHeader>

                    <div className="font-tinos flex flex-col pl-2 mt-5">
                        <Accordion type="single" collapsible className="w-full">
                            <Link
                                href="/"
                                className={`text-[18px] font-bold text-white transition duration-200 ease-in`}
                            >
                                Beranda
                            </Link>

                            <AccordionItem
                                value="item-2"
                                className="border-none"
                            >
                                <AccordionTrigger className="text-white">
                                    <Link
                                        href="#"
                                        className={`text-[18px] font-bold text-white transition duration-200 ease-in`}
                                    >
                                        Informasi
                                    </Link>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="flex flex-col gap-2">
                                        {InformasiDropDown.map(
                                            (item, index) => (
                                                <Link
                                                    key={index}
                                                    href={item.href}
                                                    className={`ml-2 text-[18px] font-bold text-white transition duration-200 ease-in`}
                                                >
                                                    {item.title}
                                                </Link>
                                            ),
                                        )}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            <Link
                                href="/ketentuan-atribut"
                                className={`text-[18px] font-bold text-white transition duration-200 ease-in`}
                            >
                                Ketentuan Atribut
                            </Link>

                            <AccordionItem
                                value="item-1"
                                className="border-none"
                            >
                                <AccordionTrigger className="text-white">
                                    <Link
                                        href="#"
                                        className={`text-[18px] font-bold text-white transition duration-200 ease-in`}
                                    >
                                        Maba
                                    </Link>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="flex flex-col gap-2">
                                        {MabaDropDown.map((item, index) => (
                                            <Link
                                                key={index}
                                                href={item.href}
                                                className={`ml-2 text-[18px] font-bold text-white transition duration-200 ease-in`}
                                            >
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            <Link
                                href="/faq"
                                className={`text-[18px] font-bold text-white transition duration-200 ease-in`}
                            >
                                FAQ
                            </Link>
                        </Accordion>
                    </div>

                    <SheetFooter className="mt-40">
                        <div className="flex flex-col">
                            <Link
                                href="/login"
                                className={`mx-2 rounded-[6px] bg-white text-jaffa-800 px-4 py-[10px] font-montserrat text-[16px] font-semibold shadow-sm`}
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
