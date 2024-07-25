import DashboardLayout from "@/Layouts/DashboardLayout";

import React from "react";

import AdminView from "@/Components/dashboard/manage-tugas/AdminView";
import MentorView from "@/Components/dashboard/manage-tugas/MentorView";
import { Breadcrumbs } from "@/Components/ui/breadcrumbs";

const breadcrumbItems = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Manage Tugas", link: "/dashboard/manage-tugas" },
];

export default function Page({ auth }) {
    return (
        <DashboardLayout user={auth.user}>
            <Breadcrumbs items={breadcrumbItems} />
            <h2 className="text-3xl font-bold tracking-tight">Manage Tugas</h2>

            {auth.user.role_id === 3 ? <AdminView /> : null}
            {auth.user.role_id === 3 ? <MentorView /> : null}
        </DashboardLayout>
    );
}
