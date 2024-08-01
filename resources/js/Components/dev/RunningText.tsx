// create tsx component RunningTitle with its functionality
import React, { useEffect, useState } from "react";

import { useAos } from "@/lib/hooks/useAos";

type Props = {
    title: string;
    className?: string;
    delay?: number;
    style?: Object;
};

export default function RunningText({
    title,
    className,
    delay = 100,
    style,
}: Props) {
    useAos();
    const [runningTitle, setRunningTitle] = useState("");

    useEffect(() => {
        title.split("").forEach((char, index) => {
            setTimeout(() => {
                setRunningTitle((prev) => prev + char);
            }, delay * index);
        });
    }, []);

    return (
        <div>
            <h1
                className={`h-0 w-full opacity-0 ${className}`}
                style={style ?? {}}
            >
                {runningTitle}
            </h1>
            <h1 className={`${className}`}>{runningTitle}</h1>
        </div>
    );
}
