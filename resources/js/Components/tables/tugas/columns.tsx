"use client";

import { CellAction } from "./cell-action";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import QRCode from "react-qr-code";

import { tugasData } from "@/lib/types/Tugas";
import { UserMaba } from "@/lib/types/User";

export const columns: ColumnDef<tugasData>[] = [
    {
        id: "no",
        header: "No",
        cell: ({ row }) => row.original.no,
    },
    {
        id: "name",
        accessorKey: "tugas.user.name",
        header: "Nama",
        cell: ({ row }) => row.original.tugas.user.name,
    },
    {
        id: "nim",
        accessorKey: "tugas.user.nim",
        header: "NIM",
        cell: ({ row }) => row.original.tugas.user.nim,
    },
    {
        id: "kelompok",
        accessorKey: "tugas.user.kelompok_id",
        header: "Kelompok",
        cell: ({ row }) => row.original.tugas.user.kelompok_id,
    },
    {
        id: "kategori_tugas",
        accessorKey: "tugas.kategori_tugas",
        header: "Kategori Tugas",
        cell: ({ row }) => row.original.tugas.kategori_tugas,
    },
    {
        id: "link",
        accessorKey: "tugas.link",
        header: "Link",
        cell: ({ row }) => row.original.tugas.link,
    },
    {
        id: "materi",
        accessorKey: "tugas.materi",
        header: "Materi",
        cell: ({ row }) => row.original.tugas.materi,
    },
    {
        id: "actions",
        header: "Aksi",
        cell: ({ row }) => <CellAction data={row.original} />,
    },
];
