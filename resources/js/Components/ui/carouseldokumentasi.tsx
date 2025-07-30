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
      src: "https://pikaso.cdnpk.net/private/production/2065441748/R4ve4XYmuJZ5zHxgGHb8ZvshbgXqqSqKIiF4FyVu.jpg?token=exp=1769212800~hmac=f19889a503e5399ff7d982b988593d493d610b739137c4bc1a5f5c5c3da83c4b",
      alt: "Transistor",
    },
    {
      src: "https://pikaso.cdnpk.net/private/production/2065441748/R4ve4XYmuJZ5zHxgGHb8ZvshbgXqqSqKIiF4FyVu.jpg?token=exp=1769212800~hmac=f19889a503e5399ff7d982b988593d493d610b739137c4bc1a5f5c5c3da83c4b",
      alt: "Reform",
    },
    {
      src: "https://pikaso.cdnpk.net/private/production/2065441748/R4ve4XYmuJZ5zHxgGHb8ZvshbgXqqSqKIiF4FyVu.jpg?token=exp=1769212800~hmac=f19889a503e5399ff7d982b988593d493d610b739137c4bc1a5f5c5c3da83c4b",
      alt: "Tuple",
    },
    {
      src: "https://pikaso.cdnpk.net/private/production/2065441748/R4ve4XYmuJZ5zHxgGHb8ZvshbgXqqSqKIiF4FyVu.jpg?token=exp=1769212800~hmac=f19889a503e5399ff7d982b988593d493d610b739137c4bc1a5f5c5c3da83c4b",
      alt: "SavvyCal",
    },
    {
      src: "https://pikaso.cdnpk.net/private/production/2018251776/fUhBirmuzAQ5fno9M7PrFhEGFC3cJoq4Vy1BFLKO.jpg?token=exp=1769212800~hmac=ec3ebc002ae28979a3c9f94bb0482c2c673ee16000ca4c87722f03c56e75d34b",
      alt: "Statamic",
    },
    {
      src: "https://pikaso.cdnpk.net/private/production/2065441748/R4ve4XYmuJZ5zHxgGHb8ZvshbgXqqSqKIiF4FyVu.jpg?token=exp=1769212800~hmac=f19889a503e5399ff7d982b988593d493d610b739137c4bc1a5f5c5c3da83c4b",
      alt: "SavvyCal",
    },
    {
      src: "https://pikaso.cdnpk.net/private/production/2065441748/R4ve4XYmuJZ5zHxgGHb8ZvshbgXqqSqKIiF4FyVu.jpg?token=exp=1769212800~hmac=f19889a503e5399ff7d982b988593d493d610b739137c4bc1a5f5c5c3da83c4b",
      alt: "SavvyCal",
    },
  ];

  const LogoRow: React.FC<LogoRowProps> = ({ logos }) => (
    <div className="z-0 animate-slide-left group-hover:pause inline-block w-max">
      {logos.map((logo, index) => (
        <img
          key={index}
          className="mx-4 inline h-48 transition-all duration-300 hover:scale-110"
          src={logo.src}
          alt={logo.alt}
        />
      ))}
    </div>
  );

  return (
    <div>
      <div className="logos group relative overflow-hidden whitespace-nowrap py-10 space-y-8">

          {/* Custom Shape Divider */}
        <div className="absolute -translate-y-0 top-0 left-0 w-full brightness-200 mix-blend-screen overflow-hidden leading-[0] z-10">
          <img src={dokumentasishape} alt="" className="object-cover bg-center z-40" />
        </div>

        <div className=" ">
          <LogoRow logos={logos} />
        </div>


        {/* Second Custom Shape Divider Rotated */}
        <div className=" -translate-y-10 flex justify-center brightness-200 mix-blend-screen item-center w-full z-20">
          <img src={dokumentasishape} alt="" className="object-cover bg-center" />

        </div>
      </div>



      <style jsx>{`
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