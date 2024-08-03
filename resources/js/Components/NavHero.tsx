import React from "react";

import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/landing-page/Hero";

import { useAos } from "@/lib/hooks/useAos";

import awan from "!assets/awan.png";

export default function NavHero() {
    useAos();

    return (
        <div className="bg-mobile-hero-background md:min-h-screen md:bg-desktop-hero-background lg:bg-desktop-hero-background h-screen bg-bottom bg-cover">
            <MaxWidthWrapper>
                <Navbar isFixed={true} />
                <Hero />
            </MaxWidthWrapper>

            <img
                src={awan}
                alt="awan"
                className="xl:-mt-52 lg:-mt-40 md:-mt-20 md:visible absolute z-40 invisible w-full bg-cover"
                data-aos="fade-up"
                data-aos-duration="3000"
            />
        </div>
    );
}
