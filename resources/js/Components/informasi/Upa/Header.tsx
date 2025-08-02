import MaxWidthWrapper from "@/Components/MaxWidthWrapper";

import { useAos } from "@/lib/hooks/useAos";

import Greek from "!assets/Greek.png";

interface HeaderProps {
  upt?: string;
  title?: string;
  headerDescription?: string;
}

const Header = ({ upt, title, headerDescription }: HeaderProps) => {
  useAos();

  return (
    <MaxWidthWrapper className="relative z-20 flex flex-col items-center justify-center md:justify-start">
      <div className="w-full px-2.5 py-[96px] md:py-[200px] lg:py-[160px] xl:py-[160px]">
        {/* Conditional rendering based on upt prop */}
        {upt ? (
          // Individual UPT Header
          <div className="text-center md:text-start">
            <h1
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-jaffa-100 md:leading-none md:items-start flex flex-col items-center justify-center mt-8 leading-[2.5rem]"
            >
              <span className="font-Greek text-[4px] md:text-[50px] max-w-5xl capitalize">
                {title}
              </span>
            </h1>

            <p
              data-aos="fade-right"
              data-aos-duration="2000"
              className="mt-10 leading-5 tracking-widest text-jaffa-100 md:tracking-[0.1em] max-w-lg p-1"
            >
              <span className="text-[18px] md:text-[25px]">
                {headerDescription}
              </span>
            </p>
          </div>
        ) : (
          // Main UPA listing page header with responsive design
          <>
            {/* Desktop Layout */}
            <div className="hidden md:block w-full max-w-5xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-white/30 shadow-lg flex flex-col md:flex-row justify-between items-start gap-6">
                {/* KIRI - Ikon dan Judul */}
                <div
                  className="flex flex-col items-start"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <img src={Greek} alt="logo" className="w-20 h-20 mb-4" />

                  <h1 className="font-Greek text-[#FFFFFF] text-3xl md:text-4xl leading-snug drop-shadow-lg">
                    UNIT PENUNJANG <br /> AKADEMIK
                  </h1>
                </div>

                {/* KANAN - Deskripsi */}
                <p
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  className="mt-9 p-9 font-Romanica font-normal text-[#FFFFFF] text-[13px] leading-[100%] tracking-[0em] text-center max-w-md self-center"
                >
                  UPT ITERA adalah singkatan dari Unit Pelaksana Teknis (UPT)
                  Institut Teknologi Sumatera. Secara umum, UPT merupakan unit
                  di lingkungan perguruan tinggi yang bertugas melaksanakan
                  kegiatan teknis penunjang tugas dan fungsi perguruan tinggi.
                </p>
              </div>
            </div>

            {/* Mobile Layout - Centered Card Design */}
            <div className="block md:hidden w-full  justify-center items-center">
              <div className="relative group cursor-pointer w-full max-w-sm px-4">
                {/* Mobile Card Container - Centered */}
                <div className="relative w-full h-64 group-hover:h-auto transition-all duration-700 ease-in-out overflow-visible rounded-2xl shadow-lg hover:shadow-2xl mx-auto">
                  {/* Main Card */}
                  <div className="relative w-full h-64 overflow-hidden rounded-2xl">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-md border border-white/30"></div>

                    {/* Content Container */}
                    <div className="relative z-10 h-full p-6 flex flex-col justify-center text-center">
                      {/* Logo Section - Top Center */}
                      <div className="flex-shrink-0 flex justify-center mb-4">
                        <div className="w-16 h-16 p-2 group-hover:scale-110 transition-transform duration-500">
                          <img
                            src={Greek}
                            alt="ITERA Logo"
                            className="w-full h-full object-contain filter brightness-0 invert drop-shadow-lg"
                          />
                        </div>
                      </div>

                      {/* Title Section - Always Visible */}
                      <div className="flex-grow flex flex-col justify-center text-center">
                        <h1 className="font-Greek text-white text-xl font-bold leading-tight mb-4">
                          UNIT PENUNJANG
                          <br />
                          AKADEMIK
                        </h1>

                        {/* Default dots - visible when not hovered */}
                        <div className="flex justify-center space-x-2 opacity-60 group-hover:opacity-0 transition-opacity duration-300">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <div className="w-2 h-2 bg-white/70 rounded-full"></div>
                          <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-6 h-6 border border-white/30 rounded-full opacity-30 group-hover:opacity-60 transition-all duration-500 group-hover:scale-110"></div>
                    <div className="absolute bottom-4 left-4 w-4 h-4 border border-white/30 rounded-full opacity-30 group-hover:opacity-60 transition-all duration-500 delay-200 group-hover:scale-110"></div>

                    {/* Subtle Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-white/10 via-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-700 blur-sm -z-10"></div>
                  </div>

                  {/* Description Card - appears below main card on hover */}
                  <div className="absolute top-full left-0 right-0 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300 transform translate-y-4 group-hover:translate-y-0 z-20">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
                      <p className="font-Romanica text-gray-800 text-sm leading-relaxed text-center">
                        UPT ITERA adalah singkatan dari Unit Pelaksana Teknis
                        (UPT) Institut Teknologi Sumatera. Secara umum, UPT
                        merupakan unit di lingkungan perguruan tinggi yang
                        bertugas melaksanakan kegiatan teknis penunjang tugas
                        dan fungsi perguruan tinggi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </MaxWidthWrapper>
  );
};

export default Header;
