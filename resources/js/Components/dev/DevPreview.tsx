import RunningText from "./RunningText";
import "./transition.css";
import Tilt from "react-parallax-tilt";

import React from "react";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogTrigger,
} from "@/Components/ui/dialog";

import { Developer } from "@/lib/types/Developer";
import { IconX } from "@tabler/icons-react";

type Props = { dev: Developer; className?: string };

function DevPreview({ dev, className }: Props) {
    return (
        <Dialog>
            <DialogTrigger className={`${className}`}></DialogTrigger>
            <DialogContent className="backdrop-blur-md max-md:place-items-center max-w-7xl h-4/5 max-lg:flex-col-reverse lg:place-content-between flex items-center w-full gap-4 p-16 px-8 text-white bg-transparent">
                <DialogClose
                    className="absolute top-4 right-4 text-white/50 hover:text-white"
                    asChild
                >
                    <IconX size={24} />
                </DialogClose>

                <div className="fade-up lg:w-1/2 max-lg:text-center flex flex-col w-full gap-2">
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
                        className="hover:text-white w-full -mt-2 text-lg text-yellow-400 underline cursor-pointer"
                    >
                        - @{dev.instagram}
                    </a>
                </div>
                <div className="lg:w-1/2 place-content-center grid">
                    <Tilt
                        tiltReverse={true}
                        className="lg:w-64 lg:h-96 h-72 w-48 overflow-hidden rounded-md border border-yellow-400 shadow-xl shadow-yellow-400/20"
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
