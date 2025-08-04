import React from "react";

import { Breadcrumbs } from "@/Components/ui/breadcrumbs";

import DashboardLayout from "@/Layouts/DashboardLayout";

const breadcrumbItems = [
  { title: "Ellysion Panel", link: "/dashboard" },
  { title: "dokumentasi", link: "/dashboard/dokumentasi" },
  { title: "detail", link: "/dashboard/dokumentasi" },
];

export default function Page({ auth, dokumentasi }) {
	return (
		<>
	    <DashboardLayout user={auth.user}>
	      <Breadcrumbs items={breadcrumbItems} />
	      <h2 className="text-3xl font-inter font-bold tracking-tight">Dokumentasi Kegiatan</h2>
	    </DashboardLayout>
		</>
	);
}