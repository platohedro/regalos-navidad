
import React, { useState, useEffect } from 'react';
import { pb } from './services/pocketbase';
import Counter from './components/Counter';
import GiftForm from './components/GiftForm';
import GiftList from './components/GiftList';
import './App.css';

function App() {
  const [gifts, setGifts] = useState([]);
  const [boysCount, setBoysCount] = useState(0);
  const [girlsCount, setGirlsCount] = useState(0);

  useEffect(() => {
    loadGifts();
  }, []);

  const loadGifts = async () => {
    try {
      const records = await pb.collection('gifts').getFullList();
      setGifts(records);
      
      // Actualizar contadores
      const boys = records.filter(gift => gift.Genero === 'Masculino').length;
      const girls = records.filter(gift => gift.Genero === 'Femenino').length;
      
      setBoysCount(boys);
      setGirlsCount(girls);
    } catch (error) {
      console.error('Error loading gifts:', error);
    }
  };

  const handleGiftSubmit = async (giftData) => {
    try {
      // Validar límites
      if (giftData.Generoo === 'Masculino' && boysCount >= 40) {
        alert('Ya se han registrado 40 regalos para niños');
        return;
      }
      if (giftData.Generoo === 'Femenino' && girlsCount >= 40) {
        alert('Ya se han registrado 40 regalos para niñas');
        return;
      }

      // Crear regalo
      await pb.collection('gifts').create(giftData);
      
      // Recargar datos
      loadGifts();
    } catch (error) {
      console.error('Error creating gift:', error);
    }
  };

  return (
    <div className="App">
      <h1>Campaña de Regalos Solidarios</h1>
      <Counter boysCount={boysCount} girlsCount={girlsCount} />
      <GiftForm onGiftSubmit={handleGiftSubmit} />
      <GiftList gifts={gifts} />
    </div>
  );
}

export default App;

