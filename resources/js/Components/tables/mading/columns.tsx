"use client";

import { CellAction } from "./cell-action";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import QRCode from "react-qr-code";

import { UserMaba } from "@/lib/types/User";

export const columns: ColumnDef<UserMaba>[] = [
  {
    id: "no",
    header: "No",
    cell: ({ row }) => row.original.no,
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
    id: "email",
    accessorKey: "user.email",
    header: "Email",
    cell: ({ row }) => row.original.user.email,
  },
  {
    id: "actions",
    header: "Aksi",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
