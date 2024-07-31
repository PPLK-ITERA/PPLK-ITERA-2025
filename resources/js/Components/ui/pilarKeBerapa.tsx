import { Progress } from "./progress";

import React from "react";

const PilarKeBerapa = ({
    angka,
    className,
}: {
    angka: number;
    className: string;
}) => {
    return (
        <div>
            <div className="text-xl font-bold">
                <Progress value={angka} />
                <div className="mt-2 text-center text-xs">
                    <p>{angka}%</p>
                </div>
            </div>
        </div>
    );
};

export default PilarKeBerapa;
