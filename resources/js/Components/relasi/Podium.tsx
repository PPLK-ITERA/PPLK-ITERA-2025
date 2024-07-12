import React, { useEffect, useState } from "react";

type Props = {
    children: React.ReactNode;
    className?: string;
    maxHeightPx: number;
    color: "gold" | "silver" | "bronze";
};

const colors = {
    gold: "linear-gradient(to right, #FBDA3D, #FEF39A, #FBDB41, #FCDA3A, #FFF19F, #E4C242)",
    silver: "linear-gradient(to right, #B0B2BA, #F4F5F7, #BEC1CA, #F4F5F7, #BEC1CA)",
    bronze: "linear-gradient(to right, #632801, #B3773B, #7D3819, #B3773B, #7D3819)",
};

export default function Podium({
    children,
    className,
    maxHeightPx,
    color,
}: Props) {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setHeight(maxHeightPx);
        }, 100);
    }, []);

    return (
        <div className="rounded-t-lg shadow-inner w-full overflow-clip flex flex-col">
            <div
                style={{
                    background: colors[color],
                    maxHeight: `${height}px`,
                    height: `${height}px`,
                }}
                className={`${className} h-48 transition-all duration-1000`}
            >
                <div
                    className="w-full h-full grid place-content-center"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
