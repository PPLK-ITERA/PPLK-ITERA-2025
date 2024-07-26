import CountUp from "react-countup";
import Marquee from "react-fast-marquee";

import React from "react";

import { DataProdiFakultas } from "@/lib/data/fakultas";

const Prodi = ({ text, className }) => (
    <div
        className={`rounded-full border-jaffa-700 border-2 bg-jaffa-400 py-2 px-8 ${className}`}
    >
        <p className="md:text-2xl text-white">{text}</p>
    </div>
);

export default function ProgramStudi({ fakultas }) {
    const selectedProdi = DataProdiFakultas[fakultas] || [];

    return (
        <div className="md:px-4 px-4 mt-16">
            <div className="text-start md:text-center">
                <p className="font-avigea text-moccaccino-500 md:text-5xl text-2xl font-bold tracking-widest">
                    Program Studi
                </p>
            </div>
            <div className="md:mt-16 justify-evenly flex flex-wrap gap-5 mt-10">
                <Marquee>
                    {selectedProdi.map((tag, index) => (
                        <div>
                            <Prodi key={index} text={tag} className="mx-2" />
                            <Prodi
                                key={index}
                                text={tag}
                                className="mx-8 my-4"
                            />
                            <Prodi key={index} text={tag} className="mx-2" />
                        </div>
                    ))}
                </Marquee>
            </div>

            <div className="bg-gradient-to-r from-jaffa-700 to-jaffa-800 rounded-xl md:px-10 flex justify-between px-3 py-4 mt-24 text-xl text-center text-white">
                <div>
                    <CountUp end={selectedProdi.length} enableScrollSpy />
                    <p>Prodi</p>
                </div>
                <div>
                    <CountUp end={3210} enableScrollSpy />
                    <p>Mahasiswa</p>
                </div>
                <div>
                    <CountUp end={146} enableScrollSpy />
                    <p>Dosen</p>
                </div>
                <div>
                    <CountUp end={38} enableScrollSpy />
                    <p>Tendik</p>
                </div>
            </div>
        </div>
    );
}
