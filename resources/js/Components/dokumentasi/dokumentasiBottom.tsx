import bg_4 from "!assets/dokumentasi/bg-4.png";
import dokum_1 from "!assets/dokumentasi/dokum-1.jpg";
import dokum_2 from "!assets/dokumentasi/dokum-2.jpg";
import dokum_3 from "!assets/dokumentasi/dokum-3.jpg";
import dokum_4 from "!assets/dokumentasi/dokum-4.jpg";
import dokum_5 from "!assets/dokumentasi/dokum-5.jpg";
import dokum_6 from "!assets/dokumentasi/dokum-6.jpg";
import dokum_7 from "!assets/dokumentasi/dokum-27.jpg";
import dokum_8 from "!assets/dokumentasi/dokum-8.jpg";
import dokum_9 from "!assets/dokumentasi/dokum-9.jpg";
import dokum_10 from "!assets/dokumentasi/dokum-10.jpg";

export default function dokumentasiBottom() {
    return (
        <div className="relative w-full min-h-[50rem] my-20 py-44">
            {/* Background Image */}
            <img
                src={bg_4}
                alt="Background"
                className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {/* Konten di tengah */}
            <div>
                <div className="max-w-6xl absolute inset-0 my-20 space-y-10 mx-auto text-white">
                    <p className="text-center font-greek text-2xl font-bold md:text-4xl">
                        Kenangan PPLK ITERA 2024
                    </p>

                    <div className="grid grid-cols-12 grid-rows-6 gap-2 px-2 md:gap-3 h-[600px]">
                        {/* Setiap kartu dengan gambar sesuai urutan */}
                        <div className="col-span-4 row-span-2  rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-105">
                            <img src={dokum_1} alt="Dokumentasi 1" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="col-span-5 row-span-2 ounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-105">
                            <img src={dokum_2} alt="Dokumentasi 2" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="col-span-3 row-span-2 rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-105">
                            <img src={dokum_3} alt="Dokumentasi 3" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="col-span-3 row-span-2 rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-105">
                            <img src={dokum_4} alt="Dokumentasi 4" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="col-span-5 row-span-2 00 rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-105">
                            <img src={dokum_5} alt="Dokumentasi 5" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="col-span-4 row-span-1  rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-105">
                            <img src={dokum_6} alt="Dokumentasi 6" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="col-span-4 row-span-1 rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-105">
                            <img src={dokum_7} alt="Dokumentasi 7" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="col-span-3 row-span-2  rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-105">
                            <img src={dokum_8} alt="Dokumentasi 8" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="col-span-5 row-span-2 rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-105">
                            <img src={dokum_9} alt="Dokumentasi 9" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="col-span-4 row-span-2 rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-105">
                            <img src={dokum_10} alt="Dokumentasi 10" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


