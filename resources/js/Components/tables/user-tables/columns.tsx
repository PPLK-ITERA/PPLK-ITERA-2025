import { CellAction } from "./cell-action";
import { ColumnDef } from "@tanstack/react-table";

import AttendanceToggle from "@/Components/dashboard/tables/user-tables/attendance-toggle";
import { Checkbox } from "@/Components/ui/checkbox";
import { Label } from "@/Components/ui/label";
import { Switch } from "@/Components/ui/switch";

import { User } from "@/lib/data/data";

export const columns: ColumnDef<User>[] = [
  {
    header: "No",
    cell: (row) => {
      return <div>{row.row.index + 1}</div>;
    },
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
    cell: ({ row }) => <AttendanceToggle />,
  },
];
