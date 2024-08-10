import React from "react";

export const QuizSkeleton = ({ className = "" }: { className: string }) => {
  return (
    <div className={`max-md:grow ${className}`}>
      <div className="animate-pulse w-full h-6 text-xl font-semibold bg-gray-300 rounded-lg"></div>
      <div className="animate-pulse w-full h-4 mt-2 bg-gray-300 rounded-lg"></div>
      <div className="animate-pulse w-full h-16 p-4 mt-4 bg-gray-300 rounded-lg shadow-inner"></div>
      <ul className="flex flex-col w-full gap-2 mt-8">
        {Array.from({ length: 4 }).map((_, index) => (
          <li key={index}>
            <div className="animate-pulse w-full h-12 bg-gray-300 rounded-lg"></div>
          </li>
        ))}
      </ul>
      <div className="max-md:grow"></div>
      <div className="animate-pulse w-full h-12 my-8 bg-gray-300 rounded-lg"></div>
    </div>
  );
};
