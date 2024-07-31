import BookletForm from "./BookletForm";
import { Switch } from "@headlessui/react";
import { DialogClose, DialogTrigger } from "@radix-ui/react-dialog";
import { Label } from "recharts";

import { FormEvent } from "react";

import { router, useForm } from "@inertiajs/react";

import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/Components/ui/dialog";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import { toast } from "@/Components/ui/use-toast";

import { Booklet } from "@/lib/types/Booklet";

export function BookletTable({ booklets }: { booklets: Booklet[] }) {
    const {
        data,
        setData,
        delete: destroy,
        post,
        put,
        processing,
        errors,
    } = useForm<Booklet>();

    function deleteBooklet(booklet: Booklet) {
        toast({
            title: "Menghapus Booklet...",
        });

        destroy(route("booklet.destroy", booklet), {
            onSuccess: () => {
                toast({
                    title: "Berhasil menghapus Booklet!",
                    description: "Booklet berhasil dihapus.",
                });
            },
        });
    }

    function edit(e: FormEvent) {
        toast({
            title: "Mengedit Booklet...",
        });

        put(
            route("booklet.update", {
                onError: () => {
                    toast({
                        title: "Uh oh! Gagal mengupload Booklet.",
                        description: errors.nama_booklet || errors.url_booklet,
                    });
                },
                onSuccess: () => {
                    toast({
                        title: "Berhasil mengupload Booklet!",
                        description: "Booklet berhasil diupload.",
                    });
                },
            }),
        );
    }

    return (
        <Table className="border">
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow className="hover:bg-current bg-current">
                    <TableHead className="w-[50px] text-white">No</TableHead>
                    <TableHead className="text-white">Nama Booklet</TableHead>
                    <TableHead className="text-white">Link</TableHead>
                    <TableHead className="text-white">Status</TableHead>
                    <TableHead className="text-white">Aksi</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {booklets.map((booklet, i) => (
                    <TableRow key={booklet.id}>
                        <TableCell className="font-medium">{i}</TableCell>
                        <TableCell>{booklet.nama_booklet}</TableCell>
                        <TableCell>{booklet.url_booklet}</TableCell>
                        <TableCell className="flex gap-2">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button className="bg-red-500">
                                        Hapus
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>
                                            Hapus booklet {booklet.nama_booklet}{" "}
                                            ?
                                        </DialogTitle>
                                    </DialogHeader>
                                    <div className="flex gap-4">
                                        <Button
                                            onClick={() =>
                                                deleteBooklet(booklet)
                                            }
                                        >
                                            Yes
                                        </Button>
                                        <DialogClose>
                                            <Button>Cancel</Button>
                                        </DialogClose>
                                    </div>
                                </DialogContent>
                            </Dialog>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button onClick={() => setData(booklet)}>
                                        Edit
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Edit Booklet</DialogTitle>
                                    </DialogHeader>
                                    <BookletForm
                                        booklet={booklet}
                                        onSubmit={edit}
                                        setData={setData}
                                    />
                                </DialogContent>
                            </Dialog>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
