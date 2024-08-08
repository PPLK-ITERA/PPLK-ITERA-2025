import { DetailUser } from "@/Pages/Dashboard/detail-user/Page";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import React, { useEffect, useState } from "react";

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

import { PRODI_DATA } from "@/lib/data/programStudi";
import { cn } from "@/lib/utils";

interface kelompokData {
    id: number;
    nama_kelompok: string;
    no_kelompok: number;
}

export default function CreateUser() {
    const { data, setData, post } = useForm({
        name: "",
        kelompok_id: 0,
        prodi_id: 0,
        role_id: 0,
    });

    const [openProdi, setOpenProdi] = useState(false);
    const [openKelompok, setOpenKelompok] = useState(false);
    const [prodiValue, setProdiValue] = useState("");
    const [kelompokValue, setKelompokValue] = useState("");
    const [kelompokData, setKelompokData] = useState<kelompokData[]>([]);

    const [selectedRole, setSelectedRole] = useState(""); // State untuk menyimpan hari yang dipilih

    const handleChangeRole = (value: string) => {
        setSelectedRole(value); // Update state ketika pengguna memilih hari

        setData("role_id", parseInt(value));
    };

    const handleCreateUser = () => {
        post(route("dashboard.user.store"));
    };

    const getProdiData = async () => {
        const response = await fetch(route("dashboard.user.data.kelompok"), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        const data = await response.json();
        setKelompokData(data);
        console.log(data);
    };

    useEffect(() => {
        getProdiData();
    }, []);

    return (
        <div className="h-fit flex-1 w-full p-4 space-y-5 border rounded-md shadow-md">
            <h2 className="text-xl font-bold tracking-tight">Form Data User</h2>

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
                <Label htmlFor="kelompok" className="text-left">
                    Kelompok
                </Label>

                <Popover open={openKelompok} onOpenChange={setOpenKelompok}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={openKelompok}
                            className="justify-between w-full mt-1 font-normal"
                        >
                            {kelompokValue
                                ? kelompokData.find(
                                      (kelompok) =>
                                          JSON.stringify(kelompok.id) ===
                                          kelompokValue,
                                  )?.id
                                : `Pilih Kelompok`}
                            <CaretSortIcon className="shrink-0 w-4 h-4 ml-2 opacity-50" />
                        </Button>
                    </PopoverTrigger>

                    <PopoverContent>
                        <Command>
                            <CommandInput
                                placeholder="Cari Kelompok..."
                                className="h-9"
                            />
                            <CommandEmpty>
                                Data kelompok tidak ada.
                            </CommandEmpty>
                            <CommandGroup>
                                <ScrollArea className="h-[calc(50vh-64px)]">
                                    {kelompokData.length > 0
                                        ? kelompokData.map(
                                              (kelompok, index) => (
                                                  <CommandItem
                                                      key={index}
                                                      value={JSON.stringify(
                                                          kelompok.id,
                                                      )}
                                                      onSelect={(
                                                          currentValue,
                                                      ) => {
                                                          setKelompokValue(
                                                              currentValue ===
                                                                  kelompokValue
                                                                  ? ""
                                                                  : currentValue,
                                                          );
                                                          setData(
                                                              "kelompok_id",
                                                              kelompok.id,
                                                          );
                                                          setOpenKelompok(
                                                              false,
                                                          );
                                                      }}
                                                  >
                                                      {kelompok.nama_kelompok}
                                                      <CheckIcon
                                                          className={cn(
                                                              "ml-auto h-4 w-4",
                                                              kelompokValue ===
                                                                  JSON.stringify(
                                                                      kelompok.id,
                                                                  )
                                                                  ? "opacity-100"
                                                                  : "opacity-0",
                                                          )}
                                                      />
                                                  </CommandItem>
                                              ),
                                          )
                                        : null}
                                    <ScrollBar orientation="vertical" />
                                </ScrollArea>
                            </CommandGroup>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>

            <div className="flex flex-col">
                <Label htmlFor="prodi-maba" className="text-left">
                    Prodi
                </Label>

                <Popover open={openProdi} onOpenChange={setOpenProdi}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={openProdi}
                            className="justify-between w-full mt-1 font-normal"
                        >
                            {prodiValue
                                ? PRODI_DATA.find(
                                      (prodi) => prodi.value === prodiValue,
                                  )?.label
                                : `Pilih Prodi`}
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
                                <ScrollArea className="h-[calc(50vh-64px)]">
                                    {PRODI_DATA.map((prodi) => (
                                        <CommandItem
                                            key={prodi.value}
                                            value={prodi.value}
                                            onSelect={(currentValue) => {
                                                setProdiValue(
                                                    currentValue === prodiValue
                                                        ? ""
                                                        : currentValue,
                                                );
                                                setData("prodi_id", prodi.id);
                                                setOpenProdi(false);
                                            }}
                                        >
                                            {prodi.label}
                                            <CheckIcon
                                                className={cn(
                                                    "ml-auto h-4 w-4",
                                                    prodiValue === prodi.value
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
                <Label htmlFor="role" className="text-left">
                    Role
                </Label>

                <Select
                    onValueChange={handleChangeRole}
                    defaultValue={selectedRole}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Pilih Role" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Opsi Role</SelectLabel>

                            <SelectItem value="1">Maba</SelectItem>
                            <SelectItem value="2">Daplok</SelectItem>
                            <SelectItem value="4">Mentor</SelectItem>
                            <SelectItem value="5">Pjprodi</SelectItem>
                            <SelectItem value="6">Korlap</SelectItem>
                            <SelectItem value="7">Mamet</SelectItem>
                            <SelectItem value="8">CustomerService</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex justify-end">
                <Button onClick={handleCreateUser}>Tambah Data</Button>
            </div>
        </div>
    );
}
