// sub components dari prodi
const Prodi = ({ text }) => (
    <div className="rounded-full border-jaffa-700 border-2 bg-jaffa-400 py-2 px-8">
        <p className="text-white md:text-2xl">{text}</p>
    </div>
);
export default function ProgramStudi() {
    // data prodi Fakultas Sains
    const prodi = [
        "Fisika",
        "Sains Atmosfer dan Keplanetan",
        "Farmasi",
        "Matematika",
        "Sains Aktuaria",
        "Sains Data",
        "Kimia",
        "Biologi",
        "Sains Lingkungan Kelautan",
    ];

    return (
        <div className="mt-8 px-4 md:px-4">
            <div className=" text-start md:text-center">
                <p className="font-bold tracking-widest font-avigea text-moccaccino-500 text-2xl md:text-5xl">
                    Progaram Studi
                </p>
            </div>{" "}
            <div className="flex flex-wrap mt-10 md:mt-16 gap-5 justify-evenly ">
                {prodi.map((tag, index) => (
                    <Prodi key={index} text={tag} />
                ))}
            </div>
            <div className="bg-gradient-to-r from-jaffa-700 to-jaffa-800 flex justify-between text-center text-white rounded-xl text-xl py-4 mt-24 px-3 md:px-10">
                <div>
                    <p>9</p>
                    <p>Prodi</p>
                </div>
                <div>
                    <p>3,210</p>
                    Mahasiswa
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
