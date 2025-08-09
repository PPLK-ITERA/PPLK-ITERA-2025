import React from "react";
import { Link } from "@inertiajs/react";
import { type User } from "@/lib/types/User";

// Helper function to convert name to maximum 2 words
function formatNameToTwoWords(fullName: string | undefined): string {
  if (!fullName) return "";

  const words = fullName.trim().split(' ');

  if (words.length <= 2) {
    return fullName;
  }

  // Take first word and last word
  return `${words[0]} ${words[words.length - 1]}`;
}

function ProfileCard({
  user,
  className,
}: {
  user: Partial<User>;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Main card with orange gradient background and curved cutouts */}
      <div className="relative w-full h-full bg-gradient-to-b from-orange-600 via-orange-700 to-orange-800 rounded-2xl overflow-hidden shadow-xl">

        {/* Left curved cutout */}
        <div className="absolute left-0 top-1/3 w-6 h-12 md:w-8 md:h-16">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-100 rounded-full -ml-6 md:-ml-8"></div>
        </div>

        {/* Right curved cutout */}
        <div className="absolute right-0 top-1/3 w-6 h-12 md:w-8 md:h-16">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-100 rounded-full -mr-6 md:-mr-8"></div>
        </div>

        {/* White diamond accent in top right with group name */}
        <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 overflow-hidden rounded-tr-2xl">
          <div className="absolute top-1 right-1 md:top-2 md:right-2 w-8 h-8 md:w-12 md:h-12 bg-white transform rotate-45 rounded-sm flex items-center justify-center">
            <span
              className="text-orange-600 font-black text-sm md:text-lg transform -rotate-45 select-none font-greek"
            >
              {user.kelompok?.no_kelompok || '1'}
            </span>
          </div>
        </div>

        {/* Content container */}
        <div className="flex flex-col items-center h-full p-3 md:p-4 text-white relative z-10">

          {/* Profile image with white border */}
          <div className="mt-2 mb-2 md:mt-4 md:mb-3">
            <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-white p-1 shadow-lg">
              <img
                className="w-full h-full rounded-full object-cover object-center"
                src={
                  user.photo_profile_url ??
                  "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                }
                alt={user.name}
              />
            </div>
          </div>

          {/* User information */}
          <div className="flex-1 flex flex-col justify-center text-center px-1 overflow-hidden">
            <h3 className="text-xs md:text-base font-bold text-white leading-tight mb-1 break-words line-clamp-2 h-8 md:h-10 flex items-center justify-center font-greek">
              {formatNameToTwoWords(user.name)}
            </h3>
            <p className="text-xs md:text-sm text-white/90 mb-1 capitalize font-medium line-clamp-2 leading-tight h-8 md:h-10 flex items-center justify-center font-greek">
              {user.prodi?.toLowerCase()}
            </p>
            <p className="text-xs md:text-sm text-white/90 font-medium line-clamp-1 h-4 md:h-5 flex items-center justify-center font-greek">
              {user.kelompok?.nama_kelompok}
            </p>
          </div>

          {/* Button */}
          <div className="w-full mt-1 md:mt-2 px-1">
            <Link href={route("relasi.profil", { id: user.id })} className="w-full">
              <button className="w-full bg-orange-800 hover:bg-orange-900 text-white font-bold py-1.5 md:py-2 px-1 md:px-2 rounded-md md:rounded-lg transition duration-200 ease-in-out shadow-md flex items-center justify-center gap-1 group border border-orange-900/50 h-8 md:h-10">
                <span className="text-xs md:text-sm font-bold tracking-wide leading-none font-greek">KUNJUNGI PROFIL</span>
                <div className="bg-white rounded-full w-3 h-3 md:w-4 md:h-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                  <svg
                    className="w-1.5 h-1.5 md:w-2 md:h-2 text-orange-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom white accent handle */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-2 md:w-12 md:h-3 bg-white rounded-t-lg"></div>
      </div>
    </div>
  );
}

export default ProfileCard;
