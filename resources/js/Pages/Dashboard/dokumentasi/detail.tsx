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
	      <h2 className="text-3xl font-inter font-semibold tracking-tight">Dokumentasi Kegiatan Hari ke-{dokumentasi.hari_ke}</h2>

	      <div className="font-inter">
	      	<h3 className="text-xl font-semibold tracking-tight">{dokumentasi.judul}</h3>
	      	<p>{dokumentasi.deskripsi}</p>
	      </div>

	      <div className=" font-inter">
	      	<br />
	      	<div className="my-3">
	      		<a href={dokumentasi.link_gdrive}>
	      			<button className="text-blue-500 py-3 px-5 rounded-md bg-white">
	      				Link Google Drive
	      			</button>
	      		</a>
	      	</div>
	      	<div className="my-3 p-3 bg-white rounded-xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
	      		{dokumentasi.fotos.map((item) => {
	      			return (
		      			<img
		      				src={item.path_file + item.nama_file}
		      				className="relative h-32 md:h-48 m-3 shadow-lg"
		      			/>
		      		);
	      		})}
	      	</div>
	      </div>
	    </DashboardLayout>
		</>
	);
}