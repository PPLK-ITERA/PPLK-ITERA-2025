"use client";

import { columns } from "./columns";

import { DataTable } from "@/Components/ui/data-table";
import { Separator } from "@/Components/ui/separator";

import { LogBookCui } from "@/lib/types/LogBookCui";

export const LogBookClient = () => {
    return (
        <>
            <div className="flex items-start justify-between"></div>
            <Separator />
            <DataTable
                searchKey="name"
                columns={columns}
                apiEndpoint={route("dashboard.cui.data")}
                title={"Log Book Kehadiran CUI"}
                description={"Gunakan sistem informasi ini untuk manajemen kehadiran maba!"}
            />
        </>
    );
};
