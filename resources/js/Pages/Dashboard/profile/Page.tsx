import DashboardLayout from "@/Layouts/DashboardLayout";

import { Breadcrumbs } from "@/Components/dashboard/breadcrumbs";
import { CreateProfileOne } from "@/Components/dashboard/forms/user-profile-stepper/create-profile";
import { ScrollArea } from "@/Components/dashboard/ui/scroll-area";

const breadcrumbItems = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Profile", link: "/dashboard/profile" },
];
export default function Page() {
    return (
        <DashboardLayout>
            {/* <ScrollArea className="h-full"> */}
            <Breadcrumbs items={breadcrumbItems} />
            <CreateProfileOne categories={[]} initialData={null} />
            {/* </ScrollArea> */}
        </DashboardLayout>
    );
}
