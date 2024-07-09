import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Navbar from "./Navbar";
import Hero from "./landing-page/Hero";
import awan from "../../../public/assets/awan.png";

export default function NavHero() {
    return (
        <div className="relative min-h-[150vh] bg-mobile-hero-background bg-cover bg-center md:min-h-screen md:bg-tablet-hero-background lg:bg-desktop-hero-background">
            <MaxWidthWrapper>
                <Navbar isFixed={true} />
                <Hero />
            </MaxWidthWrapper>

            <img
                src={awan}
                alt="awan"
                className="md:block absolute bottom-0 hidden w-full"
            />
        </div>
    );
}
