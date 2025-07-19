import { BookletCard } from "@/Components/booklet/BookletCard";

import React from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface Booklet {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  day: string;
}

interface BookletGridProps {
  booklets: Booklet[];
}

export const BookletGrid = ({ booklets }: BookletGridProps) => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Navigation Arrows */}
        {/* <div className="flex justify-between items-center mb-8">
          <button className="p-2 rounded-full hover:bg-orange-100 transition-colors">
            <ChevronLeft className="w-6 h-6 text-orange-700" />
          </button>
          <button className="p-2 rounded-full hover:bg-orange-100 transition-colors">
            <ChevronRight className="w-6 h-6 text-orange-700" />
          </button>
        </div> */}

        {/* Booklet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {booklets.map((booklet) => (
            <BookletCard key={booklet.id} booklet={booklet} />
          ))}
        </div>
      </div>
    </section>
  );
};
