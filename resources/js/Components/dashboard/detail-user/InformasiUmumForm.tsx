import { DetailUser } from "@/Pages/Dashboard/detail-user/Page";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import React, { FC, useEffect } from "react";

import { useForm } from "@inertiajs/react";

import { Button } from "@/Components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/Components/ui/command";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover";
import { ScrollArea, ScrollBar } from "@/Components/ui/scroll-area";
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

import { PRODI_DATA } from "@/lib/data/programStudi";
import { cn } from "@/lib/utils";

interface InformasiUmumFormProps {
    currentUser: DetailUser;
}

const InformasiUmumForm: FC<InformasiUmumFormProps> = ({ currentUser }) => {
    const { data, setData, put } = useForm({
        id: currentUser.id,
        name: currentUser.name,
        email: currentUser.email,
        nim: currentUser.nim,
        prodi_id: currentUser.prodi_id,
        pita: currentUser.penyakit?.pita,
        ket_penyakit: currentUser.penyakit?.ket_penyakit,
        bio: currentUser.bio,
        _method: "put",
    });

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");

    const currentProdi = PRODI_DATA.find((prodi) => {
        if (prodi.id === currentUser.prodi_id) {
            return prodi.value;
        }
    });

    const handleSubmit = () => {
        put(route("dashboard.user.edit-profil"));
    };

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
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
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
                    onChange={(e) => setData("email", e.target.value)}
                    value={data.email}
                    placeholder="12.chandra.099@pplkitera.com"
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
                    value={data.nim}
                    onChange={(e) => setData("nim", e.target.value)}
                    placeholder="124290020"
                    className="mt-1"
                />
            </div>

            <div className="flex flex-col">
                <Label htmlFor="prodi-maba" className="text-left">
                    Prodi
                </Label>

                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="justify-between w-full mt-1 font-normal"
                        >
                            {value
                                ? PRODI_DATA.find(
                                      (prodi) => prodi.value === value,
                                  )?.label
                                : `${currentProdi?.label || "Pilih Prodi"}`}
                            <CaretSortIcon className="shrink-0 w-4 h-4 ml-2 opacity-50" />
                        </Button>
                    </PopoverTrigger>

                    <PopoverContent>
                        <Command>
                            <CommandInput
                                placeholder="Cari Prodi..."
                                className="h-9"
                            />
                            <CommandEmpty>Data prodi tidak ada.</CommandEmpty>
                            <CommandGroup>
                                <ScrollArea className="h-[calc(100vh-64px)]">
                                    {PRODI_DATA.map((prodi) => (
                                        <CommandItem
                                            key={prodi.value}
                                            value={prodi.value}
                                            onSelect={(currentValue) => {
                                                setValue(
                                                    currentValue === value
                                                        ? ""
                                                        : currentValue,
                                                );
                                                setData("prodi_id", prodi.id);
                                                setOpen(false);
                                            }}
                                        >
                                            {prodi.label}
                                            <CheckIcon
                                                className={cn(
                                                    "ml-auto h-4 w-4",
                                                    value === prodi.value
                                                        ? "opacity-100"
                                                        : "opacity-0",
                                                )}
                                            />
                                        </CommandItem>
                                    ))}
                                    <ScrollBar orientation="vertical" />
                                </ScrollArea>
                            </CommandGroup>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>

            <div className="flex flex-col">
                <Label htmlFor="bio-maba" className="text-left">
                    Bio
                </Label>

                <Textarea
                    id="bio-maba"
                    value={data.bio}
                    onChange={(e) => setData("bio", e.target.value)}
                    placeholder="Pucuk ubi pucuk kangkung"
                    className="mt-1 max-h-[150px]"
                />
            </div>

            <div className="flex flex-col">
                <Label htmlFor="pita-maba" className="text-left">
                    Pita
                </Label>

                <Select
                    defaultValue={data.pita || ""}
                    onValueChange={(value) => {
                        setData("pita", value);
                    }}
                >
                    <SelectTrigger className={`w-full mt-1`}>
                        <SelectValue placeholder="Pilih Pita" />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Warna Pita</SelectLabel>
                            <SelectItem
                                value="hijau"
                                onClick={() => {
                                    setData("pita", "hijau");
                                }}
                                className="text-green-600"
                            >
                                Hijau
                            </SelectItem>
                            <SelectItem
                                value="kuning"
                                onClick={() => {
                                    setData("pita", "kuning");
                                }}
                                className="text-yellow-600"
                            >
                                Kuning
                            </SelectItem>
                            <SelectItem
                                value="merah"
                                onClick={() => {
                                    setData("pita", "merah");
                                }}
                                className="text-red-600"
                            >
                                Merah
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex flex-col">
                <Label htmlFor="riwayat-penyakit-maba" className="text-left">
                    Riwayat Penyakit
                </Label>

                <Input
                    type="text"
                    id="riwayat-penyakit-maba"
                    value={data.ket_penyakit}
                    onChange={(e) => setData("ket_penyakit", e.target.value)}
                    placeholder="GERD (Gastroesophageal Reflux Disease)"
                    className="mt-1 capitalize"
                />
            </div>

            <div className="flex justify-end">
                <Button onClick={handleSubmit}>Simpan Data</Button>
            </div>
        </div>
    );
};

export default InformasiUmumForm;
