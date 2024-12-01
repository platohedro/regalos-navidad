import React, { useState } from 'react';

const GiftForm = ({ onGiftSubmit }) => {
    const [genero, setGenero] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onGiftSubmit({ Genero: genero, Juguete: descripcion });
        alert('¡Juguete registrado!'); // Add this line
        setGenero('');
        setDescripcion('');
    };

    return (
        <div className="form-container">
            <h2>Registrar Regalo</h2>
            <form onSubmit={handleSubmit}>
                <select value={genero} onChange={(e) => setGenero(e.target.value)} required>
                    <option value="">Seleccione Género</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                </select>
                <input
                    type="text"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    placeholder="Descripción del regalo"
                    required
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default GiftForm;