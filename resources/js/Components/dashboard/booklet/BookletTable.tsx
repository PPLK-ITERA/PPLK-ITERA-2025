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

export function BookletTable({ booklets }: { booklets: Booklet[] }) {
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
