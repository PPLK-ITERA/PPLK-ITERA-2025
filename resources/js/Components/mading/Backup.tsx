import Autoplay from "embla-carousel-autoplay";
import { color } from "framer-motion";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useRoute } from "vendor/tightenco/ziggy/src/js";

import { useState } from "react";

import { Link } from "@inertiajs/react";

import { HardDriveUpload } from "lucide-react";

import { IconPhotoUp, IconUpload } from "@tabler/icons-react";

import RadialSeparators from "@/Components/mading/RadialSeparator";
import { Button, buttonVariants } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/Components/ui/carousel";

import { CardType } from "@/lib/types/Mading";

import sponsor_overlay from "!assets/sponsor-overlay.png";

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
  const [submit, setSubmit] = useState(false);

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
            {/* ${card.tugas[0].kategori === "kelompok" && !isKetua ? "bg-jaffa-700" : ""}  untuk check di kartu pertama*/}
            <Card
              className={`${isSubmitted[card.tugas[0].id] ? "bg-jaffa-700" : "bg-white"} ${card.tugas[0].kategori === "kelompok" && !isKetua ? "bg-jaffa-700" : ""} xl:w-[400px] md:w-[350px] lg:w-[350px] md:h-[550px] w-[280px] h-[400px] xl:h-[600px] overflow-hidden rounded-lg relative border border-dashed border-jaffa-700 font-montserrat`}
            >
              <CardContent
                className={`flex flex-col items-center justify-center p-4 ${isSubmitted[card.tugas[0].id] ? "text-white" : "text-jaffa-700"}`}
              >
                <h2 className="pt-5 font-avigea text-[44px] text-center">
                  Day {index + 1}
                </h2>

                {/*  */}
                {isSubmitted[card.tugas[0].id] ? (
                  <div className="md:mt-[40%] mt-[20%] flex flex-col items-center justify-center">
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
                        href={route(`mading/pengumpulan-cover`, {
                          id: card.id,
                        })}
                        onClick={() => setSubmit(true)}
                        className={`${buttonVariants()} hover:bg-white/90 flex items-center justify-center gap-2 mx-auto mt-10 md:mt-16 bg-white shadow-sm`}
                      >
                        <IconPhotoUp color="#b54419" size={20} />

                        <span className="text-jaffa-700 font-bold">
                          Upload Cover
                        </span>
                      </Link>
                    ) : null}
                  </div>
                ) : (
                  <>
                    {index === 0 && isKetua ? (
                      <Link
                        className="mt-44 text-[48px] font-bold text-jaffa-700 bg-transparent"
                        href={`/mading/pengumpulan/${card.id}`}
                      >
                        +
                      </Link>
                    ) : (
                      <>
                        {index !== 0 ? (
                          <Link
                            className="mt-44 text-[48px] font-bold text-jaffa-700 bg-transparent"
                            href={`/mading/pengumpulan/${card.id}`}
                          >
                            +
                          </Link>
                        ) : null}
                      </>
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
