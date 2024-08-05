import { useState } from "react";

import { Head } from "@inertiajs/react";

import Main from "@/Components/dev/Main";
import NavButton from "@/Components/dev/NavButton";
import ParticleBackground from "@/Components/dev/ParticleBackground";
import "@/Components/dev/transition.css";

import { useAos } from "@/lib/hooks/useAos";

import kartateraLogo from "!assets/svg/kartatera-logo.svg";

function Page() {
    useAos();

    return (
        <>
            <Head title="Dev Team" />

            <div className="font-montserrat relative w-screen min-h-screen overflow-hidden text-white">
                <div className="max-lg:hidden top-1/2 opacity-20 h-3/4 fixed left-0 -translate-x-1/2 -translate-y-1/2">
                    <img
                        data-aos="fade-right"
                        data-aos-duration={2000}
                        src={kartateraLogo}
                        alt="Kartatera Logo"
                        className="h-full"
                    />
                </div>
                <div className="lg:hidden top-1/2 left-1/2 opacity-20 h-3/4 fixed w-3/4 -translate-x-1/2 -translate-y-1/2">
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
        </>
    );
}

export default Page;
