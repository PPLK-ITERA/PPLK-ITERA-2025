import * as React from "react";
import { Card, CardContent } from "@/Components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";

const CarouselInformasi = ({ children }) => {
    return <div>{children}</div>;
};

const CarouselMisi = () => {
    // menampilakan text pada caraousel misi
    const textMisi = [
        "Mampu mengenal dan memahami lingkungan baru serta meninggikan rasa tanggung jawab",
        "Mengedepankan karakter mahasiswa berintelektual dengan acuan tri dharma perguruan tinggi",
        "Menanamkan kepribadian mahasiswa sebagai agent of change dengan berpikir kritis dan inovatif",
        "Menjadikan mahasiswa yang berintegritas dalam mengetahui peran penting dari pendidikan untuk menuju indonesia emas",
    ];

    return (
        <div className="sm:hidden px-6">
            <div className="text-center">
                <p className="font-bold text-jaffa-600 font-avigea text-xl tracking-widest">
                    MISI
                </p>
            </div>
            <Carousel className="w-[100%] mx-auto mt-2 ">
                <CarouselContent>
                    {textMisi.map((text, index) => (
                        <CarouselItem key={index}>
                            <div>
                                <Card>
                                    <CardContent className="bg-jaffa-700 text-center rounded-lg pt-4">
                                        <span className="text-white">
                                            {text}
                                        </span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
};

const CarouselPembina = () => {
    return (
        <div className="mt-8 sm:mt-14 px-4 sm:px-0">
            <div className="mx-auto max-w-2xl  ">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="sm:w-full "
                >
                    <CarouselContent>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 ">
                                <div className="p-1 flex justify-between">
                                    <Card className="xl:w-[80%] sm:w-[60%] rounded-lg mx-auto shadow-xl">
                                        <CardContent className="aspect-square p-6 text-center">
                                            <div>
                                                <p className="text-xl font-bold text-jaffa-600">
                                                    PEMBINA
                                                </p>
                                            </div>
                                            <div className="flex justify-center items-center  bg-slate-400 rounded-full my-4 sm:my-10">
                                                <img
                                                    src="/assets/logo-pplk-2024.png"
                                                    alt="logo"
                                                />
                                            </div>
                                            <div>
                                                <p>Nama</p>
                                                <p>Jabatan</p>
                                                <p>Prodi</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
};

CarouselInformasi.CarouselMisi = CarouselMisi;
CarouselInformasi.CarouselPembina = CarouselPembina;


export default CarouselInformasi;
