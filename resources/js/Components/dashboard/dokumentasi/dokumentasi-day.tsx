import React from "react";

import { Label } from "@/Components/ui/label";

export default function DokumentasiDay({ data, foto }) {
	return (
		<div className="lg:m-0 m-2 font-inter bg-white rounded-lg">
			<div className="p-3 bg-[#e58025] rounded-t-lg">
				<Label htmlFor="nama-maba" className="text-left text-white font-bold">
		      Hari Ke-{data.hari_ke}
		    </Label>
		  </div>
		  <div className="p-3">
		  	<p className="my-2 font-bold">{data.judul}</p>
		  	<p className="my-2">{data.deskripsi}</p>
		  	{/*<p className="my-2 text-brown">{foto.}</p>*/}
		  	<div className="flex my-2 w-[50px] h-[50px] border border-[#C2C2C2] rounded-lg overflow-hidden">
		  		<img
		  			src={data.link_gdrive}
		  			className="w-full h-full bg-center bg-cover"
		  		/>
		  	</div>
		  </div>
		</div>
	);
}