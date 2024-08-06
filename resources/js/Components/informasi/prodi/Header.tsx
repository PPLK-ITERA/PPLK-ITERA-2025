import { IconChevronDown } from "@tabler/icons-react";

import MaxWidthWrapper from "@/Components/MaxWidthWrapper";

import { FAKULTAS_DATA } from "@/lib/data/fakultas";
import { useAos } from "@/lib/hooks/useAos";

type HeaderProps = {
    fakultas: string;
};

const Header = ({ fakultas }: HeaderProps) => {
    useAos();
    const selectedFakultas = FAKULTAS_DATA[fakultas];

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
                    className="text-jaffa-100 md:leading-none md:items-start flex flex-col items-center justify-center mt-8 leading-7"
                >
                    <span className="font-avigea text-[40px] md:text-[60px] max-w-xl">
                        {selectedFakultas.title}
                    </span>
                    <br />
                    <span className="font-avigea text-[64px] md:text-[60px]">
                        ITERA
                    </span>
                </h1>

                <p
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    className="mt-10 text-sm text-jaffa-100 max-w-lg max-md:mx-auto font-montserrat"
                >
                    <span className="text-lg md:text-xl">
                        Daftar program studi yang ada di{" "}
                        {selectedFakultas.title} ITERA
                    </span>
                </p>
            </div>
        </MaxWidthWrapper>
    );
};

export default Header;
