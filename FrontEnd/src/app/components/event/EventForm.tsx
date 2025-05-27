"use client"

import React, { useState } from 'react';
import { X, Calendar, Heart, Plus } from 'lucide-react';

interface EventFormProps {
  onClose: () => void;
  onSave: (formData: any) => void;
  clients: { id: string; name: string }[];
}

const EventForm: React.FC<EventFormProps> = ({ onClose, onSave, clients }) => {
  const [formData, setFormData] = useState({
    eventType: 'Casamento',
    client: '',
    partner: '',
    eventDate: '',
    eventLocation: '',
    budget: '0,00',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
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
          Vamos utilizar as informações para criar o Site do evento que ficará em
          <span className="font-medium"> modo rascunho </span>até o cliente finalizar o cadastro na Wedy.
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
              className="flex-1 border-2 border-dashed border-gray-300 rounded-md px-3 py-2 bg-white text-gray-400 appearance-none"
            >
              <option value="">{formData.client ? '' : 'Adicione um cliente'}</option>
              {clients.map(c => (
                <option key={c.id} value={c.id} className="text-black">
                  {c.name}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => {/* abre modal de novo cliente */}}
              className="ml-2 inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 bg-white hover:bg-gray-50"
            >
              <Plus className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Companheiro(a) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Companheiro(a) do(a) cliente</label>
          <input
            type="text"
            name="partner"
            value={formData.partner}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>

        {/* Data do evento */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Data do evento <span className="text-gray-400 text-xs">(Opcional)</span>
          </label>
          <div className="relative">
            <input
              type="text"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              placeholder="Se preferir, digite a data"
              className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Local do evento */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Local do evento <span className="text-gray-400 text-xs">(Opcional)</span>
          </label>
          <input
            type="text"
            name="eventLocation"
            value={formData.eventLocation}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>

        {/* Teto de gastos */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Teto de gastos do evento <span className="text-gray-400 text-xs">(Opcional)</span>
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md text-gray-600">
              R$
            </span>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="0,00"
              className="w-full border border-gray-300 rounded-r-md px-3 py-2"
            />
          </div>
        </div>

        {/* Botão Continuar */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 rounded-md hover:bg-gray-800"
        >
          Continuar →
        </button>
      </form>
    </div>
  );
};

export default EventForm;
