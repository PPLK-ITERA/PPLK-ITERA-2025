import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import React from "react";
import elang from "../../../public/assets/elang-hero.png";
import overlay_earth from "../../../public/assets/overlay-earth.png";
import pillar_brown from "../../../public/assets/pillar-brown.png";
import overlay_box from "../../../public/assets/overlay-box.png";
import What from "@/Components/landing-page/What";
import Panduan from "@/Components/landing-page/Panduan";
import VideoSection from "@/Components/landing-page/VideoSection";
import FilosofiLogo from "@/Components/landing-page/FilosofiLogo";
import Maskot from "@/Components/landing-page/Maskot";
import InfoSection from "@/Components/landing-page/InfoSection";
import Sponsorship from "@/Components/landing-page/Sponsorship";
import Footer from "@/Components/Footer";
import sponsor_overlay from "../../../public/assets/sponsor-overlay.png";
import NavHero from "@/Components/NavHero";

export default function LandingPage() {
    return (
        <div className="overflow-hidden">
            <MaxWidthWrapper className="relative">
                <img
                    src={elang}
                    alt="elang"
                    className="absolute right-0 top-[25rem] z-30 scale-75 md:right-10 md:top-32 md:block md:w-1/3 md:scale-100 lg:w-1/3"
                />
            </MaxWidthWrapper>

            <NavHero />

            <div className="bg-pattern-white">
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

            <div className="relative -mt-5 bg-[#170C0A] bg-pattern-white">
                <MaxWidthWrapper>
                    <Maskot />
                </MaxWidthWrapper>

                <img
                    src={pillar_brown}
                    alt="pillar_brown"
                    className="absolute bottom-0 w-full"
                />
            </div>

            <img
                src={overlay_box}
                alt="pillar_brown"
                className="absolute -mt-[50px] w-full lg:-mt-[100px] xl:-mt-[200px]"
            />

            <div className="bg-pattern-white pb-20 pt-40">
                <InfoSection />
            </div>

            <div className="h-[10px] w-full bg-candlelight-600" />

            <Sponsorship />

            <img
                src={sponsor_overlay}
                alt="sponsor_overlay"
                className="w-full object-cover"
            />

            <Footer />
        </div>
    );
}
