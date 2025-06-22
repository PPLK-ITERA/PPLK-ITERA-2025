import MaxWidthWrapper from "@/Components/MaxWidthWrapper";

import { useAos } from "@/lib/hooks/useAos";

const Header = () => {
  useAos();

  return (
    <MaxWidthWrapper className="md:justify-start md:items-start flex flex-col items-center justify-center">
      <div className="min-h-screen px-2.5 py-[200px] md:min-h-full md:py-[120px] lg:py-[120px] xl:py-[160px] text-center md:text-start">
        <p
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-[20px] font-semibold text-jaffa-100/80 md:text-[24px] lg:text-[29.5px]"
        >
          Tentang
        </p>

        <h1
          data-aos="fade-right"
          data-aos-duration="1500"
          className="text-jaffa-100 md:leading-[3rem] lg:leading-[4rem] xl:leading-[5rem] leading-[3rem] md:items-start flex flex-col items-center justify-center mt-8"
        >
          <span className="font-avigea text-[40px] lg:text-[64px] xl:text-[72px]">
            PPLK
          </span>
          <span className="font-avigea text-[64px] lg:text-[72px] xl:text-[108px]">
            ITERA
          </span>
          <span className="font-avigea text-[40px] lg:text-[64px] xl:text-[72px]">
            2024
          </span>
        </h1>

        <p
          data-aos="fade-right"
          data-aos-duration="2000"
          className="mt-5 leading-5 tracking-widest text-jaffa-100 md:tracking-[0.1em]"
        >
          <span className="text-[18px] md:text-[25px]">
            Program Pengenalan
            <br />
            Lingkungan Kampus
          </span>
          <br />
          <br />
          <span className="text-[18px] md:text-[25px]">
            Institut Teknologi Sumatera
          </span>
        </p>
      </div>
    </MaxWidthWrapper>
  );
};

export default Header;
