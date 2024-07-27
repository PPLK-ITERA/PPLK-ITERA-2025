import DashboardLayout from "@/Layouts/DashboardLayout";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { useDebouncedCallback } from "use-debounce";

import React, { FormEvent, useEffect, useState } from "react";

import { useForm } from "@inertiajs/react";

import { CalendarIcon } from "lucide-react";

import { IconPlus } from "@tabler/icons-react";

import { BookletCellActions } from "@/Components/booklet/BookletCellActions";
import BookletForm from "@/Components/dashboard/booklet/BookletForm";
import { BookletTable } from "@/Components/dashboard/booklet/BookletTable";
import { CellAction } from "@/Components/tables/cui/cell-action";
import { Breadcrumbs } from "@/Components/ui/breadcrumbs";
import { Button } from "@/Components/ui/button";
import { DataTable } from "@/Components/ui/data-table";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Toaster } from "@/Components/ui/toaster";
import { toast } from "@/Components/ui/use-toast";

import { Booklet } from "@/lib/types/Booklet";

const breadcrumbItems = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Booklet", link: "/dashboard/booklet" },
];

export default function Page({ auth, response }) {
    const { data, setData, post, processing, errors } = useForm<Booklet>();

    function submit(e: FormEvent<HTMLFormElement>) {
        let d = {
            nama_booklet: e.currentTarget.nama_booklet.value,
            url_booklet: e.currentTarget.url_booklet.value,
        };

        post(route("dashboard.booklet.store", d), {
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
        window.location.reload();
    }

    const columns: ColumnDef<Booklet>[] = [
        {
            id: "no",
            header: "No",
            cell: ({ row }) => row.index + 1,
        },
        {
            id: "nama_booklet",
            accessorKey: "booklet.nama_booklet",
            header: "Nama",
        },
        {
            id: "url_booklet",
            accessorKey: "booklet.url_booklet",
            header: "Link Booklet",
        },
        {
            id: "action",
            header: "Aksi",
            cell: ({ row }) => (
                <BookletCellActions
                    submit={submit}
                    setData={setData}
                    booklet={row.original.booklet}
                />
            ),
        },
    ];

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
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Tambah Booklet</DialogTitle>
                        </DialogHeader>
                        <BookletForm onSubmit={submit} setData={setData} />
                    </DialogContent>
                </Dialog>
            </div>

            <DataTable
                searchKey="name"
                columns={columns}
                apiEndpoint={route("dashboard.booklet.data")}
                title={"Data Booklet"}
                description={"Data Booklet yang telah diupload."}
            />
            <Toaster />
        </DashboardLayout>
    );
}
