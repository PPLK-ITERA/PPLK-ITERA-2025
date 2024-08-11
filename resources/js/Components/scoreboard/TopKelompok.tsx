import GoldPodium from "./Podium";
import Podium from "./Podium";

import React, { useEffect, useState } from "react";

import { useAos } from "@/lib/hooks/useAos";
import { Kelompok } from "@/lib/types/Scoreboard";

import logoPplk from "!assets/logo-pplk-hd.png";
import crown from "!assets/svg/crown.svg";

type Props = {
  kelompok?: Kelompok;
  rank: number;
  className?: string;
  podiumHeight: number;
  score: number;
};

export default function TopKelompok({
  kelompok,
  rank,
  className,
  podiumHeight,
  score,
}: Props) {
  useAos();

  const [translate, setTranslate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTranslate(true);
    }, 100);
  }, []);

  return (
    <div
      style={{
        transform: translate
          ? "translateY(0)"
          : `translateY(${podiumHeight}px)`,
      }}
      className={`flex flex-col items-center gap-3 ${className} transition-all duration-1000`}
    >
      <div className="grow" />

      {kelompok && (
        <div className="md:w-24 md:h-24 relative w-20 h-20 rounded-full shadow-lg">
          {rank == 1 ? (
            <div className="left-1/2 absolute z-10 w-12 h-12 -translate-x-1/2 -translate-y-1/2">
              <img
                data-aos="zoom-in"
                data-aos-duration="700"
                data-aos-delay="300"
                src={crown}
                alt="crown"
                className=""
              />
            </div>
          ) : null}
          <img
            src={kelompok.logo_kelompok ? kelompok.logo_kelompok : logoPplk}
            alt={kelompok.nama_kelompok}
            className="z-0 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full w-full h-full object-contain object-center"
          />
        </div>
      )}

      {kelompok && (
        <div className="text-lg font-bold">{kelompok.nama_kelompok}</div>
      )}

      <p className="bg-gray-400/50 md:px-2 px-0 text-sm rounded-full">
        {kelompok && <span className="font-bold">{score}</span>} Point
      </p>

      {
        {
          1: (
            <Podium color="gold" maxHeightPx={podiumHeight} className="w-full">
              <p className="md:text-5xl text-3xl font-bold">{rank}</p>
            </Podium>
          ),
          2: (
            <Podium
              color="silver"
              maxHeightPx={podiumHeight}
              className="w-full"
            >
              <p className="md:text-5xl text-3xl font-bold">{rank}</p>
            </Podium>
          ),
          3: (
            <Podium
              color="bronze"
              maxHeightPx={podiumHeight}
              className="w-full"
            >
              <p className="md:text-5xl text-3xl font-bold">{rank}</p>
            </Podium>
          ),
        }[rank]
      }
    </div>
  );
}
