import { set } from "date-fns";
import { FileUploader } from "react-drag-drop-files";
import { useDebouncedCallback } from "use-debounce";

import React, { useEffect, useState } from "react";

import { Link, router, useForm } from "@inertiajs/react";

import { ChevronLeft } from "lucide-react";

import { IconX } from "@tabler/icons-react";

import DefaultLayout from "@/Layouts/DefaultLayout";

import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/Components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Toaster } from "@/Components/ui/toaster";
import { useToast } from "@/Components/ui/use-toast";

import { CardType } from "@/lib/types/Mading";

import contohCover from "!assets/contoh_cover.png";

const ketentuanUploadCover = [
  "Cover harus berbentuk kolase foto, seperti kolase kumpulan tugas, kolase foto saat kalian bekerja dalam kelompok, dan sebagainya.",
  "Desain cover bebas, sesuai dengan kreativitas kelompok.",
  "Kalian dapat membuat cover menggunakan Canva, Figma, atau aplikasi editing lain.",
  "Pastikan ukuran cover adalah 700x1000 piksel.",
  "Pastikan kalian membuat cover yang sesuai, tidak boleh mengandung SARA, serta harus sopan dan mencerminkan nilai-nilai yang positif.",
  "Contoh cover seperti dibawah ini. Semangat Naramuda!",
];

export default function Page({ hari }) {
  const [tugasData, setTugasData] = useState<CardType | null>(null);
  const [urlError, setUrlError] = useState<string | null>(null);
  const [csrfToken, setCsrfToken] = useState("");
  const [tugasId, setTugasId] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // const getTugasData = async () => {
  //     try {
  //         const response = await fetch(route("mading.tugas", { hari }), {
  //             method: "GET",
  //             headers: {
  //                 "Content-Type": "application/json",
  //             },
  //         });

  //         if (!response.ok) {
  //             throw new Error("HTTP status " + response.status);
  //         }

  //         const data = await response.json();
  //         setTugasData(data.tugas);
  //         setIsSubmitted(data.isSubmitted);
  //     } catch (error) {
  //         toast({
  //             title: "Error",
  //             variant: "destructive",
  //             description: "Gagal mendapatkan data tugas",
  //         });
  //     }
  // };

  useEffect(() => {
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

  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const { data, setData, post } = useForm({
    hari: hari,
    poster: null,
    _method: "put",
  });

  const { toast } = useToast();

  const fileTypes = ["JPG", "PNG", "JPEG"];

  const handleImageChange = (file) => {
    setPreviewUrl(URL.createObjectURL(file));
    setFile(file);

    setData("poster", file);
  };

  const changePoster = () => {
    try {
      post(route("mading.store-poster"));
    } catch (error) {
      toast({
        title: "Error",
        variant: "destructive",
        description: "Gagal mengunggah cover",
      });
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
                Pengumpulan Cover Day - {hari}
              </h2>

              <div className="md:mt-10 mt-5">
                <h2 className="text-jaffa-700 text-xl font-bold">
                  Ketentuan Cover Mading
                </h2>

                <div className="mt-5">
                  {ketentuanUploadCover.map((ketentuan, index) => (
                    <div key={index} className="flex gap-2">
                      <p>{index + 1}.</p>
                      <p>{ketentuan}</p>
                    </div>
                  ))}
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-jaffa-700 hover:bg-jaffa-700/90 mt-5 transition duration-200">
                      Contoh Cover
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] h-fit">
                    <DialogHeader>
                      <DialogTitle>Contoh Cover Mading</DialogTitle>
                      <DialogDescription>
                        Berikut adalah contoh cover mading yang baik dan benar.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-center">
                      <img src={contohCover} className="w-[85%]" />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="max-w-fit flex flex-col mx-auto">
                {previewUrl ? (
                  <div className="aspect-4/3 relative w-64 h-64 mx-auto mt-10 border">
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="object-contain w-full h-full bg-no-repeat rounded-md"
                    />

                    <Button
                      className="-top-3 -right-3 absolute p-1 text-white bg-black"
                      size={"icon"}
                      onClick={() => {
                        setFile(null);
                        setPreviewUrl("");
                      }}
                    >
                      <IconX />
                    </Button>
                  </div>
                ) : (
                  <div>
                    <FileUploader
                      handleChange={handleImageChange}
                      name="file"
                      types={fileTypes}
                      accept=".jpg, .png, .gif"
                      maxSize={2}
                      onSizeError={() => {
                        toast({
                          title: "File Too Large",
                          description: "The file size should be under 2MB.",
                          variant: "destructive",
                        });
                      }}
                      classes="mt-5 aspect-square !h-40 !w-40"
                      label="Upload or drop a file Max 2MB"
                    />
                  </div>
                )}

                <Button
                  onClick={changePoster}
                  disabled={!file}
                  className="bg-jaffa-700 hover:bg-jaffa-700/90 w-full mt-5 transition duration-200 ease-in-out"
                >
                  Submit Cover Day {hari}
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
