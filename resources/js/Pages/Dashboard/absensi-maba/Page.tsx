import DashboardLayout from "@/Layouts/DashboardLayout";

import React from "react";

import { Breadcrumbs } from "@/Components/dashboard/breadcrumbs";

const breadcrumbItems = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Absensi Maba", link: "/dashboard/absensi-maba" },
];

export default function Page() {
    return (
        <DashboardLayout>
            <Breadcrumbs items={breadcrumbItems} />
            <h2 className="text-3xl font-bold tracking-tight">Absensi Maba</h2>
        </DashboardLayout>
    );
}
