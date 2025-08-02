import dokumentasishape from "/resources/assets/dokumentasishape.png";

import React from "react";

interface Logo {
  src: string;
  alt: string;
}

interface LogoRowProps {
  logos: Logo[];
}

const CarouselDokumentasi: React.FC = () => {
  const logos: Logo[] = [
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      alt: "Gallery image 1",
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      alt: "Gallery image 2",
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      alt: "Gallery image 2",
    },
    {
      src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400&h=300&fit=crop",
      alt: "Gallery image 5",
    },
  ];

  const LogoRow: React.FC<LogoRowProps> = ({ logos }) => (
    <div className="z-0 animate-slide-left group-hover:pause inline-block w-max">
      {logos.map((logo, index) => (
        <img
          key={index}
          className=" mx-2 md:mx-4 inline w-32 h-28 md:w-80 md:h-52 transition-all duration-300 hover:scale-110"
          src={logo.src}
          alt={logo.alt}
        />
      ))}
    </div>
  );

  return (
    <div>
      <div className="logos group relative overflow-hidden whitespace-nowrap md:mt-8 space-y-8 mix">
        {/* Custom Shape Divider */}
        <div className="absolute w-full -translate-y-0 top-2 md:-translate-y-0 md:-top-10 left-0 md:w-full overflow-hidden leading-[0] z-10 brightness-200 mix-blend-screen">
          <img src={dokumentasishape} alt="" className="h-full object-cover" />
        </div>

        <div className="">
          <LogoRow logos={logos} />
          <LogoRow logos={logos} />
        </div>

        {/* Second Custom Shape Divider Rotated */}
        <div className="w-full md:w-[1800px] md:h-36 flex justify-center items-center -translate-y-12 md:-translate-y-16 z-20 mx-auto brightness-200 mix-blend-screen ">
          <img
            src={dokumentasishape}
            alt=""
            className="h-full object-cover md:-translate-x-64"
          />
        </div>
      </div>
      <style>{`
        @keyframes slide-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        .animate-slide-left {
          animation: slide-left 8s linear infinite;
        }

        .pause {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default CarouselDokumentasi;
