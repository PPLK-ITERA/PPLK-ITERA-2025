import React from "react";

import { useAos } from "@/lib/hooks/useAos";

export default function VideoSection() {
    useAos();

    return (
        <div className="absolute z-20 px-2 -mt-[450px] flex min-h-screen w-full flex-col items-center justify-center bg-transparent xl:-mt-[500px]">
            <h2 className="text-jaffa-950 font-avigea md:text-4xl text-3xl">
                Video PPLK
            </h2>

            <div
                data-aos="slide-up"
                data-aos-duration={2000}
                className="mt-5 md:mt-10 flex min-h-[200px] min-w-[300px] h-full w-full overflow-hidden items-center justify-center rounded-[24px] bg-jaffa-600 shadow-xl shadow-candlelight-950 md:h-[400px] md:w-[700px] lg:h-[600px] lg:w-[900px] xl:w-[1200px]"
            >
                <iframe
                    className="w-full h-full min-h-[200px] min-w-[300px]"
                    src="https://www.youtube.com/embed/1tb-wrU2weI?si=bNSIrqLmBtr9OioP"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen={true}
                ></iframe>
            </div>
        </div>
    );
}
