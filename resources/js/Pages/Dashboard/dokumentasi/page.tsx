import React from "react";

import { Breadcrumbs } from "@/Components/ui/breadcrumbs";

import DashboardLayout from "@/Layouts/DashboardLayout";

const breadcrumbItems = [
  { title: "Ellysion Panel", link: "/dashboard" },
  { title: "dokumentasi", link: "/dashboard/dokumentasi" },
];

export default function Page({ auth, dokumentasi }) {
	return (
		<>
		    <DashboardLayout user={auth.user}>
		      <Breadcrumbs items={breadcrumbItems} />

		    </DashboardLayout>
	    </>
	);
}