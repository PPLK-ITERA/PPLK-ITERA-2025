import React from "react";

interface Booklet {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  day: string;
}

interface BookletCardProps {
  booklet: Booklet;
}

export const BookletCard = ({ booklet }: BookletCardProps) => {
  return (
    <div className="relative w-80 h-48 group cursor-pointer">
      {/* Main Card */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-red-700 rounded-2xl shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
        {/* Card Content */}
        <div className="p-6 h-full flex flex-col justify-between text-white">
          <div>
            <h3 className="text-xl font-bold mb-2">{booklet.title}</h3>
            <p className="text-orange-100 font-medium">{booklet.subtitle}</p>
            {booklet.date && (
              <p className="text-orange-100 text-sm mt-1">{booklet.date}</p>
            )}
          </div>
        </div>

        {/* Day Badge */}
        <div className="absolute -top-2 -right-2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-12">
          <div className="text-center">
            <div className="text-xs text-gray-500 font-medium">DAY</div>
            <div className="text-lg font-bold text-orange-600">
              {booklet.day}
            </div>
          </div>
        </div>

        {/* Decorative Shadow Element */}
        <div className="absolute -bottom-1 -right-1 w-full h-full bg-black/20 rounded-2xl -z-10"></div>
      </div>

      {/* Background Card for 3D Effect */}
      <div className="absolute top-2 right-2 w-full h-full bg-gray-300 rounded-2xl -z-20"></div>
    </div>
  );
};
