
import React from 'react';
import { ArrowRight, Link, MoreHorizontal } from 'lucide-react';


export interface Payment {
  id: string;
  Client: string;
  Receiver: string;
  amount: number;
  installments: number;
  currentInstallment: number;
  dueDate: string;
  status: "pending";
  category: string;
}

interface PaymentCardProps {
  payment: Payment;
}

const PaymentCard = ({ payment }: PaymentCardProps) => {
  const formatDate = (dateString: string) => {
    return dateString;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'text-green-600';
      case 'overdue':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          {/* Date */}
          <div className="text-sm text-gray-500 min-w-[80px]">
            📅 {formatDate(payment.dueDate)}
          </div>

          {/* Payment Flow */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
           
              <span className="font-medium text-gray-800">{payment.Client}</span>
            </div>
            
            <ArrowRight className="w-4 h-4 text-gray-400" />
            
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-800">{payment.Receiver}</span>
            </div>
          </div>

          {/* Category */}
          <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className="text-l text-black">Status:</span>
            <div className="w-auto h-4 bg-blue-100 rounded flex items-center justify-center">
              <span className="text-blue-600 text-xs">{payment.status}</span>
            </div>
            <span>{payment.category}</span>
          </div>
        </div>

        {/* Amount and Actions */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="font-semibold text-gray-800">R$ {payment.amount}</div>
            {payment.installments >= 1 && (
              <div className="text-xs text-gray-500">
                {payment.currentInstallment}/{payment.installments} parcelas
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-2">

      
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
