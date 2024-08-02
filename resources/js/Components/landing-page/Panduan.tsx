import React from "react";

import { Link } from "@inertiajs/react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/Components/ui/carousel";

export default function Panduan() {
    return (
        <div className="lg:flex-row flex flex-col items-center justify-center w-full min-h-screen py-20">
            <div className="lg:w-1/3 lg:items-start xl:w-1/2 flex flex-col items-center justify-center w-full text-left">
                <h2 className="bg-gradient-to-t from-[#A6680C] to-[#B9822F] bg-clip-text font-avigea text-3xl text-transparent md:text-4xl">
                    Panduan
                </h2>

                <p className="mt-5 text-center font-montserrat text-[16px] font-normal md:text-xl lg:text-2xl lg:max-w-[90%] lg:text-start xl:max-w-[70%] xl:text-2xl">
                    Panduan PPLK berfungsi untuk menyajikan informasi terbaru
                    seputar PPLK ITERA khusus untuk teman-teman Mahasiswa Baru.
                    Jangan sampai ketinggalan informasi terbaru ya!
                </p>
            </div>

            <Carousel
                opts={{
                    align: "start",
                    dragFree: true,
                }}
                className="md:hidden z-30 block w-full mt-10"
            >
                <CarouselContent className="gap-2 px-5">
                    <CarouselItem className="-ml-0 flex max-max-h-[270px] min-h-[240px] min-5-[280px] max-w-[280px] flex-col items-center justify-center rounded-[24px] bg-jaffa-400">
                        <Link href="/ketentuan-atribut">
                            <div className="bg-gradient-to-r from-jaffa-700 to-jaffa-800 p-4 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="48"
                                    viewBox="0 0 24 24"
                                    fill="#ffffff"
                                    className="icon icon-tabler icons-tabler-filled icon-tabler-shirt"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M14.883 3.007l.095 -.007l.112 .004l.113 .017l.113 .03l6 2a1 1 0 0 1 .677 .833l.007 .116v5a1 1 0 0 1 -.883 .993l-.117 .007h-2v7a2 2 0 0 1 -1.85 1.995l-.15 .005h-10a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-7h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-5a1 1 0 0 1 .576 -.906l.108 -.043l6 -2a1 1 0 0 1 1.316 .949a2 2 0 0 0 3.995 .15l.009 -.24l.017 -.113l.037 -.134l.044 -.103l.05 -.092l.068 -.093l.069 -.08c.056 -.054 .113 -.1 .175 -.14l.096 -.053l.103 -.044l.108 -.032l.112 -.02z" />
                                </svg>
                            </div>

                            <p className="font-avigea mt-2 text-4xl">Atribut</p>
                        </Link>
                    </CarouselItem>

                    <CarouselItem className="-ml-0 flex max-max-h-[270px] min-h-[240px] min-5-[280px] max-w-[280px] flex-col items-center justify-center rounded-[24px] bg-gradient-to-r from-jaffa-700 to-jaffa-800">
                        <Link href="/booklet">
                            <div className="bg-jaffa-400 p-4 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="48"
                                    viewBox="0 0 24 24"
                                    fill="#ffffff"
                                    stroke="#000000"
                                    stroke-width="1"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="icon icon-tabler icons-tabler-outline icon-tabler-book-2"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z" />
                                    <path d="M19 16h-12a2 2 0 0 0 -2 2" />
                                    <path d="M9 8h6" />
                                </svg>
                            </div>

                            <p className="font-avigea mt-2 text-4xl text-white">
                                Booklet
                            </p>
                        </Link>
                    </CarouselItem>

                    <CarouselItem className="-ml-0 flex max-max-h-[270px] min-h-[240px] min-5-[280px] max-w-[280px] flex-col items-center justify-center rounded-[24px] bg-gradient-to-r from-jaffa-700 to-jaffa-800 py-14">
                        <Link href="relasi">
                            <div className="bg-jaffa-400 p-2 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="64"
                                    height="64"
                                    viewBox="0 0 24 24"
                                    fill="#ffffff"
                                    stroke="#b54419"
                                    stroke-width="1"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                    <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                    <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                                </svg>
                            </div>

                            <p className="font-avigea mt-2 text-4xl text-center text-white">
                                Relasi & Jaringan
                            </p>
                        </Link>
                    </CarouselItem>

                    <CarouselItem className="-ml-0 flex max-max-h-[270px] min-h-[240px] min-5-[280px] max-w-[280px] flex-col items-center justify-center rounded-[24px] bg-jaffa-400">
                        <Link href="faq">
                            <div className="bg-gradient-to-r from-jaffa-700 to-jaffa-800 p-4 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="48"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#ffffff"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="icon icon-tabler icons-tabler-outline icon-tabler-question-mark"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
                                    <path d="M12 19l0 .01" />
                                </svg>
                            </div>

                            <p className="font-avigea mt-2 text-4xl">FAQ</p>
                        </Link>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>

            <div className="md:flex lg:mt-0 lg:w-2/3 xl:w-1/2 flex-wrap justify-center hidden w-full gap-5 mt-10">
                <Link
                    href="/ketentuan-atribut"
                    className="flex max-h-[270px] min-h-[240px] w-[250px] flex-col items-center justify-center rounded-[24px] bg-jaffa-400 shadow-2xl hover:opacity-90 duration-300 transition-all ease-in-out"
                >
                    <div className="bg-gradient-to-r from-jaffa-700 to-jaffa-800 p-4 rounded-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="#ffffff"
                            className="icon icon-tabler icons-tabler-filled icon-tabler-shirt"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M14.883 3.007l.095 -.007l.112 .004l.113 .017l.113 .03l6 2a1 1 0 0 1 .677 .833l.007 .116v5a1 1 0 0 1 -.883 .993l-.117 .007h-2v7a2 2 0 0 1 -1.85 1.995l-.15 .005h-10a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-7h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-5a1 1 0 0 1 .576 -.906l.108 -.043l6 -2a1 1 0 0 1 1.316 .949a2 2 0 0 0 3.995 .15l.009 -.24l.017 -.113l.037 -.134l.044 -.103l.05 -.092l.068 -.093l.069 -.08c.056 -.054 .113 -.1 .175 -.14l.096 -.053l.103 -.044l.108 -.032l.112 -.02z" />
                        </svg>
                    </div>
                    <p className="font-avigea mt-2 text-4xl">Atribut</p>
                </Link>

                <Link
                    href="/booklet"
                    className="flex max-h-[270px] min-h-[240px] w-[250px] flex-col items-center justify-center rounded-[24px] bg-gradient-to-r from-jaffa-700 to-jaffa-800 shadow-2xl hover:opacity-90 duration-300 transition-all ease-in-out"
                >
                    <div className="bg-jaffa-400 p-4 rounded-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="#ffffff"
                            stroke="#000000"
                            stroke-width="1"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-book-2"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z" />
                            <path d="M19 16h-12a2 2 0 0 0 -2 2" />
                            <path d="M9 8h6" />
                        </svg>
                    </div>
                    <p className="font-avigea mt-2 text-4xl text-white">
                        Booklet
                    </p>
                </Link>

                <Link
                    href="/relasi"
                    className="flex max-h-[270px] min-h-[240px] w-[250px] flex-col items-center rounded-[24px] bg-gradient-to-r from-jaffa-700 to-jaffa-800 py-14 shadow-2xl hover:opacity-90 duration-300 transition-all ease-in-out"
                >
                    <div className="bg-jaffa-400 p-2 rounded-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="64"
                            height="64"
                            viewBox="0 0 24 24"
                            fill="#ffffff"
                            stroke="#b54419"
                            stroke-width="1"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                            <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                        </svg>
                    </div>
                    <p className="font-avigea mt-2 text-4xl text-center text-white">
                        Relasi & Jaringan
                    </p>
                </Link>

                <Link
                    href="/faq"
                    className="flex max-h-[270px] min-h-[240px] w-[250px] flex-col items-center justify-center rounded-[24px] bg-jaffa-400 shadow-2xl hover:opacity-90 duration-300 transition-all ease-in-out"
                >
                    <div className="bg-gradient-to-r from-jaffa-700 to-jaffa-800 p-4 rounded-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ffffff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-question-mark"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
                            <path d="M12 19l0 .01" />
                        </svg>
                    </div>
                    <p className="font-avigea mt-10 text-4xl">FAQ</p>
                </Link>
            </div>
        </div>
    );
}
