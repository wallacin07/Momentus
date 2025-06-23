import React from 'react';
import { ArrowLeft } from 'lucide-react';

const ClientHeader: React.FC = () => {
  return (
    <div className="flex items-center gap-2 p-4 border-b">
      <h1 className="text-xl font-medium">Clientes</h1>
    </div>
  );
};

export default ClientHeader;