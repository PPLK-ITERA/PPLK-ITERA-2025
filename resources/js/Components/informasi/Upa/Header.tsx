import MaxWidthWrapper from "@/Components/MaxWidthWrapper";

import { useAos } from "@/lib/hooks/useAos";

interface HeaderProps {
  upt?: string;
  title?: string;
  headerDescription?: string;
  logo?: string;
}

const Header = ({ upt, title, headerDescription , logo}: HeaderProps) => {
  useAos();

  return (
<MaxWidthWrapper className="md:justify-start flex flex-col items-center justify-center">
  <div className="w-full px-2.5 py-[96px] md:py-[200px] lg:py-[160px] xl:py-[160px] text-center md:text-start">

    {/* Versi tablet & laptop */}
    <div className="relative w-full h-[200px] md:h-[250px] rounded-xl bg-gradient-to-r from-[#D9D9D9]/30 to-[#999999]/50 backdrop-blur-[3px] text-white hidden md:block">
      {/* Logo kanan atas */}
      <img
        src={logo}
        alt="Logo Error"
        className="absolute top-4 right-4 w-[80px] md:w-[100px]"
      />
      {/* Judul kiri bawah */}
      <div className="absolute bottom-4 left-4">
        <p className="font-greek text-[50px] md:text-[60px] leading-tight ml-3">
          {upt ? title : `Unit Penunjang Akademik`}
        </p>
      </div>
    </div>

    {/* Versi HP */}
    <div className="relative w-full h-[250px] rounded-xl bg-gradient-to-r from-[#D9D9D9]/30 to-[#999999]/50 backdrop-blur-[3px] text-white flex flex-col items-center justify-center md:hidden">
      {/* Logo tengah */}
      <img
        src={logo}
        alt="Logo Error"
        className="w-[80px] mb-4"
      />
      {/* Judul tengah */}
      <p className="font-greek text-[36px] leading-tight text-center">
        {upt ? title : `Unit Penunjang Akademik`}
      </p>
    </div>

  </div>
</MaxWidthWrapper>

  );
};

export default Header;