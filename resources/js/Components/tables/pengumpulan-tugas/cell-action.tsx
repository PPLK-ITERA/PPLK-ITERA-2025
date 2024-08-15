import { TaskEntry } from "./columns";

import { useForm } from "@inertiajs/react";

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

interface CellActionProps {
  data: TaskEntry;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const {
    data: dataForm,
    setData: setDataForm,
    put,
  } = useForm({
    id: 0,
    catatan: "",
    _method: "put",
  });

  const handleKembalikanTugas = () => {
    put(route("dashboard.tugas.return"));
  };

  return (
    <>
      <div className="flex gap-1 p-2">
        <a
          href={`${data.tugas.jawaban ?? "#"}`}
          className={`${buttonVariants({ size: "sm" })}`}
        >
          Lihat Tugas
        </a>

        <Dialog>
          {data.tugas.isReturn ? null : (
            <DialogTrigger asChild>
              <Button
                className="gap-2"
                variant="outline"
                size="sm"
                onClick={() => setDataForm("id", data.tugas.id)}
              >
                Kembalikan Tugas
              </Button>
            </DialogTrigger>
          )}

          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Kembalikan Tugas</DialogTitle>
              <DialogDescription>
                Kembalikan tugas yang sudah dikerjakan oleh mahasiswa ini agar
                diperbaiki
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              <div className="flex flex-col">
                <Label htmlFor="catatan" className="text-left">
                  Catatan
                </Label>

                <Textarea
                  id="catatan"
                  onChange={(e) => setDataForm("catatan", e.target.value)}
                  placeholder="Berikan catatan pengembalian tugas"
                  className="mt-1"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Batalkan</Button>
              </DialogClose>

              <DialogClose asChild>
                <Button onClick={handleKembalikanTugas}>Lanjutkan</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};
