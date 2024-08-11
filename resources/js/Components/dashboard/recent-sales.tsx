import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";

const assignmentData = [
  {
    name: "Tugas 1",
    date: "Sen, 12 Agu 2024",
    assignedPercent: 85.2,
  },
  {
    name: "Tugas 2",
    date: "Sel, 13 Agu 2024",
    assignedPercent: 24.5,
  },
  {
    name: "Tugas 3",
    date: "Sen, 14 Agu 2024",
    assignedPercent: 94.1,
  },
  {
    name: "Tugas 4",
    date: "Sen, 15 Agu 2024",
    assignedPercent: 59.8,
  },
  {
    name: "Tugas 5",
    date: "Sen, 16 Agu 2024",
    assignedPercent: 90.2,
  },
];

export function RecentSales() {
  return (
    <div className="space-y-8">
      {assignmentData.map((assignment, index) => (
        <div className="flex items-center ">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>{index + 1}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {assignment.name}
            </p>
            <p className="text-muted-foreground text-sm">{assignment.date}</p>
          </div>
          <div className="ml-auto font-medium">
            {assignment.assignedPercent} %
          </div>
        </div>
      ))}
    </div>
  );
}
