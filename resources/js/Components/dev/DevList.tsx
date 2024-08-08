import DevCard from "./DevCard";
import RunningText from "./RunningText";
import StaffCarousel from "./StaffCarousel";

import React from "react";

import { Developer } from "@/lib/types/Developer";

function DevList({
    devList,
    devRoleName,
}: {
    devList: Developer[];
    devRoleName: string;
}) {
    const [developer, setDeveloper] = React.useState(devList[0]);

    const [displayName, setDisplayName] = React.useState(developer.name);
    const [displayRole, setDisplayRole] = React.useState(developer.role);
    const [displayInstagram, setDisplayInstagram] = React.useState(
        developer.instagram,
    );

    const [displayQuote, setDisplayQuote] = React.useState(developer.quote);
    const [loading, setLoading] = React.useState(true);

    function generateRandomText(source: string) {
        // randomize every character in the string but not spaces, lowecase
        return source
            .split("")
            .map((char) =>
                char === " "
                    ? char
                    : String.fromCharCode(Math.floor(Math.random() * 26) + 97),
            )
            .join("");
    }

    function shuffleDisplay() {
        setLoading(true);
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                let currentDev = developer;
                setDisplayName(
                    i == 4
                        ? currentDev.name
                        : generateRandomText(currentDev.name),
                );
                setDisplayRole(
                    i == 4
                        ? currentDev.role
                        : generateRandomText(currentDev.role),
                );
                setDisplayInstagram(
                    i == 4
                        ? currentDev.instagram
                        : generateRandomText(currentDev.instagram),
                );
                setDisplayQuote(
                    i == 4
                        ? currentDev.quote
                        : generateRandomText(currentDev.quote),
                );
                if (i == 4) setLoading(false);
            }, 40 * i);
        }
    }

    React.useEffect(() => {
        shuffleDisplay();
    }, [developer]);

    return (
        <div className="max-lg:flex-col-reverse backdrop-blur-md border-white/20 lg:p-8 place-items-center lg:gap-24 bg-opacity-10 flex justify-between w-full gap-8 p-6 overflow-hidden border rounded">
            <div className="flex flex-col h-fit w-full max-w-xl lg:h-[400px]">
                <RunningText
                    delay={40}
                    className="md:text-2xl my-3 text-base font-bold"
                    title={`Sub-Divisi ${devRoleName}`}
                ></RunningText>
                <div className="md:grow"></div>
                <div className="lg:border-l-4 lg:pl-4 max-lg:border-t-2 border-cyan-primary">
                    <h2
                        className={`${loading ? "opacity-40" : "opacity-100"} max-lg:mt-2 text-lg lg:text-3xl font-bold`}
                    >
                        {displayName}
                    </h2>
                    <p
                        className={`${loading ? "opacity-40" : "opacity-100"} text-base lg:text-xl -mt-1`}
                    >
                        {displayRole}
                    </p>
                    <p
                        className={`${loading ? "opacity-40" : "opacity-100"} text-xs lg:text-sm mt-2`}
                    >
                        "{displayQuote}"
                    </p>
                    <a
                        className={`${loading ? "opacity-40" : "opacity-100"} text-xs lg:text-sm underline text-cyan-primary hover:text-white transition duration-300`}
                        href={`https://instagram.com/${displayInstagram}`}
                        target="_blank"
                    >
                        @{displayInstagram}
                    </a>
                </div>
                <p className="mt-8 text-sm">
                    Daftar Staff Sub-Divisi {devRoleName}
                </p>
                <StaffCarousel
                    staffList={devList}
                    onclick={(dev: Developer) => setDeveloper(dev)}
                />
            </div>
            <DevCard
                className="w-44 lg:w-64 h-[300px] lg:h-[400px] shadow-2xl shadow-cyan-primary/40"
                developer={developer}
            />
        </div>
    );
}

export default DevList;
