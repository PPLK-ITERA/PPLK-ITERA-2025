import { PageProps } from "vendor/laravel/breeze/stubs/inertia-react-ts/resources/js/types";

import { useEffect, useState } from "react";

import { usePage } from "@inertiajs/react";

import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import BuktiPengerjaan from "@/Components/mading/BuktiPengerjaan";
import CompletedMessage from "@/Components/mading/CompletedMessage";
import RiwayatTugas from "@/Components/mading/RiwayatTugas";
import { Button } from "@/Components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/Components/ui/carousel";
import { Toaster } from "@/Components/ui/toaster";
import { toast } from "@/Components/ui/use-toast";

import { ResponseData } from "@/lib/types/Mading";
import { UserAuthProps } from "@/lib/types/User";

import awan from "!assets/awan.png";
import gunung from "!assets/gunung.png";
import kotakajaib from "!assets/kotakajaib.png";
import lampu from "!assets/mading/lampu.png";
import pentung from "!assets/pentung.png";
import piano from "!assets/piano.png";

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

const Mading = () => {
    type MyPage = PageProps<{
        auth: {
            user: UserAuthProps;
        };
    }>;

    const { auth } = usePage<MyPage>().props;

    const [data, setData] = useState<ResponseData | null>(null);
    const [isKelompokSelesai, setIsKelompokSelesai] = useState(true);

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

            const data: ResponseData = await response.json();
            setData(data);
            const semuaSelesai = data.cards.every(
                (card) => data.completionPercentage[card.id] === 100,
            );
            setIsKelompokSelesai(semuaSelesai);
        } catch (error) {}
    };

    useEffect(() => {
        getCard();
    }, []);

    return (
        <div>
            <Navbar isSolid={true} isFixed={true} />

            <div className="bg-pattern-white md:pt-36 flex flex-col items-center justify-center min-h-screen pt-20 pb-20">
                <div className="flex flex-col items-center justify-center px-5">
                    <h2
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        className="font-avigea text-center text-jaffa-800 w-fit mx-auto pt-[30px] text-3xl md:text-5xl"
                    >
                        Mading Tugas PPLK 2024
                    </h2>

                    <div className="relative xl:max-h-[186px] md:max-w-[600px] xl:max-w-[800px] w-full h-full rounded-xl bg-history-completed bg-no-repeat bg-transparent bg-cover mt-14 p-4">
                        <div className="left-4 top-4 border-jaffa-800 absolute p-2 border rounded-full shadow-sm">
                            <img src={piano} alt="Piano" className="w-6 h-6" />
                        </div>

                        <div className="md:ml-20 ml-0">
                            <h2 className="font-montserrat ml-16 md:ml-0 text-[20px] md:text-[25px] text-jaffa-800 font-bold mb-2">
                                Apa Itu Mading Tugas PPLK?
                            </h2>

                            <p className="text-[20px] text-sm text-justify text-black font-montserrat mb-2">
                                Mading Tugas PPLK adalah sebuah media yang
                                digunakan untuk menampilkan hasil pengerjaan
                                tugas yang diberikan oleh panitia PPLK 2024.
                                Mading ini berisi bukti pengerjaan tugas yang
                                telah dikerjakan oleh kelompok masing-masing.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 w-full">
                    <div className="flex flex-col justify-center mt-24">
                        <h2 className="font-avigea md:text-[25px] mx-auto md:max-w-[600px] xl:max-w-[800px] max-w-[280px] text-[20px] font-bold text-jaffa-800 text-center">
                            Kumpulkan bukti pengerjaan tugas dibawah ini
                        </h2>

                        {!!data ? (
                            <BuktiPengerjaan
                                cards={data?.cards}
                                completionPercentage={
                                    data?.completionPercentage
                                }
                                isSubmitted={data?.isSubmitted}
                                isKetua={auth.user.isKetua}
                            />
                        ) : (
                            <SkeletonLoader />
                        )}
                    </div>
                </div>

                {isKelompokSelesai ? (
                    <CompletedMessage />
                ) : (
                    <>{!!data && <RiwayatTugas historys={data!.history} />}</>
                )}
            </div>

            <div className="bg-pattern-white py-10 lg:py-52 relative bg-[#170C0A] flex flex-col gap-10 items-center justify-center">
                <div className="absolute top-0 flex items-center justify-center md:-translate-y-[80px] lg:-translate-y-[100px] -translate-y-[30px]">
                    <img src={awan} alt="" className="w-full" />
                </div>

                {isKelompokSelesai ? (
                    <>
                        <h2 className="text-jaffa-50 mt-5 xl:mt-20 font-avigea font-bold md:text-[25px] text-[20px] xl:text-[60px] z-20">
                            MADING TUGAS SELESAI
                        </h2>

                        <img
                            src={lampu}
                            alt="lampu"
                            className="absolute top-0 z-10"
                        />

                        <img
                            src={kotakajaib}
                            alt="kotakajaib"
                            className="xl:scale-100 md:mt-0 z-20 -mt-20 scale-50"
                        />

                        <a
                            href={route("mading.preview")}
                            className={`z-20 xl:mt-32 -mt-10 cursor-pointer text-sm text-white bg-jaffa-800 hover:bg-jaffa-800 shadow-md inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 px-4 py-2`}
                        >
                            Lihat Preview Mading Kelompokmu
                        </a>
                    </>
                ) : (
                    <>
                        <div className="flex flex-col items-center gap-5 p-4 rounded-lg">
                            <img
                                src={pentung}
                                alt="Pentung"
                                className="w-[19px] h-[44px]"
                            />

                            <h2 className="lg:text-[25px] md:text-[20px] text-sm text-center font-montserrat text-white">
                                Selesaikan semua tugas yang diberikan untuk{" "}
                                <br />
                                mendapatkan artefak dibawah ini
                            </h2>
                        </div>

                        <h2 className="text-jaffa-50 mt-5 font-avigea font-bold md:text-[25px] text-[20px] xl:text-[60px]">
                            MADING TUGAS
                        </h2>

                        <img
                            src={kotakajaib}
                            alt=""
                            className="md:scale-75 xl:scale-100 scale-75"
                        />

                        <Button
                            onClick={() =>
                                toast({
                                    title: "Selesaikan semua tugasmu terlebih dahulu",
                                    variant: "destructive",
                                })
                            }
                            className={`z-20 cursor-pointer text-sm text-white disabled:bg-jaffa-800 disabled:hover:bg-jaffa-800 bg-jaffa-800 hover:bg-jaffa-800 shadow-md inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`}
                        >
                            Lihat Preview Mading Kelompokmu
                        </Button>

                        <div className="md:pb-96 xl:pb-[500px] pb-32" />

                        <img
                            src={gunung}
                            alt=""
                            className="absolute bottom-0 w-full"
                        />
                    </>
                )}
            </div>

            <Toaster />
            <Footer />
        </div>
    );
};

export default Mading;
