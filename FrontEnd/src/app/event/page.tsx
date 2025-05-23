import React from 'react';
import Navigation from '../components/event/Navigation';
import SearchBar from '../components/event/SearchBar';
import AddEventCard from '../components/event/AddEventCard';
import EventCard from '../components/event/EventCard';
import { AppLayout } from '../components/home/Layout/AppLayout';


const Index = () => {
  // Dados de exemplo para os eventos
  const events = [
    {
      id: 1,
      title: "evigew & minharola",
      date: "10/10/00",
      location: "0 / 0",
      status: "Evento concluído",
      isMarried: true
    }
  ];

  return (
    <AppLayout>

    <div className="min-h-screen ">

      <Navigation />
      <div className="max-w-6xl mx-auto p-6">
        <SearchBar />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <AddEventCard />
          {events.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              date={event.date}
              location={event.location}
              status={event.status}
              isMarried={event.isMarried}
            />
          ))}
        </div>
        

      </div>
    </div>

    </AppLayout>
      
  );
};

export default Index;