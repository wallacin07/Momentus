
import React from 'react';

interface PaymentStatsProps {
  totalPayments: number;
  totalAmount: number;
  paidAmount: number;
}

const PaymentStats = ({ totalPayments, totalAmount, paidAmount }: PaymentStatsProps) => {
  return (
    <div className="px-4 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div>
            <div className="text-2xl font-bold text-gray-800">
              R$ {paidAmount} <span className="text-lg font-normal">pago de</span> R$ {totalAmount}
            </div>
          </div>
          <div className="flex gap-6 text-sm text-gray-600">
            <div>
              <span className="font-medium">{totalPayments}</span>
              <br />
              Pagamentos criados
            </div>
            <div>
              <span className="font-medium">0 de {totalPayments}</span>
              <br />
              Parcelas pagas
            </div>
          </div>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-orange-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${totalAmount > 0 ? (paidAmount / totalAmount) * 100 : 0}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PaymentStats;
