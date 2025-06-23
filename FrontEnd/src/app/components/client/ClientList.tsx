import React from 'react';
import ClientListHeader from './ClientListHeader';
import ClientSearch from './ClientSearch';
import ClientItem from './ClientItem';
import { Client } from '@/app/client/page';

interface ClientListHeaderProps {
  clients: Client[];
  onClientClick: (client: Client) => void;
}

const ClientList: React.FC<ClientListHeaderProps> = ({clients, onClientClick}) => {

if (clients.length > 0) {
    return (
      <div className="mt-6 space-y-4">
        {clients.map((client) => (
          <ClientItem key={client.id} client={client} onClick={onClientClick} />
        ))}
      </div>
    );
  }

  return (
    <div className="mt-8 space-y-6 border-solid border-gray-100 rounded-xl p-4 border-2">

      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex items-center gap-4 border border-dashed border-gray-300 p-4 rounded-lg">
          <div className="w-10 h-10 rounded-full bg-gray-200"></div>
          <div className="flex-1">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-3 bg-gray-100 rounded w-1/2 mt-2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClientList;