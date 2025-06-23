"use client"

import React, { useState } from 'react';
import { X, Calendar, Check } from 'lucide-react';
import axios from 'axios';

interface ClientFormProps {
  onClose: () => void;
  onSave: (formData: any) => void;
}

const ClientForm: React.FC<ClientFormProps> = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password:'',
    phone: '',
    email: '',
    birthDate: '',
    adress: '',
    cpf: '',

  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8080/client", {
      "name": formData.firstName + " " + formData.lastName,
      "email": formData.email,
      "password": formData.password,
      "CPF": formData.cpf,
      "birthDate": formData.birthDate,
      "adress":formData.adress,
      "number": formData.phone
    },
    {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    }})
    console.log(response.data)
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
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Senha
            </label>
            <div className="flex">
              <input
                type="text"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-r-md px-3 py-2"
              />
            </div>
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
            <label className="block text-sm font-medium text-gray-700 mb-1">
              E-mail para contato
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
              Data de nascimento
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
              Endereço
            </label>
            <div className="flex">
              <input
                type="text"
                name="adress"
                value={formData.adress}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-r-md px-3 py-2"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CPF
            </label>
            <div className="flex">
              <input
                type="text"
                name="cpf"
                placeholder='123.456.789-00'
                value={formData.cpf}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-r-md px-3 py-2"
              />
            </div>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-soft-black text-black py-3 rounded-xl border-2 hover:bg-gray-100"
        >
          Salvar <Check className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default ClientForm;