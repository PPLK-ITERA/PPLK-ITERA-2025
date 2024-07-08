import { Card } from "@/Components/ui/card";
import { useAos } from "@/lib/hooks/useAos";
import React, { useEffect } from "react";

type Props = {};

type Scoreboard = {
    name: string;
    score: number;
};

const scoreboards: Scoreboard[] = [
    { name: "Kelompok 1", score: 100 },
    { name: "Kelompok 2", score: 200 },
    { name: "Kelompok 3", score: 300 },
    { name: "Kelompok 4", score: 400 },
    { name: "Kelompok 5", score: 500 },
    { name: "Kelompok 6", score: 600 },
    { name: "Kelompok 7", score: 700 },
    { name: "Kelompok 8", score: 800 },
    { name: "Kelompok 9", score: 900 },
    { name: "Kelompok 10", score: 1000 },
];

const userScore: Scoreboard = {
    name: "Kelompok 11",
    score: 1100,
};

function Page({ }: Props) {
    useAos();

    return (
        <div className="text-center w-full flex flex-col h-screen relative">
            <div>
                <h1>Papan Skor Top Singko Kelompok</h1>

                <div className="max-w-2xl mx-auto">
                    <Card className="mt-8 w-full">
                        <ul className="flex flex-col gap-2">
                            {scoreboards
                                .sort((s) => s.score)
                                .map((scoreboard, index) => (
                                    <Card>
                                        <li
                                            key={index}
                                            className="p-4 w-full flex justify-between"
                                            data-aos="fade-left"
                                            data-aos-duration={(index + 1) * 200}
                                        >
                                            <h2>{scoreboard.name}</h2>
                                            <p>{scoreboard.score} pts</p>
                                        </li>
                                    </Card>
                                ))}
                        </ul>
                    </Card>
                    
                </div>
            </div>

                <Card
                        className="sticky left-1/2 -translate-x-1/2 bottom-0 max-w-2xl p-4 w-full flex justify-between"
                    >
                        <h2>{userScore.name}</h2>
                        <p>{userScore.score} pts</p>
                    </Card>
        </div>
    );
}

export default Page;
