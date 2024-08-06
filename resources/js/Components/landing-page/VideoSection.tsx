import React from "react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/landing-page/carouselMaskot";

import { useAos } from "@/lib/hooks/useAos";

const VideoPPLK = [
    {
        id: 1,
        embed: (
            <iframe
                className="w-full h-full min-h-[200px]"
                src="https://www.youtube.com/embed/1tb-wrU2weI?si=UuwFTb2JIAZs9bMo"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
            />
        ),
    },
    {
        id: 2,
        embed: (
            <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/76cm2rLMwvs?si=e_kqQPL-r_5tWYt9"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
            />
        ),
    },
    {
        id: 3,
        embed: (
            <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/yRLTcU96_hc?si=OlCUnRmDpDA3EejM"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
            />
        ),
    },
    {
        id: 4,
        embed: (
            <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/zfTsuNsCQ9o?si=Tq724lpvyTVf6ET3"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
            />
        ),
    },
    {
        id: 5,
        embed: (
            <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/2e_Ivq_fAdM?si=3jbpMQxp8Y2S6SQj"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
            />
        ),
    },
    {
        id: 6,
        embed: (
            <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/G6U5Ub6v4SU?si=YFGiH8Ed4SImjL_C"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
            />
        ),
    },
];

export default function VideoSection() {
    useAos();

    return (
        <div className="absolute z-20 px-2 -mt-[450px] flex min-h-screen w-full flex-col items-center justify-center bg-transparent xl:-mt-[500px]">
            <h2 className="text-jaffa-950 font-avigea md:text-4xl text-3xl">
                Video PPLK
            </h2>

            <Carousel className="xl:max-w-4xl md:max-w-xl lg:max-w-2xl relative max-w-xl">
                <CarouselContent>
                    {VideoPPLK.map((video, index) => (
                        <CarouselItem key={index}>
                            <div
                                data-aos="slide-up"
                                data-aos-duration={2000}
                                className="mx-auto flex h-full w-full overflow-hidden items-center justify-center rounded-[24px] bg-jaffa-600 shadow-xl aspect-video shadow-candlelight-950"
                            >
                                {video.embed}
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="md:mt-0 mt-24" />
                <CarouselNext className="md:mt-0 mt-24" />
            </Carousel>

            {/* <div
                data-aos="slide-up"
                data-aos-duration={2000}
                className="mt-5 md:mt-10 flex min-h-[200px] h-full w-full overflow-hidden items-center justify-center rounded-[24px] bg-jaffa-600 shadow-xl shadow-candlelight-950 md:h-[400px] md:w-[700px] lg:h-[600px] lg:w-[900px] xl:w-[1200px]"
            >
                <iframe
                    className="w-full h-full min-h-[200px]"
                    src="https://www.youtube.com/embed/1tb-wrU2weI?si=bNSIrqLmBtr9OioP"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen={true}
                />
            </div> */}
        </div>
    );
}
