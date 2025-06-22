import { Active, DataRef, Over } from "@dnd-kit/core";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { ColumnDragData } from "@/Components/dashboard/kanban/board-column";
import { TaskDragData } from "@/Components/dashboard/kanban/task-card";

type DraggableData = ColumnDragData | TaskDragData;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function hasDraggableData<T extends Active | Over>(
  entry: T | null | undefined,
): entry is T & {
  data: DataRef<DraggableData>;
} {
  if (!entry) {
    return false;
  }

  const data = entry.data.current;

  if (data?.type === "Column" || data?.type === "Task") {
    return true;
  }

  return false;
}

export function generateRandomImage() {
  // generate random picsum photos with size between 200 and 300 randomly
  return `https://picsum.photos/${Math.max(Math.floor(Math.random() * 100) + 200, 300)}`;
}

export function checkImageExists(
  url: string | null | undefined,
  defaultUrl: string,
) {
  if (!url) {
    return Promise.resolve(defaultUrl);
  }

  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(url);
    img.onerror = () => resolve(defaultUrl);
    img.src = url;
  });
}
