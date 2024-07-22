import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { ColumnActions } from "./column-action";
import { TaskCard } from "./task-card";
import { Task } from "@/lib/store";
import { type UniqueIdentifier, useDndContext } from "@dnd-kit/core";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { cva } from "class-variance-authority";

import { useMemo } from "react";

import { GripVertical } from "lucide-react";

export interface Column {
    id: UniqueIdentifier;
    title: string;
}

export type ColumnType = "Column";

export interface ColumnDragData {
    type: ColumnType;
    column: Column;
}

interface BoardColumnProps {
    column: Column;
    tasks: Task[];
    isOverlay?: boolean;
}

export function BoardColumn({ column, tasks, isOverlay }: BoardColumnProps) {
    const tasksIds = useMemo(() => {
        return tasks.map((task) => task.id);
    }, [tasks]);

    const {
        setNodeRef,
        attributes,
        listeners,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id: column.id,
        data: {
            type: "Column",
            column,
        } satisfies ColumnDragData,
        attributes: {
            roleDescription: `Column: ${column.title}`,
        },
    });

    const style = {
        transition,
        transform: CSS.Translate.toString(transform),
    };

    const variants = cva(
        "h-[70vh] max-h-[70vh] w-[350px] max-w-full bg-secondary flex flex-col flex-shrink-0 snap-center",
        {
            variants: {
                dragging: {
                    default: "border-2 border-transparent",
                    over: "ring-2 opacity-30",
                    overlay: "ring-2 ring-primary",
                },
            },
        },
    );

    return (
        <Card
            ref={setNodeRef}
            style={style}
            className={variants({
                dragging: isOverlay
                    ? "overlay"
                    : isDragging
                      ? "over"
                      : undefined,
            })}
        >
            <CardHeader className="space-between flex flex-row items-center p-4 font-semibold text-left border-b-2">
                <Button
                    variant={"ghost"}
                    {...attributes}
                    {...listeners}
                    className=" cursor-grab text-primary/50 relative h-auto p-1 -ml-2"
                >
                    <span className="sr-only">{`Move column: ${column.title}`}</span>
                    <GripVertical />
                </Button>
                {/* <span className="mr-auto !mt-0"> {column.title}</span> */}
                {/* <Input
          defaultValue={column.title}
          className="text-base !mt-0 mr-auto"
        /> */}
                <ColumnActions id={column.id} title={column.title} />
            </CardHeader>
            <CardContent className="flex flex-col flex-grow gap-4 p-2 overflow-x-hidden overflow-y-auto">
                <SortableContext items={tasksIds}>
                    {tasks.map((task) => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </SortableContext>
            </CardContent>
        </Card>
    );
}

export function BoardContainer({ children }: { children: React.ReactNode }) {
    const dndContext = useDndContext();

    const variations = cva(
        "overflow-x-auto px-2  pb-4 md:px-0 flex lg:justify-start",
        {
            variants: {
                dragging: {
                    default: "",
                    active: "snap-none",
                },
            },
        },
    );

    return (
        <div
            className={variations({
                dragging: dndContext.active ? "active" : "default",
            })}
        >
            <div className="flex flex-row items-start justify-center gap-4">
                {children}
            </div>
        </div>
    );
}
