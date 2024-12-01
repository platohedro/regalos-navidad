import React, { useEffect, useState } from 'react';
import PocketBase from 'pocketbase';
import { pb } from '../services/pocketbase';

const GiftList = () => {
    const [gifts, setGifts] = useState([]);
    const pb = new PocketBase('https://donaciones.pockethost.io');
    const getGenderEmoji = (gender) => {
        return gender === 'Masculino' ? '👦' : '👧';
      };

    useEffect(() => {
        const fetchGifts = async () => {
            try {
                // Fetch all records from the gifts collection
                const records = await pb.collection('gifts').getFullList();
                setGifts(records);
            } catch (error) {
                console.error('Error fetching gifts:', error);
            }
        };

        fetchGifts();
    }, []);

    return (
        <div className="gift-list bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">🎁 Lista de Regalos</h2>
          <ul className="gift-items space-y-3">
            {gifts.map((gift) => (
              <li key={gift.id} className="gift-item bg-gray-50 hover:bg-gray-100 
                                         rounded-lg p-4 transition-all duration-200 
                                         transform hover:scale-102 hover:shadow-md">
                <span className="gift-gender font-semibold flex items-center">
                  {getGenderEmoji(gift.Genero)} {gift.Genero}
                </span>
                <span className="gift-description flex items-center">
                  🎯 {gift.Juguete}
                </span>
              </li>
            ))}
          </ul>
        </div>
      );
    };

export default GiftList;