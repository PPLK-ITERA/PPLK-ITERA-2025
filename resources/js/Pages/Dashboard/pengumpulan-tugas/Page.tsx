import { ColumnDef } from "@tanstack/react-table";

import { useState } from "react";

import { IconPlus } from "@tabler/icons-react";

import DashboardLayout from "@/Layouts/DashboardLayout";

import { MateriCellActions } from "@/Components/dashboard/materi/MateriCellActions";
import MateriForm from "@/Components/dashboard/materi/MateriForm";
import { Breadcrumbs } from "@/Components/ui/breadcrumbs";
import { Button } from "@/Components/ui/button";
import { DataTable } from "@/Components/ui/data-table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import { Toaster } from "@/Components/ui/toaster";

import { useFlashToast } from "@/lib/hooks/useFlashToast";
import { Materi } from "@/lib/types/Materi";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Pengumpulan Tugas", link: "/dashboard/pengumpulan-tugas" },
];

interface MateriDataResponse {
  no: number;
  materi: Materi;
}

export default function Page({ auth, response }) {
  const columns: ColumnDef<MateriDataResponse>[] = [
    {
      id: "no",
      header: "No",
      cell: ({ row }) => row.index + 1,
    },
    {
      id: "nama_materi",
      accessorKey: "materi.nama_materi",
      header: "Nama",
    },
    {
      id: "link_materi",
      accessorKey: "materi.link_materi",
      header: "Link Materi",
    },
    {
      id: "hari",
      accessorKey: "materi.hari",
      header: "Hari Ke",
    },
    {
      id: "action",
      header: "Aksi",
      cell: ({ row }) => {
        return <MateriCellActions materi={row.original.materi} />;
      },
    },
  ];

  const [selectedDay, setSelectedDay] = useState(
    auth.user.role_id == 5 ? "2024-08-12" : "2024-08-10",
  ); // State untuk menyimpan hari yang dipilih

  useFlashToast();

  const handleDate = (value) => {
    setSelectedDay(value); // Update state ketika pengguna memilih hari
  };

  return (
    <>
      <DashboardLayout user={auth.user}>
        <Breadcrumbs items={breadcrumbItems} />
        <h2 className="text-3xl font-bold tracking-tight">Pengumpulan Tugas</h2>

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

        <div className="place-content-start flex w-full">
          {/* add dialog */}
        </div>
      </DashboardLayout>

      <Toaster />
    </>
  );
}
