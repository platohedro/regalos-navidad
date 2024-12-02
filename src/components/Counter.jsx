import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const Counter = ({ boysCount = 0, girlsCount = 0, gifts = [] }) => {
  const META = 10;
  const boysProgress = (boysCount / META) * 100;
  const girlsProgress = (girlsCount / META) * 100;

  const [hoveredGender, setHoveredGender] = useState(null);

  const boysGifts = gifts?.filter(gift => gift.Genero === 'Masculino') || [];
  const girlsGifts = gifts?.filter(gift => gift.Genero === 'Femenino') || [];

  useEffect(() => {
    if (boysCount >= META || girlsCount >= META) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [boysCount, girlsCount]);

  return (
    <div className="px-4 py-8 bg-gray-100">
      <div className="flex flex-row gap-8 max-w-full mx-auto">
        <div
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full border-t-4 border-blue-500"
          onMouseEnter={() => setHoveredGender('Masculino')}
          onMouseLeave={() => setHoveredGender(null)}
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-2">👦 Regalos para Niños</h2>
          <p className="counter-number text-4xl font-bold text-blue-800">{boysCount}</p>
          <p className="text-lg text-blue-600">Meta: {META}</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div
              className="bg-blue-500 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${boysProgress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-1">{Math.round(boysProgress)}% completado</p>
          {hoveredGender === 'Masculino' && (
            <ul className="mt-4">
              {boysGifts.map(gift => (
                <li key={gift.id} className="text-blue-600">
                  🎯 {gift.Juguete}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full border-t-4 border-fuchsia-500"
          onMouseEnter={() => setHoveredGender('Femenino')}
          onMouseLeave={() => setHoveredGender(null)}
        >
          <h2 className="text-2xl font-bold text-fuchsia-600 mb-2">👧 Regalos para Niñas</h2>
          <p className="counter-number text-4xl font-bold text-fuchsia-800">{girlsCount}</p>
          <p className="text-lg text-fuchsia-600">Meta: {META}</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div
              className="bg-fuchsia-500 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${girlsProgress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-1">{Math.round(girlsProgress)}% completado</p>
          {hoveredGender === 'Femenino' && (
            <ul className="mt-4">
              {girlsGifts.map(gift => (
                <li key={gift.id} className="text-fuchsia-600">
                  🎯 {gift.Juguete}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Counter;