import { FC } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EventCard, EventType, EventStatus } from './EventCard';
import { Card } from '@/components/ui/card';

interface EventsCarouselProps {
  title: string;
  events: Array<{
    id: string;
    title: string;
    date: string;
    type: EventType;
    status: EventStatus;
    client: string;
    imageUrl?: string;
  }>;
}

export const EventsCarousel: FC<EventsCarouselProps> = ({ title, events }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium">{title}</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <ChevronLeft size={18} />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight size={18} />
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <Card className="border-dashed flex flex-col items-center justify-center h-60 cursor-pointer hover:bg-muted/50 transition-colors">
          <div className="bg-muted rounded-full p-3">
            <Plus className="h-6 w-6 text-muted-foreground" />
          </div>
          <p className="mt-4 text-muted-foreground">Adicionar evento</p>
        </Card>
        
        {events.map(event => (
          <EventCard 
            key={event.id}
            title={event.title}
            date={event.date}
            type={event.type}
            status={event.status}
            client={event.client}
            imageUrl={event.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};