import DashboardLayout from "@/Layouts/DashboardLayout";
import { format } from "date-fns";
import { useDebouncedCallback } from "use-debounce";

import React, { FormEvent, useEffect, useState } from "react";

import { CalendarIcon } from "lucide-react";

import { IconPlus } from "@tabler/icons-react";

import { BookletTable } from "@/Components/dashboard/booklet/BookletTable";
import { Breadcrumbs } from "@/Components/dashboard/breadcrumbs";
import { Button } from "@/Components/dashboard/ui/button";
import { Calendar } from "@/Components/dashboard/ui/calendar";
import { Input } from "@/Components/dashboard/ui/input";
import { Label } from "@/Components/dashboard/ui/label";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/dashboard/ui/popover";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";

import { cn } from "@/lib/utils";
import { useForm } from "@inertiajs/react";
import BookletForm from "@/Components/dashboard/booklet/BookletForm";

const breadcrumbItems = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Booklet", link: "/dashboard/booklet" },
];

export default function Page({ auth, response }) {
    const { data, setData, post, processing } = useForm({
        nama_booklet: "",
        url_booklet: "",
    });

    function submit(e: FormEvent) {
        const data = new FormData(e.target as HTMLFormElement);
        setData("nama_booklet", data.get("nama_booklet") as string);
        setData("url_booklet", data.get("url_booklet") as string);
        post(route())
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
                        <BookletForm onSubmit={submit} />
                    </DialogContent>
                </Dialog>
            </div>

            <BookletTable booklets={response.data} onsubmi />
        </DashboardLayout>
    );
}
