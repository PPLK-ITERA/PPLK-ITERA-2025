"use client";

import { DataPJProdi } from "./columns";

import { Link, router, useForm } from "@inertiajs/react";

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
import { Textarea } from "@/Components/ui/textarea";
import { Toaster } from "@/Components/ui/toaster";
import { toast } from "@/Components/ui/use-toast";

interface CellActionProps {
    data: DataPJProdi;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
    const {
        data: dataFormAbsensi,
        setData: setDataFormAbsensi,
        get,
        post,
        processing,
        errors,
    } = useForm({
        id: data.id,
        kehadiran: "",
        keterangan: "",
    });

    const handleIzin = () => {
        router.post(
            route("dashboard.presensi.absen"),
            { ...dataFormAbsensi, kehadiran: "Izin" },
            {
                onSuccess: () => {
                    toast({
                        title: "Berhasil",
                        description: `Berhasil mengizinkan ${data.user.name}`,
                    });
                    window.location.reload();
                },
            },
        );
    };

    const handleAbsen = () => {
        router.post(
            route("dashboard.presensi.absen"),
            { ...dataFormAbsensi, kehadiran: "Hadir" },
            {
                onSuccess: () => {
                    toast({
                        title: "Berhasil",
                        description: `Berhasil mengabsen ${data.user.name}`,
                    });
                    window.location.reload();
                },
            },
        );
    };

    return (
        <>
            <div className="flex gap-1 p-2">
                <Link
                    className={buttonVariants({
                        size: "sm",
                    })}
                    href={route("dashboard.user.edit", data.id)}
                >
                    Edit
                </Link>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button
                            className="gap-2"
                            size={"sm"}
                            variant={"outline"}
                        >
                            Set Izin
                        </Button>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>
                                Ingin Set Izin {data.user.name} ?
                            </DialogTitle>
                            <DialogDescription>
                                Isi bagian catatan dan aksi ini akan mengubah
                                status maba menjadi izin
                            </DialogDescription>
                        </DialogHeader>

                        <div className="grid gap-4 py-4">
                            <div className="flex flex-col">
                                <Label htmlFor="asnwer" className="text-left">
                                    Catatan
                                </Label>

                                <Textarea
                                    id="asnwer"
                                    value={dataFormAbsensi.keterangan}
                                    onChange={(e) =>
                                        setDataFormAbsensi(
                                            "keterangan",
                                            e.target.value,
                                        )
                                    }
                                    placeholder="Berikan catatan izin"
                                    className="mt-1"
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant={"outline"}>Batalkan</Button>
                            </DialogClose>

                            <DialogClose asChild>
                                <Button onClick={handleIzin}>Lanjutkan</Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
            <Toaster />
        </>
    );
};
