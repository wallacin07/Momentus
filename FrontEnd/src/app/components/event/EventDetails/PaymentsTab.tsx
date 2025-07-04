
import React, { useState } from 'react';
import { Plus, Search, Filter } from 'lucide-react';
import PaymentCard, { Payment } from './PaymentCard';
import PaymentModal from './PaymentModal';
import PaymentStats from './PaymentStats';
import { SupplierData } from '../../supplier/SupplierItem';

interface PaymentsTabProps {
  suppliers: SupplierData[];   // array, com o `[]`
}

const PaymentsTab: React.FC<PaymentsTabProps> = ({ suppliers }) => {
  const [payments, setPayments] = useState<Payment[]>([
    {
      id: '1',
      fromName: 'wdq',
      toName: 'Wallace',
      amount: 75,
      installments: 1,
      currentInstallment: 1,
      dueDate: '15/07/2025',
      status: 'pending',
      category: 'Casamento wdq & dwdw'
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const addPayment = (payment: Omit<Payment, 'id'>) => {
    const newPayment: Payment = {
      ...payment,
      id: Date.now().toString()
    };
    setPayments([...payments, newPayment]);
    setIsModalOpen(false);
  };

  const filteredPayments = payments.filter(payment =>
    payment.fromName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    payment.toName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    payment.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalAmount = payments.reduce((sum, payment) => sum + payment.amount, 0);
  const paidAmount = payments
    .filter(payment => payment.status === 'paid')
    .reduce((sum, payment) => sum + payment.amount, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header com informações promocionais */}
      <div className="bg-gradient-to-r from-pink-100 to-orange-100 border border-pink-200 rounded-lg mx-4 mt-4 p-6 relative">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <Plus className="w-5 h-5 rotate-45" />
        </button>
        
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Controle pagamentos ou faça cobranças recebendo em 1x com taxas mais baixas que as maquininhas
            </h2>
            <p className="text-gray-600 text-sm mb-4 max-w-2xl">
              Centralize todos os pagamentos em um só lugar, simplificando o controle financeiro. 
              Crie cobranças e envie links de pagamento ou controle o fluxo de pagamentos que já 
              ocorreram aos fornecedores do evento
            </p>
            <div className="flex gap-3">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Criar pagamento
              </button>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                <span className="w-4 h-4 rounded-full border-2 border-gray-400"></span>
                Como funciona
              </button>
            </div>
          </div>
          <div className="ml-6 text-right">
            <div className="text-2xl font-bold text-gray-800">R$500,00</div>
            <div className="text-sm text-gray-600">Entrada</div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <PaymentStats 
        totalPayments={payments.length}
        totalAmount={totalAmount}
        paidAmount={paidAmount}
      />

      {/* Search and Actions */}
      <div className="px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar pagamentos"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center gap-3 ml-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
            >
              <Plus className="w-5 h-5" />
              Adicionar pagamento
            </button>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors">
              Adicionar
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-800">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Payment Cards */}
        <div className="space-y-3">
          {filteredPayments.map((payment) => (
            <PaymentCard key={payment.id} payment={payment} />
          ))}
          
          {filteredPayments.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              {searchTerm ? 'Nenhum pagamento encontrado' : 'Nenhum pagamento cadastrado'}
            </div>
          )}
        </div>
      </div>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={addPayment} team={suppliers}      />
    </div>
  );
};

export default PaymentsTab;
