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

import { CardType } from "@/lib/types/Mading";

const ketentuanUploadCover = [
    "Kreativitas dan Daya Tarik Visual: Pilih gambar yang unik dan menarik perhatian pembaca. Gunakan desain yang kreatif dan harmonis untuk menciptakan tampilan yang memikat.",
    "Kualitas dan Resolusi Gambar: Pastikan gambar yang diunggah memiliki resolusi tinggi agar tetap jelas dan tajam saat ditampilkan.",
    "Kesesuaian Tema: Sesuaikan desain cover dengan tema atau topik mading. Hal ini membantu menyampaikan pesan yang ingin disampaikan dengan lebih efektif.",
    "Keseimbangan Warna: Gunakan kombinasi warna yang sesuai dan tidak terlalu kontras agar tampilan lebih nyaman dilihat.",
    "Keterbacaan Teks: Jika terdapat teks pada cover, pastikan font yang digunakan mudah dibaca dan tidak terlalu kecil.",
    "Gambar yang Senonoh dan Tidak Menyinggung: Pastikan gambar yang diunggah tidak mengandung unsur SARA, pornografi, atau hal-hal yang dapat menyinggung orang lain.",
];

export default function Page({ id }) {
    const [tugasData, setTugasData] = useState<CardType | null>(null);
    const [urlError, setUrlError] = useState<string | null>(null);
    const [csrfToken, setCsrfToken] = useState("");
    const [tugasId, setTugasId] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);

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
            console.log("tugasData", tugasData);
        } catch (error) {
            console.log("Error: ", error);
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

    const validateUrl = useDebouncedCallback(async () => {
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
    }, 100);

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
            console.log("Error: ", error);
        }
    };

    return (
        <>
            <DefaultLayout isSolid={true}>
                <div className="bg-pattern-white pt-28">
                    <MaxWidthWrapper className="min-h-screen">
                        <div className="px-2.5 bg-white/80 py-5 rounded-md md:px-5 lg:px-10">
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
                                Pengumpulan Cover Day - {id}
                            </h2>

                            <div className="md:mt-10 mt-5">
                                <h2 className="text-jaffa-700 text-xl font-bold">
                                    Ketentuan Cover Mading
                                </h2>

                                <div className="mt-5">
                                    {ketentuanUploadCover.map(
                                        (ketentuan, index) => (
                                            <div
                                                key={index}
                                                className="flex gap-2"
                                            >
                                                <p>{index + 1}.</p>
                                                <p>{ketentuan}</p>
                                            </div>
                                        ),
                                    )}
                                </div>

                                <Button className="bg-jaffa-700 hover:bg-jaffa-700/90 mt-5 transition duration-200">
                                    Contoh cover yang sesuai
                                </Button>
                            </div>

                            <div className="flex flex-col mt-10">
                                {tugasData?.tugas.map((tugas, index) => (
                                    <div className="flex flex-col" key={index}>
                                        <Label
                                            htmlFor="input-tugas"
                                            className="text-left"
                                        >
                                            Link Google Drive
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
                                                validateUrl();
                                                setTugasId(tugas.id);
                                            }}
                                            placeholder={
                                                "https://drive.google.com/..."
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
                            </div>

                            <div className="mt-5">
                                <Label className=" text-left">Preview</Label>
                                <div className="aspect-video bg-red-500 rounded-md"></div>
                            </div>

                            <Button
                                onClick={handleSubmit}
                                disabled={!!urlError || !formData.url}
                                className="bg-jaffa-700 hover:bg-jaffa-700/90 w-full mt-5 transition duration-200 ease-in-out"
                            >
                                Submit Cover {id}
                            </Button>
                        </div>
                    </MaxWidthWrapper>
                </div>
            </DefaultLayout>
        </>
    );
}
