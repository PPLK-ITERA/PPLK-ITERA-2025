import Autoplay from "embla-carousel-autoplay";

import React from "react";

import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import { Card, CardContent } from "@/Components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/Components/ui/carousel";

import arutara from "!assets/logo-sponsor/arutara.jpg";
import elmufid from "!assets/logo-sponsor/elmufid.png";
import emina from "!assets/logo-sponsor/emina.png";
import fitbar from "!assets/logo-sponsor/fitbar.png";
import goodday from "!assets/logo-sponsor/goodday.png";
import khaf from "!assets/logo-sponsor/khaf.png";
import lirik_kita from "!assets/logo-sponsor/lirik-kita.png";
import asoka from "!assets/logo-sponsor/logo-asoka.jpg";
import mandiri from "!assets/logo-sponsor/mandiri.png";
import wardah from "!assets/logo-sponsor/wardah.png";
import a_radio from "!assets/media-patners/a-radio.png";
import eventlampung from "!assets/media-patners/eventlampungdotcom.png";
import infokyai from "!assets/media-patners/infokyai.jpg";
import lampungfolk from "!assets/media-patners/lampungfolk.png";
import lampunggeh from "!assets/media-patners/lampunggeh.png";
import lembagapers_itera from "!assets/media-patners/lembagapers_itera.png";
import radio_rri from "!assets/media-patners/radio-rri.png";

const data_media_partner = [
  {
    name: "A Radio",
    src: a_radio,
  },
  {
    name: "Event Lampung",
    src: eventlampung,
  },
  {
    name: "Info Kyai",
    src: infokyai,
  },
  {
    name: "Lampung Folk",
    src: lampungfolk,
  },
  {
    name: "Lampung Geh",
    src: lampunggeh,
  },
  {
    name: "Lembaga Pers ITERA",
    src: lembagapers_itera,
  },
  {
    name: "Radio RRI",
    src: radio_rri,
  },
];

const data_sponsor = [
  {
    name: "Good Day",
    src: goodday,
  },
  {
    name: "Mandiri",
    src: mandiri,
  },
  {
    name: "Wardah",
    src: wardah,
  },
  {
    name: "Emina",
    src: emina,
  },
  {
    name: "Khaf",
    src: khaf,
  },
  {
    name: "Lirik Kita",
    src: lirik_kita,
  },
  {
    name: "Fitbar",
    src: fitbar,
  },
  {
    name: "Elmufid",
    src: elmufid,
  },
  {
    name: "Arutara",
    src: arutara,
  },
  {
    name: "Asoka",
    src: asoka,
  },
];

export default function Sponsorship() {
  return (
    <MaxWidthWrapper className="relative flex flex-col items-center w-full bg-white">
      <div className="relative flex flex-col items-center justify-center">
        <h2 className="mt-14 w-fit bg-gradient-to-r from-jaffa-700 to-jaffa-800 bg-clip-text font-avigea md:mt-20 md:text-4xl lg:text-5xl text-wrap text-lg text-center text-transparent">
          Terimakasih Kepada Sponsor
        </h2>

        {/* Sponsor Logo */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
            direction: "ltr",
          }}
          className="scroll-smooth lg:mt-20 relative w-full mt-10"
          plugins={[
            Autoplay({
              delay: 1500,
            }),
          ]}
        >
          <CarouselContent>
            {data_sponsor.map((_, index) => (
              <CarouselItem
                key={index}
                className="md:min-h-[200px] min-w-[100px] min-h-[100px] md:min-w-[200px] basis-1/5"
              >
                <div className="p-1">
                  <Card className="overflow-hidden border-none shadow-none">
                    <CardContent className="aspect-square flex items-center justify-center w-full h-full p-0">
                      <img
                        src={_.src}
                        alt={_.name}
                        className="object-contain w-full h-full"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Effect  */}
          <div className="absolute inset-0 flex justify-between">
            <div className="pointer-events-noneh h-full w-[50px] bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none h-full w-[50px] bg-gradient-to-l from-white to-transparent" />
          </div>
        </Carousel>
      </div>

      <div className="relative flex flex-col items-center justify-center">
        <h2 className="mt-14 w-fit bg-gradient-to-r from-jaffa-700 to-jaffa-800 bg-clip-text font-avigea md:mt-20 md:text-4xl lg:text-5xl text-wrap text-lg text-center text-transparent">
          Terimakasih Kepada Media Partner
        </h2>

        {/* Media Patrner Logo */}
        <Carousel
          className="scroll-smooth lg:mt-20 relative w-full mt-10"
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {data_media_partner.map((_, index) => (
              <CarouselItem
                key={index}
                className="md:min-h-[200px] min-w-[100px] min-h-[100px] md:min-w-[200px] basis-1/5"
              >
                <div className="p-1">
                  <Card className="overflow-hidden border rounded-full shadow-none">
                    <CardContent className="aspect-square flex items-center justify-center w-full h-full p-0">
                      <img
                        src={_.src}
                        alt={_.name}
                        className="object-contain w-full h-full"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute inset-0 flex justify-between">
            <div className="pointer-events-noneh h-full w-[50px] bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none h-full w-[50px] bg-gradient-to-l from-white to-transparent" />
          </div>
        </Carousel>
      </div>
    </MaxWidthWrapper>
  );
}
