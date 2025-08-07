import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import { Link, usePage } from "@inertiajs/react";
import { DetailUPTData } from "@/lib/data/upa";
import { useAos } from "@/lib/hooks/useAos";

const Header = () => {
  useAos();
  const { url } = usePage();
  const key = url.split('/').filter(Boolean).pop() as string;
  const current = DetailUPTData.find((d) => d.key === key);

  const renderLayer = (height: string, rounded: string, isMobile: boolean) => (
    <div className={`relative w-full ${height} ${rounded} overflow-hidden`}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#D9D9D9]/30 to-[#999999]/50 backdrop-blur-[3px] z-0" />

      {/* Foreground */}
      <div
        className={`relative z-10 flex ${isMobile ? 'flex-col items-center justify-center' : ''} px-4 h-full text-white`}
      >
        {/* Logo */}
        {current && (
          <Link
            href={`/informasi/upa/${current.key}`}
            className={isMobile ? 'mb-4 w-32' : 'absolute top-4 right-4 w-44 h-44'}
          >
            <img
              src={current.logo}
              alt={current.title}
              className="object-contain w-full h-full"
            />
          </Link>
        )}

        {/* Title */}
        {isMobile ? (
          <p className="font-greek text-[36px] leading-tight text-center">
            {current?.title ?? 'Unit Penunjang Akademik'}
          </p>
        ) : (
          <div className="absolute bottom-4 left-4">
            <p className="font-greek text-[50px] md:text-[60px] leading-tight">
              {current?.title ?? 'Unit Penunjang Akademik'}
            </p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <MaxWidthWrapper className="md:justify-start flex flex-col items-center justify-center">
      <div className="w-full px-2.5 py-[96px] md:py-[200px] lg:py-[160px] xl:py-[160px] text-center md:text-start">
        {/* Tablet & Desktop */}
        <div className="hidden md:block">
          {renderLayer('h-[200px] md:h-[250px]', 'rounded-3xl', false)}
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          {renderLayer('h-[250px]', 'rounded-xl', true)}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Header;
