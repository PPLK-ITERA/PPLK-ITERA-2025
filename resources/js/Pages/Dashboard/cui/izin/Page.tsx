import { format } from "date-fns";
import { PageProps } from "vendor/laravel/breeze/stubs/inertia-react-ts/resources/js/types";

import React from "react";

import { router, useForm, usePage } from "@inertiajs/react";

import { ArrowLeft } from "lucide-react";

import DashboardLayout from "@/Layouts/DashboardLayout";

import { Breadcrumbs } from "@/Components/ui/breadcrumbs";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Separator } from "@/Components/ui/separator";
import { Toaster } from "@/Components/ui/toaster";
import { useToast } from "@/Components/ui/use-toast";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "CUI", link: "/dashboard/cui" },
  { title: "Izin", link: "/dashboard/cui/izin" },
];

function TextBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <p className="outline outline-1 py-1 px-2 rounded-full">{label}</p>
      <p className="outline outline-1 py-1 px-2 rounded-full">{value}</p>
    </div>
  );
}

function DateTimeBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-center gap-2 ">
      <div className="bg-gray-200 w-40 py-1 px-2 outline outline-1 outline-black/30 rounded-md font-medium">
        {label}
      </div>
      {value ? format(value, "dd/MM/yyyy HH:mm") : "-"}
    </div>
  );
}

function StatusPita({ pita }: { pita: string }) {
  if (pita === "hijau") {
    return (
      <div className="bg-green-500 flex justify-center items-center p-2 rounded-lg">
        <p className="font-bold text-lg text-white">Pita Hijau</p>
      </div>
    );
  } else if (pita === "kuning") {
    return (
      <div className="bg-yellow-500 flex justify-center items-center p-2 rounded-lg">
        <p className="font-bold text-lg text-white">Pita Kuning</p>
      </div>
    );
  } else {
    return (
      <div className="bg-red-500 flex justify-center items-center p-2 rounded-lg">
        <p className="font-bold text-lg text-white">Pita Merah</p>
      </div>
    );
  }
}

function Page({ auth, data, flash }) {
  const {
    data: formData,
    setData: setFormData,
    post,
    patch,
    processing,
  } = useForm({
    ket_izin: "",
  });
  const { toast } = useToast();

  React.useEffect(() => {
    if (flash.response) {
      if (flash.response.status === 200) {
        toast({
          title: "Berhasil",
          description: flash.response.message,
          variant: "default",
        });
      } else {
        toast({
          title: "Gagal",
          description: flash.response.message,
          variant: "destructive",
        });
      }
    }
  }, [flash, toast]);

  const handleIzin = () => {
    post(route("cui.izin", data.qr_code));
  };

  const handleCabutIzin = () => {
    patch(route("cui.destroy", data.qr_code));
  };

  return (
    <>
      <DashboardLayout user={auth.user}>
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Izin Peserta CUI
          </h2>
        </div>

        <Breadcrumbs items={breadcrumbItems} />
        <Separator />
        <Button
          variant="outline"
          onClick={() => router.replace(route("dashboard.cui"))}
        >
          <ArrowLeft className="mr-2" /> Kembali
        </Button>
        <div className="flex flex-col md:flex-row md:items-start justify-center items-center gap-4">
          <img
            className="w-64 h-96 rounded-lg drop-shadow-lg"
            src={data.photo_profile_url}
            alt="Foto Profil"
          />
          <div className="flex flex-col w-full gap-2 ml-3 outline rounded-md outline-1 outline-black/30 p-2">
            <p className="font-bold text-lg">Deskripsi</p>
            <TextBox value={data.nama} label="Nama" />
            <TextBox value={data.nim} label="NIM" />
            <TextBox value={data.prodi} label="Prodi" />
            <Separator />

            <div className="flex items-center gap-2">
              <p className="font-bold text-lg">Status</p>
              <p className="uppercase outline px-2 rounded-md bg-slate-200 font-medium outline-black/30 outline-1">
                {data.status}
              </p>
            </div>
            <StatusPita pita={data.pita} />
            <DateTimeBox label={"Waktu Hadir"} value={data.waktu_hadir} />
            <DateTimeBox label={"Waktu Izin"} value={data.waktu_izin} />
            <DateTimeBox
              label={"Waktu Selesai Izin"}
              value={data.selesai_izin}
            />
          </div>

          <div className="flex flex-col w-full gap-2 ml-3 outline rounded-md outline-1 outline-black/30 p-2">
            <p className="font-bold text-lg">Atur Izin</p>
            <Separator />
            {data.status === "hadir" ? (
              <div className="flex flex-col gap-2">
                <Input
                  onChange={(e) => setFormData("ket_izin", e.target.value)}
                  value={formData.ket_izin}
                  placeholder="Keterangan"
                />

                <Button
                  className="w-full"
                  disabled={processing}
                  onClick={handleIzin}
                >
                  Submit
                </Button>
              </div>
            ) : (
              <div>
                <p>
                  <span className="font-medium">Keterangan izin</span>
                  <br />
                  {data.ket_izin}
                </p>
                <Separator className="my-3" />
                <Button
                  className="w-full"
                  disabled={processing}
                  onClick={handleCabutIzin}
                >
                  Cabut Izin
                </Button>
              </div>
            )}
          </div>
        </div>
      </DashboardLayout>
      <Toaster />
    </>
  );
}

export default Page;
