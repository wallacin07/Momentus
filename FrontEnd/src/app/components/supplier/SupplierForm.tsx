import React, { useState } from 'react';
import { X, Calendar, Check } from 'lucide-react';
import { Description } from '@radix-ui/react-dialog';
import axios from 'axios';

interface SupplierFormProps {
  onClose: () => void;
  onSave: (formData: any) => void;
}

const SupplierForm: React.FC<SupplierFormProps> = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    Name: '',
    phone: '',
    email: '',
    adress: '',
    description: '',
    cnpj: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
      const response = await axios.post("http://localhost:8080/supplier", {
      "name": formData.Name,
      "email": formData.email,
      "number": formData.phone,
      "adress":formData.adress,
      "description": formData.description,
      "CNPJ": formData.cnpj,
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
        <h2 className="text-xl font-medium">Adicionar Fornecedor</h2>
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
            <label className="block text-sm font-medium text-gray-700 mb-1">Nome do fornecedor</label>
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Telefone para contato</label>
            <div className="flex">
              <div className="inline-flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                BR+55
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
              Endereço
            </label>
            <div className="flex">
              <input
                type="text"
                name="adress"
                value={formData.adress}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Descrição
            </label>
            <div className="flex">
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>
          
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                CNPJ
            </label>
            <div className="flex">
              <input
                type="text"
                name="cnpj"
                value={formData.cnpj}
                onChange={handleChange}
                placeholder="00.000.000/0000-01"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-soft-black text-black py-3 border-2 border-black rounded-md hover:bg-gray-100"
        >
          Salvar <Check className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default SupplierForm;