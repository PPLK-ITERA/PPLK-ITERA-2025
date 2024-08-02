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

function VvdSection({}: Props) {
    return (
        <section className="w-full flex items-center justify-center h-screen max-lg:pb-16 max-lg:pt-8">
            <div className="w-full max-lg:text-center mx-4 max-w-5xl flex flex-col items-center justify-center text-white">
                <DevList
                    devList={devTeam.vvd}
                    devRoleName="Virtual & Visual Development"
                />
            </div>
        </section>
    );
}

export default VvdSection;
