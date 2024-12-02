import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const Counter = ({ boysCount = 0, girlsCount = 0, genericCount = 0, gifts = [] }) => {
  const META = 10;
  const boysProgress = (boysCount / META) * 100;
  const girlsProgress = (girlsCount / META) * 100;
  const genericProgress = (genericCount / META) * 100;

  const [hoveredGender, setHoveredGender] = useState(null);

  const boysGifts = gifts?.filter(gift => gift.Genero === 'Masculino') || [];
  const girlsGifts = gifts?.filter(gift => gift.Genero === 'Femenino') || [];
  const genericGifts = gifts?.filter(gift => gift.Genero === 'Generico') || [];

  useEffect(() => {
    if (boysCount >= META || girlsCount >= META || genericCount >= META) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [boysCount, girlsCount, genericCount]);

  return (
    <div className="px-4 py-8  font-oswald">
      <div className="flex flex-row gap-8 max-w-full mx-auto">
        <div
          className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full border-t-4 border-counter-primary"
          onMouseEnter={() => setHoveredGender('Masculino')}
          onMouseLeave={() => setHoveredGender(null)}
        >
          <h2 className="text-2xl font-bold text-counter-primary mb-2">👦 Regalos para Niños</h2>
          <p className="counter-number text-4xl font-bold animate-bounce text-counter-primary">{boysCount}</p>
          <p className="text-lg text-counter-primary">Meta: {META}</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div
              className="bg-counter-primary h-2.5 animate-pulse rounded-full transition-all duration-500"
              style={{ width: `${boysProgress}%` }}
            ></div>
          </div>
          <p className="text-sm text-black mt-1 animate-pulse">{Math.round(boysProgress)}% completado</p>
          {hoveredGender === 'Masculino' && (
            <div className="absolute left-0 mt-4 bg-white p-4 rounded-lg shadow-lg w-full z-10">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 shadow-2xl ">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider ">Juguete</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Donante</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {boysGifts.map(gift => (
                    <tr key={gift.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left" >🎁 {gift.Juguete}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-left">🎅🏼 {gift.Nombre || 'Anónimo'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div
          className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full border-t-4 border-segundo-color"
          onMouseEnter={() => setHoveredGender('Femenino')}
          onMouseLeave={() => setHoveredGender(null)}
        >
          <h2 className="text-2xl font-bold text-segundo-color mb-2">👧 Regalos para Niñas</h2>
          <p className="counter-number text-4xl font-bold text-secundary-color">{girlsCount}</p>
          <p className="text-lg text-segundo-color">Meta: {META}</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div 
              className="bg-segundo-color h-2.5 rounded-full transition-all duration-500 text-left"
              style={{ width: `${girlsProgress}%` }}
            ></div>
          </div>
          <p className="text-sm text-black mt-1">{Math.round(girlsProgress)}% completado</p>
          {hoveredGender === 'Femenino' && (
            <div className="absolute left-0 mt-4 bg-white p-4 rounded-lg shadow-lg w-full z-10">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Juguete</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Donante</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {girlsGifts.map(gift => (
                    <tr key={gift.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left">🎁 {gift.Juguete}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-left">🎅🏼 {gift.Nombre || 'Anónimo'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* <div
          className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full border-t-4 border-generic-color"
          onMouseEnter={() => setHoveredGender('Generico')}
          onMouseLeave={() => setHoveredGender(null)}
        >
          <h2 className="text-2xl font-bold text-generic-color mb-2">🤖 Regalos Genéricos</h2>
          <p className="counter-number text-4xl font-bold text-generic-color">{genericCount}</p>
          <p className="text-lg text-generic-color">Meta: {META}</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div 
              className="bg-generic-color h-2.5 rounded-full transition-all duration-500 text-left"
              style={{ width: `${genericProgress}%` }}
            ></div>
          </div>
          <p className="text-sm text-black mt-1">{Math.round(genericProgress)}% completado</p>
          {hoveredGender === 'Generico' && (
            <div className="absolute left-0 mt-4 bg-white p-4 rounded-lg shadow-lg w-full z-10">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Juguete</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Donante</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {genericGifts.map(gift => (
                    <tr key={gift.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left">🎁 {gift.Juguete}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-left">🎅🏼 {gift.Nombre || 'Anónimo'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Counter;
