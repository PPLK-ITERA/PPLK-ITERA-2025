import { IDetectedBarcode, Scanner, outline } from "@yudiel/react-qr-scanner";

import React, { useEffect, useState } from "react";

import { useForm } from "@inertiajs/react";

import DashboardLayout from "@/Layouts/DashboardLayout";

import Dapmen from "@/Components/dashboard/game-offline/Dapmen";
import { Breadcrumbs } from "@/Components/ui/breadcrumbs";
import { Button } from "@/Components/ui/button";
import { Toaster } from "@/Components/ui/toaster";

import { useFlashToast } from "@/lib/hooks/useFlashToast";

const breadcrumbItems = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Game Offline", link: "/dashboard/game-offline" },
];

export default function Page({ auth, response }) {
    const { data, setData, post, processing } = useForm({
        qr_code: "",
    });

    const [loading, setLoading] = useState(false);

    useFlashToast();

    const handleScan = (data: string) => {
        if (data) {
            setData("qr_code", data);
        }
    };

    useEffect(() => {
        if (data.qr_code) {
            post(route("dashboard.poin.store"));
        }
    }, [data.qr_code]);

    return (
        <>
            <DashboardLayout user={auth.user}>
                <Breadcrumbs items={breadcrumbItems} />
                <h2 className="text-3xl font-bold tracking-tight">
                    Game Offline
                </h2>

                {auth.user.role_id === 2 ||
                auth.user.role_id === 3 ||
                auth.user.role_id === 4 ? (
                    <>
                        <Dapmen userId={auth.user.id} />
                    </>
                ) : null}

                {auth.user.role_id === 6 ? (
                    <>
                        <p>
                            Gunakan fitur ini untuk scan QR kelompok dari{" "}
                            <span className="font-bold">Dapmen</span> yang
                            menang pada game offline
                        </p>

                        <div className="flex flex-col items-center justify-center w-full">
                            <div className="md:w-96 border">
                                <Scanner
                                    onScan={function (
                                        detectedCodes: IDetectedBarcode[],
                                    ): void {
                                        handleScan(
                                            detectedCodes.at(-1)?.rawValue ||
                                                "",
                                        );
                                    }}
                                    components={{
                                        finder: true,
                                        tracker: outline,
                                        zoom: true,
                                        torch: true,
                                    }}
                                    allowMultiple={true}
                                    scanDelay={2000}
                                    paused={loading}
                                    styles={{
                                        container: {
                                            width: "100%",
                                        },
                                    }}
                                />
                            </div>

                            <Button className="mt-5">Scan QR Kelompok</Button>
                        </div>
                    </>
                ) : null}
            </DashboardLayout>

            <Toaster />
        </>
    );
}
