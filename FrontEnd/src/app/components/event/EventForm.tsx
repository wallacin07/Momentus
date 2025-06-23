// src/components/event/EventForm.tsx
"use client";
import React, { useState } from 'react';
import { X, Calendar, Heart, Plus } from 'lucide-react';
import axios from 'axios';
import { ClientEventData } from '../../types/types';

interface EventFormProps {
  onClose: () => void;
  onSave: () => void;
  clients: ClientEventData[];
}

const EventForm: React.FC<EventFormProps> = ({ onClose, onSave, clients }) => {
  console.log(clients)
  const [formData, setFormData] = useState({
    eventType: 'Casamento',
    client: '',
    eventDate: '',
    eventLocation: '',
    budget: '0,00',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/event', {
      description: formData.eventType,
      name: `${formData.eventType}`,
      date: formData.eventDate,
      status: formData.eventType,
      clientId: Number(formData.client),
      ceremonialistId: 1,
    },{
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    }});
    onSave();
  };

  return (
    <div className="fixed inset-y-0 right-0 w-full sm:w-[500px] bg-white shadow-xl z-50 overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-medium">Criar evento</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Info banner */}
      <div className="p-4 bg-gray-50 text-gray-600 text-sm border-b">
        <p>
          Vamos utilizar essas informações para criar o site do evento em{' '}
          <span className="font-medium">modo rascunho</span> até o cliente finalizar o cadastro na Wedy.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        {/* Tipo do evento */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tipo do evento</label>
          <div className="relative">
            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none"
            >
              <option value="Casamento">Casamento</option>
              <option value="Aniversário">Aniversário</option>
              <option value="Formatura">Formatura</option>
              <option value="Outro">Outro</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <Heart className="h-5 w-5 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Cliente */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Cliente</label>
          <div className="flex items-center">
            <select
              name="client"
              value={formData.client}
              onChange={handleChange}
              className="flex-1 border-2 border-dashed border-gray-300 rounded-md px-3 py-2 bg-white appearance-none"
            >
              <option value="">Adicione um cliente</option>
              {clients.map(c => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
            <button type="button" className="ml-2 w-10 h-10 rounded-md border bg-white hover:bg-gray-50">
              <Plus className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Data do evento */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Data do evento</label>
          <div className="relative">
            <input
              type="text"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              placeholder="dd/mm/yyyy"
              className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        <button type="submit" className="w-full bg-black text-white py-3 rounded-md">
          Continuar →
        </button>
      </form>
    </div>
  );
};

export default EventForm;
