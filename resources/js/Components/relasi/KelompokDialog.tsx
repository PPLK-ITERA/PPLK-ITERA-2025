import React from "react";

import { Link } from "@inertiajs/react";

import { Button } from "@/Components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/Components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/Components/ui/scroll-area";
import { useToast } from "@/Components/ui/use-toast";

import {
  fetchAnggotaKelompok,
  fetchFollower,
  fetchFollowing,
  followUserJson,
} from "@/lib/data/relasi";
import { Kelompok, User } from "@/lib/types/User";
import { UserFollowingResponse } from "@/lib/types/UserFollowingResponse";

import logoPplkHd from "!assets/logo-pplk-hd.png";

const KelompokDialog = ({
  className,
  children,
  kelompok,
}: {
  className?: string;
  children?: React.ReactNode;
  kelompok: Kelompok;
}) => {
  const [response, setResponse] = React.useState<UserFollowingResponse | null>(
    null,
  );

  async function getAnggotaKelompok() {
    setResponse(await fetchAnggotaKelompok(parseInt(kelompok.no_kelompok)));
  }

  return (
    <Dialog>
      <DialogTrigger className={`${className}`} onClick={getAnggotaKelompok}>
        {children}
      </DialogTrigger>
      <DialogContent className="text-center">
        <div className="flex place-content-center place-items-center gap-2">
            <img src={kelompok.logo_kelompok ?? logoPplkHd} alt={kelompok.nama_kelompok} className="rounded-full w-10 h-10 shadow" />
            <h2 className="text-lg font-semibold">
              {kelompok.nama_kelompok} ({kelompok.no_kelompok})
            </h2>
        </div>

        <div className="h-[1px] w-full bg-gray-400 my-1"></div>

        {!response ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <ScrollArea className="max-h-56 overflow-auto py-1">
            <ul className="flex flex-col gap-4">
              {response?.data.map((user: Partial<User>) => (
                <li className="flex flex-col">
                  <div className="flex place-content-between">
                    <div className="flex gap-4 place-content-center place-items-center">
                      <img
                        src={
                          user.photo_profile_url ??
                          "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                        }
                        alt={user.name}
                        className="w-10 h-10 object-cover rounded-full"
                      />
                      <Link
                        className="flex flex-col text-start hover:underline"
                        href={route("relasi.profil", user.id)}
                      >
                        <p className="font-bold">{user.name}</p>
                        <p className="text-gray-600 text-sm">
                          {user.followers_count} pengikut
                        </p>
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <ScrollBar orientation="vertical" />
          </ScrollArea>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default KelompokDialog;
