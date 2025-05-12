import { FC } from 'react';
import { Badge } from '../../../baseComponents/badge';
import { Card } from '../../../baseComponents/card';

export type EventType = 'casamento' | 'formatura' | '15anos' | 'outro';
export type EventStatus = 'pendente' | 'concluido' | 'contrato' | 'cancelado';

interface EventCardProps {
  title: string;
  date: string;
  type: EventType;
  status: EventStatus;
  client: string;
  imageUrl?: string;
}

export const EventCard: FC<EventCardProps> = ({
  title,
  date,
  type,
  status,
  client,
  imageUrl = '/placeholder.svg'
}) => {
  const getTypeColor = () => {
    switch (type) {
      case 'casamento': return 'bg-wedding text-white';
      case 'formatura': return 'bg-graduation text-white';
      case '15anos': return 'bg-birthday text-white';
      default: return 'bg-event text-white';
    }
  };

  const getTypeLabel = () => {
    switch (type) {
      case 'casamento': return 'Casamento';
      case 'formatura': return 'Formatura';
      case '15anos': return '15 anos';
      default: return 'Evento';
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'concluido': return 'bg-green-100 text-green-800 border-green-300';
      case 'contrato': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'pendente': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'cancelado': return 'bg-red-100 text-red-800 border-red-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getStatusLabel = () => {
    switch (status) {
      case 'concluido': return 'Concluído';
      case 'contrato': return 'Contrato assinado';
      case 'pendente': return 'Pendente';
      case 'cancelado': return 'Cancelado';
      default: return 'Status';
    }
  };
  
  return (
    <Card className="overflow-hidden flex flex-col border group hover:shadow-md transition-all">
      <div className="relative h-40 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
        <Badge className={`absolute top-2 right-2 ${getStatusColor()}`}>
          {getStatusLabel()}
        </Badge>
        <Badge className={`absolute top-2 left-2 ${getTypeColor()}`}>
          {getTypeLabel()}
        </Badge>
      </div>
      <div className="p-3">
        <h3 className="font-medium line-clamp-1">{client}</h3>
        <h4 className="text-sm text-muted-foreground line-clamp-1">{title}</h4>
        <p className="text-xs mt-2">Ocorrerá em {date}</p>
      </div>
    </Card>
  );
};