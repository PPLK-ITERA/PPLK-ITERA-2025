import React from "react";

import { Head } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";

import { AturKorlapClient } from "@/Components/tables/atur-korlap/client";
import { Breadcrumbs } from "@/Components/ui/breadcrumbs";

import { useFlashToast } from "@/lib/hooks/useFlashToast";

const breadcrumbItems = [
  { title: "Ellysion Panel", link: "/dashboard" },
  { title: "Atur Korlap", link: "/dashboard/atur-korlap" },
];

export default function Page({ auth }) {
  useFlashToast();

  return (
    <>
      <Head title="Atur Korlap" />
      <DashboardLayout user={auth.user}>
        <Breadcrumbs items={breadcrumbItems} />
        <h2 className="text-3xl font-bold tracking-tight">Atur Korlap</h2>

        <AturKorlapClient />
      </DashboardLayout>
    </>
  );
}
