import { users } from "@/constants/data";

import { Breadcrumbs } from "@/Components/dashboard/breadcrumbs";
import { UserClient } from "@/Components/dashboard/tables/user-tables/client";

const breadcrumbItems = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "User", link: "/dashboard/user" },
];
export default function Page() {
    return (
        <>
            <div className="md:p-8 flex-1 p-4 pt-6 space-y-4">
                <Breadcrumbs items={breadcrumbItems} />
                <UserClient data={users} />
            </div>
        </>
    );
}
