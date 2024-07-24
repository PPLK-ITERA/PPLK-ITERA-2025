import DashboardLayout from "@/Layouts/DashboardLayout";

import React from "react";

import { IconPencil } from "@tabler/icons-react";

import { Breadcrumbs } from "@/Components/dashboard/breadcrumbs";
import { Button } from "@/Components/ui/button";

import logopplk from "!assets/logo-pplk-2024.png";

const breadcrumbItems = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Informasi Kelompok", link: "/dashboard/informasi-kelompok" },
];

export default function Page({ auth, response }) {
    console.log(response);
    return (
        <DashboardLayout user={auth.user}>
            <Breadcrumbs items={breadcrumbItems} />
            <h2 className="text-3xl font-bold tracking-tight">
                Informasi Kelompok
            </h2>

            <div className="w-36 h-36 md:mx-0 mx-auto border rounded-full">
                <img src={logopplk} alt="logopplk" />
            </div>

            <div className="flex items-center justify-start gap-2 font-semibold">
                <p className="text-lg">Kelompok 73 Nawasena</p>
                <IconPencil className="-mt-[2px]" />
            </div>

            <div className="flex gap-2">
                <div className="px-2 py-3 border-2 rounded-md min-w-[150px]">
                    <h2 className="font-bold">Daplok</h2>

                    <div className="mt-5">
                        <p className="text-lg font-bold">Siti Abdiyah</p>
                        <p className="font-semibold">Teknik Sipil</p>
                    </div>
                </div>

                <div className="px-2 py-3 border-2 rounded-md min-w-[150px]">
                    <h2 className="font-bold">Mentor</h2>

                    <div className="mt-5">
                        <p className="text-lg font-bold">Ujang Pance</p>
                        <p className="font-semibold">Teknik Sipil</p>
                    </div>
                </div>
            </div>

            <div className="px-10 py-5 border-2 rounded-md">
                <h2>Absensi Maba</h2>

                <Button>Mulai Absen Maba</Button>
            </div>
        </DashboardLayout>
    );
}
