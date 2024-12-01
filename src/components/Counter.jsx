import React from 'react';

const Counter = ({ boysCount, girlsCount }) => {

  const META = 150;
  const boysProgress = (boysCount / META) * 100;
  const girlsProgress = (girlsCount / META) * 100;

  return (
    <div className="flex justify-center items-center p-8 bg-gray-100 space-x-4">
      <div className="counter-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">👦 Regalos para Niños</h2>
        <p className="counter-number">{boysCount}</p>
        <p className="text-lg">Meta: {META}</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div className="bg-counter-primary h-2.5 rounded-full transition-all duration-500"
               style={{ width: `${boysProgress}%` }}></div>
        </div>
        <p className="text-sm text-gray-600 mt-1">{Math.round(boysProgress)}% completado</p>
      </div>
      
      <div className="counter-card">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">👧 Regalos para Niñas</h2>
        <p className="counter-number">{girlsCount}</p>
        <p className="text-lg">Meta: {META}</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div className="bg-counter-secondary h-2.5 rounded-full transition-all duration-500"
               style={{ width: `${girlsProgress}%` }}></div>
        </div>
        <p className="text-sm text-gray-600 mt-1">{Math.round(girlsProgress)}% completado</p>
      </div>
    </div>
  );
};

export default Counter;
