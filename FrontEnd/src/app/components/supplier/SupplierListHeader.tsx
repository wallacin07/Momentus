
import React from 'react';
import { Button } from "../../baseComponents/button";
import { Plus } from 'lucide-react';

interface ClientListHeaderProps {
  onAddClick: () => void;
}

const SupplierListHeader: React.FC<ClientListHeaderProps> = ({ onAddClick }) => {
  return (
    <div className="flex justify-between items-center mb-6 hover:bg-gray-200 p-6 rounded-md" onClick={onAddClick}>
      <div className="flex items-center gap-2 text-gray-600">
        <Plus className="h-5 w-5" />
        <span>Novo Fornecedor</span>
      </div>
      <Button 
        className="bg-black text-white text-sm hover:bg-gray-800"
      >
        Adicionar
      </Button>
    </div>
  );
};

export default SupplierListHeader;