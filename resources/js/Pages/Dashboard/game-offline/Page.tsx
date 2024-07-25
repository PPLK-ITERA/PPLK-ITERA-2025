import DashboardLayout from "@/Layouts/DashboardLayout";

import React from "react";

import { Breadcrumbs } from "@/Components/ui/breadcrumbs";
import { Button } from "@/Components/ui/button";

import logopplk from "!assets/logo-pplk-2024.png";

const breadcrumbItems = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Game Offline", link: "/dashboard/game-offline" },
];

export default function Page({ auth }) {
    console.log(auth.user);
    return (
        <DashboardLayout user={auth.user}>
            <Breadcrumbs items={breadcrumbItems} />
            <h2 className="text-3xl font-bold tracking-tight">Game Offline</h2>

            {auth.user.role_id === 2 ? (
                <>
                    <p>
                        Gunakan fitur ini untuk generate QR kelompok anda untuk
                        di scan oleh <span className="font-bold">Korlap</span>
                    </p>

                    <div className="w-fit p-2 text-white bg-green-600 rounded-md">
                        <p>Score Kelompok : 800</p>
                    </div>

                    <div className="flex flex-col items-center w-full gap-10">
                        <div className="w-fit">
                            <p className="text-center">
                                Tunjukkan QR Code ini ke{" "}
                                <span className="font-bold">Korlap</span>
                            </p>

                            <div className="aspect-square bg-transparent border flex justify-center items-center mt-5 w-[300px] h-[300px] rounded-md">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/220px-QR_code_for_mobile_English_Wikipedia.svg.png"
                                    alt="qrcode"
                                />
                            </div>
                        </div>

                        <Button>Generate QR Kelompok</Button>
                    </div>
                </>
            ) : null}
            {auth.user.role_id === 3 ? (
                <>
                    <p>
                        Gunakan fitur ini untuk scan QR kelompok dari{" "}
                        <span className="font-bold">Dapmen</span> yang menang
                        pada game offline
                    </p>

                    <Button>Scan QR Kelompok</Button>
                </>
            ) : null}
        </DashboardLayout>
    );
}
