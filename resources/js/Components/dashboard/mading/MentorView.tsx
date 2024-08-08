import React, { useEffect, useState } from "react";

import { Link, useForm } from "@inertiajs/react";

import { IconExternalLink } from "@tabler/icons-react";

import { Button, buttonVariants } from "@/Components/ui/button";
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

import { tugasData } from "@/lib/types/Tugas";

import kotakajaib from "!assets/kotakajaib.png";
import podium_mading from "!assets/podium-mading.png";

const dataTugas = [
    {
        id: 1,
        nama: "Ujang Good Day",
        link: "drive.google.com/kjksjkdj",
    },
    {
        id: 2,
        nama: "Siti Good Day",
        link: "drive.google.com/kjksjkdj",
    },
    {
        id: 3,
        nama: "Good Day",
        link: "drive.google.com/kjksjkdj",
    },
];

export default function MentorView() {
    const { data, setData } = useForm<tugasData[]>();
    const [loading, setLoading] = useState(true);

    const getTugasKelompok = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                route("dashboard.tugas.data.kelompok"),
            );
            const data = await response.json();
            setData(data.data);
            //  //console.log(data.data);
            setLoading(false);
        } catch (error) {
            console.error("Failed to fetch tasks:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getTugasKelompok();
    }, []);

    return (
        <div>
            <Link
                href="/dashboard/informasi-kelompok"
                className="flex items-center gap-1"
            >
                <h2 className="text-2xl font-bold tracking-tight">
                    Kelompok 73 Nawasena
                </h2>

                <IconExternalLink className="mt-1" />
            </Link>

            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight">
                    Tugas Kelompok
                </h2>

                <Button onClick={() => getTugasKelompok()}>
                    Downloade Excel
                </Button>
            </div>

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
                            <TableHead className="text-white xl:w-[800px]">
                                Link
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
                                {data.map((tugas, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">
                                            {index + 1}
                                        </TableCell>
                                        <TableCell>
                                            <p className="line-clamp-1">
                                                {tugas.tugas.materi}
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            <p className="line-clamp-1">
                                                {tugas.tugas.link}
                                            </p>
                                        </TableCell>
                                        <TableCell className="flex gap-2 text-right">
                                            <Link
                                                className={`${buttonVariants({ variant: "default" })} gap-2`}
                                                href={tugas.tugas.link}
                                            >
                                                Lihat Tugas
                                            </Link>
                                            <Link
                                                className={`${buttonVariants({ variant: "outline" })} gap-2`}
                                                href="/dashboard/informasi-kelompok/edit-maba"
                                            >
                                                Kembalikan Tugas
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </>
                        )}
                    </TableBody>
                </Table>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>

            <div className="flex items-center justify-between mt-20">
                <h2 className="text-2xl font-bold tracking-tight">
                    Cover Mading
                </h2>
            </div>

            <div className="lg:flex-row flex flex-col-reverse gap-5">
                <div className="lg:w-1/2 w-full">
                    <ScrollArea className="whitespace-nowrap w-full mt-5 overflow-hidden rounded-md">
                        <Table className="relative border">
                            <TableHeader>
                                <TableRow className="hover:bg-current bg-current">
                                    <TableHead className="w-[50px] text-white">
                                        No
                                    </TableHead>
                                    <TableHead className="text-white">
                                        Link
                                    </TableHead>
                                    <TableHead className="text-white">
                                        Aksi
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {dataTugas.map((maba, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">
                                            {index + 1}
                                        </TableCell>

                                        <TableCell>
                                            <p className="line-clamp-1">
                                                {maba.link}
                                            </p>
                                        </TableCell>

                                        <TableCell className="flex gap-2 text-right">
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button
                                                        className="gap-2"
                                                        variant={"outline"}
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
                                                                htmlFor="asnwer"
                                                                className="text-left"
                                                            >
                                                                Catatatan
                                                            </Label>

                                                            <Textarea
                                                                id="asnwer"
                                                                onChange={(e) =>
                                                                    e.target
                                                                        .value
                                                                }
                                                                placeholder="Berikan catatan pengembalian tugas"
                                                                className="mt-1"
                                                            />
                                                        </div>
                                                    </div>
                                                    <DialogFooter>
                                                        <DialogClose asChild>
                                                            <Button
                                                                variant={
                                                                    "outline"
                                                                }
                                                            >
                                                                Batalkan
                                                            </Button>
                                                        </DialogClose>

                                                        <DialogClose asChild>
                                                            <Button>
                                                                Lanjutkan
                                                            </Button>
                                                        </DialogClose>
                                                    </DialogFooter>
                                                </DialogContent>
                                            </Dialog>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </div>

                <div className="lg:w-1/2 w-full">
                    <div className="flex flex-col items-center justify-center p-5 mx-auto mt-5 bg-transparent border rounded-md">
                        <h3 className="text-lg font-semibold">Preview</h3>

                        <img
                            src={kotakajaib}
                            alt="kotakajaib"
                            className="-translate-z-96 scale-75"
                        />

                        <img
                            src={podium_mading}
                            alt="podium_mading"
                            className="translate-z-10 md:-mt-24 -mt-16"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
