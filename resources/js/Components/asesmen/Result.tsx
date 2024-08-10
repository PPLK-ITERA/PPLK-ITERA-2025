"use client";

import { Progress } from "../ui/progress";

import pilar1 from "!assets/pilar/pilar1.png";
import pilar2 from "!assets/pilar/pilar2.png";
import pilar3 from "!assets/pilar/pilar3.png";
import pilar4 from "!assets/pilar/pilar4.png";

const deskripsiPilar = [
  "Pilar pertama mengajarkan pentingnya pendidikan tinggi dan pembentukan karakter. Pendidikan tidak hanya tentang pengetahuan, tetapi juga tentang membangun integritas dan tanggung jawab. Kamu diingatkan untuk menjunjung tinggi nilai-nilai positif dan menjaga kesehatan diri serta lingkungan kampus.",
  "Pilar ini menyoroti peran kamu dalam pembangunan ekonomi di era Industri 4.0 dan Society 5.0. Ini bukan hanya tentang teknologi terbaru, tetapi juga tentang memanfaatkan pengetahuanmu untuk berdampak positif pada masyarakat. Kamu perlu siap beradaptasi dengan perubahan ekonomi global.",
  "Pilar ketiga menekankan pentingnya menjaga keseimbangan antara kehidupan akademis dan lingkungan. Kamu harus peduli terhadap lingkungan dan memahami pentingnya keselamatan serta kesehatan, baik secara pribadi maupun kolektif.",
  "Pilar terakhir berfokus pada hukum dan tata kelola. Sebagai bagian dari generasi muda, kamu bertanggung jawab untuk memahami peranmu dalam masyarakat dan berkontribusi pada pembangunan negara, dengan kesadaran bela negara dan karakter kebangsaan yang kuat.",
];

export default function AsesmenResult({
  nilai1 = 0,
  nilai2 = 0,
  nilai3 = 0,
  namaPilar,
  pilar,
  persen,
}) {
  const maxPoin = 10;

  const ProgresPilar = ({ textColor, gradient, angka, hasil }) => {
    return (
      <div className="font-montserrat mb-6">
        <div className="flex justify-between">
          <p className={`${textColor} text-lg font-bold`}>
            Pilar {angka} :
            {" " +
              (angka === 1
                ? "Work Hard"
                : angka === 2
                  ? "Sharing is Caring"
                  : angka === 3
                    ? "Equity"
                    : "Common")}
          </p>
          <p className={`${textColor} self-end font-medium `}>
            {hasil}/{maxPoin}
          </p>
        </div>
        <div className="text-xl font-bold">
          <Progress className={gradient} value={(hasil * 100) / maxPoin} />
        </div>
      </div>
    );
  };

  const DetailPilar = () => {
    return (
      <div className=" flex-col gap-6 flex  justify-center items-center font-montserrat">
        <p className="font-semibold text-jaffa-950 text-lg">
          Anda Memiliki Karakter Pilar
        </p>
        <div className="flex flex-col justify-center items-center">
          <img
            src={
              pilar === 1
                ? pilar1
                : pilar === 2
                  ? pilar2
                  : pilar === 3
                    ? pilar3
                    : pilar4
            }
            className="w-48"
          />
          <h1 className="font-bold text-xl text-moccaccino-800">{namaPilar}</h1>
        </div>

        <div className="max-w-sm font-medium text-candlelight-800 italic text-center py-4 px-2 rounded-full bg-[#ED8F45] bg-opacity-20 outline outline-1 outline-jaffa-600">
          Kamu merupakan salah satu dari{" "}
          <span className="font-bold"> {Number(persen).toFixed(0)}%</span>{" "}
          Naramuda yang mendapatkan Pilar{" "}
          <span className="font-bold">{namaPilar}</span>
        </div>

        <div className="bg-[#864D0D] max-w-md font-medium text-center text-white  p-5 h-full min-w-28 rounded-xl">
          {deskripsiPilar[pilar - 1]}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-pattern-white border border-white  ">
      <div className="flex flex-col gap-8 w-full md:flex-row items-center mt-28 justify-evenly container p-10">
        <DetailPilar />
        <div className="font-montserrat border-2 drop-shadow-xl bg-white py-10 px-10 rounded-xl border-[#74211A]">
          <p className="font-bold text-lg text-[#a36205] sm:text-2xl mb-8 w-full text-center">
            Berikut Hasil Tes Kamu
          </p>
          <div>
            <ProgresPilar
              angka={1}
              hasil={nilai1}
              textColor="text-[#74301A]"
              gradient={"bg-gradient-to-r from-[#864D0D] to-[#432005]"}
            />
          </div>

          <div>
            <ProgresPilar
              angka={2}
              hasil={nilai2}
              textColor="text-[#9A241A]"
              gradient={"bg-gradient-to-r from-[#B54419] to-[#90381C]"}
            />
          </div>

          <div>
            <ProgresPilar
              angka={3}
              hasil={nilai3}
              textColor="text-[#DA5B1C]"
              gradient={"bg-gradient-to-r from-[#ED8F45] to-[#ED8F45]"}
            />
          </div>
          <p>Terimakasih telah mengikuti asessmen PPLK!</p>
        </div>
      </div>
    </div>
  );
}
