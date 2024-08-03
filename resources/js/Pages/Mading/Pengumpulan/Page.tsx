import { set } from "date-fns";
import { useDebouncedCallback } from "use-debounce";

import React, { useEffect, useState } from "react";

import { Link, router, useForm } from "@inertiajs/react";

import { ChevronLeft } from "lucide-react";

import DefaultLayout from "@/Layouts/DefaultLayout";

import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Toaster } from "@/Components/ui/toaster";
import { useToast } from "@/Components/ui/use-toast";

import { CardType } from "@/lib/types/Mading";

export default function Page({ id }) {
    const [tugasData, setTugasData] = useState<CardType | null>(null);
    const [urlError, setUrlError] = useState<string | null>(null);
    const [csrfToken, setCsrfToken] = useState("");
    const [tugasId, setTugasId] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const { toast } = useToast();

    const {
        data: formData,
        setData: setFormData,
        post,
        put,
        processing,
        errors,
    } = useForm({
        tugas_id: 0,
        url: "",
    });

    const getTugasData = async () => {
        try {
            const response = await fetch(route("mading.tugas", { id }), {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("HTTP status " + response.status);
            }

            const data = await response.json();
            setTugasData(data.tugas);
            setIsSubmitted(data.isSubmitted);
        } catch (error) {
            toast({
                title: "Error",
                description: "Gagal mendapatkan data tugas",
                variant: "destructive",
            });
        }
    };

    useEffect(() => {
        getTugasData();

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

    const validateUrl = (id: number) => {
        switch (id) {
            case 1:
                validateTiktokUrl();
                break;
            case 2:
                validateTiktokUrl();
                break;
            case 3:
                validateGDriveUrl();
                break;
            case 4:
                validateInstagramUrl();
                break;
            case 5:
                validateTiktokUrl();
                break;
            case 6:
                validateGDriveUrl();
                break;
            default:
                break;
        }
    };

    const validateTiktokUrl = useDebouncedCallback(() => {
        if (!/^https:\/\/(www\.)?tiktok\.com\/.*$/g.test(formData.url)) {
            setUrlError("link harus dari TikTok");
            return;
        }

        setUrlError("");
    }, 200);

    const validateInstagramUrl = useDebouncedCallback(async () => {
        if (!/^https:\/\/(www\.)?instagram\.com\/.*$/g.test(formData.url)) {
            setUrlError("link harus dari Instagram");
            return;
        }

        setUrlError("");
    }, 200);

    const validateGDriveUrl = useDebouncedCallback(async () => {
        if (!/^https:\/\/(www\.)?\w+\.google\.com\/.*$/g.test(formData.url)) {
            setUrlError("link harus dari Google Drive");
            return;
        }

        let id = formData.url.split("/")[5];

        let response = await fetch(
            `https://www.googleapis.com/drive/v2/files/${id}?key=${import.meta.env.VITE_GOOGLE_API_KEY}`,
        );

        if (!response.ok) {
            setUrlError("Link drive belum publik, silahkan coba lagi");
            return;
        }

        setUrlError("");
    }, 200);

    const handleSubmit = async () => {
        try {
            const response = await fetch(route("mading.store"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": csrfToken,
                },
                body: JSON.stringify({
                    tugas_id: tugasId,
                    jawaban: formData.url,
                }),
            });

            if (!response.ok) {
                throw new Error("HTTP status " + response.status);
            }

            router.replace(route("mading"));
        } catch (error) {
            toast({
                title: "Error",
                description: "Gagal mensubmit tugas",
                variant: "destructive",
            });
        }
    };

    return (
        <>
            <DefaultLayout isSolid={true}>
                <div className="bg-pattern-white pt-28">
                    <MaxWidthWrapper className="min-h-screen">
                        <div className="px-2.5 bg-white/80 py-5 rounded-md md:px-5 lg:px-10 xl:px-28">
                            <Link
                                href={route("mading")}
                                className={`${buttonVariants({ variant: "outline" })} bg-transparent hover:bg-transparent shadow-none items-center border-none flex gap-2 -ml-5`}
                            >
                                <ChevronLeft />
                                <span>Kembali</span>
                            </Link>
                            <h2
                                data-aos="fade-down"
                                data-aos-duration="1000"
                                className="font-montserrat font-bold text-jaffa-700 w-fit pt-[30px] text-3xl"
                            >
                                Pengumpulan Tugas Day - {id}
                            </h2>

                            <div className="flex flex-col mt-10">
                                {tugasData?.tugas.map((tugas, index) => (
                                    <div className="flex flex-col" key={index}>
                                        <Label
                                            htmlFor="input-tugas"
                                            className="text-left"
                                        >
                                            Link{" "}
                                            {id === "1"
                                                ? "TikTok"
                                                : id === "2"
                                                  ? "TikTok"
                                                  : id === "3"
                                                    ? "G-Drive"
                                                    : id === "4"
                                                      ? "Instagram"
                                                      : id === "5"
                                                        ? "TikTok"
                                                        : "G-Drive"}
                                        </Label>

                                        <Input
                                            type="text"
                                            id="input-tugas"
                                            value={formData.url}
                                            onChange={(e) => {
                                                setFormData(
                                                    "url",
                                                    e.target.value,
                                                );
                                                validateUrl(tugas.id);
                                                setTugasId(tugas.id);
                                            }}
                                            placeholder={
                                                id === "1"
                                                    ? "https://www.tiktok.com/..."
                                                    : id === "2"
                                                      ? "https://www.tiktok.com/..."
                                                      : id === "3"
                                                        ? "https://drive.google.com/..."
                                                        : id === "4"
                                                          ? "https://www.instagram.com/..."
                                                          : id === "5"
                                                            ? "https://www.tiktok.com/..."
                                                            : "https://drive.google.com/..."
                                            }
                                            className="mt-2"
                                        />
                                        {!!urlError ? (
                                            <span className="text-red-500 text-[12px]">
                                                {urlError}
                                            </span>
                                        ) : urlError === "" ? (
                                            <span className="text-[12px] text-green-500">
                                                Link valid
                                            </span>
                                        ) : null}
                                    </div>
                                ))}

                                {/* bg-candlelight-700 hover:bg-candlelight-700/90 */}
                                {/* bg-jaffa-700 hover:bg-jaffa-700/90 */}

                                <Button
                                    onClick={handleSubmit}
                                    disabled={!!urlError || !formData.url}
                                    className="bg-jaffa-700 hover:bg-jaffa-700/90 w-full mt-5 transition duration-200 ease-in-out"
                                >
                                    Submit Tugas {id}
                                </Button>
                            </div>
                        </div>
                    </MaxWidthWrapper>
                </div>
            </DefaultLayout>

            <Toaster />
        </>
    );
}
