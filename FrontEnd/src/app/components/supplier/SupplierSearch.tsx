import React from 'react';
import { Search } from 'lucide-react';

interface SupplierSearchProps {
  supplierCount: number;
}

const SupplierSearch: React.FC<SupplierSearchProps> = ({ supplierCount }) => {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder={`Buscar entre ${supplierCount} fornecedor${supplierCount !== 1 ? 'es' : ''}`}
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
  );
};

export default SupplierSearch;
