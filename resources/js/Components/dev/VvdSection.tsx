import DevCard from "./DevCard";
import RunningText from "./RunningText";
import StaffCarousel from "./StaffCarousel";

import React from "react";

import { devTeam } from "@/lib/data/devteam";

import linuk from "!assets/linuk.png";
import kartateraLogo from "!assets/svg/kartatera-logo.svg";

type Props = {};

function VvdSection({}: Props) {
    return (
        <section className="w-full flex items-center justify-center min-h-screen">
            <div className="w-full max-w-5xl flex flex-col items-center justify-center min-h-screen text-white">
                <div className="w-full flex justify-around place-items-center gap-8 bg-opacity-10">
                    <div className="flex flex-col p-8 backdrop-blur-md">
                        <RunningText
                        delay={50}
                            className="text-3xl font-bold"
                            title="Sub-Divisi Visual & Virtual Development"
                        ></RunningText>
                        <h2 className="mt-12 text-2xl font-bold">
                            Muhammad Yusuf
                        </h2>
                        <p className="text-lg">Kepala Sub Divisi Front End</p>
                        <p className="mt-4 text-sm">Daftar Staff Sub-Divisi VVD</p>
                        <StaffCarousel staffList={devTeam.vvd} />
                    </div>
                    <DevCard
                        className="w-64 h-[400px] shadow-2xl shadow-yellow-500/40"
                        name="Muhammad Yusuf"
                        description="Kepala Sub-Divisi Front End"
                        image={linuk}
                    />
                </div>
            </div>
        </section>
    );
}

export default VvdSection;
