import { description } from "../dashboard/charts/bar-graph";
import ReactDOM from "react-dom";
import Tilt from "react-parallax-tilt";

import React from "react";

type Props = {
    className?: string;
    name: string;
    description: string;
    image: string;
};

export default function DevCard({
    className,
    name,
    description,
    image,
}: Props) {
    return (
        <Tilt
            className={`${className} border border-yellow-400 overflow-hidden rounded-xl backdrop-blur group cursor-grab`}
            tiltReverse={true}
            glareEnable={true}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
        >
            <div className="relative overflow-hidden rounded-xl w-full h-full text-center">
                <img
                    src={image}
                    alt={name}
                    className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-80 group-hover:opacity-50 transition-all group-hover:scale-110 duration-700"
                />
                <div className="absolute top-0 left-0 w-full h-full object-cover z-0 bg-gradient-to-t from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-all"></div>
                <div className="absolute p-4 top-0 left-0 w-full h-full flex flex-col justify-end group-hover:-translate-y-10 transition-all duration-500">
                    <h3 className="text-xl font-semibold">{name}</h3>
                    <p className="text-sm font-semibold">{description}</p>
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white/80 h-2 border border-yellow-400 rounded-b-full w-24" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white/80 h-2 border border-yellow-400 rounded-t-full w-24" />
            </div>
        </Tilt>
    );
}
