import { Breadcrumbs } from "@/Components/dashboard/breadcrumbs";
import { CreateProfileOne } from "@/Components/dashboard/forms/user-profile-stepper/create-profile";
import { ScrollArea } from "@/Components/dashboard/ui/scroll-area";

const breadcrumbItems = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Profile", link: "/dashboard/profile" },
];
export default function Page() {
    return (
        <ScrollArea className="h-full">
            <div className="md:p-8 flex-1 p-4 pt-6 space-y-4">
                <Breadcrumbs items={breadcrumbItems} />
                <CreateProfileOne categories={[]} initialData={null} />
            </div>
        </ScrollArea>
    );
}
