"use client";

// import { useRouter } from "next/navigation";
import { DialogClose } from "@radix-ui/react-dialog";

import { FormEvent, useState } from "react";

import { router } from "@inertiajs/react";

import { Edit, MoreHorizontal, Trash } from "lucide-react";

import { IconPlus, IconTrash, IconTrashFilled } from "@tabler/icons-react";

import BookletForm from "@/Components/dashboard/booklet/BookletForm";
import { AlertModal } from "@/Components/dashboard/modal/alert-modal";
import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { toast } from "@/Components/ui/use-toast";

import { User } from "@/lib/data/data";
import { Booklet } from "@/lib/types/Booklet";
import { LogBookCui } from "@/lib/types/LogBookCui";

interface BookletActionProps {
    booklet: Booklet;
    submit: any;
    setData: any;
}

export const BookletCellActions: React.FC<BookletActionProps> = ({
    booklet,
    submit,
    setData,
}) => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    // const router = useRouter();

    const onDelete = async () => {
        console.log(booklet);
        router.delete(route("dashboard.booklet.destroy", booklet), {
            onError: () => {
                toast({
                    title: "Uh oh! Gagal menghapus Booklet.",
                    description: "Gagal menghapus booklet.",
                });
            },
            onSuccess: () => {
                toast({
                    title: "Berhasil menghapus Booklet!",
                    description: "Booklet berhasil dihapus.",
                });
            },
        });
        window.location.reload();
    };

    function onUpdate(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        let newBooklet = {
            id: booklet.id,
            nama_booklet: e.currentTarget.nama_booklet.value,
            url_booklet: e.currentTarget.url_booklet.value,
        };

        router.put(route("dashboard.booklet.update", newBooklet), newBooklet, {
            onError: () => {
                toast({
                    title: "Uh oh! Gagal menghapus Booklet.",
                    description: "Gagal menghapus booklet.",
                });
            },
            onSuccess: () => {
                toast({
                    title: "Berhasil menghapus Booklet!",
                    description: "Booklet berhasil dihapus.",
                });
            },
        });
        window.location.reload();
    }

    return (
        <>
            <div className="flex gap-1 p-2">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button
                            className="bg-red-500"
                            onClick={() => setData(booklet)}
                        >
                            <IconTrashFilled size={18} />
                            <span>Hapus</span>
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Hapus Booklet</DialogTitle>
                        </DialogHeader>
                        <div>
                            <p>
                                Apakah anda yakin ingin menghapus booklet
                                {booklet.nama_booklet}?
                            </p>
                            <div className="flex justify-end gap-2 mt-4">
                                <DialogClose asChild>
                                    <Button>Batal</Button>
                                </DialogClose>
                                <Button
                                    onClick={onDelete}
                                    className="bg-red-500"
                                >
                                    Hapus
                                </Button>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button onClick={() => setData(booklet)}>
                            <span>Edit</span>
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Edit Booklet</DialogTitle>
                        </DialogHeader>
                        <BookletForm
                            booklet={booklet}
                            onSubmit={onUpdate}
                            setData={setData}
                        />
                    </DialogContent>
                </Dialog>
            </div>
        </>
    );
};
