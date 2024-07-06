import React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent, CardTitle } from "@/Components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";
import { type CarouselApi } from "@/Components/ui/carousel";
import { DATA_FUNFACT } from "@/lib/data/funfact";
import { Person } from "@/lib/types/FunFactType";

const CarouselForm = () => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    function getRandomPerson(data: Person[]): Person {
        const randomIndex = Math.floor(Math.random() * data.length);
        return data[randomIndex];
    }

    const randomPerson: Person = getRandomPerson(DATA_FUNFACT);

    return (
        <div>
            <Carousel
                className="h-[200px] w-[300px] text-white sm:h-[415px] sm:w-[415px]"
                setApi={setApi}
                plugins={[
                    Autoplay({
                        delay: 4000,
                    }),
                ]}
            >
                <CarouselContent>
                    {randomPerson.funfact.map((item, index) => (
                        <CarouselItem key={index}>
                            <div>
                                <Card className="flex flex-col items-center justify-center border-none bg-white/10 p-2 backdrop-blur-lg md:aspect-square lg:p-5">
                                    <CardTitle>
                                        <p className="text-center text-2xl font-bold text-white lg:text-4xl">
                                            {item.title}
                                        </p>
                                        <p className="text-center text-sm font-semibold text-white lg:text-lg">
                                            {item.subtitle}
                                        </p>
                                    </CardTitle>

                                    <CardContent className="mt-5 flex items-center justify-center md:mt-20">
                                        <span className="md:text-md text-center text-sm font-semibold text-white">
                                            {item.desc}
                                        </span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="invisible bg-transparent text-white hover:border-2 hover:border-white hover:bg-transparent hover:text-white lg:visible" />

                <div className="text-center text-sm text-white">
                    {randomPerson.funfact.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => api?.scrollTo(index)}
                            className={`mx-1 inline-block h-2 w-2 rounded-full bg-white transition duration-200 ease-in-out ${
                                index === current - 1
                                    ? "w-5 bg-white"
                                    : "bg-white/50"
                            }`}
                        />
                    ))}
                </div>

                <CarouselNext className="invisible bg-transparent text-white hover:border-2 hover:border-white hover:bg-transparent hover:text-white lg:visible" />
            </Carousel>
        </div>
    );
};

export default CarouselForm;
