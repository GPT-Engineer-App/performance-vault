import React from 'react';
import { LightbulbIcon } from 'lucide-react';

const FunFactCard = ({ fact }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-start">
      <LightbulbIcon className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
      <p className="text-gray-700">{fact}</p>
    </div>
  );
};

export default FunFactCard;