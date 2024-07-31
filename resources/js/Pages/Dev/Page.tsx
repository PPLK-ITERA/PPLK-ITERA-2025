import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import React, { useEffect, useState } from "react";

import { Carousel } from "@/Components/CarouselMaskot";
import DevCard from "@/Components/dev/DevCard";
import KadivSection from "@/Components/dev/KadivSection";
import NavButton from "@/Components/dev/NavButton";
import ParticleBackground from "@/Components/dev/ParticleBackground";
import RunningTitle from "@/Components/dev/RunningText";
import VvdSection from "@/Components/dev/VvdSection";
import "@/Components/dev/transition.css";

import { useAos } from "@/lib/hooks/useAos";

function Page() {
    useAos();

    const [activeComponent, setActiveComponent] = useState<React.ReactNode>(
        <KadivSection />,
    );

    function handleSwitch(i: number) {
        switch (i) {
            case 0:
                setActiveComponent(<KadivSection />);
                break;
            case 1:
                setActiveComponent(<VvdSection />);
                break;
            case 2:
                setActiveComponent(<KadivSection />);
            case 3:
                setActiveComponent(<KadivSection />);
            case 4:
                setActiveComponent(<KadivSection />);
                break;
            default:
                break;
        }
    }

    return (
        <div className="relative min-h-screen w-screen overflow-hidden font-montserrat text-white">
            <ParticleBackground />

            <main>
                <TransitionGroup>
                    <CSSTransition
                        key={activeComponent!.type.name}
                        timeout={500}
                        classNames="fade"
                    >
                        {activeComponent}
                    </CSSTransition>
                </TransitionGroup>
            </main>

            <footer className="bottom-0 left-0 -translate-y-full w-full p-4">
                <nav className="w-min mx-auto flex gap-8 backdrop-blur-md bg-white/5">
                    <NavButton
                        label="KARTATERA"
                        onClick={() => {
                            handleSwitch(0);
                        }}
                    />
                    <NavButton
                        label="VVD"
                        onClick={() => {
                            handleSwitch(1);
                        }}
                    />
                    <NavButton
                        label="FRONT-END"
                        onClick={() => {
                            handleSwitch(2);
                        }}
                    />
                    <NavButton
                        label="BACK-END"
                        onClick={() => {
                            handleSwitch(3);
                        }}
                    />
                    <NavButton
                        label="CONTENT RESEARCH"
                        onClick={() => {
                            handleSwitch(4);
                        }}
                    />
                </nav>
            </footer>

            <div className="hidden shadow-2xl"></div>
        </div>
    );
}

export default Page;
