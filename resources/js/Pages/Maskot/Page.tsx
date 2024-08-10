import React from "react";

import { Head } from "@inertiajs/react";

import DefaultLayout from "@/Layouts/DefaultLayout";

import Footer from "@/Components/Footer";
import { CarouselMaskot } from "@/Components/Maskot";
import Navbar from "@/Components/Navbar";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardTitle } from "@/Components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";

import { useAos } from "@/lib/hooks/useAos";

import maskot_pplk_man from "!assets/maskot/maskot-pplk-man.png";
import maskot_pplk_woman from "!assets/maskot/maskot-pplk-woman.png";
import overlay_earth from "!assets/overlay-earth.png";

const MASKOTS = [
    {
        key: "maskot-man",
        name: "KANAKA",
        description:
            "Hai, Aku Maskot Man, Maskot PPLK ITERA 2024! tunggu kehadiranku di PPLK ITERA 2024!",
        image: maskot_pplk_man,
    },
    {
        key: "maskot-woman",
        name: "CALANDRA",
        description:
            "Hai, Aku Maskot Woman, Maskot PPLK ITERA 2024! tunggu kehadiranku di PPLK ITERA 2024!",
        image: maskot_pplk_woman,
    },
];

function Page() {
    const [viewMaskot, setViewMaskot] = React.useState("maskot-man");
    const selectedMaskot = MASKOTS.find((maskot) => maskot.key === viewMaskot);

    useAos();

    return (
        <>
            <Head title="Maskot PPLK ITERA 2024" />

            <div className="overflow-hidden">
                <DefaultLayout isSolid={true}>
                    <div className="bg-pattern-white relative items-center justify-center pt-20">
                        <div className="lg:mt-[55px] flex flex-col items-center text-center">
                            <h2
                                data-aos="fade-down"
                                data-aos-duration="1000"
                                className="font-avigea text-jaffa-900 font-bold w-fit mx-auto pt-[30px] text-3xl md:text-5xl"
                            >
                                Maskot PPLK
                                <br />
                                ITERA 2024
                            </h2>

                            <div
                                data-aos="fade-in"
                                data-aos-duration="1000"
                                className="md:flex-row relative flex flex-col mt-10"
                            >
                                {MASKOTS.map((maskot, index) => (
                                    <Card
                                        className={`${
                                            viewMaskot === maskot.key
                                                ? "grayscale-0"
                                                : "grayscale scale-90"
                                        } cursor-pointer transition relative bg-transparent border-none shadow-none overflow-hidden h-full w-full duration-300 ease-in-out z-20`}
                                        key={index}
                                        onClick={() =>
                                            setViewMaskot(`${maskot.key}`)
                                        }
                                    >
                                        <CardTitle className="backdrop-blur-3xl absolute inset-0">
                                            {Array.from({ length: 10 }).map(
                                                (_, indexArray) => (
                                                    <span
                                                        key={index}
                                                        className={`xl:text-[80px] md:text-[40px] lg:text-[50px] text-[30px] blur-[1px] md:blur-[3px] xl:blur-[6px] font-extrabold italic ${indexArray % 2 === 0 ? "drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] text-white" : `${viewMaskot === maskot.key ? "text-jaffa-800" : "text-black"}`} flex flex-col transition-all duration-300 ease-in-out ${index === 0 ? "tracking-[0.2em]" : ""}`}
                                                    >
                                                        {maskot.name}
                                                    </span>
                                                ),
                                            )}
                                        </CardTitle>

                                        <CardContent
                                            className={`relative flex w-full h-full ${index === 1 ? "flex-row-reverse" : ""} justify-center items-center`}
                                        >
                                            <div className="w-2/3 mx-auto">
                                                <img
                                                    src={maskot.image}
                                                    alt="Maskot"
                                                    className="object-contain w-full h-full"
                                                />
                                            </div>
                                        </CardContent>

                                        {/* <div
                                            className={`w-[300px] hidden md:block rounded-full h-[300px] font-montserrat ${index === 1 ? "-left-5 text-end" : "text-start -right-5"} ${viewMaskot === maskot.key ? "opacity-100" : "opacity-0"} -top-5 text-black flex justify-center p-14 items-center bg-white/70 backdrop-blur-sm absolute transition-all duration-300 ease-in-out text-[12px]`}
                                        >
                                            {maskot.description}
                                        </div> */}
                                    </Card>
                                ))}

                                {/* <div className="place-content-center justify-items-center absolute inset-0 border">
                                    {selectedMaskot && (
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button variant="outline">
                                                    {selectedMaskot.name}
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-[425px]">
                                                <DialogHeader>
                                                    <DialogTitle>
                                                        Edit profile
                                                    </DialogTitle>
                                                    <DialogDescription>
                                                        Make changes to your
                                                        profile here. Click save
                                                        when you're done.
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <div className="grid gap-4 py-4">
                                                    <div className="grid items-center grid-cols-4 gap-4">
                                                        <Label
                                                            htmlFor="name"
                                                            className="text-right"
                                                        >
                                                            Name
                                                        </Label>
                                                        <Input
                                                            id="name"
                                                            defaultValue="Pedro Duarte"
                                                            className="col-span-3"
                                                        />
                                                    </div>
                                                    <div className="grid items-center grid-cols-4 gap-4">
                                                        <Label
                                                            htmlFor="username"
                                                            className="text-right"
                                                        >
                                                            Username
                                                        </Label>
                                                        <Input
                                                            id="username"
                                                            defaultValue="@peduarte"
                                                            className="col-span-3"
                                                        />
                                                    </div>
                                                </div>
                                                <DialogFooter>
                                                    <Button type="submit">
                                                        Save changes
                                                    </Button>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>
                                    )}
                                </div> */}
                            </div>
                        </div>

                        <div className="overflow-hidden h-[260px] md:h-[290px] lg:h-[620px]">
                            <img
                                src={overlay_earth}
                                alt="Overlay Earth"
                                className="w-full h-[305px] lg:h-[629px]"
                            />
                        </div>
                    </div>
                </DefaultLayout>
            </div>
        </>
    );
}

export default Page;
