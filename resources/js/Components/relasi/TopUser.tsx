import GoldPodium from "./Podium";
import Podium from "./Podium";

import React, { useEffect, useState } from "react";

import { useAos } from "@/lib/hooks/useAos";
import { User } from "@/lib/types/User";

import crown from "!assets/svg/crown.svg";

type Props = {
    user: User;
    rank: number;
    className?: string;
    podiumHeight: number;
};

export default function TopUser({
    user,
    rank,
    className,
    podiumHeight,
}: Props) {
    useAos();

    const [translate, setTranslate] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTranslate(true);
        }, 100);
    }, []);

    return (
        <div
            style={{
                transform: translate
                    ? "translateY(0)"
                    : `translateY(${podiumHeight}px)`,
            }}
            className={`flex flex-col items-center gap-3 ${className} transition-all duration-1000`}
        >
            <div className="grow"></div>
            <div className="relative w-24 h-24 rounded-full shadow-lg">
                {rank == 1 ? (
                    <div className="left-1/2 absolute z-10 w-12 h-12 -translate-x-1/2 -translate-y-1/2">
                        <img
                            data-aos="zoom-in"
                            data-aos-duration="700"
                            data-aos-delay="300"
                            src={crown}
                            alt="crown"
                            className=""
                        />
                    </div>
                ) : null}
                <img
                    src={user.photo_profile_url}
                    alt={user.name}
                    className="z-0 bg-gray-400 rounded-full"
                />
            </div>
            <div className="text-lg font-bold">{user.name}</div>
            <p className="bg-gray-400/50 px-2 text-sm rounded-full">
                <span className="font-bold">{user.followers_count}</span>{" "}
                Followers
            </p>
            {
                {
                    1: (
                        <Podium
                            color="gold"
                            maxHeightPx={podiumHeight}
                            className="w-full"
                        >
                            <p className="text-5xl font-bold">{rank}</p>
                        </Podium>
                    ),
                    2: (
                        <Podium
                            color="silver"
                            maxHeightPx={podiumHeight}
                            className="w-full"
                        >
                            <p className="text-5xl font-bold">{rank}</p>
                        </Podium>
                    ),
                    3: (
                        <Podium
                            color="bronze"
                            maxHeightPx={podiumHeight}
                            className="w-full"
                        >
                            <p className="text-5xl font-bold">{rank}</p>
                        </Podium>
                    ),
                }[rank]
            }
        </div>
    );
}
