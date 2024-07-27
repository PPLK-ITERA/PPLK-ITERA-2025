import Autoplay from "embla-carousel-autoplay";

import React from "react";

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
    const [randomPerson, setRandomPerson] = React.useState<Person | null>(null);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    React.useEffect(() => {
        function getRandomPerson(data: Person[]): Person {
            const randomIndex = Math.floor(Math.random() * data.length);
            return data[randomIndex];
        }

        // Set initial random person
        setRandomPerson(getRandomPerson(DATA_FUNFACT));

        // Update random person every 10 seconds
        const intervalId = setInterval(() => {
            setRandomPerson(getRandomPerson(DATA_FUNFACT));
        }, 10000);

        // Clean up interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    if (!randomPerson) {
        return null; // or some loading indicator
    }

    return (
        <Carousel
            className="h-[300px] w-[300px] text-white md:h-[350px] md:w-[350px] lg:w-[415px] lg:h-[415px] xl:w-[500px] xl:h-[500px]"
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
                            <Card className="bg-black/10 min-h-[200px] backdrop-blur-sm md:aspect-square lg:p-5 flex flex-col items-center justify-center p-2 border-none">
                                <CardTitle>
                                    <p className="lg:text-4xl md:text-2xl text-sm font-bold text-center text-white">
                                        {item.title}
                                    </p>
                                    <p className="lg:text-lg text-sm font-semibold text-[10px] text-center text-white">
                                        {item.subtitle}
                                    </p>
                                </CardTitle>

                                <CardContent className="md:mt-20 flex items-center justify-center mt-5">
                                    <p className="md:text-lg text-[8px] leading-3 text-sm font-semibold text-center text-white">
                                        {item.desc}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious className="hover:border-2 hover:border-white hover:bg-transparent hover:text-white lg:visible invisible text-white bg-transparent" />

            <div className="text-sm text-center text-white">
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

            <CarouselNext className="hover:border-2 hover:border-white hover:bg-transparent hover:text-white lg:visible invisible text-white bg-transparent" />
        </Carousel>
    );
};

export default CarouselForm;
