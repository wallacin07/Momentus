// src/app/components/event/EventDetails/SuppliersSection.tsx
"use client";

import { FC } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/app/baseComponents/card";
import { Button } from "@/app/baseComponents/button";
import { Badge } from "@/app/baseComponents/badge";
import { Plus, Users } from "lucide-react";
import { SupplierData } from "../../supplier/SupplierItem";

interface SuppliersSectionProps {
  team: SupplierData[];           // fornecedores já adicionados
  onAddSupplier: () => void;      // abre a modal
}

const SuppliersSection: FC<SuppliersSectionProps> = ({ team, onAddSupplier }) => {
  return (
    <Card className="mb-6">
      <CardHeader className="flex items-center justify-between py-4">
        <div>
          <CardTitle className="flex items-center space-x-2 text-lg">
            <span>Equipe do evento</span>
            <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
              {team.length === 0 ? "Vazio" : `${team.length} fornecedores`}
            </Badge>
          </CardTitle>
          <CardDescription className="text-sm mt-1">
            Gerencie os fornecedores envolvidos no evento
          </CardDescription>
        </div>
        <Button
          size="sm"
          className="bg-black text-white hover:bg-gray-800"
          onClick={onAddSupplier}
        >
          <Plus className="w-4 h-4 mr-2" /> Adicionar
        </Button>
      </CardHeader>

      <CardContent className="pt-0 space-y-4">
        {team.length === 0 && (
          <p className="text-center text-gray-500">Nenhum fornecedor adicionado.</p>
        )}
        {team.map((s) => (
          <div
            key={s.id}
            className="flex items-center space-x-3 p-3 bg-gray-100 rounded-lg"
          >
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border">
              <Users className="w-4 h-4 text-purple-600" />
            </div>
            <div>
              <p className="font-medium text-sm">{s.name}</p>
              <p className="text-xs text-gray-600">{s.description}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default SuppliersSection;
