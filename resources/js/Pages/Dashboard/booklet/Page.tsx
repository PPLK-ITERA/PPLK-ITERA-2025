import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { useDebouncedCallback } from "use-debounce";

import React, { FormEvent, useEffect, useState } from "react";

import { useForm } from "@inertiajs/react";

import { CalendarIcon } from "lucide-react";

import { IconPlus } from "@tabler/icons-react";

import DashboardLayout from "@/Layouts/DashboardLayout";

import { BookletCellActions } from "@/Components/dashboard/booklet/BookletCellActions";
import BookletForm from "@/Components/dashboard/booklet/BookletForm";
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
import { Toaster } from "@/Components/ui/toaster";
import { toast, useToast } from "@/Components/ui/use-toast";

import { Booklet } from "@/lib/types/Booklet";

const breadcrumbItems = [
  { title: "Ellysion Panel", link: "/dashboard" },
  { title: "Booklet", link: "/dashboard/booklet" },
];

interface BookletDataResponse {
  no: number;
  booklet: Booklet;
}

export default function Page({ auth, response }) {
  const columns: ColumnDef<BookletDataResponse>[] = [
    {
      id: "no",
      header: "No",
      cell: ({ row }) => row.index + 1,
    },
    {
      id: "nama_booklet",
      accessorKey: "booklet.nama_booklet",
      header: "Nama",
    },
    {
      id: "url_booklet",
      accessorKey: "booklet.url_booklet",
      header: "Link Booklet",
    },
    {
      id: "action",
      header: "Aksi",
      cell: ({ row }) => <BookletCellActions booklet={row.original.booklet} />,
    },
  ];

  return (
    <DashboardLayout user={auth.user}>
      <Breadcrumbs items={breadcrumbItems} />
      <h2 className="text-3xl font-bold tracking-tight">Atur Booklet</h2>

      <div className="place-content-start flex w-full">
        {/* add dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <IconPlus size={18} />
              <span>Tambah Booklet</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="border-none">
            <DialogHeader>
              <DialogTitle>Tambah Booklet</DialogTitle>
            </DialogHeader>
            <BookletForm />
          </DialogContent>
        </Dialog>
      </div>

      <DataTable
        searchKey="name"
        columns={columns}
        apiEndpoint={route("dashboard.booklet.data")}
        title={"Data Booklet"}
      />
      <Toaster />
    </DashboardLayout>
  );
}
