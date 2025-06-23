import React from 'react';
import { Sheet, SheetContent, SheetHeader } from '../../baseComponents/sheet';
import { Avatar, AvatarFallback } from '../../baseComponents/avatar';
import { Badge } from '../../baseComponents/badge';
import { X, Pencil, Phone, Mail, MapPin, Instagram, Copy } from 'lucide-react';

import { Button } from '../../baseComponents/button';
import { Client } from '@/app/client/page';

interface ClientDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  client: Client | null;
  onEdit: (client: Client) => void;
}

const ClientDetails: React.FC<ClientDetailsProps> = ({ isOpen, onClose, client, onEdit }) => {
  if (!client) return null;

  const firstLetter = client.name.charAt(0).toUpperCase();

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md p-0">
        <SheetHeader className="flex flex-row items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <X className="w-5 h-5 cursor-pointer" onClick={onClose} />
            <h2 className="text-xl font-medium">Perfil do Cliente</h2>
          </div>
        </SheetHeader>

        <div className="p-6 bg-gray-50">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-14 w-14 bg-pink-100">
                <AvatarFallback className="text-gray-700 text-xl">{firstLetter}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-medium">
                  {client.name}
                  <span className="text-gray-400 text-sm ml-1">(você)</span>
                </h3>
                
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full"
              onClick={() => client && onEdit(client)}
            >
              <Pencil className="h-5 w-5" />
            </Button>
          </div>

          {client.number && (
            <div className="flex items-center justify-between py-4 border-b">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-500" />
                <span>{client.number}</span>
              </div>
              <Button variant="ghost" size="icon">
                <Copy className="h-5 w-5" />
              </Button>
            </div>
          )}

          {client.email && (
            <div className="flex items-center justify-between py-4 border-b">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-500" />
                <span>{client.email}</span>
              </div>
              <Button variant="ghost" size="icon">
                <Copy className="h-5 w-5" />
              </Button>
            </div>
          )}

          {client.adress && (
            <div className="flex items-center justify-between py-4 border-b">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-gray-500" />
                <span>{client.adress}</span>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ClientDetails;