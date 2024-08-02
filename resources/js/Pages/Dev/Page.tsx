import { useState } from "react";

import Main from "@/Components/dev/Main";
import NavButton from "@/Components/dev/NavButton";
import ParticleBackground from "@/Components/dev/ParticleBackground";
import "@/Components/dev/transition.css";

import { useAos } from "@/lib/hooks/useAos";

import kartateraLogo from "!assets/svg/kartatera-logo.svg";

function Page() {
    useAos();

    return (
        <div className="relative min-h-screen w-screen overflow-hidden font-montserrat text-white">
            <div className="max-lg:hidden fixed top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 opacity-20 h-3/4">
                <img
                    data-aos="fade-right"
                    data-aos-duration={2000}
                    src={kartateraLogo}
                    alt="Kartatera Logo"
                    className="h-full"
                />
            </div>
            <div className="lg:hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 w-3/4 h-3/4">
                <img
                    data-aos="fade-up"
                    data-aos-duration={1000}
                    src={kartateraLogo}
                    alt="Kartatera Logo"
                    className="h-full"
                />
            </div>
            <ParticleBackground />

            <Main />
        </div>
    );
}

export default Page;
