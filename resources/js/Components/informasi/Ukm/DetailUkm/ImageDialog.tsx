import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Label } from "@radix-ui/react-dropdown-menu";
import { IconZoomIn } from "@tabler/icons-react";

import React from "react";

import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogOverlay,
    DialogPortal,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { cn } from "@/lib/utils";

const DialogContent = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content
            ref={ref}
            className={cn(
                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-md",
                className,
            )}
            {...props}
        >
            {children}
        </DialogPrimitive.Content>
    </DialogPortal>
));

export function ImageDialog({ src }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="absolute top-2 right-2 text-white bg-black/70 rounded-lg p-2 border border-white/50 hover:scale-110 transition">
                    <IconZoomIn />
                </Button>
            </DialogTrigger>
            <DialogContent className="p-0 bg-transparent border-0">
                <div className="max-md:px-8">
                    <img
                        src={src}
                        className="w-full object-contain rounded-xl overflow-hidden shadow-xl"
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
}
