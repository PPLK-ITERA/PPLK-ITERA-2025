import { useDebouncedCallback } from "use-debounce";

import React, { useEffect } from "react";

import { router, useForm } from "@inertiajs/react";

import { Button } from "@/Components/ui/button";
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
                        Absensi CUI Maba
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-center mt-2">
                    <Button
                        onClick={() =>
                            router.get(route("dashboard.presensi.absensi"))
                        }
                    >
                        Mulai Absen Maba
                    </Button>
                </CardContent>
            </Card>
            <Input
                disabled={processing}
                value={data.nim}
                onChange={handleSubmit}
                placeholder="Cari mahasiswa berdasarkan NIM. cth: "
            />

            {/* Jika data tidak ditemukan */}
            {/* {response &&
                response.status === 404 &&
                response.message.includes("NIM") && (
                    <p className="font-bold text-red-600">{response.message}</p>
                )}

            {response &&
                response.status === 200 &&
                response.message.includes("NIM") && (
                    <div className="w-full">
                        <p className="font-bold text-green-500">
                            {response.message}
                        </p>
                        <div className="flex w-full gap-5 mt-3">
                            <div>
                                <img
                                    className="w-48 h-64 mb-2 bg-cover rounded-lg"
                                    src={response.data.profil_url}
                                    alt="Foto profil"
                                />
                                {response.data.pita === "hijau" && (
                                    <div className="rounded-xl flex items-center justify-center h-10 font-bold text-white bg-green-500">
                                        Pita Hijau
                                    </div>
                                )}
                                {response.data.pita === "kuning" && (
                                    <div>
                                        <div className="rounded-xl flex items-center justify-center h-10 font-bold text-white bg-yellow-400">
                                            Pita Kuning
                                        </div>
                                        <p>
                                            Riwayat penyakit:{" "}
                                            {response.data.riwayat}
                                        </p>
                                    </div>
                                )}
                                {response.data.pita === "merah" && (
                                    <div>
                                        <div className="rounded-xl flex items-center justify-center h-10 font-bold text-white bg-red-600">
                                            Pita Merah
                                        </div>
                                        <p>
                                            Riwayat penyakit:{" "}
                                            {response.data.riwayat}
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div>
                                <div className="ring-1 ring-black/30 rounded-xl p-2 text-xl">
                                    <p className="font-bold">
                                        {response.data.nama}
                                    </p>
                                    <p>{response.data.prodi}</p>
                                    <p>{response.data.nim}</p>
                                </div>
                                <Button
                                    onClick={() =>
                                        handlePresensi(response.data.qr_code)
                                    }
                                    className="w-full mt-2"
                                >
                                    Presensi
                                </Button>
                            </div>
                        </div>
                    </div>
                )} */}
        </div>
    );
}

export default Presensi;
