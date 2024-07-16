import Marquee from "react-fast-marquee";

import React from "react";

// sub components dari prodi
const Prodi = ({ text, className }) => (
    <div
        className={`rounded-full border-jaffa-700 border-2 bg-jaffa-400 py-2 px-8 ${className}`}
    >
        <p className="text-white md:text-2xl">{text}</p>
    </div>
);

export default function ProgramStudi({ prodi }) {
    // data prodi per fakultas
    const dataProdi = {
        "fakultas-sains": [
            "Fisika",
            "Sains Atmosfer dan Keplanetan",
            "Farmasi",
            "Matematika",
            "Sains Aktuaria",
            "Sains Data",
            "Kimia",
            "Biologi",
            "Sains Lingkungan Kelautan",
        ],
        "Teknologi-Infrastruktur-dan-Kewilayahan": [
            "Teknik Sipil",
            "Perencanaan Wilayah dan Kota",
            "Teknik Geomatika",
            "Teknik Lingkungan",
            "Teknik Kelautan",
            "Desain Komunikasi Visual",
            "Arsitektur Lanskap",
            "Teknik Perkeretaapian",
            "Rekayasa Tata Kelola Air Terpadu",
            "Pariwisata",
        ],
        "fakultas-teknologi-industri": [
            "Teknik Geofisika",
            "Teknik Geologi",
            "Teknik Pertambangan",
            "Teknologi Industri Pertanian",
            "Teknik Biosistem",
            "Teknik Telekomunikasi",
            "Rekayasa Minyak dan Gas",
            "Teknik Informatika",
            "Teknik Elektro",
            "Rekayasa Instrumentasi dan Automasi",
            "Rekayasa Keolahragaan",
            "Teknik Material",
            "Teknik Mesin",
            "Teknik Industri",
            "Teknik Fisika",
            "Teknik Biomedis",
            "Rekayasa Kosmetik",
            "Teknik Kimia",
            "Teknologi Pangan",
        ],
    };

    const selectedProdi = dataProdi[prodi] || [];

    return (
        <div className="mt-16 px-4 md:px-4">
            <div className="text-start md:text-center">
                <p className="font-bold tracking-widest font-avigea text-moccaccino-500 text-2xl md:text-5xl">
                    Program Studi
                </p>
            </div>
            <div className="flex flex-wrap mt-10 md:mt-16 gap-5 justify-evenly">
                <Marquee>
                    {selectedProdi.map((tag, index) => (
                        <div>
                            <Prodi key={index} text={tag} className="mx-2" />
                            <Prodi key={index} text={tag} className="mx-8 my-4" />
                            <Prodi key={index} text={tag} className="mx-2" />
                        </div>
                    ))}
                </Marquee>
            </div>
            <div className="bg-gradient-to-r from-jaffa-700 to-jaffa-800 flex justify-between text-center text-white rounded-xl text-xl py-4 mt-24 px-3 md:px-10">
                <div>
                    <p>{selectedProdi.length}</p>
                    <p>Prodi</p>
                </div>
                <div>
                    <p>3,210</p>
                    <p>Mahasiswa</p>
                </div>
                <div>
                    <p>146</p>
                    <p>Dosen</p>
                </div>
                <div>
                    <p>38</p>
                    <p>Tendik</p>
                </div>
            </div>
        </div>
    );
}
