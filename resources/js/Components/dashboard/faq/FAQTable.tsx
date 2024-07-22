import { DialogClose } from "@radix-ui/react-dialog";

import { useForm } from "@inertiajs/react";

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
import { useToast } from "@/Components/ui/use-toast";

export type dataFAQS = {
    id: number;
    teks_pertanyaan: string;
    teks_jawaban: string;
};

export function FAQTable({ dataFAQS }: { dataFAQS: dataFAQS[] }) {
    const { toast } = useToast();
    const {
        data,
        setData,
        put,
        delete: destroy,
        processing,
        errors,
        reset,
    } = useForm({
        teks_pertanyaan: "",
        teks_jawaban: "",
    });

    const changeData = (faq: dataFAQS) => {
        setData({
            teks_pertanyaan: faq.teks_pertanyaan,
            teks_jawaban: faq.teks_jawaban,
        });
    };

    const editFAQ = (faq: dataFAQS) => {
        put(
            route("faqs.update", faq, {
                onSuccess: () => {
                    toast({
                        title: "FAQ berhasil diubah.",
                        variant: "default",
                    });
                },
            }),
        );
    };

    // Todo: Add toaster for success and error message
    const deleteFAQ = (faq: dataFAQS) => {
        destroy(route("faqs.destroy", faq), {
            onSuccess: () => {
                toast({
                    title: "FAQ berhasil dihapus.",
                    variant: "default",
                });
            },
        });
    };

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
                {dataFAQS.map((faq, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">
                            {index + 1}
                        </TableCell>

                        <TableCell>
                            <p className="line-clamp-1">
                                {faq.teks_pertanyaan}
                            </p>
                        </TableCell>

                        <TableCell>
                            <p className="line-clamp-1">{faq.teks_jawaban}</p>
                        </TableCell>

                        <TableCell className="flex gap-2 text-right">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        className="gap-2"
                                        onClick={() => changeData(faq)}
                                    >
                                        Edit
                                    </Button>
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
                                                value={data.teks_pertanyaan}
                                                onChange={(e) =>
                                                    setData(
                                                        "teks_pertanyaan",
                                                        e.target.value,
                                                    )
                                                }
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
                                                value={data.teks_jawaban}
                                                onChange={(e) =>
                                                    setData(
                                                        "teks_jawaban",
                                                        e.target.value,
                                                    )
                                                }
                                                placeholder="Jawaban dari pertanyaan"
                                                className="mt-1"
                                            />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <DialogClose asChild>
                                            <Button
                                                variant={"outline"}
                                                disabled={processing}
                                            >
                                                Batalkan
                                            </Button>
                                        </DialogClose>
                                        <DialogClose asChild>
                                            <Button
                                                type="submit"
                                                onClick={() => editFAQ(faq)}
                                                disabled={processing}
                                            >
                                                Simpan
                                            </Button>
                                        </DialogClose>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>

                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className="hover:text-red-500 hover:opacity-90 text-red-500 border border-red-500"
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
                                        <AlertDialogAction
                                            onClick={() => deleteFAQ(faq)}
                                        >
                                            Continue
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
