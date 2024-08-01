import { DetailUser } from "@/Pages/Dashboard/detail-user/Page";

import React, { FC } from "react";

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

interface TentangPPLKFormProps {
    currentUser: DetailUser;
}

const TentangPPLKForm: FC<TentangPPLKFormProps> = ({ currentUser }) => {
    return (
        <div className="p-4 space-y-5 border rounded-md shadow-md">
            <h2 className="text-xl font-bold tracking-tight">Tentang PPLK</h2>

            {currentUser.kelompok ? (
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
                            value={currentUser.kelompok.nama_kelompok}
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
                            value={currentUser.kelompok.no_kelompok}
                            placeholder="73"
                            className="mt-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                    </div>
                </div>
            ) : null}

            <div className="flex flex-col w-full">
                <Label htmlFor="score-game-individu-maba" className="text-left">
                    Score Game Individu
                </Label>

                <Input
                    type="number"
                    id="score-game-individu-maba"
                    value={currentUser.score}
                    placeholder="73"
                    className="mt-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
            </div>

            <div className="flex flex-col w-full">
                <Label htmlFor="pilar-maba" className="text-left">
                    Pilar
                </Label>

                <Select>
                    <SelectTrigger className="w-full mt-1">
                        <SelectValue placeholder="Pilar" />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Pilars</SelectLabel>
                            <SelectItem value="pilar-1">Kerja Keras</SelectItem>
                            <SelectItem value="pilar-2">
                                Sharing is Caring
                            </SelectItem>
                            <SelectItem value="pilar-3">Equity</SelectItem>
                            <SelectItem value="pilar-4">
                                Hukum dan Tata Kelola Negara
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
                <Label className="text-left">Preview Sertifikat</Label>

                <div className="w-full min-h-[200px] rounded-md bg-gray-400/30 mt-1" />
            </div>
        </div>
    );
};

export default TentangPPLKForm;
