import { useDebouncedCallback } from "use-debounce";

import React, { useEffect } from "react";

import { Link, router, useForm } from "@inertiajs/react";

import { Button, buttonVariants } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";

function Presensi() {
    const { data, setData, post, processing } = useForm({
        nim: "",
        qr_code: "",
    });

    const handleSubmit = (e) => {
        setData("nim", e.target.value);
        debounced(e.target.value);
    };

    const handlePresensi = (qr_code: string) => {
        setData("qr_code", qr_code);
    };

    const debounced = useDebouncedCallback(
        // function
        (value) => {
            post(route("dashboard.cui"));
        },
        // delay in ms
        500,
    );

    useEffect(() => {
        if (data.qr_code) {
            post(route("cui.scan"));
        }
    }, [data.qr_code]);
    return (
        <div className="space-y-4">
            <Card className="">
                <CardHeader className="flex flex-row items-center justify-between w-full pb-2 space-y-0">
                    <CardTitle className="w-full text-lg font-bold text-center">
                        Absensi Maba
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-center mt-2">
                    <Link
                        href={route("dashboard.absensi-maba/presensi")}
                        className={buttonVariants()}
                    >
                        Mulai Absen Maba
                    </Link>
                </CardContent>
            </Card>
            <Input
                disabled={processing}
                value={data.nim}
                onChange={handleSubmit}
                placeholder="Cari mahasiswa berdasarkan NIM. cth: "
            />
        </div>
    );
}

export default Presensi;
