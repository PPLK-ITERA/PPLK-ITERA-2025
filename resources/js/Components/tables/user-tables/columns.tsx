"use client";

import { CellAction } from "./cell-action";
import { User } from "@/constants/data";
import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/Components/dashboard/ui/checkbox";
import { Switch } from "@/Components/ui/switch";
import { Label } from "@/Components/ui/label";
import AttendanceToggle from "@/Components/dashboard/tables/user-tables/attendance-toggle";

export const columns: ColumnDef<User>[] = [
    {
        header: "No",
        cell: (row) => {
            return <div>{row.row.index + 1}</div>;
        }
    },
    {
        accessorKey: "foto-profil",
        header: "Foto Profil",
    },
    {
        accessorKey: "nama",
        header: "NAMA",
    },
    {
        accessorKey: "kelompok",
        header: "Kelompok",
    },
    {
        accessorKey: "pita",
        header: "Pita",
    },
    {
        accessorKey: "riwayat-penyakit",
        header: "Riwayat Penyakit",
    },
    {
        id: "actions",
        cell: ({ row }) => (
            <AttendanceToggle/>
        ),
    },
];
