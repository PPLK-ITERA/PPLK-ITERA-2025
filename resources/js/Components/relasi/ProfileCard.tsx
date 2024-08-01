import PropTypes from "prop-types";

import React from "react";

import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";

import { type User } from "@/lib/types/User";

function ProfileCard({
    user,
    className,
}: {
    user: Partial<User>;
    className?: string;
}) {
    return (
        <Card
            className={`${className} drop-shadow-xl ring-1 ring-black/10 rounded-md`}
        >
            <CardContent className="flex flex-col items-center h-full gap-1 p-4 text-sm font-medium text-center text-black bg-white">
                <img
                    className="md:w-24 w-16 md:h-24 h-16 bg-gray-400 rounded-full select-none"
                    src={user.photo_profile_url}
                    alt={user.name}
                />
                <h3 className="line-clamp-1 text-ellipsis mt-4 font-bold">
                    {user.name}
                </h3>
                <p className="capitalize">{user.prodi!.toLowerCase()}</p>
                <div className="flex gap-1">
                    <p>{user.kelompok!.nama_kelompok}</p>
                    <p>({user.kelompok!.no_kelompok})</p>
                </div>
                <div className="grow"></div>
                <a href={route("relasi.profil", { id: user.id })}>
                    <Button className="w-full mt-6 bg-[#ECAA25] hover:bg-[#ECAA25]/90 transition duration-200 ease-in-out text-black border border-black font-semibold text-xs">
                        Kunjungi Profil
                    </Button>
                </a>
            </CardContent>
        </Card>
    );
}

export default ProfileCard;
