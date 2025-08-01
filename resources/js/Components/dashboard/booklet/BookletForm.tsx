import { useDebouncedCallback } from "use-debounce";

import React, { FormEvent, useState } from "react";

import { useForm } from "@inertiajs/react";

import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Toaster } from "@/Components/ui/toaster";
import { useToast } from "@/Components/ui/use-toast";

import { Booklet } from "@/lib/types/Booklet";

type Props = {
  booklet?: Booklet;
};

function BookletForm({ booklet }: Props) {
  const { toast } = useToast();

  const { data, setData, post, put, processing, errors } =
    useForm<Booklet>(booklet);
  const [urlError, setUrlError] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const validateUrl = useDebouncedCallback(async () => {
    if (!/^https:\/\/(www\.)?\w+\.google\.com\/.*$/g.test(data.url_booklet)) {
      setUrlError("link harus dari Google Drive");
      return;
    }

    let id = data.url_booklet.split("/")[5];

    let response = await fetch(
      `https://www.googleapis.com/drive/v2/files/${id}?key=${import.meta.env.VITE_GOOGLE_API_KEY}`,
    );

    if (!response.ok) {
      setUrlError("Link drive belum publik, silahkan coba lagi");
      return;
    }

    setUrlError("");
  }, 200);

  function onSubmit() {
    toast({
      title: "Mohon tunggu sebentar...",
      description: "Sedang mengupload Booklet...",
    });

    if (booklet) {
      put(route("dashboard.booklet.update", booklet.id), {
        onError: () => {
          toast({
            title: "Uh oh! Gagal mengupdate Booklet.",
            description: errors.nama_booklet || errors.url_booklet,
          });
        },
        onSuccess: () => {
          toast({
            title: "Berhasil!",
            description: "Booklet berhasil diupdate.",
          });
        },
      });
      window.location.reload();
    } else {
      post(route("dashboard.booklet.store"), {
        onError: () => {
          toast({
            title: "Uh oh! Gagal mengupload Booklet.",
            description: errors.nama_booklet || errors.url_booklet,
          });
        },
        onSuccess: () => {
          toast({
            title: "Berhasil!",
            description: "Booklet berhasil diupload.",
          });
        },
      });
      window.location.reload();
    }
  }

  return (
    <>
      <form
        aria-describedby="form"
        className="grid gap-4 py-4"
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className="grid items-center grid-cols-4 gap-4">
          <Label htmlFor="nama_booklet" className="text-right text-white">
            Nama Booklet
          </Label>
          <Input
            id="nama_booklet"
            name="nama_booklet"
            required
            type="text"
            value={data.nama_booklet}
            maxLength={500}
            className="col-span-3"
            onChange={(e) => setData("nama_booklet", e.target.value)}
          />
        </div>
        <div className="grid items-center grid-cols-4 gap-4">
          <Label htmlFor="url_booklet" className="text-right text-white">
            Link Google Drive Booklet
          </Label>
          <Input
            id="url_booklet"
            name="url_booklet"
            required
            type="text"
            value={data.url_booklet}
            maxLength={500}
            className="col-span-3"
            onChange={(e) => {
              setData("url_booklet", e.target.value);
              validateUrl();
            }}
          />
        </div>
        <div className="place-content-center flex items-center justify-between gap-4 text-right">
          <Button
            type="button"
            className="bg-orange-500"
            size={"sm"}
            onClick={validateUrl}
          >
            Refresh Link
          </Button>
          {!!urlError ? (
            <p className="text-sm text-red-500">{urlError}</p>
          ) : urlError === "" ? (
            <p className="text-sm text-green-500">Link valid</p>
          ) : null}
        </div>
        <div className="place-content-center flex items-center justify-between gap-4 mt-4 text-right">
          <Button
            size="sm"
            type="submit"
            className={`w-full bg-[#BE3F00]`}
            disabled={!!urlError || !!error}
          >
            {booklet ? "Perbarui" : "Tambahkan"} Booklet
          </Button>
        </div>
      </form>
    </>
  );
}

export default BookletForm;
