import React from "react";

import { Button } from "@/Components/ui/button";

export interface TentangPplkProps {
  nama_kelompok: string;
  no_kelompok: number;
  nama_daplok: string;
  nama_mentor: string;
  fakultas_id: number;

}

const TentangPplk = ({ props }: { props: TentangPplkProps }) => {
    const getFakultasInfo = (id: number) => {
    switch (id) {
      case 1:
        return {
          nama: "Fakultas Sains",
          image: "/image/profile/fs.png",
        };
      case 2:
        return {
          nama: "Fakultas Teknologi Infrastruktur dan Kewilayahan",
          image: "/image/profile/ftik.png",
        };
      case 3:
        return {
          nama: "Fakultas Teknologi Industri",
          image: "/image/profile/fti.png",
        };
      default:
        return {
          nama: "Fakultas Tidak Diketahui",
          image: "/image/profile/default.png",
        };
    }
  };

  const fakultas = getFakultasInfo(props.fakultas_id ?? 3);
  return (
              <div className="xl:max-w-xs lg:max-w-xs md:max-w-xs sm:max-w-lg mx-auto flex flex-col gap-2">
                <div className="bg-white rounded-xl shadow-md border px-6 py-4 text-center space-y-2">
                  <p className="text-xs font-bold text-black">Asal Fakultas Mahasiswa</p>
                  <img
                    src={fakultas.image}
                    alt={fakultas.nama}
                    className="w-36 mx-auto"
                  />
                  <p className="text-md text-[#B18E63] font-semibold">{fakultas.nama}</p>

                </div>
                <div className="bg-white rounded-xl shadow-md border p-4 flex-1">
                  <h3 className="font-medium text-md mb-3">Tentang PPLK</h3>
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <div>
                      <label className="text-xs font-semibold">Nama Kelompok</label>
                      <input type="text" value={props.nama_kelompok} readOnly className="w-full h-[40px] bg-[#F0EFEF] rounded-md px-3 py-1 text-[#3F150B] border-1 border-[#C2C2C2] mt-1 text-sm" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold">Nomor Kelompok</label>
                      <input type="text" value={props.no_kelompok} readOnly className="w-full h-[40px] bg-[#F0EFEF] rounded-md px-3 py-1 text-[#3F150B] border-1 border-[#C2C2C2] mt-1 text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold">Nama Daplok</label>
                    <input type="text" value={props.nama_daplok} readOnly className="w-full h-[40px] bg-[#F0EFEF] rounded-md px-3 py-1 text-[#3F150B] border-1 border-[#C2C2C2] mt-1 text-sm mb-3" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold ">Nama Mentor</label>
                    <input type="text" value={props.nama_mentor} readOnly className="w-full h-[40px] bg-[#F0EFEF] rounded-md px-3 py-1 text-[#3F150B] border-1 border-[#C2C2C2] mt-1 text-sm" />
                  </div>
                  <div className="mt-4">
                    <label className="text-sm font-medium">Sertifikat Kelulusan PPLK</label>
                    <input className="w-full rounded-md px-2 py-1 resize-none h-36 mt-3 border-1 border-[#000000]" readOnly/>
                  </div>
                  <button className="w-full bg-gradient-to-r from-[#B9822F] to-[#A6680C] text-white text-xs font-semibold py-2 rounded-sm mt-3">Download Sertifikat</button>
                </div>
              </div>
  );
};

export default TentangPplk;