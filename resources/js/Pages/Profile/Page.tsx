import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Profil from "@/Components/profile/ProfilKamu";
import TentangPplk from "@/Components/profile/TentangPplk";

import info from "!assets/info.png";
import jokowi from "!assets/jokowi.png";

const Page = () => {
    return (
        <div className="bg-pattern-white">
            <Navbar isSolid={true} isFixed={true} />
            <div className="flex sm:flex-row flex-col gap-3 justify-center mx-auto pt-32 mb-28">
                <div className="flex flex-col items-center gap-4 mx-2">
                    <div className="max-w-[212px] max-h-[212px] bg-red-600 rounded-full">
                        <div className="w-[85px] h-[85px] bg-blue-600 rounded-full ml-32 mt-32"></div>
                    </div>
                    <h2 className="text-center text-[16px] font-montserrat font-bold">
                        Jokowi
                    </h2>
                    <div className="flex justify-center items-center w-[98px] h-[40px] rounded-[10px] border border-[#B9622F]">
                        <h2 className="text-[14px] font-montserrat text-[#B9622F] font-semibold">
                            Edit Foto
                        </h2>
                    </div>
                    <h2 className="text-jaffa-700 font-montserrat font-bold text-[16px]">
                        QR Presensi
                    </h2>
                    <div className="w-[190px] h-[190px] bg-jaffa-600 rounded-xl">
                        <img src="" alt="" />
                    </div>
                    <div className="flex justify-center items-center w-[173px] h-[40px] bg-gradient-to-b from-[#B9822F] to-[#A6680C] rounded-xl">
                        <h2 className="text-[14px] font-montserrat font-semibold text-center text-white">
                            Download QR Code
                        </h2>
                    </div>
                </div>
                <div className="flex flex-col gap-6 mx-2">
                    <div className="mx-auto flex justify-center items-center xl:items-start xl:justify-start xl:max-w-[945px] md:max-w-[920px] lg:max-w-[800px] md:max-h-[108px] w-full h-full bg-jaffa-600 rounded-xl">
                        <div className="p-5 flex flex-col gap-2 xl:p-2">
                            <h2 className="flex md:text-[23px] lg:text-[25px] text-[20px] font-montserrat font-bold text-white items-center">
                                <img src={info} alt="" className="mr-2" />
                                Informasi
                            </h2>
                            <p className="md:text-[16px] lg:text-[20px] text-[12px] font-montserrat text-white">
                                Hubungi Daplok atau Mentor jika terdapat
                                kesalahan data
                            </p>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col gap-8">
                        <div className="xl:max-h-[826px] xl:max-w-[444px]  lg:max-w-[350px] mx-auto w-full h-full rounded-xl bg-white shadow-2xl border border-gray-400">
                            <Profil />
                        </div>
                        <div className="md:max-h-[605px] lg:max-h-[590px] xl:max-w-[444px] lg:max-w-[350px] mx-auto w-full h-full rounded-xl bg-white shadow-2xl border border-gray-400">
                            <TentangPplk />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Page;
