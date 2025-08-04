import React, { useState, useEffect } from "react";

import { useForm, usePage } from "@inertiajs/react";

import { IconPlus } from "@tabler/icons-react";

import { Breadcrumbs } from "@/Components/ui/breadcrumbs";
import DashboardLayout from "@/Layouts/DashboardLayout";
import DokumentasiDay from "@/Components/dashboard/dokumentasi/dokumentasi-day";
import { Button } from "@/Components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";

const breadcrumbItems = [
  { title: "Ellysion Panel", link: "/dashboard" },
  { title: "dokumentasi", link: "/dashboard/dokumentasi" },
];


export default function Page({ auth, dokumentasi, foto_dokumentasi }) {
	const { props } = usePage();
  const [notification, setNotification] = useState({ message: null, type: null });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    // Periksa pesan sukses dan error dari props Inertia
    if (props.success) {
      setNotification({ message: props.success, type: 'success' });
    } else if (props.error) {
      setNotification({ message: props.error, type: 'error' });
    }

    // Mengatur timer untuk menghapus notifikasi
    if (props.success || props.error) {
      const timer = setTimeout(() => {
        setNotification({ message: null, type: null });
      }, 5000); // Pesan hilang setelah 5 detik

      return () => clearTimeout(timer); // Membersihkan timer
    }
  }, [props.success, props.error]);

	const { data, setData, post, processing, errors } = useForm({
      hari_ke: 1,
		  judul: "",
		  deskripsi: "",
		  link_gdrive: "",
  });

  const addDokumentasi = () => {
    post(route("dashboard.dokumentasi.store"));
  };

	return (
		<>
	    <DashboardLayout user={auth.user}>
	      <Breadcrumbs items={breadcrumbItems} />
	      <h2 className="text-3xl font-inter font-bold tracking-tight">Dokumentasi Kegiatan</h2>

	      <Dialog>
					<DialogTrigger>
				    <Button className="gap-2">
				      <IconPlus size={20} className="-ml-2" /> Tambah Dokumentasi
				    </Button>
				  </DialogTrigger>

				  <DialogContent className="font-inter sm:max-w-[425px]">
				    <DialogHeader>
				      <DialogTitle>Tambah Dokumentasi</DialogTitle>
				      <DialogDescription>
				        Tambahkan dokumentasi kegiatan berdasarkan hari.
				      </DialogDescription>
				    </DialogHeader>

				    <div className="grid gap-4 py-4">
				      <div className="flex flex-col">
				        <Label htmlFor="hari_ke" className="text-left">
				          Hari Ke
				        </Label>
				        <Input
				          id="hari_ke"
				          type="number"
				          value={data.hari_ke}
				          onChange={(e) => setData("hari_ke", Number(e.target.value))}
				          placeholder="Contoh: 1"
				          className="mt-1"
				          min="0"
				        />
				      </div>

				      <div className="flex flex-col">
				        <Label htmlFor="judul" className="text-left">
				          Judul
				        </Label>
				        <Input
				          id="judul"
				          value={data.judul}
				          onChange={(e) => setData("judul", e.target.value)}
				          placeholder="Judul dokumentasi"
				          className="mt-1"
				        />
				      </div>

				      <div className="flex flex-col">
				        <Label htmlFor="deskripsi" className="text-left">
				          Deskripsi
				        </Label>
				        <Textarea
				          id="deskripsi"
				          value={data.deskripsi}
				          onChange={(e) => setData("deskripsi", e.target.value)}
				          placeholder="Deskripsi kegiatan secara rinci"
				          className="mt-1"
				        />
				      </div>

				      <div className="flex flex-col">
				        <Label htmlFor="link_gdrive" className="text-left">
				          Link Google Drive
				        </Label>
				        <Input
				          id="link_gdrive"
				          type="url"
				          value={data.link_gdrive}
				          onChange={(e) => setData("link_gdrive", e.target.value)}
				          placeholder="https://drive.google.com/..."
				          className="mt-1"
				        />
				      </div>
				    </div>

				    <DialogFooter>
				      <Button variant="outline">Batalkan</Button>
				      <Button
				        type="submit"
				        onClick={() => {
				          addDokumentasi();
				          window.location.reload();
				        }}
				        disabled={processing}
				      >
				        Tambah
				      </Button>
				    </DialogFooter>

				    {processing && <p>Mengirim data...</p>}
				    {errors && (
				      <ul className="text-red-500 text-sm mt-2">
				        {Object.keys(errors).map((key) => (
				          <li key={key}>{errors[key]}</li>
				        ))}
				      </ul>
				    )}
				  </DialogContent>
				</Dialog>


	      <div className="lg:grid-cols-3 grid grid-cols-1 gap-4">
	      	{dokumentasi.map((item, index) => {
			      	return(
			      		// <div>
				      		// <a href="">
						      	<DokumentasiDay
						      		data={item}
						      		foto={foto_dokumentasi}
						      		user={auth.user}
						      	/>
						      // </a>
					      // </div>
				     );
		 			})}
		    </div>

		  	{/* Komponen Notifikasi */}
        {notification.message && (
          <div
            className={`
              absolute top-5 right-5 z-50 px-4 py-3 rounded 
              ${notification.type === 'success' ? 'bg-green-100 border border-green-400 text-green-700' : 'bg-red-100 border border-red-400 text-red-700'}
            `}
          >
            <span className="block sm:inline">{notification.message}</span>
          </div>
        )}

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