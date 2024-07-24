import DashboardLayout from "@/Layouts/DashboardLayout";

import React from "react";

import { useForm } from "@inertiajs/react";

import { IconPlus, IconSearch } from "@tabler/icons-react";

import { FAQTable } from "@/Components/dashboard/faq/FAQTable";
import { Breadcrumbs } from "@/Components/ui/breadcrumbs";
import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";

const breadcrumbItems = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Faq", link: "/dashboard/faq" },
];

export default function Page({ auth, response }) {
    const dataFAQS = response.data;

    const { data, setData, post, processing, errors } = useForm({
        pertanyaan: "",
        jawaban: "",
    });

    const addFAQ = () => {
        post(route("faq.store"));
    };

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
                                value={data.pertanyaan}
                                onChange={(e) =>
                                    setData("pertanyaan", e.target.value)
                                }
                                placeholder="Pertanyaan"
                                className="mt-1"
                            />
                        </div>

                        <div className="flex flex-col">
                            <Label htmlFor="asnwer" className="text-left">
                                Jawaban
                            </Label>

                            <Textarea
                                id="answer"
                                value={data.jawaban}
                                onChange={(e) =>
                                    setData("jawaban", e.target.value)
                                }
                                placeholder="Jawaban dari pertanyaan"
                                className="mt-1"
                            />
                        </div>
                    </div>

                    <DialogFooter>
                        <Button variant={"outline"}>Batalkan</Button>
                        <Button
                            type="submit"
                            onClick={addFAQ}
                            disabled={processing}
                        >
                            Tambah
                        </Button>
                    </DialogFooter>

                    {processing && <p>Sending data...</p>}
                    {errors && (
                        <ul>
                            {Object.keys(errors).map((key) => (
                                <li key={key}>{errors[key]}</li>
                            ))}
                        </ul>
                    )}
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

            <FAQTable dataFAQS={dataFAQS} />
        </DashboardLayout>
    );
}
