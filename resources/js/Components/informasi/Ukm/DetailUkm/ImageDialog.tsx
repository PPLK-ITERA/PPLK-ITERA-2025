import * as DialogPrimitive from "@radix-ui/react-dialog";

import React from "react";

import { IconZoomIn } from "@tabler/icons-react";

import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogOverlay,
    DialogPortal,
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
                <Button className="top-2 right-2 bg-black/70 border-white/50 hover:scale-105 absolute p-2 text-white transition-all duration-200 border rounded-lg">
                    <IconZoomIn />
                </Button>
            </DialogTrigger>
            <DialogContent className="p-0 bg-transparent border-0">
                <div className="max-md:px-8">
                    <img
                        src={src}
                        className="rounded-xl object-contain w-full overflow-hidden shadow-xl"
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
}
