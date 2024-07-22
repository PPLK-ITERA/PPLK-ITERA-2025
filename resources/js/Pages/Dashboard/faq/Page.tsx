import DashboardLayout from "@/Layouts/DashboardLayout";

import React from "react";

import { IconPlus, IconSearch } from "@tabler/icons-react";

import { Breadcrumbs } from "@/Components/dashboard/breadcrumbs";
import { FAQTable } from "@/Components/dashboard/faq/FAQTable";
import { Button } from "@/Components/dashboard/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/dashboard/ui/dialog";
import { Input } from "@/Components/dashboard/ui/input";
import { Label } from "@/Components/dashboard/ui/label";
import { Textarea } from "@/Components/dashboard/ui/textarea";

const breadcrumbItems = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Faq", link: "/dashboard/faq" },
];

export default function Page({ auth }) {
    return (
        <DashboardLayout user={auth.user}>
            <Breadcrumbs items={breadcrumbItems} />
            <h2 className="text-3xl font-bold tracking-tight">Atur FAQ</h2>

            <Dialog>
                <DialogTrigger asChild>
                    <Button className="gap-2">
                        <IconPlus size={20} className="-ml-2" /> Tambah FAQ
                    </Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Tambah FAQ</DialogTitle>
                        <DialogDescription>
                            Tambahkan pertanyaan dan jawaban FAQ baru.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="flex flex-col">
                            <Label htmlFor="question" className="text-left">
                                Pertanyaan
                            </Label>

                            <Input
                                id="question"
                                value=""
                                placeholder="Pertanyaan"
                                className="mt-1"
                            />
                        </div>

                        <div className="flex flex-col">
                            <Label htmlFor="asnwer" className="text-left">
                                Jawaban
                            </Label>

                            <Textarea
                                id="asnwer"
                                value=""
                                placeholder="Jawaban dari pertanyaan"
                                className="mt-1"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant={"outline"}>Batalkan</Button>
                        <Button type="submit">Tambah</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <div className="flex flex-col">
                <Label htmlFor="searchFAQ" className="text-left">
                    Cari FAQ
                </Label>

                <div className="relative max-w-sm mt-2">
                    <Input
                        id="searchFAQ"
                        value=""
                        placeholder="Pertanyaan"
                        className="pl-8"
                    />

                    <IconSearch
                        className="left-1 top-1/2 absolute rotate-90 -translate-y-1/2"
                        size={18}
                    />
                </div>
            </div>

            <FAQTable />
        </DashboardLayout>
    );
}
