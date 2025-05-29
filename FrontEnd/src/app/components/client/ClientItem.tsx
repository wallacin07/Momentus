import React from 'react';
import { Avatar, AvatarFallback } from "../../baseComponents/avatar";
import { ChevronRight } from 'lucide-react';
import { Badge } from '../../baseComponents/badge';
import { Client } from '@/app/client/page';


interface ClientItemProps {
  client: Client;
  onClick: (client: Client) => void;
}

const ClientItem: React.FC<ClientItemProps> = ({ client, onClick }) => {
  const firstLetter = client.name.charAt(0).toUpperCase();
  
  return (
    <div 
      className="flex items-center gap-4 border border-gray-200 p-4 rounded-lg cursor-pointer hover:bg-gray-50"
      onClick={() => onClick(client)}
    >
      <Avatar className="h-12 w-12 bg-pink-100">
        <AvatarFallback className="text-gray-700">{firstLetter}</AvatarFallback>
      </Avatar>
      <div className="flex-1 space-y-1">
        <div className="flex justify-between">
          <h3 className="font-medium">
            {client.name} {client.name} 
            <span className="text-gray-400 ml-1">(você)</span>
          </h3>
          <div className="flex items-center gap-2">
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientItem;