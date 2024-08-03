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
    color,
    maxHeightPx,
}: Props) {
    return (
        <div className="overflow-clip flex flex-col w-full rounded-t-lg shadow-inner">
            <div
                style={{
                    background: colors[color],
                    height: `${maxHeightPx}px`,
                }}
                className={`${className}`}
            >
                <div
                    className="place-content-center grid w-full h-full"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
