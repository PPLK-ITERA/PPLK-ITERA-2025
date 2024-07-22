import DashboardLayout from "@/Layouts/DashboardLayout";
import { useDebouncedCallback } from "use-debounce";

import { useState } from "react";

import { useForm } from "@inertiajs/react";

import { Check, CheckCircle2Icon, ChevronsUpDown } from "lucide-react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/dashboard/ui/card";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/Components/dashboard/ui/tabs";
import { UserClient } from "@/Components/tables/user-tables/client";
import { Breadcrumbs } from "@/Components/ui/breadcrumbs";
import { Button } from "@/Components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/Components/ui/command";
import { Input } from "@/Components/ui/input";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover";

import { users } from "@/constants/data";

import { cn } from "@/lib/utils";

const breadcrumbItems = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "CUI", link: "/dashboard/cui" },
];

export default function Page({ auth, response }) {
    const { data, setData, post, processing } = useForm({
        nim: "",
    });
    console.log(response);
    const handleSubmit = (e) => {
        setData("nim", e.target.value);
        debounced(e.target.value);
    };

    const debounced = useDebouncedCallback(
        // function
        (value) => {
            post(route("dashboard.cui"));
        },
        // delay in ms
        500,
    );

    return (
        <DashboardLayout user={auth.user}>
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">
                    CUI Monitoring System
                </h2>
            </div>

            <Breadcrumbs items={breadcrumbItems} />

            {/* Start ComboBox */}
            {/* <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="md:w-96 w-64 justify-between"
                    >
                        {value
                            ? frameworks.find((framework) => framework.value === value)?.label
                            : "Select framework..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="md:w-96 w-64 p-0">
                    <Command>
                        <CommandGroup>
                            <CommandList>
                                {frameworks.map((framework) => (
                                    <CommandItem
                                        key={framework.value}
                                        value={framework.value}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue === value ? "" : currentValue)
                                            setOpen(false)
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                value === framework.value ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        {framework.label}
                                    </CommandItem>
                                ))}
                            </CommandList>
                        </CommandGroup>
                    </Command>
                </PopoverContent>
            </Popover> */}
            {/* End ComboBox */}

            <Tabs defaultValue="presensi" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="presensi">Presensi</TabsTrigger>
                    <TabsTrigger value="logbook">Log Book</TabsTrigger>
                </TabsList>
                <TabsContent value="presensi" className="space-y-4">

                    <div className="grid-cols-2 lg:grid-cols-4 grid gap-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                <CardTitle className="text-sm font-medium text-green-500">
                                    Maba Pita Hijau
                                </CardTitle>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="28"
                                    height="28"
                                    className="fill-green-500"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                </svg>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">13</div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                <CardTitle className="text-sm font-medium text-red-600">
                                    Maba Pita Merah
                                </CardTitle>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="28"
                                    height="28"
                                    className="fill-red-600"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                                </svg>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">69</div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                <CardTitle className="text-sm font-medium text-yellow-500">
                                    Maba Pita Kuning
                                </CardTitle>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="28"
                                    height="28"
                                    className="fill-yellow-500"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                                </svg>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">34</div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                <CardTitle className="text-sm font-medium text-blue-500">
                                    Maba Sedang Izin
                                </CardTitle>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="28"
                                    height="28"
                                    className="fill-blue-500"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                                </svg>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">1</div>
                            </CardContent>
                        </Card>
                    </div>
                    <Card className="">
                        <CardHeader className="flex flex-row w-full items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-center w-full text-lg font-bold">
                                Absensi CUI Maba
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex justify-center items-center mt-2">
                            <Button>
                                Mulai Absen Maba
                            </Button>
                        </CardContent>
                    </Card>
                    <Input
                        disabled={processing}
                        value={data.nim}
                        onChange={handleSubmit}
                        placeholder="Cari mahasiswa berdasarkan NIM. cth: "
                    />

                    {/* Jika data tidak ditemukan */}
                    {response && response.status === 404 && (
                        <p className="font-bold text-red-600">
                            {response.message}
                        </p>
                    )}

                    {response && response.status === 200 && (
                        <div className="w-full">
                            <p className="font-bold text-green-500">
                                {response.message}
                            </p>
                            <div className="flex gap-5 mt-3 w-full">
                                <div>
                                    <img
                                        className="h-64 w-48 rounded-lg bg-cover mb-2"
                                        src={response.data.profil_url}
                                        alt="Foto profil"
                                    />
                                    {response.data.pita === "hijau" && (
                                        <div className="h-10 flex justify-center items-center font-bold bg-green-500 text-white rounded-xl">
                                            Pita Hijau
                                        </div>
                                    )}
                                    {response.data.pita === "kuning" && (
                                        <div>
                                            <div className="h-10 flex justify-center items-center font-bold bg-yellow-400 text-white rounded-xl">
                                                Pita Kuning
                                            </div>
                                            <p>
                                                Riwayat penyakit:{" "}
                                                {response.data.riwayat}
                                            </p>
                                        </div>
                                    )}
                                    {response.data.pita === "merah" && (
                                        <div>
                                            <div className="h-10 flex justify-center items-center font-bold bg-red-600 text-white rounded-xl">
                                                Pita Merah
                                            </div>
                                            <p>
                                                Riwayat penyakit:{" "}
                                                {response.data.riwayat}
                                            </p>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <div className="text-xl ring-1 ring-black/30 p-2 rounded-xl ">
                                        <p className="font-bold">
                                            {response.data.nama}
                                        </p>
                                        <p>{response.data.prodi}</p>
                                        <p>{response.data.nim}</p>
                                    </div>
                                    <Button className="w-full mt-2">
                                        Presensi
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </TabsContent>
                <TabsContent value="logbook" className="space-y-4">
                    test
                </TabsContent>
            </Tabs>
        </DashboardLayout>
    );
}
