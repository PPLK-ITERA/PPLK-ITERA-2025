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

import { CardType, TaskData, TaskSystem, Tugas } from "@/lib/types/Mading";

export default function Page({ id }) {
    const [tugasData, setTugasData] = useState<TaskData | null>(null);
    const [urlError, setUrlError] = useState(new Map());
    const [csrfToken, setCsrfToken] = useState("");

    const { toast } = useToast();

    const {
        data: formData,
        setData: setFormData,
        post,
        put,
        processing,
        errors,
    } = useForm<{
        tugas_id: number[];
        jawaban: string[];
    }>({
        tugas_id: [],
        jawaban: [],
    });

    // Update tugas_id and jawaban arrays
    const addOrUpdateTugasId = (index, value) => {
        const newTugasId = [...formData.tugas_id];
        newTugasId[index] = value;
        setFormData("tugas_id", newTugasId);
    };

    const addOrUpdateJawaban = (index, value) => {
        const newJawaban = [...formData.jawaban];
        newJawaban[index] = value;
        setFormData("jawaban", newJawaban);
    };

    // Function to remove a value from tugas_id array
    const removeTugasId = (index) => {
        const newTugasId = formData.tugas_id.filter((_, i) => i !== index); // Filter out the value
        setFormData("tugas_id", newTugasId); // Update the form data
    };

    // Function to remove a value from jawaban array
    const removeJawaban = (index) => {
        const newJawaban = formData.jawaban.filter((_, i) => i !== index); // Filter out the value
        setFormData("jawaban", newJawaban); // Update the form data
    };

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
            setTugasData(data);

            // data.tugas.map((tugas: Tugas) => {
            //     TugasId.push(tugas.id);
            // });
            // Initialize the form data
            let tugasId: number[] = [];
            data.tugas.forEach((tugas, index) => {
                tugasId.push(tugas.id);
                addOrUpdateJawaban(index, ""); // Initialize jawaban
            });
            setFormData("tugas_id", tugasId);

            // setFormData(data.tugas.map((tugas) => data.tugas.set(tugas.id, 0)));

            // TugasId.push(data.tugas.map((tugas) => tugas.id));

            // console.log("tugasId", TugasId);

            // @ts-ignore
            // setFormData("tugas_id", TugasId);
            // setIsSubmitted(data.isSubmitted);
            // console.log("tugas", data.tugas[0].id);
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

    const validateUrl = (
        tipe_link: string,
        tugas_id: number,
        url: string,
        index: number,
    ) => {
        switch (tipe_link) {
            case "tiktok":
                validateTiktokUrl(tugas_id, url, index);
                break;
            case "instagram":
                validateInstagramUrl(tugas_id, url, index);
                break;
            case "drive":
                validateGDriveUrl(tugas_id, url, index);
                break;
        }
    };

    // Function to check if all URLs are valid
    const allLinksValid = () => {
        for (const [key, value] of urlError.entries()) {
            if (value !== "") {
                return false;
            }
        }
        return true;
    };

    const validateTiktokUrl = useDebouncedCallback((tugas_id, url, index) => {
        if (!/^https:\/\/(www\.)?tiktok\.com\/.*$/g.test(url)) {
            setUrlError(
                new Map(urlError).set(tugas_id, "link harus dari TikTok"),
            );
            return;
        }

        setUrlError(new Map(urlError).set(tugas_id, ""));
        addOrUpdateJawaban(index, url); // Update jawaban
    }, 200);

    const validateInstagramUrl = useDebouncedCallback(
        async (tugas_id, url, index) => {
            if (!/^https:\/\/(www\.)?instagram\.com\/.*$/g.test(url)) {
                setUrlError(
                    new Map(urlError).set(
                        tugas_id,
                        "link harus dari Instagram",
                    ),
                );
                return;
            }

            setUrlError(new Map(urlError).set(tugas_id, ""));
            addOrUpdateJawaban(index, url); // Update jawaban
        },
        200,
    );

    const validateGDriveUrl = useDebouncedCallback(
        async (tugas_id, url, index) => {
            if (!/^https:\/\/(www\.)?\w+\.google\.com\/.*$/g.test(url)) {
                setUrlError(
                    new Map(urlError).set(
                        tugas_id,
                        "link harus dari Google Drive",
                    ),
                );
                return;
            }

            let id = url.split("/")[5];

            let response = await fetch(
                `https://www.googleapis.com/drive/v2/files/${id}?key=${import.meta.env.VITE_GOOGLE_API_KEY}`,
            );

            if (!response.ok) {
                setUrlError(
                    new Map(urlError).set(
                        tugas_id,
                        "Link drive belum publik, silahkan coba lagi",
                    ),
                );

                return;
            }

            setUrlError(new Map(urlError).set(tugas_id, ""));
            addOrUpdateJawaban(index, url); // Update jawaban
        },
        200,
    );

    const handleSubmit = async () => {
        try {
            const response = await fetch(route("mading.store"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": csrfToken,
                },
                body: JSON.stringify({
                    tugas_id: formData.tugas_id,
                    jawaban: formData.jawaban,
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

                            {/* <p>{}</p> */}

                            <div className="flex flex-col mt-10">
                                {tugasData?.tugas.map((tugas, index) => (
                                    <div className="flex flex-col" key={index}>
                                        <Label
                                            htmlFor="input-tugas"
                                            className="text-left capitalize"
                                        >
                                            Link {tugas.tipe_link}
                                        </Label>

                                        <Input
                                            type="text"
                                            id="input-tugas"
                                            onChange={(e) => {
                                                validateUrl(
                                                    tugas.tipe_link,
                                                    tugas.id,
                                                    e.target.value,
                                                    index,
                                                );
                                            }}
                                            placeholder={
                                                tugas.tipe_link === "tiktok"
                                                    ? "https://www.tiktok.com/..."
                                                    : tugas.tipe_link ===
                                                        "instagram"
                                                      ? "https://www.instagram.com/..."
                                                      : tugas.tipe_link ===
                                                          "drive"
                                                        ? "https://drive.google.com/..."
                                                        : "Yeuu gaada kocakkkkk!"
                                            }
                                            className="mt-2"
                                        />
                                        {urlError.get(tugas.id) ? (
                                            <span className="text-red-500 text-[12px]">
                                                {urlError.get(tugas.id)}
                                            </span>
                                        ) : urlError.get(tugas.id) === "" ? (
                                            <span className="text-[12px] text-green-500">
                                                Link valid
                                            </span>
                                        ) : null}
                                    </div>
                                ))}

                                <Button
                                    onClick={handleSubmit}
                                    disabled={
                                        !allLinksValid() ||
                                        !formData.jawaban.length
                                    }
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
