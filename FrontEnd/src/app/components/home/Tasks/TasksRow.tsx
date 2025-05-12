import { FC } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TaskCard, TaskType } from './TaskCard';

interface TasksRowProps {
  title: string;
  tasks: Array<{
    id: string;
    title: string;
    description: string;
    type: TaskType;
    buttonText: string;
  }>;
}

export const TasksRow: FC<TasksRowProps> = ({ title, tasks }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium">{title}</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <ChevronLeft size={18} />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight size={18} />
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {tasks.map(task => (
          <TaskCard 
            key={task.id}
            title={task.title}
            description={task.description}
            type={task.type}
            buttonText={task.buttonText}
          />
        ))}
      </div>
    </div>
  );
};
