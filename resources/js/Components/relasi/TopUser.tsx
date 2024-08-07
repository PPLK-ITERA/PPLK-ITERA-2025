import GoldPodium from "./Podium";
import Podium from "./Podium";

import React, { useEffect, useState } from "react";

import { useAos } from "@/lib/hooks/useAos";
import { User } from "@/lib/types/User";
import { generateRandomImage } from "@/lib/utils";

import crown from "!assets/svg/crown.svg";

type Props = {
    user?: User;
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
            <div className="grow" />

            {user && (
                <div className="md:w-24 md:h-24 relative w-20 h-20 rounded-full shadow-lg">
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
                        // src={user.photo_profile_url}
                        src={generateRandomImage()}
                        alt={user.name}
                        className="z-0 bg-gray-400 rounded-full"
                    />
                </div>
            )}

            {user && (
                <a
                    className="hover:scale-105 hover:underline text-lg font-bold transition"
                    href={route("relasi.profil", { id: user.id })}
                >
                    {user.name}
                </a>
            )}

            <p className="bg-gray-400/50 md:px-2 px-0 text-sm rounded-full">
                {user && (
                    <span className="font-bold">{user.followers_count} </span>
                )}
                Followers
            </p>

            {
                {
                    1: (
                        <Podium
                            color="gold"
                            maxHeightPx={podiumHeight}
                            className=""
                        >
                            <p className="md:text-5xl text-3xl font-bold">
                                {rank}
                            </p>
                        </Podium>
                    ),
                    2: (
                        <Podium
                            color="silver"
                            maxHeightPx={podiumHeight}
                            className=""
                        >
                            <p className="md:text-5xl text-3xl font-bold">
                                {rank}
                            </p>
                        </Podium>
                    ),
                    3: (
                        <Podium
                            color="bronze"
                            maxHeightPx={podiumHeight}
                            className=""
                        >
                            <p className="md:text-5xl text-3xl font-bold">
                                {rank}
                            </p>
                        </Podium>
                    ),
                }[rank]
            }
        </div>
    );
}
