// import { useRouter } from "next/navigation";
import { useState } from "react";

import { useForm } from "@inertiajs/react";

import { AlertModal } from "@/Components/dashboard/modal/alert-modal";
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
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import { useToast } from "@/Components/ui/use-toast";

import { FAQ } from "@/lib/data/faq";

interface CellActionProps {
  data: FAQ;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const { toast } = useToast();

  const {
    data: faq,
    setData,
    put,
    delete: destroy,
    processing,
  } = useForm({
    id: 0,
    teks_pertanyaan: "",
    teks_jawaban: "",
  });

  const changeData = (faq: FAQ) => {
    setData(faq.faq);
  };

  const editFAQ = (faq: FAQ) => {
    put(
      route("dashboard.faq.update", {
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
  const deleteFAQ = (faq: FAQ) => {
    destroy(route("dashboard.faq.destroy"), {
      onSuccess: () => {
        toast({
          title: "FAQ berhasil dihapus.",
          variant: "default",
        });
      },
    });
  };

  return (
    <>
      <div className="flex gap-1 p-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2" onClick={() => changeData(data)}>
              Edit
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit FAQ</DialogTitle>
              <DialogDescription>
                Edit data pertanyaan dan jawaban FAQ.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="flex flex-col">
                <Label htmlFor="question" className="text-left">
                  Pertanyaan
                </Label>

                <Input
                  id="question"
                  value={faq.teks_pertanyaan}
                  onChange={(e) => setData("teks_pertanyaan", e.target.value)}
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
                  value={faq.teks_jawaban}
                  onChange={(e) => setData("teks_jawaban", e.target.value)}
                  placeholder="Jawaban dari pertanyaan"
                  className="mt-1"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant={"outline"} disabled={processing}>
                  Batalkan
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button
                  type="submit"
                  onClick={() => {
                    editFAQ(data);
                    window.location.reload();
                  }}
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
              onClick={() => changeData(data)}
            >
              Delete
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Apakah kamu yakin?</AlertDialogTitle>
              <AlertDialogDescription>
                Pertanyaan dan jawaban FAQ akan dihapus permanen dan tidak dapat
                dikembalikan.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  deleteFAQ(data);
                  window.location.reload();
                }}
              >
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
};
