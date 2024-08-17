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
    <div className="md:overflow-hidden text-jaffa-100 place-content-center place-items-center bg-mobile-hero-background md:bg-desktop-hero-background grid w-screen h-screen bg-bottom bg-cover">
      {/* content */}
      <div className="place-content-center place-items-center h-1/2 max-md:flex-col-reverse flex w-full max-w-4xl gap-8 px-8 mx-auto">
        <div
          className="grow max-md:text-center flex flex-col w-full gap-8"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className="font-avigea ">
            <h1 className="md:text-6xl text-3xl">PPLK</h1>
            <h1 className="md:text-8xl text-5xl">ITERA</h1>
            <h1 className="md:text-6xl text-3xl">2024</h1>
          </div>

          <div className="font-montserrat">
            <span className="text-red-300/70 animate-pulse text-xs">
              Error {status}
            </span>

            <p className="md:text-xl text-lg font-semibold">
              {title} {emoji}
            </p>
            <p className="md:text-lg text-sm">
              {description} {reactionEmoji}
            </p>
          </div>

          <Button
            onClick={() => window.history.back()}
            className="bg-jaffa-400/80 hover:bg-jaffa-400 backdrop-blur-md md:w-fit p-3 transition rounded"
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
