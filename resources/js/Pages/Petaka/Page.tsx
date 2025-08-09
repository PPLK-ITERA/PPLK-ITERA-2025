import React, { useEffect, useState } from "react";
import { Head, usePage } from "@inertiajs/react";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { useAos } from "@/lib/hooks/useAos";
import card_1 from "!assets/petaka/card-1.png";
import card_2 from "!assets/petaka/card-2.png";
import bg_1 from "!assets/petaka/bg-1.png";
import bg_2 from "!assets/petaka/bg-2.png";
import { PageProps } from "vendor/laravel/breeze/stubs/inertia-react-ts/resources/js/types";
import { UserAuthProps } from "@/lib/types/User";
import { TaskSystem } from "@/lib/types/Mading";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import { Button } from "@/Components/ui/button";
import BuktiPengerjaan from "@/Components/mading/BuktiPengerjaan";
import CompletedMessage from "@/Components/mading/CompletedMessage";
import RiwayatTugas from "@/Components/mading/RiwayatTugas";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/Components/ui/carousel";
import contohCover from "!assets/contoh_cover.png";

const SkeletonLoader = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="scroll-smooth max-w-[1920px] xl:pl-36 lg:pl-20 md:pl-10 w-full pl-5 mx-auto mt-10"
    >
      <CarouselContent>
        {[...Array(6)].map((_, index) => (
          <CarouselItem
            key={index}
            className="basis-72 md:basis-80 xl:basis-[26rem]"
          >
            <div className="xl:w-[400px] md:w-[300px] lg:w-[310px] md:h-[550px] w-[280px] h-[500px] xl:h-[600px] overflow-hidden rounded-lg relative border border-dashed border-gray-300 animate-pulse bg-gray-200">
              <div className="flex flex-col items-center justify-center p-4">
                <div className="w-2/3 h-10 mt-5 bg-gray-300 rounded"></div>
                <div className="w-32 h-32 mt-32 bg-gray-300 rounded-full"></div>
                <div className="mt-36 w-1/3 h-10 bg-gray-300 rounded"></div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};


export default function Page() {
    useAos();

      const ketentuanUploadCover = [
        "Ketua Kelompok mengupload cover jika persentase pada Day telah mencapai 100%",
        "Cover harus berbentuk kolase foto, seperti kolase kumpulan tugas, kolase foto saat kalian bekerja dalam kelompok, dan sebagainya.",
        "Desain cover bebas, sesuai dengan kreativitas kelompok.",
        "Terdapat deskripsi singkat pada gambar cover",
        "Kalian dapat membuat cover menggunakan Canva, Figma, atau aplikasi editing lain.",
        "Pastikan ukuran cover adalah 700x1000 piksel.",
        "Pastikan kalian membuat cover yang sesuai, tidak boleh mengandung SARA, serta harus sopan dan mencerminkan nilai-nilai yang positif.",
        "Contoh cover seperti dibawah ini. Semangat Naramuda!",
      ];
      type MyPage = PageProps<{
        auth: {
          user: UserAuthProps;
        };
      }>;
    
      const { auth } = usePage<MyPage>().props;
    
      const [data, setData] = useState<TaskSystem | null>(null);
    
      const getCard = async () => {
        try {
          const response = await fetch(route("mading.card"), {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
    
          if (!response.ok) {
            throw new Error("HTTP status " + response.status);
          }
    
          const data: TaskSystem = await response.json();
          //console.log(data);
          setData(data);
        } catch (error) { }
      };
    
      useEffect(() => {
        getCard();
        console.log(auth.user);
      }, []);
    
    
    return (
        <>
            <Head title="Petaka" />

            <div className="bg-pattern-white flex flex-col min-h-screen">
                <DefaultLayout isSolid={true}>
                    <div className="container mt-20  mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:my-32 space-y-6 md:space-y-8">
                        <div className="text-justify space-y-3 md:space-y-4">
                            <h1 className="font-greek text-[#BE3F00] font-bold text-center text-3xl sm:text-4xl md:text-7xl">
                                PETAKA
                            </h1>
                            <p className="text-[#543122] text-base sm:text-lg md:text-xl">
                                PETAKA(PETA TANTANGAN AKADEMIKA) adalah sebuah misteri yang harus diselesiakan oleh masing masing 'Satriya Itera' untuk bisa mencapai Elysion Gate
                            </p>
                        </div>

                        <p className="text-[#450F0A] font-bold text-justify text-base sm:text-lg md:text-xl">
                            Kumpulkan tugas Anda dibawah ini!
                        </p>

                     <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-8">
  {/* {!!auth.user.isKetua ? (
    <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mt-6 sm:mt-8 md:mt-10 rounded-lg bg-white border border-amber-100 shadow-md p-4 sm:p-5 md:p-6">
      <h2 className="text-jaffa-700 font-montserrat text-lg sm:text-xl md:text-2xl font-bold mb-4 md:mb-5 text-center sm:text-left">
        Cek Ketentuan Cover Mading
      </h2>

      <div className="space-y-2 sm:space-y-3">
        {ketentuanUploadCover.map((ketentuan, index) => (
          <div key={index} className="flex gap-2 sm:gap-3 text-sm sm:text-base">
            <span className="font-medium text-jaffa-600 min-w-[20px]">{index + 1}.</span>
            <p className="leading-relaxed">{ketentuan}</p>
          </div>
        ))}
      </div>
      
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full sm:w-auto bg-jaffa-700 hover:bg-jaffa-700/90 mt-4 sm:mt-5 transition duration-200 text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6">
            Contoh Cover Mading
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[95vw] max-w-xs sm:max-w-md md:max-w-lg mx-auto h-fit">
          <DialogHeader>
            <DialogTitle className="text-base sm:text-lg md:text-xl">
              Contoh Cover Mading
            </DialogTitle>
            <DialogDescription className="text-sm sm:text-base">
              Berikut adalah contoh cover mading yang baik dan benar.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center p-2 sm:p-4">
            <img 
              src={contohCover} 
              className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] h-auto object-contain rounded" 
              alt="Contoh Cover Mading"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  ) : null} */}
  
  <div className="relative z-10 w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
    <div className="flex flex-col justify-center mt-12 sm:mt-16 md:mt-20 lg:mt-24 px-4 sm:px-6">
      <h2 className="font-greek text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-jaffa-800 text-center leading-tight sm:leading-normal mb-6 sm:mb-8 md:mb-10">
        Kumpulkan bukti pengerjaan tugas dibawah ini
      </h2>

      <div className="w-full">
        {!!data ? (
          <BuktiPengerjaan data={data} isKetua={auth.user.isKetua} />
        ) : (
          <SkeletonLoader />
        )}
      </div>
    </div>
  </div>

  <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl px-4 sm:px-6">
    {data?.isSelesai ? (
      <CompletedMessage />
    ) : (
      data?.history && <RiwayatTugas historys={data.history} />
    )}
  </div>
</div>

                        <div className="w-full">
                            <img
                                src={bg_1}
                                alt=""
                                className="w-full h-auto"
                            />
                        </div>

                        <div className="flex justify-center">
                            <div className="w-1/2 md:max-w-xs mx-auto rounded-lg bg-[#DA5B1C] flex px-4 py-3 justify-center items-center hover:bg-[#BE3F00] transition-colors">
                                <img
                                    src={bg_2}
                                    alt=""
                                    className="object-contain h-6 mr-2"
                                />
                                <a href="/map" className=" text-white text-sm sm:text-base md:text-lg">
                                    Jelajahi Peta
                                </a>
                            </div>
                        </div>
                    </div>
                </DefaultLayout>
            </div>
        </>
    );
}