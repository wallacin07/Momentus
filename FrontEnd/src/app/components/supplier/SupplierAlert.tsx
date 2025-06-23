import React from 'react';
import { X } from 'lucide-react';
import { Button } from "../../baseComponents/button";

interface SupplierAlertProps {
  onClose: () => void;
  onAddClient: () => void;
}

const SupplierAlert: React.FC<SupplierAlertProps> = ({ onClose, onAddClient }) => {
  return (
    <div className="bg-cream rounded-lg p-6 relative mb-6">
      <button 
        onClick={onClose} 
        className="absolute right-4 top-4 text-gray-700 hover:text-gray-900"
      >
        <X className="w-5 h-5" />
      </button>
      
      <div className="max-w-2xl">
        <h2 className="text-xl font-medium text-amber-800 mb-2">
          Cadastre clientes, controle as etapas do funil de vendas e otimize processos
        </h2>
        
        <p className="text-gray-700 mb-6">
          Adicione seus leads e acompanhe todo o processo de aquisição de novos clientes de 
          perto. Depois do cadastro, simplifique a criação de orçamentos, eventos, contratos e 
          pagamentos.
        </p>
        
        <Button 
          onClick={onAddClient} 
          className="bg-soft-black text-white hover:bg-gray-900 w-full md:w-auto flex items-center justify-center gap-2 py-6"
        >
          <span className="text-xl font-bold">+</span>
          <span>Adicionar cliente</span>
        </Button>
      </div>
    </div>
  );
};

export default SupplierAlert;
