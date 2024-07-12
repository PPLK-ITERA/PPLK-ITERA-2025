import GoldPodium from "./Podium";
import Podium from "./Podium";
import { useAos } from "@/lib/hooks/useAos";
import { User } from "@/lib/types/User";

import React, { useEffect, useState } from "react";

import crown from "!assets/svg/crown.svg";

type Props = { user: User; rank: number; className?: string };

export default function TopUser({ user, rank, className }: Props) {
    useAos();

    // const [translate, setTranslate] = useState(false);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setTranslate(true);
    //     }, 100);
    // }, []);

    return (
        <div
            className={`flex flex-col items-center mx-4 gap-3 ${className} transition-all duration-1000 `}
            // style={{
            //     transform: translate ? "translateY(0)" : "translateY(100%)",
            // }}
        >
            <div className="grow"></div>
            <div className="relative w-24 h-24 rounded-full shadow-lg">
                {rank == 1 ? (
                    <div className="w-12 h-12 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
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
                    src={user.profileImageUrl}
                    alt={user.name}
                    className="rounded-full z-0"
                />
            </div>
            <div className="text-lg font-bold">{user.name}</div>
            <p className="rounded-full text-sm bg-gray-400/50 px-2">
                <span className="font-bold">{user.followers}</span> Followers
            </p>
            {
                {
                    1: (
                        <Podium
                            color="gold"
                            maxHeightPx={192}
                            className="w-full "
                        >
                            <p className="font-bold text-5xl">{rank}</p>
                        </Podium>
                    ),
                    2: (
                        <Podium
                            color="silver"
                            maxHeightPx={160}
                            className="w-full"
                        >
                            <p className="font-bold text-5xl">{rank}</p>
                        </Podium>
                    ),
                    3: (
                        <Podium
                            color="bronze"
                            maxHeightPx={144}
                            className="w-full"
                        >
                            <p className="font-bold text-5xl">{rank}</p>
                        </Podium>
                    ),
                }[rank]
            }
        </div>
    );
}
