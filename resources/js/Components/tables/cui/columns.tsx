"use client";

import { CellAction } from "./cell-action";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import QRCode from "react-qr-code";

import { LogBookCui } from "@/lib/types/LogBookCui";

export const columns: ColumnDef<LogBookCui>[] = [
    {
        id: "no",
        header: "No",
        cell: ({ row }) => row.original.no,
    },
    {
        id: "photo_profile",
        accessorKey: "user.photo_profile_url",
        header: "Foto Profil",
        enableResizing: true, //disable resizing for just this column
        cell: ({ row }) => (
            <img
                className="h-[120px] w-[140px] aspect-auto"
                src={row.original.user.photo_profile_url}
                alt="Foto Profil"
            />
        ),
    },
    {
        id: "qrcode",
        accessorKey: "user.qrcode",
        header: "QR Code",
        cell: ({ row }) => (
            <div className="bg-white">
                <QRCode size={64} value={row.original.user.qrcode} />
            </div>
        ),
    },
    {
        id: "name",
        accessorKey: "user.name",
        header: "Nama",
    },
    {
        id: "nim",
        accessorKey: "user.nim",
        header: "NIM",
    },
    {
        id: "nama_kelompok",
        accessorKey: "user.nama_kelompok",
        header: "Kelompok",
    },
    {
        id: "pita",
        accessorKey: "user.penyakit.pita",
        header: "Warna Pita",
    },
    {
        id: "ket_penyakit",
        accessorKey: "user.penyakit.ket_penyakit",
        header: "Riwayat Penyakit",
        cell: ({ row }) => (
            <p>
                {row.original.user.penyakit.ket_penyakit
                    ? row.original.user.penyakit.ket_penyakit
                    : "-"}
            </p>
        ),
    },
    {
        id: "waktu_hadir",
        accessorKey: "waktu_hadir",
        header: "Waktu Masuk",
        cell: ({ row }) => (
            <p>
                {row.original.waktu_hadir
                    ? format(row.original.waktu_hadir, "dd/MM/yyyy HH:mm")
                    : "-"}
            </p>
        ),
    },
    {
        id: "waktu_izin",
        accessorKey: "waktu_izin",
        header: "Waktu Izin",
        cell: ({ row }) => (
            <p>
                {row.original.waktu_izin
                    ? format(row.original.waktu_izin, "dd/MM/yyyy HH:mm")
                    : "-"}
            </p>
        ),
    },
    {
        id: "waktu_selesai",
        accessorKey: "waktu_selesai",
        header: "Waktu Selesai izin",
        cell: ({ row }) => (
            <p>
                {row.original.waktu_selesai
                    ? format(row.original.waktu_selesai, "dd/MM/yyyy HH:mm")
                    : "-"}
            </p>
        ),
    },
    {
        id: "ket_izin",
        accessorKey: "ket_izin",
        header: "Alasan Izin Terakhir",
        cell: ({ row }) => (
            <p>{row.original.ket_izin ? row.original.ket_izin : "-"}</p>
        ),
    },
    {
        id: "actions",
        header: "Aksi",
        cell: ({ row }) => <CellAction data={row.original} />,
    },
];
