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
        link: "https://www.instagram.com/p/C-XJo8ipyvj/",
    },
    {
        nama: "Sakasella",
        logo: Sakasella,
        link: "https://www.instagram.com/p/C-XJyvtpp28/",
    },
    {
        nama: "Utsala",
        logo: Utsala,
        link: "https://www.instagram.com/p/C-XJWXGp1ZS/",
    },
    {
        nama: "Rakula",
        logo: Rakula,
        link: "https://www.instagram.com/p/C-XC-hcpC7U/",
    },
    {
        nama: "Darsatica",
        logo: Darsatica,
        link: "https://www.instagram.com/p/C-XJb17pLME/",
    },
    {
        nama: "Berdhana",
        logo: Berdhana,
        link: "https://www.instagram.com/p/C-XJb17pLME/",
    },
    {
        nama: "Amphorta",
        logo: Amphorta,
        link: "https://www.instagram.com/p/C-XIBBZJ5vi/",
    },
    {
        nama: "Lixus",
        logo: Lixus,
        link: "https://www.instagram.com/p/C-XFdmXJUN1/",
    },
    {
        nama: "Caetana",
        logo: Caetana,
        link: "https://www.instagram.com/p/C-XIrP1JNnP/",
    },
    {
        nama: "Ragita",
        logo: Ragita,
        link: "https://www.instagram.com/p/C-XHaZaJezW/",
    },
    {
        nama: "Kartatera",
        logo: Kartatera,
        link: "https://www.instagram.com/p/C-XGK7Fpkgx/",
    },
    {
        nama: "Mercopium",
        logo: Mercopium,
        link: "https://www.instagram.com/p/C-XDyMaJFi7/",
    },
    {
        nama: "Dharmaleus",
        logo: Dharmaleus,
        link: "https://www.instagram.com/p/C-XC-hcpC7U/",
    },
    {
        nama: "Karceus",
        logo: Karceus,
        link: "https://www.instagram.com/p/C-XC-hcpC7U/",
    },
    {
        nama: "Airasta",
        logo: Airasta,
        link: "https://www.instagram.com/p/C-XC-hcpC7U/",
    },
    {
        nama: "Kracias",
        logo: Kracias,
        link: "https://www.instagram.com/p/C-XCJlqJTt7/",
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
            <h2 className="font-avigea sm:text-3xl text-candlelight-600 text-2xl text-center">
                SEMUA DIVISI PPLK
            </h2>

            <a href="https://www.instagram.com/p/C-XJ8LlpZJa/" target="_blank">
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