import React from 'react';
import { Calendar, MapPin, Heart, User } from 'lucide-react';

interface EventCardProps {
  name: string;
  date: string;
  client: {id:number, name: string};
  status: string;
  description: string;
}


function formatDateToDDMMYYYY(isoString: string | number | Date) {
  const date = new Date(isoString);

  // Extrai dia, mês e ano
  const day   = date.getUTCDate();
  const month = date.getUTCMonth() + 1; // Note: meses vão de 0 a 11
  const year  = date.getUTCFullYear();

  // Função auxiliar para zerar à esquerda
  const pad = (num: number) => num.toString().padStart(2, '0');

  return `${pad(day)}/${pad(month)}/${year}`;
}

const EventCard = ({ name, date, client, status, description}: EventCardProps) => {
  return (
    <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-6 text-white shadow-lg min-h-[200px] flex flex-col justify-between">
      {/* Header with heart icon for married couples */}
      <div className="flex justify-between items-start mb-4">
      </div>

      {/* Event details */}
      <div className="space-y-2">
        <h3 className="font-bold text-lg">{name} - {client.name}</h3>
        <div className="flex items-center gap-2 text-sm opacity-90">
          <Calendar className="w-4 h-4" />
          <span>Ocorreu em {formatDateToDDMMYYYY(date)}</span>
        </div>
        <div className="flex items-center gap-2 text-sm opacity-90">
          <User className="w-4 h-4" />
          <span>{client.name}</span>
        </div>
        <div className="text-sm font-medium">
          {status}
        </div>
      </div>
    </div>
  );
};

export default EventCard;