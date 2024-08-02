import MaxWidthWrapper from "@/Components/MaxWidthWrapper";

interface HeaderProps {
    upt?: string;
    title?: string;
    headerDescription?: string;
}

const Header = ({ upt, title, headerDescription }: HeaderProps) => {
    return (
        <MaxWidthWrapper className="md:justify-start flex flex-col items-center justify-center">
            <div className="w-full px-2.5 pt-[96px] md:pt-[80px] lg:pt-[120px] xl:pt-[160px] text-center md:text-start">
                <p className="text-[20px] font-semibold text-jaffa-100/80 md:text-[29.5px]">
                    Informasi
                </p>

                <h1 className="text-jaffa-100 md:leading-none md:items-start flex flex-col items-center justify-center mt-8 leading-[2.5rem]">
                    <span className="font-avigea text-[40px] md:text-[60px] max-w-2xl capitalize">
                        {upt ? title : `Unit Pengelola Teknis (UPT)`}
                    </span>
                    <br />
                    <span className="font-avigea text-[64px] md:text-[60px]">
                        ITERA
                    </span>
                </h1>

                <p className="mt-10 leading-5 tracking-widest text-jaffa-100 md:tracking-[0.1em] max-w-lg">
                    <span className="text-[18px] md:text-[25px]">
                        {upt
                            ? headerDescription
                            : `lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, sint nisi laborum, ut dolor impedit amet placeat minus velit.`}
                    </span>
                </p>
            </div>
        </MaxWidthWrapper>
    );
};

export default Header;
