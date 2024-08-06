import { useDebouncedCallback } from "use-debounce";

import React, { FormEvent, useEffect, useState } from "react";

import { useForm } from "@inertiajs/react";

import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { toast } from "@/Components/ui/use-toast";

import { Materi } from "@/lib/types/Materi";

type Props = {
    materi?: Materi;
};

function MateriForm({ materi }: Props) {
    const { data, setData, post, put, processing, errors } =
        useForm<Materi>(materi);
    const [urlError, setUrlError] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const validateUrl = useDebouncedCallback(async () => {
        if (
            !/^https:\/\/(www\.)?\w+\.google\.com\/.*$/g.test(data.link_materi)
        ) {
            setUrlError("link harus dari Google Drive");
            return;
        }

        let id = data.link_materi.split("/")[5];
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
            description: "Sedang mengupload Materi...",
        });

        if (materi) {
            console.log(data);
            put(route("dashboard.materi.update"), {
                onError: () => {
                    toast({
                        title: "Uh oh! Gagal mengupdate Materi.",
                        description: errors.nama_materi || errors.link_materi,
                    });
                },
                onSuccess: () => {
                    toast({
                        title: "Berhasil!",
                        description: "Materi berhasil diupdate.",
                    });
                },
            });
            window.location.reload();
        } else {
            post(route("dashboard.materi.store"), {
                onError: () => {
                    toast({
                        title: "Uh oh! Gagal mengupload Materi.",
                        description: errors.nama_materi || errors.link_materi,
                    });
                },
                onSuccess: () => {
                    toast({
                        title: "Berhasil!",
                        description: "Materi berhasil diupload.",
                    });
                },
            });
            window.location.reload();
        }
    }

    return (
        <form
            aria-describedby="form"
            className="grid gap-4 py-4"
            onSubmit={(e: FormEvent) => {
                e.preventDefault();
                onSubmit();
            }}
        >
            <div className="grid items-center grid-cols-4 gap-4">
                <Label htmlFor="nama_materi" className="text-right">
                    Nama Materi
                </Label>
                <Input
                    id="nama_materi"
                    name="nama_materi"
                    required
                    type="text"
                    value={data.nama_materi}
                    maxLength={500}
                    className="col-span-3"
                    onChange={(e) => setData("nama_materi", e.target.value)}
                />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
                <Label htmlFor="hari" className="text-right">
                    Hari Ke-
                </Label>
                <Input
                    id="hari"
                    name="hari"
                    required
                    type="text"
                    value={data.hari}
                    maxLength={1}
                    className="col-span-3"
                    onChange={(e) => {
                        setData("hari", e.target.value);
                    }}
                />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
                <Label htmlFor="link_materi" className="text-right">
                    Link Google Drive Materi
                </Label>
                <Input
                    id="link_materi"
                    name="link_materi"
                    required
                    type="text"
                    value={data.link_materi}
                    maxLength={500}
                    className="col-span-3"
                    onChange={(e) => {
                        setData("link_materi", e.target.value);
                        validateUrl();
                    }}
                />
            </div>

            <div className="place-content-center flex items-center justify-between gap-4 text-right">
                <Button
                    className="bg-orange-500"
                    size={"sm"}
                    type="button"
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
                    size={"sm"}
                    type={"submit"}
                    className={`w-full`}
                    disabled={!!urlError || !!error}
                >
                    {materi ? "Perbarui" : "Tambahkan"} Materi
                </Button>
            </div>
        </form>
    );
}

export default MateriForm;
