import DashboardLayout from "@/Layouts/DashboardLayout";

import React from "react";

import { IconPencil } from "@tabler/icons-react";

import { KelompokTable } from "@/Components/dashboard/informasi-kelompok/KelompokTable";
import { Breadcrumbs } from "@/Components/ui/breadcrumbs";
import { Button } from "@/Components/ui/button";

import logopplk from "!assets/logo-pplk-2024.png";

const breadcrumbItems = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Informasi Kelompok", link: "/dashboard/informasi-kelompok" },
];

export default function Page({ auth }) {
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

            <div className="flex max-w-sm gap-2">
                <div className="w-full px-2 py-3 border-2 rounded-md">
                    <h2 className="font-bold">Daplok</h2>

                    <div className="mt-5">
                        <p className="text-lg font-bold">Siti Abdiyah</p>
                        <p className="font-semibold">Teknik Sipil</p>
                    </div>
                </div>

                <div className="w-full px-2 py-3 border-2 rounded-md">
                    <h2 className="font-bold">Mentor</h2>

                    <div className="mt-5">
                        <p className="text-lg font-bold">Ujang Pance</p>
                        <p className="font-semibold">Teknik Sipil</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center max-w-sm px-10 py-5 border-2 rounded-md">
                <h2 className="font-semibold">Absensi Maba</h2>

                <Button className="mt-3">Mulai Absen Maba</Button>
            </div>

            <KelompokTable />
        </DashboardLayout>
    );
}
