import React, { useState } from "react";

import { Card } from "@/Components/ui/card";
import {
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/Components/ui/carousel";

import { FAKULTAS_DATA, FakultasData } from "@/lib/data/fakultas";

export default function StrukturOrganisasi({ fakultas }) {
    const selectedFakultas: FakultasData = FAKULTAS_DATA[fakultas];

    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <div className="py-16">
            <div className="text-start md:text-center md:px-0 px-4">
                <p className="font-avigea text-moccaccino-500 md:text-5xl text-2xl font-semibold tracking-wide text-center">
                    Jabatan Struktural
                </p>
            </div>

            <div className="md:mt-16 flex items-center justify-center mx-auto mt-8">
                <div className="px-8">
                    <Carousel
                        className="md:max-w-3xl lg:max-w-5xl max-w-[300px]"
                        setApi={setApi}
                    >
                        <CarouselContent>
                            {selectedFakultas.struktur_organisasi.map(
                                (item, index) => (
                                    <CarouselItem
                                        key={index}
                                        className="md:basis-1/2 lg:basis-1/2 font-montserrat"
                                    >
                                        <div>
                                            <Card className="rounded-2xl shadow-xl overflow-hidden border-0 min-w-[300px] flex items-center xl:min-w-[500px] xl:min-h-[300px] flex-col md:flex-row">
                                                <div className="md:w-[40%] w-full h-[300px] overflow-hidden">
                                                    <img
                                                        src={item.foto}
                                                        alt={item.jabatan}
                                                        className="object-cover object-top w-full h-full"
                                                    />
                                                </div>

                                                <div className="text-center relative h-[300px] md:text-start p-6 md:w-[60%] w-full bg-jaffa-100 flex flex-col gap-2 place-content-center">
                                                    <h3 className="text-xl font-bold">
                                                        {item.nama}
                                                    </h3>

                                                    <p className="text-sm font-medium">
                                                        {item.jabatan}
                                                    </p>
                                                </div>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ),
                            )}
                        </CarouselContent>
                    </Carousel>

                    <div className="flex justify-center mt-4 space-x-2">
                        {selectedFakultas.struktur_organisasi.map(
                            (_, index) => (
                                <button
                                    key={index}
                                    onClick={() => api?.scrollTo(index)}
                                    className={`mx-1 inline-block h-2 w-2 rounded-full bg-black transition duration-200 ease-in-out ${
                                        index === current - 1
                                            ? "w-5 bg-black"
                                            : "bg-black"
                                    }`}
                                />
                            ),
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
