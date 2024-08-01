import React from "react";

export const QuizSkeleton = ({ className = "" }: { className: string }) => {
    return (
        <div className={`max-md:grow ${className}`}>
            <div className="h-6 w-full animate-pulse rounded-lg bg-gray-300 text-xl font-semibold"></div>
            <div className="mt-2 h-4 w-full animate-pulse rounded-lg bg-gray-300"></div>
            <div className="mt-4 h-16 w-full animate-pulse rounded-lg bg-gray-300 p-4 shadow-inner"></div>
            <ul className="mt-8 flex w-full flex-col gap-2">
                {Array.from({ length: 4 }).map((_, index) => (
                    <li key={index}>
                        <div className="h-12 w-full animate-pulse rounded-lg bg-gray-300"></div>
                    </li>
                ))}
            </ul>
            <div className="max-md:grow"></div>
            <div className="my-8 h-12 w-full animate-pulse rounded-lg bg-gray-300"></div>
        </div>
    );
};
