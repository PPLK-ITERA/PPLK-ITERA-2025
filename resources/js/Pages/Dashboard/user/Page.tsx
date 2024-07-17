import DashboardLayout from "@/Layouts/DashboardLayout";

import { Breadcrumbs } from "@/Components/ui/breadcrumbs";
import { UserClient } from "@/Components/dashboard/tables/user-tables/client";

import { users } from "@/constants/data";

const breadcrumbItems = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "User", link: "/dashboard/user" },
];
export default function Page({ auth }) {
    return (
        <DashboardLayout user={auth.user}>
            <Breadcrumbs items={breadcrumbItems} />
            <UserClient data={users} />
        </DashboardLayout>
    );
}
