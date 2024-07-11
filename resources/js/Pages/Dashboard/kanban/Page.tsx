import { Breadcrumbs } from "@/Components/dashboard/breadcrumbs";
import { KanbanBoard } from "@/Components/dashboard/kanban/kanban-board";
import NewTaskDialog from "@/Components/dashboard/kanban/new-task-dialog";
import { Heading } from "@/Components/dashboard/ui/heading";

const breadcrumbItems = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Kanban", link: "/dashboard/kanban" },
];

export default function Page() {
    return (
        <>
            <div className="md:p-8 flex-1 p-4 pt-6 space-y-4">
                <Breadcrumbs items={breadcrumbItems} />
                <div className="flex items-start justify-between">
                    <Heading
                        title={`Kanban`}
                        description="Manage tasks by dnd"
                    />
                    <NewTaskDialog />
                </div>
                <KanbanBoard />
            </div>
        </>
    );
}
