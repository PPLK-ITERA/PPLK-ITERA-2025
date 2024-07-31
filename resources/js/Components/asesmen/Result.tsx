"use client";

import Pilar from "../ui/pilar";
import PilarKeBerapa from "../ui/pilarKeBerapa";
import { useToast } from "../ui/use-toast";

import { useEffect, useState } from "react";

import { getResult } from "@/lib/data/result";
import { Result } from "@/lib/types/Result";

import pilar1 from "!assets/pilar/pilar1.png";
import pilar2 from "!assets/pilar/pilar2.png";
import pilar3 from "!assets/pilar/pilar3.png";
import pilar4 from "!assets/pilar/pilar4.png";

export default function AsesmenResult({
    nilai1 = 0,
    nilai2 = 0,
    nilai3 = 0,
    namaPilar,
    pilar,
}) {
    const { toast } = useToast();
    const [result, setresult] = useState<Result | null>(null);
    const [nilaiTotal, setnilaiTotal] = useState(0);

    return (
        <div className="rounded-t-2xl sm:rounded-xl sm:rounde bg-white mt-8 border border-white p-10 container">
            <div className="text-center">
                <p className="font-bold text-lg text-[#a36205] sm:text-2xl mb-8">
                    Berikut Hasil Tes Kamu
                </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-evenly">
                <div className="flex-1 flex-col gap-3 w-full flex justify-center items-center">
                    <img
                        src={
                            pilar === 1
                                ? pilar1
                                : pilar === 2
                                  ? pilar2
                                  : pilar === 3
                                    ? pilar3
                                    : pilar4
                        }
                        className="bg-black rounded-full w-32 md:w-48"
                    />
                    <h1 className="font-bold text-lg">{namaPilar}</h1>
                </div>
                <div className="mt-9 flex-1 w-full">
                    <div>
                        <Pilar
                            angka={1}
                            hasil={nilai1}
                            className="text-[#432005]"
                        />
                        <PilarKeBerapa
                            angka={(nilai1 * 100) / 10}
                            className="bg-[#432005]"
                        />
                    </div>

                    <div>
                        <Pilar
                            angka={2}
                            hasil={nilai2}
                            className="text-[#723f11]"
                        />
                        <PilarKeBerapa
                            angka={(nilai2 * 100) / 10}
                            className="bg-[#732f11]"
                        />
                    </div>

                    <div>
                        <Pilar
                            angka={3}
                            hasil={nilai3}
                            className="text-[#ed8f45]"
                        />
                        <PilarKeBerapa
                            angka={(nilai3 * 100) / 10}
                            className="bg-[#ed8f45]"
                        />
                    </div>
                </div>
            </div>

            <div className="text-center mt-6 sm:mt-14 mb-0.5">
                <p>Terimakasih telah mengikuti asessmen PPLK!</p>
            </div>
        </div>
    );
}
