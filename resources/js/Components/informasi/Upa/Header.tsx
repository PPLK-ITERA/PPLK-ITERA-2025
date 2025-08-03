import MaxWidthWrapper from "@/Components/MaxWidthWrapper";

import { useAos } from "@/lib/hooks/useAos";

interface HeaderProps {
  upt?: string;
  title?: string;
  headerDescription?: string;
}

const Header = ({ upt, title, headerDescription }: HeaderProps) => {
  useAos();

  return (
    <MaxWidthWrapper className="md:justify-start flex flex-col items-center justify-center">
      <div className="w-full px-2.5 py-[96px] md:py-[200px] lg:py-[160px] xl:py-[160px] text-center md:text-start">
        <p
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-[20px] font-semibold text-jaffa-100/80 md:text-[29.5px]"
        >
          Informasi
        </p>

        <h1
          data-aos="fade-right"
          data-aos-duration="1500"
          className="text-jaffa-100 md:leading-none md:items-start flex flex-col items-center justify-center mt-8 leading-[2.5rem]"
        >
          <span className="font-greek text-[40px] md:text-[60px] max-w-2xl capitalize">
            {upt ? title : `Unit Penunjang Akademik (UPA)`}
          </span>
          <br />
          <span className="font-greek text-[64px] md:text-[60px]">ITERA</span>
        </h1>

        <p
          data-aos="fade-right"
          data-aos-duration="2000"
          className="mt-10 leading-5 tracking-widest text-jaffa-100 md:tracking-[0.1em] max-w-lg"
        >
          <span className="text-[18px] md:text-[25px]">
            {upt
              ? headerDescription
              : `Unit Penunjang Akademik menyediakan layanan dan dukungan akademis.`}
          </span>
        </p>
      </div>
    </MaxWidthWrapper>
  );
};

export default Header;
