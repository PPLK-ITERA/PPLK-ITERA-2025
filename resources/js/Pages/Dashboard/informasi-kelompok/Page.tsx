import DashboardLayout from "@/Layouts/DashboardLayout";

import React, { useState } from "react";

import { useForm } from "@inertiajs/react";

import { IconPencil } from "@tabler/icons-react";

import { KelompokClient } from "@/Components/tables/kelompok/client";
import { Breadcrumbs } from "@/Components/ui/breadcrumbs";
import { Button } from "@/Components/ui/button";
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

import logopplk from "!assets/logo-pplk-2024.png";

const breadcrumbItems = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Informasi Kelompok", link: "/dashboard/informasi-kelompok" },
];

export default function Page({ auth, response }) {
    const {
        data,
        setData,
        put,
        delete: destroy,
        processing,
        errors,
    } = useForm({
        id: 0,
        teks_pertanyaan: "",
        teks_jawaban: "",
    });

    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState("");

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith("image")) {
            setFile(file);
            setPreviewUrl(URL.createObjectURL(file));
        } else {
            setFile(null);
            setPreviewUrl("");
            alert("Please select an image file.");
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!file) {
            alert("Please upload an image first.");
            return;
        }

        const formData = new FormData();
        formData.append("image", file);

        try {
            const response = await fetch("/your-upload-endpoint", {
                method: "POST",
                body: formData,
            });
            const result = await response.json();
            console.log(result); // Handle the server response
        } catch (error) {
            console.error("Error uploading the image:", error);
        }
    };

    return (
        <DashboardLayout user={auth.user}>
            <Breadcrumbs items={breadcrumbItems} />
            <h2 className="text-3xl font-bold tracking-tight">
                Informasi Kelompok
            </h2>

            <div className="w-36 h-36 md:mx-0 mx-auto border rounded-full">
                <img src={logopplk} alt="logopplk" />
            </div>

            <div className="flex items-center justify-start gap-2 font-semibold">
                <p className="text-lg">Kelompok 73 Nawasena</p>
                <Dialog>
                    <DialogTrigger asChild>
                        <IconPencil className="-mt-[1px] cursor-pointer" />
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Edit Informasi Kelompok</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="w-36 h-36 relative flex items-center justify-center mx-auto border rounded-full">
                                {previewUrl ? (
                                    <img
                                        src={previewUrl}
                                        alt="preview-image-kelompok"
                                    />
                                ) : (
                                    <img src={logopplk} alt="logopplk" />
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
                                <Label
                                    htmlFor="nama-kelompok"
                                    className="text-left"
                                >
                                    Nama Kelompok
                                </Label>

                                <Input
                                    id="nama-kelompok"
                                    value={data.teks_pertanyaan}
                                    onChange={(e) =>
                                        setData(
                                            "teks_pertanyaan",
                                            e.target.value,
                                        )
                                    }
                                    placeholder="Nama Kelompok Anda"
                                    className="mt-1"
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button
                                    variant={"outline"}
                                    disabled={processing}
                                >
                                    Batalkan
                                </Button>
                            </DialogClose>
                            <DialogClose asChild>
                                <Button
                                    type="submit"
                                    // onClick={() => editFAQ(faq)}
                                    disabled={processing}
                                >
                                    Simpan
                                </Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="flex max-w-sm gap-2">
                <div className="w-full px-2 py-3 border-2 rounded-md">
                    <h2 className="font-bold">Daplok</h2>

                    <div className="mt-5">
                        <p className="text-lg font-bold">Siti Abdiyah</p>
                        <p className="font-semibold">Teknik Sipil</p>
                    </div>
                </div>

                <div className="w-full px-2 py-3 border-2 rounded-md">
                    <h2 className="font-bold">Mentor</h2>

                    <div className="mt-5">
                        <p className="text-lg font-bold">Ujang Pance</p>
                        <p className="font-semibold">Teknik Sipil</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center max-w-sm px-10 py-5 border-2 rounded-md">
                <h2 className="font-semibold">Absensi Maba</h2>

                <Button className="mt-3">Mulai Absen Maba</Button>
            </div>

            <KelompokClient />
        </DashboardLayout>
    );
}
