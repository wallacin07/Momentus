
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/baseComponents/card";
import { DollarSign, CreditCard, Receipt, AlertTriangle } from "lucide-react";
import { Badge } from "@/app/baseComponents/badge";

const PaymentsTab = () => {
  const reminders = [
    {
      icon: DollarSign,
      title: "Definir orçamento total",
      description: "Estabeleça o valor total disponível para o casamento",
      status: "pending",
      color: "green"
    },
    {
      icon: Receipt,
      title: "Organizar pagamentos",
      description: "Liste todos os fornecedores e valores a serem pagos",
      status: "pending",
      color: "blue"
    },
    {
      icon: CreditCard,
      title: "Configurar métodos de pagamento",
      description: "Defina as formas de pagamento para cada fornecedor",
      status: "pending",
      color: "purple"
    },
    {
      icon: AlertTriangle,
      title: "Controlar gastos",
      description: "Acompanhe os gastos para não ultrapassar o orçamento",
      status: "pending",
      color: "orange"
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <DollarSign className="w-5 h-5 text-green-500" />
            <span>Lembretes de Pagamentos</span>
          </CardTitle>
          <CardDescription>
            Gerencie o orçamento e pagamentos do seu evento
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

export default PaymentsTab;
