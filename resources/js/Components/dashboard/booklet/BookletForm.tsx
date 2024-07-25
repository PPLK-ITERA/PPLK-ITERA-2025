import { useDebouncedCallback } from "use-debounce";

import React, { FormEvent, useEffect, useState } from "react";

import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";

import { Booklet } from "@/lib/types/Booklet";

type Props = {
    booklet?: Booklet;
    onSubmit: (e: FormEvent) => void;
    setData: any;
};

function BookletForm({ booklet, onSubmit, setData }: Props) {
    const [url, setUrl] = useState(booklet ? booklet.url_booklet : "");
    const [name, setName] = useState(booklet ? booklet.nama_booklet : ""    );
    const [error, setError] = useState<string | null>(null);
    const [urlError, setUrlError] = useState<string | null>(null);

    const validateUrl = useDebouncedCallback(async (url: string) => {
        if (!/^https:\/\/(www\.)?\w+\.google\.com\/.*$/g.test(url)) {
            setUrlError("link harus dari Google Drive");
            return;
        }

        let id = url.split("/")[5];
        let response = await fetch(
            `https://www.googleapis.com/drive/v2/files/${id}?key=${import.meta.env.VITE_GOOGLE_API_KEY}`,
        );
        if (!response.ok) {
            setUrlError("Link drive belum publik, silahkan coba lagi");
            return;
        }

        setUrlError("");
    }, 200);

    useEffect(() => {
        validateUrl(url);
    }, [url]);

    useEffect(() => {
        if (name === "") setError("Nama booklet tidak boleh kosong");
        else setError("");
    }, [name]);

    useEffect(() => {
        setData({
            nama_booklet: name,
            url_booklet: url,
        });
    }, [name, url]);

    if (booklet) {
        validateUrl(booklet.url_booklet);
    }

    return (
        <form
            className="grid gap-4 py-4"
            onSubmit={(e: FormEvent) => {
                e.preventDefault();
                onSubmit(e);
            }}
        >
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="nama_booklet" className="text-right">
                    Nama Booklet
                </Label>
                <Input
                    id="nama_booklet"
                    name="nama_booklet"
                    required
                    type="text"
                    maxLength={500}
                    className="col-span-3"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="url_booklet" className="text-right">
                    Link Google Drive Booklet
                </Label>
                <Input
                    id="url_booklet"
                    name="url_booklet"
                    required
                    type="text"
                    maxLength={500}
                    className="col-span-3"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
            </div>
            <div className="flex gap-4 place-content-center justify-between items-center text-right">
                <Button
                    size={"sm"}
                    className={`w-1/2 bg-orange-500 ${error === null ? "hidden" : ""}`}
                    disabled={!!urlError}
                >
                    Refresh Link
                </Button>
                {!!urlError ? (
                    <p className="text-red-500 text-sm">{urlError}</p>
                ) : urlError === "" ? (
                    <p className="text-green-500 text-sm">Link valid</p>
                ) : null}
            </div>
            <div className="mt-4 flex gap-4 place-content-center justify-between items-center text-right">
                <Button
                    size={"sm"}
                    type={"submit"}
                    className={`w-full ${error === null ? "hidden" : ""}`}
                    disabled={!!urlError}
                >
                    Tambahkan Booklet
                </Button>
            </div>
        </form>
    );
}

export default BookletForm;
