import React from 'react';
import { Plus } from 'lucide-react';

interface AddEventCardProps {
  onClick: () => void;
}

const AddEventCard: React.FC<AddEventCardProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="border-2 border-dashed border-gray-300 rounded-2xl p-8 min-h-[200px] flex flex-col items-center justify-center text-gray-500 hover:border-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
    >
      <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center mb-4">
        <Plus className="w-6 h-6" />
      </div>
      <span className="text-lg font-medium">Adicionar evento</span>
    </div>
  );
};

export default AddEventCard;
