import React from "react";

function Page() {
    return (
        <div className="flex items-center justify-center mt-4">
            <div className="flex flex-col items-center justify-center text-center">
                <h2 className="bg-gradient-to-t font-avigea bg-clip-text text-3xl text-candlelight-600">
                    MISI
                </h2>
                <div className="flex gap-10 mt-10  max-lg:flex-col">
                    <div className="flex h-[116px] w-[412px] flex-col items-center justify-center rounded-[3px] bg-gradient-to-r from-jaffa-700 to-jaffa-800 shadow-2xl">
                        <p className="font-montserrat text-[15px] text-white">
                        Mampu mengenal dan memahami lingkungan baru serta meninggikan rasa tanggung jawab
                        </p>
                    </div>
                    <div className="flex h-[116px] w-[412px] flex-col items-center justify-center rounded-[3px] bg-gradient-to-r from-jaffa-700 to-jaffa-800 shadow-2xl">
                        <p className="font-montserrat text-[15px] text-white">
                        Mengedepankan karakter mahasiswa berintelektual dengan acuan tri 
                        dharma perguruan tinggi
                        </p>
                    </div>
                </div>
                <div className="flex gap-10 mt-10 max-lg:flex-col">
                    <div className="flex h-[116px] w-[412px] flex-col items-center justify-center rounded-[3px] bg-gradient-to-r from-jaffa-700 to-jaffa-800 shadow-2xl">
                        <p className="font-montserrat text-[15px] text-white">
                        Menanamkan kepribadian mahasiswa sebagai agent of change dengan berpikir kritis dan inovatif
                        </p>
                    </div>
                    <div className="flex h-[116px] w-[412px] flex-col items-center justify-center rounded-[3px] bg-gradient-to-r from-jaffa-700 to-jaffa-800 shadow-2xl">
                        <p className="font-montserrat text-[15px] text-white">
                        Menjadikan mahasiswa yang berintegritas dalam mengetahui peran penting dari pendidikan
                        untuk menuju indonesia emas
                        </p>
                    </div>
                </div>
                <div className="flex gap-10 mt-16 max-lg:flex-col">
                    <div className="flex h-[439px] w-[330px] flex-col items-center rounded-[3px] bg-white shadow-2xl">
                        <p className="font-avigea mt-5 text-candlelight-600 text-[25px]">PEMBINA</p>
                        <div className="w-[192px] h-[192px] bg-gray-200 rounded-full mt-7"></div>
                        <p className="font-montserrat text-[20px] font-bold mt-10">Nama</p>
                        <p className="font-montserrat text-[16px]">Jabatan</p>
                    </div>
                    <div className="flex h-[439px] w-[330px] flex-col items-center rounded-[3px] bg-white shadow-2xl">
                        <p className="font-avigea mt-5 text-candlelight-600 text-[25px]">KETUA PELAKSANA</p>
                        <div className="w-[192px] h-[192px] bg-gray-200 rounded-full mt-7"></div>
                        <p className="font-montserrat text-[20px] font-bold mt-10">Nama</p>
                        <p className="font-montserrat text-[16px]">Jabatan</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Page;