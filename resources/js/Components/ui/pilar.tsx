import React from "react";

const Pilar = ({
    angka,
    className,
    hasil,
}: {
    angka: number;
    className: string;
    hasil: number;
}) => {
    return (
        <div>
            <div className="flex justify-between">
                <p className={`${className} text-lg font-bold`}>
                    Pilar {angka} :{" "}
                </p>
                <p className="self-end text-xs text-[#432005]">{hasil}/10</p>
            </div>
        </div>
    );
};

export default Pilar;
