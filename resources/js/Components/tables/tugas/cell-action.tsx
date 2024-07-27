"use client";

import { PageProps } from "vendor/laravel/breeze/stubs/inertia-react-ts/resources/js/types";

import { useState } from "react";

import { usePage } from "@inertiajs/react";

import { AlertModal } from "@/Components/dashboard/modal/alert-modal";
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
import { Textarea } from "@/Components/ui/textarea";

import { tugasData } from "@/lib/types/Tugas";
import { UserAuthProps } from "@/lib/types/User";

interface CellActionProps {
    data: tugasData;
}

export const CellAction: React.FC<CellActionProps> = () => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    type MyPage = PageProps<{
        auth: {
            user: UserAuthProps;
        };
    }>;

    const { auth } = usePage<MyPage>().props;

    const onConfirm = async () => {};

    return (
        <>
            <AlertModal
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={onConfirm}
                loading={loading}
            />
            <div className="flex gap-1 p-2">
                <Button size="sm">Lihat Tugas</Button>
                {auth.user.role_id === 4 || auth.user.role_id === 3 ? (
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="gap-2" variant={"outline"}>
                                Kembalikan Tugas
                            </Button>
                        </DialogTrigger>

                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Kembalikan Tugas</DialogTitle>
                                <DialogDescription>
                                    Kembalikan tugas yang sudah dikerjakan oleh
                                    mahasiswa ini agar diperbaiki
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
                                        onChange={(e) => e.target.value}
                                        placeholder="Berikan catatan pengembalian tugas"
                                        className="mt-1"
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button variant={"outline"}>
                                        Batalkan
                                    </Button>
                                </DialogClose>

                                <DialogClose asChild>
                                    <Button>Lanjutkan</Button>
                                </DialogClose>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                ) : null}
            </div>
        </>
    );
};
