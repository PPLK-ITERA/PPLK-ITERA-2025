import { format } from "date-fns";
import { PageProps } from "vendor/laravel/breeze/stubs/inertia-react-ts/resources/js/types";

import React, { useEffect, useState } from "react";

import { router, useForm, usePage } from "@inertiajs/react";

import { ArrowLeft } from "lucide-react";

import DashboardLayout from "@/Layouts/DashboardLayout";

import { Breadcrumbs } from "@/Components/ui/breadcrumbs";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Separator } from "@/Components/ui/separator";
import { Toaster } from "@/Components/ui/toaster";
import { useToast } from "@/Components/ui/use-toast";

import { checkImageExists } from "@/lib/utils";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "CUI", link: "/dashboard/cui" },
  { title: "Izin", link: "/dashboard/cui/izin" },
];

function TextBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <p className="outline outline-1 px-2 py-1 rounded-full">{label}</p>
      <p className="outline outline-1 px-2 py-1 rounded-full">{value}</p>
    </div>
  );
}

function DateTimeBox({ value, label }: { value: string; label: string }) {
  return (
    <div className=" flex items-center gap-2">
      <div className="outline outline-1 outline-black/30 w-40 px-2 py-1 font-medium bg-gray-200 rounded-md">
        {label}
      </div>
      {value ? format(value, "dd/MM/yyyy HH:mm") : "-"}
    </div>
  );
}

function StatusPita({ pita, riwayat }: { pita: string; riwayat: string }) {
  return (
    <>
      {pita === "hijau" ? (
        <div className="flex items-center justify-center p-2 bg-green-500 rounded-lg">
          <p className="text-lg font-bold text-white">Pita Hijau</p>
        </div>
      ) : pita === "kuning" ? (
        <div className="flex items-center justify-center p-2 bg-yellow-500 rounded-lg">
          <p className="text-lg font-bold text-white">Pita Kuning</p>
        </div>
      ) : (
        <div className="flex items-center justify-center p-2 bg-red-500 rounded-lg">
          <p className="text-lg font-bold text-white">Pita Merah</p>
        </div>
      )}{" "}
      <div className=" flex items-center gap-2">
        <div className="outline outline-1 outline-black/30 w-40 px-2 py-1 font-medium bg-gray-200 rounded-md">
          Riwayat Penyakit
        </div>
        {riwayat}
      </div>
    </>
  );
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
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const testImage = async () => {
    const url = data.photo_profile_url; // Replace with your image URL
    const defaultUrl =
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"; // Replace with your default image URL
    const finalUrl = await checkImageExists(url, defaultUrl);
    setImageSrc(finalUrl as string);
  };

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
      setFormData("ket_izin", "");
    }
  }, [flash, toast]);

  useEffect(() => {
    testImage();
  }, []);

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
        <div className="md:flex-row md:items-start flex flex-col items-center justify-center gap-4">
          <img
            className="h-96 drop-shadow-lg object-cover w-64 rounded-lg"
            src={
              imageSrc ??
              "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
            }
            alt="Foto Profil"
          />
          <div className="outline outline-1 outline-black/30 flex flex-col w-full gap-2 p-2 ml-3 rounded-md">
            <p className="text-lg font-bold">Deskripsi</p>
            <TextBox value={data.nama} label="Nama" />
            <TextBox value={data.nim} label="NIM" />
            <TextBox value={data.prodi} label="Prodi" />
            <Separator />

            <div className="flex items-center gap-2">
              <p className="text-lg font-bold">Status</p>
              <p className="outline bg-slate-200 outline-black/30 outline-1 px-2 font-medium uppercase rounded-md">
                {data.status}
              </p>
            </div>
            <StatusPita pita={data.pita} riwayat={data.riwayat} />
            <DateTimeBox label={"Waktu Hadir"} value={data.waktu_hadir} />
            <DateTimeBox label={"Waktu Izin"} value={data.waktu_izin} />
            <DateTimeBox
              label={"Waktu Selesai Izin"}
              value={data.selesai_izin}
            />
          </div>

          <div className="outline outline-1 outline-black/30 flex flex-col w-full gap-2 p-2 ml-3 rounded-md">
            <p className="text-lg font-bold">Atur Izin</p>
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
