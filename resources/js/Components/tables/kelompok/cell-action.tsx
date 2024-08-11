"use client";

// import { useRouter } from "next/navigation";
import { useState } from "react";

import { Link, useForm } from "@inertiajs/react";

import { Edit, MoreHorizontal, Trash } from "lucide-react";

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
import { Button, buttonVariants } from "@/Components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";

import { User } from "@/lib/data/data";
import { UserMaba } from "@/lib/types/User";

interface CellActionProps {
  data: UserMaba;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const {
    data: dataForm,
    setData,
    put,
  } = useForm({
    id: data.id,
    _method: "put",
  });

  const handleSubmitIsKetua = () => {
    put(route("dashboard.kelompok.set-ketua"));
  };

  return (
    <>
      <div className="flex gap-1 p-2">
        <Link
          href={`/dashboard/user/edit/${data.id}`}
          className={`${buttonVariants({ size: "sm" })}`}
        >
          Edit
        </Link>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" size={"sm"}>
              Set Ketua Kelompok
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Apakah kamu yakin?</AlertDialogTitle>
              <AlertDialogDescription>
                Kamu akan mengubah status user ini menjadi ketua kelompok.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleSubmitIsKetua}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
};
