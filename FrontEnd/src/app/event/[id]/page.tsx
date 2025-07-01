"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/baseComponents/tabs";
import { Button } from "@/app/baseComponents/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/baseComponents/card";
import { Badge } from "@/app/baseComponents/badge";
import {
  FileText,
  Repeat,
  Target,
  Circle,
  CheckSquare,
  DollarSign,
  Users,
  ChevronRight,
} from "lucide-react";
import TasksTab from "@/app/components/event/EventDetails/TasksTab";
import PaymentsTab from "@/app/components/event/EventDetails/PaymentsTab";
import GuestsTab from "@/app/components/event/EventDetails/GuestsTab";
import SuppliersSection from "@/app/components/event/EventDetails/SuppliersSection";
import AddSupplierModal from "@/app/components/event/EventDetails/AddSupplierModal";

interface Event {
  id: string;
  title: string;
  date: string;
  description?: string;
}

export default function EventOrganization() {
//   const { id } = useParams()!;
//   const [event, setEvent] = useState<Event | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

//   useEffect(() => {
//     async function loadEvent() {
//       try {
//         const res = await fetch(`http://localhost:8080/event/${id}`);
//         if (!res.ok) throw new Error(`HTTP ${res.status}`);
//         const data: Event = await res.json();
//         setEvent(data);
//       } catch (err: any) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }
//     loadEvent();
//   }, [id]);

//   if (loading) return <p>Carregando evento…</p>;
//   if (error) return <p>Erro ao carregar: {error}</p>;
//   if (!event) return <p>Evento não encontrado.</p>;

  const reminders = [
    { icon: FileText, title: "Teste nosso checklist modelo", description: "Inicie o planejamento essencial de um casamento e modifique como preferir" },
    { icon: Repeat, title: "Modelo salvo ou outro evento", description: "Escolha entre modelos já salvos ou use outro evento como base, podendo re-utilizar toda a disposição e indicações de fornecedores" },
    { icon: Target, title: "Adapte o seu checklist de outras plataformas", description: "Se você já possui o seu jeito de trabalhar seja via planilhas ou outros aplicativos, nós auxiliamos você adaptá-lo", badge: "EXCLUSIVO" },
    { icon: Circle, title: "Comece a organizar do zero", description: "Um espaço para compor e organizar o evento da forma como você preferir" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
<div className="bg-white shadow-sm border-b">


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">Casamento Maria & João</h1>
              <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                Organização
              </Badge>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                Site do evento
              </Button>
              <Button variant="outline" size="sm">
                Opções
              </Button>
            </div>
          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <SuppliersSection onAddSupplier={() => setIsAddModalOpen(true)} />
        <Tabs defaultValue="lembretes" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white border shadow-sm">
            <TabsTrigger value="lembretes" className="flex items-center space-x-2"><Circle className="w-4 h-4" /><span>Lembretes</span></TabsTrigger>
            <TabsTrigger value="tasks" className="flex items-center space-x-2"><CheckSquare className="w-4 h-4" /><span>Tasks</span></TabsTrigger>
            <TabsTrigger value="payments" className="flex items-center space-x-2"><DollarSign className="w-4 h-4" /><span>Pagamentos</span></TabsTrigger>
            <TabsTrigger value="guests" className="flex items-center space-x-2"><Users className="w-4 h-4" /><span>Convidados</span></TabsTrigger>
           
          </TabsList>

          <TabsContent value="lembretes" className="space-y-4">
            {reminders.map((reminder, idx) => (
              <Card key={idx} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gray-100 rounded-lg">
                        <reminder.icon className="w-6 h-6 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-gray-900">{reminder.title}</h3>
                          {"badge" in reminder && (
                            <Badge className="bg-black text-white text-xs px-2 py-1">{reminder.badge}</Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{reminder.description}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          <TabsContent value="tasks"><TasksTab /></TabsContent>
          <TabsContent value="payments"><PaymentsTab /></TabsContent>
          <TabsContent value="guests"><GuestsTab /></TabsContent>
        </Tabs>

        {/* Event Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Sobre o evento */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-3"><CardTitle className="text-lg">Sobre o evento</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">WhatsApp</span>
                  <span className="text-sm">+55 15465116615</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Data</span>
                  <span className="text-sm">{"event.date"}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detalhes */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-3"><CardTitle className="text-lg">Detalhes do evento</CardTitle></CardHeader>
            <CardContent><p className="text-sm text-gray-600">Clique para definir os detalhes</p></CardContent>
          </Card>

          {/* Cronograma */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-3"><CardTitle className="text-lg">Cronograma</CardTitle></CardHeader>
            <CardContent><p className="text-sm text-gray-600">Crie uma lista de tarefas para ver o cronograma</p></CardContent>
          </Card>
        </div>

           {/* <AddSupplierModal 
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)} suppliers={[]} onConfirm={function (): void {
            throw new Error("Function not implemented.");
          } }        /> */}

      </div>
    </div>
  );
}