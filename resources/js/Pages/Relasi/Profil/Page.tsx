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
import { Dialog, DialogContent, DialogTrigger } from "@/Components/ui/dialog";

import { useAos } from "@/lib/hooks/useAos";
import { User } from "@/lib/types/User";

import logoPplkHd from "!assets/logo-pplk-hd.png";

function Page({ auth, response }) {
  useAos();
  const sugesstedUsers = response.data.random_users;
  const user = response.data.user;

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
        <p className="font-semibold font-jakarta font-greek">Edit Profil</p>
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
          <p className="font-semibold font-jakarta font-greek">{user.followed ? "Mengikuti" : "Ikuti"}</p>
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
        <span className="block font-semibold font-jakarta font-greek">{followingCount}</span> <span className="font-semibold font-jakarta font-greek">Followings</span>
      </p>
    </FollowingDialog>
  );

  const followersDialog = (
    <FollowingDialog selfId={auth.user.id} userId={user.id} following={false}>
      <p className="max-md:flex-col max-lg:text-sm hover:underline w-fit flex gap-2">
        <span className="block font-semibold font-jakarta font-greek">{user.followers_count}</span>{" "}
        <span className="font-semibold font-jakarta font-greek">Followers</span>
      </p>
    </FollowingDialog>
  );

  return (
    <div className="bg-pattern-white flex flex-col w-full min-h-screen overflow-x-hidden">
      <Head title={`${user.name}`} />

      <div className="w-full">
        <Navbar isSolid={true} isFixed={false} />

        {/* Profile Card Section - Fixed Design */}
        <div className="w-full max-w-2xl mx-auto mt-24 mb-16 px-4">
          <div className="bg-gradient-to-br from-amber-700 via-orange-800 to-red-900 rounded-2xl p-4 sm:p-6 text-white shadow-2xl relative overflow-hidden w-full">
            {/* Decorative corner pattern */}
            <div className="absolute top-0 left-0 w-16 h-16 opacity-20">
              <div className="w-full h-full bg-white rounded-br-full"></div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6 w-full">
              {/* Left side - Profile Image */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="relative">
                  <Dialog>
                    <DialogTrigger>
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-3 border-white shadow-lg cursor-pointer">
                        <img
                          src={
                            user.photo_profile_url ??
                            "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                          }
                          alt={user.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-[90vw] max-h-[90vh]">
                      <div className="place-content-center place-items-center grid w-full h-full">
                        <img
                          className="rounded-xl object-contain max-w-full max-h-full"
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
                      className="bottom-1 right-1 aspect-square h-1/3 border-2 absolute object-cover w-1/3 bg-gray-400 rounded-full select-none cursor-pointer"
                      src={user.kelompok.logo_kelompok ?? logoPplkHd}
                      alt={user.kelompok.nama_kelompok}
                    />
                  </KelompokDialog>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="flex-1 text-center md:text-left w-full min-w-0">
                {/* Name */}
                <h1 className="text-lg sm:text-xl  mb-3 text-white break-words font-semibold font-jakarta font-greek">
                  {user.name}
                </h1>

                {/* Stats Row */}
                <div className="flex justify-center md:justify-start gap-3 sm:gap-4 md:gap-6 mb-3 flex-wrap">
                  <div className="text-center">
                    <div className="text-base sm:text-lg font-semibold font-jakarta font-greek">{user.view_count}</div>
                    <div className="text-xs opacity-90 font-semibold font-jakarta font-greek">Viewer</div>
                  </div>
                  <div className="text-center cursor-pointer">
                    {followersDialog}
                  </div>
                  <div className="text-center cursor-pointer">
                    {followingDialog}
                  </div>
                </div>

                {/* User Info */}
                <div className="mb-4">
                  <div className="font-semibold text-sm sm:text-base break-words font-jakarta font-greek">{user.nim}</div>
                  <div className="font-semibold text-sm sm:text-base break-words font-jakarta font-greek">{user.prodi}</div>
                  <div className="italic mt-1 text-xs sm:text-sm opacity-90 break-words font-semibold font-jakarta font-greek">
                    "{user.bio}"
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2 justify-center md:justify-start w-full">
                  {/* Follow Button */}
                  <button
                    className={`${user.followed ? "bg-red-500 hover:bg-red-600" : "bg-white hover:bg-gray-100"} ${user.followed ? "text-white" : "text-orange-800"} px-3 sm:px-4 py-2 rounded-full font-semibold transition-colors duration-200 flex items-center justify-center gap-1 shadow-md text-xs sm:text-sm w-full`}
                    onClick={follow}
                  >
                    <UserPlus size={14} className="sm:w-4 sm:h-4" />
                    <span className="truncate font-semibold font-jakarta font-greek">{user.followed ? "Mengikuti" : "Follow"}</span>
                  </button>

                  <div className="flex gap-2 w-full">
                    {/* Instagram Button */}
                    <a
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 sm:px-3 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center gap-1 shadow-md text-xs sm:text-sm flex-1 min-w-0 font-semibold font-jakarta font-greek"
                      href={user.instagram_url}
                      target="_blank"
                    >
                      <IconBrandInstagram size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="truncate hidden sm:inline">Instagram</span>
                      <span className="truncate sm:hidden">IG</span>
                    </a>

                    {/* LinkedIn Button */}
                    <a
                      className="bg-blue-600 text-white px-2 sm:px-3 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-1 shadow-md text-xs sm:text-sm flex-1 min-w-0 font-semibold font-jakarta font-greek"
                      href={user.linkedin_url}
                      target="_blank"
                    >
                      <IconBrandLinkedin size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="truncate hidden sm:inline">LinkedIn</span>
                      <span className="truncate sm:hidden">LI</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 mx-auto font-[500] text-center max-md:text-sm px-4">
          Yuk, kunjungi profile Satriya Muda yang lain di bawah ini!
        </p>

        {/* Carousel Section - Fixed Overflow */}
        <div className="w-full max-w-6xl mx-auto px-4 overflow-hidden">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {sugesstedUsers.slice(0, 9).map((u, i) => (
                <CarouselItem
                  key={i}
                  data-aos="fade-up"
                  data-aos-duration={800}
                  data-aos-delay={(i + 1) * 100}
                  className="pl-2 md:pl-4 basis-[280px] sm:basis-[300px] md:basis-1/3 lg:basis-1/4 xl:basis-1/5 mt-2 mb-8 text-center flex-shrink-0"
                >
                  <div className="w-full h-full max-w-[260px] mx-auto">
                    <ProfileCard className="w-full h-full" user={u} />
                  </div>
                </CarouselItem>
              ))}
              <CarouselItem className="pl-2 md:pl-4 basis-[280px] sm:basis-[300px] md:basis-1/3 lg:basis-1/4 xl:basis-1/5 mt-2 mb-8 flex-shrink-0">
                <div className="w-full h-full max-w-[260px] mx-auto">
                  <Card className="drop-shadow-xl h-72 w-full rounded-md">
                    <CardContent className="flex flex-col items-center justify-between h-full gap-1 p-4 text-black bg-white border rounded-md">
                      <div className="bg-gradient-to-r place-content-center from-jaffa-600 to-jaffa-800 grid w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 text-white rounded-full flex-shrink-0">
                        <IconMoodSearch size={40} className="sm:w-12 sm:h-12 md:w-16 md:h-16" />
                      </div>
                      <p className="font-semibold text-center text-sm sm:text-base px-2 font-jakarta font-greek">
                        Temukan Nusantara Muda Lainnya!
                      </p>
                      <Link href={route("relasi.index")} className="w-full">
                        <Button className="w-full bg-[#ECAA25] text-black border border-black text-xs sm:text-sm font-semibold font-jakarta font-greek">
                          Selengkapnya
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-0 md:left-4" />
            <CarouselNext className="right-0 md:right-4" />
          </Carousel>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Page;
