import { useDebouncedCallback } from "use-debounce";

import React, { useEffect } from "react";

import { router, useForm } from "@inertiajs/react";

import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";

function Presensi({ response }) {
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
                <CardHeader className="flex flex-row w-full items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-center w-full text-lg font-bold">
                        Absensi CUI Maba
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center items-center mt-2">
                    <Button
                        onClick={() =>
                            router.get(route("dashboard.cui.absensi"))
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
            {response &&
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
                        <div className="flex gap-5 mt-3 w-full">
                            <div>
                                <img
                                    className="h-64 w-48 rounded-lg bg-cover mb-2"
                                    src={response.data.profil_url}
                                    alt="Foto profil"
                                />
                                {response.data.pita === "hijau" && (
                                    <div className="h-10 flex justify-center items-center font-bold bg-green-500 text-white rounded-xl">
                                        Pita Hijau
                                    </div>
                                )}
                                {response.data.pita === "kuning" && (
                                    <div>
                                        <div className="h-10 flex justify-center items-center font-bold bg-yellow-400 text-white rounded-xl">
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
                                        <div className="h-10 flex justify-center items-center font-bold bg-red-600 text-white rounded-xl">
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
                                <div className="text-xl ring-1 ring-black/30 p-2 rounded-xl ">
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
                )}
        </div>
    );
}

export default Presensi;
