import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";

export function DialogBooklet() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className="bg-gradient-to-r from-[#B9822F] to-[#A6680C] font-montserrat text-[14px] text-white hover:text-white focus:text-white"
                >
                    Lihat
                </Button>
            </DialogTrigger>
            <DialogContent className="flex h-[360px] w-[330px] md:h-[360px] md:w-[640px] lg:w-full  lg:h-[500px] max-w-[900px] px-8 flex-col justify-between bg-flower-pattern bg-cover bg-center ">
                <div className="absolute inset-0 h-full w-full border rounded-md bg-gradient-to-b from-[#B9822F] to-[#A6680C] opacity-85"></div>
                <div className="relative z-10 flex h-full w-full flex-col justify-center">
                    <DialogTitle className="mb-4 text-left sm:text-center md:text-center font-avigea font-normal text-[25px] sm:text-[36px] md:text-[39px] text-candlelight-50">
                        Booklet Motmazio
                    </DialogTitle>
                    <p className="mb-5 font-montserrat text-[16px] md:text-[20px] lg:text-[25px] sm:text-center md:text-center text-candlelight-50">
                        Ini adalah deskripsi dari booklet yang akan dikerjakan,
                        bisa digunakan untuk menjelaskan tentang tugas yang
                        diberikan, seperti cara pengumpulan dll.
                    </p>
                </div>
                <DialogFooter className="z-10 flex justify-center">
                    <Button className="mx-auto bg-candlelight-50 text-candlelight-800 focus:bg-candlelight-50 focus:text-candlelight-800">
                        Buka Booklet
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
