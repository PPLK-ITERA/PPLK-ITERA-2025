import {
    CircularProgressbarWithChildren,
    buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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
                                {index !== 0 ? (
                                    <h2
                                        className={`font-avigea text-[44px] pb-10 text-center ${data.card.cardOpen[index] ? "text-jaffa-700" : "text-white"}`}
                                    >
                                        Day {index}
                                    </h2>
                                ) : null}

                                {data.card.cardOpen[index] ? (
                                    <>
                                        <Link
                                            className="text-[48px] font-bold text-jaffa-700 aspect-square flex items-center justify-center md:p-[50px] lg:p-14 p-9 mx-auto bg-transparent"
                                            href={`/mading/pengumpulan/${index}`}
                                        >
                                            +
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        {data.card.posters[index] &&
                                        !data.card.posters[index].isReturn ? (
                                            <img
                                                src={
                                                    data.card.posters[index]
                                                        .url_poster
                                                }
                                                alt="Poster"
                                                className="object-cover w-full h-full"
                                            />
                                        ) : (
                                            <div className="flex flex-col w-full">
                                                {index !== 0 ? (
                                                    <>
                                                        <div className="w-[50%] mx-auto">
                                                            <CircularProgressbarWithChildren
                                                                value={percent}
                                                                text={`${Math.floor(percent)}%`}
                                                                strokeWidth={10}
                                                                styles={buildStyles(
                                                                    {
                                                                        strokeLinecap:
                                                                            "butt",
                                                                        textColor:
                                                                            "#fff",
                                                                        trailColor:
                                                                            "#F97B70",
                                                                        pathColor:
                                                                            "#FEF3F2",
                                                                    },
                                                                )}
                                                                className=""
                                                            >
                                                                <RadialSeparators
                                                                    count={12}
                                                                    style={{
                                                                        background:
                                                                            "#B54419",
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
                                                                src={
                                                                    logo_pplk_itera
                                                                }
                                                                alt="logo_pplk_itera"
                                                                className="object-contain w-full h-full"
                                                            />
                                                        </div>

                                                        <div className="md:h-32 md:w-32 w-24 h-24 overflow-hidden bg-white rounded-full">
                                                            <img
                                                                src={
                                                                    data
                                                                        .logo_kelompok
                                                                        .logo_kelompok
                                                                }
                                                                alt="logo_kelompok"
                                                                className="object-contain w-full h-full"
                                                            />
                                                        </div>
                                                    </div>
                                                )}

                                                {isKetua && index !== 0 ? (
                                                    <Link
                                                        href={`/mading/pengumpulan-cover/${index}`}
                                                        className={`${buttonVariants()} hover:bg-white/90 flex items-center justify-center gap-2 mx-auto bg-white shadow-sm`}
                                                    >
                                                        <IconPhotoUp
                                                            color="#b54419"
                                                            size={20}
                                                        />
                                                        <span className="text-jaffa-700 font-bold">
                                                            Upload Cover
                                                        </span>
                                                    </Link>
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
