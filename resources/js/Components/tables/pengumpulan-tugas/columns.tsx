"use client";

import { CellAction } from "./cell-action";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import QRCode from "react-qr-code";

import { UserMaba } from "@/lib/types/User";

// Define the type for the user information
interface User {
  name: string;
  nim: null | string; // 'null' or a string if NIM is present
  nama_kelompok: string;
}

// Define the type for the task (tugas) information
interface Tugas {
  judul: string;
  jawaban: string; // Assuming 'jawaban' will always be a URL as a string
  isReturn: number; // Assuming 'isReturn' is an integer (0 or 1)
  catatan: null | string; // 'null' or a string if a note is present
}

// Define the type for the entire structure
export interface TaskEntry {
  id: number;
  user: User;
  tugas: Tugas;
  status: string; // Could also be more specific, like 'submitted' | 'not_submitted' | 'submitted late' if those are the only possible statuses
}

export const columns: ColumnDef<TaskEntry>[] = [
  {
    id: "no",
    header: "No",
    cell: ({ row }) => row.index + 1,
  },
  {
    id: "name",
    accessorKey: "user.name",
    header: "Nama",
    cell: ({ row }) => row.original.user.name,
  },
  {
    id: "nim",
    accessorKey: "user.nim",
    header: "NIM",
    cell: ({ row }) => row.original.user.nim,
  },
  {
    id: "judul",
    accessorKey: "tugas.judul",
    header: "Nama Tugas",
    cell: ({ row }) => row.original.tugas.judul,
  },
  {
    id: "nama_kelompok",
    accessorKey: "user.nama_kelompok",
    header: "Kelompok",
    cell: ({ row }) => row.original.user.nama_kelompok,
  },
  {
    id: "status",
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => row.original.status,
  },
  {
    id: "actions",
    header: "Aksi",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
