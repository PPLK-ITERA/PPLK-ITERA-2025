import React from "react";

import EditDokumentasi from "@/Components/dashboard/dokumentasi/edit-dokumentasi";

import { Breadcrumbs } from "@/Components/ui/breadcrumbs";
import DashboardLayout from "@/Layouts/DashboardLayout";

const breadcrumbItems = [
  { title: "Ellysion Panel", link: "/dashboard" },
  { title: "Dokumentasi", link: "/dashboard/dokumentasi" },
  { title: "Edit Dokumentasi", link: "/dashboard/dokumentasi" },
];

export default function Edit({auth, dokumentasi}) {
	return (
		<>
			<DashboardLayout user={auth.user}>
	      <Breadcrumbs items={breadcrumbItems} />

	      <EditDokumentasi dokumentasi={dokumentasi} />
	      
	    </DashboardLayout>
		</>
	)
}