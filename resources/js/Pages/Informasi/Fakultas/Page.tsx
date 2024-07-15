import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import KegiatanUnggulan from "@/Components/informasi/Fakultas/KegiatanUnggulan";
import ProgramStudi from "@/Components/informasi/Fakultas/ProgramStudi";
import StrukturOrganisasi from "@/Components/informasi/Fakultas/StrukturOrganisasi";
import fakultasSains from "!assets/fakultas-sains.png";
import fakultasTeknologiIndustri from "!assets/fakultas-teknologi-industri.png";
import fakultasTeknologiInfrastruktur from "!assets/fakultas-teknologi-infrastruktur-dan-kewilayahan.png";

const Page = () => {
    return (
        <div className="relative">
            <Navbar isSolid={true} isFixed={true} />
            <div className="bg-mobile-hero-background bg-cover bg-center md:min-h-screen md:bg-tablet-hero-background lg:bg-desktop-hero-background flex items-center justify-center">
                <div className="relative lg:min-h-[70vh] min-h-[2h-[20vh]0vh] mt-10 md:mt-0 lg:mt-10 md:px-8 lg:px-0">
                    <div className="bg-white/20 backdrop-blur shadow-2xl space-y-5 max-w-xs md:max-w-6xl mx-auto rounded-lg p-6">
                        <p className="text-white font-bold text-6xl">
                            Fakultas
                        </p>
                        <p className="text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Commodi aperiam expedita odit corporis, ipsam
                            ut praesentium, in nostrum laudantium reprehenderit
                            labore repudiandae dignissimos sequi dolorum
                            adipisci animi dolor dicta repellendus.
                        </p>
                        <p className="text-white">
                            Berikut adalah fakultas-fakultas yang terdapat di
                            ITERA :{" "}
                        </p>
                    </div>

                    <div className="w-full mt-44 translate-y-10 md:translate-y-0">
                        <div className="md:max-w-3xl md:mx-auto flex justify-between gap-3">
                            <a className="bg-jaffa-700 rounded-xl shadow-lg flex justify-center items-center md:py-4 md:px-20 px-8 py-4" href="/informasi/fakultas">
                                <img
                                    src={fakultasSains}
                                    alt=""
                                    className="md:w-[10vh] grayscale filter w-12"
                                />
                            </a>
                            <a className="bg-jaffa-200  rounded-xl shadow-lg flex justify-center items-center md:py-4 md:px-20 px-4" href="/informasi/fakultas/FTIK">
                                <img
                                    src={fakultasTeknologiInfrastruktur}
                                    alt=""
                                    className="md:w-[15vh] grayscale filter w-16"
                                />
                            </a>
                            <a className="bg-jaffa-200  rounded-xl shadow-lg flex justify-center items-center md:py-4 md:px-20 px-8 py-4" href="/informasi/fakultas/FTI">
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

            <div className="bg-pattern-white lg:-translate-y-12  ">
                <div className=" max-w-6xl mx-auto">
                    <div className="w-full md:flex">
                        <div className="pt-20 md:pt-0 md:w-3/4 flex justify-center items-center">
                            <img
                                src={fakultasSains}
                                className="md:w-3/4 w-2/5"
                            />
                        </div>
                        <div className="space-y-3 pt-14 pl-4">
                            <p className="font-bold tracking-widest font-avigea text-moccaccino-500 text-center md:text-start text-4xl md:text-5xl">
                                Fakultas Sains
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Laboriosam sit suscipit
                                incidunt commodi dignissimos tenetur ea quo
                                aliquam iure in. Error exercitationem vel eos
                                similique repellat sed laudantium quia
                                molestiae!
                            </p>
                        </div>
                    </div>
                    <div className="space-y-3 mt-8 px-4  md:px-8 lg:px-0">
                        <p className="font-bold tracking-widest font-avigea text-moccaccino-500 text-2xl md:text-5xl">
                            Sejarah
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Odio, quia cum! Quasi, error unde. Nostrum et
                            explicabo officia ipsa veniam. Excepturi, iusto non.
                            Ducimus, hic asperiores est adipisci voluptas
                            veniam! Sunt dolorum mollitia est illum magni vel
                            error? Alias eum eius, corrupti accusantium facilis
                            blanditiis earum sunt asperiores expedita adipisci
                            quo exercitationem incidunt placeat reiciendis
                            dolorem similique eveniet perspiciatis ipsum? Totam
                            quibusdam qui odit aliquam dolor ipsa, corrupti
                            placeat obcaecati quidem dolorem perspiciatis, natus
                            et ipsum explicabo alias sapiente magnam nobis.
                            Animi eaque consectetur eos alias natus! Eum, iste
                            dolores?
                        </p>
                    </div>
                    <div className="p-6  mt-8">
                        <div className="bg-jaffa-700 rounded-md p-6 relative">
                            <div className="text-xl font-bold absolute top-0 -mt-6 left-4 bg-white text-jaffa-700 py-2 rounded-full border border-[#B9822F] px-14">
                                VISI
                            </div>
                            <p className="text-white mt-6">
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
                    <div className="p-6  mt-8">
                        <div className="bg-jaffa-700 rounded-md p-6 relative">
                            <div className="text-xl font-bold absolute top-0 -mt-6 left-4 bg-white text-jaffa-700 py-2 rounded-full border border-[#B9822F] px-14">
                                MISI
                            </div>
                            <p className="text-white mt-6 space-y-3">
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
                    <ProgramStudi />
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

export default Page;
