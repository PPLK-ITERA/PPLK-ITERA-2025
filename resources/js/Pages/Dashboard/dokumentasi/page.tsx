import React from "react";

import { useForm } from "@inertiajs/react";

import { Plus } from "lucide-react";

import DashboardLayout from "@/Layouts/DashboardLayout";

export default function Page({ dokumentasi }) {
	return (
	    <DashboardLayout user={auth.user}>
	      <Breadcrumbs items={breadcrumbItems} />

	      

	    </DashboardLayout>
	);
}