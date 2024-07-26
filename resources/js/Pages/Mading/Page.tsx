import { CircularProgressbar } from "react-circular-progressbar";

import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import BuktiPengerjaan from "@/Components/mading/BuktiPengerjaan";
import ProgressBar from "@/Components/mading/ProgressBar";
import RiwayatTugas from "@/Components/mading/RiwayatTugas";

import awan from "!assets/awan.png";
import gunung from "!assets/gunung.png";
import kotakajaib from "!assets/kotakajaib.png";
import pentung from "!assets/pentung.png";
import piano from "!assets/piano.png";

const Mading = () => {
    return (
        <div>
            <Navbar isSolid={true} isFixed={true} />
            <div className="bg-pattern-white pt-36 flex flex-col items-center justify-center min-h-screen pb-20">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="font-avigea text-[49px] text-jaffa-800 text-center">
                        Mading Tugas PPLK 2024
                    </h2>
                    <div className="relative xl:max-h-[186px] xl:max-w-[1031px] w-full h-full rounded-xl bg-[#FFD994] shadow-2xl border border-black mt-14 p-4">
                        <div className="absolute left-4 top-4 rounded-full border border-black bg-[#FFB869] p-2">
                            <img src={piano} alt="Piano" className="w-8 h-8" />
                        </div>
                        <div className="ml-20">
                            <h2 className="font-montserrat text-[25px] text-candlelight-800 font-bold mb-2">
                                Apa Itu Mading Tugas PPLK?
                            </h2>
                            <p className="text-[20px] text-justify text-black font-montserrat mb-2">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed do eiusmod tempor
                                incididunt......
                            </p>
                        </div>
                    </div>
                </div>
                <BuktiPengerjaan />
                <ProgressBar currentStep={1} totalSteps={6} />
                <RiwayatTugas />
            </div>

            <div className="bg-pattern-white relative bg-[#170C0A] flex flex-col gap-10 items-center justify-center">
                <div className="-translate-y-36 absolute top-0 flex items-center justify-center">
                    <img src={awan} alt="" className="w-full" />
                </div>
                <div className="mt-52 flex items-center gap-5 p-4 rounded-lg">
                    <img
                        src={pentung}
                        alt="Pentung"
                        className="w-[19px] h-[44px]"
                    />
                    <h2 className="text-[25px] font-montserrat text-white">
                        Selesaikan semua tugas yang diberikan untuk <br />
                        mendapatkan artefak dibawah ini
                    </h2>
                </div>
                <h2 className="text-jaffa-50 font-montserrat font-bold text-[60px]">
                    MADING TUGAS
                </h2>
                <img src={kotakajaib} alt="" />
                <img src={gunung} alt="" className="w-full" />
            </div>
            <Footer />
        </div>
    );
};

export default Mading;
