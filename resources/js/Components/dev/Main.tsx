import BackendDivision from "./BackendDivision";
import CrSection from "./CrSection";
import FrontendDivision from "./FrontendSection";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import React, { useState } from "react";

// if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import KadivSection from "@/Components/dev/KadivSection";
import NavButton from "@/Components/dev/NavButton";
import VvdSection from "@/Components/dev/VvdSection";

type Props = {};

// SOLUSI 1: Definisikan tipe component yang lebih spesifik
type ComponentConfig = {
  component: React.ReactElement;
  key: string;
};

function Main({}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  // SOLUSI 1: Gunakan ComponentConfig sebagai tipe
  const [activeComponentConfig, setActiveComponentConfig] = useState<ComponentConfig>({
    component: <KadivSection />,
    key: 'kadiv'
  });

  function handleSwitch(i: number) {
    setActiveIndex(i);
    switch (i) {
      case 0:
        setActiveComponentConfig({
          component: <KadivSection />,
          key: 'kadiv'
        });
        break;
      case 1:
        setActiveComponentConfig({
          component: <VvdSection />,
          key: 'vvd'
        });
        break;
      case 2:
        setActiveComponentConfig({
          component: <FrontendDivision />,
          key: 'frontend'
        });
        break;
      case 3:
        setActiveComponentConfig({
          component: <BackendDivision />,
          key: 'backend'
        });
        break;
      case 4:
        setActiveComponentConfig({
          component: <CrSection />,
          key: 'cr'
        });
        break;
      default:
        break;
    }
  }

  return (
    <div className="max-md:py-20 overflow-y-auto">
      <main>
        <TransitionGroup>
          <CSSTransition
            key={activeComponentConfig.key} // Gunakan string key yang kita definisikan
            timeout={500}
            classNames="fade"
          >
            {activeComponentConfig.component}
          </CSSTransition>
        </TransitionGroup>
      </main>

      <footer className="bottom-2 fixed left-0 w-full">
        <nav className="w-fit place-content-center lg:gap-8 backdrop-blur-md bg-white/5 lg:text-sm 2xl:text-base flex flex-wrap gap-2 px-4 mx-auto text-xs">
          <NavButton
            active={activeIndex == 0}
            label="ATHENARUPA"
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
