import React, { useEffect, useState } from "react";
import bg from "!assets/maskot/bg.png";
import maskot_1 from "!assets/maskot/maskot-pplk-man.png";
import maskot_2 from "!assets/maskot/maskot-pplk-woman.png";
import DefaultLayout from "@/Layouts/DefaultLayout";

function App() {
  const [show, setShow] = useState(false);
  const [activeMaskot, setActiveMaskot] = useState("rhinoceto"); // 'rhinoceto' or 'rhinocera'

  // Theme configuration untuk setiap maskot
  const themes = {
    rhinoceto: {
      primary: "orange",
      secondary: "yellow",
      buttonColor: "text-orange-500",
      buttonHover: "hover:text-orange-600",
      boxGradient: "bg-gradient-to-b from-[#E69D32] to-[#FF8D6C]",
      titleColor: "text-orange-600",
      overlayColor: "bg-white bg-opacity-80"
    },
    rhinocera: {
      primary: "#982519",
      secondary: "pink",
      buttonColor: "text-[#982519]",
      buttonHover: "hover:text-purple-600",
      boxGradient: "bg-gradient-to-b from-[#982519] to-[#FF8D6C]",
      titleColor: "text-[#982519]",
      overlayColor: "bg-purple-50 bg-opacity-90"
    }
  };

  const currentTheme = themes[activeMaskot];

  // Animasi saat pertama kali masuk
  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 1500);
    return () => clearTimeout(timeout);
  }, []);

  // Animasi ulang saat user pilih maskot lain
  useEffect(() => {
    setShow(false); // Reset animasi
    const timeout = setTimeout(() => setShow(true), 100); // Delay kecil
    return () => clearTimeout(timeout);
  }, [activeMaskot]);

  return (
    <DefaultLayout isSolid={true}>
      <div className="relative w-full min-h-screen overflow-hidden py-20 sm:py-20 md:py-24 lg:py-32">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(${bg})` }}
        />

        {/* Overlay transparan dengan warna dinamis */}
        <div className={`absolute inset-0 ${currentTheme.overlayColor} z-10 transition-all duration-500`} />

        {/* Konten utama */}
        <div className="relative z-20 px-4 sm:px-6 lg:px-8">
          {/* Tulisan kiri atas dengan warna dinamis - Responsive positioning */}
          <div className="absolute z-50 top-4 left-4 sm:top-6 sm:left-6 text-xs sm:text-sm font-semibold cursor-pointer select-none z-30">
            <button
              onClick={() => setActiveMaskot("rhinoceto")}
              className={`block transition-all duration-300 mb-1 sm:mb-2 ${
                activeMaskot === "rhinoceto" 
                  ? "text-orange-600 font-bold scale-110" 
                  : "text-gray-500 hover:text-orange-500"
              }`}
            >
              RHINOCETO
            </button>
            <button
              onClick={() => setActiveMaskot("rhinocera")}
              className={`block transition-all duration-300 ${
                activeMaskot === "rhinocera" 
                  ? "text-[#982519] font-bold scale-110" 
                  : "text-gray-500 hover:text-[#982519]"
              }`}
            >
              Rhinocera
            </button>
          </div>

          {/* Tulisan kanan atas - Responsive positioning */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-xs sm:text-sm font-semibold text-black z-30 font-greek text-right">
            MASKOT<br />PPLK 2025
          </div>

          {/* Container untuk konten utama */}
          <div className="flex flex-col items-center justify-center min-h-screen">
            {/* Judul tengah - Responsive text sizing */}
            <div className="text-center relative mb-4 sm:mb-6 lg:mb-8">
              {/* Efek lingkaran gradasi - Responsive sizing */}
              <div className={`absolute top-[-40px] sm:top-[-60px] lg:top-[-80px] left-1/2 transform -translate-x-1/2 w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] ${currentTheme.boxGradient} rounded-full opacity-40 blur-2xl z-[-1]`} />

              <h1
                className="text-[20px] sm:text-[24px] md:text-[32px] lg:text-[40px] font-greek leading-tight sm:leading-snug text-black text-center font-bold tracking-wide px-2"
                style={{
                  textShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                }}
              >
                HALO SATRIYA!<br />
                KENALIN, AKU<br />
                <span className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[44px]">
                  {activeMaskot === "rhinoceto" ? "rhinoceto" : "rhinocera"}
                </span>
              </h1>
            </div>

            {/* Animasi muncul dari bawah - Responsive spacing */}
            <div
              className={`flex flex-col justify-center items-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl transition-all duration-1000 ease-out 
              ${show ? "animate-slide-up" : "opacity-0 translate-y-full"}`}
            >
              {/* Box Maskot dengan gradient dinamis - Responsive sizing */}
              <div className={`bg-gradient-to-b ${currentTheme.boxGradient} p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl shadow-lg w-full text-center relative transition-all duration-500 transform hover:scale-105`}>
                <div className="mb-3 sm:mb-4">
                  <img
                    src={activeMaskot === "rhinoceto" ? maskot_1 : maskot_2}
                    alt={activeMaskot.toUpperCase()}
                    className="mx-auto w-32 sm:w-40 md:w-52 lg:w-64 z-50 transition-all duration-500"
                  />
                </div>
                
                <h2 className={`text-lg sm:text-xl md:text-2xl font-bold ${currentTheme.titleColor} mb-2 sm:mb-3 md:mb-4 transition-all duration-300`}>
                  {activeMaskot.toUpperCase()}
                </h2>
                
                <p className="text-xs sm:text-sm md:text-base text-gray-800 px-2 sm:px-4 md:px-6 leading-relaxed">
                  {activeMaskot === "rhinoceto" ? (
                    <>
                      Halo, namaku Rhinoceto. Aku biasa dipanggil “Seto”. Namaku berasal dari gabungan kata “Rhinoceros”, yang berarti badak jantan dan “Cato” yang berarti bijaksana. Aku merupakan perwujudan mahasiswa baru yang senantiasa bijaksana dan berani dalam mengambil keputusan. Namaku menjadi titik balik bagi mahasiswa baru untuk memiliki jiwa kepemimpinan dan mampu bertanggung jawab atas dirinya dan lingkungan sekitar
                    </>
                  ) : (
                    <>
                      Hai, namaku Rhinocera. Aku biasa di panggil “Sera”. Namaku berasal dari gabungan kata “Rhinoceros”, yang berarti badak betina dan “Vara” yang berarti terpilih. Aku menggambarkan mahasiswa-mahasiswa terpilih yang berkesempatan untuk menjajakan  perjalanan akademiknya di pulau Sumatera dan mewujudkan Indonesia emas 2045.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS untuk animasi slide-up */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }

        /* Responsive breakpoints untuk fine-tuning jika diperlukan */
        @media (max-width: 375px) {
          .font-greek {
            font-size: 0.75rem;
          }
        }

        @media (min-width: 768px) and (max-width: 1024px) {
          /* Tablet specific adjustments */
        }

        @media (min-width: 1024px) {
          /* Desktop specific adjustments */
        }
      `}</style>
    </DefaultLayout>
  );
}

export default App;