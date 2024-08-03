import { ResultCardNotFound } from "./result/ResultCardNotFound";
import { format } from "date-fns";

import React from "react";

import { Link, router } from "@inertiajs/react";

import { ArrowLeft, CheckSquareIcon, EraserIcon } from "lucide-react";

import DashboardLayout from "@/Layouts/DashboardLayout";

import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";

function DetailMaba({ auth, data, response }) {
    return (
        <DashboardLayout user={auth.user}>
            {response ? (
                <ResultCardNotFound
                    result={response.data.result}
                    routeBack={"dashboard.cui"}
                    routeScan={"dashboard.cui.absensi"}
                    message={response.message}
                />
            ) : (
                <div>
                    <div className="md:justify-between relative flex flex-col items-center justify-center h-full">
                        <div>
                            <div className="flex flex-col items-center justify-center w-full">
                                <img
                                    className="w-32 aspect-[3/4] border border-black rounded-xl"
                                    src={data.imgUrl}
                                    alt="Foto Maba"
                                />
                                <p className="mt-2 text-lg font-bold">
                                    {data.nama}
                                </p>
                                <p className="font-medium">{data.prodi}</p>
                                <p className="font-medium">{data.nim}</p>
                            </div>
                            <Card className="w-96 pt-4 mt-4 rounded-lg">
                                <CardContent>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center justify-between">
                                            <p className="font-bold">Status</p>
                                            <div className="flex items-center gap-2">
                                                <p
                                                    className={`capitalize font-bold ${
                                                        data.status ===
                                                        "belum hadir"
                                                            ? "text-red-600"
                                                            : data.status ===
                                                                "izin"
                                                              ? "text-yellow-600"
                                                              : "text-green-500"
                                                    }`}
                                                >
                                                    {data.status}
                                                </p>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="18"
                                                    height="18"
                                                    className={`${
                                                        data.status ===
                                                        "belum hadir"
                                                            ? "fill-red-600"
                                                            : data.status ===
                                                                "izin"
                                                              ? "fill-yellow-600"
                                                              : "fill-green-500"
                                                    }`}
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                </svg>
                                            </div>
                                        </div>
                                        {data.waktu_hadir ? (
                                            <div className="flex justify-between">
                                                <p className="font-bold">
                                                    Waktu Hadir
                                                </p>
                                                <p>
                                                    {format(
                                                        data.waktu_hadir,
                                                        "dd/MM/yyyy HH:mm",
                                                    )}
                                                </p>
                                            </div>
                                        ) : (
                                            <div className="flex justify-between">
                                                <p className="font-bold">
                                                    Waktu Izin
                                                </p>
                                                <p>
                                                    {format(
                                                        data.waktu_izin,
                                                        "dd/MM/yyyy HH:mm",
                                                    )}
                                                </p>
                                            </div>
                                        )}
                                        <div className="flex justify-between">
                                            <p className="font-bold">Pita</p>
                                            <div
                                                className={`${data.pita === "merah" ? "bg-red-600" : data.pita === "kuning" ? "bg-yellow-500" : "bg-green-500"} px-3 rounded-md text-white font-bold`}
                                            >
                                                {data.pita
                                                    .charAt(0)
                                                    .toUpperCase() +
                                                    data.pita.slice(1)}
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="font-bold">
                                                Riwayat Penyakit
                                            </p>
                                            <p>{data.riwayat}</p>
                                        </div>
                                        {data.ket_izin ? (
                                            <div>
                                                <p>Keterangan</p>
                                                <p>{data.ket_izin}</p>
                                            </div>
                                        ) : null}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div>
                            {data.status === "hadir" ? (
                                <Button
                                    onClick={() =>
                                        router.get(
                                            route(
                                                "dashboard.cui.izin",
                                                data.nim,
                                            ),
                                        )
                                    }
                                    className="w-fit"
                                >
                                    <CheckSquareIcon className="mr-2" />
                                    Setel Izin
                                </Button>
                            ) : (
                                <>
                                    {data.status === "izin" ? (
                                        <Button
                                            onClick={() =>
                                                router.patch(
                                                    route(
                                                        "cui.destroy",
                                                        data.qr_code,
                                                    ),
                                                )
                                            }
                                        >
                                            <EraserIcon className="mr-2" />
                                            Cabut Izin
                                        </Button>
                                    ) : (
                                        <Button
                                            onClick={() =>
                                                router.post(
                                                    route("cui.hadir"),
                                                    {
                                                        user_id: data.id,
                                                    },
                                                )
                                            }
                                            className="w-fit"
                                        >
                                            <CheckSquareIcon className="mr-2" />
                                            Set Sebagai Hadir
                                        </Button>
                                    )}
                                </>
                            )}
                        </div>

                        <div className="left-1/2 md:static md:translate-x-0 fixed bottom-0 flex flex-col items-center justify-center gap-2 pb-5 mt-5 -translate-x-1/2">
                            {/* <Link
                    href={route(data.routeScan)}
                    className="bg-slate-600 flex items-center self-center justify-center w-12 h-12 p-2 rounded-full"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-white lucide lucide-scan-qr-code"
                    >
                        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                    </svg>
                </Link> */}

                            <Button
                                onClick={() =>
                                    router.get(route("dashboard.cui.absensi"))
                                }
                                className="w-fit"
                            >
                                <ArrowLeft className="mr-2" />
                                Kembali
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </DashboardLayout>
    );
}

export default DetailMaba;
