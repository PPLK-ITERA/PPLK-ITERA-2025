import React, { useState, useRef, useEffect } from "react";

import { useAos } from "@/lib/hooks/useAos";

interface JudulProps {
  title: string;
  sejarah: string;
  logo: string;
}

export default function Judul({ title, sejarah, logo }: JudulProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);
  useAos();

  useEffect(() => {
    const checkTextOverflow = () => {
      if (textRef.current) {
        const element = textRef.current;
        // Check if the text is actually overflowing when line-clamp is applied
        const isOverflowing = element.scrollHeight > element.clientHeight;
        setShowReadMore(isOverflowing);
      }
    };

    // Check after component mounts and on window resize
    checkTextOverflow();
    window.addEventListener('resize', checkTextOverflow);
    
    return () => window.removeEventListener('resize', checkTextOverflow);
  }, [sejarah]);

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
        {/* Content Section - Left Side (moved from right) */}
        <div className="flex-1 flex flex-col gap-6 order-2 lg:order-1">
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            className="font-greek text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-orange-800 leading-tight"
          >
            {title} - ITERA
          </h1>

          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            className="text-content"
          >
            <p
              ref={textRef}
              className={`font-jakartasans ${!isExpanded ? "line-clamp-6" : ""} text-base md:text-lg lg:text-xl text-orange-900 leading-relaxed text-justify font-medium`}
            >
              {sejarah}
            </p>

            {showReadMore && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-4 text-orange-600 hover:text-orange-800 font-medium transition-colors duration-300 text-base md:text-lg"
              >
                {isExpanded ? "Show Less" : "Read More..."}
              </button>
            )}
          </div>
        </div>

        <div 
          data-aos="fade-left"
          data-aos-duration="1000"
          className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-white rounded-full flex items-center justify-center p-8 shadow-lg border-4 border-orange-200 overflow-hidden">
            <img
              src={logo}
              alt={`Logo ${title}`}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}