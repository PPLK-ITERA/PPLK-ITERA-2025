import { DialogClose } from "@radix-ui/react-dialog";

import { FormEvent, useEffect, useState } from "react";

import { router, useForm } from "@inertiajs/react";

import { IconTrashFilled } from "@tabler/icons-react";

import BookletForm from "@/Components/dashboard/booklet/BookletForm";
import { Button } from "@/Components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import { toast } from "@/Components/ui/use-toast";

import { Booklet } from "@/lib/types/Booklet";

interface BookletActionProps {
  booklet: Booklet;
}

export const BookletCellActions: React.FC<BookletActionProps> = ({
  booklet,
}) => {
  const {
    data,
    setData,
    delete: del,
    processing,
    errors,
  } = useForm<Booklet>(booklet);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  useEffect(() => {
    if (deleteDialogOpen || editDialogOpen) {
      setData(booklet);
    }
  }, [deleteDialogOpen, editDialogOpen, booklet, setData]);

  function onDelete() {
    del(route("dashboard.booklet.destroy", booklet.id), {
      onError: () => {
        toast({
          title: "Uh oh! Gagal menghapus Booklet.",
          description: errors.nama_booklet || errors.url_booklet,
        });
      },
      onSuccess: () => {
        toast({
          title: "Berhasil!",
          description: "Booklet berhasil dihapus.",
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
              <DialogTitle>Hapus Booklet</DialogTitle>
            </DialogHeader>
            <div>
              <p>
                Apakah anda yakin ingin menghapus booklet {booklet.nama_booklet}
                ?
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
              <DialogTitle>Edit Booklet</DialogTitle>
            </DialogHeader>
            <BookletForm booklet={booklet} />
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};
