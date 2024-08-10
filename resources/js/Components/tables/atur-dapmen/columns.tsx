import { CellAction } from "./cell-action";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

export interface DataDapmen {
  no: number;
  id: number;
  user: {
    name: string;
    nim: string;
    email: string;
    role: string;
  };
}

export const columns: ColumnDef<DataDapmen>[] = [
  {
    id: "no",
    header: "No",
    cell: ({ row }) => row.original.no,
  },
  {
    id: "name",
    accessorKey: "user.name",
    header: "Nama",
    cell: ({ row }) => <p>{row.original.user.name}</p>,
  },
  {
    id: "nim",
    accessorKey: "user.nim",
    header: "NIM",
    cell: ({ row }) => <p>{row.original.user.nim}</p>,
  },
  {
    id: "email",
    accessorKey: "user.email",
    header: "Email",
    cell: ({ row }) => <p>{row.original.user.email}</p>,
  },
  {
    id: "role",
    accessorKey: "user.role",
    header: "Email",
    cell: ({ row }) => <p>{row.original.user.role}</p>,
  },
  {
    id: "actions",
    header: "Aksi",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
