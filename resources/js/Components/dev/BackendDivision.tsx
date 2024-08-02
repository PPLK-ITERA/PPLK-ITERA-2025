import DevCard from "./DevCard";
import DevList from "./DevList";
import RunningText from "./RunningText";
import StaffCarousel from "./StaffCarousel";

import React from "react";

import { devTeam } from "@/lib/data/devteam";
import { Developer } from "@/lib/types/Developer";

import linuk from "!assets/linuk.png";
import kartateraLogo from "!assets/svg/kartatera-logo.svg";

type Props = {};

function BackendDivision({}: Props) {
    return (
        <section className="max-lg:pb-16 max-lg:pt-8 flex items-center justify-center w-full h-screen">
            <div className="max-lg:text-center flex flex-col items-center justify-center w-full max-w-5xl mx-4 text-white">
                <DevList devList={devTeam.backend} devRoleName="Back-End" />
            </div>
        </section>
    );
}

export default BackendDivision;
