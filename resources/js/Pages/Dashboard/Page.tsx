import { IconRibbonHealth, IconUser, IconUserStar } from "@tabler/icons-react";

import DashboardLayout from "@/Layouts/DashboardLayout";

import { AreaGraph } from "@/Components/dashboard/charts/area-graph";
import { BarGraph } from "@/Components/dashboard/charts/bar-graph";
import { PieGraph } from "@/Components/dashboard/charts/pie-graph";
import { CalendarDateRangePicker } from "@/Components/dashboard/date-range-picker";
import { RecentSales } from "@/Components/dashboard/recent-sales";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";

const roles = [
    "Maba",
    "Daplok",
    "Admin",
    "Mentor",
    "Pjprodi",
    "Korlap",
    "Mamet",
    "CustomerService",
];

export default function Page({ auth }) {
    const user = auth.user;

    if (user.role_id == 1) {
        window.history.back();
    }

    return (
        <DashboardLayout user={auth.user}>
            <div className="flex items-center justify-between space-y-2">
                <div className="flex flex-col">
                    <h2 className="text-3xl font-bold tracking-tight">
                        Hai {user.name}, Selamat datang!
                    </h2>
                    <p>Kamu login sebagai {roles[parseInt(user.role_id)]}</p>
                </div>
                {/* <div className="md:flex items-center hidden space-x-2">
                    <CalendarDateRangePicker />
                    <Button>Download</Button>
                </div> */}
            </div>
            <Tabs defaultValue="overview" className="space-y-4">
                {/* <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="analytics">Analytics</TabsTrigger>
                </TabsList> */}
                <TabsContent value="overview" className="space-y-4">
                    <div className="md:grid-cols-2 lg:grid-cols-4 grid gap-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                <CardTitle className="text-sm font-medium">
                                    Jumlah Mahasiswa Baru
                                </CardTitle>
                                <IconUser className="w-4 h-4" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">4000</div>
                                <p className="text-muted-foreground text-xs">
                                    mahasiswa
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                <CardTitle className="text-sm font-medium">
                                    Jumlah Maba Hadir
                                </CardTitle>
                                <IconUserStar className="w-4 h-4" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">2350</div>
                                <p className="text-muted-foreground text-xs">
                                    mahasiswa
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="col-span-2">
                            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                <CardTitle className="text-sm font-medium">
                                    Jumlah Pita
                                </CardTitle>
                                <IconRibbonHealth />
                            </CardHeader>
                            <CardContent className="flex justify-around text-center place-content-center">
                                <div>
                                    <span className="text-2xl font-bold text-red-500">
                                        250
                                    </span>
                                    <p className="text-muted-foreground text-xs">
                                        Pita Merah
                                    </p>
                                </div>
                                <div>
                                    <span className="text-2xl font-bold text-yellow-500">
                                        250
                                    </span>
                                    <p className="text-muted-foreground text-xs">
                                        Pita kuning
                                    </p>
                                </div>
                                <div>
                                    <span className="text-2xl font-bold text-green-500">
                                        250
                                    </span>
                                    <p className="text-muted-foreground text-xs">
                                        Pita Hijau
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="grid-cols-3 grid gap-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                <CardTitle className="text-sm font-medium">
                                    Jumlah Korlap
                                </CardTitle>
                                <IconUser className="w-4 h-4" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">200</div>
                                <p className="text-muted-foreground text-xs">
                                    korlap
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                <CardTitle className="text-sm font-medium">
                                    Jumlah Daplok
                                </CardTitle>
                                <IconUserStar className="w-4 h-4" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">150</div>
                                <p className="text-muted-foreground text-xs">
                                    Daplok
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                <CardTitle className="text-sm font-medium">
                                    Jumlah mentor
                                </CardTitle>
                                <IconUserStar className="w-4 h-4" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">150</div>
                                <p className="text-muted-foreground text-xs">
                                    mentor
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="w-full h-1 bg-gray-400/50" />
                    <div className="md:grid-cols-2 lg:grid-cols-7 grid grid-cols-1 gap-4">
                        <div className="col-span-4">
                            <BarGraph
                                chartData={[
                                    {
                                        date: "2024-08-12",
                                        hadir: 132,
                                        tidakHadir: 180,
                                    },
                                    {
                                        date: "2024-08-13",
                                        hadir: 141,
                                        tidakHadir: 190,
                                    },
                                    {
                                        date: "2024-08-14",
                                        hadir: 434,
                                        tidakHadir: 380,
                                    },
                                    {
                                        date: "2024-08-15",
                                        hadir: 448,
                                        tidakHadir: 490,
                                    },
                                    {
                                        date: "2024-08-16",
                                        hadir: 149,
                                        tidakHadir: 200,
                                    },
                                    {
                                        date: "2024-08-17",
                                        hadir: 103,
                                        tidakHadir: 160,
                                    },
                                    {
                                        date: "2024-08-18",
                                        hadir: 446,
                                        tidakHadir: 400,
                                    },
                                ]}
                            />
                        </div>
                        <Card className="md:col-span-3 col-span-4">
                            <CardHeader>
                                <CardTitle>Rasio Pengumpulan Tugas</CardTitle>
                                <CardDescription>
                                    Rasio pengumpulan tugas per hari
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <RecentSales />
                            </CardContent>
                        </Card>
                        {/* <div className="col-span-4">
                            <AreaGraph />
                        </div>
                        <div className="md:col-span-3 col-span-4">
                            <PieGraph />
                        </div> */}
                    </div>
                </TabsContent>
            </Tabs>
        </DashboardLayout>
    );
}
