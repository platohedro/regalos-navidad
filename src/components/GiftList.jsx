import React, { useEffect, useState } from 'react';
import PocketBase from 'pocketbase';

const GiftList = () => {
    const [gifts, setGifts] = useState([]);
    const pb = new PocketBase('https://donaciones.pockethost.io');

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
        <div className="gift-list">
            <h2>Lista de Regalos</h2>
            <ul>
                {gifts.map((gift) => (
                    <li key={gift.id}>
                        <p>Género: {gift.Genero}</p>
                        <p>Descripción: {gift.Juguete}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GiftList;