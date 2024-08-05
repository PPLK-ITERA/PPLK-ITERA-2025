import React from "react";

import { Link } from "@inertiajs/react";

import { Button } from "@/Components/ui/button";

import { useAos } from "@/lib/hooks/useAos";

import elang from "!assets/elang-hero.png";

export default function Error({ status }) {
    const title = {
        503: "Service Unavailable",
        500: "Kesalahan Server",
        404: "Halaman Tidak Ditemukan",
        403: "Forbidden",
    }[status];

    const description = {
        503: "Maaf, sepertinya server kami sedang sibuk, jika terus berlanjut silahkan hubungi kami.",
        500: "Aduh! Ada kesalahan pada server kami, jika terus berlanjut silahkan hubungi kami.",
        404: "Maaf, halaman yang kamu cari ga ketemu...",
        403: "Weits... Kamu tidak diizinkan mengakses halaman ini",
    }[status];

    const emoji = {
        503: "🛠️",
        500: "🤖",
        404: "🔍",
        403: "🚫",
    }[status];

    const reactionEmoji = {
        503: "😢",
        500: "😵",
        404: "😞",
        403: "😡",
    }[status];

    useAos();

    return (
        <div className="w-screen h-screen md:overflow-hidden text-jaffa-100 grid place-content-center place-items-center bg-mobile-hero-background md:bg-desktop-hero-background bg-bottom bg-cover">
            {/* content */}
            <div className="w-full flex place-content-center place-items-center mx-auto max-w-4xl h-1/2 gap-8 max-md:flex-col-reverse px-8">
                <div
                    className="grow w-full flex flex-col gap-8 max-md:text-center"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                >
                    <div className="font-avigea ">
                        <h1 className="text-3xl md:text-6xl">PPLK</h1>
                        <h1 className="text-5xl md:text-8xl">ITERA</h1>
                        <h1 className="text-3xl md:text-6xl">2024</h1>
                    </div>

                    <div className="font-montserrat">
                        <span className="text-xs text-red-300/70 animate-pulse">
                            Error {status}
                        </span>

                        <p className="text-lg md:text-xl font-semibold">
                            {title} {emoji}
                        </p>
                        <p className="text-sm md:text-lg">
                            {description} {reactionEmoji}
                        </p>
                    </div>

                    <Button
                        onClick={() => window.history.back()}
                        className="rounded p-3 bg-jaffa-400/80 hover:bg-jaffa-400 backdrop-blur-md md:w-fit transition"
                    >
                        Kembali
                    </Button>
                </div>

                <div data-aos="fade-left" data-aos-duration="1500">
                    <img
                        src={elang}
                        alt="elang"
                        className=" h-[200px] md:h-[800px] object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
