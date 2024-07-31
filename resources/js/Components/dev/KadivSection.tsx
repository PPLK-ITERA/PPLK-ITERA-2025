import DevCard from "./DevCard";
import RunningText from "./RunningText";

import React from "react";

import linuk from "!assets/linuk.png";
import kartateraLogo from "!assets/svg/kartatera-logo.svg";



type Props = {};

function KadivSection({}: Props) {
    return (
        <section className="flex items-center justify-center min-h-screen">
            <div className="grid grid-cols-3 gap-4 p-8 rounded-lg shadow-lg">
                <div className="col-span-1 p-4 flex flex-col place-content-center">
                    <RunningText
                        className="text-6xl font-avigea tracking-wider"
                        title={"KARTATERA"}
                        delay={150}
                    />
                    <div
                        data-aos="fade-right"
                        data-aos-delay={300}
                        data-aos-duration={2000}
                        className="mt-16 p-4 rounded-lg backdrop-blur-md bg-white/10 border border-white/50"
                    >
                        <h3 className="text-2xl font-semibold">
                            Implementasi Teknologi
                        </h3>
                        <p className="mt-4">
                            Kartatera berasal dari "Utskarta" (canggih) dan
                            "Lanterna" (lentera). Divisi IT ini melambangkan
                            cahaya perubahan dari zaman kuno ke modern, membantu
                            perkembangan teknologi, dan memudahkan mahasiswa
                            baru mengakses informasi kegiatan.
                        </p>
                    </div>
                </div>
                <div className="col-span-1 flex items-center justify-center">
                    <div
                        data-aos="fade-up"
                        data-aos-duration={1000}
                        data-aos-delay={1000}
                    >
                        <DevCard
                            name="Cornelius Linux"
                            description="Kepala Divisi Implementasi Teknologi"
                            image={linuk}
                            className="w-72 h-[450px] shadow-2xl shadow-yellow-500/40"
                        />
                    </div>
                </div>
                <div className="col-span-1 p-4 flex flex-col items-center justify-center">
                    <h1
                        data-aos="fade-left"
                        data-aos-duration={1000}
                        className="text-5xl font-bold text-center"
                    >
                        IMPLEMENTASI TEKNOLOGI
                    </h1>
                    <div
                        data-aos="fade-left"
                        data-aos-duration={1500}
                        className="mt-8"
                    >
                        <img
                            src={kartateraLogo}
                            alt="Logo"
                            className="w-64 h-64"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default KadivSection;
