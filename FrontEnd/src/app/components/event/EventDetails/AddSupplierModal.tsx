"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/app/baseComponents/dialog";
import { Button } from "@/app/baseComponents/button";
import { Label } from "@/app/baseComponents/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/baseComponents/select";
import { SupplierData } from "../../supplier/SupplierItem";

interface AddSupplierModalProps {
  isOpen: boolean;
  suppliers: SupplierData[];
  onClose: () => void;
  onConfirm: (supplier: SupplierData) => void;
}

const AddSupplierModal = ({
  isOpen,
  onClose,
  suppliers,
  onConfirm,
}: AddSupplierModalProps) => {
  const [selectedSupplier, setSelectedSupplier] = useState<SupplierData | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedSupplier) {
      onConfirm(selectedSupplier);
      onClose();
      setSelectedSupplier(null);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicionar Fornecedor</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label>Selecionar Fornecedor</Label>
            <Select
              onValueChange={(value) => {
                const supplier = suppliers.find((s) => s.id.toString() === value);
                if (supplier) {
                  setSelectedSupplier(supplier);
                }
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Escolha um fornecedor..." />
              </SelectTrigger>
              <SelectContent>
                {suppliers.map((supplier) => (
                <SelectItem key={supplier.id} value={supplier.id.toString()}>
                  {supplier.name} - {supplier.description}
                </SelectItem>

                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit" disabled={!selectedSupplier}>
              Adicionar
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddSupplierModal;
