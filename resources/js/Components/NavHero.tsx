import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Navbar from "./Navbar";
import Hero from "./landing-page/Hero";

export default function NavHero() {
    return (
        <div className="min-h-screen bg-jumbotron bg-cover">
            <MaxWidthWrapper>
                <Navbar />
                <Hero />
            </MaxWidthWrapper>
        </div>
    );
}
