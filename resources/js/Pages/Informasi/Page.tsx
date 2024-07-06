import * as React from "react";
import CarouselInformasi from "./CaraouselInformasi";
import ComponentInformasi from "./ComponentInformasi";

// component menampilkan misi
const ComponentMisi = ({ text }) => (
    <div className="bg-jaffa-700 p-2 rounded-sm text-white w-[48%] ">
        <p>{text}</p>
    </div>
);

function Page() {
    // menampilakan text pada layout text misi
    const textMisi = [
        "Mampu mengenal dan memahami lingkungan baru serta meninggikan rasa tanggung jawab",
        "Mengedepankan karakter mahasiswa berintelektual dengan acuan tri dharma perguruan tinggi",
        "Menanamkan kepribadian mahasiswa sebagai agent of change dengan berpikir kritis dan inovatif",
        "Menjadikan mahasiswa yang berintegritas dalam mengetahui peran penting dari pendidikan untuk menuju indonesia emas",
    ];

    return (
        <div className="relative w-full">
            <img
                src="/assets/bg-1.png"
                alt="bg"
                className="absolute inset-0 w-full -z-10 zoom-in-50 object-top opacity-10 bg-cover bg-no-repeat"
            />

            <div className="xl:max-w-6xl sm:max-w-3xl sm:mx-auto mt-10 z-20 w-full">
                
                <ComponentInformasi.ComponentInformasiHeader />
                <ComponentInformasi.ComponentInformasiHero />
                <CarouselInformasi.CarouselMisi />

                <div className="sm:flex hidden justify-center items-center">
                    <div className="max-w-2xl space-y-7">
                        <div className="text-center">
                            <p className="font-bold text-jaffa-600 font-avigea text-xl tracking-widest">
                                MISI
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-between gap-2 gap-y-6 text-center">
                            {textMisi.map((mission, index) => (
                                <ComponentMisi key={index} text={mission} />
                            ))}
                        </div>
                    </div>
                </div>

                <CarouselInformasi.CarouselPembina />
                <ComponentInformasi.ComponentInformasiFilosofi />
                
            </div>

            <ComponentInformasi.ComponentInformasiDivisi />
        </div>
    );
}

export default Page;
