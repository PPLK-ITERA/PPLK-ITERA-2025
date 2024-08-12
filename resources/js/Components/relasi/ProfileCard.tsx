import PropTypes from "prop-types";

import React from "react";

import { Link } from "@inertiajs/react";

import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";

import { type User } from "@/lib/types/User";
import { generateRandomImage } from "@/lib/utils";

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
      <CardContent className="flex flex-col items-center h-full p-4 text-sm font-medium text-center text-black bg-white">
        <img
          className="md:w-24 md:h-24 bg-gradient-to-br from-gray-400 to-gray-500 object-cover object-center w-16 h-16 rounded-full select-none"
          // src={user.photo_profile_url}
          src={
            user.photo_profile_url ??
            "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
          }
          alt={user.name}
        />
        <h3 className="line-clamp-1 text-ellipsis max-md:text-sm text-wrap mt-4 font-bold">
          {user.name}
        </h3>
        <p className="line-clamp-1 text-ellipsis md:text-sm mt-1 text-xs capitalize">
          {user.prodi!.toLowerCase()}
        </p>
        <div className="md:text-sm flex gap-1 text-xs">
          <p className="line-clamp-1 text-ellipsis">
            {user.kelompok!.nama_kelompok}
          </p>
          <p className="line-clamp-1 text-ellipsis">
            ({user.kelompok!.no_kelompok})
          </p>
        </div>
        <div className="grow"></div>
        <Link href={route("relasi.profil", { id: user.id })}>
          <Button className="w-full mt-6 bg-[#ECAA25] hover:bg-[#ECAA25]/90 transition duration-200 ease-in-out text-black border border-black font-semibold text-xs">
            Kunjungi Profil
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export default ProfileCard;
