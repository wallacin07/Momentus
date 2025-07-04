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
import SuppliersSection from "@/app/components/event/EventDetails/SuppliersSection";
import AddSupplierModal from "@/app/components/event/EventDetails/AddSupplierModal";
import { SupplierData } from "@/app/components/supplier/SupplierItem";

export default function EventOrganization() {
  const { id } = useParams()!;
  const [team, setTeam] = useState<SupplierData[]>([]);
  const [availableSuppliers, setAvailableSuppliers] = useState<SupplierData[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/supplier", {
      headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
    })
      .then((res) => res.json())
      .then((data: SupplierData[]) => setAvailableSuppliers(data))
      .catch(console.error);
  }, []);

  const handleAddSupplier = (supplier: SupplierData) => {
    if (!team.some((s) => s.id === supplier.id)) {
      setTeam((prev) => [...prev, supplier]);
    }
  };

  const reminders = [
    { icon: FileText, title: "Teste nosso checklist modelo", description: "Inicie o planejamento essencial de um casamento e modifique como preferir" },
    { icon: Repeat, title: "Modelo salvo ou outro evento", description: "Escolha entre modelos já salvos ou use outro evento como base, podendo re-utilizar toda a disposição e indicações de fornecedores" },
    { icon: Target, title: "Adapte o seu checklist de outras plataformas", description: "Se você já possui o seu jeito de trabalhar seja via planilhas ou outros aplicativos, nós auxiliamos você adaptá-lo", badge: "EXCLUSIVO" as string },
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
        {/* Seção de fornecedores */}
        <SuppliersSection team={team} onAddSupplier={() => setIsAddModalOpen(true)} />

        <AddSupplierModal
          isOpen={isAddModalOpen}
          suppliers={availableSuppliers}
          onConfirm={(supplier) => {
            handleAddSupplier(supplier);
            setIsAddModalOpen(false);
          }}
          onClose={() => setIsAddModalOpen(false)}
        />

        {/* Reminders e Tabs */}
        <Tabs defaultValue="lembretes" className="space-y-6 mt-12">
          <TabsList className="grid w-full grid-cols-4 bg-white border shadow-sm">
            <TabsTrigger value="lembretes" className="flex items-center space-x-2"><Circle className="w-4 h-4" /><span>Lembretes</span></TabsTrigger>
            <TabsTrigger value="tasks" className="flex items-center space-x-2"><CheckSquare className="w-4 h-4" /><span>Tasks</span></TabsTrigger>
            <TabsTrigger value="payments" className="flex items-center space-x-2"><DollarSign className="w-4 h-4" /><span>Pagamentos</span></TabsTrigger>
            <TabsTrigger value="guests" className="flex items-center space-x-2"><Users className="w-4 h-4" /><span>Convidados</span></TabsTrigger>
          </TabsList>
          <TabsContent value="lembretes" className="space-y-4">
            {reminders.map((r, idx) => (
              <Card key={idx} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gray-100 rounded-lg"><r.icon className="w-6 h-6 text-gray-600"/></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{r.title}</h3>
                      <p className="text-sm text-gray-600">{r.description}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          <TabsContent value="tasks"><TasksTab /></TabsContent>
          <TabsContent value="payments"><PaymentsTab suppliers={team} /></TabsContent>
          <TabsContent value="guests"><GuestsTab /></TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
