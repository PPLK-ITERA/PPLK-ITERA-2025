import BackendDivision from "./BackendDivision";
import CrSection from "./CrSection";
import FrontendDivision from "./FrontendSection";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import React, { useState } from "react";

// if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { Carousel } from "@/Components/CarouselMaskot";
import DevCard from "@/Components/dev/DevCard";
import KadivSection from "@/Components/dev/KadivSection";
import NavButton from "@/Components/dev/NavButton";
import ParticleBackground from "@/Components/dev/ParticleBackground";
import RunningTitle from "@/Components/dev/RunningText";
import VvdSection from "@/Components/dev/VvdSection";

type Props = {};

function Main({}: Props) {
    const [activeIndex, setActiveIndex] = useState(0);

    const [activeComponent, setActiveComponent] = useState<React.ReactNode>(
        <KadivSection />,
    );

    function handleSwitch(i: number) {
        setActiveIndex(i);
        switch (i) {
            case 0:
                setActiveComponent(<KadivSection />);
                break;
            case 1:
                setActiveComponent(<VvdSection />);
                break;
            case 2:
                setActiveComponent(<FrontendDivision />);
                break;
            case 3:
                setActiveComponent(<BackendDivision />);
                break;
            case 4:
                setActiveComponent(<CrSection />);
                break;
            default:
                break;
        }
    }

    return (
        <div>
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

            <footer className="fixed bottom-2 left-0 w-full">
                <nav className="w-fit mx-auto px-4 flex flex-wrap place-content-center gap-2 lg:gap-8 backdrop-blur-md bg-white/5 text-xs lg:text-sm 2xl:text-base">
                    <NavButton
                        active={activeIndex == 0}
                        label="KARTATERA"
                        onClick={() => {
                            handleSwitch(0);
                        }}
                    />
                    <NavButton
                        active={activeIndex == 1}
                        label="VVD"
                        onClick={() => {
                            handleSwitch(1);
                        }}
                    />
                    <NavButton
                        active={activeIndex == 2}
                        label="FRONTEND"
                        onClick={() => {
                            handleSwitch(2);
                        }}
                    />
                    <NavButton
                        active={activeIndex == 3}
                        label="BACKEND"
                        onClick={() => {
                            handleSwitch(3);
                        }}
                    />
                    <NavButton
                        active={activeIndex == 4}
                        label="CR"
                        onClick={() => {
                            handleSwitch(4);
                        }}
                    />
                </nav>
            </footer>
        </div>
    );
}

export default Main;
