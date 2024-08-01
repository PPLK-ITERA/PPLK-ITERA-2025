import DevCard from "./DevCard";
import RunningText from "./RunningText";
import Tilt from "react-parallax-tilt";

import React from "react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";

import { Developer } from "@/lib/types/Developer";

type Props = { dev: Developer; className?: string };

function DevPreview({ dev, className }: Props) {
    return (
        <Dialog>
            <DialogTrigger className={`${className}`}></DialogTrigger>
            <DialogContent className="backdrop-blur-md bg-transparent items-center max-md:place-items-center w-full max-w-7xl px-8 h-4/5 text-white flex max-lg:flex-col-reverse lg:place-content-between gap-4 p-16">
                <div
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    className="lg:w-1/2 w-full flex flex-col gap-2 max-lg:text-center"
                >
                    <RunningText
                        title={dev.name}
                        delay={40}
                        className="text-2xl lg:text-5xl font-bold"
                    />
                    <RunningText
                        title={dev.role}
                        delay={40}
                        className="text-base lg:text-xl"
                    />
                    <RunningText
                        title={`"${dev.quote}"`}
                        delay={40}
                        className="text-base md:text-lg mt-4"
                    />
                    <a
                        href={`https://instagram.com/${dev.instagram}`}
                        target="_blank"
                        className="w-full text-lg text-yellow-400 underline hover:text-white cursor-pointer -mt-2"
                    >
                        - @{dev.instagram}
                    </a>
                </div>
                <div className="lg:w-1/2 grid place-content-center">
                    <Tilt
                        tiltReverse={true}
                        className="lg:w-64 lg:h-96 h-72 w-48 rounded-md overflow-hidden"
                    >
                        <img
                            src={dev.photo}
                            alt={dev.name}
                            className="w-full h-full object-cover object-center bg-white/10 "
                        />
                    </Tilt>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default DevPreview;
