
import React from 'react';

const Navigation = () => {
  return (
    <nav className="flex gap-8 px-6 pt-6">
      <button className="pb-4 border-b-2 border-blue-600 text-blue-600 font-medium">
        Eventos
      </button>
      <button className="pb-4 border-b-2 border-transparent text-gray-500 hover:text-gray-700 transition-colors">
        Modelos
      </button>
    </nav>
  );
};

export default Navigation;