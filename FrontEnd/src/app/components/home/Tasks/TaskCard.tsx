import { FC } from 'react';
import { Calendar, CheckCircle, Clock, FileText } from 'lucide-react';
import { Button } from '../../../baseComponents/button';
import { Card, CardContent, CardFooter, CardHeader } from '../../../baseComponents/card';

export type TaskType = 'payment' | 'task' | 'signature' | 'event';

interface TaskCardProps {
  title: string;
  description: string;
  type: TaskType;
  buttonText: string;
}

export const TaskCard: FC<TaskCardProps> = ({
  title,
  description,
  type,
  buttonText
}) => {
  const getIcon = () => {
    switch (type) {
      case 'payment': return <Clock className="h-6 w-6 text-red-500" />;
      case 'task': return <FileText className="h-6 w-6 text-orange-500" />;
      case 'signature': return <CheckCircle className="h-6 w-6 text-primary" />;
      case 'event': return <Calendar className="h-6 w-6 text-blue-500" />;
      default: return <FileText className="h-6 w-6" />;
    }
  };
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          {getIcon()}
          <h3 className="font-medium">{title}</h3>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Button variant="outline" size="sm" className="w-full">
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};