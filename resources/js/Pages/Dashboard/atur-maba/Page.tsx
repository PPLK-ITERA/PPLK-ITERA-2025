import React from "react";

import DashboardLayout from "@/Layouts/DashboardLayout";

import { AturMabaClient } from "@/Components/tables/atur-maba/client";
import { Breadcrumbs } from "@/Components/ui/breadcrumbs";

const breadcrumbItems = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Booklet", link: "/dashboard/booklet" },
];

export default function Page({ auth }) {
    return (
        <DashboardLayout user={auth.user}>
            <Breadcrumbs items={breadcrumbItems} />
            <h2 className="text-3xl font-bold tracking-tight">Atur Maba</h2>

            <AturMabaClient />
        </DashboardLayout>
    );
}
