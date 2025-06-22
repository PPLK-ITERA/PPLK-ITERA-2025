import React, { FC, useEffect, useState } from "react";

import { Link, useForm } from "@inertiajs/react";

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
import { Label } from "@/Components/ui/label";
import { ScrollArea, ScrollBar } from "@/Components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import { Textarea } from "@/Components/ui/textarea";

interface Poster {
  id: number;
  isReturn: boolean;
  url_poster: string;
  hari: string;
}

interface TugasKelompokProps {}

const CoverMading: FC<TugasKelompokProps> = ({}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [dataPostersTugas, setDataPostersTugas] = useState<Poster[]>([]);

  const getPosterTugas = async () => {
    setLoading(true);

    const response = await fetch(route("dashboard.tugas.data.poster"), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const poster = await response.json();
    setDataPostersTugas(poster);

    setLoading(false);
  };

  useEffect(() => {
    getPosterTugas();
  }, []);

  const { data, setData, put } = useForm({
    hari: "",
    _method: "put",
  });

  const handleKembalikanPoster = () => {
    put(route("dashboard.tugas.return-poster"));
  };

  return (
    <>
      <ScrollArea className="whitespace-nowrap max-w-7xl mt-5 overflow-hidden rounded-md">
        <Table className="relative border">
          <TableHeader>
            <TableRow className="hover:bg-current bg-current">
              <TableHead className="w-[50px] text-white">No</TableHead>
              <TableHead className="text-white w-[400px]">Link</TableHead>
              <TableHead className="text-white">Status Pengembalian</TableHead>
              <TableHead className="text-white">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="min-h-28 relative">
            {loading ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center">
                  Loading...
                </TableCell>
              </TableRow>
            ) : (
              <>
                {dataPostersTugas.map((poster, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>
                      {poster.url_poster !== null ? (
                        <>
                          <img
                            className="line-clamp-1 text-wrap w-[50%] h-[50%]"
                            src={poster.url_poster}
                          />
                        </>
                      ) : (
                        <p>Belum ada poster</p>
                      )}
                    </TableCell>
                    <TableCell>
                      {poster.isReturn ? "Dikembalikan" : "Diterima"}
                    </TableCell>
                    <TableCell className="gap-1">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            className="gap-2"
                            variant="outline"
                            size="sm"
                            onClick={() => setData("hari", poster.hari)}
                          >
                            Kembalikan Poster
                          </Button>
                        </DialogTrigger>

                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Kembalikan Poster</DialogTitle>
                            <DialogDescription>
                              Kembalikan tugas yang sudah dikerjakan oleh
                              mahasiswa ini agar diperbaiki
                            </DialogDescription>
                          </DialogHeader>

                          <DialogFooter>
                            <DialogClose asChild>
                              <Button variant="outline">Batalkan</Button>
                            </DialogClose>

                            <DialogClose asChild>
                              <Button onClick={handleKembalikanPoster}>
                                Lanjutkan
                              </Button>
                            </DialogClose>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </>
            )}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </>
  );
};

export default CoverMading;
