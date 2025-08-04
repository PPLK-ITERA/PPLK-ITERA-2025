import React from "react";

import { Breadcrumbs } from "@/Components/ui/breadcrumbs";

import DashboardLayout from "@/Layouts/DashboardLayout";

import DokumentasiDay from "@/Components/dashboard/dokumentasi/dokumentasi-day";

const breadcrumbItems = [
  { title: "Ellysion Panel", link: "/dashboard" },
  { title: "dokumentasi", link: "/dashboard/dokumentasi" },
];

export default function Page({ auth, dokumentasi, foto_dokumentasi }) {
	return (
		<>
		    <DashboardLayout user={auth.user}>
		      <Breadcrumbs items={breadcrumbItems} />
		      <h2 className="text-3xl font-inter font-bold tracking-tight">Dokumentasi Kegiatan</h2>

		      <div className="lg:grid-cols-3 grid grid-cols-1 gap-4">
			      {dokumentasi.map((item, index) => {
			      	return(
			      		<a 
			      			href=""
			      		>
					      	<DokumentasiDay
					      		data={item}
					      		foto={foto_dokumentasi}
					      	/>
					      </a>
				     )
			      })}
			    </div>

		    </DashboardLayout>
	    </>
	);
}

/*/*<img*/
		      	// https://drive.google.com/drive/folders/1m_h8yGiMbk0c5pRc-eELTqA0--3WgmrM?usp=sharing
			  // src={`https://docs.google.com/viewer?url=https://drive.google.com/file/d/1qB6O-lN36sowdVgDKeqjB7_G1OhyCsjh/view&embedded=true`}
			  // src={`https://drive.google.com/thumbnail?id=1m_h8yGiMbk0c5pRc-eELTqA0--3WgmrM`}
			  // src={`https://drive.google.com/thumbnail?id=1qB6O-lN36sowdVgDKeqjB7_G1OhyCsjh`}
			  // width="640"
			  // height="480"
			  // allow="autoplay"
			// />