"use client";

import { columns } from "./columns";

import { DataTable } from "@/Components/ui/data-table";
import { Separator } from "@/Components/ui/separator";

export const AturKorlapClient = () => {
    return (
        <>
            <div className="flex items-start justify-between"></div>
            <Separator />
            <DataTable
                searchKey="name"
                columns={columns}
                apiEndpoint={route("dashboard.user.data.korlap")}
                title={"Data Korlap"}
                description={
                    "Gunakan sistem informasi ini untuk manajemen data Korlap!"
                }
            />
        </>
    );
};
