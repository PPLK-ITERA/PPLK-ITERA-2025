// import { PageProps } from "vendor/laravel/breeze/stubs/inertia-react-ts/resources/js/types";
import React from "react";

// import { usePage } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";

import { AturMabaClient } from "@/Components/tables/atur-maba/client";
import { Breadcrumbs } from "@/Components/ui/breadcrumbs";
import { Toaster } from "@/Components/ui/toaster";

import { useFlashToast } from "@/lib/hooks/useFlashToast";

const breadcrumbItems = [
  { title: "Ellysion Panel", link: "/dashboard" },
  { title: "Atur Maba", link: "/dashboard/atur-maba" },
];

export default function Page({ auth }) {
  useFlashToast();

  return (
    <>
      <DashboardLayout user={auth.user}>
        <Breadcrumbs items={breadcrumbItems} />
        <h2 className="text-3xl font-semibold font-inter tracking-tight">Atur Maba</h2>

        <AturMabaClient />
      </DashboardLayout>

      <Toaster />
    </>
  );
}
