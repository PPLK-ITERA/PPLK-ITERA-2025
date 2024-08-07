import React, { useState } from "react";

import { Head, usePage } from "@inertiajs/react";

import Footer from "@/Components/Footer";
import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import NavHero from "@/Components/NavHero";
import FilosofiLogo from "@/Components/landing-page/FilosofiLogo";
import InfoSection from "@/Components/landing-page/InfoSection";
import Maskot from "@/Components/landing-page/Maskot";
import Panduan from "@/Components/landing-page/Panduan";
import Sponsorship from "@/Components/landing-page/Sponsorship";
import VideoSection from "@/Components/landing-page/VideoSection";
import What from "@/Components/landing-page/What";

import { useAos } from "@/lib/hooks/useAos";
import { UserAuthProps } from "@/lib/types/User";

import elang from "!assets/elang-hero.png";
import overlay_box from "!assets/overlay-box.png";
import overlay_earth from "!assets/overlay-earth.png";
import pillar_brown from "!assets/pillar-brown.png";
import sponsor_overlay from "!assets/sponsor-overlay.png";

export default function LandingPage() {
    useAos();

    return (
        <>
            <Head title="Beranda" />

            <div className="scrollbar-hide relative overflow-hidden">
                <MaxWidthWrapper className="relative">
                    <img
                        src={elang}
                        alt="elang"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        className="absolute right-1 hidden top-[25rem] z-30 md:right-10 md:top-28 lg:top-20 md:block md:w-1/3 md:scale-100 lg:w-1/3"
                    />
                </MaxWidthWrapper>

                <NavHero />

                <div className="bg-pattern-white relative">
                    <div className="bg-gradient-to-b from-white/80 to-transparent absolute top-0 left-0 right-0 h-[500px]" />

                    <MaxWidthWrapper>
                        <What />
                        <Panduan />
                    </MaxWidthWrapper>

                    <img
                        src={overlay_earth}
                        alt="overlay_earth"
                        className="w-full"
                    />
                </div>

                <VideoSection />

                <FilosofiLogo />

                <div
                    data-aos="fade-up"
                    data-aos-duration={1000}
                    className="relative bg-[#170C0A] -mt-1 bg-pattern-white"
                >
                    <MaxWidthWrapper>
                        <Maskot />
                    </MaxWidthWrapper>

                    <img
                        data-aos="slide-up"
                        data-aos-duration={1000}
                        src={pillar_brown}
                        alt="pillar_brown"
                        className="absolute bottom-0 z-0 w-full"
                    />
                </div>

                <img
                    data-aos="slide-up"
                    data-aos-duration={1000}
                    src={overlay_box}
                    alt="pillar_brown"
                    className="absolute -mt-[50px] w-full lg:-mt-[100px] xl:-mt-[200px]"
                />

                <div
                    data-aos="fade-up"
                    data-aos-duration={1000}
                    className="bg-pattern-white pt-40 pb-20"
                >
                    <InfoSection />
                </div>

                <div className="h-[10px] w-full bg-candlelight-600" />

                <div data-aos="fade-up" data-aos-duration={1000}>
                    <Sponsorship />
                </div>

                <img
                    data-aos="fade-up"
                    data-aos-duration={1000}
                    src={sponsor_overlay}
                    alt="sponsor_overlay"
                    className="object-cover w-full"
                />

                <Footer />
            </div>
        </>
    );
}
