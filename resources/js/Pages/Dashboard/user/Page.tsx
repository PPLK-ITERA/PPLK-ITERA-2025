import DashboardLayout from "@/Layouts/DashboardLayout";
import { users } from "@/constants/data";

import { Breadcrumbs } from "@/Components/dashboard/breadcrumbs";
import { UserClient } from "@/Components/dashboard/tables/user-tables/client";

const breadcrumbItems = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "User", link: "/dashboard/user" },
];
export default function Page() {
    return (
        <DashboardLayout>
            <Breadcrumbs items={breadcrumbItems} />
            <UserClient data={users} />
        </DashboardLayout>
    );
}
