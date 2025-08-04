import DashboardLayout from "@/Layouts/DashboardLayout";

import { UserClient } from "@/Components/dashboard/tables/user-tables/client";
import { Breadcrumbs } from "@/Components/ui/breadcrumbs";

import { users } from "@/lib/data/data";

const breadcrumbItems = [
  { title: "Ellysion Panel", link: "/dashboard" },
  { title: "User", link: "/dashboard/user" },
];
export default function Page({ auth, response }) {
  return (
    <DashboardLayout user={auth.user}>
      <Breadcrumbs items={breadcrumbItems} />
      <UserClient data={response} />
    </DashboardLayout>
  );
}
