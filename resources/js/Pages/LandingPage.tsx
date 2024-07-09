import React from 'react';

import Footer from '@/Components/Footer';
import MaxWidthWrapper from '@/Components/MaxWidthWrapper';
import NavHero from '@/Components/NavHero';
import FilosofiLogo from '@/Components/landing-page/FilosofiLogo';
import InfoSection from '@/Components/landing-page/InfoSection';
import Maskot from '@/Components/landing-page/Maskot';
import Panduan from '@/Components/landing-page/Panduan';
import Sponsorship from '@/Components/landing-page/Sponsorship';
import VideoSection from '@/Components/landing-page/VideoSection';
import What from '@/Components/landing-page/What';

import elang from '!assets/elang-hero.png';
import overlay_box from '!assets/overlay-box.png';
import overlay_earth from '!assets/overlay-earth.png';
import pillar_brown from '!assets/pillar-brown.png';
import sponsor_overlay from '!assets/sponsor-overlay.png';

export default function LandingPage() {
    return (
        <div>
            <MaxWidthWrapper className="relative">
                <img
                    src={elang}
                    alt="elang"
                    className="absolute right-10 top-32 md:w-1/3 lg:w-1/3"
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
                className="absolute -mt-[200px] w-full"
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
