"use client";

import { columns } from "./columns";

import { DataTable } from "@/Components/ui/data-table";
import { Separator } from "@/Components/ui/separator";

export const FAQClient = () => {
    return (
        <>
            <Separator />
            <DataTable
                searchKey="Pertanyaan dan Jawaban"
                columns={columns}
                apiEndpoint={route("dashboard.data.faq")}
                title={"Total FAQ"}
                description={"Gunakan fitur ini untuk manajemen data FAQ!"}
            />
        </>
    );
};
