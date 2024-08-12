import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";

interface tugasPerDay {
  nama_tugas: string;
  persen: number;
  deadline: string;
}

interface RecentSalesProps {
  tasks: tugasPerDay[];
}

export function RecentSales({ tasks }: RecentSalesProps) {
  return (
    <div className="space-y-8">
      {tasks.map((task, index) => (
        <div className=" flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>{index + 1}</AvatarFallback>
          </Avatar>

          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {task.nama_tugas}
            </p>
            <p className="text-muted-foreground text-sm">
              Deadline : {task.deadline}
            </p>
          </div>
          <div className="ml-auto font-medium">{task.persen} %</div>
        </div>
      ))}
    </div>
  );
}
