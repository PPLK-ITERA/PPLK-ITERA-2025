import DevList from "./DevList";

import React from "react";

import { devTeam } from "@/lib/data/devteam";

type Props = {};

function FrontendDivision({}: Props) {
  return (
    <section className="max-lg:pb-16 max-lg:pt-8 flex items-center justify-center w-full h-screen">
      <div className="max-lg:text-center flex flex-col items-center justify-center w-full max-w-5xl mx-4 text-white">
        <DevList devList={devTeam.frontend} devRoleName="Front-End" />
      </div>
    </section>
  );
}

export default FrontendDivision;
