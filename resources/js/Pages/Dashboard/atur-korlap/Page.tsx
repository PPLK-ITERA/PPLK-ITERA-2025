import DashboardLayout from "@/Layouts/DashboardLayout";

import React from "react";

export default function Page({ auth }) {
    return (
        <DashboardLayout user={auth.user}>
            <h2 className="text-3xl font-bold tracking-tight">Atur Korlap</h2>
        </DashboardLayout>
    );
}
