import React from "react";

import { useForm } from "@inertiajs/react";

import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";


export default function EditDokumentasi({dokumentasi}) {
	const { data, setData, put, processing, errors } = useForm({
	  hari_ke: dokumentasi.hari_ke || 1,
	  judul: dokumentasi.judul || "",
	  deskripsi: dokumentasi.deskripsi || "",
	  link_gdrive: dokumentasi.link_gdrive || "",
	});

	const handleSubmit = () => {
	  put(route("dashboard.dokumentasi.update", dokumentasi.id), {
	    preserveScroll: true,
	    onSuccess: () => {
	      toast.success("Data berhasil diperbarui");
	    },
	    onError: () => {
	      toast.error("Gagal memperbarui data");
	    },
	  });
	};

	return(
		<div className="h-fit flex-1 w-full md:max-w-lg p-4 space-y-5 rounded-xl shadow-md bg-[linear-gradient(137.47deg,_#E06C32_11.08%,_#FD8E57_42.04%,_#BE3F00_95.9%)]">
				  <h2 className="text-xl font-semibold text-white tracking-tight">Edit Dokumentasi</h2>

				  <div className="flex flex-col">
				    <Label htmlFor="hari_ke" className="text-left text-white">Hari Ke</Label>
				    <Input
				      type="number"
				      id="hari_ke"
				      value={data.hari_ke}
				      onChange={(e) => setData("hari_ke", Number(e.target.value))}
				      placeholder="1"
				      className="mt-1"
				    />
				  </div>

				  <div className="flex flex-col">
				    <Label htmlFor="judul" className="text-left text-white">Judul</Label>
				    <Input
				      type="text"
				      id="judul"
				      value={data.judul}
				      onChange={(e) => setData("judul", e.target.value)}
				      placeholder="Judul dokumentasi"
				      className="mt-1"
				    />
				  </div>

				  <div className="flex flex-col">
				    <Label htmlFor="deskripsi" className="text-left text-white">Deskripsi</Label>
				    <Textarea
				      id="deskripsi"
				      value={data.deskripsi}
				      onChange={(e) => setData("deskripsi", e.target.value)}
				      placeholder="Detail kegiatan hari ini"
				      className="mt-1 max-h-[150px] bg-white"
				    />
				  </div>

				  <div className="flex flex-col">
				    <Label htmlFor="link_gdrive" className="text-left text-white">Link Google Drive</Label>
				    <Input
				      type="url"
				      id="link_gdrive"
				      value={data.link_gdrive}
				      onChange={(e) => setData("link_gdrive", e.target.value)}
				      placeholder="https://drive.google.com/..."
				      className="mt-1"
				    />
				  </div>

				  <div className="flex justify-end">
				    <Button onClick={handleSubmit} className="bg-[#E58025] hover:bg-[#E58025]">
				      Simpan Perubahan
				    </Button>
				  </div>
				</div>


	);
}