import React from "react";

import { Card } from "@/Components/ui/card";

import bkkm from "!assets/bkkm.png";

const BadanKM = () => {
    return (
        <Card className="flex items-center justify-center mt-10 bg-transparent border-none shadow-none">
            <div className="flex flex-col md:h-[459px] md:w-[1155px] rounded-[20px] bg-gradient-to-t from-[#A6680C] to-[#B9822F] shadow-2xl items-center justify-center mx-2">
                <h2 className="font-avigea md:text-[39px] text-[20px] text-center text-white pt-7">
                    BADAN KELENGKAPAN KM ITERA
                </h2>
                <div className="sm:py-7 sm:px-7 pb-7 px-2 py-2">
                    <img src={bkkm} alt="logo" className="object-cover" />
                </div>
            </div>
        </Card>
    );
};

export default BadanKM;
