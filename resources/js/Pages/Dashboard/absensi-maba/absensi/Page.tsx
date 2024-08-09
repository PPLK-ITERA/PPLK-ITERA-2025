import QRScanner from "./QRScanner";
import { IDetectedBarcode, Scanner, outline } from "@yudiel/react-qr-scanner";

import React, { useEffect, useState } from "react";

import { Link, router, useForm, usePage } from "@inertiajs/react";

import DashboardLayout from "@/Layouts/DashboardLayout";

import { Button, buttonVariants } from "@/Components/ui/button";
import { Toaster } from "@/Components/ui/toaster";
import { useToast } from "@/Components/ui/use-toast";

function Page({ auth }) {
    const { toast } = useToast();

    const [csrfToken, setCsrfToken] = useState("");
    const [result, setResult] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const { data, setData, post, processing } = useForm({
        qr_code: "",
    });

    const handleScan = async (data: string) => {
        if (data) {
            try {
                const response = await fetch(route("dashboard.presensi.scan"), {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRF-TOKEN": csrfToken,
                    },
                    body: JSON.stringify({
                        qr_code: data,
                    }),
                });

                const getResult = await response.json();
                //  //console.log(getResult.response);

                if (getResult.response.status === 200) {
                    toast({
                        title: "Presensi Berhasil",
                        variant: "default",
                        description: getResult.response.message,
                    });
                } else {
                    toast({
                        title: "Presensi Gagal",
                        variant: "destructive",
                        description: getResult.response.message,
                    });
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }
    };

    useEffect(() => {
        // Fungsi untuk mendapatkan token CSRF dari API
        const fetchCsrfToken = async () => {
            try {
                const response = await fetch(route("csrf"));
                const data = await response.json();
                setCsrfToken(data.csrfToken);
            } catch (error) {
                console.error("Error fetching CSRF token:", error);
            }
        };

        fetchCsrfToken();
    }, []);

    useEffect(() => {
        if (data.qr_code) {
            handleScan(data.qr_code);
        }
    }, [data.qr_code]);

    return (
        <>
            <DashboardLayout user={auth.user}>
                <div className="relative flex flex-col items-center justify-center w-full h-full">
                    <div className="md:w-[100%] w-[75vw] h-[70vh] items-center justify-center">
                        <h2 className="text-xl font-bold tracking-tight text-center">
                            Absensi QR SCAN Maba
                        </h2>

                        {loading ? (
                            <div className="border-b-purple-900 flex items-center justify-center w-full h-full">
                                LOADING
                            </div>
                        ) : (
                            <div className="flex items-center justify-center w-full">
                                <div className="md:w-64">
                                    <Scanner
                                        onScan={function (
                                            detectedCodes: IDetectedBarcode[],
                                        ): void {
                                            //  //console.log(detectedCodes.at(-1)?.rawValue);
                                            handleScan(
                                                detectedCodes.at(-1)
                                                    ?.rawValue || "",
                                            );
                                            //  //console.log(detectedCodes);
                                        }}
                                        components={{
                                            finder: true,
                                            tracker: outline,
                                            zoom: true,
                                        }}
                                        allowMultiple={true}
                                        scanDelay={2000}
                                        paused={loading}
                                        styles={{
                                            container: {
                                                width: "100%",
                                            },
                                        }}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                    <Link
                        href={"/dashboard/absensi-maba"}
                        className={buttonVariants()}
                    >
                        Absen Manual
                    </Link>
                    {result && (
                        <p className="md:block hidden">
                            Scanned Result: {result}
                        </p>
                    )}
                </div>
            </DashboardLayout>
            <Toaster />
        </>
    );
}

export default Page;
