import React, { useEffect, useState } from "react";

import { Head } from "@inertiajs/react";

import DefaultLayout from "@/Layouts/DefaultLayout";

import AsesmenForm from "@/Components/asesmen/AsesmenForm";
import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/Components/ui/dialog";

import pilar1 from "!assets/pilar/pilar1.png";
import pilar2 from "!assets/pilar/pilar2.png";
import pilar3 from "!assets/pilar/pilar3.png";
import pilar4 from "!assets/pilar/pilar4.png";

const DATA_PILAR = [
    { img: pilar1, title: "Work Hard" },
    { img: pilar2, title: "Sharing Is Caring" },
    { img: pilar3, title: "Equity" },
    { img: pilar4, title: "Common" },
];

function Page() {
    const [openDialog, setOpenDialog] = useState(true);
    const [showExitWarning, setShowExitWarning] = useState(false);

    // Set up a listener for the back button event
    useEffect(() => {
        const handleBeforeUnload = (event: any) => {
            // Show a confirmation dialog
            event.preventDefault();
            event.returnValue = ""; // Show default browser dialog
            return ""; // For some browsers
        };

        const handlePopState = () => {
            setShowExitWarning(true);
            window.history.pushState(
                null,
                document.title,
                window.location.pathname,
            );
        };

        // Add event listeners for beforeunload and popstate
        window.addEventListener("beforeunload", handleBeforeUnload);
        window.addEventListener("popstate", handlePopState);

        // Push initial state to history
        window.history.pushState(
            null,
            document.title,
            window.location.pathname,
        );

        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
            window.removeEventListener("popstate", handlePopState);
        };
    }, []);

    const handleConfirmExit = () => {
        setShowExitWarning(false);
        window.location.replace("/");
    };

    const handleCancelExit = () => {
        setShowExitWarning(false);
        window.history.pushState(
            null,
            document.title,
            window.location.pathname,
        ); // Prevent back navigation
    };

    return (
        <div>
            <Head title="Asesmen" />

            <DefaultLayout isSolid={true}>
                <div className="bg-pattern-white md:py-10">
                    <AsesmenForm />
                </div>

                <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                    <DialogContent className="bg-gradient-to-b from-black to-jaffa-900 max-w-screen w-screen h-screen px-0 border-none rounded-none">
                        <DialogHeader>
                            <DialogTitle className="md:text-2xl mt-10 text-center text-white">
                                Welcome to Asesmen PPLK 2024
                            </DialogTitle>

                            <DialogDescription className="text-white/60 max-w-sm mx-auto mt-5 text-center">
                                Kerjakan soal-soal berikut untuk mengetahui
                                pilar mana yang paling mendekati diri kamu
                            </DialogDescription>
                        </DialogHeader>

                        <div className="md:max-w-md lg:max-w-screen-2xl flex flex-wrap items-center justify-center gap-5 mx-auto overflow-auto">
                            {DATA_PILAR.map((data, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center max-w-[150px] md:max-w-[200px] text-white"
                                >
                                    <img src={data.img} alt={data.title} />

                                    <p>{data.title}</p>
                                </div>
                            ))}
                        </div>

                        <DialogClose className="border-none outline-none">
                            <Button className="bg-jaffa-700 hover:bg-jaffa-700/90">
                                Mulai Asesmen
                            </Button>
                        </DialogClose>
                    </DialogContent>
                </Dialog>

                {showExitWarning && (
                    <Dialog
                        open={showExitWarning}
                        onOpenChange={setShowExitWarning}
                    >
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Warning</DialogTitle>
                                <DialogDescription>
                                    Apakah kamu yakin ingin meninggalkan halaman
                                    ini? Jawaban yang sudah kamu berikan akan
                                    hilang.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="md:justify-end flex justify-center gap-2">
                                <Button
                                    onClick={handleCancelExit}
                                    variant={"outline"}
                                >
                                    Batalkan
                                </Button>
                                <Button
                                    onClick={handleConfirmExit}
                                    variant={"default"}
                                >
                                    Keluar
                                </Button>
                            </div>
                        </DialogContent>
                    </Dialog>
                )}
            </DefaultLayout>
        </div>
    );
}

export default Page;
