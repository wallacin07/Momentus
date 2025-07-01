"use client"


import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/app/baseComponents/dialog";
import { Button } from "@/app/baseComponents/button";
import { Input } from "@/app/baseComponents/input";
import { Label } from "@/app/baseComponents/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/baseComponents/select";
import { Plus } from "lucide-react";
import { SupplierData } from "../../supplier/SupplierItem";

interface AddSupplierModalProps {
  isOpen: boolean;
  onClose: () => void;
  suppliers: SupplierData[];
  onConfirm: () => void;
}

const AddSupplierModal = ({ isOpen, onClose, suppliers, onConfirm }: AddSupplierModalProps) => {
  const [selectedSupplier, setSelectedSupplier] = useState("");
  const [showNewSupplierForm, setShowNewSupplierForm] = useState(false);
  const [newSupplierName, setNewSupplierName] = useState("");
  const [newSupplierCategory, setNewSupplierCategory] = useState("");

  const existingSuppliers = [
    { id: "1", name: "Buffet Delícia", category: "Alimentação" },
    { id: "2", name: "Flores & Cia", category: "Decoração" },
    { id: "3", name: "DJ Som Perfeito", category: "Música" },
    { id: "4", name: "Fotógrafo Momentos", category: "Fotografia" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você adicionaria a lógica para salvar o fornecedor
    console.log("Fornecedor adicionado:", { selectedSupplier, newSupplierName, newSupplierCategory });
    onClose();
    setSelectedSupplier("");
    setShowNewSupplierForm(false);
    setNewSupplierName("");
    setNewSupplierCategory("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicionar Fornecedor</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="supplier-select">Selecionar Fornecedor</Label>
            <div className="flex space-x-2">
              <Select value={selectedSupplier} onValueChange={setSelectedSupplier}>
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Escolha um fornecedor..." />
                </SelectTrigger>
                <SelectContent>
                  {existingSuppliers.map((supplier) => (
                    <SelectItem key={supplier.id} value={supplier.id}>
                      {supplier.name} - {supplier.category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
       
            </div>
          </div>

          
          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit" disabled={!selectedSupplier && !newSupplierName}>
              Adicionar
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddSupplierModal;
