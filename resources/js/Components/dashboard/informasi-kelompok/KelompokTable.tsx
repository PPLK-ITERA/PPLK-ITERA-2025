import { DialogClose } from "@radix-ui/react-dialog";

import { useForm } from "@inertiajs/react";
import { Link } from "@inertiajs/react";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";
import { Button } from "@/Components/ui/button";
import { buttonVariants } from "@/Components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { ScrollArea, ScrollBar } from "@/Components/ui/scroll-area";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import { Textarea } from "@/Components/ui/textarea";

type dataKelompok = {};

const dataMabaKelompokNawasena = [
    {
        id: 1,
        nama: "Ujang Pance",
        email: "ujangpance@tes.com",
        prodi: "Teknik Sipil",
    },
    {
        id: 2,
        nama: "Siti Abdiyah",
        email: "sitiabdiyah@gmail.com",
        prodi: "Teknik Sipil",
    },
    {
        id: 3,
        nama: "Maman",
        email: "maman@gmail.com",
        prodi: "Teknik Industri",
    },
];

export function KelompokTable() {
    const {
        data,
        setData,
        put,
        delete: destroy,
        processing,
        errors,
        reset,
    } = useForm({
        teks_pertanyaan: "",
        teks_jawaban: "",
    });

    return (
        <ScrollArea className="whitespace-nowrap max-w-6xl overflow-hidden rounded-md">
            <Table className="relative border">
                <TableHeader>
                    <TableRow className="hover:bg-current bg-current">
                        <TableHead className="w-[50px] text-white">
                            No
                        </TableHead>
                        <TableHead className="text-white w-[200px]">
                            Nama
                        </TableHead>
                        <TableHead className="text-white xl:w-[800px]">
                            Email
                        </TableHead>
                        <TableHead className="text-white xl:w-[800px]">
                            Prodi
                        </TableHead>
                        <TableHead className="text-white xl:w-[800px]">
                            Pita
                        </TableHead>
                        <TableHead className="text-white">Lihat</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {dataMabaKelompokNawasena.map((maba, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">
                                {index + 1}
                            </TableCell>

                            <TableCell>
                                <p className="line-clamp-1">{maba.nama}</p>
                            </TableCell>

                            <TableCell>
                                <p className="line-clamp-1">{maba.email}</p>
                            </TableCell>

                            <TableCell>
                                <p className="line-clamp-1">{maba.prodi}</p>
                            </TableCell>

                            <TableCell>
                                <p className="max-w-20 rounded-xl flex items-center justify-center px-2 pt-[1px] pb-[2px] text-white bg-red-500">
                                    merah
                                </p>
                            </TableCell>

                            <TableCell className="flex gap-2 text-right">
                                <Link
                                    className={`${buttonVariants()} gap-2`}
                                    href="/dashboard/informasi-kelompok/edit-maba"
                                >
                                    Edit
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
}
