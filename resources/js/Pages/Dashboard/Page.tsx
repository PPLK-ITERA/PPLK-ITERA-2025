import { IconRibbonHealth, IconUser, IconUserStar, IconLogout } from "@tabler/icons-react";
import { Link } from "@inertiajs/react";

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
    "DataEntry",
    "Maba",
    "Daplok",
    "Admin",
    "Mentor",
    "Pjprodi",
    "Korlap",
    "Mamet",
    "CustomerService",
];

export default function Page({ auth, response }) {
    const user = auth.user;

    if (user.role_id == 1) {
        window.history.back();
    }

    return (
        <DashboardLayout user={auth.user}>
            <div className="flex items-center justify-between space-y-2">
                <div className="flex flex-col">
                    <h2 className="text-3xl font-bold font-inter tracking-tight">
                        Hai {user.name}, Selamat datang!
                    </h2>
                    <p className="font-inter">Kamu login sebagai {roles[parseInt(user.role_id)]}</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Link
                        href={route("logout")}
                        method="post"
                        className="flex items-center gap-2 md:px-2 md:py-2 p-2rounded-md transition-colors"
                    >
                        <IconLogout size={20} className="text-red-500" />
                    </Link>
                </div>
            </div>
            <Tabs defaultValue="overview" className="space-y-4">
                {/* <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="analytics">Analytics</TabsTrigger>
                </TabsList> */}
                <TabsContent value="overview" className="space-y-4 font-inter">
                    <div className="md:grid-cols-2 lg:grid-cols-4 grid gap-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                <CardTitle className="text-sm font-medium">
                                    Jumlah Mahasiswa Baru
                                </CardTitle>
                                <IconUser className="w-4 h-4" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    {response.data.maba || "-"}
                                </div>

                                <p className="text-muted-foreground text-xs">Mahasiswa</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                <CardTitle className="text-sm font-medium">
                                    Jumlah Maba Hadir Hari Ini
                                </CardTitle>
                                <IconUserStar className="w-4 h-4" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    {response.data.presensi.today || "-"}
                                </div>
                                <p className="text-muted-foreground text-xs">Mahasiswa</p>
                            </CardContent>
                        </Card>
                        <Card className="col-span-2">
                            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                <CardTitle className="text-sm font-medium">
                                    Jumlah Pita
                                </CardTitle>
                                <IconRibbonHealth />
                            </CardHeader>

                            <CardContent className="place-content-center flex justify-around text-center">
                                <div>
                                    <span className="text-2xl font-bold text-red-500">
                                        {response.data.mabaMerah || "-"}
                                    </span>
                                    <p className="text-muted-foreground text-xs">Pita Merah</p>
                                </div>
                                <div>
                                    <span className="text-2xl font-bold text-yellow-500">
                                        {response.data.mabaKuning || "-"}
                                    </span>
                                    <p className="text-muted-foreground text-xs">Pita kuning</p>
                                </div>
                                <div>
                                    <span className="text-2xl font-bold text-green-500">
                                        {response.data.mabaHijau || "-"}
                                    </span>
                                    <p className="text-muted-foreground text-xs">Pita Hijau</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                <CardTitle className="text-sm font-medium">
                                    Jumlah Korlap
                                </CardTitle>
                                <IconUser className="w-4 h-4" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                    {response.data.korlap || "-"}
                                </div>
                                <p className="text-muted-foreground text-xs">Korlap</p>
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
                                <div className="text-2xl font-bold">
                                    {response.data.daplok || "-"}
                                </div>
                                <p className="text-muted-foreground text-xs">Daplok</p>
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
                                <div className="text-2xl font-bold">
                                    {response.data.mentor || "-"}
                                </div>
                                <p className="text-muted-foreground text-xs">Mentor</p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="bg-orange-300 w-full h-1" />

                    <div className="md:grid-cols-2 lg:grid-cols-7 grid grid-cols-1 gap-4">
                        <div className="col-span-4">
                            <BarGraph
                                chartData={[
                                    {
                                        date: "2025-08-09",
                                        hadir: response.data.presensi.all[0] || 0,
                                        tidakHadir:
                                            response.data.maba - response.data.presensi.all[0] || 0,
                                    },
                                    {
                                        date: "2025-08-11",
                                        hadir: response.data.presensi.all[1] || 0,
                                        tidakHadir:
                                            response.data.maba - response.data.presensi.all[1] || 0,
                                    },
                                    {
                                        date: "2025-08-12",
                                        hadir: response.data.presensi.all[2] || 0,
                                        tidakHadir:
                                            response.data.maba - response.data.presensi.all[2] || 0,
                                    },
                                    {
                                        date: "2025-08-13",
                                        hadir: response.data.presensi.all[3] || 0,
                                        tidakHadir:
                                            response.data.maba - response.data.presensi.all[3] || 0,
                                    },
                                    {
                                        date: "2025-08-14",
                                        hadir: response.data.presensi.all[4] || 0,
                                        tidakHadir:
                                            response.data.maba - response.data.presensi.all[4] || 0,
                                    },
                                    {
                                        date: "2025-08-15",
                                        hadir: response.data.presensi.all[5] || 0,
                                        tidakHadir:
                                            response.data.maba - response.data.presensi.all[5] || 0,
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
                                <RecentSales tasks={response.data.tugas} />
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
