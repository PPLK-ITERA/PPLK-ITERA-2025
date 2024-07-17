import DashboardLayout from "@/Layouts/DashboardLayout";
import { cn } from "@/lib/utils";

// import Link from 'next/link';
import { Link } from "@inertiajs/react";

import { Plus } from "lucide-react";

import { Breadcrumbs } from "@/Components/dashboard/breadcrumbs";
import { columns } from "@/Components/dashboard/tables/employee-tables/columns";
// import { EmployeeTable } from '@/Components/dashboard/tables/employee-tables/employee-table';
import { buttonVariants } from "@/Components/dashboard/ui/button";
import { Heading } from "@/Components/dashboard/ui/heading";
import { Separator } from "@/Components/dashboard/ui/separator";

import { Employee } from "@/constants/data";

const breadcrumbItems = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Employee", link: "/dashboard/employee" },
];

type paramsProps = {
    searchParams: {
        [key: string]: string | string[] | undefined;
    };
};

// export default async function Page({ searchParams }: paramsProps) {
export default function Page({ auth }) {
    // const page = Number(searchParams.page) || 1;
    // const pageLimit = Number(searchParams.limit) || 10;
    // const country = searchParams.search || null;
    // const offset = (page - 1) * pageLimit;

    // const res = await fetch(
    //     `https://api.slingacademy.com/v1/sample-data/users?offset=${offset}&limit=${pageLimit}` +
    //         (country ? `&search=${country}` : ""),
    // );
    // const employeeRes = await res.json();
    // const totalUsers = employeeRes.total_users; //1000
    // const pageCount = Math.ceil(totalUsers / pageLimit);
    // const employee: Employee[] = employeeRes.users;
    return (
        <DashboardLayout user={auth.user}>
            <Breadcrumbs items={breadcrumbItems} />

            <div className="flex items-start justify-between">
                <Heading
                    // title={`Employee (${totalUsers})`}
                    title={`Employee (ujang)`}
                    description="Manage employees (Server side table functionalities.)"
                />

                <Link
                    href={"/dashboard/employee/new"}
                    className={cn(buttonVariants({ variant: "default" }))}
                >
                    <Plus className="w-4 h-4 mr-2" /> Add New
                </Link>
            </div>
            <Separator />

            {/* <EmployeeTable
          searchKey="country"
          pageNo={page}
          columns={columns}
          totalUsers={totalUsers}
          data={employee}
          pageCount={pageCount}
        /> */}
        </DashboardLayout>
    );
}
