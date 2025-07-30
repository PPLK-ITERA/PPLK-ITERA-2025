import CountUp from "react-countup";
import Marquee from "react-fast-marquee";

import React from "react";

import { FAKULTAS_DATA, FakultasData } from "@/lib/data/fakultas";

const Prodi = ({ text, className }) => (
  <div
    className={`rounded-full border-jaffa-700 border-2 bg-jaffa-400 py-2 px-8 ${className}`}
  >
    <p className="md:text-xl text-white">{text}</p>
  </div>
);

export default function ProgramStudi({ fakultas }) {
  const selectedFakultas: FakultasData = FAKULTAS_DATA[fakultas];

  return (
    <div className="md:px-4 px-4 pb-10 mt-16 flex flex-col gap-16">
      <div className="text-start md:text-center">
        <p className="font-greek text-moccaccino-500 md:text-5xl text-2xl font-semibold tracking-wide">
          Program Studi
        </p>
      </div>

      <div className="justify-evenly relative flex flex-wrap gap-5 ">
        <Marquee direction="right">
          {selectedFakultas.prodi.map((tag, index) => (
            <Prodi key={index} text={tag} className="z-10 mx-2" />
          ))}
        </Marquee>
        <Marquee direction="left">
          {selectedFakultas.prodi
            .slice()
            .reverse()
            .map((tag, index) => (
              <Prodi key={index} text={tag} className="z-10 mx-2" />
            ))}
        </Marquee>
        <Marquee direction="right">
          {selectedFakultas.prodi
            .slice()
            .reverse()
            .map((tag, index) => (
              <Prodi key={index} text={tag} className="z-10 mx-2" />
            ))}
        </Marquee>

        <div className="absolute inset-0 z-20 flex justify-between">
          <div className="pointer-events-none h-full w-[50px] bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none h-full w-[50px] bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>

      <div className="bg-gradient-to-r from-jaffa-700 to-jaffa-800 rounded-xl md:px-10 flex justify-around px-3 py-10  text-xl text-center text-white">
        <div>
          <CountUp
            end={selectedFakultas.prodi.length}
            enableScrollSpy
            className="text-3xl font-bold"
          />
          <p>Prodi</p>
        </div>
        <div>
          <CountUp
            end={selectedFakultas.jumlah_mahasiswa}
            enableScrollSpy
            className="text-3xl font-bold"
          />
          <p>Mahasiswa</p>
        </div>
        <div>
          <CountUp
            end={selectedFakultas.jumlah_dosen}
            enableScrollSpy
            className="text-3xl font-bold"
          />
          <p>Dosen</p>
        </div>
      </div>
    </div>
  );
}
