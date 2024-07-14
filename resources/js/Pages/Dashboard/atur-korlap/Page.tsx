import DashboardLayout from "@/Layouts/DashboardLayout";

import React from "react";

import { Breadcrumbs } from "@/Components/dashboard/breadcrumbs";

const breadcrumbItems = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Atur Korlap", link: "/dashboard/atur-korlap" },
];

export default function Page() {
    return (
        <DashboardLayout>
            <Breadcrumbs items={breadcrumbItems} />
            <h2 className="text-3xl font-bold tracking-tight">Atur Korlap</h2>
        </DashboardLayout>
    );
}
