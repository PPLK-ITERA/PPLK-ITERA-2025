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
            <DialogContent className="mx-auto my-8 flex h-[500px] w-[900px] max-w-none flex-col justify-between bg-flower-pattern bg-cover bg-center text-center">
                <div className="w-full h-full relative ">
                    <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-[#A6680C] to-[#B9822F] opacity-50"></div>
                    <div className="absolute left-0 top-0 flex h-full w-full flex-grow flex-col items-center justify-center">
                        <DialogTitle className="mb-4 text-center font-avigea text-[39px] text-candlelight-50">
                            Booklet Momatzio
                        </DialogTitle>
                        <p className="mb-8 font-montserrat text-[25px] text-candlelight-50">
                            Booklet adalah lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled
                            it to make a type specimen book.
                        </p>
                    </div>
                </div>

                <DialogFooter>
                    <Button className="bg-candlelight-50 text-candlelight-800 focus:bg-candlelight-50 focus:text-candlelight-800">
                        Buka Booklet
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
