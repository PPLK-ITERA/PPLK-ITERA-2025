import React from "react";
import { Head } from "@inertiajs/react";
import { Instagram, Music, RotateCcw, Youtube } from 'lucide-react';
import DefaultLayout from "@/Layouts/DefaultLayout";
import { useAos } from "@/lib/hooks/useAos";
import bg from "!assets/lppm/bg.png";
import bg_2 from "!assets/lppm/bg-2.png";
import bg_3 from "!assets/lppm/bg-3.png";
import bg_4 from "!assets/lppm/bg-4.png";
import logo from "!assets/lppm/logo.png";
import aset_1 from "!assets/lppm/aset-1.png";
import lppm from "!assets/lppm/lppm.png";
import sosmed_1 from "!assets/lppm/sosmed-1.png";
import sosmed_2 from "!assets/lppm/sosmed-2.png";
import sosmed_3 from "!assets/lppm/sosmed-3.png";
import sosmed_4 from "!assets/lppm/sosmed-4.png";


function Page() {
    useAos();

    const socialLinks = [
        {
            icon: sosmed_1,
            label: 'Instagram',
            href: '#',
            bgColor: 'bg-amber-800'
        },
        {
            icon: sosmed_2,
            label: 'TikTok',
            href: '#',
            bgColor: 'bg-amber-800'
        },
        {
            icon: sosmed_3,
            label: 'Website',
            href: '#',
            bgColor: 'bg-amber-800'
        },
        {
            icon: sosmed_4,
            label: 'YouTube',
            href: '#',
            bgColor: 'bg-amber-800'
        }
    ];



    return (
        <>
            <Head title="Tentang" />

            <div className="bg-pattern-white min-h-screen overflow-hidden">
                <DefaultLayout>
                    <div className="relative w-full min-h-[13rem] md:min-h-[30rem] ">
                        {/* Background Image */}
                        <img
                            src={bg}
                            alt="Gambar 1"
                            className="absolute top-0 left-0 w-full h-full object-cover"
                        />

                        {/* Logo di tengah, responsif */}
                        <img
                            src={logo}
                            alt="Gambar 2"
                            className="absolute mt-10 top-1/2 left-1/2 w-[60%] md:w-[50%] transform -translate-x-1/2 -translate-y-1/2 object-contain"
                        />
                    </div>

                    <img src={aset_1} alt="" className="w-full" />

                    <p className="text-justify p-3 mx-auto md:my-28 my-3 md:max-w-5xl text-lg max">LPPM ITERA adalah singkatan dari Lembaga Penelitian dan Pengabdian kepada Masyarakat Institut Teknologi Sumatera. LPPM ITERA adalah lembaga di bawah Rektor yang bertugas melaksanakan sebagian fungsi dan tugas di bidang penelitian dan pengabdian kepada masyarakat di lingkungan ITERA.</p>

                    <div className="relative w-full min-h-[13rem] md:min-h-[30rem] p-3 md:p-10 ">
                        {/* Background Image */}
                        <img
                            src={bg_2}
                            alt="Gambar 1"
                            className="hidden md:block absolute top-0 left-0 w-full h-full object-cover z-10"
                        />

                        <div className="z-40">
                            <div className="w-full md:text-end md:pr-20">
                                <p className="font-bold text-center md:text-end font-greek text-5xl">Visi</p>
                                <p className="md:w-[50%] text-justify md:ml-auto mt-8 text-xl">
                                    “Menjadi Lembaga berstandar nasional dan internasional yang mampu berperan aktif dalam pengembangan bangsa melalui penelitian, pengembangan ilmu pengetahuan, teknologi dan seni, serta Pengabdian kepada Masyarakat dan Penjaminan Mutu Pendidikan.”
                                </p>
                            </div>

                            <div className="space-y-3 md:max-w-6xl mx-auto mt-10 md:mt-40 ">
                                <p className="font-bold font-gree text-center md:text-start font-greek text-5xl">Misi</p>
                                <ol className="list-decimal text-xl pl-5 space-y-2">
                                    <li>
                                        Mengembangkan payung hukum penelitian dan Pengabdian kepada Masyarakat berbasis IPTEK.
                                    </li>
                                    <li>
                                        Mengembangkan relevansi penelitian dan Pengabdian kepada Masyarakat untuk meningkatkan mutu
                                        Pendidikan, kebutuhan dunia usaha dan industri serta masyarakat pada umumnya.
                                    </li>
                                    <li>
                                        Mengembangkan penelitian-penelitian unggulan dan meningkatkan kiprah Institut Teknologi
                                        Sumatera dalam hal penelitian dan publikasi bertaraf nasional maupun Internasional yang
                                        terakreditasi.
                                    </li>
                                    <li>
                                        Membangun akses terhadap sumber dana penelitian dan Pengabdian kepada Masyarakat melalui
                                        kemitraan serta memandu perkembangan dan perubahan yang dilakukan Masyarakat melalui kegiatan
                                        penelitian dan Pengabdian yang inovatif, bermutu dan tanggap terhadap perkembangan global dan
                                        tantangan lokal.
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>


                    <div className="relative w-full my-20 md:my-44 md:max-w-3xl md:mx-auto z-40 bg-white shadow-lg rounded-lg overflow-hidden border">
                        {/* Background motif atas */}
                        <img
                            src={bg_3}
                            alt="Motif Atas"
                            className="absolute top-0 left-0 w-full h-16 object-cover"
                        />

                        {/* Background motif bawah */}
                        <img
                            src={bg_4}
                            alt="Motif Bawah"
                            className="absolute bottom-0 left-0 w-full h-16 object-cover"
                        />

                        {/* Konten */}
                        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-10 text-center space-y-4">
                            {/* Foto profil */}
                            <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="Foto Kepala"
                                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
                            />

                            {/* Info Teks */}
                            <div>
                                <h2 className="text-lg font-semibold italic">Kepala LPPM ITERA</h2>
                                <p className="mt-2 font-medium">
                                    Dr. Muhammad Fatikul Arif, S.T, M.Sc,
                                    <br />
                                    NIP: 198111152020121002
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap w-full px-5 md:px-0 md:max-w-7xl mx-auto justify-evenly gap-4 my-20">
                        <div className="bg-white border rounded-md shadow-md p-4 max-w-md mx-auto flex items-center justify-between">
                            {/* Kiri: Logo dan teks */}
                            <div className="flex items-center space-x-4">
                                {/* Logo */}
                                <img
                                    src={lppm}// Ganti dengan URL gambar online
                                    alt="IWACI Logo"
                                    className="w-16 h-16 object-contain"
                                />

                                {/* Teks */}
                                <div>
                                    <h2 className="text-sm font-bold leading-tight">
                                        IWACI <br />
                                        <span className="font-normal">INTEGRATED WASTE AND</span> <br />
                                        <span className="font-normal">AGRO CENTER ITERA</span>
                                    </h2>
                                    <p className="text-sm mt-1">Pusat Integrated Waste and Agro Center</p>
                                </div>
                            </div>

                            {/* Tombol panah kanan */}
                            <button className="bg-[#FF4A00] hover:bg-orange-600 text-white p-2 rounded">
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={3}
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        <div className="bg-white border rounded-md shadow-md p-4 max-w-md mx-auto flex items-center justify-between">
                            {/* Kiri: Logo dan teks */}
                            <div className="flex items-center space-x-4">
                                {/* Logo */}
                                <img
                                    src={lppm}// Ganti dengan URL gambar online
                                    alt="IWACI Logo"
                                    className="w-16 h-16 object-contain"
                                />

                                {/* Teks */}
                                <div>
                                    <h2 className="text-sm font-bold leading-tight">
                                        IWACI <br />
                                        <span className="font-normal">INTEGRATED WASTE AND</span> <br />
                                        <span className="font-normal">AGRO CENTER ITERA</span>
                                    </h2>
                                    <p className="text-sm mt-1">Pusat Integrated Waste and Agro Center</p>
                                </div>
                            </div>

                            {/* Tombol panah kanan */}
                            <button className="bg-[#FF4A00] hover:bg-orange-600 text-white p-2 rounded">
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={3}
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        <div className="bg-white border rounded-md shadow-md p-4 max-w-md mx-auto flex items-center justify-between">
                            {/* Kiri: Logo dan teks */}
                            <div className="flex items-center space-x-4">
                                {/* Logo */}
                                <img
                                    src={lppm}// Ganti dengan URL gambar online
                                    alt="IWACI Logo"
                                    className="w-16 h-16 object-contain"
                                />

                                {/* Teks */}
                                <div>
                                    <h2 className="text-sm font-bold leading-tight">
                                        IWACI <br />
                                        <span className="font-normal">INTEGRATED WASTE AND</span> <br />
                                        <span className="font-normal">AGRO CENTER ITERA</span>
                                    </h2>
                                    <p className="text-sm mt-1">Pusat Integrated Waste and Agro Center</p>
                                </div>
                            </div>

                            {/* Tombol panah kanan */}
                            <button className="bg-[#FF4A00] hover:bg-orange-600 text-white p-2 rounded">
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={3}
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        <div className="bg-white border rounded-md shadow-md p-4 max-w-md mx-auto flex items-center justify-between">
                            {/* Kiri: Logo dan teks */}
                            <div className="flex items-center space-x-4">
                                {/* Logo */}
                                <img
                                    src={lppm}// Ganti dengan URL gambar online
                                    alt="IWACI Logo"
                                    className="w-16 h-16 object-contain"
                                />

                                {/* Teks */}
                                <div>
                                    <h2 className="text-sm font-bold leading-tight">
                                        IWACI <br />
                                        <span className="font-normal">INTEGRATED WASTE AND</span> <br />
                                        <span className="font-normal">AGRO CENTER ITERA</span>
                                    </h2>
                                    <p className="text-sm mt-1">Pusat Integrated Waste and Agro Center</p>
                                </div>
                            </div>

                            {/* Tombol panah kanan */}
                            <button className="bg-[#FF4A00] hover:bg-orange-600 text-white p-2 rounded">
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={3}
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        <div className="bg-white border rounded-md shadow-md p-4 max-w-md mx-auto flex items-center justify-between">
                            {/* Kiri: Logo dan teks */}
                            <div className="flex items-center space-x-4">
                                {/* Logo */}
                                <img
                                    src={lppm}// Ganti dengan URL gambar online
                                    alt="IWACI Logo"
                                    className="w-16 h-16 object-contain"
                                />

                                {/* Teks */}
                                <div>
                                    <h2 className="text-sm font-bold leading-tight">
                                        IWACI <br />
                                        <span className="font-normal">INTEGRATED WASTE AND</span> <br />
                                        <span className="font-normal">AGRO CENTER ITERA</span>
                                    </h2>
                                    <p className="text-sm mt-1">Pusat Integrated Waste and Agro Center</p>
                                </div>
                            </div>

                            {/* Tombol panah kanan */}
                            <button className="bg-[#FF4A00] hover:bg-orange-600 text-white p-2 rounded">
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={3}
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        <div className="bg-white border rounded-md shadow-md p-4 max-w-md mx-auto flex items-center justify-between">
                            {/* Kiri: Logo dan teks */}
                            <div className="flex items-center space-x-4">
                                {/* Logo */}
                                <img
                                    src={lppm}// Ganti dengan URL gambar online
                                    alt="IWACI Logo"
                                    className="w-16 h-16 object-contain"
                                />

                                {/* Teks */}
                                <div>
                                    <h2 className="text-sm font-bold leading-tight">
                                        IWACI <br />
                                        <span className="font-normal">INTEGRATED WASTE AND</span> <br />
                                        <span className="font-normal">AGRO CENTER ITERA</span>
                                    </h2>
                                    <p className="text-sm mt-1">Pusat Integrated Waste and Agro Center</p>
                                </div>
                            </div>

                            {/* Tombol panah kanan */}
                            <button className="bg-[#FF4A00] hover:bg-orange-600 text-white p-2 rounded">
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={3}
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                    </div>

                    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 my-20">
                        {/* Title */}
                        <div className="text-center mb-8 sm:mb-12">
                            <h1 className="text-2xl font-greek sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black tracking-wider">
                                SOCIAL MEDIA LPPM
                            </h1>
                        </div>

                        {/* Social Media Icons Grid */}
                        <div className="flex flex-wrap gap-2 max-w-lg justify-center mx-auto ">
                            {socialLinks.map((social, index) => {
                                return (
                                    <div key={index} className="flex justify-center">
                                        <a
                                            href={social.href}
                                            aria-label={social.label}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img src={social.icon} alt={social.label} className="w-full" />
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>



                </DefaultLayout>
            </div>
        </>
    );
}

export default Page;
