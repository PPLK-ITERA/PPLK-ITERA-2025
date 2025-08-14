import bg_4 from "!assets/dokumentasi/bg-4.png";
import dokum_41 from "!assets/dokumentasi/dokum-41.jpg";
import dokum_42 from "!assets/dokumentasi/dokum-42.jpg";
import dokum_43 from "!assets/dokumentasi/dokum-43.jpg";
import dokum_44 from "!assets/dokumentasi/dokum-44.jpg";
import dokum_45 from "!assets/dokumentasi/dokum-45.jpg";
import dokum_46 from "!assets/dokumentasi/dokum-46.jpg";
import dokum_47 from "!assets/dokumentasi/dokum-47.jpg";
import dokum_48 from "!assets/dokumentasi/dokum-48.jpg";
import dokum_49 from "!assets/dokumentasi/dokum-49.jpg";
import dokum_50 from "!assets/dokumentasi/dokum-50.jpg";

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
                        Kenangan PPLK ITERA 2025
                    </p>

                    <div className="grid grid-cols-12 grid-rows-6 gap-2 px-2 md:gap-3 h-[600px]">
                        {/* Setiap kartu dengan gambar sesuai urutan */}
                        <div className="col-span-4 row-span-2  rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-105">
                            <img src={dokum_41} alt="Dokumentasi 1" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="col-span-5 row-span-2 ounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-105">
                            <img src={dokum_42} alt="Dokumentasi 2" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="col-span-3 row-span-2 rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-105">
                            <img src={dokum_43} alt="Dokumentasi 3" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="col-span-3 row-span-2 rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-105">
                            <img src={dokum_44} alt="Dokumentasi 4" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="col-span-5 row-span-2 00 rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-105">
                            <img src={dokum_45} alt="Dokumentasi 5" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="col-span-4 row-span-1  rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-105">
                            <img src={dokum_46} alt="Dokumentasi 6" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="col-span-4 row-span-1 rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-105">
                            <img src={dokum_47} alt="Dokumentasi 7" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="col-span-3 row-span-2  rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-105">
                            <img src={dokum_48} alt="Dokumentasi 8" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="col-span-5 row-span-2 rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-105">
                            <img src={dokum_49} alt="Dokumentasi 9" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="col-span-4 row-span-2 rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-105">
                            <img src={dokum_50} alt="Dokumentasi 10" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


