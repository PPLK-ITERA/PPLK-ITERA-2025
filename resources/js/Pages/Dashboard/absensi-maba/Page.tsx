import DashboardLayout from "@/Layouts/DashboardLayout";

import React from "react";

import { AbsensiMabaClient } from "@/Components/tables/absensi-maba/client";
import { Breadcrumbs } from "@/Components/ui/breadcrumbs";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";

const breadcrumbItems = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Absensi Maba", link: "/dashboard/absensi-maba" },
];

export default function Page({ auth }) {
    return (
        <DashboardLayout user={auth.user}>
            <Breadcrumbs items={breadcrumbItems} />
            <h2 className="text-3xl font-bold tracking-tight">Absensi Maba</h2>

            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

            <AbsensiMabaClient />
        </DashboardLayout>
    );
}
