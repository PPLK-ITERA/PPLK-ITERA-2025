import React from "react";

import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import InfoPplk from "@/Components/informasi/pplk/InfoPplk";
import { Card, CardContent } from "@/Components/ui/card";

import accreditation_a from "!assets/accreditation-a.png";
import banpt from "!assets/banpt.png";

function Page() {
    return (
        <div className="bg-pattern-white min-h-screen font-montserrat">
            <Navbar isSolid={true} isFixed={true} />

            <div className="w-full flex flex-col gap-4 place-content-center max-w-6xl mt-24 mx-auto text-center">
                <div>
                    <img
                        src="https://gcdnb.pbrd.co/images/QfWO8MCZ1xmx.png?o=1"
                        alt="Prodi"
                        className="mx-auto h-64"
                    />
                    <h1 className="font-avigea text-3xl text-moccaccino-500">
                        Teknik Informatika
                    </h1>
                    <p className="font-medium ">
                        Bidang Informatika merupakan bidang keilmuan yang
                        kemajuannya sangat pesat. Kemampuan pemrosesan komputasi
                        berpindah ke berbagai perangkat khusus, seperti
                        handphone dan berbagai sensor yang terdapat pada benda
                        yang digunakan sehari-hari, seperti meja, bolpen,
                        toilet, setrika dan lain-lain, yang saling terhubung
                        (Internet of Things). Interaksi manusia dengan komputer
                        juga berkembang ke arah berbagai model yang lebih alami,
                        seperti sentuhan, suara, virtual reality, bau, mimik
                        muka dan lainnya. Pengelolaan data berkembang dalam
                        skala yang jauh lebih besar, sejalan dengan perkembangan
                        kemampuan pemrosesan dan penyimpanan data, serta
                        produksi data yang terjadi.
                    </p>
                </div>

                <div>
                    <h1 className="font-avigea text-3xl text-moccaccino-500">
                        Sejarah
                    </h1>
                    <p className="font-medium text-left">
                        Berdasarkan Surat Keputusan Menteri Riset, Teknologi dan
                        Pendidikan Tinggi (SK KEMENRISTEKDIKTI) Nomor
                        64/M/Kp/III/2015 terkait dengan izin operasional
                        Institut Teknologi Sumatera maka dimulailah kegiatan
                        operasional Tri Dharma Perguruan Tinggi di ITERA.
                        Pembukaan program studi baru di bidang teknik merupakan
                        prioritas utama dari sebuah institut teknologi. Hal
                        tersebut diharapkan dapat berkontribusi dalam
                        pemberdayaan potensi di wilayah Sumatera pada khususnya,
                        dan Indonesia serta dunia pada umumnya. Berdasarkan hal
                        tersebut, maka ITERA membentuk Program Studi Teknik
                        Informatika dengan harapan dapat meningkatkan potensi
                        tersebut di bidang teknologi informasi. Program Studi
                        Teknik Informatika (PS IF) Institut Teknologi Sumatera
                        merupakan program studi yang dibuka di tahun ke-2 (tahun
                        2013) setelah Institut Teknologi Sumatera memulai
                        penyelenggaraan perkuliahan di tahun 2012. PS IF ITERA
                        diresmikan pada tahun 2015 melalui SK Mentri Riset,
                        Teknologi dan Pendidikan Tinggi No. 64/M/Kp/III/2015.
                    </p>
                </div>

                <Card className="rounded-lg bg-jaffa-300">
                    <CardContent className="p-4 px-12">
                        <div className="w-full h-full flex font-avigea place-content-center">
                            <div className="flex flex-col grow text-left place-content-center">
                                <p className="font-bold mb-4 text-2xl">
                                    Akreditasi A
                                </p>
                                <p className="font-tinos">Teknik Informatika</p>
                                <p className="font-tinos">
                                    SK No. 007/SK/BAN-PT/Ak-PPJ/S/XII/2045
                                </p>
                            </div>
                            <div className="flex gap-2 place-content-center">
                                <img src={accreditation_a} alt="akreditasi" />
                                <img src={banpt} alt="ban-pt" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="flex gap-8 mt-8">
                    <div className="relative basis-1/2 h-full">
                        <h1 className="absolute top-0 -translate-y-1/2 -translate-x-4 bg-white rounded-full border-2 border-jaffa-600 font-bold text-jaffa-600 p-2 px-8">
                            Visi
                        </h1>
                        <p className="rounded-xl bg-gradient-to-br h-full from-jaffa-600 to-jaffa-700 text-white p-8">
                            Menjadi Program Studi Teknik Informatika terkemuka
                            dan unggul pada Tahun 2030, dalam penyelenggaraan
                            pendidikan, penelitian dan pengabdian kepada
                            masyarakat di bidang teknologi informasi berbasis
                            intelligent system, untuk pengembangan potensi di
                            Pulau Sumatera dan Indonesia pada umumnya
                        </p>
                    </div>
                    <div className="relative basis-1/2 h-full">
                        <h1 className="absolute top-0 -translate-y-1/2 -translate-x-4 bg-white rounded-full border-2 border-jaffa-600 font-bold text-jaffa-600 p-2 px-8">
                            Misi
                        </h1>
                        <p className="rounded-xl bg-gradient-to-br h-full from-jaffa-600 to-jaffa-700 text-white p-8 whitespace-pre-wrap">
                            Menyelenggarakan pendidikan tinggi di bidang
                            teknologi informasi berstandar global. Melaksanakan
                            kegiatan penelitian dan pemanfaatan teknologi
                            informasi untuk kesejahteraan bangsa dengan
                            memanfaatkan potensi yang ada di Pulau Sumatera.
                            Memberikan pelayanan kepada masyarakat melalui
                            bidang pendidikan, pelatihan, pendampingan, dan
                            konsultasi pada bidang teknologi informasi. Ikut
                            serta dalam pembangunan nasional dengan menghasilkan
                            inovasi dan kreasi dari civitas akademik Program
                            Studi Informatika, baik dosen maupun mahasiswa.
                        </p>
                    </div>
                </div>

                <div className="rounded-lg bg-moccaccino-50 text-left shadow p-8">
                    <h1 className="font-avigea text-3xl text-moccaccino-500">
                        Koordinator Program Studi
                    </h1>
                    <div className="flex gap-4 mt-4">
                        <img
                            src="https://placeholder.pics/svg/100x100"
                            alt="Koordinator"
                            className="h-28 w-28 rounded-full"
                        />
                        <div className="text-left place-content-center">
                            <p className="text-2xl">
                                Andika Setiawan, S.Kom., M.Cs.
                            </p>
                            <p className="text-gray-500">
                                Koordinator Program Studi Teknik Informatika
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Page;
