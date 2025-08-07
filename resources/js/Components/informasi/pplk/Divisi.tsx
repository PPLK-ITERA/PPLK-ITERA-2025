import React, { useEffect, useState } from "react";

// Importing the division logos
import Airasta from "!assets/logodivisi/Airasta.png";
import Amphorta from "!assets/logodivisi/Amphorta.png";
import Berdhana from "!assets/logodivisi/Berdhana.png";
import Caetana from "!assets/logodivisi/Caetana.png";
import Darsatica from "!assets/logodivisi/Darsatica.png";
import Dharmaleus from "!assets/logodivisi/Dharmaleus.png";
import Karceus from "!assets/logodivisi/Karceus.png";
import Kartatera from "!assets/logodivisi/Kartatera.png";
import Kracias from "!assets/logodivisi/Kracias.png";
import Lixus from "!assets/logodivisi/Lixus.png";
import Mercopium from "!assets/logodivisi/Mercopium.png";
import Prajamusi from "!assets/logodivisi/Prajamusi.png";
import Ragita from "!assets/logodivisi/Ragita.png";
import Rakula from "!assets/logodivisi/Rakula.png";
import Sakasella from "!assets/logodivisi/Sakasella.png";
import Utsala from "!assets/logodivisi/Utsala.png";
import Vagiotesis from "!assets/logodivisi/Vagiotesis.png";

// Data for divisions
const DATA_DIVISI = [
  {
    nama: "Prajamusi",
    logo: Prajamusi,
  },
  {
    nama: "Sakasella",
    logo: Sakasella,
  },
  {
    nama: "Utsala",
    logo: Utsala,
  },
  {
    nama: "Rakula",
    logo: Rakula,
  },
  {
    nama: "Darsatica",
    logo: Darsatica,
  },
  {
    nama: "Berdhana",
    logo: Berdhana,
  },
  {
    nama: "Amphorta",
    logo: Amphorta,
  },
  {
    nama: "Lixus",
    logo: Lixus,
  },
  {
    nama: "Caetana",
    logo: Caetana,
  },
  {
    nama: "Ragita",
    logo: Ragita,
  },
  {
    nama: "Kartatera",
    logo: Kartatera,
  },
  {
    nama: "Mercopium",
    logo: Mercopium,
  },
  {
    nama: "Dharmaleus",
    logo: Dharmaleus,
  },
  {
    nama: "Karceus",
    logo: Karceus,
  },
  {
    nama: "Airasta",
    logo: Airasta,
  },
  {
    nama: "Kracias",
    logo: Kracias,
  },
];

const Divisi = () => {
  const [visibleCount, setVisibleCount] = useState(3); // Initial state set to 3 for smaller devices

  useEffect(() => {
    // Function to set items per load based on the window width
    const updateItemsPerLoad = () => {
      if (window.innerWidth >= 1024) {
        // Laptop and larger devices
        setVisibleCount(4);
      } else if (window.innerWidth >= 768) {
        // Tablet devices
        setVisibleCount(3);
      } else {
        // Mobile devices
        setVisibleCount(2);
      }
    };

    // Set items per load on initial render
    updateItemsPerLoad();

    // Add event listener for window resize to update items per load
    window.addEventListener("resize", updateItemsPerLoad);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateItemsPerLoad);
    };
  }, []);

  const loadMore = () =>
    setVisibleCount((count) => count + (window.innerWidth >= 1024 ? 4 : 3));

  return (
    <div
      className="flex flex-col items-center justify-center pb-20 mt-10"
      id="divisi-pplk"
    >
      <h2 className="font-greek sm:text-3xl text-candlelight-600 text-2xl text-center">
        SEMUA DIVISI PPLK
      </h2>

      <a>
        <img
          src={Vagiotesis}
          alt={"Vagiotesis"}
          className="hover:scale-110 hover:cursor-pointer object-contain w-full h-full mt-5 transition-all duration-300"
        />
      </a>

      <div className="md:grid-cols-3 lg:grid-cols-4 grid grid-cols-1 gap-4 mt-5 mb-10">
        {DATA_DIVISI.slice(0, visibleCount).map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            className={`hover:scale-105 transition-all duration-300 hover:cursor-pointer`}
          >
            <img
              src={item.logo}
              alt={item.nama}
              className="object-contain w-full h-full"
            />
          </a>
        ))}
      </div>

      {visibleCount < DATA_DIVISI.length && (
        <div className="flex justify-center mb-2 -mt-8">
          <button
            onClick={loadMore}
            className="bg-jaffa-600 px-4 py-2 text-white rounded shadow"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Divisi;
