import React, { useState } from "react";

import { Head, Link, router } from "@inertiajs/react";

import { UserCircle, UserPlus } from "lucide-react";

import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMoodSearch,
} from "@tabler/icons-react";

import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import FollowingDialog from "@/Components/relasi/FollowingDialog";
import KelompokDialog from "@/Components/relasi/KelompokDialog";
import ProfileCard from "@/Components/relasi/ProfileCard";
import RelasiLoading from "@/Components/relasi/RelasiLoading";
import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/Components/ui/dialog";
import { Toaster } from "@/Components/ui/toaster";

import { useAos } from "@/lib/hooks/useAos";
import { User } from "@/lib/types/User";

import logoPplkHd from "!assets/logo-pplk-hd.png";

// type Props = { response };

function Page({ auth, response }) {
  useAos();
  const sugesstedUsers: User[] = response.data.random_users;
  const user: User = response.data.user;

  const [followLoading, setFollowLoading] = useState(false);
  const [followingCount, setFollowingCount] = useState(user.followings_count);
  const isSelf = auth.user.id == user.id;

  function follow() {
    if (followLoading) return;
    if (isSelf) return;

    setFollowLoading(true);
    router.get(route("relasi.follow", user.id));
    setFollowLoading(true);
  }

  const FollowButton = isSelf ? (
    <Button
      className={`w-full ${user.followed ? "bg-white hover:bg-gray-300" : "bg-[#ECAA25] hover:bg-[#ECAA25]/90"} transition duration-200 ease-in-out border border-black text-black`}
      onClick={follow}
    >
      <a
        href={route("myprofile")}
        className="place-content-center place-items-center flex gap-2"
      >
        <UserCircle className="w-6 h-6 mr-2" />
        <p className="font-bold">Edit Profil</p>
      </a>
    </Button>
  ) : (
    <Button
      className={`w-full ${user.followed ? "bg-white hover:bg-gray-300" : "bg-[#ECAA25] hover:bg-[#ECAA25]/90"} transition duration-200 ease-in-out border border-black text-black`}
      onClick={follow}
    >
      {!followLoading ? (
        <div className="place-content-center place-items-center flex gap-2">
          <UserPlus className="w-6 h-6 mr-2" />
          <p className="font-bold">{user.followed ? "Mengikuti" : "Ikuti"}</p>
        </div>
      ) : (
        <RelasiLoading className="w-full" />
      )}
    </Button>
  );

  const followingDialog = (
    <FollowingDialog
      selfId={auth.user.id}
      userId={user.id}
      following={true}
      onUnfollow={() => {
        setFollowingCount((c) => c - 1);
      }}
    >
      <p className="max-md:flex-col max-lg:text-sm hover:underline w-fit flex gap-2">
        <span className="block font-bold">{followingCount}</span> Followings
      </p>
    </FollowingDialog>
  );

  const followersDialog = (
    <FollowingDialog selfId={auth.user.id} userId={user.id} following={false}>
      <p className="max-md:flex-col max-lg:text-sm hover:underline w-fit flex gap-2">
        <span className="block font-bold">{user.followers_count}</span>{" "}
        Followers
      </p>
    </FollowingDialog>
  );

  return (
    <div className="bg-pattern-white flex flex-col w-full min-h-screen">
      <Head title={`${user.name}`} />

      <div>
        <Navbar isSolid={true} isFixed={false} />

        <div className="max-w-7xl font-montserrat md:text-md md:mt-16 flex flex-col gap-8 px-2 py-16 mx-auto text-base text-black">
          <div className="max-md:flex-col max-md:text-center max-md:items-center place-content-center flex w-full max-w-5xl gap-8 mx-auto">
            <div className="flex flex-col justify-between gap-4">
              <div>
                <div className="max-md:w-36 max-md:h-36 w-48 h-48 relative ">
                  <Dialog>
                    <DialogTrigger>
                      <img
                        className="aspect-square border-1 object-cover max-md:w-36 max-md:h-36 w-48 h-48 bg-gray-400 rounded-full select-none"
                        src={
                          user.photo_profile_url ??
                          "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                        }
                        alt={user.name}
                      />
                    </DialogTrigger>
                    <DialogContent>
                      <div className="w-full h-full grid place-content-center place-items-center">
                        <img
                          className="rounded-xl object-contain"
                          src={
                            user.photo_profile_url ??
                            "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                          }
                          alt={user.name}
                        />
                      </div>
                    </DialogContent>
                  </Dialog>

                  <KelompokDialog kelompok={user.kelompok}>
                    <img
                      className="bottom-2 right-2 aspect-square h-1/3 border-1 absolute object-cover w-1/3 bg-gray-400 rounded-full select-none"
                      // src={user.photo_profile_url}
                      src={user.kelompok.logo_kelompok ?? logoPplkHd}
                      alt={user.kelompok.nama_kelompok}
                    />
                  </KelompokDialog>
                </div>

                <p className="max-md:hidden mt-2 text-center">
                  <span className="font-bold">{user.view_count}</span> viewers
                </p>
              </div>

              <div className="max-md:hidden">{FollowButton}</div>
            </div>

            <div className="flex flex-col justify-between w-full md:w-[28rem]">
              <div className="md:hidden place-content-center place-items-center flex flex-wrap w-full gap-8 my-4 text-sm">
                <p className="max-md:flex-col max-lg:text-sm hover:underline w-fit flex gap-2">
                  <span className="block font-bold">{user.view_count}</span>{" "}
                  viewers
                </p>
                {followingDialog}
                {followersDialog}
              </div>

              <div className="flex flex-col gap-2 mt-1">
                <div className="max-md:hidden flex gap-12">
                  {followingDialog}
                  {followersDialog}
                </div>

                <h3 className="font-bold">{user.name}</h3>
                <div className=" flex flex-col">
                  <p className="font-semibold">{user.nim}</p>
                  <p className="font-semibold">{user.prodi}</p>
                  <div className="max-md:place-content-center flex gap-2">
                    <p className="font-semibold">
                      {user.kelompok.nama_kelompok}
                    </p>
                    <p className="font-semibold">
                      ({user.kelompok.no_kelompok})
                    </p>
                  </div>
                </div>
                <p className="whitespace-pre-wrap break-words text-wrap text-sm md:text-[16px]">
                  “{user.bio}”
                </p>
              </div>

              <div className="md:w-full md:mt-auto md:mb-0 flex gap-3 my-3">
                <a
                  className={`w-full flex gap-1 border-black justify-center items-center p-1 px-2 rounded-md border shadow hover:shadow-lg bg-[#ECAA25] hover:bg-[#F7B938] transition duration-300 ease-in-out text-black`}
                  href={user.instagram_url}
                  target="_blank"
                >
                  <IconBrandInstagram size={32} stroke={1.8} />
                  <span className="md:text-[14px] text-xs font-semibold max-sm:hidden">
                    Instagram
                  </span>
                </a>

                <a
                  className={`w-full flex gap-1 border-black justify-center items-center p-1 px-2 rounded-md border shadow hover:shadow-lg bg-[#ECAA25] hover:bg-[#F7B938] transition duration-300 ease-in-out text-black`}
                  href={user.linkedin_url}
                  target="_blank"
                >
                  <IconBrandLinkedin size={32} stroke={1.8} />

                  <span className="md:text-[14px] text-xs font-semibold max-sm:hidden">
                    LinkedIn
                  </span>
                </a>
              </div>

              <div className="md:hidden">{FollowButton}</div>
            </div>
          </div>
        </div>

        <p className="mt-8 mx-auto font-[500] text-center max-md:text-sm">
          Yuk, kunjungi profile Nusantara Muda yang lain di bawah ini!
        </p>

        <div className="w-4/5 max-w-6xl mx-auto">
          <Carousel>
            <CarouselContent className="px-2 text-sm">
              {sugesstedUsers.slice(0, 9).map((u, i) => (
                <CarouselItem
                  key={i}
                  data-aos="fade-up"
                  data-aos-duration={800}
                  data-aos-delay={(i + 1) * 100}
                  className="basis-48 md:basis-1/4 xl:basis-1/5 mt-2 mb-8 text-center"
                >
                  <ProfileCard className="w-full h-full" user={u} />
                </CarouselItem>
              ))}
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 mt-2 mb-8">
                <Card className="drop-shadow-xl h-72 md:h-72 w-36 md:w-44 rounded-md">
                  <CardContent className="flex flex-col items-center justify-between h-full gap-1 p-4 text-black bg-white border rounded-md">
                    <div className="bg-gradient-to-r place-content-center from-jaffa-600 to-jaffa-800 grid w-24 h-24 text-white rounded-full">
                      <IconMoodSearch size={64} className="" />
                    </div>
                    <p className="font-bold text-center">
                      Temukan Nusantara Muda Lainnya!
                    </p>
                    <Link href={route("relasi.index")}>
                      <Button className="w-full bg-[#ECAA25] text-black border border-black font-semibold text-xs">
                        Selengkapnya
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Page;
