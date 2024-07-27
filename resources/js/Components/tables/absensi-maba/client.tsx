"use client";

import { columns } from "./columns";

import { DataTable } from "@/Components/ui/data-table";
import { Separator } from "@/Components/ui/separator";

export const AbsensiMabaClient = () => {
    return (
        <>
            <div className="flex items-start justify-between"></div>
            <Separator />
            <DataTable
                searchKey="name"
                columns={columns}
                apiEndpoint={route("dashboard.presensi.data")}
                title={"Data Absensi Maba"}
                description={
                    "Gunakan sistem informasi ini untuk manajemen kehadiran maba!"
                }
            />
        </>
    );
};
