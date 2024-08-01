import { CellAction } from "./cell-action";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

export interface DataMaba {
    no: number;
    id: number;
    user: {
        name: string;
        nim: string;
        email: string;
        role: string;
        kelompok: string;
    };
}

export const columns: ColumnDef<DataMaba>[] = [
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
        header: "Role",
        cell: ({ row }) => <p>{row.original.user.role}</p>,
    },
    {
        id: "kelompok",
        accessorKey: "user.kelompok",
        header: "Kelompok",
        cell: ({ row }) => <p>{row.original.user.kelompok}</p>,
    },
    {
        id: "actions",
        header: "Aksi",
        cell: ({ row }) => <CellAction data={row.original} />,
    },
];
