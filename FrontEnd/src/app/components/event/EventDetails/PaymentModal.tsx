
import React, { useState } from 'react';
import { X, Plus, HelpCircle, ArrowRight } from 'lucide-react';
import { Payment } from './PaymentCard';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/baseComponents/select';
import { SupplierData } from '../../supplier/SupplierItem';

interface PaymentModalProps {
  team: SupplierData[];  
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (payment: Omit<Payment, 'id'>) => void;
}

const PaymentModal = ({team, isOpen, onClose, onSubmit }: PaymentModalProps) => {
  const [formData, setFormData] = useState({
    amount: '',
    installments: '1',
    fromName: '',
    toName: '',
    dueDate: '',
    category: ''
  });

  const [showPaymentConditions, setShowPaymentConditions] = useState(false);
  const [showLinkTask, setShowLinkTask] = useState(false);
  const [showReceiver, setShowReceiver] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.amount || !formData.fromName || !formData.toName || !formData.dueDate) {
      return;
    }

    onSubmit({
      Client: formData.fromName,
      Receiver: formData.toName,
      amount: parseFloat(formData.amount),
      installments: parseInt(formData.installments),
      currentInstallment: 1,
      dueDate: formData.dueDate,
      status: "pending",
      category: formData.category || 'Sem categoria'
    });

    // Reset form
    setFormData({
      amount: '',
      installments: '1',
      fromName: '',
      toName: '',
      dueDate: '',
      category: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Criando pagamento</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Condições de pagamento */}
          <div>   
              <div className="mt-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Valor do pagamento
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.amount}
                    onChange={(e) => handleInputChange('amount', e.target.value)}
                    placeholder="R$ 0,00"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
                      </div>


          <div>

            
 

      
              <div className="mt-4">
                                  <label className="block text-sm font-medium text-gray-700 mb-2">
                   Quantidade de parcelas
                  </label>
                <input
                  type="number"
                  min="1"
                  value={formData.installments}
                  onChange={(e) => handleInputChange('installments', e.target.value)}
                  placeholder="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                
              </div>

          </div>

          {/* Parte pagante */}
          <div>
            <span className="font-medium text-gray-800">Vencimento da parcela</span>
            <div className="mt-2 space-y-3">
              <input
                type="date"
                value={formData.dueDate}
                onChange={(e) => handleInputChange('dueDate', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
              
            
            </div>
          </div>

          {/* Parte recebedora */}
        <div>

  </div>

    <div className="mt-4 space-y-3">
    <span className="font-medium text-gray-800">Parte recebedora</span>
      {/* SELECT DE FORNECEDORES */}
      <Select
        value={formData.toName}
        onValueChange={(val) => handleInputChange('toName', val)}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Escolha um fornecedor..." />
        </SelectTrigger>
        <SelectContent>
          {team.map((s) => (
            <SelectItem key={s.id} value={s.id.toString()}>
              {s.name} – {s.description}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

    </div>
  


        

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
          >
            Criar pagamento
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;
