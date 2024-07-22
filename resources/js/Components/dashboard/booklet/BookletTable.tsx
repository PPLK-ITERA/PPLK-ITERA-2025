import { Label } from "@/Components/dashboard/ui/label";
import { Switch } from "@/Components/dashboard/ui/switch";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/dashboard/ui/table";

import { Booklet } from "@/lib/types/Booklet";

const booklets: Booklet[] = [
    {
        id: 1,
        nama_booklet: "Panduan Pemula",
        url_booklet: "https://example.com/panduan-pemula",
        deadline: "2024-12-31",
        created_at: "2024-07-01T12:00:00Z",
        updated_at: "2024-07-01T12:00:00Z",
    },
    {
        id: 2,
        nama_booklet: "Buku Panduan Mahasiswa",
        url_booklet: "https://example.com/panduan-mahasiswa",
        created_at: "2024-07-05T12:00:00Z",
        updated_at: "2024-07-05T12:00:00Z",
    },
    {
        id: 3,
        nama_booklet: "Buku Panduan Dosen",
        url_booklet: "https://example.com/panduan-dosen",
        deadline: "2024-11-30",
        created_at: "2024-07-10T12:00:00Z",
        updated_at: "2024-07-10T12:00:00Z",
    },
];

export function BookletTable() {
    return (
        <Table className="border">
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow className="hover:bg-current bg-current">
                    <TableHead className="w-[50px] text-white">No</TableHead>
                    <TableHead className="text-white">Nama Booklet</TableHead>
                    <TableHead className="text-white">Link</TableHead>
                    <TableHead className="text-white">Deadline</TableHead>
                    <TableHead className="text-white">Status</TableHead>
                    <TableHead className="text-white">Aksi</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {booklets.map((booklet) => (
                    <TableRow key={booklet.id}>
                        <TableCell className="font-medium">
                            {booklet.id}
                        </TableCell>
                        <TableCell>{booklet.nama_booklet}</TableCell>
                        <TableCell>{booklet.url_booklet}</TableCell>
                        <TableCell>{booklet.deadline ?? "-"}</TableCell>
                        <TableCell className="flex  place-items-center gap-2">
                            <Label htmlFor={`booklet${booklet.id}`}>
                                Aktif
                            </Label>
                            <Switch id={`booklet${booklet.id}`} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            {/* <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
            </TableFooter> */}
        </Table>
    );
}
