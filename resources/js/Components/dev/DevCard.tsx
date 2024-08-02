import DevPreview from "./DevPreview";
import Tilt from "react-parallax-tilt";

import React from "react";

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
            <div className="rounded-xl backdrop-blur relative w-full h-full overflow-hidden text-center">
                {isLoading && (
                    <div className="top-1/2 left-1/2 absolute z-20 w-1/2 h-3 overflow-hidden -translate-x-1/2 -translate-y-1/2 border border-yellow-500 opacity-75">
                        <div
                            className="w-full h-full bg-white"
                            data-aos="slide-right"
                            data-aos-delay={1000}
                            data-aos-duration={3000}
                        ></div>
                        <div className="-left-3 absolute bottom-0 w-6 h-6 -rotate-45 bg-yellow-500" />
                        <div className="-right-3 absolute top-0 w-6 h-6 rotate-45 bg-yellow-500" />
                    </div>
                )}
                <img
                    src={developer.photo}
                    alt={developer.name}
                    className="bg-yellow-400/50 opacity-80 group-hover:opacity-50 group-hover:scale-110 absolute top-0 left-0 z-0 object-cover w-full h-full transition-all duration-700"
                    onLoad={() => setIsLoading(false)}
                />
                <div className="bg-gradient-to-t from-yellow-400/20 to-transparent group-hover:opacity-100 absolute top-0 left-0 z-0 object-cover w-full h-full transition-all opacity-0"></div>
                <div className="bg-gradient-to-t from-black/80 via-transparent to-transparent group-hover:opacity-0 absolute top-0 left-0 z-0 object-cover w-full h-full transition-all opacity-100"></div>
                <div className="group-hover:-translate-y-10 absolute top-0 left-0 flex flex-col justify-end w-full h-full gap-1 p-4 transition-all duration-500">
                    <h3 className="md:text-xl text-base font-semibold">
                        {developer.name}
                    </h3>
                    <p className="md:text-sm text-xs font-semibold">
                        {developer.role}
                    </p>
                    <div className="h-[1px] bg-white/40"></div>
                    <p className="text-yellow-300/80 group-hover:text-yellow-400 hover:scale-110 font-mono text-xs underline transition">
                        Click to see more
                    </p>
                </div>
                <div className="left-1/2 bg-white/80 absolute top-0 w-24 h-2 -translate-x-1/2 border border-yellow-400 rounded-b-full" />
                <div className="left-1/2 bg-white/80 absolute bottom-0 w-24 h-2 -translate-x-1/2 border border-yellow-400 rounded-t-full" />

                <DevPreview
                    dev={developer}
                    className="absolute top-0 left-0 z-30 w-full h-full"
                />
            </div>
        </Tilt>
    );
}
