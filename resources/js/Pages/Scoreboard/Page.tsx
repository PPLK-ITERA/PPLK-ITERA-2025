import React, { useEffect, useState } from "react";

import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import Navbar from "@/Components/Navbar";
import RelasiLoading from "@/Components/relasi/RelasiLoading";
import TopKelompok from "@/Components/scoreboard/TopKelompok";
import { Card } from "@/Components/ui/card";
import { Progress } from "@/Components/ui/progress";

import { useAos } from "@/lib/hooks/useAos";
import { DataKelompokScore, DataTopTen } from "@/lib/types/Scoreboard";

import logoPplk from "!assets/logo-pplk-hd.png";

function Page() {
    useAos();

    const [dataTopTen, setDataTopTen] = useState<DataTopTen[]>([]);
    const [dataKelompokScore, setDataKelompokScore] =
        useState<DataKelompokScore | null>(null);

    const getTopTen = async () => {
        const response = await fetch(route("scoreboard.top-score"), {
            method: "GET",
        });

        const data = await response.json();
        setDataTopTen(data);
    };

    const getKelompokScore = async () => {
        const response = await fetch(route("scoreboard.kelompok"), {
            method: "GET",
        });

        const data = await response.json();
        setDataKelompokScore(data);
    };

    useEffect(() => {
        getTopTen();
        getKelompokScore();
    }, []);
    return (
        <>
            <Navbar isFixed={true} />

            <div className="h-screen relative min-h-[40vh] bg-mobile-hero-background bg-cover bg-bottom md:min-h-screen md:bg-desktop-hero-background lg:bg-desktop-hero-background">
                <MaxWidthWrapper className="md:justify-center flex flex-col items-center justify-center min-h-screen">
                    <h1 className="text-jaffa-100 font-fesbud md:text-[48px] text-[20px] md:leading-none md:items-start flex flex-col items-center justify-center mt-8">
                        Leaderboard Kelompok
                    </h1>

                    <div className="md:max-w-2xl w-full max-w-sm mx-auto">
                        {dataTopTen.length === 0 ? (
                            <RelasiLoading className="w-full h-full my-16 text-center text-white" />
                        ) : (
                            <div className="sm:gap-4 md:max-w-2xl lg:gap-8 flex justify-center w-full max-w-lg gap-2 pt-4 overflow-y-hidden text-center">
                                <TopKelompok
                                    kelompok={dataTopTen[1].kelompok}
                                    score={dataTopTen[1].total_score}
                                    rank={2}
                                    podiumHeight={160}
                                    className="w-full text-white"
                                />

                                <TopKelompok
                                    kelompok={dataTopTen[0].kelompok}
                                    score={dataTopTen[0].total_score}
                                    rank={1}
                                    podiumHeight={196}
                                    className="w-full text-white"
                                />

                                <TopKelompok
                                    score={dataTopTen[2].total_score}
                                    kelompok={dataTopTen[2].kelompok}
                                    rank={3}
                                    podiumHeight={144}
                                    className="w-full text-white"
                                />
                            </div>
                        )}
                        <div className="bg-moccaccino-700 w-full h-1"></div>
                    </div>
                </MaxWidthWrapper>
            </div>

            <div className="bg-pattern-white md:py-24 relative w-full h-full py-10 overflow-hidden border">
                <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="flex flex-col w-full h-full text-center"
                >
                    <div className="z-10 py-5">
                        <h1 className="font-avigea text-[20px] z-10">
                            Top 10 Kelompok PPLK
                        </h1>

                        <div className="max-w-2xl mx-auto">
                            {dataTopTen.length === 0 ? null : (
                                <Card className="w-full mt-8 bg-transparent border-none">
                                    <ul className="flex flex-col gap-2">
                                        {dataTopTen.map((scoreboard, index) => (
                                            <Card
                                                className="bg-jaffa-50 border-jaffa-300 border rounded-lg"
                                                key={index}
                                            >
                                                <li
                                                    className="flex items-center justify-between w-full px-4 py-1"
                                                    data-aos="fade-left"
                                                    data-aos-duration={
                                                        (index + 1) * 200
                                                    }
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <p className="text-jaffa-400 text-xl font-bold">
                                                            #{index + 1}
                                                        </p>

                                                        <img
                                                            src={
                                                                scoreboard
                                                                    .kelompok
                                                                    .logo_kelompok
                                                                    ? scoreboard
                                                                          .kelompok
                                                                          .logo_kelompok
                                                                    : logoPplk
                                                            }
                                                            alt={
                                                                scoreboard
                                                                    .kelompok
                                                                    .nama_kelompok
                                                            }
                                                            className="w-16 h-16 rounded-full"
                                                        />

                                                        <h2 className="font-bold">
                                                            {
                                                                scoreboard
                                                                    .kelompok
                                                                    .nama_kelompok
                                                            }
                                                        </h2>
                                                    </div>

                                                    <p className="bg-jaffa-400 px-2 py-1 font-bold text-white rounded-full">
                                                        {scoreboard.total_score}{" "}
                                                        pts
                                                    </p>
                                                </li>
                                            </Card>
                                        ))}
                                    </ul>
                                </Card>
                            )}
                        </div>
                    </div>
                </div>

                {dataKelompokScore === null ? null : (
                    <>
                        {dataKelompokScore.position > 10 ? (
                            <Card className="bg-jaffa-300 border-jaffa-600 sticky bottom-0 flex justify-between max-w-2xl mx-auto border rounded-lg">
                                <li className="flex items-center justify-between w-full px-4 py-1">
                                    <div className="flex items-center gap-3">
                                        <p className="text-jaffa-50 text-xl font-bold">
                                            #{dataKelompokScore?.position}
                                        </p>

                                        <img
                                            src={
                                                dataKelompokScore?.kelompok
                                                    .logo_kelompok
                                            }
                                            alt={
                                                dataKelompokScore?.kelompok
                                                    .nama_kelompok
                                            }
                                            className="w-16 h-16 rounded-full"
                                        />

                                        <h2 className="text-jaffa-50 font-bold">
                                            {
                                                dataKelompokScore?.kelompok
                                                    .nama_kelompok
                                            }
                                        </h2>
                                    </div>

                                    <p className="bg-jaffa-400 px-2 py-1 font-bold text-white rounded-full">
                                        {dataKelompokScore?.total_score} pts
                                    </p>
                                </li>
                            </Card>
                        ) : null}
                    </>
                )}
            </div>
        </>
    );
}

export default Page;
