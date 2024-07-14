"use client";

import { useTaskStore } from "@/lib/store";

import { Button } from "@/Components/dashboard/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/dashboard/ui/dialog";
import { Input } from "@/Components/dashboard/ui/input";

export default function NewSectionDialog() {
    const addCol = useTaskStore((state) => state.addCol);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        const { title } = Object.fromEntries(formData);

        if (typeof title !== "string") return;
        addCol(title);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="secondary" size="lg" className="w-full">
                    ＋ Add New Section
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add New Section</DialogTitle>
                    <DialogDescription>
                        What section you want to add today?
                    </DialogDescription>
                </DialogHeader>
                <form
                    id="todo-form"
                    className="grid gap-4 py-4"
                    onSubmit={handleSubmit}
                >
                    <div className="grid items-center grid-cols-4 gap-4">
                        <Input
                            id="title"
                            name="title"
                            placeholder="Section title..."
                            className="col-span-4"
                        />
                    </div>
                </form>
                <DialogFooter>
                    <DialogTrigger asChild>
                        <Button type="submit" size="sm" form="todo-form">
                            Add Section
                        </Button>
                    </DialogTrigger>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
