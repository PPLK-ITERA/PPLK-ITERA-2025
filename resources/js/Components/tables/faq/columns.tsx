import { CellAction } from "./cell-action";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import QRCode from "react-qr-code";

import { FAQ } from "@/lib/data/faq";
import { LogBookCui } from "@/lib/types/LogBookCui";

export const columns: ColumnDef<FAQ>[] = [
  {
    id: "no",
    header: "No",
    cell: ({ row }) => row.original.no,
  },
  {
    id: "teks_pertanyaan",
    accessorKey: "faq.teks_pertanyaan",
    header: "Pertanyaan",
  },
  {
    id: "teks_jawaban",
    accessorKey: "faq.teks_jawaban",
    header: "Jawaban",
  },
  {
    id: "action",
    header: "Aksi",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
