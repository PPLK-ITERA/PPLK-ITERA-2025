import React from "react";

import { Label } from "@/Components/ui/label";

export default function DokumentasiDay({ data, foto, user }) {
	return (
			<div className="lg:m-0 m-2 font-inter bg-gray-200 rounded-lg">
				<div className="bg-white rounded-lg">
					<div className="p-3 bg-[#e58025] rounded-t-lg">
						<Label htmlFor="nama-maba" className="text-left text-white font-bold">
				      Hari Ke-{data.hari_ke}
				    </Label>
				  </div>
				  <div className="p-3 min-h-[220]">
				  	<p className="my-2 font-bold">{data.judul}</p>
				  	<p className="my-2">{data.deskripsi}</p>
				  	{foto[data.hari_ke] !== undefined ? <p className="mt-[2] text-sm text-gray-500">{foto[data.hari_ke]} foto</p> : <br className="leading-3" />}
				  	<p className="text-sm text-blue-500"><a href="data.link_gdrive" >Link Google Drive</a></p>
				  	<div className="flex my-2 w-[50px] h-[50px] border border-[#C2C2C2] rounded-lg overflow-hidden">
				  		<img
				  			src={data.link_gdrive}
				  			className="w-full h-full bg-center bg-cover"
				  		/>
				  	</div>
				  </div>
				</div>
				{user.role_id === 3 ? 
					<div className="px-3 py-1 flex">
						<a
							href={`dokumentasi/${data.id}`}
							className="text-sky-600 border border-current p-1 flex-1 text-center rounded-sm">
							Detail
						</a>
						<a
							className="text-yellow-400 border border-current p-1 flex-1 text-center rounded-sm">
							Edit
						</a>
						<a
							className="text-destructive border border-current p-1 flex-1 text-center rounded-sm">
							hapus
						</a>
					</div>
				:

					<div className="px-3 py-1">
						<a
							href={`dokumentasi/view/${data.id}`}
							className="text-sky-600 border border-current p-1 text-center rounded-sm">
							Detail
						</a>
					</div>
				}
			</div>
	);
}