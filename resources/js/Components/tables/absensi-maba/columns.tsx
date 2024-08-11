"use client";

import { CellAction } from "./cell-action";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import QRCode from "react-qr-code";

import { LogBookCui } from "@/lib/types/LogBookCui";

export interface AbsensiMaba {
  no: number;
  id: number;
  user: {
    name: string;
    nim: string;
    email: string;
    photo_profile_url: string;
    // qrcode: string;
    nama_kelompok: string;
    penyakit: {
      pita: string;
      ket_penyakit: string;
    };
    status: string;
    tanggal_presensi: string;
    ket_izin: string;
  };
  action: boolean;
}

export const columns: ColumnDef<AbsensiMaba>[] = [
  {
    id: "no",
    header: "No",
    cell: ({ row }) => row.original.no,
  },
  {
    id: "photo_profile",
    accessorKey: "user.photo_profile_url",
    header: "Foto Profil",
    cell: ({ row }) => (
      <img
        className="h-[150px] w-[100px] object-cover aspect-3/4"
        src={row.original.user.photo_profile_url}
        alt="Foto Profil"
      />
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
    id: "status",
    accessorKey: "user.status", // Access status from the nested user object
    header: "Status",
  },
  {
    id: "ket_status",
    accessorKey: "user.ket_izin", // Access status from the nested user object
    header: "Keterangan Izin",
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
    cell: ({ row }) => <p>{row.original.user.penyakit.ket_penyakit}</p>,
  },
  {
    id: "tanggal_presensi",
    accessorKey: "user.tanggal_presensi",
    header: "Waktu Presensi",
    cell: ({ row }) => <p>{row.original.user.tanggal_presensi}</p>,
  },
  // Remove other columns (waktu_izin, waktu_selesai, ket_izin) that are not part of AbsensiMaba
  {
    id: "actions",
    header: "Aksi",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
