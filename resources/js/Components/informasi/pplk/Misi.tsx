import React from "react";

function Page() {
    return (
        <div className="flex items-center justify-center mt-4">
            <div className="flex flex-col items-center justify-center text-center">
                <h2 className="bg-gradient-to-t font-avigea bg-clip-text sm:text-3xl text-candlelight-600 text-2xl">
                    MISI
                </h2>

                <div className="max-lg:flex-col md:gap-10 md:mt-10 flex items-center justify-center gap-5 mt-5">
                    <div className="flex h-[116px] sm:w-[412px] w-[315px] flex-col items-center justify-center rounded-[20px] bg-gradient-to-r from-jaffa-700 to-jaffa-800 shadow-2xl">
                        <p className="font-montserrat sm:text-[16px] text-[14px] text-white max-w-[80%]">
                            Mampu mengenal dan memahami lingkungan baru serta
                            meninggikan rasa tanggung jawab
                        </p>
                    </div>

                    <div className="flex h-[116px] sm:w-[412px] w-[315px] flex-col items-center justify-center rounded-[20px] bg-gradient-to-r from-jaffa-700 to-jaffa-800 shadow-2xl">
                        <p className="font-montserrat sm:text-[16px] text-[14px] text-white max-w-[80%]">
                            Mengedepankan karakter mahasiswa berintelektual
                            dengan acuan tri dharma perguruan tinggi
                        </p>
                    </div>
                </div>

                <div className="max-lg:flex-col md:gap-10 md:mt-10 flex gap-5 mt-5">
                    <div className="flex h-[116px] sm:w-[412px] w-[315px] flex-col items-center justify-center rounded-[20px] bg-gradient-to-r from-jaffa-700 to-jaffa-800 shadow-2xl">
                        <p className="font-montserrat sm:text-[16px] text-[14px] text-white max-w-[80%]">
                            Menanamkan kepribadian mahasiswa sebagai agent of
                            change dengan berpikir kritis dan inovatif
                        </p>
                    </div>

                    <div className="flex h-[116px] sm:w-[412px] w-[315px] flex-col items-center justify-center rounded-[20px] bg-gradient-to-r from-jaffa-700 to-jaffa-800 shadow-2xl">
                        <p className="font-montserrat sm:text-[16px] text-[14px] text-white max-w-[80%]">
                            Menumbuhkan Integritas Mahasiswa melalui Pendidikan
                            untuk Mewujudkan Indonesia Emas
                        </p>
                    </div>
                </div>

                <div className="max-md:flex-col flex gap-10 mt-16">
                    <div className="flex sm:h-[439px] sm:w-[330px] h-[350px] w-[280px] flex-col items-center rounded-[3px] bg-white shadow-2xl">
                        <p className="font-avigea mt-5 text-candlelight-600 sm:text-[25px] text-[16px]">
                            PEMBINA
                        </p>
                        <div className="sm:w-[192px] sm:h-[192px] w-[130px] h-[130px] bg-gray-200 rounded-full mt-7"></div>
                        <p className="font-montserrat text-[20px] font-bold sm:mt-10 mt-5">
                            Nama
                        </p>
                        <p className="font-montserrat text-[16px]">Jabatan</p>
                    </div>

                    <div className="flex sm:h-[439px] sm:w-[330px] h-[350px] w-[280px] flex-col items-center rounded-[3px] bg-white shadow-2xl">
                        <p className="font-avigea mt-5 text-candlelight-600 sm:text-[25px] text-[16px]">
                            KETUA PELAKSANA
                        </p>
                        <div className="sm:w-[192px] sm:h-[192px] w-[130px] h-[130px] bg-gray-200 rounded-full mt-7"></div>
                        <p className="font-montserrat text-[20px] font-bold sm:mt-10 mt-5">
                            Nama
                        </p>
                        <p className="font-montserrat text-[16px]">Jabatan</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
