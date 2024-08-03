import React, { FC, useEffect, useState } from "react";

import { Link, useForm } from "@inertiajs/react";

import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Label } from "@/Components/ui/label";
import { ScrollArea, ScrollBar } from "@/Components/ui/scroll-area";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import { Textarea } from "@/Components/ui/textarea";

interface PengumpulanTugas {
    id: number;
    created_at: string;
    updated_at: string;
    tanggal_submit: string;
    jawaban: string;
    tugas_id: number;
    user_id: number;
    isReturn: number;
    catatan: string | null;
}

interface TaskWithSubmission {
    id: number;
    created_at: string;
    updated_at: string;
    deadline: string;
    deskripsi: string;
    judul: string;
    kartu_id: number;
    kategori: string;
    pengumpulan: string;
    pengumpulan_tugas: PengumpulanTugas;
}

interface TugasKelompokProps {}

const TugasKelompok: FC<TugasKelompokProps> = ({}) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [dataTugasKelompok, setDataTugasKelompok] = useState<
        TaskWithSubmission[]
    >([]);

    const getTugasKelompokData = async () => {
        setLoading(true);

        const response = await fetch(route("dashboard.tugas.data.kelompok"), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const tugas = await response.json();
        setDataTugasKelompok(tugas.response.data);
        console.log(tugas.response.data);

        setLoading(false);
    };

    useEffect(() => {
        getTugasKelompokData();
    }, []);

    const { data, setData, put } = useForm({
        id: 0,
        catatan: "",
        _method: "put",
    });

    const handleKembalikanTugas = () => {
        put(route("dashboard.tugas.return"));
    };

    return (
        <>
            <ScrollArea className="whitespace-nowrap max-w-7xl mt-5 overflow-hidden rounded-md">
                <Table className="relative border">
                    <TableHeader>
                        <TableRow className="hover:bg-current bg-current">
                            <TableHead className="w-[50px] text-white">
                                No
                            </TableHead>
                            <TableHead className="text-white w-[200px]">
                                Nama Tugas
                            </TableHead>
                            <TableHead className="text-white w-[400px]">
                                Link
                            </TableHead>
                            <TableHead className="text-white">
                                Status Pengembalian
                            </TableHead>
                            <TableHead className="text-white">Aksi</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="min-h-28 relative">
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center">
                                    Loading...
                                </TableCell>
                            </TableRow>
                        ) : (
                            <>
                                {dataTugasKelompok.map((tugas, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">
                                            {index + 1}
                                        </TableCell>
                                        <TableCell>
                                            <p className="line-clamp-1">
                                                {tugas.judul}
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            <a
                                                className="line-clamp-1 text-wrap"
                                                href={
                                                    tugas.pengumpulan_tugas
                                                        ?.jawaban
                                                }
                                                target="_blank"
                                            >
                                                {
                                                    tugas.pengumpulan_tugas
                                                        ?.jawaban
                                                }
                                            </a>
                                        </TableCell>
                                        <TableCell>
                                            {tugas.pengumpulan_tugas?.isReturn
                                                ? "Dikembalikan"
                                                : "Diterima"}
                                        </TableCell>
                                        <TableCell className="flex gap-1">
                                            <Link
                                                href={`${tugas.pengumpulan_tugas?.jawaban}`}
                                            >
                                                <Button size="sm">
                                                    Lihat Tugas
                                                </Button>
                                            </Link>

                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button
                                                        className="gap-2"
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() =>
                                                            setData(
                                                                "id",
                                                                tugas
                                                                    .pengumpulan_tugas
                                                                    .id,
                                                            )
                                                        }
                                                    >
                                                        Kembalikan Tugas
                                                    </Button>
                                                </DialogTrigger>

                                                <DialogContent className="sm:max-w-[425px]">
                                                    <DialogHeader>
                                                        <DialogTitle>
                                                            Kembalikan Tugas
                                                        </DialogTitle>
                                                        <DialogDescription>
                                                            Kembalikan tugas
                                                            yang sudah
                                                            dikerjakan oleh
                                                            mahasiswa ini agar
                                                            diperbaiki
                                                        </DialogDescription>
                                                    </DialogHeader>

                                                    <div className="grid gap-4 py-4">
                                                        <div className="flex flex-col">
                                                            <Label
                                                                htmlFor="catatan"
                                                                className="text-left"
                                                            >
                                                                Catatan
                                                            </Label>

                                                            <Textarea
                                                                id="catatan"
                                                                onChange={(e) =>
                                                                    setData(
                                                                        "catatan",
                                                                        e.target
                                                                            .value,
                                                                    )
                                                                }
                                                                placeholder="Berikan catatan pengembalian tugas"
                                                                className="mt-1"
                                                            />
                                                        </div>
                                                    </div>
                                                    <DialogFooter>
                                                        <DialogClose asChild>
                                                            <Button variant="outline">
                                                                Batalkan
                                                            </Button>
                                                        </DialogClose>

                                                        <DialogClose asChild>
                                                            <Button
                                                                onClick={
                                                                    handleKembalikanTugas
                                                                }
                                                            >
                                                                Lanjutkan
                                                            </Button>
                                                        </DialogClose>
                                                    </DialogFooter>
                                                </DialogContent>
                                            </Dialog>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </>
                        )}
                    </TableBody>
                </Table>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </>
    );
};

export default TugasKelompok;
