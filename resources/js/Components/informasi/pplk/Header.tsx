import MaxWidthWrapper from "@/Components/MaxWidthWrapper";

const Header = () => {
    return (
        <MaxWidthWrapper className="md:justify-start flex flex-col items-center justify-center">
            <div className="h-screen px-2.5 py-[200px] md:py-[80px] lg:py-[120px] xl:py-[160px] text-center md:text-start w-full">
                <p className="text-[20px] font-semibold text-jaffa-100/80 md:text-[29.5px]">
                    Tentang
                </p>

                <h1 className="text-jaffa-100 md:leading-[5rem] leading-[3rem] md:items-start flex flex-col items-center justify-center mt-8">
                    <span className="font-avigea text-[40px] md:text-[72px]">
                        PPLK
                    </span>
                    <span className="font-avigea text-[64px] md:text-[108px]">
                        ITERA
                    </span>
                    <span className="font-avigea text-[40px] md:text-[72px]">
                        2024
                    </span>
                </h1>

                <p className="mt-5 leading-5 tracking- text-jaffa-100 md:tracking-[0.1em]">
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
