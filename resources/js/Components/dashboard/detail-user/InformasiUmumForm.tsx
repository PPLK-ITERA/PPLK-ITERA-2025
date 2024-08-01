import { DetailUser } from "@/Pages/Dashboard/detail-user/Page";

import React, { FC } from "react";

import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";

interface InformasiUmumFormProps {
    currentUser: DetailUser;
}

const InformasiUmumForm: FC<InformasiUmumFormProps> = ({ currentUser }) => {
    return (
        <div className="h-fit flex-1 w-full p-4 space-y-5 border rounded-md shadow-md">
            <h2 className="text-xl font-bold tracking-tight">Informasi Umum</h2>

            <div className="flex flex-col">
                <Label htmlFor="nama-maba" className="text-left">
                    Nama
                </Label>

                <Input
                    type="text"
                    id="nama-maba"
                    value={currentUser.name}
                    placeholder="Chandra Budi Wijaya"
                    className="mt-1"
                />
            </div>

            <div className="flex flex-col">
                <Label htmlFor="email-maba" className="text-left">
                    Email
                </Label>

                <Input
                    type="email"
                    id="email-maba"
                    value={currentUser.email}
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
                    value={currentUser.nim}
                    placeholder="Chandra Budi Wijaya"
                    className="mt-1"
                />
            </div>

            <div className="flex flex-col">
                <Label htmlFor="prodi-maba" className="text-left">
                    Prodi
                </Label>

                <Input
                    type="text"
                    id="prodi-maba"
                    value={currentUser.prodi_id}
                    placeholder="Teknik Informatika"
                    className="mt-1"
                />
            </div>

            <div className="flex flex-col">
                <Label htmlFor="bio-maba" className="text-left">
                    Bio
                </Label>

                <Textarea
                    id="bio-maba"
                    value={currentUser.bio}
                    placeholder="Chandra Budi Wijaya"
                    className="mt-1"
                />
            </div>

            {currentUser.penyakit ? (
                <div className="flex flex-col">
                    <Label htmlFor="pita-maba" className="text-left">
                        Pita
                    </Label>

                    <Input
                        type="text"
                        id="pita-maba"
                        value={currentUser.penyakit.pita}
                        placeholder="Chandra Budi Wijaya"
                        className="mt-1 capitalize"
                    />
                </div>
            ) : null}

            {currentUser.penyakit ? (
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
                        value={currentUser.penyakit.ket_penyakit}
                        placeholder="Chandra Budi Wijaya"
                        className="mt-1 capitalize"
                    />
                </div>
            ) : null}

            <div className="flex justify-end">
                <Button onClick={() => alert("Reset Password")}>
                    Simpan Data
                </Button>
            </div>
        </div>
    );
};

export default InformasiUmumForm;
