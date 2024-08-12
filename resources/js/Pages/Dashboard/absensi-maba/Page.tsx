import Presensi from "./Presensi";

import React, { useEffect, useState } from "react";

import DashboardLayout from "@/Layouts/DashboardLayout";

import { AbsensiMabaClient } from "@/Components/tables/absensi-maba/client";
import { Breadcrumbs } from "@/Components/ui/breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { Toaster } from "@/Components/ui/toaster";

import { useFlashToast } from "@/lib/hooks/useFlashToast";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Absensi Maba", link: "/dashboard/absensi-maba" },
];

export default function Page({ auth, response }) {
  const [hadir, setHadir] = useState(0);
  const [tidakHadir, setTidakHadir] = useState(0);
  const [izin, setIzin] = useState(0);
  const [selectedDay, setSelectedDay] = useState(
    auth.user.role_id == 5 ? "2024-08-12" : "2024-08-10",
  ); // State untuk menyimpan hari yang dipilih

  useFlashToast();

  const handleDate = (value) => {
    setSelectedDay(value); // Update state ketika pengguna memilih hari
  };

  const getCountPresensi = async () => {
    const response = await fetch(
      route("dashboard.presensi.count", { date: selectedDay }),
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    setHadir(data.response.data.hadir);
    setTidakHadir(data.response.data.tidakHadir);
    setIzin(data.response.data.izin);
  };

  useEffect(() => {
    getCountPresensi();
  }, []);

  useEffect(() => {
    getCountPresensi();
  }, [handleDate]);

  return (
    <>
      <DashboardLayout user={auth.user}>
        <Breadcrumbs items={breadcrumbItems} />
        <h2 className="text-3xl font-bold tracking-tight">Absensi Maba</h2>

        <Select onValueChange={handleDate} defaultValue={selectedDay}>
          <SelectTrigger className="w-full md:w-[180px] font-bold">
            <SelectValue placeholder="Pilih Hari/Tanggal" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Day PPLK</SelectLabel>
              {auth.user.role_id == 5 ? (
                <>
                  <SelectItem value="2024-08-12">Day 0 PPLK</SelectItem>
                  <SelectItem value="2024-08-15">Day 3 PPLK</SelectItem>
                </>
              ) : (
                <>
                  <SelectItem value="2024-08-10">Pra-PPLK</SelectItem>
                  <SelectItem value="2024-08-12">Day 0 PPLK</SelectItem>
                  <SelectItem value="2024-08-13">Day 1 PPLK</SelectItem>
                  <SelectItem value="2024-08-14">Day 2 PPLK</SelectItem>
                  <SelectItem value="2024-08-15">Day 3 PPLK</SelectItem>
                  <SelectItem value="2024-08-16">Day 4 PPLK</SelectItem>
                  <SelectItem value="2024-08-17">CUI</SelectItem>
                </>
              )}
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className="lg:grid-cols-4 grid grid-cols-2 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-green-500">
                Maba Hadir
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
              <div className="text-2xl font-bold">{hadir}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-red-600">
                Maba Tidak Hadir
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
              <div className="text-2xl font-bold">{tidakHadir}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-yellow-500">
                Maba Izin
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
              <div className="text-2xl font-bold">{izin}</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="tabel-kehadiran" className="space-y-4">
          <TabsList>
            <TabsTrigger value="tabel-kehadiran">Tabel Kehadiran</TabsTrigger>
            <TabsTrigger value="presensi">Presensi</TabsTrigger>
          </TabsList>
          <TabsContent value="presensi">
            <Presensi />
          </TabsContent>
          <TabsContent value="tabel-kehadiran">
            <AbsensiMabaClient day={selectedDay} />
          </TabsContent>
        </Tabs>
      </DashboardLayout>

      <Toaster />
    </>
  );
}
