import React from 'react';
import { Calendar, MapPin, Heart } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  status: string;
  isMarried?: boolean;
}

const EventCard = ({ title, date, location, status, isMarried = false }: EventCardProps) => {
  return (
    <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-6 text-white shadow-lg min-h-[200px] flex flex-col justify-between">
      {/* Header with heart icon for married couples */}
      <div className="flex justify-between items-start mb-4">
        {isMarried && (
          <div className="flex items-center gap-1 bg-black/20 px-3 py-1 rounded-full text-sm">
            <Heart className="w-4 h-4 fill-current" />
            <span>Casamento</span>
          </div>
        )}
        <div className="flex items-center gap-1 bg-yellow-500/30 px-2 py-1 rounded text-xs">
          <span>⚠️ Site sem cadastro</span>
        </div>
      </div>

      {/* Event details */}
      <div className="space-y-2">
        <h3 className="font-bold text-lg">{title}</h3>
        <div className="flex items-center gap-2 text-sm opacity-90">
          <Calendar className="w-4 h-4" />
          <span>Ocorreu em {date}</span>
        </div>
        <div className="flex items-center gap-2 text-sm opacity-90">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
        <div className="text-sm font-medium">
          {status}
        </div>
      </div>
    </div>
  );
};

export default EventCard;