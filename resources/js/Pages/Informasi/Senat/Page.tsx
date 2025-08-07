import React, { useEffect, useRef, useState } from "react";
import { Head } from "@inertiajs/react";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { useAos } from "@/lib/hooks/useAos";
import bg_1 from "!assets/senat-km/bg-1.png";
import bg_5 from "!assets/senat-km/bg-5.png";
import bg_2 from "!assets/senat-km/bg-2.png";
import bg_3 from "!assets/senat-km/bg-3.png";
import man_1 from "!assets/senat-km/man-1.png";
import man_2 from "!assets/senat-km/man-2.png";
import { coordinators } from "@/lib/data/senatKm";

function Page() {
    useAos();

    const [visibleCount, setVisibleCount] = useState(5);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 5);
    };

    return (
        <>
            <Head title="Tentang" />
            <div className="bg-pattern-white min-h-screen overflow-hidden">
                <DefaultLayout>

                    <div className="relative w-full min-h-[13rem] md:min-h-[25rem] mb-10 md:mb-20">
                        {/* Background Image */}
                        <img
                            src={bg_1}
                            alt="Gambar 1"
                            className="absolute top-0 left-0 w-full h-full object-cover "
                        />

                        {/* Konten di tengah */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center md:gap-y-4 mt-10 ">
                            <div className="text-white font-greek text-2xl md:text-5xl md:max-w-3xl md:mx-auto">
                                Keluarga Mahasiswa
                            </div>
                            <div className="text-white font-greek text-xl md:text-5xl md:max-w-3xl md:mx-auto ">
                                SENAT Institut teknologi itera
                            </div>
                        </div>
                    </div>


                    <div className="hidden md:block relative p-3 w-full min-h-[13rem] md:min-h-[20rem] my-10 md:my-20">
                        {/* Background Image */}
                        <img
                            src={bg_5}
                            alt="Gambar 1"
                            className="hidden md:block md:absolute top-0 left-0 w-full h-full object-cover "
                        />

                        {/* Konten di tengah */}
                        <div className="absolute inset-0 flex flex-col md:max-w-4xl md:mx-auto z-10 text-center gap-y-4 mt-10 ">
                            <div className="text-[#933100] font-greek text-3xl md:text-5xl text-start">
                                KM SENAT ITERA
                            </div>
                            <div className="text-black text-justify text-xl">
                                Senat KM-ITERA adalah dewan
                                pemegang kekuasaan legislatif dalam
                                kehidupan kemahasiswaan di Institut
                                Teknologi Sumatera.
                                (Anggaran Dasar KM-ITERA pasal 14)
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex md:max-w-4xl gap-x-12 my-10 md:my-20 p-3 md:p-0">
                        <div className="hidden md:block min-h-[20rem] w-full">
                            <img src={bg_2} alt="" className="w-full object-cover h-full" />
                        </div>
                        <div className="flex items-center justify-center ">
                            <div className="space-y-8">
                                <div className="text-[#933100] font-greek text-3xl md:text-5xl text-start">
                                    Visi
                                </div>
                                <div className="text-black text-justify text-xl">
                                    Terwujudnya Senat KM-ITERA yang amanah, komunikatif dan intelektual guna mempersatukan elemen yang ada di KM-ITERA agar dapat bersinergi baik internal maupun eksternal.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex md:ml-auto md:max-w-6xl md:gap-x-12 my-10 md:my-20 p-3 md:p-0">
                        <div className="flex items-center justify-center ">
                            <div className="space-y-8">
                                <div className="text-[#933100] font-greek text-3xl md:text-5xl text-start">
                                    Misi
                                </div>
                                <div className="text-black text-justify text-xl">
                                    Mewujudkan penyelenggaraan fungsi legislasi yang efektif dan efisien, fungsi anggaran organisasi yang transparan dan akuntabel, serta fungsi pengawasan yang efektif dan transparan merupakan tujuan utama dalam mendukung tata kelola organisasi yang baik. Ketiga fungsi ini saling melengkapi dalam menciptakan sistem pemerintahan yang responsif, terbuka, dan dapat dipertanggungjawabkan kepada publik.
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block min-h-[20rem] w-full">
                            <img src={bg_3} alt="" className="w-full object-cover h-full" />
                        </div>
                    </div>

                    <div className="hidden md:block relative p-3 w-full min-h-[13rem] md:min-h-[20rem] my-10 md:my-20">
                        {/* Background Image */}
                        <img
                            src={bg_5}
                            alt="Gambar 1"
                            className="hidden md:block md:absolute top-0 left-0 w-full h-full object-cover "
                        />

                        {/* Konten di tengah */}
                        <div className="absolute inset-0 flex flex-col md:max-w-4xl md:mx-auto z-10 text-center gap-y-4 mt-10 ">
                            <div className="text-[#933100] font-greek text-3xl md:text-5xl text-start">
                                SEjARAH SINGKAT SENAT KM
                            </div>
                            <div className="text-black text-justify text-xl">
                                Senat KM-ITERA sendiri terbentuk dan disahkan pada tanggal 16 Mei 2015 di kampus Institut Teknologi Bandung atau ITB Ganesha, yang berlokasi di Kabupaten Bandung Provinsi Jawa Barat sejalan dengan disahkan nya AD/ART KM-ITERA yang melalui forum massa mahasiswa di Selasar Basement Labtek VII Kampus ITB Ganesha. (Anggaran Dasar KM-ITERA Pasal 24) Periode awal terbentuknya Senat KM-ITERA, Senator KM-ITERA hanya memiliki sejumlah 6 (enam) delegasi/perwakilan dari beberapa himpunan yang sudah terbentuk sejak lama yakni HIMAFI ITERA, HMEI ITERA, HMTG “Mayapada” ITERA, HMS ITERA, HMG ITERA dan HMP MANDALANATA ITERA
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex justify-center items-center px-4 my-10 md:my-20">
                        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 md:gap-x-12 max-w-6xl w-full">

                            {/* Card 1 */}
                            <div className="text-center bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 py-10 w-full max-w-xs flex flex-col items-center space-y-6">
                                <h3 className="text-xl font-bold text-[#933100] leading-snug">
                                    Ketua Umum Senat <br /> Periode 2025/2026
                                </h3>
                                <div className="relative">
                                    <img
                                        src={man_1}
                                        alt="Yohanes Cristiansen Butar-Butar"
                                        className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-inner"
                                    />
                                </div>
                                <p className="text-lg font-semibold text-gray-800">
                                    Yohanes Cristiansen Butar-Butar
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="text-center bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 py-10 w-full max-w-xs flex flex-col items-center space-y-6">
                                <h3 className="text-xl font-bold text-[#933100] leading-snug">
                                    Wakil Ketua Senat <br /> KM ITERA 2025/2026
                                </h3>
                                <div className="relative">
                                    <img
                                        src={man_2}
                                        alt="Athaya Nasywa Kamila"
                                        className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-inner"
                                    />
                                </div>
                                <p className="text-lg font-semibold text-gray-800">
                                    Athaya Nasywa Kamila
                                </p>
                            </div>


                        </div>
                    </div>


                    <div className="my-10 md:my-20 py-10 px-4 md:px-20">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                            {coordinators.slice(0, visibleCount).map((coordinator, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-b from-white to-gray-50 shadow-lg rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                                >
                                    <div className="flex flex-col items-center text-center space-y-3">
                                        <div className="relative w-24 h-24">
                                            <img
                                                src={coordinator.image}
                                                alt={coordinator.name}
                                                className="w-full h-full object-cover rounded-full border-4 border-white shadow-inner"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <p className="font-bold text-gray-800 text-base">{coordinator.name}</p>
                                            <p className="text-xs text-gray-500">{coordinator.title}</p>
                                            <p className="text-[11px] text-gray-400 italic">{coordinator.position}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {visibleCount < coordinators.length && (
                            <div className="mt-12 flex justify-center">
                                <button
                                    onClick={handleLoadMore}
                                    className="px-6 py-2 bg-[#933100] text-white rounded-full shadow-md hover:bg-[#7a2800] transition-all duration-300"
                                >
                                    Load More
                                </button>
                            </div>
                        )}
                    </div>


                </DefaultLayout>
            </div>
        </>
    );
}

export default Page;
