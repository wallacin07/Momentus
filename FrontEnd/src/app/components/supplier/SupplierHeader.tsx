import React from 'react';
import { ArrowLeft } from 'lucide-react';

const SupplierHeader: React.FC = () => {
  return (
    <div className="flex items-center gap-2 p-4 border-b">
      <h1 className="text-xl font-medium">Fornecedores</h1>
    </div>
  );
};

export default SupplierHeader;