import DashboardLayout from "@/Layouts/DashboardLayout";

import React from "react";

import { Breadcrumbs } from "@/Components/ui/breadcrumbs";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { Textarea } from "@/Components/ui/textarea";

import logopplk from "!assets/logo-pplk-2024.png";

const breadcrumbItems = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Informasi Kelompok", link: "/dashboard/informasi-kelompok" },
    {
        title: "Edit Data Mahasiswa",
        link: "/dashboard/informasi-kelompok/edit-maba",
    },
];

export default function Page({ auth }) {
    return (
        <DashboardLayout user={auth.user}>
            <Breadcrumbs items={breadcrumbItems} />
            <h2 className="text-3xl font-bold tracking-tight">
                Edit Mahasiswa
            </h2>

            <div className="md:flex-row flex flex-col gap-2">
                {/* Foto & qr */}
                <div className="md:mx-0 mx-auto">
                    <div className="w-[200px] h-[220px] border">
                        <img src={logopplk} alt="logopplk" />
                    </div>

                    <Button
                        variant={"outline"}
                        className="w-[200px] py-2 border mt-3"
                    >
                        Edit Foto
                    </Button>

                    <div className="w-[200px] mt-5">
                        <h2 className="font-semibold text-center">Kode QR</h2>

                        <div className="border">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/220px-QR_code_for_mobile_English_Wikipedia.svg.png"
                                alt="qrcode"
                            />
                        </div>
                    </div>
                </div>

                {/* Form Informasi Umum */}
                <div className="md:flex-row flex flex-col w-full gap-2">
                    {/* form 1 */}
                    <div className="md:w-1/2 flex flex-col w-full gap-2">
                        <div className="h-fit flex-1 w-full p-4 space-y-5 border rounded-md shadow-md">
                            <h2 className="text-xl font-bold tracking-tight">
                                Informasi Umum
                            </h2>

                            <div className="flex flex-col">
                                <Label
                                    htmlFor="nama-maba"
                                    className="text-left"
                                >
                                    Nama
                                </Label>

                                <Input
                                    type="text"
                                    id="nama-maba"
                                    value=""
                                    placeholder="Chandra Budi Wijaya"
                                    className="mt-1"
                                />
                            </div>

                            <div className="flex flex-col">
                                <Label
                                    htmlFor="email-maba"
                                    className="text-left"
                                >
                                    Email
                                </Label>

                                <Input
                                    type="email"
                                    id="email-maba"
                                    value=""
                                    placeholder="Chandra Budi Wijaya"
                                    className="mt-1"
                                />
                            </div>

                            <div className="flex flex-col">
                                <Label htmlFor="nim-maba" className="text-left">
                                    NIM
                                </Label>

                                <Input
                                    type="text"
                                    id="nim-maba"
                                    value=""
                                    placeholder="Chandra Budi Wijaya"
                                    className="mt-1"
                                />
                            </div>

                            <div className="flex flex-col">
                                <Label
                                    htmlFor="prodi-maba"
                                    className="text-left"
                                >
                                    Prodi
                                </Label>

                                <Input
                                    type="text"
                                    id="prodi-maba"
                                    value=""
                                    placeholder="Chandra Budi Wijaya"
                                    className="mt-1"
                                />
                            </div>

                            <div className="flex flex-col">
                                <Label htmlFor="bio-maba" className="text-left">
                                    Bio
                                </Label>

                                <Textarea
                                    id="bio-maba"
                                    value=""
                                    placeholder="Chandra Budi Wijaya"
                                    className="mt-1"
                                />
                            </div>

                            <div className="flex flex-col">
                                <Label
                                    htmlFor="pita-maba"
                                    className="text-left"
                                >
                                    Pita
                                </Label>

                                <Input
                                    type="text"
                                    id="pita-maba"
                                    value=""
                                    placeholder="Chandra Budi Wijaya"
                                    className="mt-1"
                                />
                            </div>

                            <div className="flex flex-col">
                                <Label
                                    htmlFor="riwayat-penyakit-maba"
                                    className="text-left"
                                >
                                    Riwayat Penyakit
                                </Label>

                                <Input
                                    type="text"
                                    id="riwayat-penyakit-maba"
                                    value=""
                                    placeholder="Chandra Budi Wijaya"
                                    className="mt-1"
                                />
                            </div>
                        </div>

                        <div className="h-fit w-full p-4 space-y-5 border rounded-md shadow-md">
                            <h2 className="text-xl font-bold tracking-tight">
                                Reset Password
                            </h2>

                            <div className="flex flex-col">
                                <Label
                                    htmlFor="nama-maba"
                                    className="text-left"
                                >
                                    Password Baru
                                </Label>

                                <Input
                                    type="text"
                                    id="nama-maba"
                                    value=""
                                    placeholder="Chandra Budi Wijaya"
                                    className="mt-1"
                                />
                            </div>

                            <div className="flex flex-col">
                                <Label
                                    htmlFor="email-maba"
                                    className="text-left"
                                >
                                    Konfirmasi Password
                                </Label>

                                <Input
                                    type="email"
                                    id="email-maba"
                                    value=""
                                    placeholder="Chandra Budi Wijaya"
                                    className="mt-1"
                                />
                            </div>

                            <div className="flex justify-end">
                                <Button onClick={() => alert("Reset Password")}>
                                    Ubah Password
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 flex flex-col w-full gap-2">
                        <div className="p-4 space-y-5 border rounded-md shadow-md">
                            <h2 className="text-xl font-bold tracking-tight">
                                Sosial Media
                            </h2>

                            <div className="flex flex-col">
                                <Label
                                    htmlFor="instagram-maba"
                                    className="text-left"
                                >
                                    Instagram
                                </Label>

                                <Input
                                    type="text"
                                    id="instagram-maba"
                                    value=""
                                    placeholder="@chandrabudiwijaya"
                                    className="mt-1"
                                />
                            </div>

                            <div className="flex flex-col">
                                <Label
                                    htmlFor="linkedin-maba"
                                    className="text-left"
                                >
                                    LinkedIn
                                </Label>

                                <Input
                                    type="text"
                                    id="linkedin-maba"
                                    value=""
                                    placeholder="Chandra Budi"
                                    className="mt-1"
                                />
                            </div>
                        </div>

                        <div className="p-4 space-y-5 border rounded-md shadow-md">
                            <h2 className="text-xl font-bold tracking-tight">
                                Tentang PPLK
                            </h2>

                            <div className="flex w-full gap-2">
                                <div className="flex flex-col w-full">
                                    <Label
                                        htmlFor="nama-kelompok-maba"
                                        className="text-left"
                                    >
                                        Nama Kelompok
                                    </Label>

                                    <Input
                                        type="text"
                                        id="nama-kelompok-maba"
                                        value=""
                                        placeholder="Nawasena"
                                        className="mt-1"
                                    />
                                </div>

                                <div className="flex flex-col w-full">
                                    <Label
                                        htmlFor="nomor-kelompok-maba"
                                        className="text-left"
                                    >
                                        Nomor Kelompok
                                    </Label>

                                    <Input
                                        type="number"
                                        id="nomor-kelompok-maba"
                                        value=""
                                        placeholder="73"
                                        className="mt-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col w-full">
                                <Label
                                    htmlFor="score-game-kelompok-maba"
                                    className="text-left"
                                >
                                    Score Game Kelompok
                                </Label>

                                <Input
                                    type="number"
                                    id="score-game-kelompok-maba"
                                    value=""
                                    placeholder="73"
                                    className="mt-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                />
                            </div>

                            <div className="flex flex-col w-full">
                                <Label
                                    htmlFor="score-game-individu-maba"
                                    className="text-left"
                                >
                                    Score Game Individu
                                </Label>

                                <Input
                                    type="number"
                                    id="score-game-individu-maba"
                                    value=""
                                    placeholder="73"
                                    className="mt-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                />
                            </div>

                            <div className="flex flex-col w-full">
                                <Label
                                    htmlFor="pilar-maba"
                                    className="text-left"
                                >
                                    Pilar
                                </Label>

                                <Select>
                                    <SelectTrigger className="w-full mt-1">
                                        <SelectValue placeholder="Pilar" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Fruits</SelectLabel>
                                            <SelectItem value="apple">
                                                Apple
                                            </SelectItem>
                                            <SelectItem value="banana">
                                                Banana
                                            </SelectItem>
                                            <SelectItem value="blueberry">
                                                Blueberry
                                            </SelectItem>
                                            <SelectItem value="grapes">
                                                Grapes
                                            </SelectItem>
                                            <SelectItem value="pineapple">
                                                Pineapple
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="flex flex-col w-full">
                                <Label
                                    htmlFor="serti-kelulusan-pplk-maba"
                                    className="text-left"
                                >
                                    Sertifikat Kelulusan PPLK
                                </Label>

                                <Input
                                    type="text"
                                    id="serti-kelulusan-pplk-maba"
                                    value=""
                                    placeholder="https://drive.google.com/...."
                                    className="mt-1"
                                />
                            </div>

                            <div className="flex flex-col w-full">
                                <Label className="text-left">
                                    Preview Sertifikat
                                </Label>

                                <div className="w-full min-h-[200px] rounded-md bg-gray-400/30 mt-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reset Password */}
            <div></div>
        </DashboardLayout>
    );
}
