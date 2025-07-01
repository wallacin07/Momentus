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
  Plus,
} from "lucide-react";
import TasksTab from "@/app/components/event/EventDetails/TasksTab";
import PaymentsTab from "@/app/components/event/EventDetails/PaymentsTab";
import GuestsTab from "@/app/components/event/EventDetails/GuestsTab";
import AddSupplierModal from "@/app/components/event/EventDetails/AddSupplierModal";
import { SupplierData } from "../../supplier/SupplierItem";

interface Event {
  id: string;
  title: string;
  date: string;
  description?: string;
}

export default function EventOrganization() {
  const { id } = useParams()!;
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // equipe atual e lista de fornecedores disponíveis
  const [team, setTeam] = useState<SupplierData[]>([]);
  const [availableSuppliers, setAvailableSuppliers] = useState<SupplierData[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    async function loadEvent() {
      try {
        const res = await fetch(`http://localhost:8080/event/${id}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        setEvent(await res.json());
      } catch (err: any) {
        setError(err.message);
      }
    }
    async function loadSuppliers() {
      try {
        const res = await fetch(`http://localhost:8080/supplier`, {
          headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
        });
        if (res.ok) setAvailableSuppliers(await res.json());
      } catch {}
    }
    loadEvent().finally(() => setLoading(false));
    loadSuppliers();
  }, [id]);

  if (loading) return <p>Carregando…</p>;
  if (error) return <p>Erro: {error}</p>;
  if (!event) return <p>Evento não encontrado.</p>;

  const reminders = [
    { icon: FileText, title: "Teste nosso checklist modelo", description: "Inicie o planejamento essencial de um casamento e modifique como preferir" },
    { icon: Repeat, title: "Modelo salvo ou outro evento", description: "Escolha entre modelos já salvos ou use outro evento como base, podendo re-utilizar toda a disposição e indicações de fornecedores" },
    { icon: Target, title: "Adapte o seu checklist de outras plataformas", description: "Se você já possui o seu jeito de trabalhar seja via planilhas ou outros aplicativos, nós auxiliamos você adaptá-lo", badge: "EXCLUSIVO" },
    { icon: Circle, title: "Comece a organizar do zero", description: "Um espaço para compor e organizar o evento da forma como você preferir" },
  ];

  // adicionar supplier selecionado na modal
  const handleAddSupplier = (supplier: SupplierData) => {
    if (!team.find((s) => s.id === supplier.id)) {
      setTeam((prev) => [...prev, supplier]);
    }
    setIsAddModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">{event.title}</h1>
              <Badge variant="secondary" className="bg-purple-100 text-purple-700">Organização</Badge>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">Site do evento</Button>
              <Button variant="outline" size="sm">Opções</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Seção de equipe (cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {team.map((s) => (
            <Card key={s.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-3"><CardTitle>{s.name}</CardTitle></CardHeader>
              <CardContent><p className="text-sm text-gray-600">{s.description}</p></CardContent>
            </Card>
          ))}
          <Card className="hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
            <Button onClick={() => setIsAddModalOpen(true)}><Plus /> Adicionar Fornecedor</Button>
          </Card>
        </div>

        {/* Modal para selecionar fornecedor */}
        <AddSupplierModal
          isOpen={isAddModalOpen}
          suppliers={availableSuppliers}
          onConfirm={() => handleAddSupplier}
          onClose={() => setIsAddModalOpen(false)}
        />

        {/* Reminders e Tabs abaixo (mantidos originais) */}
        <Tabs defaultValue="lembretes" className="space-y-6 mt-12">
          <TabsList className="grid w-full grid-cols-5 bg-white border shadow-sm">
            <TabsTrigger value="lembretes" className="flex items-center space-x-2"><Circle /><span>Lembretes</span></TabsTrigger>
            <TabsTrigger value="tasks" className="flex items-center space-x-2"><CheckSquare /><span>Tasks</span></TabsTrigger>
            <TabsTrigger value="payments" className="flex items-center space-x-2"><DollarSign /><span>Pagamentos</span></TabsTrigger>
            <TabsTrigger value="guests" className="flex items-center space-x-2"><Users /><span>Convidados</span></TabsTrigger>
            <TabsTrigger value="suppliers" className="flex items-center space-x-2"><Users /><span>Equipe</span></TabsTrigger>
          </TabsList>
          <TabsContent value="lembretes" className="space-y-4">
            {reminders.map((r,i)=>(
              <Card key={i} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gray-100 rounded-lg"><r.icon className="w-6 h-6"/></div>
                    <div><h3 className="font-semibold">{r.title}</h3><p className="text-sm text-gray-600">{r.description}</p></div>
                  </div>
                  <ChevronRight />
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          <TabsContent value="tasks"><TasksTab /></TabsContent>
          <TabsContent value="payments"><PaymentsTab /></TabsContent>
          <TabsContent value="guests"><GuestsTab /></TabsContent>
          <TabsContent value="suppliers">
            {/* Re-render equipe dentro da tab */}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
