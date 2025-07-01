
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/baseComponents/card";
import { CheckCircle, Circle, Calendar, AlertCircle } from "lucide-react";
import { Badge } from "@/app/baseComponents/badge";

const TasksTab = () => {
  const reminders = [
    {
      icon: CheckCircle,
      title: "Verificar lista de tarefas",
      description: "Certifique-se de que todas as tarefas importantes estão listadas",
      status: "pending",
      color: "blue"
    },
    {
      icon: Calendar,
      title: "Definir prazos",
      description: "Estabeleça datas limite para cada tarefa do casamento",
      status: "pending",
      color: "orange"
    },
    {
      icon: AlertCircle,
      title: "Priorizar tarefas urgentes",
      description: "Identifique quais tarefas precisam ser feitas primeiro",
      status: "pending",
      color: "red"
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Circle className="w-5 h-5 text-blue-500" />
            <span>Lembretes de Tasks</span>
          </CardTitle>
          <CardDescription>
            Organize e acompanhe todas as tarefas do seu evento
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {reminders.map((reminder, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
              <div className={`mt-1 p-2 rounded-full bg-${reminder.color}-100`}>
                <reminder.icon className={`w-5 h-5 text-${reminder.color}-600`} />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{reminder.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{reminder.description}</p>
              </div>
              <Badge variant="outline" className="mt-1">
                Pendente
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default TasksTab;
