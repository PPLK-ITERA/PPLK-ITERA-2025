import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./CarouselBooklet";
import { DialogBooklet } from "./DialogBooklet";

import { useState } from "react";

import { Button } from "@/Components/ui/button";

import { useAos } from "@/lib/hooks/useAos";
import { Booklet } from "@/lib/types/Booklet";

import PolygonIcon from "!assets/svg/polygon.svg";

export function CarouselBooklet({ booklets }: { booklets: Booklet[] }) {
  const [openedIndex, setOpenedIndex] = useState(null);

  const handleCardClick = (index) => {
    setOpenedIndex(index);
  };

  function getBookletDriveId(booklet: Booklet) {
    // https://drive.google.com/file/d/1uNmh-M9ZOQ23ahm0Zmr8Xcahw7XjM8mj/view?usp=sharing
    // extract the id from the url

    const url = booklet.url_booklet;
    const id = url.split("/").at(5);
    return id;
  }

  useAos();

  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-4/5 max-w-6xl mx-auto"
    >
      <CarouselContent className="flex ">
        {booklets.map((booklet, index) => (
          <CarouselItem
            key={index}
            className={`flex-shrink-0 basis-full sm:basis-1/3 transition duration-500 shadow-lg ${openedIndex !== null && openedIndex !== index ? "opacity-50" : "opacity-100"}`}
            onClick={() => handleCardClick(index)}
          >
            <Card className="h-full rounded-tl-[20px] w-full relative">
              <CardContent className="overflow-hidden relative flex flex-col h-full p-0 rounded-[20px] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.50)] outline outline-1 outline-red-800">
                <div className="relative w-96 h-48">
                  {/* Background image atau fallback */}
                  {getBookletDriveId(booklet) ? (
                    <img
                      src={`https://drive.google.com/thumbnail?authuser=0&sz=w320&id=${getBookletDriveId(booklet)}`}
                      alt="cover"
                      className="absolute w-96 h-48 object-cover rounded-[20px]"
                    />
                  ) : (
                    <div className="w-12 h-48 absolute bg-neutral-300 rounded-[20px] grid place-content-center">
                      <p className="text-white/50 text-center">
                        {booklet.nama_booklet}
                      </p>
                    </div>
                  )}

                  {/* Gradasi samping */}
                  <div className="w-64 h-48 left-[250px] top-[192px] absolute origin-top-left rotate-180 bg-gradient-to-br from-red-950 to-orange-700 rounded-tl-[20px] rounded-bl-[20px] outline outline-1 outline-offset-[-0.50px] outline-white/40 overflow-hidden">
                    <div className="w-0 h-64 left-0 top-0 absolute origin-top-left -rotate-90 bg-orange-700 shadow-[0px_-1px_20px_0px_rgba(0,0,0,0.50)]" />

                    {/* Judul Booklet */}
                    <div className="w-11 h-11 left-[200px] -bottom-[32px] absolute font-greek origin-top-left rotate-180 text-white text-3xl font-normal">
                      {booklet.nama_booklet}
                    </div>

                    {/* Deadline */}
                    {/* <div className="w-36 h-6 left-[230px] top-[50px] absolute origin-top-left rotate-180 text-white text-left">
                      <span className="text-white/95 text-lg font-normal font-['Romanica'] leading-[5px]">
                        Segera
                        <br />
                      </span>
                        <span className="text-white/45 text-base font-normal font-['Romanica'] leading-[9px]">
                          {new Date(booklet.updated_at).toLocaleDateString()}
                        </span>
                    </div> */}
                  </div>

                  {/* Hari ke-n */}
                  <div className="w-10 h-8 left-[230px] top-[78.08px] absolute text-center text-orange-700 rounded-md text-lg font-normal font-greek leading-[10px]">
                    <svg
                      width="64"
                      height="70"
                      viewBox="0 0 64 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute right-[0px] z-10"
                    >
                      <mask
                        id="path-1-outside-1_4579_10543"
                        maskUnits="userSpaceOnUse"
                        x="0.261719"
                        y="-0.105225"
                        width="64"
                        height="70"
                        fill="black"
                      >
                        <rect
                          fill="white"
                          x="0.261719"
                          y="-0.105225"
                          width="64"
                          height="70"
                        />
                        <path d="M26.2617 4.35888C29.9745 2.21528 34.5489 2.21528 38.2617 4.35888L55.7066 14.4307C59.4194 16.5743 61.7066 20.5358 61.7066 24.823V44.9666C61.7066 49.2538 59.4194 53.2153 55.7066 55.3589L38.2617 65.4307C34.5489 67.5743 29.9745 67.5743 26.2617 65.4307L8.81686 55.3589C5.10404 53.2153 2.81685 49.2538 2.81685 44.9666V24.823C2.81685 20.5358 5.10404 16.5743 8.81685 14.4307L26.2617 4.35888Z" />
                      </mask>
                      <g
                        clip-path="url(#paint0_angular_4579_10543_clip_path)"
                        data-figma-skip-parse="true"
                        mask="url(#path-1-outside-1_4579_10543)"
                      >
                        <g transform="matrix(0 0.034 -0.034 0 32.2617 34.8948)">
                          <foreignObject
                            x="-1058.82"
                            y="-1058.82"
                            width="2117.65"
                            height="2117.65"
                          >
                            <div
                              style={{
                                background:
                                  "conic-gradient(from 90deg, rgba(197, 98, 48, 1) 0deg, rgba(190, 63, 0, 1) 49.1596deg, rgba(69, 9, 9, 1) 179.594deg, rgba(205, 132, 96, 1) 312.553deg, rgba(197, 98, 48, 1) 360deg)",
                                height: "100%",
                                width: "100%",
                                opacity: 0.8,
                              }}
                            ></div>
                          </foreignObject>
                        </g>
                      </g>
                      <path
                        d="M8.81685 14.4307L9.81685 16.1627L8.81685 14.4307ZM38.2617 65.4307L39.2617 67.1627L38.2617 65.4307ZM26.2617 65.4307L25.2617 67.1627L26.2617 65.4307ZM55.7066 55.3589L56.7066 57.0909L55.7066 55.3589ZM38.2617 4.35888L37.2617 6.09093L38.2617 4.35888ZM26.2617 4.35888L25.2617 2.62683L26.2617 4.35888ZM38.2617 4.35888L37.2617 6.09093L54.7066 16.1627L55.7066 14.4307L56.7066 12.6986L39.2617 2.62683L38.2617 4.35888ZM61.7066 24.823H59.7066V44.9666H61.7066H63.7066V24.823H61.7066ZM55.7066 55.3589L54.7066 53.6268L37.2617 63.6986L38.2617 65.4307L39.2617 67.1627L56.7066 57.0909L55.7066 55.3589ZM26.2617 65.4307L27.2617 63.6986L9.81686 53.6268L8.81686 55.3589L7.81686 57.0909L25.2617 67.1627L26.2617 65.4307ZM2.81685 44.9666H4.81685V24.823H2.81685H0.816854V44.9666H2.81685ZM8.81685 14.4307L9.81685 16.1627L27.2617 6.09093L26.2617 4.35888L25.2617 2.62683L7.81685 12.6986L8.81685 14.4307ZM2.81685 24.823H4.81685C4.81685 21.2503 6.72284 17.9491 9.81685 16.1627L8.81685 14.4307L7.81685 12.6986C3.48524 15.1995 0.816854 19.8213 0.816854 24.823H2.81685ZM8.81686 55.3589L9.81686 53.6268C6.72284 51.8405 4.81685 48.5392 4.81685 44.9666H2.81685H0.816854C0.816854 49.9683 3.48524 54.5901 7.81686 57.0909L8.81686 55.3589ZM38.2617 65.4307L37.2617 63.6986C34.1677 65.4849 30.3557 65.4849 27.2617 63.6986L26.2617 65.4307L25.2617 67.1627C29.5933 69.6636 34.9301 69.6636 39.2617 67.1627L38.2617 65.4307ZM61.7066 44.9666H59.7066C59.7066 48.5392 57.8006 51.8405 54.7066 53.6268L55.7066 55.3589L56.7066 57.0909C61.0382 54.5901 63.7066 49.9683 63.7066 44.9666H61.7066ZM55.7066 14.4307L54.7066 16.1627C57.8006 17.9491 59.7066 21.2503 59.7066 24.823H61.7066H63.7066C63.7066 19.8213 61.0382 15.1995 56.7066 12.6986L55.7066 14.4307ZM38.2617 4.35888L39.2617 2.62683C34.9301 0.125967 29.5933 0.125968 25.2617 2.62683L26.2617 4.35888L27.2617 6.09093C30.3557 4.3046 34.1677 4.3046 37.2617 6.09093L38.2617 4.35888Z"
                        data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_ANGULAR&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.74509805440902710,&#34;g&#34;:0.24705882370471954,&#34;b&#34;:0.0,&#34;a&#34;:1.0},&#34;position&#34;:0.13655455410480499},{&#34;color&#34;:{&#34;r&#34;:0.27058824896812439,&#34;g&#34;:0.035294119268655777,&#34;b&#34;:0.035294119268655777,&#34;a&#34;:1.0},&#34;position&#34;:0.49887123703956604},{&#34;color&#34;:{&#34;r&#34;:0.80392158031463623,&#34;g&#34;:0.51764708757400513,&#34;b&#34;:0.37647059559822083,&#34;a&#34;:1.0},&#34;position&#34;:0.86820262670516968}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.74509805440902710,&#34;g&#34;:0.24705882370471954,&#34;b&#34;:0.0,&#34;a&#34;:1.0},&#34;position&#34;:0.13655455410480499},{&#34;color&#34;:{&#34;r&#34;:0.27058824896812439,&#34;g&#34;:0.035294119268655777,&#34;b&#34;:0.035294119268655777,&#34;a&#34;:1.0},&#34;position&#34;:0.49887123703956604},{&#34;color&#34;:{&#34;r&#34;:0.80392158031463623,&#34;g&#34;:0.51764708757400513,&#34;b&#34;:0.37647059559822083,&#34;a&#34;:1.0},&#34;position&#34;:0.86820262670516968}],&#34;transform&#34;:{&#34;m00&#34;:4.1637992458500115e-15,&#34;m01&#34;:-68.0,&#34;m02&#34;:66.261718750,&#34;m10&#34;:68.0,&#34;m11&#34;:4.1637992458500115e-15,&#34;m12&#34;:0.8947753906250},&#34;opacity&#34;:0.80000001192092896,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}"
                        mask="url(#path-1-outside-1_4579_10543)"
                      />
                      <defs>
                        <clipPath id="paint0_angular_4579_10543_clip_path">
                          <path
                            d="M8.81685 14.4307L9.81685 16.1627L8.81685 14.4307ZM38.2617 65.4307L39.2617 67.1627L38.2617 65.4307ZM26.2617 65.4307L25.2617 67.1627L26.2617 65.4307ZM55.7066 55.3589L56.7066 57.0909L55.7066 55.3589ZM38.2617 4.35888L37.2617 6.09093L38.2617 4.35888ZM26.2617 4.35888L25.2617 2.62683L26.2617 4.35888ZM38.2617 4.35888L37.2617 6.09093L54.7066 16.1627L55.7066 14.4307L56.7066 12.6986L39.2617 2.62683L38.2617 4.35888ZM61.7066 24.823H59.7066V44.9666H61.7066H63.7066V24.823H61.7066ZM55.7066 55.3589L54.7066 53.6268L37.2617 63.6986L38.2617 65.4307L39.2617 67.1627L56.7066 57.0909L55.7066 55.3589ZM26.2617 65.4307L27.2617 63.6986L9.81686 53.6268L8.81686 55.3589L7.81686 57.0909L25.2617 67.1627L26.2617 65.4307ZM2.81685 44.9666H4.81685V24.823H2.81685H0.816854V44.9666H2.81685ZM8.81685 14.4307L9.81685 16.1627L27.2617 6.09093L26.2617 4.35888L25.2617 2.62683L7.81685 12.6986L8.81685 14.4307ZM2.81685 24.823H4.81685C4.81685 21.2503 6.72284 17.9491 9.81685 16.1627L8.81685 14.4307L7.81685 12.6986C3.48524 15.1995 0.816854 19.8213 0.816854 24.823H2.81685ZM8.81686 55.3589L9.81686 53.6268C6.72284 51.8405 4.81685 48.5392 4.81685 44.9666H2.81685H0.816854C0.816854 49.9683 3.48524 54.5901 7.81686 57.0909L8.81686 55.3589ZM38.2617 65.4307L37.2617 63.6986C34.1677 65.4849 30.3557 65.4849 27.2617 63.6986L26.2617 65.4307L25.2617 67.1627C29.5933 69.6636 34.9301 69.6636 39.2617 67.1627L38.2617 65.4307ZM61.7066 44.9666H59.7066C59.7066 48.5392 57.8006 51.8405 54.7066 53.6268L55.7066 55.3589L56.7066 57.0909C61.0382 54.5901 63.7066 49.9683 63.7066 44.9666H61.7066ZM55.7066 14.4307L54.7066 16.1627C57.8006 17.9491 59.7066 21.2503 59.7066 24.823H61.7066H63.7066C63.7066 19.8213 61.0382 15.1995 56.7066 12.6986L55.7066 14.4307ZM38.2617 4.35888L39.2617 2.62683C34.9301 0.125967 29.5933 0.125968 25.2617 2.62683L26.2617 4.35888L27.2617 6.09093C30.3557 4.3046 34.1677 4.3046 37.2617 6.09093L38.2617 4.35888Z"
                            mask="url(#path-1-outside-1_4579_10543)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="80"
                      height="86"
                      viewBox="0 0 80 86"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute -right-[10px]"
                    >
                      <g filter="url(#filter0_d_4601_3890)">
                        <path
                          d="M34.2617 5.35888C37.9745 3.21528 42.5489 3.21528 46.2617 5.35888L63.7066 15.4307C67.4194 17.5743 69.7066 21.5358 69.7066 25.823V45.9666C69.7066 50.2538 67.4194 54.2153 63.7066 56.3589L46.2617 66.4307C42.5489 68.5743 37.9745 68.5743 34.2617 66.4307L16.8169 56.3589C13.104 54.2153 10.8169 50.2538 10.8169 45.9666V25.823C10.8169 21.5358 13.104 17.5743 16.8169 15.4307L34.2617 5.35888Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_4601_3890"
                          x="0.816895"
                          y="0.75116"
                          width="78.8896"
                          height="84.2872"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="7" />
                          <feGaussianBlur stdDeviation="5" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_4601_3890"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_4601_3890"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                    <p className="absolute z-20 right-[20px] top-[25px]">Day
                    <br />
                    {booklet.day}</p>                   
                  </div>
                </div>

                {/* Tombol aksi */}
                <div className="relative flex mt-4 px-4 items-center justify-center bottom-2">
                  <a
                    target="_blank"
                    href={booklet.url_booklet}
                    className="bg-gradient-to-r from-red-950 to-orange-700 font-montserrat text-sm text-white hover:text-white shadow hover:shadow-lg p-2 px-4 rounded transition"
                  >
                    Lihat
                  </a>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="w-10 h-10" />
      <CarouselNext className="w-10 h-10" />
    </Carousel>
  );
}