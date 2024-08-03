import { QRCodeCanvas } from "qrcode.react";
import { PageProps } from "vendor/laravel/breeze/stubs/inertia-react-ts/resources/js/types";

import React, { useEffect, useState } from "react";

import { useForm, usePage } from "@inertiajs/react";

import { IconPencil } from "@tabler/icons-react";

import DashboardLayout from "@/Layouts/DashboardLayout";

import InformasiUmumForm from "@/Components/dashboard/detail-user/InformasiUmumForm";
import ResetPasswordForm from "@/Components/dashboard/detail-user/ResetPasswordForm";
import SosialMediaForm from "@/Components/dashboard/detail-user/SosialMediaForm";
import TentangPPLKForm from "@/Components/dashboard/detail-user/TentangPPLKForm";
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
import { Toaster } from "@/Components/ui/toaster";
import { useToast } from "@/Components/ui/use-toast";

import { UserAuthProps } from "@/lib/types/User";

// import { User } from "@/lib/types/User";
import logopplk from "!assets/logo-pplk-2024.png";

export interface DetailUser {
    bio: string | number | readonly string[] | undefined;
    email: string;
    id: number;
    instagram_url: string;
    isFirstTime: boolean;
    isKetua: number;
    kelompok_id: number;
    link_sertif: string | null;
    linkedin_url: string;
    name: string;
    nim: string;
    penyakit_id: number;
    photo_profile_url: string;
    prodi_id: number;
    pilar: {
        id: number;
        pilar_name: string;
    };
    role_id: number;
    score: number;
    view_count: number;
    qrcode: {
        code: string;
        id: number;
        user_id: number;
    } | null;
    penyakit: {
        ket_penyakit: string;
        pita: string;
    } | null;
    kelompok: {
        daplok_id: number;
        id: number;
        logo_kelompok: string;
        mentor_id: number;
        nama_kelompok: string;
        no_kelompok: string;
    };
}

interface flashresponse extends PageProps {
    flash: {
        response: {
            status: number;
            message: string;
        };
    };
}

export default function Page({ response }) {
    const { toast } = useToast();

    type MyPage = PageProps<{
        auth: {
            user: UserAuthProps;
        };
    }>;

    const { auth } = usePage<MyPage>().props;
    const { flash } = usePage<flashresponse>().props;

    useEffect(() => {
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

    const breadcrumbItems = [
        { title: "Dashboard", link: "/dashboard" },
        {
            title: "Edit Data User",
            link: route("dashboard.user.edit", response.data.id),
        },
    ];

    const currentUser: DetailUser = response.data;

    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState("");

    const { data, setData, post } = useForm({
        id: currentUser.id,
        photo: null,
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
                setData("photo", null);
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
                setData("photo", null);
                setPreviewUrl("");
                return;
            }

            // If all checks pass, update state and set the file for upload
            setFile(file);
            setPreviewUrl(URL.createObjectURL(file));
            setData("photo", file);
        } else {
            setFile(null);
            setData("photo", null);
            setPreviewUrl("");
        }
    };

    const changeProfile = () => {
        post(route("dashboard.user.edit-foto"));
    };

    return (
        <>
            <DashboardLayout user={auth.user}>
                <Breadcrumbs items={breadcrumbItems} />
                <h2 className="text-3xl font-bold tracking-tight">
                    Edit Data User
                </h2>

                <div className="md:flex-row flex flex-col gap-2">
                    {/* Foto & qr */}
                    <div className="md:mx-0 mx-auto">
                        <div className="w-[200px] h-[220px] border rounded-sm overflow-hidden">
                            <img
                                src={currentUser.photo_profile_url}
                                alt={`${currentUser.name} photo profile`}
                                className="w-full h-full bg-center bg-cover"
                            />
                        </div>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className="w-[200px] py-2 border mt-3"
                                >
                                    Edit Foto Profile
                                </Button>
                            </DialogTrigger>

                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>
                                        Edit Foto Profil {currentUser.name}
                                    </DialogTitle>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="relative flex items-center justify-center mx-auto rounded-full">
                                        <div className="w-36 h-36 flex items-center justify-center overflow-hidden border rounded-full">
                                            {previewUrl ? (
                                                <img
                                                    src={previewUrl}
                                                    alt="preview-image-kelompok"
                                                    className="object-cover object-center w-full h-full"
                                                />
                                            ) : (
                                                <img
                                                    src={
                                                        currentUser.photo_profile_url
                                                    }
                                                    alt={`${currentUser.name} photo profile`}
                                                    className="object-cover object-center w-full h-full"
                                                />
                                            )}
                                        </div>

                                        <Label htmlFor="upload-logo-kelompok">
                                            <IconPencil
                                                size={32}
                                                color="black"
                                                className="-mt-[1px] cursor-pointer absolute bottom-1 right-1 border shadow-lg bg-white rounded-full p-1"
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
                                </div>
                                <DialogFooter>
                                    <DialogClose asChild>
                                        <Button variant={"outline"}>
                                            Batalkan
                                        </Button>
                                    </DialogClose>
                                    <DialogClose asChild>
                                        <Button onClick={changeProfile}>
                                            Simpan
                                        </Button>
                                    </DialogClose>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                        <div className="w-[200px] mt-5">
                            <h2 className="font-semibold text-center">
                                Kode QR
                            </h2>

                            <div className="border">
                                {currentUser.qrcode ? (
                                    <QRCodeCanvas
                                        value={currentUser.qrcode.code}
                                        size={200}
                                        includeMargin={true}
                                        level="H"
                                        width={500}
                                        height={500}
                                    />
                                ) : null}
                            </div>
                        </div>
                    </div>

                    {/* Form Informasi Umum */}
                    <div className="md:flex-row flex flex-col w-full gap-2">
                        {/* form 1 */}
                        <div className="md:w-1/2 flex flex-col w-full gap-2">
                            <InformasiUmumForm currentUser={currentUser} />
                            <ResetPasswordForm currentUser={currentUser} />
                        </div>

                        <div className="md:w-1/2 flex flex-col w-full gap-2">
                            {currentUser.role_id === 1 ||
                            currentUser.role_id === 2 ||
                            currentUser.role_id === 3 ||
                            currentUser.role_id === 4 ? (
                                <SosialMediaForm currentUser={currentUser} />
                            ) : null}
                            {currentUser.role_id === 1 ||
                            currentUser.role_id === 2 ||
                            currentUser.role_id === 3 ||
                            currentUser.role_id === 4 ? (
                                <TentangPPLKForm currentUser={currentUser} />
                            ) : null}
                        </div>
                    </div>
                </div>

                {/* Reset Password */}
                <div></div>
            </DashboardLayout>
            <Toaster />
        </>
    );
}
