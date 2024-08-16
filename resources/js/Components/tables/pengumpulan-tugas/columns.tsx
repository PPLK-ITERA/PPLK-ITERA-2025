import { CellAction } from "./cell-action";
import { ColumnDef } from "@tanstack/react-table";

interface User {
  name: string;
  nim: null | string;
  nama_kelompok: string;
}

interface Tugas {
  id: number;
  judul: string;
  jawaban: string;
  isReturn: number;
  catatan: null | string;
}

export interface TaskEntry {
  id: number;
  user: User;
  tugas: Tugas;
  status: string;
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
    accessorKey: "tugas.status",
    header: "Status",
    cell: ({ row }) => row.original.status,
  },
  {
    id: "catatan",
    accessorKey: "tugas.catatan",
    header: "Catatan",
    cell: ({ row }) => row.original.tugas.catatan,
  },
  {
    id: "actions",
    header: "Aksi",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
