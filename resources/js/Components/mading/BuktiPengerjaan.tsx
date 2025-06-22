import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { CountUp } from "use-count-up";

import { useState } from "react";

import { Link } from "@inertiajs/react";

import { IconPhotoUp } from "@tabler/icons-react";

import RadialSeparators from "@/Components/mading/RadialSeparator";
import { buttonVariants } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/Components/ui/carousel";

import { TaskSystem } from "@/lib/types/Mading";

import logo_pplk_itera from "!assets/logo-pplk-hd.png";

interface BuktiPengerjaanProps {
  data: TaskSystem;
  isKetua: boolean;
}

export default function BuktiPengerjaan({
  data,
  isKetua,
}: BuktiPengerjaanProps) {
  const [countPercent1, setCountPercent1] = useState(0);
  const [countPercent2, setCountPercent2] = useState(0);
  const [countPercent3, setCountPercent3] = useState(0);
  const [countPercent4, setCountPercent4] = useState(0);
  const [countPercent5, setCountPercent5] = useState(0);

  return (
    <Carousel
      opts={{ align: "start" }}
      className="scroll-smooth max-w-[1920px] xl:pl-36 lg:pl-20 md:pl-10 w-full pl-5 mx-auto mt-10"
    >
      <CarouselContent>
        {data.card.completionPercentage.map((percent, index) => (
          <CarouselItem
            key={index}
            className="basis-72 md:basis-[370px] xl:basis-[26rem]"
          >
            <Card
              className={`bg-white ${data.card.cardOpen[index] ? "" : "bg-jaffa-700"} xl:w-[400px] md:w-[350px] lg:w-[350px] md:h-[550px] w-[280px] h-[400px] xl:h-[600px] overflow-hidden rounded-lg relative border border-dashed border-jaffa-700 font-montserrat`}
            >
              <CardContent className="relative flex flex-col items-center justify-center h-full p-0 text-white">
                {index !== 0 && data.card.cardOpen[index] ? (
                  <h2
                    className={`font-avigea text-[44px] pb-10 text-center ${data.card.cardOpen[index] ? "text-jaffa-700" : "text-white"}`}
                  >
                    Day {index}
                  </h2>
                ) : null}

                {data.card.cardOpen[index] ? (
                  <>
                    {isKetua && index === 0 ? (
                      <>
                        <h2
                          className={`font-avigea text-[44px] pb-10 text-center ${data.card.cardOpen[index] ? "text-jaffa-700" : "text-white"}`}
                        >
                          Tugas Kelompok
                        </h2>
                        <Link
                          className="text-[48px] font-bold text-jaffa-700 aspect-square flex items-center justify-center md:p-[50px] lg:p-14 p-9 mx-auto bg-transparent"
                          href={`/mading/pengumpulan/${index}`}
                        >
                          +
                        </Link>
                      </>
                    ) : !isKetua && index === 0 ? (
                      <>
                        <h2
                          className={`font-avigea text-[44px] pb-10 text-center ${data.card.cardOpen[index] ? "text-jaffa-700" : "text-white"}`}
                        >
                          Tugas Kelompok
                        </h2>
                        <div className="text-sm font-bold text-jaffa-700 flex items-center justify-center md:p-[50px] lg:p-14 p-9 mx-auto bg-transparent">
                          <p className="text-center">
                            Tugas ini belum dikumpulkan oleh ketua kelompok!
                          </p>
                        </div>
                      </>
                    ) : (
                      <Link
                        className="text-[48px] font-bold text-jaffa-700 aspect-square flex items-center justify-center md:p-[50px] lg:p-14 p-9 mx-auto bg-transparent"
                        href={`/mading/pengumpulan/${index}`}
                      >
                        +
                      </Link>
                    )}
                  </>
                ) : (
                  <>
                    {data.card.posters[index] &&
                    !data.card.posters[index].isReturn ? (
                      <img
                        src={data.card.posters[index].url_poster}
                        alt="Poster"
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="flex flex-col w-full">
                        {index !== 0 ? (
                          <>
                            <div className="w-[50%] mx-auto">
                              <div className="hidden">
                                <CountUp
                                  isCounting
                                  start={0}
                                  end={percent}
                                  easing="easeOutCubic"
                                  onUpdate={(currentValue) => {
                                    index === 1
                                      ? setCountPercent1(Number(currentValue))
                                      : index === 2
                                        ? setCountPercent2(Number(currentValue))
                                        : index === 3
                                          ? setCountPercent3(
                                              Number(currentValue),
                                            )
                                          : index === 4
                                            ? setCountPercent4(
                                                Number(currentValue),
                                              )
                                            : index === 5
                                              ? setCountPercent5(
                                                  Number(currentValue),
                                                )
                                              : 0;
                                  }}
                                />
                              </div>
                              <CircularProgressbarWithChildren
                                value={
                                  index === 1
                                    ? countPercent1
                                    : index === 2
                                      ? countPercent2
                                      : index === 3
                                        ? countPercent3
                                        : index === 4
                                          ? countPercent4
                                          : index === 5
                                            ? countPercent5
                                            : 0
                                }
                                text={`${Math.floor(index === 1 ? countPercent1 : index === 2 ? countPercent2 : index === 3 ? countPercent3 : index === 4 ? countPercent4 : index === 5 ? countPercent5 : 0)}%`}
                                strokeWidth={10}
                                styles={buildStyles({
                                  strokeLinecap: "butt",
                                  textColor: "#fff",
                                  trailColor: "#da5b1c",
                                  pathColor: "#faa282",
                                })}
                                className=""
                              >
                                <RadialSeparators
                                  count={12}
                                  style={{
                                    background: "#B54419",
                                    width: "2px",
                                    height: `${10}%`,
                                  }}
                                />
                              </CircularProgressbarWithChildren>
                            </div>
                          </>
                        ) : (
                          <div className="flex flex-col gap-5 mx-auto">
                            <div className="md:h-32 md:w-32 w-24 h-24 overflow-hidden bg-white rounded-full">
                              <img
                                src={logo_pplk_itera}
                                alt="logo_pplk_itera"
                                className="object-contain w-full h-full"
                              />
                            </div>

                            <div className="md:h-32 md:w-32 w-24 h-24 overflow-hidden bg-white rounded-full">
                              <img
                                src={data.logo_kelompok.logo_kelompok}
                                alt="logo_kelompok"
                                className="object-contain w-full h-full"
                              />
                            </div>
                          </div>
                        )}

                        {isKetua &&
                        index !== 0 &&
                        data.card.completionPercentage[index] === 100 ? (
                          <Link
                            href={`/mading/pengumpulan-cover/${index}`}
                            className={`${buttonVariants()} hover:bg-white/90 flex items-center justify-center gap-2 mx-auto bg-white shadow-sm mt-10`}
                          >
                            <IconPhotoUp color="#b54419" size={20} />
                            <span className="text-jaffa-700 font-bold">
                              Upload Cover
                            </span>
                          </Link>
                        ) : index !== 0 &&
                          data.card.completionPercentage[index] === 100 ? (
                          <div className="flex items-center justify-center gap-2 mx-auto shadow-sm mt-10">
                            <p className="w-full text-center px-6">
                              {`Wih, mantap abis! Kalian udah full 100%! Sekarang waktunya upload Cover day ${index} lewat ketua kelompok!`}
                            </p>
                          </div>
                        ) : index !== 0 &&
                          data.card.completionPercentage[index] >= 75 ? (
                          <div className="flex items-center justify-center gap-2 mx-auto shadow-sm mt-10">
                            <p className="w-full text-center px-6">
                              {`Udah keren, nih! Tinggal sedikit lagi, capai 100% biar bisa upload Cover day ${index} lewat ketua kelompok!`}
                            </p>
                          </div>
                        ) : index !== 0 &&
                          data.card.completionPercentage[index] >= 50 ? (
                          <div className="flex items-center justify-center gap-2 mx-auto shadow-sm mt-10">
                            <p className="w-full text-center px-6">
                              {`Setengah jalan lagi, guys! Semangat sampai 100% biar bisa upload Cover day ${index}!`}
                            </p>
                          </div>
                        ) : index !== 0 &&
                          data.card.completionPercentage[index] >= 25 ? (
                          <div className="flex items-center justify-center gap-2 mx-auto shadow-sm mt-10">
                            <p className="w-full text-center px-6">
                              {`Udah mulai bagus nih, baru 25%. Teruskan sampai 100% biar bisa upload Cover day ${index}!`}
                            </p>
                          </div>
                        ) : index !== 0 &&
                          data.card.completionPercentage[index] > 0 ? (
                          <div className="flex items-center justify-center gap-2 mx-auto shadow-sm mt-10">
                            <p className="w-full text-center px-6">
                              {`Baru mulai nih, gas terus sampai 100% biar bisa upload Cover day ${index}!`}
                            </p>
                          </div>
                        ) : index !== 0 &&
                          data.card.completionPercentage[index] == 0 ? (
                          <div className="flex items-center justify-center gap-2 mx-auto shadow-sm mt-10">
                            <p className="w-full text-center px-6">
                              {`Kelompokmu belum mulai mengerjakan tugas day ${index}!`}
                            </p>
                          </div>
                        ) : null}
                      </div>
                    )}
                  </>
                )}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

// function getCardBg(
//     isSubmitted: { [key: number]: boolean },
//     card: CardType,
//     isKetua: boolean,
// ) {
//     return `${isSubmitted[card.tugas[0].id] ? "bg-jaffa-700" : ""} ${card.tugas[0].kategori === "kelompok" && !isKetua ? "bg-jaffa-700" : ""}`;
// }

// function getTextColor(isSubmitted) {
//     return isSubmitted ? "text-white" : "text-jaffa-700";
// }

// function renderProgress(
//     isSubmitted: { [key: number]: boolean },
//     card: CardType,
//     completionPercentage: { [key: number]: number },
//     index: number,
//     isKetua: boolean,
// ) {
//     if (
//         index === 0 &&
//         card.tugas[0].kategori === "kelompok" &&
//         isSubmitted[card.tugas[0].id]
//     ) {
//         // Logic to display two images on the first card for non-leaders in a group task
//         return (
//             <div className="md:gap-8 xl:gap-10 flex flex-col items-center justify-center gap-5 mt-0">
//                 {/* logo pplk */}
//                 <div className="md:w-32 md:h-32 w-24 h-24 p-1 bg-white rounded-full">
//                     <img
//                         src={logo_pplk_itera}
//                         alt="logo_pplk_itera w-full h-full"
//                     />
//                 </div>

//                 {/* logo kelompok */}
//                 <div className="md:w-32 md:h-32 w-24 h-24 p-1 bg-white rounded-full">
//                     <img
//                         src={logo_pplk_itera}
//                         alt="logo_pplk_itera w-full h-full"
//                     />
//                 </div>
//             </div>
//         );
//     } else if (isSubmitted[card.tugas[0].id] && card.hari !== 1) {
//         // Existing logic for displaying progress
//         return (
//             <>
//                 {card.poster_url !== null ? (
//                     <img
//                         src={card.poster_url}
//                         alt="image poster"
//                         className="absolute inset-0 object-contain w-full h-full bg-center bg-cover"
//                     />
//                 ) : (
//                     <>
//                         <h2 className="font-avigea text-[44px] text-center">
//                             Day {index + 1}
//                         </h2>

//                         <div className="mt-[20%] flex flex-col items-center justify-center">
//                             <div className="w-32 h-32">
//                                 <CircularProgressbarWithChildren
//                                     value={completionPercentage[index + 1]}
//                                     text={`${Math.floor(completionPercentage[index + 1])}%`}
//                                     strokeWidth={10}
//                                     styles={buildStyles({
//                                         strokeLinecap: "butt",
//                                         textColor: "#fff",
//                                         trailColor: "#F97B70",
//                                         pathColor: "#FEF3F2",
//                                     })}
//                                 >
//                                     <RadialSeparators
//                                         count={12}
//                                         style={{
//                                             background: "#B54419",
//                                             width: "2px",
//                                             height: `${10}%`,
//                                         }}
//                                     />
//                                 </CircularProgressbarWithChildren>
//                             </div>

//                             {isKetua && card.is_selesai ? (
//                                 <Link
//                                     href={`/mading/pengumpulan-cover/${card.id}`}
//                                     className={`${buttonVariants()} hover:bg-white/90 flex items-center justify-center gap-2 mx-auto mt-10 md:mt-16 bg-white shadow-sm`}
//                                 >
//                                     <IconPhotoUp color="#b54419" size={20} />
//                                     <span className="text-jaffa-700 font-bold">
//                                         Upload Cover
//                                     </span>
//                                 </Link>
//                             ) : null}
//                         </div>
//                     </>
//                 )}
//             </>
//         );
//     } else {
//         return renderUploadLink(index, isKetua, card);
//     }
// }

// function renderUploadLink(index: number, isKetua: boolean, card: CardType) {
//     if (index === 0 && isKetua && card.tugas[0].kategori === "kelompok") {
//         return (
//             <Link
//                 className="text-[48px] font-bold text-jaffa-700 bg-transparent"
//                 href={`/mading/pengumpulan/${card.id}`}
//             >
//                 +
//             </Link>
//         );
//     } else if (index !== 0) {
//         return (
//             <Link
//                 className="text-[48px] font-bold text-jaffa-700 bg-transparent"
//                 href={`/mading/pengumpulan/${card.id}`}
//             >
//                 +
//             </Link>
//         );
//     }
//     return null;
// }
