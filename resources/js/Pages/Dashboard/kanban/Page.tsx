import DashboardLayout from "@/Layouts/DashboardLayout";

import { KanbanBoard } from "@/Components/dashboard/kanban/kanban-board";
import NewTaskDialog from "@/Components/dashboard/kanban/new-task-dialog";
import { Breadcrumbs } from "@/Components/ui/breadcrumbs";
import { Heading } from "@/Components/ui/heading";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Kanban", link: "/dashboard/kanban" },
];

export default function Page({ auth }) {
  return (
    <DashboardLayout user={auth.user}>
      <Breadcrumbs items={breadcrumbItems} />
      <div className="flex items-start justify-between">
        <Heading title={`Kanban`} description="Manage tasks by dnd" />
        <NewTaskDialog />
      </div>
      <KanbanBoard />
    </DashboardLayout>
  );
}
