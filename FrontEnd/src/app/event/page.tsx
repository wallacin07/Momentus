"use client"
import React, { useState } from 'react';
import Navigation from '../components/event/Navigation';
import SearchBar from '../components/event/SearchBar';
import AddEventCard from '../components/event/AddEventCard';
import EventCard from '../components/event/EventCard';
import EventForm from '../components/event/EventForm';  // importe seu formulário
import { AppLayout } from '../components/home/Layout/AppLayout';

const Index: React.FC = () => {
  // estado para controle do modal de criar evento
  const [showForm, setShowForm] = useState(false);
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "evigew & minharola",
      date: "10/10/00",
      location: "0 / 0",
      status: "Evento concluído",
      isMarried: true
    }
  ]);

  // abre o form
  const handleAddEvent = () => {
    setShowForm(true);
  };
  // fecha o form
  const handleCloseForm = () => {
    setShowForm(false);
  };
  // salva novo evento (só exemplo simples)
  const handleSaveEvent = (formData: any) => {
    const newEvent = {
      id: Date.now(),
      title: formData.client,      // adapte conforme seu EventForm
      date: formData.eventDate,
      location: formData.eventLocation,
      status: "Rascunho",
      isMarried: formData.eventType === "Casamento"
    };
    setEvents([...events, newEvent]);
    setShowForm(false);
  };

  return (
    <AppLayout>
      <div className="min-h-screen ">
        <Navigation />

        <div className="max-w-6xl mx-auto p-6">
          <SearchBar />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* passa a ação de abrir o form */}
            <AddEventCard onClick={handleAddEvent} />

            {events.map(event => (
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

          {/* renderiza o form quando showForm for true */}
          {showForm && (
            <EventForm
              onClose={handleCloseForm}
              onSave={handleSaveEvent} clients={[]}            />
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;
