import { PageProps } from "vendor/laravel/breeze/stubs/inertia-react-ts/resources/js/types";

import React, { useEffect, useState } from "react";

import { Link, useForm, usePage } from "@inertiajs/react";

import { IconPencil } from "@tabler/icons-react";

import DashboardLayout from "@/Layouts/DashboardLayout";

import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { KelompokClient } from "@/Components/tables/kelompok/client";
import { Breadcrumbs } from "@/Components/ui/breadcrumbs";
import { Button, buttonVariants } from "@/Components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Toaster } from "@/Components/ui/toaster";
import { useToast } from "@/Components/ui/use-toast";

import { useFlashToast } from "@/lib/hooks/useFlashToast";
import { Kelompok } from "@/lib/types/InformasiKelompok";

import logopplk from "!assets/logo-pplk-2024.png";

const breadcrumbItems = [
  { title: "Ellysion Panel", link: "/dashboard" },
  { title: "Informasi Kelompok", link: "/dashboard/informasi-kelompok" },
];

interface flashresponse extends PageProps {
  flash: {
    response: {
      status: number;
      message: string;
    };
  };
}

export default function Page({ auth }: { auth: any }) {
  const { toast } = useToast();

  useFlashToast();

  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [dataKelompok, setDataKelompok] = useState<Kelompok>();

  const { data, setData, post } = useForm({
    nama_kelompok: "",
    logo_kelompok: null,
    _method: "put",
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Check if the file is an image
      if (!file.type.startsWith("image")) {
        toast({
          title: "Invalid File Type",
          description: "Tolong pilih file gambar.",
          variant: "destructive",
        });
        setFile(null);
        setData("logo_kelompok", null);
        setPreviewUrl("");
        return;
      }

      // Check if the file size exceeds 2MB
      if (file.size > 2048000) {
        // 2MB in bytes
        toast({
          title: "File Too Large",
          description: "Pilih foto yang berukuran dibawah 2MB.",
          variant: "destructive",
        });
        setFile(null);
        setData("logo_kelompok", null);
        setPreviewUrl("");
        return;
      }

      // If all checks pass, update state and set the file for upload
      setFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setData("logo_kelompok", file);
    } else {
      setFile(null);
      setData("logo_kelompok", null);
      setPreviewUrl("");
    }
  };

  const getDataKelompok = async () => {
    const response = await fetch(route("dashboard.kelompok.data"), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    setDataKelompok(data);
    setData("nama_kelompok", data.nama_kelompok);
  };

  useEffect(() => {
    getDataKelompok();
  }, []);

  // useEffect(() => {}, []);

  const changeDataKelompok = () => {
    post(route("dashboard.kelompok.update"));
  };

  return (
    <>
      <DashboardLayout user={auth.user}>
        <Breadcrumbs items={breadcrumbItems} />
        <h2 className="text-3xl font-semibold font-inter tracking-tight">
          Informasi Kelompok
        </h2>

        <div className="md:flex">
          <div className="md:mx-0 mx-auto overflow-hidden border rounded-lg">
            {dataKelompok?.logo_kelompok ? (
              <img
                src={dataKelompok?.logo_kelompok}
                alt={`logo kelompok ${dataKelompok?.nama_kelompok}`}
                className="w-80 mx-auto"
              />
            ) : (
              <img
                src={logopplk}
                alt="logopplk"
                className="w-80 mx-auto"
              />
            )}
          </div>

          <div className="mx-5 md:w-96 w-auto">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-xl font-medium text-semibold">
                    Kelompok {dataKelompok?.no_kelompok}
                  </CardTitle>

                  <Dialog>
                        <DialogTrigger asChild>
                          <IconPencil className="ml-2 -mt-[1px] cursor-pointer" />
                        </DialogTrigger>

                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Edit Informasi Kelompok</DialogTitle>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="w-36 h-36 relative flex items-center justify-center mx-auto border rounded-full">
                              {previewUrl ? (
                                <div className="w-36 h-36 overflow-hidden rounded-full">
                                  <img
                                    src={previewUrl}
                                    alt="preview-image-kelompok w-full h-full"
                                  />
                                </div>
                              ) : (
                                <div className="w-36 h-36 overflow-hidden rounded-full">
                                  <img
                                    src={
                                      dataKelompok?.logo_kelompok
                                        ? dataKelompok?.logo_kelompok
                                        : logopplk
                                    }
                                    alt={`logo kelompok ${dataKelompok?.nama_kelompok}`}
                                  />
                                </div>
                              )}

                              <Label htmlFor="upload-logo-kelompok">
                                <IconPencil
                                  size={32}
                                  color="white"
                                  className="-mt-[1px] cursor-pointer absolute bottom-1 right-1 bg-primary border rounded-full p-1"
                                />
                              </Label>

                              <Input
                                type="file"
                                onChange={handleImageChange}
                                accept="image/*"
                                className="hidden"
                                id="upload-logo-kelompok"
                              />
                            </div>

                            <div className="flex flex-col">
                              <Label htmlFor="nama-kelompok" className="text-left">
                                Nama Kelompok
                              </Label>

                              <Input
                                id="nama-kelompok"
                                value={data.nama_kelompok}
                                onChange={(e) => setData("nama_kelompok", e.target.value)}
                                placeholder="Nama Kelompok Anda"
                                className="mt-1"
                              />
                            </div>
                          </div>
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button
                                variant={"outline"}
                                // disabled={processing}
                              >
                                Batalkan
                              </Button>
                            </DialogClose>
                            <DialogClose asChild>
                              <Button
                                type="submit"
                                onClick={changeDataKelompok}
                                // disabled={processing}
                              >
                                Simpan
                              </Button>
                            </DialogClose>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
              </CardHeader>
              {/*<p className="line-clamp-1 text-lg capitalize">*/}
                {/*Kelompok {dataKelompok?.no_kelompok}*/}
              {/*</p>*/}
              <CardContent>
                <div className="mt-2 flex justify-start gap-2 font-inter font-semibold">
                  <div>
                    <Label className="text-left">
                      Nama Kelompok
                    </Label>
                    <div className="flex">
                      <p className="line-clamp-1 text-lg capitalize">
                        {dataKelompok?.nama_kelompok}
                      </p>

                      
                    </div>
                  </div>
                </div>

                <div className="max-w-sm gap-2 font-inter">
                  <div className="w-full mt-5">
                    <h2 className="font-semibold">Daplok</h2>

                    <div className="">
                      <p className="text-lg font-bold">{dataKelompok?.daplok.name}</p>
                      <p className="font-semibold">
                        {dataKelompok?.daplok.prodi.nama_prodi}
                      </p>
                    </div>
                  </div>

                  <div className="w-full mt-5">
                    <h2 className="font-semibold">Mentor</h2>

                    <div className="">
                      <p className="text-lg font-bold">{dataKelompok?.mentor.name}</p>
                      <p className="font-semibold">
                        {dataKelompok?.mentor.prodi.nama_prodi}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/*<div className="flex flex-col items-center justify-center w-auto md:max-w-sm mx-5 px-10 py-5">
          <h2 className="font-semibold">Absensi Maba</h2>

          <Link
            href={route("dashboard.absensi-maba/presensi")}
            className={`${buttonVariants()} mt-2`}
          >
            Mulai Absen Maba
          </Link>
        </div>*/}

        <KelompokClient />
      </DashboardLayout>
      <Toaster />
    </>
  );
}
