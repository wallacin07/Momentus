import React from 'react';
import { Search, Settings } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Buscar em 1 evento"
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <button className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
        <Settings className="w-5 h-5 text-gray-600" />
        <span className="sr-only">Configurações</span>
      </button>
    </div>
  );
};

export default SearchBar;