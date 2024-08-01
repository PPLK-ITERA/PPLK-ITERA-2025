import { QRCodeSVG } from "qrcode.react";

import React, { useState } from "react";

import { useForm } from "@inertiajs/react";

import { Button } from "@/Components/ui/button";

interface DapmenProps {
    userId?: number;
}

export default function Dapmen({ userId }: DapmenProps) {
    const [loading, setLoading] = useState(false);
    const { data, setData } = useForm({
        code: "",
        qrUrl: "",
    });

    const fetchQR = async () => {
        setLoading(true);

        const response = await fetch(route("poin.qrcode", userId));
        const json = await response.json();
        setData(json.data);

        setLoading(false);
    };

    return (
        <>
            <p>
                Gunakan fitur ini untuk generate QR kelompok anda untuk di scan
                oleh <span className="font-bold">Korlap</span>
            </p>

            <div className="w-fit p-2 text-white bg-green-600 rounded-md">
                <p>Score Kelompok : 800</p>
            </div>

            <div className="flex flex-col items-center w-full gap-10">
                <div className="w-fit">
                    <p className="text-center">
                        Tunjukkan QR Code ini ke{" "}
                        <span className="font-bold">Korlap</span>
                    </p>

                    <div className="aspect-square bg-white border flex justify-center items-center mt-5 w-[300px] h-[300px] rounded-md">
                        {data.qrUrl === "" ? null : loading ? (
                            <p>Loading...</p>
                        ) : (
                            // <QRCode size={256} value={data.code} />
                            <QRCodeSVG
                                value={data.code}
                                // imageSettings={{
                                //     src: "https://kartatera.my.id/build/assets/D98J2HoG.png",
                                //     height: 60,
                                //     width: 60,
                                //     excavate: true,
                                // }}
                                size={256}
                                includeMargin={false}
                            />
                        )}
                    </div>
                </div>

                <Button
                    onClick={() => {
                        fetchQR();
                    }}
                >
                    Generate QR Kelompok
                </Button>
            </div>
        </>
    );
}
