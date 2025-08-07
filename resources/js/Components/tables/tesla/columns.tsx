import { CellAction } from "./cell-action";
import { ColumnDef } from "@tanstack/react-table";

export interface SoalEntry {
  id: number;
  nomor: number;
  tipe: string;
  pertanyaan: string;
  jawaban: string;
  start_row: number;
  start_col: number;
}

export const columns: ColumnDef<SoalEntry>[] = [
  {
    id: "nomor",
    accessorKey: "nomor",
    header: "Nomor",
    cell: ({ row }) => row.original.nomor,
  },
  {
    id: "tipe",
    accessorKey: "tipe",
    header: "Tipe",
    cell: ({ row }) => row.original.tipe,
  },
  {
    id: "pertanyaan",
    accessorKey: "pertanyaan",
    header: "Pertanyaan",
    cell: ({ row }) => row.original.pertanyaan,
  },
  {
    id: "jawaban",
    accessorKey: "jawaban",
    header: "Jawaban",
    cell: ({ row }) => row.original.jawaban,
  },
  {
    id: "start_row",
    accessorKey: "start_row",
    header: "Start Row",
    cell: ({ row }) => row.original.start_row,
  },
  {
    id: "start_col",
    accessorKey: "start_col",
    header: "Start Col",
    cell: ({ row }) => row.original.start_col,
  },
  {
    id: "actions",
    header: "Aksi",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
