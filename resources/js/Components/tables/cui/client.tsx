"use client";

import { columns } from "./columns";

import { useState } from "react";

import { DataTable } from "@/Components/ui/data-table";
import { Heading } from "@/Components/ui/heading";
// import { useRouter } from "next/navigation";
import { Separator } from "@/Components/ui/separator";

import { LogBookCui } from "@/lib/types/LogBookCui";

interface ProductsClientProps {
    data: LogBookCui[];
    total: number;
    perPage: number;
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    onItemsPerPageChange: (itemsPerPage: number) => void;
    onSearchChange: (searchTerm: string) => void;
}

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
