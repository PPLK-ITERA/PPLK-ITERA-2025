import React, { FC } from "react";

import { Link, router } from "@inertiajs/react";

import { ArrowLeft } from "lucide-react";

import { Button } from "@/Components/ui/button";

interface ResultCardProps {
    result: string;
    routeBack: string;
    routeScan: string;
    message: string;
}

export const ResultCardNotFound: FC<ResultCardProps> = ({
    message,
    result,
    routeBack,
    routeScan,
}) => {
    return (
        //h-[calc(100vh-220px)]
        <div className="relative flex h-[calc(100vh-220px)] flex-col justify-center items-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                className="fill-red-600 bi bi-x-circle-fill"
                viewBox="0 0 16 16"
            >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
            </svg>
            <h1 className="mt-5 text-lg font-bold">{message}</h1>
            <p>Hasil Scan: {result}</p>

            <div className="flex flex-col self-center gap-3 mt-10">
                <Link
                    href={route(routeScan)}
                    className="bg-slate-600 flex items-center self-center justify-center w-12 h-12 p-2 rounded-full"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="stroke-white lucide lucide-scan-qr-code"
                    >
                        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                    </svg>
                </Link>

                <Button
                    onClick={() => router.get(route(routeBack))}
                    className="w-fit"
                >
                    <ArrowLeft className="mr-2" />
                    Kembali
                </Button>
            </div>
        </div>
    );
};
