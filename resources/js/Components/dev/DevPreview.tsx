import RunningText from "./RunningText";
import "./transition.css";
import Tilt from "react-parallax-tilt";

import React from "react";

import { IconX } from "@tabler/icons-react";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogTrigger,
} from "@/Components/ui/dialog";

import { Developer } from "@/lib/types/Developer";

type Props = { dev: Developer; className?: string };

function DevPreview({ dev, className }: Props) {
    return (
        <Dialog>
            <DialogTrigger className={`${className}`}></DialogTrigger>
            <DialogContent className="backdrop-blur-md max-md:place-items-center max-w-7xl max-lg:flex-col-reverse lg:place-content-between max-w-h-full h-4/5 lg:px-20 border-cyan-primary/30 shadow-cyan-secondary flex items-center w-full gap-4 p-16 px-8 text-white bg-transparent shadow-sm">
                <DialogClose
                    className="top-4 right-4 text-white/50 hover:text-white absolute z-20"
                    asChild
                >
                    <IconX size={24} />
                </DialogClose>

                <div className="absolute inset-0 z-10 flex items-center justify-center w-full h-full">
                    <div className="relative">
                        <h2
                            data-aos="fade-in"
                            data-aos-duration={1000}
                            className="font-lostar text-center select-none text-[200px] blur-md leading-[10rem] text-white/30"
                        >
                            TECH
                            <br />
                            DIVISION
                        </h2>

                        <div className="left-1/2 top-1/3 absolute inset-0 -translate-x-1/2 -translate-y-1/2">
                            <p className="font-anothertag select-none text-cyan-primary/60 text-center fade-in text-[200px] flex justify-center items-center blur-sm">
                                <span>KARTATERA</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="fade-up lg:w-2/3 max-lg:text-center z-20 flex flex-col w-full gap-2">
                    <RunningText
                        title={dev.name}
                        delay={40}
                        className="lg:text-5xl text-2xl font-bold"
                    />
                    <RunningText
                        title={dev.role}
                        delay={40}
                        className="lg:text-xl text-base"
                    />
                    <RunningText
                        title={`"${dev.quote}"`}
                        delay={40}
                        className="md:text-lg mt-4 text-base"
                    />
                    <a
                        href={`https://instagram.com/${dev.instagram}`}
                        target="_blank"
                        className="hover:text-white text-cyan-primary w-full -mt-2 text-lg underline cursor-pointer"
                    >
                        - @{dev.instagram}
                    </a>
                </div>

                <div className="lg:w-1/2 place-content-end z-20 grid">
                    <Tilt
                        tiltReverse={true}
                        className="lg:w-64 lg:h-96 h-72 border-cyan-secondary shadow-cyan-primary/20 w-48 overflow-hidden border rounded-md shadow-xl"
                    >
                        <img
                            src={dev.photo}
                            alt={dev.name}
                            className="bg-white/10 object-cover object-center w-full h-full"
                        />
                    </Tilt>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default DevPreview;
