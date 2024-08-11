"use client";

import { DialogClose } from "@radix-ui/react-dialog";

import { FormEvent, useEffect, useState } from "react";

import { router, useForm } from "@inertiajs/react";

import { IconTrashFilled } from "@tabler/icons-react";

import MateriForm from "@/Components/dashboard/materi/MateriForm";
import { Button } from "@/Components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import { toast } from "@/Components/ui/use-toast";

import { Materi } from "@/lib/types/Materi";

interface MateriActionProps {
  materi: Materi;
}

export const MateriCellActions: React.FC<MateriActionProps> = ({ materi }) => {
  const {
    data,
    setData,
    delete: del,
    processing,
    errors,
  } = useForm<Materi>(materi);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  useEffect(() => {
    if (deleteDialogOpen || editDialogOpen) {
      setData(materi);
    }
  }, [deleteDialogOpen, editDialogOpen, materi, setData]);

  function onDelete() {
    del(route("dashboard.materi.destroy"), {
      onError: () => {
        toast({
          title: "Uh oh! Gagal menghapus Materi.",
          description: errors.nama_materi || errors.link_materi,
        });
      },
      onSuccess: () => {
        toast({
          title: "Berhasil!",
          description: "Materi berhasil dihapus.",
        });
      },
    });
    window.location.reload();
  }

  return (
    <>
      <div className="flex gap-1 p-2">
        <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
          <DialogTrigger asChild>
            <Button
              className="bg-red-500"
              onClick={() => setDeleteDialogOpen(true)}
            >
              <IconTrashFilled size={18} />
              <span>Hapus</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Hapus Materi</DialogTitle>
            </DialogHeader>
            <div>
              <p>
                Apakah anda yakin ingin menghapus materi {materi.nama_materi}?
              </p>
              <div className="flex justify-end gap-2 mt-4">
                <DialogClose asChild>
                  <Button>Batal</Button>
                </DialogClose>
                <Button onClick={onDelete} className="bg-red-500">
                  Hapus
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setEditDialogOpen(true)}>
              <span>Edit</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Materi</DialogTitle>
            </DialogHeader>
            <MateriForm materi={materi} />
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};
