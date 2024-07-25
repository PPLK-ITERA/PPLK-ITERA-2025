import DashboardLayout from "@/Layouts/DashboardLayout";
import { format } from "date-fns";
import { useDebouncedCallback } from "use-debounce";



import React, { FormEvent, useEffect, useState } from "react";



import { useForm } from "@inertiajs/react";



import { CalendarIcon } from "lucide-react";



import { IconPlus } from "@tabler/icons-react";



import BookletForm from "@/Components/dashboard/booklet/BookletForm";
import { BookletTable } from "@/Components/dashboard/booklet/BookletTable";
import { Breadcrumbs } from "@/Components/ui/breadcrumbs";
import { Button } from "@/Components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/Components/ui/dialog";
import { Toaster } from "@/Components/ui/toaster";
import { toast } from "@/Components/ui/use-toast";


const breadcrumbItems = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Booklet", link: "/dashboard/booklet" },
];

export default function Page({ auth, response }) {
    const { data, setData, post, processing, errors } = useForm({
        nama_booklet: "",
        url_booklet: "",
    });

    function submit(e: FormEvent) {
        post(route("booklet.store"), {
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
        });
    }

    return (
        <DashboardLayout user={auth.user}>
            <Breadcrumbs items={breadcrumbItems} />
            <h2 className="text-3xl font-bold tracking-tight">Atur Booklet</h2>

            <div className="w-full flex place-content-end">
                {/* add dialog */}
                <Dialog>
                    <DialogTrigger asChild>
                        <Button>
                            <IconPlus size={18} />
                            <span>Tambah Booklet</span>
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Tambah Booklet</DialogTitle>
                        </DialogHeader>
                        <BookletForm onSubmit={submit} setData={setData} />
                    </DialogContent>
                </Dialog>
            </div>

            <BookletTable booklets={response.data} />
            <Toaster />
        </DashboardLayout>
    );
}