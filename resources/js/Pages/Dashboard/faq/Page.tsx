import DashboardLayout from "@/Layouts/DashboardLayout";

import React from "react";

import { Breadcrumbs } from "@/Components/dashboard/breadcrumbs";

const breadcrumbItems = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Faq", link: "/dashboard/faq" },
];

export default function Page({auth}) {
    return (
        <DashboardLayout>
            <Breadcrumbs items={breadcrumbItems} />
            <h2 className="text-3xl font-bold tracking-tight">Atur FAQ</h2>
        </DashboardLayout>
    );
}
