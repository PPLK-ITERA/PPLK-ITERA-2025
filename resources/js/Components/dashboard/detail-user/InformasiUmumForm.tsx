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

import { cn } from "@/lib/utils";

interface InformasiUmumFormProps {
    currentUser: DetailUser;
}

const PRODI_DATA = [
    { id: 1, value: "biologi", label: "BIOLOGI" },
    { id: 2, value: "farmasi", label: "FARMASI" },
    { id: 3, value: "fisika", label: "FISIKA" },
    { id: 4, value: "kimia", label: "KIMIA" },
    { id: 5, value: "matematika", label: "MATEMATIKA" },
    { id: 6, value: "sains aktuaria", label: "SAINS AKTUARIA" },
    {
        id: 7,
        value: "sains atmosfir dan keplanetan",
        label: "SAINS ATMOSFIR DAN KEPLANETAN",
    },
    { id: 8, value: "sains data", label: "SAINS DATA" },
    {
        id: 9,
        value: "sains lingkungan kelautan",
        label: "SAINS LINGKUNGAN KELAUTAN",
    },
    { id: 10, value: "arsitektur", label: "ARSITEKTUR" },
    { id: 11, value: "arsitektur lanskap", label: "ARSITEKTUR LANSKAP" },
    {
        id: 12,
        value: "desain komunikasi visual",
        label: "DESAIN KOMUNIKASI VISUAL",
    },
    { id: 13, value: "pariwisata", label: "PARIWISATA" },
    {
        id: 14,
        value: "rekayasa tata kelola air terpadu",
        label: "REKAYASA TATA KELOLA AIR TERPADU",
    },
    { id: 15, value: "teknik geomatika", label: "TEKNIK GEOMATIKA" },
    { id: 16, value: "teknik kelautan", label: "TEKNIK KELAUTAN" },
    { id: 17, value: "teknik lingkungan", label: "TEKNIK LINGKUNGAN" },
    { id: 18, value: "teknik perkeretaapian", label: "TEKNIK PERKERETAAPIAN" },
    { id: 19, value: "teknik sipil", label: "TEKNIK SIPIL" },
    {
        id: 20,
        value: "perencanaan wilayah dan kota",
        label: "PERENCANAAN WILAYAH DAN KOTA",
    },
    {
        id: 21,
        value: "rekayasa instrumentasi dan automasi",
        label: "REKAYASA INSTRUMENTASI DAN AUTOMASI",
    },
    { id: 22, value: "rekayasa kehutanan", label: "REKAYASA KEHUTANAN" },
    { id: 23, value: "rekayasa keolahragaan", label: "REKAYASA KEOLAHRAGAAN" },
    { id: 24, value: "rekayasa kosmetik", label: "REKAYASA KOSMETIK" },
    {
        id: 25,
        value: "rekayasa minyak dan gas",
        label: "REKAYASA MINYAK DAN GAS",
    },
    { id: 26, value: "teknik biomedis", label: "TEKNIK BIOMEDIS" },
    { id: 27, value: "teknik elektro", label: "TEKNIK ELEKTRO" },
    { id: 28, value: "teknik fisika", label: "TEKNIK FISIKA" },
    { id: 29, value: "teknik geofisika", label: "TEKNIK GEOFISIKA" },
    { id: 30, value: "teknik geologi", label: "TEKNIK GEOLOGI" },
    { id: 31, value: "teknik industri", label: "TEKNIK INDUSTRI" },
    { id: 32, value: "teknik informatika", label: "TEKNIK INFORMATIKA" },
    { id: 33, value: "teknik kimia", label: "TEKNIK KIMIA" },
    { id: 34, value: "teknik material", label: "TEKNIK MATERIAL" },
    { id: 35, value: "teknik mesin", label: "TEKNIK MESIN" },
    { id: 36, value: "teknik pertambangan", label: "TEKNIK PERTAMBANGAN" },
    { id: 37, value: "teknik sistem energi", label: "TEKNIK SISTEM ENERGI" },
    { id: 38, value: "teknik telekomunikasi", label: "TEKNIK TELEKOMUNIKASI" },
    { id: 39, value: "teknik biosistem", label: "TEKNIK BIOSISTEM" },
    {
        id: 40,
        value: "teknologi industri pertanian",
        label: "TEKNOLOGI INDUSTRI PERTANIAN",
    },
    { id: 41, value: "teknologi pangan", label: "TEKNOLOGI PANGAN" },
];

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
                    className="mt-1"
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
