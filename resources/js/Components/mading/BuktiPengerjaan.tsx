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

import { CardType } from "@/lib/types/Mading";

import logo_pplk_itera from "!assets/logo-pplk-hd.png";

interface BuktiPengerjaanProps {
    cards: CardType[];
    completionPercentage: { [key: number]: number };
    isSubmitted: { [key: number]: boolean };
    isKetua: boolean;
}

export default function BuktiPengerjaan({
    cards,
    completionPercentage,
    isSubmitted,
    isKetua,
}: BuktiPengerjaanProps) {
    console.log(isSubmitted);
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="scroll-smooth max-w-[1920px] xl:pl-36 lg:pl-20 md:pl-10 w-full pl-5 mx-auto mt-10"
        >
            <CarouselContent>
                {cards.map((card, index) => (
                    <CarouselItem
                        key={index}
                        className="basis-72 md:basis-[370px] xl:basis-[26rem]"
                    >
                        <Card
                            className={`bg-white ${getCardBg(isSubmitted, card, isKetua)} xl:w-[400px] md:w-[350px] lg:w-[350px] md:h-[550px] w-[280px] h-[400px] xl:h-[600px] overflow-hidden rounded-lg relative border border-dashed border-jaffa-700 font-montserrat`}
                        >
                            <CardContent
                                className={`flex flex-col h-full relative items-center justify-center p-4 ${getTextColor(isSubmitted[card.tugas[0].id])}`}
                            >
                                {renderProgress(
                                    isSubmitted,
                                    card,
                                    completionPercentage,
                                    index,
                                    isKetua,
                                )}
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}

function getCardBg(
    isSubmitted: { [key: number]: boolean },
    card: CardType,
    isKetua: boolean,
) {
    return `${isSubmitted[card.tugas[0].id] ? "bg-jaffa-700" : ""} ${card.tugas[0].kategori === "kelompok" && !isKetua ? "bg-jaffa-700" : ""}`;
}

function getTextColor(isSubmitted) {
    return isSubmitted ? "text-white" : "text-jaffa-700";
}

function renderProgress(
    isSubmitted: { [key: number]: boolean },
    card: CardType,
    completionPercentage: { [key: number]: number },
    index: number,
    isKetua: boolean,
) {
    if (
        index === 0 &&
        card.tugas[0].kategori === "kelompok" &&
        isSubmitted[card.tugas[0].id]
    ) {
        // Logic to display two images on the first card for non-leaders in a group task
        return (
            <div className="md:gap-8 xl:gap-10 flex flex-col items-center justify-center gap-5 mt-0">
                {/* logo pplk */}
                <div className="md:w-32 md:h-32 w-24 h-24 p-1 bg-white rounded-full">
                    <img
                        src={logo_pplk_itera}
                        alt="logo_pplk_itera w-full h-full"
                    />
                </div>

                {/* logo kelompok */}
                <div className="md:w-32 md:h-32 w-24 h-24 p-1 bg-white rounded-full">
                    <img
                        src={logo_pplk_itera}
                        alt="logo_pplk_itera w-full h-full"
                    />
                </div>
            </div>
        );
    } else if (isSubmitted[card.tugas[0].id] && card.hari !== 1) {
        // Existing logic for displaying progress
        return (
            <>
                {card.poster_url !== null ? (
                    <img
                        src={card.poster_url}
                        alt="image poster"
                        className="absolute inset-0 object-contain w-full h-full bg-center bg-cover"
                    />
                ) : (
                    <>
                        <h2 className="font-avigea text-[44px] text-center">
                            Day {index + 1}
                        </h2>

                        <div className="mt-[20%] flex flex-col items-center justify-center">
                            <div className="w-32 h-32">
                                <CircularProgressbarWithChildren
                                    value={completionPercentage[index + 1]}
                                    text={`${Math.floor(completionPercentage[index + 1])}%`}
                                    strokeWidth={10}
                                    styles={buildStyles({
                                        strokeLinecap: "butt",
                                        textColor: "#fff",
                                        trailColor: "#F97B70",
                                        pathColor: "#FEF3F2",
                                    })}
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

                            {isKetua && card.is_selesai ? (
                                <Link
                                    href={`/mading/pengumpulan-cover/${card.id}`}
                                    className={`${buttonVariants()} hover:bg-white/90 flex items-center justify-center gap-2 mx-auto mt-10 md:mt-16 bg-white shadow-sm`}
                                >
                                    <IconPhotoUp color="#b54419" size={20} />
                                    <span className="text-jaffa-700 font-bold">
                                        Upload Cover
                                    </span>
                                </Link>
                            ) : null}
                        </div>
                    </>
                )}
            </>
        );
    } else {
        return renderUploadLink(index, isKetua, card);
    }
}

function renderUploadLink(index: number, isKetua: boolean, card: CardType) {
    if (index === 0 && isKetua && card.tugas[0].kategori === "kelompok") {
        return (
            <Link
                className="text-[48px] font-bold text-jaffa-700 bg-transparent"
                href={`/mading/pengumpulan/${card.id}`}
            >
                +
            </Link>
        );
    } else if (index !== 0) {
        return (
            <Link
                className="text-[48px] font-bold text-jaffa-700 bg-transparent"
                href={`/mading/pengumpulan/${card.id}`}
            >
                +
            </Link>
        );
    }
    return null;
}
