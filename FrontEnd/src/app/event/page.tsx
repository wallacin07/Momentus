// src/app/event/page.tsx
"use client";
import React, { useEffect, useState } from 'react';
import Navigation from '../components/event/Navigation';
import SearchBar from '../components/event/SearchBar';
import AddEventCard from '../components/event/AddEventCard';
import EventCard from '../components/event/EventCard';
import EventForm from '../components/event/EventForm';
import { AppLayout } from '../components/home/Layout/AppLayout';
import axios from 'axios';
import { Client, Event, ClientEventData } from '../types/types';

const Index: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [clientsData, setClientsData] = useState<ClientEventData[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {

    const clientes = await axios.get('http://localhost:8080/client',{
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    }})
      setClients(clientes.data)

  const eventsRes = await axios.get('http://localhost:8080/event',{
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    }})
        console.log(clients)

        // mapeia apenas id e name
       
        console.log(clientsData)
        setEvents(eventsRes.data);
      } catch (err) {
        console.error('Erro ao buscar dados:', err);
      }
    };

    fetchData();
  }, []);

    useEffect(() => {
     setClientsData(
          clients.map(c => ({ id: c.id, name: c.name }))
        );
  }, [clients]);

      useEffect(() => {

  }, [events]);

  const handleAddEvent = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);
  const handleSaveEvent = () => setShowForm(false);

  return (
    <AppLayout>
      <div className="min-h-screen">
        <Navigation />
        <div className="max-w-6xl mx-auto p-6">
          <SearchBar />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <AddEventCard onClick={handleAddEvent} />
            {events.map(evt => (
              <EventCard
                key={evt.id}
                name={evt.name}
                date={evt.date}
                client={evt.client}
                status={evt.status}
                description={evt.description}
              />
            ))}
          </div>

          {showForm && (
            <EventForm
              onClose={handleCloseForm}
              onSave={handleSaveEvent}
              clients={clientsData}
            />
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;
