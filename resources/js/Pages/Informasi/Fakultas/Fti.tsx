import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Header from "@/Components/informasi/Fakultas/Header";
import Hero from "@/Components/informasi/Fakultas/Hero";
import KegiatanUnggulan from "@/Components/informasi/Fakultas/KegiatanUnggulan";
import ProgramStudi from "@/Components/informasi/Fakultas/ProgramStudi";
import StrukturOrganisasi from "@/Components/informasi/Fakultas/StrukturOrganisasi";

import fakultasSains from "!assets/fakultas-sains.png";
import fakultasTeknologiIndustri from "!assets/fakultas-teknologi-industri.png";
import fakultasTeknologiInfrastruktur from "!assets/fakultas-teknologi-infrastruktur-dan-kewilayahan.png";

const Fti = () => {
    return (
        <div className="relative">
            <Navbar isSolid={true} isFixed={true} />
            <div className="bg-mobile-hero-background md:min-h-screen md:bg-tablet-hero-background lg:bg-desktop-hero-background flex items-center justify-center bg-center bg-cover">
                <div className="relative lg:min-h-[70vh] min-h-[2h-[20vh]0vh] mt-10 md:mt-0 lg:mt-10 md:px-8 lg:px-0">
                    <Header fakultas="fakultas-teknologi-industri" />

                    <div className="mt-44 md:translate-y-0 w-full translate-y-10">
                        <div className="md:max-w-3xl md:mx-auto flex justify-between gap-3">
                            <a
                                className="bg-jaffa-200 hover:bg-jaffa-700 rounded-xl md:py-4 md:px-20 flex items-center justify-center px-8 py-4 shadow-lg"
                                href="/informasi/fakultas"
                            >
                                <img
                                    src={fakultasSains}
                                    alt=""
                                    className="md:w-[10vh] grayscale filter w-12"
                                />
                            </a>
                            <a
                                className="bg-jaffa-200 hover:bg-jaffa-700 rounded-xl md:py-4 md:px-20 flex items-center justify-center px-4 shadow-lg"
                                href="/informasi/fakultas/Ftik"
                            >
                                <img
                                    src={fakultasTeknologiInfrastruktur}
                                    alt=""
                                    className="md:w-[15vh] grayscale filter w-16"
                                />
                            </a>
                            <a
                                className="bg-jaffa-700 rounded-xl md:py-4 md:px-20 flex items-center justify-center px-8 py-4 shadow-lg"
                                href="/informasi/fakultas/Fti"
                            >
                                <img
                                    src={fakultasTeknologiIndustri}
                                    alt=""
                                    className="md:w-[10vh]  grayscale filter w-12"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-pattern-white lg:-translate-y-12 pt-20">
                <div className=" max-w-6xl mx-auto">
                    <div className="md:flex w-full">
                        <Hero fakultas="fakultas-teknologi-industri" />
                    </div>

                    <div className="p-6 mt-16">
                        <div className="bg-jaffa-700 relative p-6 rounded-md">
                            <div className="text-xl font-bold absolute top-0 -mt-6 left-4 bg-white text-jaffa-700 py-2 rounded-full border border-[#B9822F] px-14">
                                VISI
                            </div>
                            <p className="mt-6 text-white">
                                “Menjadikan Jurusan Sains ITERA sebagai lembaga
                                pendidikan tinggi yang menghasilkan sumber daya
                                manusia di bidang sains mencakup pengembangan
                                teknologi yang unggul dalam menyelenggarakan
                                pendidikan dan penelitian, mandiri, dan memenuhi
                                kebutuhan Sumber Daya Manusia (SDM) di Sumatera
                                khususnya, dan Indonesia serta dunia”
                            </p>
                        </div>
                    </div>
                    <div className="p-6 mt-16">
                        <div className="bg-jaffa-700 relative p-6 rounded-md">
                            <div className="text-xl font-bold absolute top-0 -mt-6 left-4 bg-white text-jaffa-700 py-2 rounded-full border border-[#B9822F] px-14">
                                MISI
                            </div>
                            <p className="mt-6 space-y-3 text-white">
                                <div className="flex gap-2">
                                    <p>1.</p>
                                    <p>
                                        Menyelenggarakan pendidikan pada bidang
                                        teknologi infrastruktur dan kewilayahan
                                        berorientasi pada mutu yang
                                        berkelanjutan.
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <p>2.</p>
                                    <p>
                                        Memfasilitasi sumber daya manusia untuk
                                        melaksanakan penelitian dan pengabdian
                                        kepada masyarakat yang memberdayakan
                                        potensi Sumatera
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <p>3.</p>
                                    <p>
                                        Mengembangkan kerja sama dengan pemangku
                                        kepentingan di tingkat lokal, nasional
                                        dan internasional.
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <p>4.</p>
                                    <p>Menyelenggarakan layanan publik prima</p>
                                </div>
                            </p>
                        </div>
                    </div>
                    <ProgramStudi fakultas="fakultas-teknologi-industri" />
                    <div className="mt-16">
                        <StrukturOrganisasi />
                    </div>
                </div>
                <div className="flex h-[240px] md:w-[441px] w-[300px] flex-col rounded-lg bg-white bg-opacity-0"></div>
            </div>

            <KegiatanUnggulan />
            <Footer />
        </div>
    );
};

export default Fti;
