
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/baseComponents/card";
import { Users, UserPlus, Mail, Phone } from "lucide-react";
import { Badge } from "@/app/baseComponents/badge";

const GuestsTab = () => {
  const reminders = [
    {
      icon: Users,
      title: "Criar lista de convidados",
      description: "Monte a lista completa de pessoas que serão convidadas",
      status: "pending",
      color: "purple"
    },
    {
      icon: Mail,
      title: "Enviar convites",
      description: "Envie os convites para todos os convidados da lista",
      status: "pending",
      color: "blue"
    },
    {
      icon: Phone,
      title: "Confirmar presenças",
      description: "Entre em contato para confirmar a presença dos convidados",
      status: "pending",
      color: "green"
    },
    {
      icon: UserPlus,
      title: "Organizar mesa",
      description: "Defina a disposição dos convidados nas mesas",
      status: "pending",
      color: "orange"
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-purple-500" />
            <span>Lembretes de Convidados</span>
          </CardTitle>
          <CardDescription>
            Gerencie a lista de convidados e confirmações
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

export default GuestsTab;
