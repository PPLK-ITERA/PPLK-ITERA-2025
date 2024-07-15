import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import PropTypes from "prop-types";

import React from "react";

import { type User } from "@/lib/types/User";

function ProfileCard({ user }: { user: User }) {
    return (
        <Card className="drop-shadow-xl ring-1 ring-black/10 h-full rounded-md">
            <CardContent className="flex flex-col items-center h-full gap-1 p-4 text-sm font-medium text-center text-black bg-white">
                <img
                    className="w-24 h-24 bg-gray-400 rounded-full select-none"
                    src={user.profileImageUrl}
                    alt={user.name}
                />
                <h3 className="line-clamp-1 text-ellipsis mt-4 font-bold">
                    {user.name}
                </h3>
                <p>{user.prodi}</p>
                <div className="flex gap-1">
                    <p>{user.namaKelompok}</p>
                    <p>({user.kelompok})</p>
                </div>
                <div className="grow"></div>
                <a href={route("relasi/profil")}>
                    <Button className="w-full mt-6 bg-[#ECAA25] text-black border border-black font-semibold text-xs">
                        Kunjungi Profil
                    </Button>
                </a>
            </CardContent>
        </Card>
    );
}

export default ProfileCard;
