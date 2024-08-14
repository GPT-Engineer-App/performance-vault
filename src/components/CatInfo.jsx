import React from 'react';
import { Cat } from 'lucide-react';

const CatInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-8">
      <h2 className="text-3xl font-bold mb-4 flex items-center">
        <Cat className="mr-2 h-8 w-8" />
        About Cats
      </h2>
      <p className="text-gray-700 mb-4">
        Cats, also known as domestic cats or house cats, are small carnivorous mammals that have been living alongside humans for thousands of years. They are known for their independent nature, playful behavior, and affectionate companionship.
      </p>
      <p className="text-gray-700 mb-4">
        There are many different breeds of cats, each with their own unique characteristics and appearances. From the fluffy Persian to the sleek Siamese, cats come in a wide variety of colors, patterns, and sizes.
      </p>
      <p className="text-gray-700">
        Cats are beloved pets in many households around the world, providing companionship, entertainment, and even health benefits to their owners. Their purring is known to have therapeutic effects, and caring for a cat can help reduce stress and anxiety.
      </p>
    </div>
  );
};

export default CatInfo;