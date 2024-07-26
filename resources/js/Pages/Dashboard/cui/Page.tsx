import Presensi from "./Presensi";
import DashboardLayout from "@/Layouts/DashboardLayout";

import { useState } from "react";

import { LogBookClient } from "@/Components/tables/cui/client";
import { Breadcrumbs } from "@/Components/ui/breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";

const breadcrumbItems = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "CUI", link: "/dashboard/cui" },
];

export default function Page({ auth, response }) {
    const [tab, setTab] = useState(
        response.data && response.data.tab ? response.data.tab : "logbook",
    );

    const onTabChange = (value) => {
        setTab(value);
    };

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
                        className="md:w-96 justify-between w-64"
                    >
                        {value
                            ? frameworks.find((framework) => framework.value === value)?.label
                            : "Select framework..."}
                        <ChevronsUpDown className="shrink-0 w-4 h-4 ml-2 opacity-50" />
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
            <div className="lg:grid-cols-4 grid grid-cols-2 gap-4">
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
            <Tabs
                defaultValue={tab}
                onValueChange={onTabChange}
                className="space-y-4"
            >
                <TabsList>
                    <TabsTrigger value="logbook">Log Book</TabsTrigger>
                    <TabsTrigger value="presensi">Presensi</TabsTrigger>
                </TabsList>
                <TabsContent value="presensi">
                    <Presensi response={response} />
                </TabsContent>
                <TabsContent value="logbook">
                    <LogBookClient />
                </TabsContent>
            </Tabs>
        </DashboardLayout>
    );
}
