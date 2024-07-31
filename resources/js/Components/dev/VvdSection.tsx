import DevCard from "./DevCard";
import RunningText from "./RunningText";
import StaffCarousel from "./StaffCarousel";

import React from "react";

import { devTeam } from "@/lib/data/devteam";
import { Developer } from "@/lib/types/Developer";

import linuk from "!assets/linuk.png";
import kartateraLogo from "!assets/svg/kartatera-logo.svg";

type Props = {};

function VvdSection({}: Props) {
    const [developer, setDeveloper] = React.useState(devTeam.vvd[0]);

    return (
        <section className="w-full flex items-center justify-center min-h-screen">
            <div className="w-full max-w-5xl flex flex-col items-center justify-center min-h-screen text-white">
                <div className="w-full flex justify-between backdrop-blur-md border border-white/20 rounded overflow-hidden p-8 place-items-center gap-24 bg-opacity-10">
                    <div className="flex flex-col w-full h-[400px]">
                        <RunningText
                            delay={40}
                            className="text-2xl font-bold my-3"
                            title="Sub-Divisi Visual & Virtual Development"
                        ></RunningText>
                        <div className="h-full grow"></div>
                        <h2 className="text-3xl font-bold">
                            {developer.name}
                        </h2>
                        <p className="text-xl">{developer.role}</p>
                        <p className="mt-8 text-sm">
                            Daftar Staff Sub-Divisi VVD
                        </p>
                        <StaffCarousel
                            staffList={devTeam.vvd}
                            onclick={(dev: Developer) => setDeveloper(dev)}
                        />
                    </div>
                    <DevCard
                        className="w-full max-w-64 h-[400px] shadow-2xl shadow-yellow-500/40"
                        developer={developer}
                    />
                </div>
            </div>
        </section>
    );
}

export default VvdSection;
