"use client"

import React, { useState } from 'react';
import { X, Calendar, Check } from 'lucide-react';

interface ClientFormProps {
  onClose: () => void;
  onSave: (formData: any) => void;
}

const ClientForm: React.FC<ClientFormProps> = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    status: 'Sem status',
    email: '',
    birthDate: '',
    instagram: '',
    eventDate: '',
    value: ''
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
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-medium">Adicionar cliente</h2>
        <button 
          onClick={onClose} 
          className="text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Primeiro nome</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sobrenome <span className="text-gray-400 text-xs">(Opcional)</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Telefone para contato</label>
            <div className="flex">
              <div className="inline-flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                BR +55
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-r-md px-3 py-2"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="Sem status">Sem status</option>
              <option value="Lead">Lead</option>
              <option value="Negociação">Negociação</option>
              <option value="Fechado">Fechado</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              E-mail para contato <span className="text-gray-400 text-xs">(Opcional)</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Data de nascimento <span className="text-gray-400 text-xs">(Opcional)</span>
            </label>
            <div className="relative">
              <input
                type="text"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                placeholder="Se preferir, digite a data"
                className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <Calendar className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Instagram <span className="text-gray-400 text-xs">(Opcional)</span>
            </label>
            <div className="flex">
              <div className="inline-flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                @
              </div>
              <input
                type="text"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-r-md px-3 py-2"
              />
            </div>
          </div>
          
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
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Valor <span className="text-gray-400 text-xs">(Opcional)</span>
            </label>
            <div className="flex">
              <div className="inline-flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                R$
              </div>
              <input
                type="text"
                name="value"
                value={formData.value}
                onChange={handleChange}
                placeholder="0,00"
                className="w-full border border-gray-300 rounded-r-md px-3 py-2"
              />
            </div>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-soft-black text-black py-3 rounded-md hover:bg-gray-100"
        >
          Salvar <Check className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default ClientForm;