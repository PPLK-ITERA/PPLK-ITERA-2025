import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { type User } from "@/lib/types/User";
import PropTypes from "prop-types";

import React from "react";

function ProfileCard({ user }: { user: User }) {
    return (
        <Card className="rounded-md drop-shadow-xl ring-1 ring-black/10 h-full">
            <CardContent className="h-full flex flex-col items-center gap-1 p-4 text-black bg-white font-medium text-sm text-center">
                <img
                    className="w-24 h-24 rounded-full select-none"
                    src={user.profileImageUrl}
                    alt={user.name}
                />
                <h3 className="mt-4 font-bold line-clamp-1 text-ellipsis">{user.name}</h3>
                <p>{user.prodi}</p>
                <div className="flex gap-1">
                    <p>{user.namaKelompok}</p>
                    <p>({user.kelompok})</p>
                </div>
                <div className="grow"></div>
                <Button className="w-full mt-6 bg-[#ECAA25] text-black border border-black font-semibold text-xs">
                    Kunjungi Profil
                </Button>
            </CardContent>
        </Card>
    );
}

export default ProfileCard;
