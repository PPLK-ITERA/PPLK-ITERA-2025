import { useState } from "react";

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
} from "@/Components/dashboard/ui/alert-dialog";
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
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/dashboard/ui/table";
import { Textarea } from "@/Components/dashboard/ui/textarea";

const invoices = [
    {
        num_faq: "1",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        num_faq: "2",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        num_faq: "3",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        num_faq: "4",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        num_faq: "5",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        num_faq: "6",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        num_faq: "7",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
];

export const faqData = [
    {
        num_faq: "1",
        question: "Apa itu PPLK ITERA?",
        answer: "PPLK ITERA adalah Program Pengenalan Lingkungan Kampus Institut Teknologi Sumatera (ITERA), sebuah acara penyambutan untuk mahasiswa baru",
    },
    {
        num_faq: "1",
        question: "Seberapa Imut cii aku?",
        answer: "You can contact support by emailing support@example.com.",
    },
    {
        num_faq: "1",
        question: "Dah macaan belumm?",
        answer: "The user manual is available on the help page of our website.",
    },
    {
        num_faq: "1",
        question: "Bingung ga cii kamu?",
        answer: "The user manual is available on the help page of our website.",
    },
    {
        num_faq: "1",
        question: "LENOONGSSS!!",
        answer: "The user manual is available on the help page of our website.",
    },
    {
        num_faq: "1",
        question: "Seberapa Imut cii aku?",
        answer: "You can contact support by emailing support@example.com.",
    },
    {
        num_faq: "1",
        question: "Dah macaan belumm?",
        answer: "The user manual is available on the help page of our website.",
    },
    {
        num_faq: "1",
        question: "Bingung ga cii kamu?",
        answer: "The user manual is available on the help page of our website.",
    },
    {
        num_faq: "1",
        question: "LENOONGSSS!!",
        answer: "The user manual is available on the help page of our website.",
    },
    {
        num_faq: "1",
        question: "Seberapa Imut cii aku?",
        answer: "You can contact support by emailing support@example.com.",
    },
    {
        num_faq: "1",
        question: "Dah macaan belumm?",
        answer: "The user manual is available on the help page of our website.",
    },
    {
        num_faq: "1",
        question: "Bingung ga cii kamu?",
        answer: "The user manual is available on the help page of our website.",
    },
    {
        num_faq: "1",
        question: "LENOONGSSS!!",
        answer: "The user manual is available on the help page of our website.",
    },
    {
        num_faq: "1",
        question: "Seberapa Imut cii aku?",
        answer: "You can contact support by emailing support@example.com.",
    },
    {
        num_faq: "1",
        question: "Dah macaan belumm?",
        answer: "The user manual is available on the help page of our website.",
    },
    {
        num_faq: "1",
        question: "Bingung ga cii kamu?",
        answer: "The user manual is available on the help page of our website.",
    },
    {
        num_faq: "1",
        question: "LENOONGSSS!!",
        answer: "The user manual is available on the help page of our website.",
    },
];

export function FAQTable() {
    return (
        <Table className="border">
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow className="hover:bg-current bg-current">
                    <TableHead className="w-[50px] text-white">No</TableHead>
                    <TableHead className="text-white w-[200px]">
                        Pertanyaan
                    </TableHead>
                    <TableHead className="text-white xl:w-[800px]">
                        Jawaban
                    </TableHead>
                    <TableHead className="text-white">Aksi</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {faqData.map((faq) => (
                    <TableRow key={faq.num_faq}>
                        <TableCell className="font-medium">
                            {faq.num_faq}
                        </TableCell>

                        <TableCell>
                            <p className="line-clamp-1">{faq.question}</p>
                        </TableCell>

                        <TableCell>
                            <p className="line-clamp-1">{faq.answer}</p>
                        </TableCell>

                        <TableCell className="flex gap-2 text-right">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button className="gap-2">Edit</Button>
                                </DialogTrigger>

                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Edit FAQ</DialogTitle>
                                        <DialogDescription>
                                            Edit data pertanyaan dan jawaban
                                            FAQ.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="flex flex-col">
                                            <Label
                                                htmlFor="question"
                                                className="text-left"
                                            >
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
                                            <Label
                                                htmlFor="asnwer"
                                                className="text-left"
                                            >
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
                                        <Button variant={"outline"}>
                                            Batalkan
                                        </Button>
                                        <Button type="submit">Simpan</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>

                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className="text-red-500 border border-red-500"
                                    >
                                        Delete
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>
                                            Apakah kamu yakin?
                                        </AlertDialogTitle>
                                        <AlertDialogDescription>
                                            Pertanyaan dan jawaban FAQ akan
                                            dihapus permanen dan tidak dapat
                                            dikembalikan.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>
                                            Cancel
                                        </AlertDialogCancel>
                                        <AlertDialogAction>
                                            Continue
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            {/* <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
            </TableFooter> */}
        </Table>
    );
}
