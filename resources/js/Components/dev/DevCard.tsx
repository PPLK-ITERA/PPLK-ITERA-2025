import { description } from "../dashboard/charts/bar-graph";
import DevPreview from "./DevPreview";
import ReactDOM from "react-dom";
import Tilt from "react-parallax-tilt";

import React, { useEffect } from "react";

import { useAos } from "@/lib/hooks/useAos";
import { Developer } from "@/lib/types/Developer";

type Props = {
    className?: string;
    developer: Developer;
    tiltInitialX?: number;
    tiltInitialY?: number;
};

export default function DevCard({
    className,
    developer,
    tiltInitialX = 0,
    tiltInitialY = 0,
}: Props) {
    const [isLoading, setIsLoading] = React.useState(true);

    return (
        <Tilt
            className={`${className} border border-yellow-400 overflow-hidden rounded-xl group`}
            tiltReverse={true}
            glareEnable={true}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            tiltAngleXInitial={tiltInitialY}
            tiltAngleYInitial={tiltInitialX}
        >
            <div className="relative overflow-hidden rounded-xl w-full h-full text-center backdrop-blur">
                {isLoading && (
                    <div className="absolute top-1/2 left-1/2 z-20 opacity-75 -translate-x-1/2 -translate-y-1/2 h-3 w-1/2 border border-yellow-500 overflow-hidden">
                        <div
                            className="bg-white w-full h-full"
                            data-aos="slide-right"
                            data-aos-delay={1000}
                            data-aos-duration={3000}
                        ></div>
                        <div className="absolute -left-3 bottom-0 h-6 w-6 bg-yellow-500 -rotate-45" />
                        <div className="absolute -right-3 top-0 h-6 w-6 bg-yellow-500 rotate-45" />
                    </div>
                )}
                <img
                    src={developer.photo}
                    alt={developer.name}
                    className="absolute bg-yellow-400/50  top-0 left-0 w-full h-full object-cover z-0 opacity-80 group-hover:opacity-50 transition-all group-hover:scale-110 duration-700"
                    onLoad={() => setIsLoading(false)}
                />
                <div className="absolute top-0 left-0 w-full h-full object-cover z-0 bg-gradient-to-t from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-all"></div>
                <div className="absolute top-0 left-0 w-full h-full object-cover z-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-all"></div>
                <div className="absolute p-4 top-0 left-0 w-full h-full flex flex-col gap-1 justify-end group-hover:-translate-y-10 transition-all duration-500">
                    <h3 className="text-base md:text-xl font-semibold">
                        {developer.name}
                    </h3>
                    <p className="text-xs md:text-sm font-semibold">
                        {developer.role}
                    </p>
                    <div className="h-[1px] bg-white/40"></div>
                    <p className="text-yellow-300/80 underline text-xs group-hover:text-yellow-400 hover:scale-110 transition font-mono">
                        Click to see more
                    </p>
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white/80 h-2 border border-yellow-400 rounded-b-full w-24" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white/80 h-2 border border-yellow-400 rounded-t-full w-24" />

                <DevPreview
                    dev={developer}
                    className="absolute top-0 left-0 z-30 w-full h-full"
                />
            </div>
        </Tilt>
    );
}
