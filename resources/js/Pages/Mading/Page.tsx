import Navbar from "@/Components/Navbar";

// import PengumpulanTugas from "@/Components/mading/PengumpulanTugas";
import piano from "!assets/piano.png";

const Mading = () => {
    return (
        <div>
            <Navbar isSolid={true} isFixed={true} />
            <div className="bg-pattern-white pt-44 flex-flex-col">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="font-avigea text-[49px] text-jaffa-800">
                        Mading Tugas PPLK 2024
                    </h2>
                    <div className="relative xl:max-h-[186px] xl:max-w-[1031px] lg:max-w-[350px] w-full h-full rounded-xl bg-jaffa-200 shadow-2xl border border-black mt-24">
                        <div className="p-4">
                            <div className="left-0 top-0 absolute rounded-full border border-black bg-[#FFB869]">
                                <img
                                    src={piano}
                                    alt=""
                                    className="object-cover p-1"
                                />
                            </div>
                            <h2 className="font-montserrat text-[25px] text-candlelight-800 font-bold mb-2">
                                Apa Itu Mading Tugas PPLK?
                            </h2>
                            <p className="text-[20px] text-justify text-black font-montserrat">
                                Mading Tugas PPLK adalah tempat untuk
                                menampilkan tugas yang diberikan disaat PPLK.
                            </p>
                        </div>
                    </div>
                </div>
                <h2 className="font-montserrat text-[25px] font-bold mt-12 text-moccaccino-950 text-center">
                    Kumpulkan bukti pengerjaan tugas dibawah ini
                </h2>
                <div className="items-center justify-center">
                    {/* <PengumpulanTugas /> */}
                </div>
            </div>
        </div>
    );
};

export default Mading;
