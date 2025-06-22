import { PageProps } from "vendor/laravel/breeze/stubs/inertia-react-ts/resources/js/types";

import { useEffect } from "react";

import { usePage } from "@inertiajs/react";

import DashboardLayout from "@/Layouts/DashboardLayout";

import CreateUser from "@/Components/dashboard/create-user/CreateUser";
import { Breadcrumbs } from "@/Components/ui/breadcrumbs";
import { Toaster } from "@/Components/ui/toaster";
import { useToast } from "@/Components/ui/use-toast";

import { useFlashToast } from "@/lib/hooks/useFlashToast";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Create User", link: "/dashboard/create-user" },
];

export default function Page({ auth }) {
  useFlashToast();

  return (
    <>
      <DashboardLayout user={auth.user}>
        <Breadcrumbs items={breadcrumbItems} />

        <h2 className="text-3xl font-bold tracking-tight">Create User</h2>

        <div className="md:pb-20 max-w-sm pb-64">
          <CreateUser />
        </div>
      </DashboardLayout>

      <Toaster />
    </>
  );
}
