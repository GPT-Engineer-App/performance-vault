import React from 'react';
import CatHero from '../components/CatHero';
import CatInfo from '../components/CatInfo';
import FunFactCard from '../components/FunFactCard';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <CatHero />
      <div className="container mx-auto px-4 py-8">
        <CatInfo />
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Fun Cat Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FunFactCard fact="Cats sleep for about 70% of their lives" />
            <FunFactCard fact="A group of cats is called a 'clowder'" />
            <FunFactCard fact="Cats have over 20 different vocalizations" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;